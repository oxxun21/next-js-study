import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../../dummy-data";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";

export default function EventDetail() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  console.log(event);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.imageAlt} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
