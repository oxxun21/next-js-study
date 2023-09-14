# TIL
page 폴더에 있는 파일명은 그대로 pathname이 됨 <br/>
→ 파일명에 `-` 등 사용하지 말 것 (오류남) <br/>

Link 안에 a 태그 넣을 때 legacyBehavior 를 Link에 넣어야 함 <br/>
→ a 태그를 안에 넣는 이유 : Link 안에는 href 외에 아무것도 안들어감<br/>

✅ Next.js v13 <br/>
Link > a 방식에서 Link 만 사용하는 방식으로 변경
- 참고 [https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor](https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor)
```js
<nav>
   {/* <Link href="/" legacyBehavior>
      <a className="hi">Home</a>
      </Link>
   <Link href="/about" legacyBehavior>
       <a>About</a>
   </Link> */}
   <Link href="/" style={{ color: router.pathname === "/" ? "red" : "blue" }}>
      Home
   </Link>
   <Link href="/about" style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
     About
   </Link>
</nav>
```

**module.css**
```js
<nav>
  <Link href="/" className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>
    Home
  </Link>
  <Link href="/about" className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>
  About
  </Link>
</nav>
```
```
.link {
  text-decoration: none;
}

.active {
  color: tomato;
}
```

**styled-jsx**
```js
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <style jsx global>{`
        nav {
          color: tomato;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        // props 전달 받기 가능 
        .active {
          color: ${(props) => (props ? props.color : "")};
        }
      `}</style>
    </nav>
  );
}
```

- 페이지나 컴포넌트 내에 css를 import 하고 싶다면 반드시 module이여야 함
- 하지만 커스텀 app.js 에선 가능!
```js
// 파일명 무조건 _app.js 여야함
import NavBar from "@/components/NavBar";
import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
    </>
  );
}
```
커스텀 app.js를 사용해서 레이아웃도 만들 수 있음 
