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
            view3:()=>{
                var oView = this.oView.getParent().getParent();
                oView.setLayout(fioriLibary.LayoutType.ThreeColumnsMidExpanded);
            },
            onSearchResult:function()
            {
                 let getList = that.byId("_IDGenList1")
                 let get_searchText = that.byId("_IDGenSearchField1").getValue();
                 let oBindings = getList.getBinding("items");

                 let aFilters = []
                 let plantname = new sap.ui.model.Filter('PLANT_NAME',sap.ui.model.FilterOperator.Contains,get_searchText)
                 let revenu = new sap.ui.model.Filter('PLANT_REVENUE',sap.ui.model.FilterOperator.Contains,get_searchText)

              

                    aFilters = new sap.ui.model.Filter({
                        filters: [plantname,revenu],
                        and: false  // false means OR condition
                    });

                    oBindings.filter(aFilters)

                
                

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
