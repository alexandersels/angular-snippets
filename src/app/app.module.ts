import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultipleTabsModule } from './multiple-tabs/multiple-tabs.module';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { SmartFormComponentPageComponent } from './smart-form-components/page/smart-form-component-page.component';
import { SmartComponentFormComponent } from './smart-form-components/components/smart-component-form/smart-component-form.component';
import { SmartLoadAllDropdownComponent } from './smart-form-components/components/smart-load-all-dropdown/smart-load-all-dropdown.component';
import { SmartFilterDropdownComponent } from './smart-form-components/components/smart-filter-dropdown/smart-filter-dropdown.component';
import { SmartFormComponentsModule } from './smart-form-components/smart-form-components.module';

@NgModule({
  declarations: [
    AppComponent,
    SmartFormComponentPageComponent,
    SmartComponentFormComponent,
    SmartLoadAllDropdownComponent,
    SmartFilterDropdownComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MultipleTabsModule,
    SmartFormComponentsModule,
    SharedModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
