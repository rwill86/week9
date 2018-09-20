import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
     providedIn: 'root'
})
export class ProServiceService{
     constructor(private http:HttpClient){
	 }
	 
	 public getProducts(){
		 return this.http.get('http://localhost:3000/api/products');
	 }
	 
	 public updateProducts(product){
         var body = JSON.stringify(product);
		 return this.http.put('http://localhost:3000/api/update/' + product.name, body, httpOptions);
     }
	 
	 public deleteProducts(product){
         return this.http.get('http://localhost:3000/api/delete/' + product.name);
     }
	 
	 public addProducts(na:string, pr:string, desc:string){
		 var a = 'http://localhost:3000/api/add?name=' + na + '&price=' + pr + '&description=' + desc;
		 return this.http.get(a);
	 }
	 
	 public searchProducts(na:string){
         var a = 'http://localhost:3000/api/search?name=' + na; 		 
		 return this.http.get(a);
	 }
}
