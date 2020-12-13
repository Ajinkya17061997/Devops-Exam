import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(private prs:ProductService) { }
  title=""
  price=0.0
  ngOnInit(): void {
    this.loadproducts
  }
  products=[];
  loadproducts(){
    this.prs.getProducts().subscribe(response=>{
      if(response["status"]=='success'){
        this.products = response['data']
      }
    })
  }

}
