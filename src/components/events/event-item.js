import React from "react";
import s from "@/components/events/event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

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
        <div className={s.summary}>
          <h2>{title}</h2>
          <div className={s.date}>
            <DateIcon className={s.icon} />
            <time>{readableDate}</time>
          </div>
          <div className={s.address}>
            <AddressIcon className={s.icon} />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={s.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={s.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
