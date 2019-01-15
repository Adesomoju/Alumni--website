import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './ui/events/events.component';
import { ClassesComponent } from './ui/classes/classes.component';
import { LayoutComponent } from './ui/layout/layout.component';


const appRoutes: Routes = [
  {path: '**', component: LayoutComponent},
  {path: '', component: LayoutComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'events', component: EventsComponent},
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(appRoutes),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
