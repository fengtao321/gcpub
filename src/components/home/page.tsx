import "./page.css";

import React from "react";

import Script from "next/script";
import { useTranslate } from "../../i18n";
import Image from "next/image";

export default function HomeComponent() {
  const t = useTranslate();

  return <h1>{t("title")}</h1>;
}
