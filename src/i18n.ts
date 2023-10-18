// i18n.ts
import { I18n } from "i18n-js";
import footerEng from "../public/locales/eng/footer.json";
import footerFra from "../public/locales/fra/footer.json";
import headerEng from "../public/locales/eng/header.json";
import headerFra from "../public/locales/fra/header.json";
import urlEng from "../public/locales/eng/url.json";
import urlFra from "../public/locales/fra/url.json";

const i18n = new I18n();

//import the common translation files
i18n.store(headerEng);
i18n.store(headerFra);
i18n.store(footerEng);
i18n.store(footerFra);
i18n.store(urlEng);
i18n.store(urlFra);

const formatLocale = (url: string) => {
  if (url.includes("fra")) i18n.locale = "fra";
  else i18n.locale = "eng";
};

// Set the locale once at the beginning of your app.
i18n.locale = "eng";
const suffix = process.env.ENV === "DEV" ? "" : ".html";

const useTranslate = () => {
  return (t: string) => {
    return i18n.t(t);
  };
};

const translateUrl = (currUrl: string) => {
  let key = "home";
  if (currUrl.includes("home") || currUrl.includes("accueil")) {
    key = "home";
  }
  return i18n.t("url." + key) + suffix;
};

// export default useTranslate;
// eslint-disable-next-line import/no-anonymous-default-export
export { translateUrl, formatLocale, useTranslate, i18n };
