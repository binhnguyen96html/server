"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n      <form method='POST'>\n        <div>\n          <label>Email</label>\n          <input name='email'/>\n        </div>\n\n        <div>\n        <label>Password</label>\n        <input name='password' type='password'/>\n      </div>\n\n      <button>Submit</button>\n      </form>\n    ");
});
