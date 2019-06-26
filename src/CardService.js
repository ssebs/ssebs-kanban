// CardService - helper file to handle card data between components

const defaultBoard = [
    {
        id: 1,
        title: "col 1",
        cards: [{ id: 1, text: "foo" }, { id: 2, text: "bar" }]
    },
    {
        id: 2,
        title: "col 2",
        cards: [
            { id: 1, text: "blah" },
            { id: 2, text: "dfdsf" },
            { id: 3, text: "test" },
            { id: 4, text: "fourth thing" }
        ]
    },
    {
        id: 3,
        title: "col 3",
        cards: [
            { id: 1, text: "xsdfdsf" },
            { id: 2, text: "sfsdff" },
            { id: 3, text: "test3" }
        ]
    }
];

let currentBoard = [];

export const getBoard = () => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem("board")) {
            currentBoard = JSON.parse(localStorage.getItem("board"));
        } else {
            currentBoard = defaultBoard;
            localStorage.setItem("board", JSON.stringify(defaultBoard));
        }
        resolve(currentBoard);
    });
};
