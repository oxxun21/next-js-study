import Link from "next/link";
import React from "react";
import s from "@/styles/event-item.module.css";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li key={id} className={s.item}>
      <img src={"/" + image} alt="이미지" />
      <div className={s.content}>
        <h2>{title}</h2>
        <div className={s.date}>
          <time>{readableDate}</time>
        </div>
        <div className={s.address}>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={s.actions}>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
