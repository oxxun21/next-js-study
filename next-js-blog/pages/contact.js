import React from "react";
import ContactForm from "../components/contact/contactForm";
import Head from "next/head";

export default function ContectPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="메세지 보내주세요" />
      </Head>
      <ContactForm />
    </>
  );
}
