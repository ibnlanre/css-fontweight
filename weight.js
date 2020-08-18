(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cssWeight = factory());
}(this, (function () { 'use strict';

    var _fontStretch = [
        "ultra-condensed",
        "extra-condensed",
        "semi-condensed",
        "condensed",
        "ultra-expanded",
        "extra-expanded",
        "semi-expanded",
        "expanded",
    ];
    var weightMap = {
        100: ["UltraThin"],
        150: ["ExtraThin"],
        200: ["Thin", "Hairline", "UltraLight"],
        250: ["ExtraLite", "ExtraLight"],
        300: ["Lite", "Light"],
        350: ["Book", "Demi"],
        375: ["Text"],
        400: ["Normal", "Regular"],
        425: ["Thick"],
        450: ["ExtraThick"],
        500: ["Dark", "Medium"],
        550: ["ExtraDark", "Semibold", "Demibold"],
        600: ["Bold"],
        650: ["ExtraBold"],
        700: ["UltraBold"],
        800: ["Black"],
        900: ["ExtraBlack", "Heavy"],
        999: ["UltraBlack", "Fat", "Poster"]
    };
    var openTypeMap = {
        100: ["Thin"],
        200: ["ExtraLight", "UltraLight"],
        300: ["Light"],
        400: ["Normal", "Regular"],
        500: ["Dark", "Medium"],
        600: ["DemiBold", "SemiBold"],
        700: ["Bold"],
        800: ["ExtraBold", "UltraBold"],
        900: ["Black", "Heavy"],
        950: ["ExtraBlack", "UltraBlack"]
    };
    var cssWeight = function (item, _a) {
        var MDN = (_a === void 0 ? { MDN: false } : _a).MDN;
        if (!item)
            return "missing query";
        if (typeof item !== "string")
            return "query must be a string";
        var transform = item
            .replace(/[^\w,]|_|\d/g, "")
            .split(",")
            .map(function (item) {
            var fontMap = Object.entries(MDN ? openTypeMap : weightMap);
            var style = (item.toLowerCase().match(/italic|oblique/gi) || [
                "normal",
            ])[0];
            var stretch = (function (item) {
                for (var _i = 0, _fontStretch_1 = _fontStretch; _i < _fontStretch_1.length; _i++) {
                    var name_1 = _fontStretch_1[_i];
                    if (new RegExp(name_1.split("-").join(""), "i").test(item))
                        return name_1.toLowerCase();
                }
            })(item) || "normal";
            var weight = fontMap
                .filter(function (pair) {
                return pair[1].some(function (value) { return new RegExp(value, "i").test(item); });
            })
                .map(function (each) { return +each[0]; });
            return {
                style: style,
                weight: weight.length ? Math.max.apply(Math, weight) : "normal",
                stretch: stretch
            };
        });
        return transform.length == 1 ? transform.pop() : transform;
    };
    cssWeight.weights = weightMap;
    cssWeight.openType = openTypeMap;

    return cssWeight;

})));
