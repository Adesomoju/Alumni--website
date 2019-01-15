import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'classes', component: ClassesComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, EventsComponent, ClassesComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
