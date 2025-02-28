import { useNavigate } from 'react-router-dom'
// import { fetchEvents } from './data'

const UserEvent = () => {
    const navigate = useNavigate()
    const userId = '1234'
    const events = [
      { id: 1, title: "Tech Meetup", date: "2025-03-01", description: "A tech networking event", attendees: 25 },
      { id: 2, title: "AI Workshop", date: "2025-03-05", description: "Intro to AI", attendees: 15 },
    ];
  return (
    <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-gray-600">No events yet. Create one to get started!</p>
        ) : (
          events?.map((event) => (
            <div key={event.id} className="p-4 bg-white rounded-lg shadow flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm">{event.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <p>{event.attendees} attendees</p>
                <button
                  onClick={() => navigate(`/dashboard/${userId}/event/manage/${event.id}`)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Manage
                </button>
              </div>
            </div>
          ))
        )}
      </div>
  )
}

export default UserEvent