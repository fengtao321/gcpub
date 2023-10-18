// i18n.ts
import { I18n } from "i18n-js";
import dynamic from "next/dynamic";
import eng from "../public/locales/eng/translation.json";
import fra from "../public/locales/fra/translation.json";
import { useEffect } from "react";

const i18n = new I18n();
i18n.store(eng);
i18n.store(fra);

const formatLocale = () => {
  console.log(window.navigator);
  const url = window.location.href;
  if (url.includes("eng")) return "eng";
  if (url.includes("fra")) return "fra";

  return "eng";
};

// Set the locale once at the beginning of your app.
i18n.locale = "eng";

const useTranslate = () => {
  return (t: string) => {
    if (typeof window !== "undefined") {
      i18n.locale = formatLocale();
    }
    return i18n.t(t);
  };
};

// export default useTranslate;
// eslint-disable-next-line import/no-anonymous-default-export
export { useTranslate, i18n };
