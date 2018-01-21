import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent{
  @Input() notValid: boolean;
  orderValue: any;
  userInput: any;
  product: any;

  constructor(
    private productList: ProductService, 
    private route: ActivatedRoute) {}

  orderSuccessful(orderForm) {
    this.orderValue = orderForm.value;

    // snimanje usera u lokalni storage
    localStorage.setItem(this.userInput, JSON.stringify(this.orderValue)); 
  }
  
  ngOnInit() {
    this.product = this.productList.getProduct(
      +this.route.snapshot.params['id']
    )
   }

}
