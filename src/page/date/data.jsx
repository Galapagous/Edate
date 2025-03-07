import { BiChat, BiCompass, BiHome } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { HiMiniUser } from "react-icons/hi2";

export const navigationLink = [
    {
        title: 'Home',
        icon: BiHome,
        params:'all'
    },
    {
        title: 'Location',
        icon: BiCompass,
        params:'loation'
    },
    {
        title: 'Matches',
        icon: HiMiniUser,
        params:'matches'
    },
    {
        title: 'Chat',
        icon: BiChat,
        params:'chat'
    },
    {
        title: 'Setting',
        icon: BsGear,
        params:'settings'
    },
]

