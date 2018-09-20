import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProServiceService } from '../pro-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
     public products;
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

	 public updateProduct(product){
		 this.proServ.updateProducts(product).subscribe(
             data => { 
			     this.getProducts();
				 console.log('Saving a user.');
                 return true;
             },
             err => {
                 console.error('Error Saving a Product.');
             }
         );
	 }	
	 
	 public deleteProduct(product){
		 this.proServ.deleteProducts(product).subscribe(
             data => { 
			     this.getProducts();
				 console.log('Deleting a product.');
                 return true;
             },
             err => {
                 console.error('Error Deleting a Product.');
             }
         );
	 }

}
