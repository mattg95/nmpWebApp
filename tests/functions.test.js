const { motivationHandler } = require("../emailGenerator/responseHandlers.js");
const { questionKeys } = require("../emailGenerator/keys.js");

describe("emailGeneratorFuncs", () => {
  let covidResponse;
  before(async function () {
    let {
      answers,
      definition: { fields },
    } = nonToryMpCovidResponse.form_response;
    covidResponse = await motivationHandler(
      questionKeys.motivation,
      fields,
      answers
    );
  });
  it("should return synonyms for a 'Covid' motivations choice", () => {
    const regex = /covid|pandemic|poverty/gi;
    expect(regex.test(covidResponse)).to.be.true;
  });
  before(async function () {
    let {
      answers,
      definition: { fields },
    } = nonValidPostcodeBritainSecurityResearchResponse.form_response;
    researchResponse = await motivationHandler(
      questionKeys.motivation,
      fields,
      answers
    );
  });
  it("should return synonyms for a 'research' motivations choice", () => {
    const regex = /research/gi;
    expect(regex.test(researchResponse)).to.be.true;
  });
  before(async function () {
    let {
      answers,
      definition: { fields },
    } = allToryResult.form_response;
    yemenResponse = await motivationHandler(
      questionKeys.motivation,
      fields,
      answers
    );
  });
  it("should return synonyms for a 'Yemen' motivations choice", () => {
    const regex = /yemen/gi;
    expect(regex.test(yemenResponse)).to.be.true;
  });
});
