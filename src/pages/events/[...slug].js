import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getFilteredEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import useSWR from "swr";

export default function FilteredEvents(props) {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  console.log(params);

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (isNaN(numMonth) || isNaN(numYear) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error"
      // }
    };
  }

  const filterEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filterEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
