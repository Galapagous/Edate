import { BiHome, BiMessage, BiPhone, BiWallet } from "react-icons/bi";
import { SiSession } from "react-icons/si";
import Overview from "./overview/Overview";
import Calls from "./call/Calls";
import Message from "./messages/Message";
// import Settings from "./settings/Sessions";
import Wallet from "./wallet/Wallet";
import Settings from "./settings/Sessions";

export const getSidebarMenu = (userId)=> [
    {
        name: 'Overview',
        link: `/listen/${userId}`,
        icon: BiHome
    },
    {
        name: 'Calls',
        link: `/calls/${userId}`,
        icon: BiPhone
    },
    {
        name: 'Wallet',
        link: `/wallet/${userId}`,
        icon: BiWallet
    },
    {
        name: 'Messages',
        link: `/messages/${userId}`,
        icon: BiMessage
    },
    {
        name: 'Settings',
        link: `/settings/${userId}`,
        icon: SiSession
    },
]


export const getMainPage = {
    Overview: Overview,
    Calls: Calls,
    Messages: Message,
    Settings: Settings,
    Wallet: Wallet
}