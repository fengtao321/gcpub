import "./page.css";

import Footer from "../../footer/footer";
import Header from "../../header/header";
import React from "react";
import Script from "next/script";

export default function Search() {
  return (
    <>
      <Header href="/eng/search/search.html"></Header>
      <main role="main" property="mainContentOfPage" className="container">
        <h1 property="name" id="wb-cont" className="mrgn-tp-md">
          Résultats de la recherche simple
        </h1>
        <div className="row">
          {" "}
          <div className="col-md-8">
            {" "}
            <div className="mrgn-bttm-md">
              {" "}
              2 856 résultats pour &laquo;&nbsp;<em>test</em>&nbsp;&raquo; trié
              par pertinence en ordre décroissant{" "}
            </div>
            <ol className="list-unstyled" start={1}>
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588398/publication.html"
                >
                  {" "}
                  Comptes rendus des interviewers sur le Test du recensement
                  national <span className="wb-inv">CS92-N0060/4-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      1989.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      CS92-N0060/4-1989-PDF{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      Statistique Canada.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588400/publication.html"
                >
                  {" "}
                  Évaluation du service auxiliaire téléphonique pour le Test du
                  recensement national{" "}
                  <span className="wb-inv">CS92-N0060/3-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      1989.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      CS92-N0060/3-1989-PDF{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      Statistique Canada.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588402/publication.html"
                >
                  {" "}
                  Évaluation des opérations de codage dans le cadre du Test du
                  recensement national{" "}
                  <span className="wb-inv">CS92-N0060/5-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      1989.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      CS92-N0060/5-1989-PDF{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      Statistique Canada.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.605064/publication.html"
                >
                  {" "}
                  Analyse des données linguistiques{" "}
                  <span className="wb-inv">CS92-N0020/14-1994F-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      1994.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      CS92-N0020/14-1994F-PDF{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      Statistique Canada.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588394/publication.html"
                >
                  {" "}
                  Test du recensement national et intégration des
                  recommandations du processus de consultation sur le contenu du
                  recensement de 1991{" "}
                  <span className="wb-inv">CS92-N0060/2-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      1989.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      CS92-N0060/2-1989-PDF{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      Statistique Canada.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588397/publication.html"
                >
                  {" "}
                  <span lang="en">
                    {" "}
                    National Census Test interviewer debriefing{" "}
                  </span>{" "}
                  <span className="wb-inv">CS92-N0060/4-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">1989.</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">CS92-N0060/4-1989-PDF</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">Statistics Canada. </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588396/publication.html"
                >
                  {" "}
                  Considérations relatives à la Loi sur la protection des
                  renseignements personnels - Test du recensement national et
                  recensement de 1991{" "}
                  <span className="wb-inv">CS92-N0060/6-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      1989.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      CS92-N0060/6-1989-PDF{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      Statistique Canada.{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588401/publication.html"
                >
                  {" "}
                  <span lang="en">
                    {" "}
                    Evaluation of coding operations for the National Census Test{" "}
                  </span>{" "}
                  <span className="wb-inv">CS92-N0060/5-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">1989.</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">CS92-N0060/5-1989-PDF</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">Statistics Canada. </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.588399/publication.html"
                >
                  {" "}
                  <span lang="en">
                    {" "}
                    Evaluation of the telephone assistance service for the
                    National Census Test{" "}
                  </span>{" "}
                  <span className="wb-inv">CS92-N0060/3-1989-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">1989.</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">CS92-N0060/3-1989-PDF</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">Statistics Canada. </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>{" "}
              <li className="mrgn-bttm-lg">
                {" "}
                <a
                  className="h5"
                  href="https://publications.gc.ca/site/fra/9.575553/publication.html"
                >
                  {" "}
                  <span lang="en">
                    {" "}
                    Analysis of income components National Census Test (N.C.T.)
                    November, 1993{" "}
                  </span>{" "}
                  <span className="wb-inv">CS92-N0020/23-1994E-PDF</span>
                </a>{" "}
                <div className="mrgn-lft-sm">
                  {" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Date&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">1994.</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Numéro de catalogue&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">CS92-N0020/23-1994E-PDF</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      {" "}
                      Ministère/Organisme&nbsp;:{" "}
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      <span lang="en">Statistics Canada. </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Type de publication:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      Série
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-5">
                      Format:
                    </div>{" "}
                    <div className="col-lg-9 col-md-8 col-sm-8 col-xs-7">
                      {" "}
                      PDF{" "}
                    </div>
                  </div>{" "}
                </div>{" "}
              </li>
            </ol>
          </div>{" "}
          <div className="col-md-4">
            {" "}
            <div className="panel panel-default">
              {" "}
              <header className="panel-heading">
                <h2 className="panel-title">Trier par</h2>
              </header>{" "}
              <div className="panel-body">
                <ul>
                  {" "}
                  <li>
                    <strong className="text-muted">Pertinence</strong>{" "}
                    <a
                      href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;rq.ssp=5&amp;psi=1"
                      title="Trier par pertinence en ordre croissant"
                    >
                      <span className="glyphicon glyphicon-circle-arrow-up text-muted"></span>
                      <span className="wb-inv">
                        Trier par pertinence en ordre croissant
                      </span>
                    </a>{" "}
                    <span className="wb-inv">, </span>{" "}
                    <a
                      href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;rq.ssp=-5&amp;psi=1"
                      title="Trier par pertinence en ordre décroissant"
                    >
                      <span className="glyphicon glyphicon-circle-arrow-down text-muted"></span>
                      <span className="wb-inv">
                        Trier par pertinence en ordre décroissant
                      </span>
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;rq.ssp=2&amp;psi=1">
                      Numéro de catalogue
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;rq.ssp=3&amp;psi=1">
                      Ministère/Organisme
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;rq.ssp=4&amp;psi=1">
                      Titre
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;rq.ssp=-6&amp;psi=1">
                      Année
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="panel panel-default">
              {" "}
              <header className="panel-heading">
                <h3 className="panel-title">Filtres</h3>
              </header>{" "}
              <div className="panel-body">
                <form
                  id="filters"
                  className="indent-medium"
                  action="https://publications.gc.ca/site/fra/recherche/recherche.html;jsessionid=78730645E243FAE9BFC8FAB7D4A726B1?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on"
                  method="GET"
                >
                  <fieldset className="noPaddingTop">
                    <legend className="mrgn-tp-0 mrgn-bttm-sm">Langue</legend>{" "}
                    <div className="clearfix"></div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sLF1"
                        name="sLF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="eng"
                      />
                      <input type="hidden" name="_sLF" value="on" />{" "}
                      <label htmlFor="sLF1"> Anglais </label>{" "}
                    </div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sLF2"
                        name="sLF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="fre"
                      />
                      <input type="hidden" name="_sLF" value="on" />{" "}
                      <label htmlFor="sLF2"> Français </label>{" "}
                    </div>{" "}
                  </fieldset>{" "}
                  <fieldset>
                    {" "}
                    <legend className="mrgn-tp-0 mrgn-bttm-sm">
                      Type de publication
                    </legend>{" "}
                    <div className="clearfix"></div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sPF1"
                        name="sPF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="m"
                      />
                      <input type="hidden" name="_sPF" value="on" />{" "}
                      <label htmlFor="sPF1">Monographie</label>{" "}
                    </div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sPF2"
                        name="sPF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="s"
                      />
                      <input type="hidden" name="_sPF" value="on" />{" "}
                      <label htmlFor="sPF2">Périodique</label>{" "}
                    </div>{" "}
                  </fieldset>{" "}
                  <fieldset>
                    {" "}
                    <legend className="mrgn-tp-0 mrgn-bttm-sm">
                      Ministère
                    </legend>{" "}
                    <div className="clearfix"></div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sDF1"
                        name="sDF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="2389"
                      />
                      <input type="hidden" name="_sDF" value="on" />
                      <label htmlFor="sDF1">
                        Administration canadienne de la sûreté du transport
                        aérien
                      </label>{" "}
                    </div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sDF2"
                        name="sDF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="4019"
                      />
                      <input type="hidden" name="_sDF" value="on" />{" "}
                      <label htmlFor="sDF2">
                        Affaires autochtones et du Nord Canada
                      </label>{" "}
                    </div>{" "}
                    <div className="checkbox">
                      {" "}
                      <input
                        id="sDF3"
                        name="sDF"
                        className="noMarginLeft"
                        type="checkbox"
                        value="113"
                      />
                      <input type="hidden" name="_sDF" value="on" />{" "}
                      <label htmlFor="sDF3">
                        Affaires étrangères et Commerce international
                      </label>{" "}
                    </div>{" "}
                    <div id="hidden-depts">
                      {" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF4"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="133"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF4">
                          Affaires indiennes et du Nord
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF5"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4005"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF5">
                          Affaires indiennes et du Nord Canada
                        </label>
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF6"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="44"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF6">
                          {`Agence canadienne d'évaluation environnementale`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF7"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="45"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF7">
                          {`Agence canadienne d'inspection des aliments`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF8"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="55"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF8">
                          Agence canadienne de développement international
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF9"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4067"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF9">
                          {`Agence d'évaluation d'impact du Canada`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF10"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="110"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF10">
                          Agence de la consommation en matière financière du
                          Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        <input
                          id="sDF11"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2497"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF11">
                          Agence de la santé publique du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        <input
                          id="sDF12"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="24"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF12">
                          Agence des douanes et du revenu du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF13"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2486"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF13">
                          Agence des services frontaliers du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF14"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2449"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF14">
                          Agence du revenu du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF15"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="67"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF15">
                          Agence spatiale canadienne
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF16"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="9"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF16">Agriculture Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF17"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="10"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF17">
                          Agriculture et Agroalimentaire Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF18"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="237"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF18">
                          Anciens Combattants Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF19"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="17"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF19">Banque du Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF20"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="5"
                        />
                        <input type="hidden" name="_sDF" value="on" />
                        <label htmlFor="sDF20">
                          Bibliothèque du Parlement
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF21"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="234"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF21">
                          Bureau de la sécurité des transports du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF22"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2374"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF22">Bureau du Conseil privé</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF23"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="203"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF23">
                          Bureau du surintendant des institutions financières
                          Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF24"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="16"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF24">
                          {`Bureau du vérificateur général`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF25"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4021"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF25">
                          {`Bureau fédéral de la statistique`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF26"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="40"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF26">
                          {`Centre canadien d'hygiène et de sécurité au travail`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF27"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2807"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF27">
                          {`Centre de la sécurité des télécommunications (Canada)`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF28"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="147"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF28">
                          Centre de recherches pour le développement
                          international
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF29"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="85"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF29">
                          Centre de recherches sur les communications Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF30"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="74"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF30">
                          Citoyenneté et Immigration Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF31"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="200"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF31">
                          Commissariat à la protection de la vie privée du
                          Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF32"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="50"
                        />
                        <input type="hidden" name="_sDF" value="on" />
                        <label htmlFor="sDF32">
                          Commission canadienne des droits de la personne
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF33"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="48"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF33">
                          Commission canadienne des grains
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF34"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="62"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF34">
                          Commission canadienne de sûreté nucléaire
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF35"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="211"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF35">
                          Commission de la Fonction publique du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF36"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="154"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF36">
                          Commission de réforme du droit du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF37"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="84"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF37">Communications Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF38"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="227"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF38">Condition féminine Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF39"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2572"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF39">
                          Conseil canadien de la santé
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF40"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2382"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF40">
                          {`Conseil canadien des ministres de l'environnement`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF41"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="206"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF41">
                          {`Conseil d'examen du prix des médicaments brevetés`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF42"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="193"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF42">
                          Conseil de recherches en sciences naturelles et en
                          génie du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF43"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="235"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF43">Conseil du trésor</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF44"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="96"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF44">
                          Conseil économique du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF45"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="186"
                        />
                        <input type="hidden" name="_sDF" value="on" />
                        <label htmlFor="sDF45">
                          Conseil national de recherches du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF46"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="89"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF46">
                          Consommation et corporations
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF47"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4053"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF47">
                          Consommation et corporations Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF48"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4059"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF48">Defence Research Board</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF49"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2654"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF49">
                          Développement des ressources humaines Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF50"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2455"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF50">
                          École de la fonction publique du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF51"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="97"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF51">Élections Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF52"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2876"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF52">
                          Emploi et Développement social Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF53"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2848"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF53">
                          Énergie, mines et ressources Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF54"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="102"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF54">Environnement Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF55"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4015"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF55">
                          Environnement et Changement climatique Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF56"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2527"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF56">
                          Gendarmerie royale du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF57"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2747"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF57">
                          Horizons de politiques Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF58"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4018"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF58">
                          Immigration, Réfugiés et Citoyenneté Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF59"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="137"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF59">
                          Industrie, Sciences et Technologie Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF60"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="134"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF60">Industrie Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF61"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="135"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF61">
                          Industrie et sciences Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF62"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4016"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF62">
                          Innovation, Sciences et Développement économique
                          Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF63"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="52"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF63">
                          {`Institut canadien d'information sur la santé`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF64"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4004"
                        />
                        <input type="hidden" name="_sDF" value="on" />
                        <label htmlFor="sDF64">
                          {`Ministère de l'agriculture`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF65"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4046"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF65">
                          {`Ministère de l'énergie, des mines et des ressources`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF66"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4051"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF66">
                          {`Ministère de l'expansion économique régionale`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF67"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4055"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF67">
                          {`Ministère de l'expansion industrielle régionale`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF68"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4010"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF68">
                          Ministère de la défense nationale
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF69"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4011"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF69">Ministère de la justice</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF70"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4009"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF70">
                          Ministère des affaires étrangères et du commerce
                          international
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF71"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4073"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF71">
                          Ministère des affaires indiennes et du Nord canadien
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF72"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4050"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF72">
                          Ministère des communications
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF73"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="109"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF73">Ministère des finances</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF74"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2847"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF74">
                          Ministère des mines et des relevés techniques
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF75"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="112"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF75">
                          Ministère des pêches et des océans
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF76"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="47"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF76">
                          Office des normes générales du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF77"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="70"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF77">
                          Office des transports du Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF78"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="178"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF78">
                          {`Office national de l'énergie`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF79"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="205"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF79">Parcs Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF80"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4007"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF80">Parlement</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF81"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="49"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF81">Patrimoine canadien</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF82"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4066"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF82">
                          Pêches et environnement Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF83"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2624"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF83">
                          {`Procréation assistée Canada`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF84"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4064"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF84">
                          {`Régie de l'énergie du Canada`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF85"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4040"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF85">
                          Relations Couronne-Autochtones et affaires du Nord
                          Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF86"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2442"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF86">
                          Ressources humaines et Développement des compétences
                          Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF87"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2542"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF87">
                          Ressources humaines et Développement social Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF88"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="192"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF88">
                          Ressources naturelles Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF89"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2746"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF89">
                          R et D pour la défense Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF90"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="122"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF90">Santé Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF91"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2564"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF91">Sécurité publique Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF92"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2426"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF92">
                          Sécurité publique et Protection civile Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF93"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2611"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF93">
                          Service canadien du renseignement de sécurité
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF94"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="1182"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF94">
                          Service correctionnel Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF95"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="4039"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF95">
                          Services aux Autochtones Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF96"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="2805"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF96">Services partagés Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF97"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="31"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF97">
                          {`Société canadienne d'hypothèques et de logement`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF98"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="25"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF98">
                          {`Société d'assurance-dépôts du Canada`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF99"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="223"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF99">
                          Solliciteur général Canada
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF100"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="7"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF100">Statistique Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF101"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="1"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF101">Statuts</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF102"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="187"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF102">
                          {`Table ronde nationale sur l'environnement et
                          l'économie`}
                        </label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF103"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="233"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF103">Transports Canada</label>{" "}
                      </div>{" "}
                      <div className="checkbox">
                        {" "}
                        <input
                          id="sDF104"
                          name="sDF"
                          className="noMarginLeft"
                          type="checkbox"
                          value="214"
                        />
                        <input type="hidden" name="_sDF" value="on" />{" "}
                        <label htmlFor="sDF104">
                          Travaux publics et Services gouvernementaux Canada
                        </label>{" "}
                      </div>{" "}
                    </div>{" "}
                    <ul id="toggle-depts-link" className="list-unstyled hidden">
                      <li id="toggle-depts" className="" tabIndex={0}>
                        Afficher plus
                      </li>
                    </ul>{" "}
                  </fieldset>{" "}
                  <input id="st" name="st" value="1" type="hidden" />{" "}
                  <input id="ssti" name="ssti" type="hidden" value="1" />{" "}
                  <input id="ast" name="ast" value="test" type="hidden" />{" "}
                  <input id="cnst" name="cnst" type="hidden" value="" />{" "}
                  <input id="adof" name="adof" value="true" type="hidden" />{" "}
                  <input id="e" name="e" value="0" type="hidden" />{" "}
                  <input id="f" name="f" value="0" type="hidden" />{" "}
                  <div className="mrgn-tp-md">
                    {" "}
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Appliquer les filtres"
                    />{" "}
                    <a
                      className="mrgn-lft-md"
                      href="recherche4d7f.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on"
                      title="Effacer les filtres"
                    >
                      Effacer
                    </a>{" "}
                  </div>
                </form>
              </div>
            </div>
            <div className="panel panel-default">
              {" "}
              <div className="panel-body">
                {" "}
                <ul>
                  {" "}
                  <li>
                    <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=6&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on">
                      {" "}
                      Modifier cette recherche{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    <a href="https://publications.gc.ca/site/fra/recherche/rechercheAvancee.html">
                      {`Recherche avancée`}
                    </a>
                  </li>{" "}
                </ul>{" "}
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <h2 className="wb-inv">{`Pages de résultat`}</h2>{" "}
        <ul className="pagination">
          {" "}
          <li className="disabled">
            {" "}
            <a
              href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=-9&amp;rq.ssp=-5"
              rel="prev"
            >
              {`Page pr&eacute;c&eacute;dente`}{" "}
              <span className="wb-inv">
                {`0&nbsp;: Page 0 des résultats de recherche`}
              </span>{" "}
            </a>{" "}
          </li>{" "}
          <li className="active hidden-xs">
            <a id="current_page">
              1 <span className="wb-inv">(page actuelle)</span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=11&amp;rq.ssp=-5">
              {" "}
              <span className="wb-inv">{`Page suivante`}</span> 2
              <span className="wb-inv">
                {`&nbsp;: Page 2 des résultats de recherche`}
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=21&amp;rq.ssp=-5">
              {" "}
              3
              <span className="wb-inv">
                {`&nbsp;: Page 3 des résultats de recherche`}
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=31&amp;rq.ssp=-5">
              {" "}
              4
              <span className="wb-inv">
                &nbsp;: Page 4 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=41&amp;rq.ssp=-5">
              {" "}
              5
              <span className="wb-inv">
                &nbsp;: Page 5 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=51&amp;rq.ssp=-5">
              {" "}
              6
              <span className="wb-inv">
                &nbsp;: Page 6 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=61&amp;rq.ssp=-5">
              {" "}
              7
              <span className="wb-inv">
                &nbsp;: Page 7 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=71&amp;rq.ssp=-5">
              {" "}
              8
              <span className="wb-inv">
                &nbsp;: Page 8 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=81&amp;rq.ssp=-5">
              {" "}
              9
              <span className="wb-inv">
                &nbsp;: Page 9 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=91&amp;rq.ssp=-5">
              {" "}
              10
              <span className="wb-inv">
                &nbsp;: Page 10 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li className="hidden-xs">
            <a href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=101&amp;rq.ssp=-5">
              {" "}
              11
              <span className="wb-inv">
                &nbsp;: Page 11 des résultats de recherche
              </span>
            </a>
          </li>{" "}
          <li>
            <a
              href="https://publications.gc.ca/site/fra/recherche/recherche.html?st=1&amp;e=0&amp;f=0&amp;ssti=on&amp;ast=test&amp;cnst=&amp;adof=on&amp;hpp=10&amp;psi=11&amp;rq.ssp=-5"
              rel="next"
            >
              Page suivante<span className="wb-inv">2</span>
              <span className="wb-inv">
                &nbsp;: Page 2 des résultats de recherche
              </span>
            </a>
          </li>{" "}
        </ul>
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
                <time property="dateModified">2013-04-03</time>
              </dd>
            </dl>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
