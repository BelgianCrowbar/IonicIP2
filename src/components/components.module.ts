import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CardComponent} from './card/card';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [CardComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [IonicModule],
  exports: [CardComponent],
  entryComponents: [CardComponent],

})
export class ComponentsModule {
}
