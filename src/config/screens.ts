import HomeRouter from "../router/Home.Router";
import SettingsRouter from "../router/Settings.Router";

interface Tab {
  id: string,
  icon: string,
  component: Element
}

export const tabs: Tab[] = [
  {
    "id": "home",
    "icon": "home",
    "component": HomeRouter
  },
  {
    "id": "settings",
    "icon": "gear",
    "component": SettingsRouter
  },
]