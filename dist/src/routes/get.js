"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_details = void 0;
const schema_1 = require("../models/schema");
const user_details = (req, res) => {
    res.status(200).json({ statusCode: '200', status: 'Success', details: schema_1.details });
};
exports.user_details = user_details;
//# sourceMappingURL=get.js.map