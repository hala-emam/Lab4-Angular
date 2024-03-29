import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductsServiceService } from '../../services/products-service.service';
import { IProduct } from '../../models/iproduct';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  currentID:number=0;
  currentProduct:IProduct|null=null;
constructor(private _activatedRoute:ActivatedRoute, private _ProductsServiceService:ProductsServiceService){

}
ngOnInit(): void {
    this.currentID=Number(this._activatedRoute.snapshot.paramMap.get('id'));
   this.currentProduct= this._ProductsServiceService.getProductsByID(this.currentID)
}
}
