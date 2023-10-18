import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslate } from "@/i18n";
import wmmsBlk from "../../../public/assets/wmms-blk.svg";

export default function FooterComponent() {
  const t = useTranslate();
  return (
    <div className="global-footer">
      <footer id="wb-info">
        <h2 className="wb-inv"> {t("footer.about-this-site")}</h2>

        <div className="gc-main-footer">
          <div className="container">
            <nav>
              <h3>{t("footer.government-of-canada")}</h3>
              <ul className="list-unstyled colcount-sm-2 colcount-md-3">
                <li>
                  <Link href={t("footer.all-contacts-link")}>
                    {t("footer.all-contacts")}
                  </Link>
                </li>
                <li>
                  <a href={t("footer.departments-and-agencies-link")}>
                    {t("footer.departments-and-agencies")}
                  </a>
                </li>
                <li>
                  <Link href={t("footer.about-government-link")}>
                    {t("footer.about-government")}
                  </Link>
                </li>
              </ul>
              <h4>
                <span className="wb-inv">{t("footer.themes-and-topics")}</span>
              </h4>
              <ul className="list-unstyled colcount-sm-2 colcount-md-3">
                <li>
                  <a href={t("footer.jobs-link")}>{t("footer.jobs")}</a>
                </li>
                <li>
                  <Link href={t("header.immigration-citizenship-link")}>
                    {t("header.immigration-and-citizenship")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.travel-link")}>
                    {t("header.travel-and-tourism")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.business-link")}>
                    {t("footer.business")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.benefits-link")}>
                    {t("header.benefits")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.health-link")}>
                    {t("header.health")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.taxes-link")}>{t("header.taxes")}</Link>
                </li>
                <li>
                  <Link href={t("header.environment-link")}>
                    {t("header.environment-and-natural-resources")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.defence-link")}>
                    {t("header.national-security-and-defence")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.culture-link")}>
                    {t("header.culture-history-and-sport")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.policing-link")}>
                    {t("header.policing-justice-and-emergencies")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.transport-link")}>
                    {t("header.transport-and-infrastructure")}
                  </Link>
                </li>
                <li>
                  <Link href={t("header.international-link")}>
                    {t("header.canada-and-the-world")}\
                  </Link>
                </li>
                <li>
                  <Link href={t("header.finance-link")}>
                    {t("header.money-and-finances")}\
                  </Link>
                </li>
                <li>
                  <Link href={t("header.science-link")}>
                    {t("header.science-and-innovation")}\
                  </Link>
                </li>
                <li>
                  <Link href={t("footer.indigenous-peoples-link")}>
                    {t("footer.indigenous-peoples")}
                  </Link>
                </li>
                <li>
                  <Link href={t("footer.veterans-and-military-link")}>
                    {t("footer.veterans-and-military")}
                  </Link>
                </li>
                <li>
                  <Link href={t("footer.youth-link")}>{t("footer.youth")}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="gc-sub-footer">
          <div className="container d-flex align-items-center">
            <nav>
              <h3 className="wb-inv">
                {t("footer.government-of-canada-corporate")}
              </h3>
              <ul>
                <li>
                  <Link href={t("footer.social-media-link")}>
                    {t("footer.social-media")}
                  </Link>
                </li>
                <li>
                  <Link href={t("footer.mobile-applications-link")}>
                    {t("footer.mobile-applications")}
                  </Link>
                </li>
                <li>
                  <Link href="https://design.canada.ca/about/">
                    {t("footer.about-canada-ca")}
                  </Link>
                </li>

                <li>
                  <Link href={t("footer.terms-and-conditions-link")}>
                    {t("footer.terms-and-conditions")}
                  </Link>
                </li>
                <li>
                  <Link href={t("footer.privacy-link")}>
                    {t("footer.privacy")}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="wtrmrk align-self-end">
              <Image
                src={wmmsBlk}
                alt={t("footer.symbol-of-the-government-of-canada")}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
