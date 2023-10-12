import React from "react";
import Link from "next/link";
import s from "./mainNav.module.css";
import Logo from "./logo";

export default function MainNav() {
  return (
    <header className={s.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
