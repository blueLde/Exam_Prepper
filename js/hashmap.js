//********************************//
// Map implementation             //
// Copyright Joshua Schnabel 2013 //
//********************************//
var MyMap = (function () {

    var obj;

    function MyMap() {
        obj = new Object();
    }

    MyMap.prototype.set = function (key,value) {
        obj[key] = value;
    };

    MyMap.prototype.delete = function (key) {
        delete obj[key];
    };

    MyMap.prototype.hasKey = function (key) {
        return (key in obj);
    };

    MyMap.prototype.get = function (key) {
        return obj[key];
    };

    MyMap.prototype.size = function () {
        return Object.keys(obj).length;
    };

    MyMap.prototype.getValueString = function () {
        var r = "";
        for (var key in obj)
        {
            r += " "+key+" => "+this.get(key)+";"
        }
        return r;
    };

    return MyMap;
})();