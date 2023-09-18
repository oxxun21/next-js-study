import React from "react";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";

export default function EventDetail(props) {
  const event = props.selectedEvent;

  if (!event) {
    return <div className="center">loading</div>;
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

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((e) => ({ params: { eventId: e.id } }));
  return {
    paths: paths,
    fallback: "blocking", // 데이터 패칭 완료 전까지 아무것도 하지 않음
  };
}
