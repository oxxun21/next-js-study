import React from "react";

export default function UserProfile(props) {
  return (
    <>
      <h1>{props.username}</h1>
      <p>hi</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}
