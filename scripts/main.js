// Put your JavaScript here
(function (window) {
    'use strict';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let Checklist = App.CheckLIst;

    let myTruck = new Truck('12345', new DataStore());
    let checklist = new checklist(CheckLIST_SELECTOR);

    checklist.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    window.mytruck = myTruck;


    let formHandler = new  FormHandler(FORM_SELECTOR);
    FormHandler.addSumbitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checklist.addRow.call(checklist, data);
    });
})(window);

