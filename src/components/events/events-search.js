import React, { useRef } from "react";
import Button from "../ui/button";
import s from "@/components/events/events-search.module.css";

export default function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const selectYear = yearInputRef.current.value;
    const selectMonth = monthInputRef.current.value;

    props.onSearch(selectYear, selectMonth);
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <div className={s.controls}>
        <div className={s.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={s.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
