import Seo from "@/components/Seo";
import React from "react";

// 중첩 라우터 (/movids/:id 형태가 됨)
// console로 router를 찍으면 안에 query가 있는데 쿼리의 key는 파일명에 쓰인 변수랑 동일
export default function Detail({ params }) {
  console.log(params);
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getStaticProps({ params: { params } }) {
  return {
    props: { params },
  };
}
export async function getStaticPaths() {
  return {
    paths: [], // 동적 경로가 없으므로 빈 배열로 설정
    fallback: "blocking", // 다른 경로로의 접근은 서버 사이드에서 대기
  };
}
