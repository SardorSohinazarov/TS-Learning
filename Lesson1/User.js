"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, age, fullname) {
        if (id === void 0) { id = 1; }
        if (fullname === void 0) { fullname = "Sardor"; }
        this._id = id;
        this._age = age;
        this._fullname = fullname;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._fullname;
        },
        set: function (value) {
            this._fullname = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.toString = function () {
        return this._id + this._age + this._fullname;
    };
    return User;
}());
exports.User = User;
