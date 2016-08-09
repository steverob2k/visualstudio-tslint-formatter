"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require("tslint/lib/lint");
var Formatter = (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        _super.apply(this, arguments);
    }
    Formatter.prototype.format = function (failures) {
        return failures.map(this.formatFailure).join("\n") + "\n \n";
    };
    Formatter.prototype.formatFailure = function (failure) {
        var filePath = (failure.getFileName()).toString().replace(/\//g, "\\");
        var lineCharNos = failure.getStartPosition().getLineAndCharacter();
        var lineNo = lineCharNos.line;
        var characterNo = lineCharNos.character;
        var message = failure.getFailure();
        var ruleName = failure.getRuleName();
        return filePath + "(" + (lineNo + 1) + "," + (characterNo + 1) + "): warning " + ruleName + ": " + message;
    };
    return Formatter;
}(Lint.Formatters.AbstractFormatter));
exports.Formatter = Formatter;
