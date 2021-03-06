# CSS-Font-Weight

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)
![version](https://img.shields.io/badge/version-1.1.0-blue)
[![Twitter](https://img.shields.io/twitter/follow/ibnlanre?style=social&label=Follow)](https://twitter.com/intent/follow?screen_name=ibnlanre)

A utility to convert font weight names into number values

```markdown
Acceptable values include:
    EXTRABOLD, Extra Bold, extra bold, extra-bold, extra_bold
```

## Installation

### Local

```markdown
npm install @ibnlanre/css-weight
```

## API

### Script tags

```javascript
<script src="./node_modules/@ibnlanre/weight.js" type="module"></script>
```

### ES6

```javascript
import cssWeight from "./node_modules/@ibnlanre/weight.js"
import { openType } from cssWeight
import { weights } from cssWeight
```

### CommonJS

```javascript
const cssWeight = require("@ibnlanre/css-weight");
const openType = cssWeight.openType;
```

### Reference

```javascript
openType[300] //-> [ 'Light' ]
cssWeight.weights[350] //-> [ 'Book', 'Demi' ]
```

### Single Arguments

```javascript
cssWeight(""); //-> "missing query"
cssWeight({ MDN: true }); //-> "query must be a string"
cssWeight("--=HAIR9876LINE Condensed");
//-> { style: 'normal', weight: 200, stretch: 'condensed' }
cssWeight("Italic Book", { MDN: true });
//-> { style: 'italic', weight: 'normal', stretch: 'normal' }
```

### Multiple Arguments

```javascript
cssWeight("Oblique Poster, Semi_Expanded Demi");
// returns
// [
//   { style: 'oblique', weight: 999, stretch: 'normal' },
//   { style: 'normal', weight: 350, stretch: 'semi-expanded' }
// ]
```

## Default Weights

|Value| Description |
|:--- |:---|
| 100 | UltraThin |
| 150 | ExtraThin |
| 200 | Thin, Hairline, UltraLight |
| 250 | ExtraLite, ExtraLight |
| 300 | Lite, Light |
| 350 | Book, Demi |
| 375 | Text |
| 400 | Normal, Regular |
| 425 | Thick |
| 450 | Extra Thick |
| 500 | Dark, Medium |
| 550 | ExtraDark, Semibold, Demibold |
| 600 | Bold |
| 650 | ExtraBold |
| 700 | UltraBold |
| 800 | Black |
| 900 | ExtraBlack, Heavy |
| 999 | UltraBlack, Fat, Poster |

## OpenType Weights

To use the font weight definition in the OpenType specification, which is the same shown on MDN, use the option `{ MDN: true }`

|Value| Description |
|:--- |:---|
| 100 | Thin |
| 200 | ExtraLight, UltraLight |
| 300 | Light |
| 400 | Normal, Regular |
| 500 | Dark, Medium |
| 600 | DemiBold, SemiBold |
| 700 | Bold |
| 800 | ExtraBold, UltraBold |
| 900 | Black, Heavy |
| 950 | ExtraBlack, UltraBlack |

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8)
- [HTMLDog](https://htmldog.com/references/css/properties/font-weight%20/)
- [Lukasz Grolik](https://gist.github.com/lukaszgrolik/5849599)

## Acknowledgements

`CSS-Font-Weight` was inspired by [`dan-gamble/postcss-font-weight-names`](https://github.com/dan-gamble/postcss-font-weight-names)
