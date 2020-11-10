import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MultipleTabsPageComponent } from './page/multiple-tabs-page.component';

const routes: Route[] = [
  {
    path: 'multiple-tabs',
    component: MultipleTabsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleTabsRoutingModule {

}
