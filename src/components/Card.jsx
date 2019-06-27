import React, { useState } from "react";

import { updateCard } from "../CardService";

const Card = props => {
    const [card, setCard] = useState(props.data);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = e => {
        setCard({ ...card, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setIsEditing(false);
        updateCard(card).then(resp => {
            console.log(resp);
        });
    };

    const { provided, innerRef } = props;

    return (
        <div
            className="card"
            onDoubleClick={() => setIsEditing(true)}
            onBlur={() => handleSubmit()}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={innerRef}
        >
            {isEditing ? (
                <input
                    type="text"
                    name="text"
                    autoFocus
                    value={card.text}
                    onChange={handleChange}
                    onKeyPress={e => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />
            ) : (
                <>
                    <div className="card-header">{props.data.id}</div>
                    <p className="card-body">{props.data.text}</p>
                </>
            )}
        </div>
    );
};

export default Card;
