const { getMpByPostcode } = require("../api-calls");
const {
  getRandomResponse,
  getAnswerIndex,
  createGreeting,
} = require("./helper-functions");
const { subject, survey, main } = require("./emailStrings.json");
const {
  motivationHandler,
  countryLinksHandler,
  religionHandler,
  randomResponseHandler,
} = require("./responseHandlers");
const { questionKeys } = require("./keys");

const generateEmail = ({ answers, definition: { fields } }) => {
  let supportEquity = true;
  let memberOfConservatives = false;
  const postcode = answers.find(
    ({ field: { id } }) => id === questionKeys.postcode
  );

  const emailMap = new Map([
    ["conservative", ""],
    ["mainContent", ""],
    ["covidEffects", ""],
    ["countryLinks", ""],
    ["religion", ""],
    ["motivation", ""],
    ["name", ""],
    ["address", ""],
    ["phoneNumber", ""],
  ]);
  //this is the 'router' that handles all question responses based on their id

  answers.forEach(({ text, field, choice }) => {
    if (field.id === questionKeys.supportEquity) {
      if (choice.label === "No") {
        supportEquity = false;
      }
      return;
    }

    if (field.id === questionKeys.conservative) {
      const choiceIndex = getAnswerIndex(
        questionKeys.conservative,
        fields,
        answers
      );
      // The first 3 choices for survey.conservative have sentences in emailStrings.json about being a conservative
      memberOfConservatives = choiceIndex < 4;
    }

    if (field.id === questionKeys.religion) {
      const religions = religionHandler(questionKeys.religion, fields, answers);
      emailMap.set("religion", religions);
    }

    if (field.id === questionKeys.countryLinks) {
      const countryLinks = countryLinksHandler(
        questionKeys.countryLinks,
        fields,
        answers
      );
      emailMap.set("countryLinks", countryLinks);
    }

    if (field.id === questionKeys.covidEffects) {
      const covidEffects = randomResponseHandler(
        "covidEffects",
        questionKeys.covidEffects,
        fields,
        answers
      );
      emailMap.set("covidEffects", covidEffects);
    }

    if (field.id === questionKeys.effectDetails) {
      const effectDetails = randomResponseHandler(
        "effectDetails",
        questionKeys.effectDetails,
        fields,
        answers
      );
      emailMap.set(
        "covidEffects",
        emailMap.get("covidEffects") + " " + effectDetails
      );
    }

    if (field.id === questionKeys.covidStory) {
      const covidStory = randomResponseHandler(
        "covidStory",
        questionKeys.covidStory,
        fields,
        answers
      );
      emailMap.set(
        "covidEffects",
        emailMap.get("covidEffects") + " " + covidStory
      );
    }

    if (field.id === questionKeys.motivation) {
      const motivations = motivationHandler(
        questionKeys.motivation,
        fields,
        answers
      );
      emailMap.set("motivation", motivations);
    }

    if (field.id === questionKeys.name) {
      const randomSignoff = getRandomResponse(main.signoff);
      emailMap.set("name", `${randomSignoff},\n${text}`);
    }

    if (field.id === questionKeys.homeAddress) {
      emailMap.set("address", text);
    }
  });

  if (!supportEquity) {
    return Promise.resolve({
      supportEquity: false,
      mpData: {},
      greeting: "",
      subject: "",
      body: "",
    });
  }

  //adds 'main' content from emailString.Json
  const mainContent =
    getRandomResponse(main.sentence1) + " " + getRandomResponse(main.sentence2);
  emailMap.set("mainContent", mainContent);

  let emailbodyStr = "";
  for (let [k, v] of emailMap) {
    if (k === "address") {
      v = v.replace(/,\s/g, ",\n");
      emailbodyStr += v + `\n`;
    } else {
      v.length && (emailbodyStr += v + `\n\n`);
    }
  }
  const responseData = {
    supportEquity: true,
    subject: getRandomResponse(subject),
    body: emailbodyStr,
  };
  return Promise.resolve(responseData);

  // return getMpByPostcode(postcode.text).then((mp) => {
  //   if (memberOfConservatives && mp.party === "Conservative") {
  //     const choiceIndex = getAnswerIndex(
  //       questionKeys.conservative,
  //       fields,
  //       answers
  //     );
  //     const choiceObj = survey.conservative[choiceIndex];
  //     if (choiceObj.synonyms.length > 0) {
  //       emailMap.set("conservative", getRandomResponse(choiceObj.synonyms));
  //     }
  //   }
  // });
};

module.exports = { generateEmail };
