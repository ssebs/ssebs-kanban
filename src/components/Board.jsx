import React, { useState, useEffect } from "react";

import List from "./List";
import { getBoard, resetBoard } from "../CardService";

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
                    <div className="btn-group">
                        <button
                            className="btn"
                            onClick={() => {
                                if (!window.confirm("Are you sure?")) return;

                                resetBoard("default").then(
                                    resp => (window.location = ".")
                                );
                            }}
                        >
                            Reset the Board
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                if (!window.confirm("Are you sure?")) return;
                                resetBoard("empty").then(
                                    resp => (window.location = ".")
                                );
                            }}
                        >
                            Clear the Board
                        </button>
                    </div>
                    <hr />
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
