import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  userName = '';

  constructor() {
    const state = history.state as { name?: unknown };
    if (typeof state?.name === 'string') {
      this.userName = state.name;
    }
  }
}



