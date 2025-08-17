import { Component, Input, inject } from '@angular/core';
import { type TaskType } from './task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true }) userTask!: TaskType;
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.userTask.id);
  }
}
