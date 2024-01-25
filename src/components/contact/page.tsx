'use client'

import "./page.css";

import React, { useEffect, useRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import Script from "next/script";
import { useTranslate } from "../../i18n";

export default function ContactUSComponent() {
  const t = useTranslate();
  const captchaRef = useRef(null)
  function handleSubmit(e: any) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());

    console.log("formData is here:")
    console.log(formJson)
  }

  return <>
   <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
    <h1 property="name" id="wb-cont" className="mrgn-tp-md">Contact Government of Canada Publications</h1>
    <div className="wb-frmvld">
      <form id="contactForm" onSubmit={handleSubmit} method="post">
        <p>The Publishing and Depository Services Directorate manages the online catalogue of Government of Canada
          publications. You may contact the program for help finding a publication or with enquiries related to preparing
          and submitting your government publication to the catalogue, including questions about International Standard
          Book Number (ISBN) and catalogue numbers and other publication requirements. <br /> You may also contact the
          Infodep mailing list administrator with enquiries related to mailing list posts.</p>
        <h2>On this page</h2>
        <ul>
          <li><a href="#alternateformats">Alternate formats of publications</a></li>
          <li><a href="#gcp">General enquiries related to Government of Canada publications</a></li>
          <li><a href="#emailform">Email form</a></li>
          <li><a href="#infodep">Enquiries about the Infodep mailing list</a></li>
        </ul>
        <p>Please read our <a href="#pn">privacy notice statement</a>.</p>
        <h2 id="alternateformats">Alternate formats of publications</h2>
        <p>To request an alternate format, complete the Government of Canada Publications <a href="#emailform">email
          form</a>. Use the form's "question or comment" field to specify the requested publication. </p> We'll direct
        your request to the author department who will provide the requested format. <h2 id="gcp">General enquiries
          related to Government of Canada publications</h2>
        <dl className="dl-horizontal">
          <dt>Telephone:</dt>
          <dd>1-800-O-Canada (1-800-622-6232)</dd>
          <dt>TTY:</dt>
          <dd>1-800-926-9105</dd>
        </dl>
        <h2 id="emailform">Email form</h2>
        <p>All personal information on this form is protected under the <cite>Privacy Act</cite>.</p>
        <div className="form-group"> <label htmlFor="fromName" className="required"> <span className="field-name">Name</span> <strong
          className="required">(required)</strong> </label> <input id="fromName" name="fromName" className="form-control"
            type="text" required={true} defaultValue="" size={40} maxLength={40} /> </div>
        <div className="form-group"> <label htmlFor="fromEmailAddress" className="required"> <span className="field-name">Email</span>
          <strong className="required">(required)</strong> </label> <input id="fromEmailAddress" name="fromEmailAddress"
            className="form-control" placeholder="name@example.com" type="email" required={true} defaultValue="" size={40}
            maxLength={40} /> </div>
        <div className="form-group"> <label htmlFor="fromTelephoneNumber"> <span className="field-name">Telephone number</span>
        </label> <input id="fromTelephoneNumber" name="fromTelephoneNumber" className="form-control"
          placeholder="555-555-5555" type="tel" defaultValue="" size={40} maxLength={20} /> </div>
        <div className="form-group"> <label htmlFor="comments" className="required"> <span className="field-name">Question or
          comment</span> <strong className="required">(required)</strong> </label>
          <textarea id="comments"
            name="comments" className="form-control" required={true} rows={7} cols={60} defaultValue="" />
        </div>
        <p>I have read the <a href="#pn">privacy notice statement</a> and I am aware of my rights and I submit all the
          above information freely.</p>
        <ReCAPTCHA sitekey="6LcN-ggjAAAAAFC1h-d5YpxS8xRVixmBSvpWRbYy" ref={captchaRef} />
        <input className="btn btn-default" id="submitId" type="submit" defaultValue="Submit" />
      </form>
    </div>
    <h2 id="infodep">Enquiries about the Infodep mailing list</h2>
    <p>Contact the mailing list administrator by email: <a
      href="mailto:infodep@tpsgc-pwgsc.gc.ca">infodep@tpsgc-pwgsc.gc.ca</a>.</p>
    <p>To subscribe or unsubscribe from the mailing list, write “subscribe” or “unsubscribe” in the subject line.</p>
    <h2 id="pn">Privacy notice statement</h2>
    <p>Provision of the information is on a voluntary basis. We will use the information for the purpose of responding to
      your questions/comments, and to improve our internet presence. The information will be held in Public Works and
      Government Services Canada's Personal Information Bank number PPU 115 Internet and PPE 830 intranet Services, and it
      will be retained according to the retention and disposal schedule established for this bank.</p>
    <p>Your personal information is protected under the provisions of the <a
      href="http://laws-lois.justice.gc.ca/eng/acts/P-21/"><cite>Privacy Act</cite></a>. Under the act, you have the
      right to request access to and correction of your personal information, if erroneous or incomplete. If you wish to
      avail yourself of this right or require clarification about this statement, contact our Privacy Coordinator at <a
        href="mailto:AIPRP.ATIP@tpsgc-pwgsc.gc.ca">AIPRP.ATIP@tpsgc-pwgsc.gc.ca</a>. For more information on privacy
      issues and the <cite>Privacy Act</cite> consult the <a href="https://www.priv.gc.ca/index_e.asp">Office of the
        Privacy Commissioner of Canada</a>.</p>
    <p>For more information about your rights, visit <a
      href="https://www.canada.ca/en/treasury-board-secretariat/services/access-information-privacy/access-information/information-about-programs-information-holdings.html">Info
      Source</a>. This is a Government of Canada publication available in major libraries, at government information
      offices and from constituency offices of federal Members of Parliament.</p>
    <p>The Internet is a public forum and electronic information can be intercepted. This is not a secure website. Please do
      not disclose unnecessary confidential information about yourself or your accounts with Public Works and Government
      Services Canada.</p>
    <div className="row pagedetails">
      <div className="clear visible-xs"></div>
      <div className="col-md-6 col-sm-6 col-lg-4 mrgn-tp-sm">
        <a className="btn btn-default btn-block" href="https://www.canada.ca/en/report-problem">Report a problem or mistake on
          this page</a>
      </div>
      <div className="col-md-6 col-xs-6 text-right">
        <div className="wb-share" data-wb-share='{"lnkclassName": "btn btn-default"}'></div>
      </div>
      <div className="clear visible-xs"></div>
      <div className="col-xs-12 datemod">
        <dl id="wb-dtmd">
          <dt>Date modified:&#32;</dt>
          <dd><time property="dateModified">2017-04-01</time></dd>
        </dl>
      </div>
    </div>
  </>;
}
