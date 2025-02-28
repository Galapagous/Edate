import { attendanceData } from "./data";

const Attendance = () => {
  // Updated mock data based on your event structure

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Your Attendance</h1>

      {attendanceData.length === 0 ? (
        <p className="text-gray-600 text-center">No attendance records yet.</p>
      ) : (
        <div className="space-y-4">
          {attendanceData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                {/* Submitted Image */}
                <img
                  src={event.imageUrl}
                  alt={`${event.title} attendance proof`}
                  className="h-32 w-32 rounded-md object-cover border border-gray-100"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
                />

                {/* Event Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-900">{event.title}</h2>
                  <div className="mt-1 text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium">Date:</span> {event.date}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> {event.state} - {event.address}
                    </p>
                    <p>
                      <span className="font-medium">Earnings:</span> $
                      {(event.totalEarnings / event.attendeesRequired).toFixed(2)}
                    </p>
                    <p>
                      <span className="font-medium">Attendees:</span> {event.currentAttendees} / {event.attendeesRequired}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="mt-3 text-right">
                <button
                  className="text-blue-600 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  onClick={() => alert(`Details for ${event.title}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attendance;
