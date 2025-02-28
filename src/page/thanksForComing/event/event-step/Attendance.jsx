import React, { useState } from 'react';

const Attendance = () => {
  // State for form inputs
  const [maleAttendees, setMaleAttendees] = useState(0);
  const [femaleAttendees, setFemaleAttendees] = useState(0);
  const [payPerPerson, setPayPerPerson] = useState(0);

  // Calculate totals
  const totalAttendees = maleAttendees + femaleAttendees;
  const totalAmount = totalAttendees * payPerPerson;
  const earningsPerPerson = payPerPerson; // Same as input, since it's per person
  const totalDividedByAttendees =
    totalAttendees > 0 ? (totalAmount / totalAttendees).toFixed(2) : 0;

  // Handle Pay button click (placeholder for actual payment logic)
  const handlePay = () => {
    if (totalAmount <= 0) {
      alert('Please enter valid attendee numbers and payment amount.');
      return;
    }
    alert(`Processing payment of $${totalAmount} for ${totalAttendees} attendees.`);
    // Add actual payment integration here (e.g., Stripe, PayPal)
  };

  return (
    <div>
      <h1 className="font-semibold">Attendance Details</h1>

      {/* Number of Male Attendees */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Male Attendees Needed</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="number"
          min="0"
          value={maleAttendees}
          onChange={(e) => setMaleAttendees(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="Enter number of male attendees"
        />
      </div>

      {/* Number of Female Attendees */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Female Attendees Needed</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="number"
          min="0"
          value={femaleAttendees}
          onChange={(e) => setFemaleAttendees(Math.max(0, parseInt(e.target.value) || 0))}
          placeholder="Enter number of female attendees"
        />
      </div>

      {/* Amount to Pay Each Person */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Pay Per Person ($)</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="number"
          min="0"
          step="0.01"
          value={payPerPerson}
          onChange={(e) => setPayPerPerson(Math.max(0, parseFloat(e.target.value) || 0))}
          placeholder="Enter amount per person"
        />
        {payPerPerson > 0 && totalAttendees > 0 && (
          <p className="mt-1 text-sm text-neutral-600">
            Each person will earn ${earningsPerPerson.toFixed(2)}.
          </p>
        )}
        {totalAttendees > 0 && (
          <p className="mt-1 text-sm text-neutral-600">
            Total amount: ${totalAmount.toFixed(2)} (divided by {totalAttendees} attendees = ${totalDividedByAttendees} per person).
          </p>
        )}
      </div>

      {/* Pay Button */}
      <div className="mt-4">
        <button
          className="w-full p-2 bg-main_600 text-white rounded hover:bg-main_700 disabled:bg-gray-400"
          onClick={handlePay}
          disabled={totalAttendees === 0 || payPerPerson === 0}
        >
          Pay ${totalAmount.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Attendance;