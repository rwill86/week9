import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProServiceService } from '../pro-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     public products;
	 public search:string = '';
     constructor(private router:Router, private form:FormsModule, private proServ:ProServiceService){
     }

     ngOnInit(){
		 this.getProducts();
     }	 

	 public getProducts(){
		 this.proServ.getProducts().subscribe(
		     data => {
				 this.products = data;
				 return true;
			 },
			 err => console.error(err),
             () => console.log('done loading products')			 
		 );
	 }
	 
	 public getSearch(){
		 this.proServ.searchProducts(this.search).subscribe(
			 data => { 
			     this.products = data;
                 var mess = document.getElementById('message');					 
                 mess.innerHTML = 'Searched for ' + this.search;				 				 
			     return true;
			 },
			 err => {
				 console.error('Error Finding a Product.');
			 }
		 );
	 }
}
