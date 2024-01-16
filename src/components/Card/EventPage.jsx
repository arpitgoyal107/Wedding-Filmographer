import React from 'react';
import eventData from '../../../public/eventsData.json';
import { useParams } from 'react-router-dom';

const EventPage = () => {
  const { eventName } = useParams();
  const eventDetails = eventData.find(event => event.name === eventName);

  return (
    <>
      <h1>{eventDetails.name}</h1>
      <img src={eventDetails.mainPhoto} alt={eventDetails.name} />

      <div>
        <h2>Description</h2>
        <p>{eventDetails.description}</p>
      </div>

      <div>
        <h2>Dates</h2>
        <p>{eventDetails.dates}</p>
      </div>

      <div>
        <h2>Additional Photos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {eventDetails.additionalPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Event ${index + 1}`}
              style={{ width: '150px', margin: '5px' }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventPage;
