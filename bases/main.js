"use strict";
var Validations;
(function (Validations) {
    Validations.validateTest = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (myDate) => {
        return !isNaN(myDate.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateTest);
//# sourceMappingURL=main.js.map