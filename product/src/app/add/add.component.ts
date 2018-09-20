import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProServiceService } from '../pro-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
     public products;
	 public name:string = '';
	 public price:string = '';
	 public description:string = '';
     constructor(private router:Router, private form:FormsModule, private proServ:ProServiceService){
	 }

     ngOnInit(){
     }
	 
	 public createProduct(name, price, description){
		 this.proServ.addProducts(this.name, this.price, this.description).subscribe(
			 data => { 
				 this.name = '';
	             this.price = '';
	             this.description = '';
				 var mess = document.getElementById('message');	
                 mess.innerHTML = 'Added Product.';				 
			     return true;
			 },
			 err => {
				 console.error('Error Adding a Product.');
			 }
		 );
	 }
}
