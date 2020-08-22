import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxTranslateComponent } from './ngx-translate.component';

const routes: Routes = [
  { path: 'ngx-translate', component: NgxTranslateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxTranslateRoutingModule { }
