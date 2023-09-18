import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSales(props) {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR("https://nextjs-practice-66a10-default-rtdb.firebaseio.com/sales.json");

  useEffect(() => {
    if (data) {
      const transformData = [];

      for (const key in data) {
        transformData.push({ id: key, username: data[key].username, value: data[key].value });
      }
      setSales(transformData);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://nextjs-practice-66a10-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformData = [];

  //       for (const key in data) {
  //         transformData.push({ id: key, username: data[key].username, value: data[key].value });
  //       }
  //       setData(transformData);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((i) => (
        <li key={i.id}>
          {i.username} - ${i.value}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://nextjs-practice-66a10-default-rtdb.firebaseio.com/sales.json");
  const data = await res.json();

  const transformData = [];

  for (const key in data) {
    transformData.push({ id: key, username: data[key].username, value: data[key].value });
  }
  return { props: { sales: transformData }, revalidata: 10 };
}
