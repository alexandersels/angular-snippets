import { NgModule } from '@angular/core';
import { MultipleTabsPageComponent } from './page/multiple-tabs-page.component';
import { MultipleTabsRoutingModule } from './multiple-tabs-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GroupsService } from './services/groups.service';
import { PhonesService } from './services/phones.service';
import { UsersService } from './services/users.service';
import { UsersOverviewComponent } from './components/users-overview/users-overview.component';
import { GroupsOverviewComponent } from './components/groups-overview/groups-overview.component';
import { PhonesOverviewComponent } from './components/phones-overview/phones-overview.component';
import { MultipleTabsStore } from './store/multiple-tabs.store';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { GroupsTableComponent } from './components/groups-table/groups-table.component';
import { PhonesTableComponent } from './components/phones-table/phones-table.component';

@NgModule({
  declarations: [
    MultipleTabsPageComponent,
    UsersOverviewComponent,
    GroupsOverviewComponent,
    PhonesOverviewComponent,
    UsersTableComponent,
    GroupsTableComponent,
    PhonesTableComponent
  ],
  imports: [
    SharedModule,
    MultipleTabsRoutingModule,
  ],
  exports: [
    MultipleTabsRoutingModule,
  ],
  providers: [
    GroupsService,
    PhonesService,
    UsersService,
    MultipleTabsStore,
  ],
})
export class MultipleTabsModule {

}
