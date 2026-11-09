import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
interface product{
  id:number;
  title:string;
  price:number;
  thumbnail:string;
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
private productService=inject(ProductsService);

products:product[]=[];
loading=true;
errorMessage='';

ngOnInit(): void {
  this.loadproducts();
}
loadproducts():void{
  this.loading=true;
  this.errorMessage='';

  this.productService.getProducts().subscribe({
    next:(response)=>{
      this.products=response.products;
      this.loading=false;
    },
    error:()=>{
      this.errorMessage='failed to load';
      this.loading=false;
    }

  })
}
}
