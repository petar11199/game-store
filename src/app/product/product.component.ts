import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
  product: any;
 
 constructor(
   private productList: ProductService, 
   private route: ActivatedRoute) { }
 
 ngOnInit() {
   this.product = this.productList.getProduct(
     +this.route.snapshot.params['id']
   )
  }
 }
