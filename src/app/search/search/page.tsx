import "./page.css";

import Footer from "../../footer/footer";
import Header from "../../header/header";
import React from "react";
import Script from "next/script";

export default function Search() {
  return (
    <>
      <Script src="/js/jquery-2.2.4.min.js"  />
      <Script src="/js/header.js"  />
      <Script src="/js/wet-boew.min.js"  />
      <Script src="/js/theme.min.js"  />
      <Script src="/js/gc-thematique.min.js"  />
      <Header></Header>
      <p>This is Test page</p>
      <Footer></Footer>
    </>
  );
}
