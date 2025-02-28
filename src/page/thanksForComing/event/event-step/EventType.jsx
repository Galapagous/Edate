import React, { useState } from 'react';

const EventType = () => {
  // State to manage selected event types
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);
  const [customEventType, setCustomEventType] = useState('');

  // Predefined event type options
  const eventTypeOptions = ['Meeting', 'Workshop', 'Party', 'Webinar', 'Conference'];

  // Handle checkbox changes
  const handleEventTypeChange = (eventType) => {
    setSelectedEventTypes(
      prev => prev.includes(eventType)
        ? prev.filter(type => type !== eventType)
        : [...prev, eventType]
    );
  };

  const handleCustomEventType = (e) => {
    const value = e.target.value;
    setCustomEventType(value);
    if (value && !selectedEventTypes.includes(value)) {
      setSelectedEventTypes(prev => prev.filter(type => type !== customEventType).concat(value));
    } else if (!value) {
      setSelectedEventTypes(prev => prev.filter(type => type !== customEventType));
    }
  };

  return (
    <div>
      <h1 className="font-semibold">Let an update from you</h1>

      {/* Theme Input */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Theme</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="text"
          name="eventTheme"
          id="eventTheme"
          placeholder="red on white"
        />
      </div>

      {/* Event Type Checkboxes */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Event Type</h1>
        <div className="flex flex-col gap-2">
          {eventTypeOptions.map(option => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                value={option}
                checked={selectedEventTypes.includes(option)}
                onChange={() => handleEventTypeChange(option)}
                className="mr-2"
              />
              <span className="text-main_600">{option}</span>
            </label>
          ))}
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Other"
              checked={selectedEventTypes.some(type => !eventTypeOptions.includes(type) && type === customEventType)}
              onChange={() => handleEventTypeChange(customEventType || 'Other')}
              className="mr-2"
            />
            <span className="text-main_600">Other</span>
          </label>
          {selectedEventTypes.some(type => !eventTypeOptions.includes(type)) && (
            <input
              className="w-full mt-2 p-2 border-2 border-main_200 text-main_600"
              type="text"
              value={customEventType}
              onChange={handleCustomEventType}
              placeholder="Enter custom event type"
            />
          )}
        </div>
      </div>

      {/* Date */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Date</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="date"
          name="eventDate"
          id="eventDate"
        />
      </div>

      {/* Start Time */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">Start Time</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="time"
          name="startTime"
          id="startTime"
        />
      </div>

      {/* End Time */}
      <div className="mt-3">
        <h1 className="font-thin text-lg text-neutral-700">End Time</h1>
        <input
          className="w-full p-2 border-2 border-main_200 text-main_600"
          type="time"
          name="endTime"
          id="endTime"
        />
      </div>
    </div>
  );
};

export default EventType;