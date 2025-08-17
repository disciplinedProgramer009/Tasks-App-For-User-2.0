import { Component, Input, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  user = DUMMY_USERS;
  // selectedUserName: string = 'Please select a valid user';
  selectedUserId?: string;

  get selectedUser() {
    return this.user.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    // const userSelected = this.user.find(user => user.id === id);
    this.selectedUserId = id;
  }
}
