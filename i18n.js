import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

if (typeof window !== "undefined") {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      fallbackLng: "es",
      lng: "es",
      supportedLngs: ["en", "es", "ca"],
      ns: ["common", "navBar", "wittyWines", "footer", "history", "modules", "wine"], 
      defaultNS: "common", // Namespace por defecto
      detection: {
        order: ["path", "cookie", "htmlTag"],
        caches: ["cookie"],
      },
      backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json", // Ruta para cargar los archivos de traducción
      },
    });
}

export default i18n;