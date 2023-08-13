const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const isUploadingTranslations = process.env.UPLOAD_TRANSLATIONS === "1";
const uploadHistory = new Map();

module.exports = {
  i18n: {
    serializeConfig: isProd,
    defaultLocale: "en",
    locales: ["en", "zh_hans"],
    localePath: path.resolve("./public/locales"),
    nsSeparator: false,
    keySeparator: false,
    saveMissing: isUploadingTranslations,
    serializeConfig: false,
    returnEmptyString: false,
    missingKeyHandler: isUploadingTranslations
      ? (_lngs, _ns, key, fallbackValue) => {
          const localizationEndpoint = "https://api.simplelocalize.io/api/v1/translations";
          const localizationApiKey = "5cE94de8403d5C076833BE98aC44FE7314e3e52f9EBFC86DF55e3fCa69A6B26A";

          const data = {
            key,
            language: "en", // Default language
            text: fallbackValue,
          };

          if (!uploadHistory.has(key)) {
            fetch(localizationEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-SimpleLocalize-Token": localizationApiKey,
              },
              body: JSON.stringify({ content: [data] }),
            })
              .then(() => {
                uploadHistory.set(key, true);
                console.info("Uploaded missing translation key", data);
              })
              .catch((error) => {
                console.error("Error trying to upload missing key", error);
              });
          }
        }
      : undefined,
  },
};
