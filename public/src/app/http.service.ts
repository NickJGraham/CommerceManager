
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get("api/products");
  }

  
  getProduct(id){
    console.log('id', id);
    return this._http.get(`api/products/${id}`);
  }


  getOneProduct(id){
    return this._http.get(`api/editproducts/${id}`);
  }

  addProduct(newProduct){
    console.log("Adding Product")
      return this._http.post('api/products', newProduct);
  }

  editProduct(id, data){
    return this._http.put(`api/products/${id}`, data);
  }

  deleteProduct(id){
    return this._http.delete(`api/delete/${id}`);
  }
}