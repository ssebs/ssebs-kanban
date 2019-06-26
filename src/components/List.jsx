import React from 'react'

import Card from "./Card"

const List = ({cards, title}) => {
    return (
        <div className="list">
            <p className="list-title">{title}</p>
            {
                cards.cards.map(card => (
                    <Card key={card.id} data={card} />
                ))
            }
        </div>
    )
}

export default List
