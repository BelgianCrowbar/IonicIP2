import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CardComponent} from './card/card';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [CardComponent],
  imports: [IonicModule],
  exports: [CardComponent],

})
export class ComponentsModule {
}
