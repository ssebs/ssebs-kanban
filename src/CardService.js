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
            { id: 3, text: "test" },
            { id: 4, text: "fourth thing" },
            { id: 5, text: "blah" },
            { id: 6, text: "dfdsf" }
        ]
    },
    {
        id: 3,
        title: "col 3",
        cards: [
            { id: 7, text: "xsdfdsf" },
            { id: 8, text: "sfsdff" },
            { id: 9, text: "test3" }
        ]
    }
];

export const emptyBoard = [
    {
        id: 1,
        title: "Change me!",
        cards: [
            {
                id: 1,
                text: "..."
            }
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

export const resetBoard = resetType => {
    // resetType can be "default", or "empty"
    return new Promise((resolve, reject) => {
        if (resetType === "default") {
            localStorage.setItem("board", JSON.stringify(defaultBoard));
        } else if (resetType === "empty") {
            localStorage.setItem("board", JSON.stringify(emptyBoard));
        } else {
            reject({ Status: "Could not reset board" });
        }
        resolve({ Status: "Board reset" });
    });
};

export const updateBoard = updatedBoard => {
    return new Promise(resolve => {
        localStorage.setItem("board", JSON.stringify(updatedBoard));
        resolve({ Status: "Updated Board" });
    });
};

export const updateCard = updatedCard => {
    return new Promise((resolve, reject) => {
        let hasFoundCard = false;
        currentBoard = currentBoard.map(list => {
            const tmp = list.cards.map(card => {
                if (card.id === updatedCard.id) {
                    card = { ...updatedCard };
                    hasFoundCard = true;
                }
                return card;
            });
            return { ...list, cards: tmp };
        });
        if (hasFoundCard) {
            localStorage.setItem("board", JSON.stringify(currentBoard));
            resolve({ Status: "Updated Card" });
        } else {
            reject({ Status: "Could not update" });
        }
    });
};

export const updateList = updatedList => {
    return new Promise((resolve, reject) => {
        let hasFoundList = false;
        currentBoard = currentBoard.map(list => {
            if (list.id === updatedList.id) {
                list = { ...updatedList };
                hasFoundList = true;
            }
            return list;
        });
        if (hasFoundList) {
            localStorage.setItem("board", JSON.stringify(currentBoard));
            resolve({ Status: "Updated List" });
        } else {
            reject({ Status: "Could not update" });
        }
    });
};

export const getNextCardID = () => {
    return new Promise(resolve => {
        let newID = -1;
        currentBoard.forEach(list => {
            list.cards.forEach(card => {
                if (newID <= card.id) {
                    newID = card.id + 1;
                }
            });
        });
        resolve(newID);
    });
};

export const getNextListID = () => {
    return new Promise(resolve => {
        let newID = -1;
        currentBoard.forEach(list => {
            if (newID <= list.id) {
                newID = list.id + 1;
            }
        });
        resolve(newID);
    });
};
