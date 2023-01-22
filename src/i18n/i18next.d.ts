import "i18next";

import en from "./languages/en.json";
import es from "./languages/es.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      es: typeof es;
    };
  }
}