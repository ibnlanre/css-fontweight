# CSS-FONTWEIGHT

A utility to convert font weight names to values

## Installation

### Local

```markdown
npm install @ibnlanre/css-weight
```

### Global

```markdown
npm install -g @ibnlanre/css-weight
```

## API

```html
<!-- as a script -->

<script src="/node_modules/@ibnlanre/css-weight"></script>
```

```javascript
// with commonjs

const cssWeight = require("cssWeight");
cssWeight("--=HAIR9876LINE") // { style: 'normal', weight: 200 }
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
| 900 | ExtraBlack, ExtraBold, Heavy |
| 999 | UltraBlack, UltraBold, Fat, Poster |

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

```markdown
Acceptable Values include:
Semi Bold, semi bold, semi-bold, semi_bold
```

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- [Microsoft](https://docs.microsoft.com/en-us/dotnet/api/system.windows.fontweights?view=netframework-4.8)
- [HTMLDog](https://htmldog.com/references/css/properties/font-weight%20/)
- [Lukasz Grolik](https://gist.github.com/lukaszgrolik/5849599)

## Acknowledgements

`fontweight` was inspired by [`dan-gamble/postcss-font-weight-names`](https://github.com/dan-gamble/postcss-font-weight-names)
