import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItemCount = this.cartService.getCartItems().reduce((total, item) => total + item.quantity, 0);
  }
}
