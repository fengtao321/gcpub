"use client";

import React, { useEffect, useState } from "react";
import { formatLocale, i18n, translateUrl, useTranslate } from "@/i18n";

import Image from "next/image";
import Link from "next/link";
import sigBlkEnPic from "../../../public/assets/sig-blk-en.svg";

export default function HeaderComponent() {
  const t = useTranslate();
  const [translatedUrl, setTranslatedUrl] = useState("");

  useEffect(() => {
    const url = window.location.href;
    formatLocale(url);
    setTranslatedUrl(translateUrl(url));
  }, []);

  return (
    <header>
      <div id="wb-bnr" className="container">
        <div className="row">
          <section
            id="wb-lng"
            className="col-xs-3 col-sm-12 pull-right text-right"
          >
            <h2 className="wb-inv">{t("header.language-selection")}</h2>
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline mrgn-bttm-0">
                  <li>
                    <a lang="fr" href={translatedUrl}>
                      <span className="hidden-xs" translate="no">
                        {t("header.language-name")}
                      </span>
                      <abbr
                        title="Fran&ccedil;ais"
                        className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
                        translate="no"
                      >
                        {t("header.language-abb")}
                      </abbr>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div
            className="brand col-xs-9 col-sm-5 col-md-4"
            property="publisher"
            resource="#wb-publisher"
            typeof="GovernmentOrganization"
          >
            <link href={translatedUrl} property="url" />

            <Image
              src={sigBlkEnPic}
              alt="Government of Canada"
              property="logo"
            />
            <span className="wb-inv">
              <span lang="fr">{t("header.government-bilingual")}</span>
            </span>

            <meta property="name" content="Government of Canada" />
            <meta property="areaServed" typeof="Country" content="Canada" />
            <link property="logo" href="assets/wmms-blk.svg" />
          </div>
          <section
            id="wb-srch"
            className="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4"
          >
            <h2>{t("header.search")}</h2>

            <form
              action={t("header.form-link")}
              method="get"
              name="cse-search-box"
              role="search"
            >
              <div className="form-group wb-srch-qry">
                <label htmlFor="wb-srch-q" className="wb-inv">
                  {t("header.search-canada-ca")}
                </label>

                <input
                  id="wb-srch-q"
                  list="wb-srch-q-ac"
                  className="wb-srch-q form-control"
                  name="q"
                  type="search"
                  defaultValue=""
                  size={34}
                  maxLength={170}
                  placeholder={t("header.search-canada-ca")}
                />

                <datalist id="wb-srch-q-ac"></datalist>
              </div>
              <div className="form-group submit">
                <button
                  type="submit"
                  id="wb-srch-sub"
                  className="btn btn-primary btn-small"
                  name="wb-srch-sub"
                >
                  <span className="glyphicon-search glyphicon"></span>
                  <span className="wb-inv">{t("header.search")}</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <nav className="gcweb-menu" typeof="SiteNavigationElement">
              <h2 className="wb-inv">{t("header.menu")}</h2>
              <button type="button" aria-haspopup="true" aria-expanded="false">
                <span className="wb-inv">Main </span>Menu
                <span className="expicon glyphicon glyphicon-chevron-down"></span>
              </button>
              <ul role="menu" aria-orientation="vertical">
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.jobs-link")}
                  >
                    {t("header.jobs-and-workplace")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.immigration-citizenship-link")}
                  >
                    {t("header.immigration-and-citizenship")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.travel-link")}
                  >
                    {t("header.travel-and-tourism")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.business-link")}
                  >
                    {t("header.business-and-industry")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.benefits-link")}
                  >
                    {t("header.benefits")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.health-link")}
                  >
                    {t("header.health")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.taxes-link")}
                  >
                    {t("header.taxes")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.environment-link")}
                  >
                    {t("header.environment-and-natural-resources")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.defence-link")}
                  >
                    {t("header.national-security-and-defence")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.culture-link")}
                  >
                    {t("header.culture-history-and-sport")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.policing-link")}
                  >
                    {t("header.policing-justice-and-emergencies")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.transport-link")}
                  >
                    {t("header.transport-and-infrastructure")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.international-link")}
                  >
                    {t("header.canada-and-the-world")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.finance-link")}
                  >
                    {t("header.money-and-finances")}
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    role="menuitem"
                    tabIndex={-1}
                    href={t("header.science-link")}
                  >
                    {t("header.science-and-innovation")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
