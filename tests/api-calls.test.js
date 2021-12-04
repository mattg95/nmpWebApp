const { expect } = require("chai");

const { getMpByPostcode } = require("../api-calls");

describe("/api/postcode", () => {
  it("should return expected MP details for DL6 2NJ", async () => {
    result = await getMpByPostcode("DL6 2NJ");
    expect(result.full_name).to.equal("Rishi Sunak");
    expect(result.constituency).to.equal("Richmond (Yorks)");
    expect(result.party).to.equal("Conservative");
    expect(result.mpEmailAddress).to.equal("rishi.sunak.mp@parliament.uk");
  });
  it("should return expected MP details for s6 2PN", async () => {
    result = await getMpByPostcode("s6 2pn");
    expect(result.full_name).to.equal("Paul Blomfield");
    expect(result.constituency).to.equal("Sheffield Central");
    expect(result.party).to.equal("Labour");
    expect(result.mpEmailAddress).to.equal("paul.blomfield.mp@parliament.uk");
  });
  it("should correctly handle errors for an invalid postcode", async () => {
    result = await getMpByPostcode("marmite");
    expect(result.error).to.equal("Could not retrieve MP");
    secondResult = await getMpByPostcode("S62 2PB");
    expect(secondResult.error).to.equal("Could not retrieve MP");
  });
  it("should return the 2021 current MP", async () => {
    result = await getMpByPostcode("EH39 4PS");
    expect(result.full_name).to.equal("Kenny MacAskill");
    expect(result.full_name).to.not.equal("George Kerevan");
    secondResult = await getMpByPostcode("M54YD");
    expect(secondResult.full_name).to.equal("Rebecca Long Bailey");
    expect(secondResult.full_name).to.not.equal("Hazel Blears");
  });
});
