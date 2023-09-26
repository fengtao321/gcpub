import Image from "next/image";
import React from "react";
import sigBlkEnPic from "../../../../public/assets/sig-blk-en.svg";

export default function Header({ href }: { href: string }) {
  return (
    <header>
      <div id="wb-bnr" className="container">
        <div className="row">
          <section
            id="wb-lng"
            className="col-xs-3 col-sm-12 pull-right text-right"
          >
            <h2 className="wb-inv">Language selection</h2>
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline mrgn-bttm-0">
                  <li>
                    <a lang="fr" href={href}>
                      <span className="hidden-xs" translate="no">
                        Fran&ccedil;ais
                      </span>
                      <abbr
                        title="Fran&ccedil;ais"
                        className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
                        translate="no"
                      >
                        fr
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
            <link href={href} property="url" />

            <Image
              src={sigBlkEnPic}
              alt="Government of Canada"
              property="logo"
            />
            <span className="wb-inv">
              {" "}
              /<span lang="fr">Gouvernement du Canada</span>
            </span>

            <meta property="name" content="Government of Canada" />
            <meta property="areaServed" typeof="Country" content="Canada" />
            <link property="logo" href="assets/wmms-blk.svg" />
          </div>
          <section
            id="wb-srch"
            className="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4"
          >
            <h2>Search</h2>

            <form
              action="https://www.canada.ca/en/sr/srb.html"
              method="get"
              name="cse-search-box"
              role="search"
            >
              <div className="form-group wb-srch-qry">
                <label htmlFor="wb-srch-q" className="wb-inv">
                  Search Canada.ca
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
                  placeholder="Search Canada.ca"
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
                  <span className="wb-inv">Search</span>
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
              <h2 className="wb-inv">Menu</h2>
              <button type="button" aria-haspopup="true" aria-expanded="false">
                <span className="wb-inv">Main </span>Menu
                <span className="expicon glyphicon glyphicon-chevron-down"></span>
              </button>
              <ul role="menu" aria-orientation="vertical">
                <li role="presentation">
                  <a role="menuitem" tabIndex={-1} href="en/services/jobs.html">
                    Jobs and the workplace
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/immigration-citizenship.html"
                  >
                    Immigration and citizenship
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabIndex={-1} href="https://travel.gc.ca/">
                    Travel and tourism
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/business.html"
                  >
                    Business and industry
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/benefits.html"
                  >
                    Benefits
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/health.html"
                  >
                    Health
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/taxes.html"
                  >
                    Taxes
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/environment.html"
                  >
                    Environment and natural resources
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/defence.html"
                  >
                    National security and defence
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/culture.html"
                  >
                    Culture, history and sport
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/policing.html"
                  >
                    Policing, justice and emergencies
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/transport.html"
                  >
                    Transport and infrastructure
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="http://international.gc.ca/world-monde/index.aspx?lang=eng"
                  >
                    Canada and the world
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/finance.html"
                  >
                    Money and finances
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/science.html"
                  >
                    Science and innovation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
