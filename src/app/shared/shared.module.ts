import { NgModule } from "@angular/core";
import { Card } from "./card/card";

@NgModule({
  declarations: [Card],
  exports: [Card]
})   // all the modules that are made available globally put here and then imported in the app module
export class SharedModule{

}