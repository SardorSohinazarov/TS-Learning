"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cordinate = void 0;
var Cordinate = /** @class */ (function () {
    function Cordinate(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Cordinate.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0 || value > 90)
                throw new Error("Qales toy bola");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cordinate.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0 || value > 90)
                throw new Error("Geografiya vashshe o'qimaganmisiz");
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Cordinate.prototype.print = function () {
        console.log(this._x + ' ' + this._y);
    };
    return Cordinate;
}());
exports.Cordinate = Cordinate;
