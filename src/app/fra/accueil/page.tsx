import "./page.css";

import Footer from "../footer/footer";
import Header from "../header/header";
import React from "react";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="js/jquery-2.2.4.min.js" />
      <Script src="js/header.js" />
      {/* <Script src="js/ep-pp.min.js" /> */}
      <Script src="js/wet-boew.min.js" />
      <Script src="js/theme.min.js" />
      <Script src="js/gc-thematique.min.js" />
      <main role="main" property="mainContentOfPage" className="container">
        <Header href="/eng/home.html"></Header>
        <h1 property="name" id="wb-cont" className="mrgn-tp-md">
          Publications du gouvernement du Canada
        </h1>

        <div className="row">
          <div className="col-md-6">
            <p className="pagetag">
              Parcourez notre catalogue de plus de 566&nbsp;500 publications.
              Accédez à plus de 445&nbsp;700 publications électroniques.
            </p>
            <section className="well well-lg">
              <form
                action="https://publications.gc.ca/site/fra/recherche/recherche.html"
                method="get"
              >
                <h2 className="mrgn-tp-sm">Chercher des publications</h2>
                <input type="hidden" name="st" value="1" />
                <input type="hidden" name="e" value="0" />
                <input type="hidden" name="f" value="0" />
                <fieldset>
                  <legend id="sfg" className="mrgn-bttm-md">
                    {" "}
                    Recherche pour
                  </legend>
                  <div className="checkbox-inline mrgn-bttm-sm">
                    <input
                      className="form-checkbox"
                      id="ssti"
                      name="ssti"
                      type="checkbox"
                      checked={true}
                    />
                    <label htmlFor="ssti">
                      Trouver des variantes des termes recherchés
                    </label>
                  </div>
                  <p>
                    <strong>
                      Au moins un terme de recherche doit être fourni.
                    </strong>
                  </p>
                  <div className="form-group mrgn-tp-md">
                    <label htmlFor="ast">
                      Texte&nbsp;
                      <span className="small">
                        (titre, sous-titre, titre de la série, descripteurs,
                        résumé, auteur, ministère/organisme) L&apos;opérateur ET
                        est inséré par défaut
                      </span>
                    </label>
                    <input
                      className="form-control"
                      id="ast"
                      name="ast"
                      type="text"
                      size={50}
                      maxLength={200}
                    />
                  </div>
                  <div className="form-group mrgn-tp-md">
                    <label htmlFor="cnst">
                      Numéro de contrôle{" "}
                      <span className="small">
                        (par exemple&nbsp;: numéro de catalogue, Numéro
                        international normalise du livre [ISBN])
                      </span>
                    </label>
                    <input
                      className="form-control mrgn-tp-sm"
                      id="cnst"
                      name="cnst"
                      type="text"
                      size={50}
                      maxLength={200}
                    />
                  </div>
                </fieldset>
                <div className="checkbox-inline mrgn-tp-sm">
                  <input
                    className="form-checkbox"
                    id="adof1"
                    name="adof"
                    type="checkbox"
                    checked={true}
                  />
                  <label htmlFor="adof1">
                    Afficher seulement les publications électroniques
                  </label>
                </div>
                <div className="text-right mrgn-tp-sm">
                  <button
                    type="submit"
                    className="btn btn-primary mrgn-bttm-md"
                  >
                    Rechercher
                  </button>
                </div>
                <div className="text-right">
                  <a href="https://publications.gc.ca/site/fra/recherche/rechercheAvancee.html">{`Recherche avancée`}</a>
                  <a
                    href="recherche/aideRecherche.html"
                    className="mrgn-lft-md"
                  >{`Aide à la recherche`}</a>
                </div>
              </form>
            </section>
          </div>

          <div className="col-md-6 hidden-sm hidden-xs">
            <div className="wb-tabs carousel-s2">
              <ul role="tablist">
                <li>
                  <a className="active" href="#20230925">
                    1
                    <span className="wb-invisible">
                      Provenant de la Liste hebdomadaire des acquisitions 23-38
                      (22&nbsp;septembre&nbsp;2023)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230914">
                    2
                    <span className="wb-invisible">
                      Semaine de la culture scientifique
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230918">
                    3
                    <span className="wb-invisible">
                      Provenant de la Liste hebdomadaire des acquisitions 23-37
                      (15&nbsp;septembre&nbsp;2023)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230911">
                    4
                    <span className="wb-invisible">
                      Provenant de la Liste hebdomadaire des acquisitions 23-36
                      (8&nbsp;septembre&nbsp;2023)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230908">
                    5
                    <span className="wb-invisible">
                      Journée du 8 septembre&nbsp;&ndash;&nbsp;La journée de la
                      dualité linguistique
                    </span>
                  </a>
                </li>
              </ul>

              <div className="tabpanels">
                <div role="tabpanel" className="in fade" id="20230925">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">{`Provenant de la Liste hebdomadaire des acquisitions 23-38 (22&nbsp;septembre&nbsp;2023)`}</h2>
                    </header>
                    <div className="panel-body">
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.927519&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_CC273-3-26-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            {`Considérations relatives à la protection de la vie privée pendant la COVID-19`}
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922751&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_FR5-218-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            {`La compréhension de points de vue des américains sur des questions présentant un intérêt majeur pour les canadiens`}
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.927649&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_XC75-1-1-441-10-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            {`Les entreprises canadiennes d&apos;exploitation et d&apos;exploration minières actives à l&apos;étranger&nbsp;: conséquences pour les milieux naturels et les droits de la personne`}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="out fade" id="20230914">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">
                        Semaine de la culture scientifique
                      </h2>
                    </header>
                    <div className="panel-body">
                      <p>
                        Du 18 au 24 septembre 2023, célébrons la Semaine de la
                        Culture scientifique sous le thème de l’énergie. Chaque
                        année, cette semaine permet aux enfants et aux familles
                        de découvrir et d’apprécier la science canadienne dans
                        toute sa diversité. Consultez nos publications afin d’en
                        apprendre sur l’avenir énergétique du Canada et la
                        promotion des sciences et du génie.
                      </p>
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.904169&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_Fs23-643-2021-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Décennie des Nations Unies pour les sciences
                            océaniques, groupe de discussion pour les éducateurs
                            : le 18 août 2021 de 13 h 30 à 15 h (HAE)&nbsp;:
                            rapport sommaire
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.869502&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_NM34-9-2018-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Explorer l&apos;avenir énergétique du Canada&nbsp;:
                            un plan de cours pour les classes de 9e et 10e année
                            en science et en géographie
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.899425&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_NS3-62-1-2021-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Évaluation de l&apos;initiative de promotion des
                            sciences et du génie&nbsp;: PromoScience
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="out fade" id="20230918">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">
                        Provenant de la Liste hebdomadaire des acquisitions
                        23-37 (15&nbsp;septembre&nbsp;2023)
                      </h2>
                    </header>
                    <div className="panel-body">
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.927268&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_En14-494-1-2023-1-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Règlement interdisant les plastiques à usage
                            unique&nbsp;: lignes directrices techniques
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922416&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_PH4-194-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Vies futures&nbsp;: les besoins fondamentaux en
                            danger
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922656&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_PH4-196-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            L&apos;avenir de l&apos;IA générative&nbsp;: que
                            pourrait-on voir cinq ans après le lancement de
                            ChatGPT?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="out fade" id="20230911">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">
                        Provenant de la Liste hebdomadaire des acquisitions
                        23-36 (8&nbsp;septembre&nbsp;2023)
                      </h2>
                    </header>
                    <div className="panel-body">
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.927029&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_CC273-3-15-2022-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />{" "}
                            {`L&apos;importance de se déconnecter du travail `}
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922334&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_Iu122-6-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            La modernisation de la Commission du droit
                            d&apos;auteur&nbsp;: état des lieux
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.923705&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_Iu54-124-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Le Canada a besoin de plus de concurrence dans le
                            secteur de l&apos;épicerie&nbsp;: rapport de
                            l&apos;étude de marché sur l&apos;épicerie de détail
                            du Bureau de la concurrence
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="out fade" id="20230908">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">
                        Journée du 8 septembre&nbsp;&ndash;&nbsp;La journée de
                        la dualité linguistique
                      </h2>
                    </header>
                    <div className="panel-body">
                      <p>
                        Le 8 septembre, célébrons la journée de la dualité
                        linguistique. En 2009, l’ancien greffier du Conseil
                        privé Wayne G. Wouters annonçait que le deuxième jeudi
                        de septembre serait désigné Journée de la dualité
                        linguistique dans la fonction publique fédérale. Pour en
                        apprendre davantage sur l&apos;égalité réelle des
                        langues officielles, la Loi sur les langues officielles
                        et les plans d’action, nous vous invitons à consulter
                        ces publications.
                      </p>
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.921608&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_CH14-39-2023-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Plan d&apos;action pour les langues officielles
                            2023-2028&nbsp;: protection, promotion,
                            collaboration
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.896034&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_CH14-50-2021-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Français et anglais&nbsp;: vers une égalité réelle
                            des langues officielles au Canada
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.875923&amp;sl=1"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_CH14-41-2019-fra.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Document synthèse&nbsp;: à la rencontre des
                            Canadiens en vue de moderniser la Loi sur les
                            langues officielles
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Pour parcourir d&apos;autres publications ajoutées récemment,
              veuillez consulter les 
              <a href="listeAcquisitionHebdomadaire/listes.html">
                Listes hebdomadaires des acquisitions
              </a>
              . Vous pouvez aussi parcourir les 
              <a href="parcourir/publicationsEnVedette.html">
                publications récemment mises en vedette
              </a>
              .
            </p>
          </div>
        </div>
        <div className="row">
          <section className="col-md-8">
            <h2>Sujets</h2>
            <div className="row">
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="parcourir/index.html">
                    Parcourir les publications du gouvernement du Canada
                  </a>
                </h3>
                <p>
                  Choisissez parmi une gamme d’options pour consulter des listes
                  de publications organisées de diverses façons
                </p>
              </section>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="services.html">Services offerts au gouvernement</a>
                </h3>
                <p>
                  Soumettez une publication à notre catalogue, obtenez un Numéro
                  international normalisé de livre (ISBN) et ayez accès à
                  d’autres services
                </p>
              </section>
              <div className="clearfix"></div>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="bibliotheques/services.html">
                    Communauté des bibliothèques
                  </a>
                </h3>
                <p>
                  Renseignez-vous sur les activités que nous menons auprès de la
                  communauté des bibliothèques canadiennes pour que les
                  Canadiens aient accès aux publications du gouvernement
                </p>
              </section>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="programmes/aProposPsd.html">À propos de nous</a>
                </h3>
                <p>
                  Renseignez-vous sur notre histoire, sur nos services et sur
                  nos activités ainsi que sur la manière dont nous nous
                  acquittons de notre mandat
                </p>
              </section>
              <div className="clearfix"></div>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="contact/contactezNous.html">
                    Contactez Publications du gouvernement du Canada
                  </a>
                </h3>
                <p>
                  Communiquez avec les Publications du gouvernement du Canada
                  par téléphone, par courrier ou par courriel
                </p>
              </section>
            </div>
          </section>
          <aside className="col-md-4 mrgn-tp-lg">
            <div className="well">
              <h2 className="mrgn-tp-0">Publications les plus demandées</h2>
              <ul className="lst-spcd">
                <li>
                  <a href="https://publications.gc.ca/pub?id=9.804880&amp;sl=1">
                    Code national du bâtiment&nbsp;&ndash;&nbsp;Canada&nbsp;2015
                  </a>
                </li>
                <li>
                  <a href="https://publications.gc.ca/pub?id=9.607518&amp;sl=1">
                    S&apos;identifier et identifier des personnes
                  </a>
                </li>
                <li>
                  <a href="https://publications.gc.ca/pub?id=9.644018&amp;sl=1">
                    Construction de maison à ossature de
                    bois&nbsp;&ndash;&nbsp;Canada
                  </a>
                </li>
              </ul>
              <p>
                Nous vous invitons à consulter les listes complètes des{" "}
                <a href="parcourir/telechargementsPopulaires.html">
                  publications les plus téléchargées
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
        <div className="row pagedetails">
          <div className="clear visible-xs"></div>
          <div className="col-md-6 col-sm-6 col-lg-4 mrgn-tp-sm">
            <a
              className="btn btn-default btn-block"
              href="https://www.canada.ca/fr/signaler-probleme.html"
            >
              Signaler un problème ou une erreur sur cette page
            </a>
          </div>
          <div className="col-md-6 col-xs-6 text-right">
            <div
              className="wb-share"
              data-wb-share='{"lnkClass": "btn btn-default"}'
            ></div>
          </div>
          <div className="clear visible-xs"></div>
          <div className="col-xs-12 datemod">
            <dl id="wb-dtmd">
              <dt>Date de modification&#160;:&#32;</dt>
              <dd>
                <time property="dateModified">2023-09-25</time>
              </dd>
            </dl>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
