import Link from "next/link";
import React from "react";
import s from "@/components/layout/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={s.navigatation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
