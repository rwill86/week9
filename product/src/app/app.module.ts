import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { ProServiceService } from './pro-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
     AppComponent,
     ProductsComponent,
     AddComponent,
     UpdateComponent,
     MenuComponent
  ],
  imports: [
     HttpClientModule,
     FormsModule,
	 HttpModule,
     BrowserModule,
     AppRoutingModule
  ],
  providers: [ProServiceService],
  bootstrap: [AppComponent]
})
export class AppModule{ 
}
