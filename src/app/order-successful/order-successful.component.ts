import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  styleUrls: ['./order-successful.component.css']
})
export class OrderSuccessfulComponent {
  userInput: any;
  product: any;
  quantity: any;

  // uzimanje informacija o useru iz lokalnog storage-a
  user = JSON.parse(localStorage.getItem(this.userInput));
  
  constructor(
    private productList: ProductService, 
    private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.quantity = localStorage.getItem('quantity');
    this.product = this.productList.getProduct(
      +this.route.snapshot.params['id']
    )
   }
}
