import Attendance from "./event-step/Attendance";
import EventType from "./event-step/EventType";
import Location from "./event-step/Location";
import Profile from "./event-step/Profile";
import Venue from "./event-step/Venue";

export const fetchEvents = async (userId) => {
    return [
      { id: 1, title: "Tech Meetup", date: "2025-03-01", description: "A tech networking event", attendees: 25 },
      { id: 2, title: "AI Workshop", date: "2025-03-05", description: "Intro to AI", attendees: 15 },
    ];
  };


  export const createEvent = async (userId, eventData) => {
    // console.log("Creating event:", eventData);
    return { id: Date.now(), ...eventData, attendees: 0 }; 
  };

  export const fetchEventDetails = async (userId, eventId) => {
    return {
      id: eventId,
      title: "Tech Meetup",
      date: "2025-03-01",
      description: "A tech networking event",
      attendees: [
        { id: 1, name: "John Doe", password:'I am groot', attended: false, imageUrl: "https://i.pinimg.com/736x/ff/84/8e/ff848eb535a55e2da451e4dac1cd0d4d.jpg" },
        { id: 2, name: "Jane Smith", password:'Attract, dont chase', attended: true, imageUrl: "https://i.pinimg.com/474x/66/c3/31/66c331a7757b9d87397a05c46a678527.jpg" },
      ],
    };
  };

  export const fetchAvailableEvents = ({userId}) => [
    {
      id: 1,
      title: 'Tech Conference 2025',
      imageUrl: 'https://i.pinimg.com/474x/06/09/af/0609afd4d091f17e43d3bec71aaee854.jpg',
      date: 'March 15, 2025',
      state: 'Lagos',
      address: 'No 24 iyalla street allen avenue ikeja',
      attendeesRequired: 50,
      currentAttendees: 20,
      totalEarnings: 1000
    },
    {
      id: 2,
      title: 'Design Workshop',
      imageUrl: 'https://i.pinimg.com/474x/7d/7c/e4/7d7ce48af6b37040f0de1bbe195a68a6.jpg',
      date: 'April 10, 2025',
      state: 'Ogun',
      address: 'Plot 12b industrial estate ota',
      attendeesRequired: 30,
      currentAttendees: 30,
      totalEarnings: 600
    },
  ];

  export const updateAttendeeStatus = async (userId, eventId, attendeeId, attended) => {
    console.log(`Updating attendee ${attendeeId} for event ${eventId} to ${attended}`);
  };


  export const createEventStep = [
    {
      id: 1,
      title: "location",
      element: Location
    },
    {
      id: 2,
      title: "profile",
      element: Profile
    },
    {
      id: 3,
      title: "type",
      EventType
    },
    {
      id: 4,
      title: "attendance",
      Attendance
    },
    {
      id: 5,
      title: "venue",
      Venue
    },
  ]
