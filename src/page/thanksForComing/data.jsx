// import { BiHome, BiParty, BiWallet } from "react-icons/bi";
// import { BsGear } from "react-icons/bs";
// import { FaUserTie } from "react-icons/fa6";
// import Overview from "./overview/Overview";
// import Event from "./event/Event";
// import Attendance from "./attendance/Attendance";
// import Payment from "./payment/Payment";
// import Settings from "./settings/Settings";

// export const getThanksSidebar = (userId) => [
//     {
//         label: "Overview",
//         link: `/thanks/${userId}`,
//         icon: BiHome
//     },
//     {
//         label: "Event",
//         link: `/event/${userId}`,
//         icon: BiParty
//     },
//     {
//         label: "Attendance",
//         link: `/attendance/${userId}`,
//         icon: FaUserTie
//     },
//     {
//         label: "Payment",
//         link: `/thanks-payment/${userId}`,
//         icon:  BiWallet
//     },
//     {
//         label: "settings",
//         link: `/thanks-settings/${userId}`,
//         icon:  BsGear
//     },
// ]

// export const getThanksPage = {
//     Overview: Overview,
//     Event: Event,
//     Attendance: Attendance,
//     Payment: Payment,
//     Settings: Settings,
// }

// ----- version 2 -------
import { BiHome, BiParty, BiWallet } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa6";
import Overview from "./overview/Overview";
import Event from "./event/Event";
import Attendance from "./attendance/Attendance";
import Payment from "./payment/Payment";
import Settings from "./settings/Settings";

export const getThanksSidebar = (userId) => [
    {
        name: "Overview", // Matches getThanksPage key
        link: `/thanks/${userId}`,
        icon: BiHome
    },
    {
        name: "Event", // Matches getThanksPage key
        link: `/event/${userId}`,
        icon: BiParty
    },
    {
        name: "Attendance", // Matches getThanksPage key
        link: `/attendance/${userId}`,
        icon: FaUserTie
    },
    {
        name: "Payment", // Matches getThanksPage key
        link: `/thanks-payment/${userId}`,
        icon: BiWallet
    },
    {
        name: "Settings", // Changed to "Settings" to match getThanksPage key
        link: `/thanks-settings/${userId}`,
        icon: BsGear
    },
];

export const getThanksPage = {
    Overview: Overview,
    Event: Event,
    Attendance: Attendance,
    Payment: Payment,
    Settings: Settings,
};


// ======= ** Overview Data ** =========
export const fetchDashboardData = async (userId) => {
    return {
      totalEvents: 5,
      upcomingEvents: [
        { id: 1, title: "Tech Meetup", date: "2025-03-01", attendees: 25 },
        { id: 2, title: "Workshop: AI Basics", date: "2025-03-05", attendees: 15 },
      ],
      totalAttendees: 120,
      recentAttendance: [
        { eventId: 1, name: "John Doe", checkedIn: true },
        { eventId: 2, name: "Jane Smith", checkedIn: false },
      ],
      totalPayments: 750.00,
      recentPayments: [
        { eventId: 1, amount: 150.00, date: "2025-02-20" },
        { eventId: 2, amount: 100.00, date: "2025-02-22" },
      ],
    };
  };