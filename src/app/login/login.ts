import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  registeredName = '';

  constructor(private  router: Router) {}

  ngOnInit() {
    const state = history.state as { name?: unknown };
    if (typeof state?.name === 'string') {
      this.registeredName = state.name;
    }
  }

  onLogin(name: string) {
    const trimmedName = (name ?? '').trim() || this.registeredName;
    console.log('User logged in!!');
    this.router.navigate(['/home'], { state: { name: trimmedName } });
  }
}
