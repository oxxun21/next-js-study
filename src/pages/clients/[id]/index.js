import { useRouter } from "next/router";
import React from "react";

export default function ClientsProject() {
  const router = useRouter();

  const loadHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientsprojectid]",
      query: { id: "max", clientsprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of Given Clients</h1>
      <button onClick={loadHandler}>Load Project A</button>
    </div>
  );
}
