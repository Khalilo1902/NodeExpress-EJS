"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 4115;
app.get('/', function (req, res) {
    res.send("\n<html>\n\t<head>\n\t\t<title>Info Site</title>\n\t</head>\n\t<body>\n\t\t<h1>Info Site</h1>\n\t\t<p>Welcome to this site.</p>\n\t</body>\n</html>\n\t");
});
app.listen(port, function () {
    console.log("Listening at http://localhost:".concat(port));
});
//# sourceMappingURL=server.js.map