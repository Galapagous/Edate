import { BiHome, BiMessage, BiWallet } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import Overview from "./overview/Index";
import Call from "./call";
import Message from "./message/Index";
import Settings from "./settings/Index";
import Wallet from "./wallet/Index";

export const getSidebarMenu = (userId)=> [
    {
        name: 'Overview',
        link: `/speaker/${userId}`,
        icon: BiHome
    },
    {
        name: 'Call',
        link: `/call/${userId}`,
        icon: BiHome
    },
    {
        name: 'Wallet',
        link: `/wallet/${userId}`,
        icon: BiWallet
    },
    {
        name: 'Message',
        link: `/message/${userId}`,
        icon: BiMessage
    },
    {
        name: 'Settings',
        link: `/settings/${userId}`,
        icon: BsGear
    },
]

export const getSpeakerPage = {
    Overview: Overview,
    Calls: Call,
    Messages: Message,
    Settings: Settings,
    Wallet: Wallet
}