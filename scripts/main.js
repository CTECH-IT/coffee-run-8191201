(function (window) {
    "use strict";

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;

    let myTruck = new Truck('12345', new DataStore());

    window.myTruck = myTruck;
})(window);