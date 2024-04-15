import React from "react";
import eventData from "../../../public/eventsData.json";
import { useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const EventPage = () => {
  const { eventName } = useParams();
  const eventDetails = eventData.find((event) => event.name === eventName);

  return (
    <>
      <ScrollToTop />
      <div className="pt-[108px]"></div>

      <div className=" max-w-6xl mx-auto my-24 px-6">
        <div className=" grid md:grid-cols-2 mb-24 gap-6">
          <img
            src={eventDetails.mainPhoto}
            alt={eventDetails.name}
            className="w-full"
          />

          <div className="">
            <h1 className=" text-xl">
              <b>Couple:</b> {eventDetails.name}
            </h1>
            <h2 className="text-xl mt-4">
              <b>Dates:</b> {eventDetails.dates}
            </h2>
            <h2 className="text-xl mt-4">
              <b>Location:</b> {eventDetails.location}
            </h2>

            <div className=" mt-4">
              <h2 className=" text-xl font-bold">Description:</h2>
              <p>{eventDetails.description}</p>
            </div>
          </div>
        </div>

        <div>
          <div className=" columns-1 md:columns-2 gap-8">
            {eventDetails.additionalPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Event ${index + 1}`}
                className=" w-full mb-8 relative overflow-hidden"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
