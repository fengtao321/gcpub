import Image from "next/image";
import React from "react";
import sigBlkEnPic from "../../../../public/assets/sig-blk-fr.svg";

export default function Header({ href }) {
  return (
    <header>
      <div id="wb-bnr" className="container">
        <div className="row">
          <section
            id="wb-lng"
            className="col-xs-3 col-sm-12 pull-right text-right"
          >
            <h2 className="wb-inv">Sélection de la langue</h2>
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline mrgn-bttm-0">
                  <li>
                    <a lang="en" href="en.html">
                      <span className="hidden-xs" translate="no">
                        English
                      </span>
                      <abbr
                        title="English"
                        className="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase"
                        translate="no"
                      >
                        en
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
              alt="Gouvernement du Canada"
              property="logo"
            />
            <span className="wb-inv">
              {" "}
              /<span lang="en">Government of Canada</span>
            </span>

            <meta property="name" content="Gouvernement du Canada" />
            <meta property="areaServed" typeof="Country" content="Canada" />
            <link
              property="logo"
              href="etc/designs/canada/wet-boew/assets/wmms-blk.svg"
            />
          </div>
          <section
            id="wb-srch"
            className="col-lg-offset-4 col-md-offset-4 col-sm-offset-2 col-xs-12 col-sm-5 col-md-4"
          >
            <h2>Recherche</h2>

            <form
              action="https://www.canada.ca/fr/sr/srb.html"
              method="get"
              name="cse-search-box"
              role="search"
            >
              <div className="form-group wb-srch-qry">
                <label htmlFor="wb-srch-q" className="wb-inv">
                  Rechercher dans Canada.ca
                </label>

                <input
                  id="wb-srch-q"
                  list="wb-srch-q-ac"
                  className="wb-srch-q form-control"
                  name="q"
                  type="search"
                  value=""
                  size={34}
                  maxLength={170}
                  placeholder="Rechercher dans Canada.ca"
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
                  <span className="wb-inv">Recherche</span>
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
                <span className="wb-inv">Principales </span>Menu{" "}
                <span className="expicon glyphicon glyphicon-chevron-down"></span>
              </button>
              <ul
                role="menu"
                aria-orientation="vertical"
                data-ajax-replace="/content/dam/canada/sitemenu/sitemenu-v2-fr.html"
              >
                <li role="presentation">
                  <a role="menuitem" tabIndex={-1} href="en/services/jobs.html">
                    Emplois et milieu de travail
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/immigration-citizenship.html"
                  >
                    Immigration et citoyenneté
                  </a>
                </li>
                <li role="presentation">
                  <a role="menuitem" tabIndex={-1} href="https://voyage.gc.ca/">
                    Voyage et tourisme
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/entreprises.html"
                  >
                    Entreprises et industrie
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/benefits.html"
                  >
                    Prestations
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/sante.html"
                  >
                    Santé
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/impots.html"
                  >
                    Impôts
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/environnement.html"
                  >
                    Environnement et ressources naturelles
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/defense.html"
                  >
                    Sécurité nationale et défense
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/culture.html"
                  >
                    Culture, histoire et sport
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/police.html"
                  >
                    Services de police, justice et urgences
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="en/services/transport.html"
                  >
                    Transport et infrastructure
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="http://international.gc.ca/world-monde/index.aspx?lang=fra"
                  >
                    Canada et le monde
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/finance.html"
                  >
                    Argent et finances
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    tabIndex={-1}
                    href="fr/services/science.html"
                  >
                    Science et innovation
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
