sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    var that;
    return Controller.extend("testapp.controller.View2", {
        onInit: function () {
             that = this;
        }
    });
});
