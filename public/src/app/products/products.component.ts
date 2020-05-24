import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.loadPage()
  }

  loadPage(){
    let observable = this._httpService.getAllProducts();
    observable.subscribe((data) => {
      console.log("Loading Products", data)
      this.products = data['product'];
    });
    }

  deleteProduct(id:string){
    console.log("~Component: deleteProduct() initialzed~")
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data=>{
      console.log("Component: deleteAuthor() response,", data)
      this.loadPage();
    })
  }
}