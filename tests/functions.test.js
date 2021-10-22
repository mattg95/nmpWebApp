const {
  motivationHandler,
  religionHandler,
} = require("../emailGenerator/responseHandlers.js");
const { questionKeys } = require("../emailGenerator/keys.js");
const nonToryResponse = require("./mockTypeformResponses/NotTory.json");
const jewishResponse = require("./mockTypeformResponses/Jewish.json");

describe("emailGeneratorFuncs", () => {
  describe("motivationHandler", () => {
    let functionResponse;
    before(async function () {
      let {
        answers,
        definition: { fields },
      } = nonToryResponse.form_response;
      functionResponse = await motivationHandler(
        questionKeys.motivation,
        fields,
        answers
      );
    });
    it("should return synonyms for a 'Wealthy countries should support...' motivations choice", () => {
      const regex = /moral duty|ethical obligation/gi;
      expect(regex.test(functionResponse)).to.be.true;
    });
  });
  describe("countryLinksHandler", () => {});
  describe("religionHandler", () => {
    let functionResponse;
    before(async function () {
      let {
        answers,
        definition: { fields },
      } = jewishResponse.form_response;
      functionResponse = await religionHandler(
        questionKeys.religion,
        fields,
        answers
      );
    });
    it("should return reference to a religion when one is picked", () => {
      const regex = /jew/gi;
      expect(regex.test(functionResponse)).to.be.true;
    });
  });
});
