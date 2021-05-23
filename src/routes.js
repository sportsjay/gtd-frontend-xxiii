// Import Pages
import HomePage from "./pages/home";
import AboutUsPage from "./pages/aboutus";
import ArchivePage from "./pages/archive";
import EventsPage from "./pages/events";

export const routes = [
  {
    id: 0,
    body: HomePage,
    name: "home",
    path: "/home",
  },
  {
    id: 1,
    body: AboutUsPage,
    name: "about-us",
    path: "/about-us",
  },
  {
    id: 2,
    body: EventsPage,
    name: "events",
    path: "/events",
  },
  {
    id: 3,
    body: ArchivePage,
    name: "archive",
    path: "/archive",
  },
];
