import React, { useEffect, useState } from "react";
import s from "./contactForm.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "문제 발생");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [reqStatus, setReqStatus] = useState();
  const [reqError, setReqError] = useState();

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setReqError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setReqStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setReqStatus("success");
      setEnteredEmail("");
      setEnteredMessage("");
      setEnteredName("");
    } catch (e) {
      setReqError(e.message);
      setReqStatus("error");
    }
  }

  let noti;

  if (reqStatus === "pending") {
    noti = {
      status: "pending",
      title: "대기",
      message: "메세지 전송중",
    };
  }

  if (reqStatus === "success") {
    noti = {
      status: "success",
      title: "성공",
      message: "메세지 전송 성공",
    };
  }

  if (reqStatus === "error") {
    noti = {
      status: "error",
      title: "실패",
      message: reqError,
    };
  }

  return (
    <section className={s.contact}>
      <h1>May I help you?</h1>
      <form className={s.form} onSubmit={sendMessageHandler}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} />
          </div>
          <div className={s.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required value={enteredName} onChange={(e) => setEnteredName(e.target.value)} />
          </div>
        </div>
        <div className={s.control}>
          <label htmlFor="message">Your Message</label>
          <textarea rows="5" id="message" required value={enteredMessage} onChange={(e) => setEnteredMessage(e.target.value)}></textarea>
        </div>

        <div className={s.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {noti && <Notification status={noti.status} title={noti.title} message={noti.message} />}
    </section>
  );
}
