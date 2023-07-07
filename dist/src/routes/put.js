"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRouter = void 0;
const express_1 = __importDefault(require("express"));
const updateData_1 = require("../controller/updateData");
const router = express_1.default.Router();
exports.putRouter = router;
router.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const update_data = req.body;
    (0, updateData_1.updateUserData)(update_data, id, req, res);
});
//# sourceMappingURL=put.js.map