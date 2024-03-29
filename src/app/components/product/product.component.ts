import { Component, EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { NationaIDPipe } from '../../pipes/nationa-id.pipe';
import { ProductsServiceService } from '../../services/products-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductCardDirective,NationaIDPipe ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements  OnChanges {
products:IProduct[];
totalOrderPrice:number = 0;
filteredProducts:IProduct[];
id: string ='30101142400443';
FullDate: string = 'FullDate';

@Input() recievedCategoryId:number=0
ngOnChanges() {
// this.filterProducts();
this.filteredProducts=this._productsService.getProductsByCatID(this.recievedCategoryId)
}
//define event
@Output() onClickToBuyProduct:EventEmitter<IProduct>;
constructor(private _productsService:ProductsServiceService,private router:Router){
  this.products = this._productsService.getAllProducts();
  this.onClickToBuyProduct=new EventEmitter<IProduct>();
  this.filteredProducts=this.products;
}

// buy function
buy(product: IProduct ):void{
  if (product.quantity > 0 ) {
    product.quantity--;

  }
  //fire event
  this.onClickToBuyProduct.emit(product);
}


navigateToDetailsOfProduct(id:number){
  //this.router.navigateByUrl("/Details")
   //this.router.navigateByUrl(`/Details/${id}`)
  this.router.navigate(["/products",id])
}
}

