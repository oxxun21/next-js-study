import React from "react";

export default function UserId(props) {
  return <p>{props.id}</p>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      id: "userID-" + userId,
    },
  };
}
