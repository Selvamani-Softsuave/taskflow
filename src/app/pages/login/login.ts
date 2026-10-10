import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login();
    this.router.navigate(['/dashboard']);
  }
}
