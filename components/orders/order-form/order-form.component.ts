import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
selector: 'app-order-form',
templateUrl: './order-form.component.html',
styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
getAddress(): string {
  throw new Error('Method not implemented.');
}
orderForm!: FormGroup;

constructor(private formBuilder: FormBuilder,private router:Router) { }

ngOnInit(): void {
this.orderForm = this.formBuilder.group({
name: ['', Validators.required],
ohNumber: ['', Validators.required],
email: ['', [Validators.required, Validators.email]],
altNumber: ['', Validators.required],
address: ['', Validators.required],
altAddress: ['']
});
}

onSubmit(): void {
// submit form logic here
}

onSameAddressChange(event: Event): void {
const target = event.target as HTMLInputElement;
if (target.checked) {
const altAddressControl = this.orderForm.get('altAddress');
if (altAddressControl) {
altAddressControl.setValue(this.orderForm.get('address')?.value);
altAddressControl.disable();
}
} else {
const altAddressControl = this.orderForm.get('altAddress');
if (altAddressControl) {
altAddressControl.enable();
}
}
}
goToCart(): void {
  this.router.navigate(['/cart']);
}
}
