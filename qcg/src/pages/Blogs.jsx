import React from "react";
import "./Blogs.css";
import topology from '../components/topoplogy.jpg'
import fourier from '../components/fourier.jpg'
import qubit from '../components/qubit.jpg'
const eventsData = [
  {
    title: "Topological Quantum Computing",
    link: "https://youtu.be/dQw4w9WgXcQ",
    image: topology,
    description: "Developing robust quantum algorithms that can fully leverage the potential of these advanced machines"
  },
  {
    title: "Quantum Fourier Transform",
    link: "https://onlyfans.com",
    image: fourier,
    description: "Fourier transform is an important mathematical operation that has applications in a wide variety of fields"
  },
  {
    title: "Quantum Dot Qubits",
    link: "https://google.com",
    image: qubit,
    description: "The system designed and built as described above can only be in one specific state at a given instant"
  }
];

function Blogs() {
  return (
    <div className="events-container">
      <h1 className="events-title">Recent Blogs</h1>
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

export default Blogs;
