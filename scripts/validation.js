(function (window) {
    "use strict";

    let App = window.App || {};
    let Validation = {
        isCompanyEmail: function (email) {
            return /.+@isd535\.org$/.test(email);
        }
    };

    App.Validation = Validation;
    window.App = App;

})(window);