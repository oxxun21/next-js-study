import React from "react";
import EventItem from "./event-item";
import s from "@/styles/event-list.module.css";

export default function EventList(props) {
  const { items } = props;
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <EventItem title={item.title} image={item.image} date={item.date} location={item.location} id={item.id} />
      ))}
    </ul>
  );
}
