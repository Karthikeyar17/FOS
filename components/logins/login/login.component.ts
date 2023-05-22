import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { users } from './users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUserLock: IconProp = faUserLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private auth: AuthService, private router: Router, private library: FaIconLibrary) {
    library.addIcons(faHouseChimneyWindow);
  }

  ngOnInit(): void {
    if (this.auth.isLoggedIn() && this.auth.getCurrentUser().role === 'admin') {
      this.router.navigate(['/admin-menu']);
    }
    if (this.auth.isLoggedIn() && this.auth.getCurrentUser().role === 'user') {
      this.router.navigate(['/user-menu']);
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        this.auth.login(user).subscribe(
          result => {
            console.log(result);
            if (user.role === 'admin') {
              this.router.navigate(['/admin-menu']);
            }
            if (user.role === 'user') {
              this.router.navigate(['/user-menu']);
            }
          },
          (err: Error) => {
            alert(err.message);
          }
        );
      } else {
        alert('Invalid email or password');
      }
    }
  }
}
