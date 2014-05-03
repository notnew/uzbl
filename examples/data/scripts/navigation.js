// @cbind gn = js page string uzbl.navigation.next()
// @cbind gp = js page string uzbl.navigation.prev()

uzbl.navigation = (function () {
'use strict';

var nextAnchor = function () {
    var elements = getElementsBySelector('a[rel="next"]');
    if (elements.length) {
        return elements[0];
    } else {
        return undefined;
    }
};

var prevAnchor = function () {
    var elements = getElementsBySelector('a[rel="prev"]');
    if (elements.length) {
        return elements[0];
    } else {
        return undefined;
    }
};

return {
    next: function () {
        var anchor = nextAnchor();
        if (typeof anchor !== 'undefined') {
            anchor.click();
        }
    },
    prev: function () {
        var anchor = prevAnchor();
        if (typeof anchor !== 'undefined') {
            anchor.click();
        }
    }
};
}());
