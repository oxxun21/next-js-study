import Link from "next/link";
import React from "react";
import s from "@/components/ui/button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={s.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={s.btn}>
      {props.children}
    </button>
  );
}
