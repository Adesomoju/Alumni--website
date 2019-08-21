import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassesComponent } from './classes/classes.component';
// import { EventsComponent } from './events/events.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { from } from 'rxjs';
import { LayoutComponent } from './layout/layout.component';
import { HistoryComponent } from './history/history.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const appRoutes: Routes = [
  // {path: 'events', component: EventsComponent},
  {path: 'Directories', component: ClassesComponent},
  {path: 'Terms', component: TermsConditionComponent},
  {path: 'Policy', component: PrivacyPolicyComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'History', component: HistoryComponent},
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  // tslint:disable-next-line:max-line-length EventsComponent,
  declarations: [HeaderComponent, FooterComponent, ClassesComponent, TermsConditionComponent, PrivacyPolicyComponent, LoginPageComponent, LayoutComponent, HistoryComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
