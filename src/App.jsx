import React from "react";

import Board from "./components/Board";

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright &copy;2019 Sebastian Safari</p>
            <a href="https://github/com/ssebs">GitHub</a>
        </div>
    );
};

function App() {
    return (
        <>
            <Board />
            <Footer />
        </>
    );
}

export default App;
