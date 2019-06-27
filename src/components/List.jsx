import React, { useState } from "react";

import Card from "./Card";
import { updateList, getNextCardID } from "../CardService";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = props => {
    const [list, setList] = useState(props.list);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = () => {
        setIsEditing(false);
        updateList(list)
            .then(resp => {
                console.log(resp);
            })
            .catch(resp => console.error(resp));
    };

    // process the change
    const reorder = (tmpList, oldIndex, newIndex) => {
        // arr.splice(index, how_many_remove, [item_to_add_at_index])
        const result = Array.from(tmpList); // copy original list
        const [item] = result.splice(oldIndex, 1); // remove 1 item from old position
        result.splice(newIndex, 0, item); // add new item to new position
        return result;
    };

    const handleDragEnd = result => {
        if (!result.destination) {
            return;
        }
        // console.log(result);
        const cardID = result.draggableId;
        let oldIndx = -1;
        for (let i = 0; i < list.cards.length; i++) {
            if (list.cards[i].id === cardID) {
                oldIndx = i;
            }
        }
        const newIndx = result.destination.index;
        const newList = {
            ...list,
            cards: reorder(list.cards, oldIndx, newIndx)
        };

        setList(newList);
        updateList(newList)
            .then(resp => {
                console.log(resp);
            })
            .catch(resp => console.error(resp));
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="list">
                {/* title */}
                {isEditing ? (
                    <input
                        type="text"
                        name="title"
                        autoFocus
                        value={list.title}
                        onChange={e =>
                            setList({
                                ...list,
                                [e.target.name]: e.target.value
                            })
                        }
                        onBlur={() => handleSubmit()}
                        onKeyPress={e => {
                            if (e.key === "Enter") handleSubmit();
                        }}
                    />
                ) : (
                    <p
                        className="list-title"
                        onClick={() => setIsEditing(true)}
                    >
                        {list.title}
                    </p>
                )}
                {/* List of Cards */}
                <Droppable droppableId="droppable">
                    {provided => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {props.cards.map(card => (
                                <Draggable
                                    key={card.id}
                                    draggableId={card.id}
                                    index={0}
                                >
                                    {provided => (
                                        <Card
                                            key={card.id}
                                            data={card}
                                            innerRef={provided.innerRef}
                                            provided={provided}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                {/* Add Card */}
                <button
                    className="btn add-card"
                    onClick={() => {
                        getNextCardID().then(resp => {
                            const newCards = [
                                ...props.cards,
                                {
                                    id: resp,
                                    text: "..."
                                }
                            ];
                            setList({ ...list, cards: newCards });
                            updateList({ ...list, cards: newCards }).then(
                                resp => {
                                    console.log(resp);
                                }
                            );
                        });
                    }}
                >
                    Add a new Card
                </button>
            </div>
        </DragDropContext>
    );
};

export default List;
