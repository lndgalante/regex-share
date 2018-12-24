"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isValidRegex = (string) => {
    let isValid = true;
    try {
        new RegExp(string);
    }
    catch (error) {
        isValid = false;
    }
    return isValid;
};
exports.default = { isValidRegex };
//# sourceMappingURL=utils.js.map