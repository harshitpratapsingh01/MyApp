"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const schema_1 = require("../models/schema");
const validator_1 = __importDefault(require("validator"));
const newUser = (new_data, req, res) => {
    try {
        if (Object.keys(new_data).length >= 2) {
            console.log(Object.keys(new_data).length);
            if (new_data.id != null && new_data.username != null && new_data.email != null) {
                if (validator_1.default.isEmail(new_data.email)) {
                    schema_1.details.push(new_data);
                    res.status(200).json({ statusCode: '200', status: "Success", details: schema_1.details });
                }
                else {
                    res.status(406).json({ statusCode: '406', status: "Please ender valid email" });
                }
            }
            else {
                res.status(406).json({ statusCode: '406', status: "Not Acceptable" });
            }
        }
        else {
            res.status(406).json({ statusCode: '406', status: "Please ender valid email" });
        }
    }
    catch (_a) {
        res.status(400).json({ statusCode: '400', status: 'Bad Request' });
    }
};
exports.newUser = newUser;
//# sourceMappingURL=addNewUser.js.map