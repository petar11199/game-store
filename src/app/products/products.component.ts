import { Component, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges{
  visibleProducts: any[] = [];
  filterBy?:string = 'all';
  userFilter: any = {title: ''};

  constructor(private productList: ProductService) {
      
    this.visibleProducts = this.productList.getProducts();
  }
  
  ngOnChanges() {
    this.visibleProducts = this.productList.getProducts();
  }
}
