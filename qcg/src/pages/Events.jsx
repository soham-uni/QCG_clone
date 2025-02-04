import React from "react";
import "./Events.css";
import blogs from '../components/blogs.jpg'
import chip from '../components/chip.jpg'
import block from '../components/block.jpg'
const eventsData = [
  {
    title: "Dead & Alive 2022",
    link: "https://youtu.be/dQw4w9WgXcQ",
    image: blogs,
    description: "A 48-hour coding challenge focused on solving real-world problems using quantum computing."
  },
  {
    title: "Quantum Machine Learning Workshop",
    link: "https://onlyfans.com",
    image: chip,
    description: "An interactive session on applying machine learning techniques to quantum computing."
  },
  {
    title: "QCG Meetup 2025",
    link: "https://google.com",
    image: block,
    description: "Networking event where enthusiasts discuss the latest advancements in quantum computing."
  }
];

function Events() {
  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      {eventsData.map((event, index) => (
        <div className="event-card" key={index}>
          <img src={event.image} alt={event.title} className="event-image" />
          <div className="event-info">
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-title">
              {event.title}
            </a>
            <p className="event-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
