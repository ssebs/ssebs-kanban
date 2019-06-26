import React from "react";

import Board from "./components/Board";

function App() {
    return (
        <>
            <Board />
            <hr />
            <p style={{ marginTop: "3rem" }}>Board has a list of cards. e.g.</p>
            <ul>
                <li>Board</li>
                <ul>
                    <li>
                        List 1
                        <ul>
                            <li>Card 1</li>
                            <li>Card 2</li>
                        </ul>
                    </li>
                    <li>
                        List 2
                        <ul>
                            <li>Card 3</li>
                            <li>Card 4</li>
                        </ul>
                    </li>
                    <li>
                        List 3
                        <ul>
                            <li>Card 5</li>
                            <li>Card 6</li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    );
}

export default App;
