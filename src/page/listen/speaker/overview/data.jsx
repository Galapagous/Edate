import { CiPhone, CiTimer } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

export const getCallerData = [
  {
    title: "Total Calls",
    icon: CiPhone,
    color: "#3E3F5B",
    value: 400,
  },
  {
    title: "Max hour",
    icon: CiTimer,
    color: "#0C0950",
    value: 3400,
  },
  {
    title: "Total Listener",
    icon: CiPhone,
    color: "#3D0301",
    value: 50,
  },
];

export const getListeners = () => [
  {
    fullName: "Muhammed Musa",
    date: "Nov 12 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
  {
    fullName: "Muhammed Musa",
    date: "Nov 13 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
  {
    fullName: "Muhammed Musa",
    date: "Nov 17 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
  {
    fullName: "Muhammed Musa",
    date: "Nov 20 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
  {
    fullName: "Muhammed Musa",
    date: "Nov 22 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
  {
    fullName: "Muhammed Musa",
    date: "Nov 23 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
  {
    fullName: "Muhammed Musa",
    date: "Nov 25 2012",
    avatar: <RxAvatar />,
    duration: "2hrs",
  },
];
// export const getListeners = (data)=>[
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
//     {
//         fullName: 'Muhammed Musa',
//         date: data.created_at || 'Nov 12 2012',
//         avatar: data.avatar || <RxAvatar/>,
//         duration: data.duration || '2hrs'
//     },
// ]

export const header = ["S/N", "fullName", "date", "avatar", "duration", "more"];
