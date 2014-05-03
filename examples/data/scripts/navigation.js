uzbl.navigation = (function () {
'use strict';

var trySelectors = function (selectors) {
    var elem;
    var i;
    for (i = 0; i < selectors.length; ++i) {
        elem = document.querySelector(selectors[i]);
        if (elem !== null) {
            return elem;
        }
    }
    return undefined;
};

var nextAnchor = function () {
    return trySelectors(
      [ 'a[rel="next"]'
      , 'link[rel="next"]'
      ]
    );
};

var prevAnchor = function () {
    return trySelectors(
      [ 'a[rel="prev"]'
      , 'link[rel="prev"]'
      ]
    );
};

return {
    next: function () {
        var anchor = nextAnchor();
        if (typeof anchor !== 'undefined') {
            return anchor.href;
        }

        return "";
    },
    prev: function () {
        var anchor = prevAnchor();
        if (typeof anchor !== 'undefined') {
            return anchor.href;
        }

        return "";
    }
};
}());
