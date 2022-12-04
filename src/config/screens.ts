import HomeRouter from "../router/Home.Router";
import SettingsRouter from "../router/Settings.Router";

export const tabs = [
  {
    "id": "home",
    "name": "Home",
    "icon": "home",
    "component": HomeRouter
  },
  {
    "id": "settings",
    "name": "Settings",
    "icon": "gear",
    "component": SettingsRouter
  },
]