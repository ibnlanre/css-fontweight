(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.cssWeight = factory()));
})(this, function () {
  "use strict";

  function createCommonjsModule(fn, basedir, module) {
    return (
      (module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
          return commonjsRequire(
            path,
            base === undefined || base === null ? module.path : base
          );
        },
      }),
      fn(module, module.exports),
      module.exports
    );
  }

  function commonjsRequire() {
    throw new Error(
      "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
    );
  }

  var weight_1 = createCommonjsModule(function (module, exports) {
    const weightMap = {
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
      999: ["UltraBlack", "Fat", "Poster"],
    };
    const openTypeMap = {
      100: ["Thin"],
      200: ["ExtraLight", "UltraLight"],
      300: ["Light"],
      400: ["Normal", "Regular"],
      500: ["Dark", "Medium"],
      600: ["DemiBold", "SemiBold"],
      700: ["Bold"],
      800: ["ExtraBold", "UltraBold"],
      900: ["Black", "Heavy"],
      950: ["ExtraBlack", "UltraBlack"],
    };
    const fontStretch = [
      "ultra-condensed",
      "extra-condensed",
      "semi-condensed",
      "condensed",
      "ultra-expanded",
      "extra-expanded",
      "semi-expanded",
      "expanded",
    ];
    const cssWeight = (item, { MDN } = { MDN: false }) => {
      if (!item) return "missing query";
      if (typeof item !== "string") return "query must be a string";
      let transform = item
        .replace(/[^\w,]|_|\d/g, "")
        .split(",")
        .map((item) => {
          const fontMap = Object.entries(MDN ? openTypeMap : weightMap);
          const style = (item.toLowerCase().match(/italic|oblique/gi) || [
            "normal",
          ])[0];
          const stretch =
            ((item) => {
              for (const name of fontStretch)
                if (new RegExp(name.split("-").join(""), "i").test(item))
                  return name.toLowerCase();
            })(item) || "normal";
          const weight = fontMap
            .filter((pair) =>
              pair[1].some((value) => new RegExp(value, "i").test(item))
            )
            .map((each) => each[0]);
          return {
            style,
            weight: weight.length ? Math.max(...weight) : "normal",
            stretch,
          };
        });
      return transform.length == 1 ? transform.pop() : transform;
    };
    exports = module.exports = cssWeight;
    exports.openType = openTypeMap;
    exports.weights = weightMap;
  });

  return weight_1;
});
