module.exports = class MessageHandle {
    constructor(func, description) {
        this._func = func;
        this._description = description;
    }

    get func() {
        return this._func;
    }

    get description() {
        return this._description;
    }
}