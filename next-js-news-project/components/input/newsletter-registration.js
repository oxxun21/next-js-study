import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notiCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notiCtx.showNotification({
      title: "구독 신청중",
      message: "뉴스레터 구독 신청중",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || " 문제가 발생했습니다");
        });
      })
      .then((data) => {
        notiCtx.showNotification({
          title: "성공",
          message: "구독 신청이 완료 되었습니다",
          status: "success",
        });
      })
      .catch((e) => {
        notiCtx.showNotification({
          title: "에러",
          message: e.message || "구독 신청에 문제가 생겼습니다",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input type="email" id="email" placeholder="Your email" aria-label="Your email" ref={emailInputRef} />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
