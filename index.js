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
      900: ["ExtraBlack", "ExtraBold", "Heavy"],
      999: ["UltraBlack", "UltraBold", "Fat", "Poster"],
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
    const cssWeight = (item, { MDN } = { MDN: false }) => {
      if (!item) return "missing query";
      if (typeof item !== "string") return "missing query";
      let transform = item
        .replace(/(^[,\s]+)|(\d)|[^\w,]|([,\s]+$)/g, "")
        .split(",")
        .map((item) => {
          let style = item.toLowerCase().match(/italic|oblique/gi) || [
            "normal",
          ];
          item = item.replace(style[0], "") || "regular";
          const map = Object.entries(MDN ? openTypeMap : weightMap);
          for (const [weight, name] of map) {
            if (name.some((value) => new RegExp(value, "i").test(item)))
              return { style: style.pop(), weight: +weight };
          }
          return { style: "normal", weight: "normal" };
        });
      return transform.length == 1 ? transform.pop() : transform;
      // return `Not in ${MDN ? "the OpenType" : "any"} specification`
    };
    exports = module.exports = cssWeight;
    exports.openType = openTypeMap;
    exports.weights = weightMap;
  });

  return weight_1;
});
