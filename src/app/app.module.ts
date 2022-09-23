import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { FirstPipe } from './products/pipes/first.pipe';
import { SecondPipe } from './products/pipes/second.pipe';
import { BestProductsPageComponent } from './products/pages/best-products-page/best-products-page.component';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    FirstPipe,
    SecondPipe,
    BestProductsPageComponent,
    ProductsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
