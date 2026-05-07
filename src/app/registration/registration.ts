import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  constructor(private router: Router) {}

  onRegister(name: string) {
    const trimmedName = (name ?? '').trim();
    console.log('User Registered');
    this.router.navigate(['/login'], { state: { name: trimmedName } });
  }
}
