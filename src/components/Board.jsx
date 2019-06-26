import React, { useState, useEffect } from "react";

import List from "./List";
import { getBoard } from "../CardService";

const Board = () => {
    const [board, setboard] = useState(null);

    useEffect(() => {
        getBoard().then(resp => {
            setboard(resp);
        });
    }, []);

    return (
        // <div className="board">
        <div>
            {board && (
                <>
                    <h1 className="text-center">This is the board</h1>
                    <div className="board">
                        {board.map(list => (
                            <List key={list.id} cards={list} title={list.title} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Board;
