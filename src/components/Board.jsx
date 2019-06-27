import React, { useState, useEffect } from "react";

import List from "./List";
import {
    getBoard,
    resetBoard,
    getNextCardID,
    getNextListID,
    updateBoard
} from "../CardService";

const Board = () => {
    const [board, setboard] = useState(null);

    useEffect(() => {
        getBoard().then(resp => {
            setboard(resp);
        });
    }, [board]);

    return (
        <div className="board-container">
            {board && (
                <>
                    {/* Header */}
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
                    {/* Board of Lists */}
                    <div className="board">
                        {board.map(list => (
                            <List
                                key={list.id}
                                cards={list.cards}
                                list={list}
                            />
                        ))}
                    </div>
                    {/* Add List */}
                    <button
                        className="btn add-card"
                        onClick={() => {
                            getNextCardID().then(cardID => {
                                getNextListID().then(listID => {
                                    const newList = {
                                        id: listID,
                                        title: "Change me!",
                                        cards: [
                                            {
                                                id: cardID,
                                                text: "..."
                                            }
                                        ]
                                    };
                                    updateBoard([...board, newList]).then(
                                        resp => {
                                            console.log(resp);
                                        }
                                    );
                                });
                            });
                        }}
                    >
                        Add a List
                    </button>
                </>
            )}
        </div>
    );
};

export default Board;
