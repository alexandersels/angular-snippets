import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SmartFormComponentRoutingModule } from './smart-form-component-routing.module';
import { PhoneService } from './services/phone.service';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    SmartFormComponentRoutingModule,
  ],
  exports: [
    SmartFormComponentRoutingModule,
  ],
  providers: [
    PhoneService,
  ]
})
export class SmartFormComponentsModule {
}
