var MyDBClick = (function () {

    var ponclick,pondbclick,ptime,ptimer;

    function MyDBClick(onclick,ondbclick,time) {
        var intRegex = /^\d+$/;
        ponclick = onclick;
        pondbclick = ondbclick;
        ptime = (intRegex.test(time))?time:250;
    }

    MyDBClick.prototype.click = function(e)
    {
        if (ptimer) clearTimeout(ptimer);
        ptimer = setTimeout(function() {ponclick(e); }, ptime);
    };

    MyDBClick.prototype.dbclick = function(e)
    {
        clearTimeout(ptimer);
        pondbclick(e);
    };

    MyDBClick.prototype.setObject = function (obj) {
        obj.click(this.click);
        obj.dblclick(this.dbclick)
    };

    return MyDBClick;
})();