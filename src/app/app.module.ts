import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { FirstPipe } from './products/pipes/first.pipe';
import { SecondPipe } from './products/pipes/second.pipe';
import { BestProductsPageComponent } from './products/pages/best-products-page/best-products-page.component';
import { ProductsTableComponent } from './products/components/products-table/products-table.component';
import { ProveObservableComponent } from './shared/prove-observable/prove-observable.component';
import { ObservableProductsComponent } from './products/pages/observable-products/observable-products.component';
import { ReqresComponent } from './reqres/pages/reqres/reqres.component';
import { FirstInterceptor } from './reqres/interceptors/first.interceptor';
import { SecondInterceptor } from './reqres/interceptors/second.interceptor';
import { ProveInoutComponent } from './shared/prove-inout/prove-inout.component';
import { HeroPageComponent } from './heroes/pages/hero-page/hero-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    FirstPipe,
    SecondPipe,
    BestProductsPageComponent,
    ProductsTableComponent,
    ProveObservableComponent,
    ObservableProductsComponent,
    ReqresComponent,
    ProveInoutComponent,
    HeroPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
   // { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
