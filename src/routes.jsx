import { createBrowserRouter } from "react-router-dom";
import Register from "./page/Register";
import VerifyOTP from "./page/VerifyOTP";
import Page from "./page/onboard/page";
import ListenOnboarding from "./page/listen";
import Listen from "./page/listen/listen/page";
import Speak from "./page/listen/speaker/page";
import ThanksForComing from "./page/thanksForComing";
import EventCreate from "./page/thanksForComing/event/CreateEvent";
import EventManage from "./page/thanksForComing/event/ManageEvent";
import LoginScreen from "./page/Login";
import Homepage from "./page/Hompage";
import Date from "./page/date";
import Onboarding from "./page/onboarding";
import Index from "./page";

export const routes = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/entry",
    element: <Index />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/verify_otp",
    element: <VerifyOTP />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/test",
    element: <Page />,
  },
  {
    path: "/dating",
    element: <Date />,
  },
  {
    path: "/companion",
    element: <ListenOnboarding />,
  },
  {
    path: "/listen/:slug",
    element: <Listen />,
  },
  {
    path: "/speak/:slug",
    element: <Speak />,
  },
  {
    path: "/thanks/:userId",
    element: <ThanksForComing />,
  },
  {
    path: "/dashboard/:userId/event/create",
    element: <EventCreate />,
  },
  {
    path: "/dashboard/:userId/event/manage/:eventId",
    element: <EventManage />,
  },
]);
