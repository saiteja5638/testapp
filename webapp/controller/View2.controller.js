sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/f/library"
],
function (Controller,fioriLibary) {
    "use strict";
    var that;
    return Controller.extend("testapp.controller.View2", {
        onInit: function () {
             that = this;
             that.getUserInfo()
        },
        onPressNavToDetail: function () {
			this.getSplitContObj().to(this.createId("detailDetail"));
		},
        onPressNavToDetail123: function () {
			this.getSplitContObj().to(this.createId("page"));
		},
        getSplitContObj: function () {
			var result = this.byId("SplitContDemo");
			if (!result) {
				Log.error("SplitApp object can't be found");
			}
			return result;
		},
        getUserInfo:()=>{
            var oUserInfo = sap.ushell.Container.getService("UserInfo");
            var sUserId = oUserInfo.getId();
            var sUserFirstName = oUserInfo.getFirstName();
            var sUserLastName = oUserInfo.getLastName();
            var sEmail = oUserInfo.getEmail();

            console.log("User ID: ", sUserId);
            console.log("First Name: ", sUserFirstName);
            console.log("Last Name: ", sUserLastName);
            console.log("Email: ", sEmail);
        }
    });
});
