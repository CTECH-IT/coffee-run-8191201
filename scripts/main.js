(function (window) {
    "use strict";

    const FORM_SELECTOR = '[data-coffee-order="form"]';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;

    let myTruck = new Truck('12345', new DataStore());

    window.myTruck = myTruck;

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
})(window);