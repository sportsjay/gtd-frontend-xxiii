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
    path: "/",
  },
  {
    id: 1,
    body: AboutUsPage,
    path: "/about-us",
  }, 
  {
    id: 2,
    body: HandBookPage,
    path: "/committee",
  },
  {
    id: 3,
    body: EventsPage,
    path: "/events",
  },
  {
    id: 4,
    body: ArchivePage,
    path: "/archive",
  },
  {
    id: 5,
    body: FAQPage,
    path: "/faq",
  },
];
