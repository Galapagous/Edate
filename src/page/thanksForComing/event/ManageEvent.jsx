import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEventDetails, updateAttendeeStatus } from './data';

const EventManage = () => {
  const { userId, eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      setLoading(true);
      const data = await fetchEventDetails(userId, eventId);
      setEvent(data);
      setLoading(false);
    };
    loadEvent();
  }, [userId, eventId]);

  const handleAttendanceChange = async (attendeeId, attended) => {
    await updateAttendeeStatus(userId, eventId, attendeeId, attended);
    setEvent((prev) => ({
      ...prev,
      attendees: prev.attendees.map((a) =>
        a.id === attendeeId ? { ...a, attended } : a
      ),
    }));
  };


  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
        <button
          onClick={() => navigate(`/dashboard/${userId}/event`)}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          Back to Events
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700"><strong className="font-semibold">Date:</strong> {event.date}</p>
        <p className="text-gray-700"><strong className="font-semibold">Description:</strong> {event.description}</p>
      </div>

      {/* Attendee Management */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Attendees</h2>
        </div>
        
        {event.attendees.length === 0 ? (
          <p className="text-gray-600 text-center">No attendees yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.attendees.map((attendee) => (
              <div 
                key={attendee.id} 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src={attendee.imageUrl}
                  alt={`${attendee.name}'s profile`}
                  className="w-28 h-28 rounded-sm object-cover mr-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                  }}
                />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">
                    <span className='font-medium'>Name: </span><span className='text-neutral-600'>{attendee.name}</span>
                  </p>
                  <p className="text-gray-900 font-medium">
                    <span className='font-medium'>Password: </span><span className='text-neutral-600'>{attendee.password}</span>
                  </p>
                  <button
                    onClick={() => handleAttendanceChange(attendee.id, !attendee.attended)}
                    className={`mt-2 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      attendee.attended
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={attendee.attended}
                  >
                    {attendee.attended ? 'Attended' : 'Mark as Attended'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventManage;