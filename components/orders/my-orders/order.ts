import { CartItem } from "../../cart/cart.service";

export interface Order {
  id: number;
  transactionId: string;
  items: CartItem[];
  total: number;
  status: string;
  address: string;
}
