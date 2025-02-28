import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiCalendar, BiUserCheck, BiDollar } from 'react-icons/bi';
import SummaryCard from './SummaryCard';
import SectionCard from './SectionCard';
import { fetchDashboardData } from '../data';

const Overview = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchDashboardData(userId);
      setData(result);
      setLoading(false);
    };
    loadData();
  }, [userId]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Events"
          value={data.totalEvents}
          icon={<BiCalendar className="w-6 h-6" />}
          link={`/dashboard/${userId}/event`}
        />
        <SummaryCard
          title="Total Attendees"
          value={data.totalAttendees}
          icon={<BiUserCheck className="w-6 h-6" />}
          link={`/dashboard/${userId}/attendance`}
        />
        <SummaryCard
          title="Total Payments"
          value={`$${data.totalPayments.toFixed(2)}`}
          icon={<BiDollar className="w-6 h-6" />}
          link={`/dashboard/${userId}/payment`}
        />
      </div>

      {/* Upcoming Events */}
      <SectionCard title="Upcoming Events" link={`/dashboard/${userId}/event`}>
        <div className="space-y-2">
          {data.upcomingEvents.map((event) => (
            <div key={event.id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <div>
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
              <p>{event.attendees} attendees</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Recent Attendance */}
      <SectionCard title="Recent Attendance" link={`/dashboard/${userId}/attendance`}>
        <div className="space-y-2">
          {data.recentAttendance.map((attendee, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <p>{attendee.name}</p>
              <p className={attendee.checkedIn ? 'text-green-500' : 'text-red-500'}>
                {attendee.checkedIn ? 'Checked In' : 'Pending'}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Recent Payments */}
      <SectionCard title="Recent Payments" link={`/dashboard/${userId}/payment`}>
        <div className="space-y-2">
          {data.recentPayments.map((payment, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-gray-100 rounded">
              <div>
                <p className="font-semibold">${payment.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-600">{payment.date}</p>
              </div>
              <p>Event #{payment.eventId}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default Overview;