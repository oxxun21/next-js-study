import path from "path";
import fs from "fs/promises";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // 찾을 파일 경로 지정
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // 데이터 패칭 시 404를 띄우는 형식으로 사용가능
  if (data.products.length === 0) {
    return { notFound: true };
  }

  // 처음부터 데이터 자체가 없을 때 사용자를 다른 라우트로 리디렉션 시킴
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    // 몇 초마다 페이지를 재생성할 것인지 (ISR)
    revalidate: 10,
    // notFound: false,
    // redirect: "",
  };
}

export default HomePage;
