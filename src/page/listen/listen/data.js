import {
  BiFemale,
  BiHome,
  BiMale,
  BiMessage,
  BiPhone,
  BiUser,
  BiWallet,
} from "react-icons/bi";
import { SiSession } from "react-icons/si";
import Overview from "./overview/Overview";
import Calls from "./call/Calls";
import Message from "./messages/Message";
// import Settings from "./settings/Sessions";
import Wallet from "./wallet/Wallet";
import Settings from "./settings/Sessions";

export const getSidebarMenu = (userId) => [
  {
    name: "Dating",
    link: `/dating`,
    icon: BiHome,
  },
  {
    name: "Companion",
    link: `/companion`,
    icon: BiPhone,
  },
  {
    name: "Thank for coming",
    link: `/thanks/${userId}`,
    icon: BiWallet,
  },
  {
    name: "Couple",
    link: `/couple/${userId}`,
    icon: BiMessage,
  },
  {
    name: "Sugar Daddy",
    link: `/sugar_daddy/${userId}`,
    icon: BiMale,
  },
  {
    name: "Sugar Mummy",
    link: `/sugar_mummy/${userId}`,
    icon: BiFemale,
  },
];

export const getMainPage = {
  Overview: Overview,
  Calls: Calls,
  Messages: Message,
  Settings: Settings,
  Wallet: Wallet,
};
