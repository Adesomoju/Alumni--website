import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'terms', component: TermsConditionComponent},
  {path: 'policy', component: PrivacyPolicyComponent},
  {path: 'login', component: LoginPageComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, EventsComponent, ClassesComponent, TermsConditionComponent, PrivacyPolicyComponent, LoginPageComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
