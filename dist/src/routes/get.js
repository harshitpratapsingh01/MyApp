"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schema_1 = require("../models/schema");
const router = express_1.default.Router();
router.get('/:id', (req, res) => {
    try {
        const id = Number(req.params.id);
        const user = schema_1.details.find((find_id) => find_id.id === id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(500).json({ statusCode: '500', status: "User Not Found" });
        }
        // res.json(details);
        // console.log(req);
    }
    catch (_a) {
        res.status(500).send("Server error");
    }
});
exports.default = router;
//# sourceMappingURL=get.js.map