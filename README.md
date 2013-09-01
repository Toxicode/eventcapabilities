# Add event capabilities

* Add event capabilities to a Javascript Object

* AMD Support (RequireJS / NodeJS)

## Usage

```javascript
    // Initialize
    var myObject = {};
    addEventCapabilities(myObject);
    
    
    // Register event
    myObject.on('my custom event', function(value1, value2 /*, .... */) {
        // ...
    });
    
    // Fire event
    myObject.emit('my custom event', 15, { hello: "world" });
```
