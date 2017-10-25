//object that needs work
function Controller() {
    this.shipNames = ["Carrier", "Cruiser", "Battleship", "Submarine", "Destroyer"];
}

Controller.prototype.shipLocation = function () {
    var shipDetail = document.getElementById("shipDetail");

    for (var ship in this.shipNames) {
        shipDetail.innerHTML += this.shipNames[ship];
    }
};

function mouseClick (x, y) {
    console.log(x, y);
};

function main() {
    var model = new Board();
    var controller = new Controller();
    controller.shipLocation();
}

window.onload = main;