import "./NewEventForm.css";
import React, { useState, useRef } from "react";
export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const week = useRef();
  const [location, setLocation] = useState("Manchester");

  const resetForm = () => {
    setTitle("");
    setDate("");
    week.current.value = "";
    setLocation("Manchester");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(week);

    const event = {
      title: title,
      date: date,
      week: week.current.value,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Week: </span>
        <input type="week" ref={week} />
      </label>
      <label>
        <span>Event Location:</span>
        <select
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option value="Manchester">Manchester</option>
          <option value="London">London</option>
          <option value="Cardiff">Cardiff </option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
