import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { CartItem } from '../../cart/cart.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrderFormComponent } from '../order-form/order-form.component';
import { OrderService } from '../my-orders/order.service';
import { Order } from '../my-orders/order';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  transactionId!: string;
  items!: CartItem[];
  total!: number;
  address!: string;
  showPrompt: boolean = false;
  feedbackRating: number = 3;
  orderFormComponent: OrderFormComponent;
  orderId!: number;

  constructor(
    private cartService: CartService,
    private router: Router,
    formBuilder: FormBuilder,
    private orderService: OrderService
  ) {
    this.orderFormComponent = new OrderFormComponent(formBuilder, router);
  }

  ngOnInit(): void {
    this.orderId = Math.floor(Math.random() * 1000000) + 1; // Generate a random order ID
    this.transactionId = 'TRX' + Math.floor(Math.random() * 1000000) + 1; // Generate a random transaction ID
    this.items = this.cartService.getCartItems(); // Get cart items from cart service
    this.total = this.cartService.getTotalPrice(); // Get total price from cart service
    this.address = this.orderFormComponent.getAddress(); // Get delivery address from order form component

    // Create an order object and add it to the OrderService
    const order: Order = {
      transactionId: this.transactionId,
      items: this.items,
      total: this.total,
      address: this.address,
      status: 'In Transit',
      id: 0
    };
    this.orderService.addOrder(order);

    this.cartService.clearCart(); // Clear cart after successful order placement
  }

  showFeedbackPrompt(): void {
    this.showPrompt = true;
  }

  submitFeedback(): void {
    // submit feedback logic here
    this.showPrompt = false;
  }
}
