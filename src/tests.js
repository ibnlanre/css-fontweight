const decache = require("decache");
const expect = require("chai").expect;
const cssWeight = require("../weight");
const weights = cssWeight.weights;

describe("Weight", () => {
  let tests = [
    {
      style: "normal",
      weight: 200,
      stretch: "condensed",
    },
    { style: "italic", weight: "normal", stretch: "normal" },
    [
      { style: "oblique", weight: 999, stretch: "normal" },
      { style: "normal", weight: 350, stretch: "semi-expanded" },
    ],
  ];

  describe("#no_query", () => {
    it("should return missing query", () => {
      expect(cssWeight("")).to.be.a("string").that.equals("missing query")
    })
  })

  describe("#query_not_string", () => {
    it("should notify if query is not a string", () => {
      expect(cssWeight({ MDN: true })).to.equals("query must be a string")
    })
  })

  describe("#weight_value", () => {
    let test = weights[350];

    it("should return an array", () =>
      expect(test).to.have.instanceOf(Array)
    )

    it("should have all string properties", () =>
      test.forEach((item) => expect(item).to.be.a("string")));
  })

  describe("#filtering", () => {
    it("should filter out the font weight name embedded", () => {
      expect(cssWeight("--=HAIR9876LINE Condensed")).to.deep.equal(tests[0]);
    })
  })

  describe("#mdn_true", () => {
    let test = cssWeight("Italic Book", { MDN: true })

    it("should have a stringified weight property if unknown", () =>
      expect(test).to.have.property("weight").that.is.a("string")
    )

    it("should have a stretch property of normal", () =>
      expect(test).to.have.deep.property("stretch").that.is.string('normal')
    )

    it("should not give a numeric value for weight property", () =>
      expect(test).to.deep.equal(tests[1])
    )
  })

  describe("#multiple_values", () => {
    let test = cssWeight("Oblique Poster, Semi_Expanded Demi");

    it("should return an array", () =>
      expect(test).to.be.a('array')
    )

    it("should have a length of 2", () =>
      expect(test).to.have.lengthOf(2, "no, it doesn't")
    )
  })
})

decache("../weight");