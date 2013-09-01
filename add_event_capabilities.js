(function(exports) {

    function addEventCapabilities(object) {

        object.listenersFor = {};

        object.on = function(eventName, callback) {
            if (!object.listenersFor[eventName]) {
                object.listenersFor[eventName] = [];
            }
            object.listenersFor[eventName].push(callback);
        };

        object.emit = function() {
            var args = Array.prototype.slice.call(arguments);
            var eventName = args.shift();
            var listeners = object.listenersFor[eventName] || [];

            for (var i = 0; i < listeners.length; i++) {
                try {
                    listeners[i].apply(object, args);
                } catch (e) {
                    console.error('Error on event ' + eventName);
                    throw (e);
                }
            };
        };

    };

    if (typeof define !== "undefined") {
        define(function() {
            return addEventCapabilities;
        });
    } else {
        exports.addEventCapabilities = addEventCapabilities;
    }

})(typeof exports === 'undefined' ? this : exports);
