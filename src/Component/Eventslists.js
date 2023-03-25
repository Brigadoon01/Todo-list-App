import React from "react";
import styles from "./EventList.module.css";

export default function Eventslists({ events, handleClick }) {
  return (
    <div className={styles.rendercards}>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <p>{event.week}</p>
          <h2>
            {index + 1} - {event.title}
          </h2>

          <p>
            @{event.location} -/- {event.date}
          </p>

          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}
