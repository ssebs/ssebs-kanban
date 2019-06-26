import React, { useState } from "react";

import { updateCard } from "../CardService";

const Card = ({ data }) => {
    const [card, setCard] = useState(data);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = e => {
        setCard({ ...card, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(card);
        updateCard(card)
            .then(resp => {
                console.log(resp);
                // alert(resp);
            })
            .catch(resp => console.error(resp));
    };

    return (
        <div
            className="card"
            onClick={() => setIsEditing(true)}
            onBlur={() => {
                handleSubmit();
                setIsEditing(false);
            }}
        >
            {isEditing ? (
                <input
                    type="text"
                    name="text"
                    autoFocus
                    value={card.text}
                    onChange={handleChange}
                />
            ) : (
                <>
                    <div className="card-header">{data.id}</div>
                    <p className="card-body">{data.text}</p>
                </>
            )}
        </div>
    );
};

export default Card;
