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
                        ssebs-kanban
                    </h1>
                    <h4 className="text-center"
                    style={{color:"var(--font-lighter)"}}>
                        This is a simple Kanban style board, it is a work in progress at the moment.
                    </h4>
                    <div className="btn-group">
                        <button
                            className="btn"
                            onClick={() => {
                                if (!window.confirm("Are you sure?")) return;
                                resetBoard("default").then(resp =>
                                    console.log(resp)
                                );
                            }}
                        >
                            Reset the Board to the sample data
                        </button>{" "}
                        <button
                            className="btn"
                            onClick={() => {
                                if (!window.confirm("Are you sure?")) return;
                                resetBoard("empty").then(resp =>
                                    console.log(resp)
                                );
                            }}
                        >
                            Clear the Board
                        </button>
                    </div>
                    <hr />
                    <button
                        className="btn"
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
                        Add a Column
                    </button>
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
                </>
            )}
        </div>
    );
};

export default Board;
