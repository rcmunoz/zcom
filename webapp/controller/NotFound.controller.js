sap.ui.define([
		"comisiones/zcom/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("comisiones.zcom.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);