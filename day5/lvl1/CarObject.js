let CarObject = {
    brand: "ford",
    model: "F",
    year: "2026",

    showInfo: function () {
        console.log("This car is a " + this.brand + " " + this.model);
    }
};

CarObject.showInfo();
