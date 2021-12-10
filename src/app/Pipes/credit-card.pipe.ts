import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(criditnumber:number): string {
    let sNumber = criditnumber.toString();
    let cridit =sNumber;
    if(sNumber.length==16){
    let p1=sNumber.substring(0, 4);
    let p2 = sNumber.substring(4, 8);
    let p3 = sNumber.substring(8, 12);
    let p4 = sNumber.substring(12, 16);
     cridit =  p1 + '-' + p2+'-' + p3+'-' + p4;
    }
    return cridit;
  }
}
