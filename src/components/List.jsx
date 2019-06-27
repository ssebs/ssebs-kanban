import React, { useState } from "react";

import Card from "./Card";
import { updateList, getNextCardID } from "../CardService";

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

    return (
        <div className="list">
            {/* title */}
            {isEditing ? (
                <input
                    type="text"
                    name="title"
                    autoFocus
                    value={list.title}
                    onChange={e =>
                        setList({ ...list, [e.target.name]: e.target.value })
                    }
                    onBlur={() => handleSubmit()}
                    onKeyPress={e => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />
            ) : (
                <p className="list-title" onClick={() => setIsEditing(true)}>
                    {list.title}
                </p>
            )}
            {/* cards */}
            {props.cards.map(card => (
                <Card key={card.id} data={card} />
            ))}
            <button
                className="btn add-card"
                onClick={e => {
                    getNextCardID().then(resp => {
                        const newCards = [
                            ...props.cards,
                            {
                                id: resp,
                                text: ""
                            }
                        ];
                        setList({ ...list, cards: newCards });
                        updateList({ ...list, cards: newCards }).then(resp => {
                            // console.log(resp);
                        });
                    });
                }}
            >
                Add a new Card
            </button>
        </div>
    );
};

export default List;
