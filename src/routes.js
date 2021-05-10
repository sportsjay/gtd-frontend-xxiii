// Import Pages
import HomePage from "./pages/home";
import AboutUsPage from "./pages/aboutus";
import ArchivePage from "./pages/archive";
import HandBookPage from "./pages/handbook";
import EventsPage from "./pages/events";
import FAQPage from "./pages/faq";

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
    body: HandBookPage,
    name: "hand-book",
    path: "/hand-book",
  },
  {
    id: 3,
    body: EventsPage,
    name: "events",
    path: "/events",
  },
  {
    id: 4,
    body: ArchivePage,
    name: "archive",
    path: "/archive",
  },
  {
    id: 5,
    body: FAQPage,
    name: "FAQ",
    path: "/FAQ",
  },
];
