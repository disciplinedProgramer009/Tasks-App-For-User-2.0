import { NgModule } from "@angular/core";
import { Newtask } from "./new-task/newtask";
import { Task } from "./task/task";
import { Tasks } from "./tasks";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ Newtask, Task, Tasks],
  exports: [Tasks],
  imports: [FormsModule, CommonModule, SharedModule],
})
export class TasksModule{

}