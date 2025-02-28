import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAvailableEvents } from './data';
import Modal from '../../../component/modals';
import RegisterForEvent from './Register';

const OtherEvent = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false)
  const userId = '1234'

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      const data = await fetchAvailableEvents(userId);
      setEvents(data);
      setLoading(false);
    };
    loadEvents();
  }, [userId]);

  const handleJoinEvent = (eventId) => {
    setShowModal(true)
  };

  if (loading) {
    return <div className="p-6 text-center text-gray-600">Loading available events...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Events</h1>
      
      {events.length === 0 ? (
        <p className="text-gray-600 text-center">No events available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={event.imageUrl || 'https://via.placeholder.com/400x200'} // Default event image
                alt={`${event.title} banner`}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200';
                }}
              />
              <div className="p-4 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                <div className="text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p>
                    <span className="font-medium">Place:</span> {event.state}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span> {event.address}
                  </p>
                  <p>
                    <span className="font-medium">Attendees Needed:</span>{' '}
                    {event.attendeesRequired - (event.currentAttendees || 0)} / {event.attendeesRequired}
                  </p>
                  <p>
                    <span className="font-medium">Earnings per Person:</span>{' '}
                    ${event.totalEarnings / event.attendeesRequired}
                  </p>
                </div>
                <button
                  onClick={() => handleJoinEvent(event.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={
                    event.attendeesRequired - (event.currentAttendees || 0) <= 0
                  }
                >
                  {event.attendeesRequired - (event.currentAttendees || 0) <= 0
                    ? 'Event Full'
                    : 'Join Event'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Modal showModal={showModal} setShowModal={()=>{setShowModal(false)}}>
        <RegisterForEvent/>
      </Modal>
    </div>
  );
};

export default OtherEvent;