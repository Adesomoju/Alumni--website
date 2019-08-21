import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './ui/layout/layout.component';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { ServeService } from './ui/serve.service';




const appRoutes: Routes = [
  {path: '**', component: LayoutComponent},
  {path: '', component: LayoutComponent},

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'stliousmodel'),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    UiModule
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
