"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = void 0;
const schema_1 = require("../models/schema");
const updateUserData = (updateData, id, req, res) => {
    const person = schema_1.details.find((account) => account.id === id);
    const index = schema_1.details.indexOf(person);
    console.log(person);
    console.log(index);
    const updatedAccount = Object.assign(Object.assign({}, person), updateData);
    console.log(updatedAccount);
    schema_1.details[index] = updatedAccount;
    res.json({ details: schema_1.details });
};
exports.updateUserData = updateUserData;
//# sourceMappingURL=updateData.js.map