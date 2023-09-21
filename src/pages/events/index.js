import React from "react";
import { getAllEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AllEvents(props) {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      {/* 최신(아래) Head가 적용 */}
      <Head>
        <title>All my Events</title>
        <meta name="desc" content="다양한 이벤트를 제공합니다" />
      </Head>
      <Head>
        <title>All Events</title>
        <meta name="desc" content="다양한 이벤트를 제공합니다" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
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
