import Image from "next/image";
import React from "react";
import wmmsBlk from "../../../../public/assets/wmms-blk.svg";

export default function Footer() {
  return (
    <div className="global-footer">
      <footer id="wb-info">
        <h2 className="wb-inv">À propos de ce site</h2>

        <div className="gc-main-footer">
          <div className="container">
            <nav>
              <h3>Gouvernement du Canada</h3>
              <ul className="list-unstyled colcount-sm-2 colcount-md-3">
                <li>
                  <a href="fr/contact.html">Toutes les coordonnées</a>
                </li>
                <li>
                  <a href="fr/gouvernement/min.html">
                    Ministères et organismes
                  </a>
                </li>
                <li>
                  <a href="fr/gouvernement/systeme.html">
                    À propos du gouvernement
                  </a>
                </li>
              </ul>
              <h4>
                <span className="wb-inv">Thèmes et sujets</span>
              </h4>
              <ul className="list-unstyled colcount-sm-2 colcount-md-3">
                <li>
                  <a href="fr/services/emplois.html">Emplois</a>
                </li>
                <li>
                  <a href="fr/services/immigration-citoyennete.html">
                    Immigration et citoyenneté
                  </a>
                </li>
                <li>
                  <a href="https://voyage.gc.ca/">Voyage et tourisme</a>
                </li>
                <li>
                  <a href="fr/services/entreprises.html">Entreprises</a>
                </li>
                <li>
                  <a href="fr/services/prestations.html">Prestations</a>
                </li>
                <li>
                  <a href="fr/services/sante.html">Santé</a>
                </li>
                <li>
                  <a href="fr/services/impots.html">Impôts</a>
                </li>
                <li>
                  <a href="fr/services/environnement.html">
                    Environnement et ressources naturelles
                  </a>
                </li>
                <li>
                  <a href="fr/services/defense.html">
                    Sécurité nationale et défense
                  </a>
                </li>
                <li>
                  <a href="fr/services/culture.html">
                    Culture, histoire et sport
                  </a>
                </li>
                <li>
                  <a href="fr/services/police.html">
                    Services de police, justice et urgences
                  </a>
                </li>
                <li>
                  <a href="fr/services/transport.html">
                    Transport et infrastructure
                  </a>
                </li>
                <li>
                  <a href="https://www.international.gc.ca/world-monde/index.aspx?lang=fra">
                    Le Canada et le monde
                  </a>
                </li>
                <li>
                  <a href="fr/services/finance.html">Argent et finance</a>
                </li>
                <li>
                  <a href="fr/services/science.html">Science et innovation</a>
                </li>
                <li>
                  <a href="fr/services/autochtones.html">Autochtones</a>
                </li>
                <li>
                  <a href="fr/services/veterans-militaire.html">
                    Vétérans et militaires
                  </a>
                </li>
                <li>
                  <a href="fr/services/jeunesse.html">Jeunesse</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="gc-sub-footer">
          <div className="container d-flex align-items-center">
            <nav>
              <h3 className="wb-inv">Organisation du gouvernement du Canada</h3>
              <ul>
                <li>
                  <a href="fr/sociaux.html">Médias sociaux</a>
                </li>
                <li>
                  <a href="fr/mobile.html">Applications mobiles</a>
                </li>
                <li>
                  <a href="https://conception.canada.ca/a-propos/">
                    À propos de Canada.ca
                  </a>
                </li>

                <li>
                  <a href="fr/transparence/avis.html">Avis</a>
                </li>
                <li>
                  <a href="fr/transparence/confidentialite.html">
                    Confidentialité
                  </a>
                </li>
              </ul>
            </nav>
            <div className="wtrmrk align-self-end">
              <Image src={wmmsBlk} alt="Symbole du gouvernement du Canada" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
