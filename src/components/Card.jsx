import React from "react";

const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card-header">{data.id}</div>
            <p className="card-body">{data.text}</p>
        </div>
    );
};

export default Card;
