import React from "react";
import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import Head from "next/head";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="desc" content="다양한 이벤트를 제공합니다" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
