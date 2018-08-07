import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponet } from './products/product-list.components';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponet,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponet},
      {path: 'products/:id',
      canActivate:[ProductDetailGuard], component:ProductDetailComponent},
      {path: 'welcome',component:WelcomeComponent},
      {path: '',redirectTo:'welcome', pathMatch: 'full'},
      {path: '**',redirectTo:'welcome', pathMatch: 'full'}
    ])

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
