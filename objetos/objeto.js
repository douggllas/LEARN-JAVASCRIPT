
const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLenght: {
        left: 26,
        right: 26,
    },
},
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
updateBackpack(`Lid status changed.`);
},
    newStrapLenght: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengLeft;
    this.strapLenght.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
   },
};


const markup = (backpack) => {
    return `
    <div>
    <h3>${backpack.name}</h3>
    <ul>
    <li>Volume: </li>
    <li>Color: </li>
    <li>Number of pockets: </li>
    <li>Strap lengts: L: ${backpack.strapLength}, R:${backpack.strapLenght.right
        }</li>
    <li>Top lid:${backpack.lidOpen ? "Open" : "Closed"}</li>
    </ul>
    </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(backpack);
document.body.appendChild(main);




