sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
],
    function (Controller,fioriLibary) {
        "use strict";
        var that;
        return Controller.extend("testapp.controller.View1", {
            onInit: function () {
                that = this;
                
            },
            formatNumber: function(value) {
                if (value >= 1000000000) {
                    return (value / 1000000000).toFixed(1) + "B";
                } else if (value >= 1000000) {
                    return (value / 1000000).toFixed(1) + "M";
                } else if (value >= 1000) {
                    return (value / 1000).toFixed(1) + "K";
                } else {
                    return value;
                }
            }
        });
    });
