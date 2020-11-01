module.exports = {
    MessageHandle: require('./messageHandle.js'),
    Handler: class Handler {
        constructor(handles) {
            this._handles = handles;
        }
    
        handle(command, message) {
            if (!command || !message) {
                return;
            }
    
            let args = command.split(/\W+/);
            let id = args.shift();
    
            if (this._handles[id]) {
                return this._handles[id].func(args, message);
            } 
        }
    }
};