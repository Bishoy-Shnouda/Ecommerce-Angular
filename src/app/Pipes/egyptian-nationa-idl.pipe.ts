import { Pipe, PipeTransform } from '@angular/core';
import { range } from 'rxjs';

@Pipe({
  name: 'egyptianNationaIDl'
})
export class EgyptianNationaIDlPipe implements PipeTransform {

  transform(natID:number): Date{
    let sNumber = natID.toString();
    let sen=sNumber.substring(0, 2)
    let Year = sNumber.substring(1, 3);
    let Month = sNumber.substring(3, 5)
    let Day = sNumber.substring(5, 7)
    
    let dob =  Month + '-' + Day+'-' +(parseInt(sen) < 30? '19' : '20') + Year ;

    let newDate = new Date(dob.toString());  
    return newDate;
  }


   



}
