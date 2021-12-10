import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductsApiServiceService } from 'src/app/Services/products-api-service.service';
import { ICategoryApi } from 'src/app/ViewModles/icategory-api';
import { IshoppingCartItems } from 'src/app/ViewModles/ishopping-cart-items';
import { OrderDetilesComponent } from '../order-detiles/order-detiles.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent  implements OnInit ,AfterViewInit {

  Cateogry!:ICategoryApi[];
  shoppingCartItems:IshoppingCartItems[]=[];
  selectedCategoryID:number=0;
  totalPric:number|null=null;
  @ViewChild('Selectitem') Selectitem!:ElementRef;
  @ViewChild(OrderDetilesComponent)CartChildobj!:OrderDetilesComponent;
  constructor(private apiCategory:CategoryApiService,
    private apiproductservice:ProductsApiServiceService
    ) { 
    
  }
  ngOnInit(): void {
    this.apiCategory.getAllCategory().subscribe(
      (reponse)=>{
        this.Cateogry=reponse;
      }
    )



  }
  ngAfterViewInit(): void {
    console.log(this.Selectitem.nativeElement.selectedIndex); 
    console.log(    this.CartChildobj.selectedcatid);
  }




  shoppingCartItemsChanged(selectedItem:IshoppingCartItems){
    let product=this.shoppingCartItems.find(pro=>pro.ID==selectedItem.ID);

    if(product){
      product.SelectedQuantity=selectedItem.SelectedQuantity;
      product.Price=selectedItem.Price;
      product.TotalPrice=selectedItem.TotalPrice;

    }

    else if(selectedItem.SelectedQuantity!>0)
    this.shoppingCartItems.push(selectedItem);
  }



// Buy(pid:number | undefined,pSelectedQuantity:number){
//   let product;
//   if(pid!=undefined)
//   this.apiproductservice.getProductsByID(pid).subscribe(
//     (respone)=>{
//       product=respone;
//       product.Quantity=product.Quantity-pSelectedQuantity;
//       this.apiproductservice.editQuantaty(product).subscribe(
//       )
//     }
//   )
 
// }

}



