import { Component, Input, NgModule } from '@angular/core';
import { TasksService } from './tasks.service'; 

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  newTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddTask() {
    this.newTask = true;
  }

  onCancelNewTask() {
    this.newTask = false;
  }
}
