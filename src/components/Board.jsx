import React, { useState, useEffect } from "react";

import List from "./List";
import { getBoard, emptyBoard } from "../CardService";

const Board = () => {
    const [board, setboard] = useState(null);

    useEffect(() => {
        getBoard().then(resp => {
            setboard(resp);
        });
    }, [board]);

    return (
        // <div className="board">
        <div className="board-container">
            {board && (
                <>
                    <h1 className="text-center" style={{ marginTop: "0" }}>
                        This is the board
                    </h1>
                    <button
                        className="btn"
                        onClick={() => {
                            localStorage.clear();
                            window.location = ".";
                        }}
                    >
                        Reset the Board
                    </button>

                    {/* TODO: make this a promise */}
                    <button
                        className="btn"
                        onClick={() => {
                            localStorage.setItem(
                                "board",
                                JSON.stringify(emptyBoard)
                            );
                            window.location = ".";
                        }}
                    >
                        Clear the Board
                    </button>

                    <div className="board">
                        {board.map(list => (
                            <List
                                key={list.id}
                                cards={list.cards}
                                list={list}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Board;
