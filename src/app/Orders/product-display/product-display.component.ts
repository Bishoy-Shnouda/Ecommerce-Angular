import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsApiServiceService } from 'src/app/Services/products-api-service.service';
import { IproductApi } from 'src/app/ViewModles/iproduct-api';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  productID: number = 0;
  product: IproductApi | undefined;
  islastproduct: boolean = false;
  countproducts!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private apiproductService: ProductsApiServiceService, private location: Location,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param) => {
      this.productID = Number(param.get('pID'));
      this.apiproductService.getProductsByID(this.productID).subscribe(
        (response) => {
          this.product = response;
        }
      );
    })

    this.apiproductService.getAllProducts().subscribe(
      (response) => {
        this.countproducts = response.length;
      }
    )
  }
  goback() {
    this.location.back();
  }

  prev() {
    this.productID--;
    this.router.navigate(['/apiProducts', this.productID]);
    if (this.product?.id! <= this.countproducts) {
      this.islastproduct = false;
    }
  }


  next() {

    if (this.product?.id! >= this.countproducts) {
      this.islastproduct = true;
    }

    else {
      this.islastproduct = false;
      this.productID++;
      this.router.navigate(['/apiProducts', this.productID]);
    }



  }
}

