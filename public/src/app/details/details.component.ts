import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  thisProduct: any;

  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findProduct();
  }

  findProduct(){
    this._route.params.subscribe((params) => {
      console.log("This ID in the URL is:", params["id"])
      let observable = this._httpService.getProduct(params["id"]);
      observable.subscribe((data: any) => {
        this.thisProduct = data;
        console.log("Working, finding author", this.thisProduct);
      })
    })
  }
  deleteProduct(id:string){
    console.log("~Component: deleteProduct() initialzed~")
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data=>{
      console.log("Component: deleteAuthor() response,", data)
      this._router.navigate(['/products']);
    })
  }

}
