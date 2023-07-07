"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
const addNewUser_1 = require("../controller/addNewUser");
const router = express_1.default.Router();
exports.postRouter = router;
router.post('/', (req, res) => {
    console.log(req.body, 'body');
    const new_data = req.body;
    (0, addNewUser_1.newUser)(new_data, req, res);
});
//# sourceMappingURL=post.js.map