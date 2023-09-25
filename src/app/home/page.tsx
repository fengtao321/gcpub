import "./page.css";

import Header from "../header/header";

export default function Home() {
  return (
    <>
      <main role="main" property="mainContentOfPage" className="container">
        <h1 property="name" id="wb-cont" className="mrgn-tp-md">
          Government of Canada Publications
        </h1>

        <div className="row">
          <div className="col-md-6">
            <p className="pagetag">
              Search our catalogue of over 566,500 publications. Access more
              than 445,700 digital publications.
            </p>
            <section className="well well-lg">
              <form
                action="https://publications.gc.ca/site/eng/search/search.html"
                method="get"
              >
                <h2 className="mrgn-tp-sm">Search publications</h2>
                <input type="hidden" name="st" value="1" />
                <input type="hidden" name="e" value="0" />
                <input type="hidden" name="f" value="0" />
                <fieldset>
                  <legend id="sfg" className="mrgn-bttm-md">
                    {" "}
                    Search for
                  </legend>
                  <div className="checkbox-inline mrgn-bttm-sm">
                    <input
                      className="form-checkbox"
                      id="ssti"
                      name="ssti"
                      type="checkbox"
                      defaultChecked={true}
                    />
                    <label htmlFor="ssti">
                      Find variations of search terms
                    </label>
                  </div>
                  <p>
                    <strong>At least one search term must be provided.</strong>
                  </p>
                  <div className="form-group mrgn-tp-md">
                    <label htmlFor="ast">
                      Text{" "}
                      <span className="small">
                        (title, subtitle, series title, subject terms, abstract,
                        author, department/agency) The AND operator is inserted
                        by default
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
                      Control number{" "}
                      <span className="small">
                        (for example: catalogue number, International Standard
                        Book Number [ISBN])
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
                    id="adof"
                    name="adof"
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <label htmlFor="adof">
                    View electronic publications only
                  </label>
                </div>
                <div className="text-right mrgn-tp-sm">
                  <button
                    type="submit"
                    className="btn btn-primary mrgn-bttm-md"
                  >
                    Search
                  </button>
                </div>
                <div className="text-right">
                  {" "}
                  <a href="https://publications.gc.ca/site/eng/search/advancedSearch.html">
                    Advanced search
                  </a>{" "}
                  <a href="search/searchHelp.html" className="mrgn-lft-md">
                    Get help with your search
                  </a>{" "}
                </div>
              </form>
            </section>
          </div>

          <div className="col-md-6 hidden-sm hidden-xs">
            <div className="wb-tabs carousel-s2">
              <ul role="tablist">
                <li>
                  <a className="active" href="#20230914">
                    1<span className="wb-invisible">Science Literacy Week</span>
                  </a>
                </li>
                <li>
                  <a href="#20230918">
                    2
                    <span className="wb-invisible">
                      From Weekly Acquisitions List 23-37
                      (September&nbsp;15,&nbsp;2023)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230911">
                    3
                    <span className="wb-invisible">
                      From Weekly Acquisitions List 23-36
                      (September&nbsp;8,&nbsp;2023)
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230908">
                    4
                    <span className="wb-invisible">
                      September 8&mdash;Linguistic Duality Day
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#20230901">
                    5
                    <span className="wb-invisible">
                      From Weekly Acquisitions List 23-35
                      (September&nbsp;1,&nbsp;2023)
                    </span>
                  </a>
                </li>
              </ul>

              <div className="tabpanels">
                <div role="tabpanel" className="in fade" id="20230914">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">Science Literacy Week</h2>
                    </header>
                    <div className="panel-body">
                      <p>
                        From September 18 to 24, 2023, let’s celebrate the
                        Science Literacy Week under the theme of energy. Each
                        year, this week allows children and families to discover
                        and appreciate Canadian science in all its diversity.
                        Consult our publications to learn about Canada’s energy
                        future and the science and engineering promotion
                        initiative.
                      </p>
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.904168&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_Fs23-643-2021-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Ocean Decade focus group for educators: August 18,
                            2021, 1:30 to 3:00pm EDT: summary report
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.869496&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_NM34-9-2018-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            {`Exploring Canada's energy future: a lesson plan for
                              Canadian geography and science classes, grades 9
                              through 11`}
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.899424&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_NS3-62-1-2021-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Evaluation of the science and engineering promotion
                            initiative: PromoScience
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
                        From Weekly Acquisitions List 23-37
                        (September&nbsp;15,&nbsp;2023)
                      </h2>
                    </header>
                    <div className="panel-body">
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.927267&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_En14-494-1-2023-1-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Single-Use Plastics Prohibition Regulations:
                            technical guidelines
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922414&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_PH4-194-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Future lives: basic needs at risk
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922655&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_PH4-196-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            The future of generative AI: what could we see five
                            years following the launch of ChatGPT?
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
                        From Weekly Acquisitions List 23-36
                        (September&nbsp;8,&nbsp;2023)
                      </h2>
                    </header>
                    <div className="panel-body">
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.924012&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_CC273-3-15-2022-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            The importance of disconnecting from work
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.922332&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_Iu122-6-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Modernizing the Copyright Board: status update
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.923704&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_Iu54-124-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Canada needs more grocery competition: Competition
                            Bureau retail grocery market study report
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
                        September 8&mdash;Linguistic Duality Day
                      </h2>
                    </header>
                    <div className="panel-body">
                      <p>
                        On September 8th, let’s celebrate Linguistic Duality
                        Day. In 2009, former Clerk of the Privy Council Wayne G.
                        Wouters announced that the second Thursday in September
                        would be designated as Linguistic Duality Day in the
                        public service. To learn more about substantive equality
                        of official languages, the Official Languages Act and
                        action plans, we invite you to consult these
                        publications.
                      </p>
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.921606&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_CH14-39-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Action plan for official languages 2023-2028:
                            protection, promotion, collaboration
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.896030&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_CH14-50-2021-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            English and French: towards a substantive equality
                            of official languages in Canada
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.875922&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_CH14-41-2019-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Summary document: engaging Canadians as a step
                            towards modernizing the Official Languages Act
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="out fade" id="20230901">
                  <div className="panel panel-primary">
                    <header className="panel-heading text-center mrgn-lft-0 mrgn-right-0">
                      <h2 className="mrgn-tp-sm">
                        From Weekly Acquisitions List 23-35
                        (September&nbsp;1,&nbsp;2023)
                      </h2>
                    </header>
                    <div className="panel-body">
                      <ul className="text-center list-unstyled">
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.918862&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/1_Em20-170-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Report summary: empowering youth for post-secondary
                            education preparedness
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.926019&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/2_Ci4-226-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            2022-23 newcomer services campaign advertising
                            campaign evaluation tool (ACET): methodological
                            report
                          </a>
                        </li>
                        <li className="col-md-4">
                          {" "}
                          <a
                            href="https://publications.gc.ca/pub?id=9.921314&amp;sl=0"
                            style={{ color: "#000" }}
                          >
                            {" "}
                            <img
                              src="https://publications.gc.ca/site/images/couvertures-covers/2023/3_PS4-299-2023-eng.jpg"
                              alt=""
                              className="img-thumbnail"
                            />
                            <br />
                            Firearms safety public awareness campaign: final
                            integrated report
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              To browse other recently added publications, consult the 
              <a href="weeklyAcquisitionList/lists.html">
                Weekly Acquisitions Lists
              </a>
              . You can also browse 
              <a href="browse/featuredPublications.html">
                recently featured publications
              </a>
              .
            </p>
          </div>
        </div>
        <div className="row">
          <section className="col-md-8">
            <h2>Topics</h2>
            <div className="row">
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="browse/index.html">
                    Browse Government of Canada publications
                  </a>
                </h3>
                <p>
                  Select from a range of options to browse publications in our
                  collection
                </p>
              </section>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="services.html">Services for government</a>
                </h3>
                <p>
                  Submit a publication to our collection, get an International
                  Standard Book Number (ISBN) and access other services
                </p>
              </section>
              <div className="clearfix"></div>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="libraries/services.html">Library community</a>
                </h3>
                <p>
                  Find out about our work with the Canadian library community to
                  give Canadians access to government publications
                </p>
              </section>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="programs/aboutDsp.html">Learn about what we do</a>
                </h3>
                <p>
                  Learn about our history, our services and activities and how
                  we fulfill our mandate
                </p>
              </section>
              <div className="clearfix"></div>
              <section className="col-md-6">
                <h3 className="h5">
                  <a href="contact/contactUs.html">
                    Contact Government of Canada Publications
                  </a>
                </h3>
                <p>
                  Reach Government of Canada Publications by contact form,
                  phone, mail or email
                </p>
              </section>
            </div>
          </section>
          <aside className="col-md-4 mrgn-tp-lg">
            <div className="well">
              <h2 className="mrgn-tp-0">Most requested publications</h2>
              <ul className="lst-spcd">
                <li>
                  <a href="https://publications.gc.ca/pub?id=9.801815&amp;sl=0">
                    Canadian firearms safety course / Canadian Firearms Program
                  </a>
                </li>
                <li>
                  <a href="https://publications.gc.ca/pub?id=9.804878&amp;sl=0">
                    National building code of Canada&nbsp;2015
                  </a>
                </li>
                <li>
                  <a href="https://publications.gc.ca/pub?id=9.690094&amp;sl=0">
                    Passport applications for children under the age of&nbsp;16
                  </a>
                </li>
              </ul>
              <p>
                We invite you to view the complete lists of{" "}
                <a href="browse/topDownloads.html">top downloads</a>.
              </p>
            </div>
          </aside>
        </div>

        <div className="row pagedetails">
          <div className="clear visible-xs"></div>
          <div className="col-md-6 col-sm-6 col-lg-4 mrgn-tp-sm">
            <a
              className="btn btn-default btn-block"
              href="https://www.canada.ca/en/report-problem"
            >
              Report a problem or mistake on this page
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
              <dt>Date modified:&#32;</dt>
              <dd>
                <time property="dateModified">2023-09-18</time>
              </dd>
            </dl>
          </div>
        </div>
      </main>
    </>
  );
}
