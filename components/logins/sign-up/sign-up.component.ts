import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from '../login/users';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.SignUpForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.SignUpForm.valid) {
      const name = this.SignUpForm.value.name;
      const mobile = this.SignUpForm.value.mobile;
      const email = this.SignUpForm.value.email;
      const password = this.SignUpForm.value.password;
      const confirmPassword = this.SignUpForm.value.confirmPassword;
      // Check if passwords match
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Check if user already exists
      const userExists = users.some(u => u.email === email);
      if (userExists) {
        alert('User already exists');
        return;
      }
      // Generate new user ID
      const newUserId = Math.max(...users.map(u => u.id)) + 1;
      // Create new user with "user" role
      const newUser = {
        id: newUserId,
        email: email,
        password: password,
        role: 'user'
      };
      // Add new user to users array
      users.push(newUser);
      // Display success message and redirect to login page
      alert('Account created successfully');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);    }
  }
}
