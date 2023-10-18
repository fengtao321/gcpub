import Image from "next/image";
import React from "react";
import wmmsBlk from "../../../public/assets/wmms-blk.svg";

export default function FooterComponent() {
  return (
    <div className="global-footer">
      <footer id="wb-info">
        <h2 className="wb-inv">About this site</h2>

        <div className="gc-main-footer">
          <div className="container">
            <nav>
              <h3>Government of Canada</h3>
              <ul className="list-unstyled colcount-sm-2 colcount-md-3">
                <li>
                  <a href="en/contact.html">All contacts</a>
                </li>
                <li>
                  <a href="en/government/dept.html">Departments and agencies</a>
                </li>
                <li>
                  <a href="en/government/system.html">About government</a>
                </li>
              </ul>
              <h4>
                <span className="wb-inv">Themes and topics</span>
              </h4>
              <ul className="list-unstyled colcount-sm-2 colcount-md-3">
                <li>
                  <a href="en/services/jobs.html">Jobs</a>
                </li>
                <li>
                  <a href="en/services/immigration-citizenship.html">
                    Immigration and citizenship
                  </a>
                </li>
                <li>
                  <a href="https://travel.gc.ca/">Travel and tourism</a>
                </li>
                <li>
                  <a href="en/services/business.html">Business</a>
                </li>
                <li>
                  <a href="en/services/benefits.html">Benefits</a>
                </li>
                <li>
                  <a href="en/services/health.html">Health</a>
                </li>
                <li>
                  <a href="en/services/taxes.html">Taxes</a>
                </li>
                <li>
                  <a href="en/services/environment.html">
                    Environment and natural resources
                  </a>
                </li>
                <li>
                  <a href="en/services/defence.html">
                    National security and defence
                  </a>
                </li>
                <li>
                  <a href="en/services/culture.html">
                    Culture, history and sport
                  </a>
                </li>
                <li>
                  <a href="en/services/policing.html">
                    Policing, justice and emergencies
                  </a>
                </li>
                <li>
                  <a href="en/services/transport.html">
                    Transport and infrastructure
                  </a>
                </li>
                <li>
                  <a href="https://international.gc.ca/world-monde/index.aspx?lang=eng">
                    Canada and the world
                  </a>
                </li>
                <li>
                  <a href="en/services/finance.html">Money and finance</a>
                </li>
                <li>
                  <a href="en/services/science.html">Science and innovation</a>
                </li>
                <li>
                  <a href="en/services/indigenous-peoples.html">
                    Indigenous peoples
                  </a>
                </li>
                <li>
                  <a href="en/services/veterans-military.html">
                    Veterans and military
                  </a>
                </li>
                <li>
                  <a href="en/services/youth.html">Youth</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="gc-sub-footer">
          <div className="container d-flex align-items-center">
            <nav>
              <h3 className="wb-inv">Government of Canada Corporate</h3>
              <ul>
                <li>
                  <a href="en/social.html">Social media</a>
                </li>
                <li>
                  <a href="en/mobile.html">Mobile applications</a>
                </li>
                <li>
                  <a href="https://design.canada.ca/about/">About Canada.ca</a>
                </li>

                <li>
                  <a href="en/transparency/terms.html">Terms and conditions</a>
                </li>
                <li>
                  <a href="en/transparency/privacy.html">Privacy</a>
                </li>
              </ul>
            </nav>
            <div className="wtrmrk align-self-end">
              <Image src={wmmsBlk} alt="Symbol of the Government of Canada" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
