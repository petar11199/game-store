import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { OrderRegisterComponent } from './order-register/order-register.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { FilterPipe } from './filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeaturesComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    FooterComponent,
    OrderRegisterComponent,
    OrderFormComponent,
    OrderSuccessfulComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FilterPipeModule,
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'home' , component: HomeComponent },
      { path: 'features' , component: FeaturesComponent },
      { path: 'product/:id' , component: ProductComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'order-register/:id', component: OrderRegisterComponent },
      { path: 'order-successful/:id', component: OrderSuccessfulComponent }
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
