import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'howItWorks', component: HowItWorksComponent },
  { path: 'about', component: AboutComponent}
];
// loads component based on path at the end of url

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
