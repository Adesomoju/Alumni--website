import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  public FirstPolicy = [
    // tslint:disable-next-line: max-line-length
    'Our Association operates http://www.stlouisowoalumni.com,This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.',
    // tslint:disable-next-line:max-line-length
    'We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.',
  ];

  public SecondPolicy = [
    // tslint:disable-next-line:max-line-length
    'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.',
    'Personally identifiable information may include, but is not limited to your name and Personal Information.',
  ];

  public ThridPolicy = [
    // tslint:disable-next-line:max-line-length
    'We may use your Personal Information to contact you with newsletters, events  and other information relating to our alumni development.',
  ];

  public SecPolicy = [
    // tslint:disable-next-line:max-line-length
    'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure.',
    'While we strive to use acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
  ];

  public ChangePolicy = [
// tslint:disable-next-line: max-line-length
    'This Privacy Policy is effective as of (1st of July 2019) and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.',
    'We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.',
    // tslint:disable-next-line:max-line-length
    'Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute, your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.',
    // tslint:disable-next-line:max-line-length
    'If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.',
  ];

  public ContactPolicy = [
    'If you have any questions about this Privacy Policy, please contact us.',
  ];

  constructor() { }

  ngOnInit() {
  }

}
