import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [];

  constructor() {}

  // Method to add a new order
  addOrder(order: Order): void {
    this.orders.push(order);
  }

  // Method to get all orders
  getOrders(): Observable<Order[]> {
    // Return orders as an observable using the `of` operator
    return of(this.orders);
  }
}
