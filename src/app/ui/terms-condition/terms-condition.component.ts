import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent implements OnInit {

  public FirstTerm = [
    // tslint:disable-next-line: max-line-length
    'Please read these terms and conditions carefully before using stlouisowoalunmi website and the "service" operated by us.',
   ];

  public ConditionPolicy = [
    // tslint:disable-next-line:max-line-length
    'We would provide our services to you, which are subject to the conditions stated below in this document. ',
    // tslint:disable-next-line:max-line-length
    'Every time you visit this website or use its services, you accept the following conditions. Hence, the reason we urge you to read them carefully.',
  ];

  public PrivacyPolicy = [
    // tslint:disable-next-line:max-line-length
    'Before you continue using our website we advise you to read our privacy policy page regarding our user data collection. It will help you to understand our practices better.',
  ];

  public CopyRightPolicy = [
    // tslint:disable-next-line:max-line-length
    'Content published on this website ie (digital Uploads/downloads, images, texts, graphics, logos) is the property of [SLOAA] and/or its content creators and protected by copyright laws.',
    ' The entire compilation of the content found on this website is the exclusive property of (SLOAA) with copyright authorship.',
  ];

  public CommPolicy = [
// tslint:disable-next-line: max-line-length
    'The entire communication with us is electronic. Every time you send us an email or visit our website, you would be communicating with us. You hereby consent to receive communications from us.',
    // tslint:disable-next-line:max-line-length
    'If you subscribe to the news on our website, you will receive regular emails from us. We will continue to communicate with you by posting news and notices and project updates on our website and by sending you emails.',
    // tslint:disable-next-line:max-line-length
    'You also agree that all notices, disclosures, agreements and other communication we provide to you electronically meet the legal requirements that such communications be in writing.',
  ];

  public LawPolicy = [
    // tslint:disable-next-line:max-line-length
    'By visiting this website, you agree that the laws of Nigeria without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between [SLOAA] and you, or its Executive.',
  ];

  public DisputesPolicy = [
    // tslint:disable-next-line:max-line-length
    'Any dispute related in any way to your visit to this website shall be arbitrated by state or federal court in Nigeria and you consent to exclusive jurisdiction and venue of such courts.',
  ];

  public LicensePolicy = [
    // tslint:disable-next-line:max-line-length
    'We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.',
  ];

  public UserPolicy = [
    // tslint:disable-next-line:max-line-length
    'If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details ie (username and password). You are responsible for all activities that occur under your account or password.',
    'We reserve all rights to terminate accounts, edit or remove content at our discretion.',
  ];

  constructor() { }

  ngOnInit() {
  }

}
