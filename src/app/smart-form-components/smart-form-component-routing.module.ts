import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SmartFormComponentPageComponent } from './page/smart-form-component-page.component';

const routes: Route[] = [
  {
    path: 'smart-form-component',
    component: SmartFormComponentPageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SmartFormComponentRoutingModule {

}
