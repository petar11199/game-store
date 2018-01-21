import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.css']
})
export class OrderRegisterComponent implements OnInit {
  product: any;
  quantity: any = 1;
  totalPrice: any;
  notValid:boolean = false;
  
  constructor(
    private productList: ProductService, 
    private route: ActivatedRoute) {}

  qunatityPlus() {
    this.quantity ++;
    this.totalPrice = this.quantity * this.product.price;
    localStorage.setItem('quantity', this.quantity);
  }
  qunatityMinus() {
    this.quantity --;
    this.totalPrice = this.quantity * this.product.price;
    localStorage.setItem('quantity', this.quantity);
    if(this.quantity == 0)
        this.notValid = true;
  }
  
  ngOnInit() {
    this.product = this.productList.getProduct(
      +this.route.snapshot.params['id']
    )
    this.totalPrice = this.product.price;
   }

}
