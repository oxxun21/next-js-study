import React from "react";
import { getAllEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";

export default function AllEvents(props) {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const evnets = await getAllEvents();
  return {
    props: {
      events: evnets,
    },
    revalidate: 60,
  };
}
