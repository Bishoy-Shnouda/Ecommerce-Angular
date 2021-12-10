import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledAdsService {
  adsList: string[];
  constructor() {

    this.adsList = ["Big Sales Start Soon",
      "Wait For White Friday Offers",
      "Best Shopping in Decamber",
      "Big offers nex weak",
      "Wait For Black Friday Offers",
      "Sale Now",

    ]
  }


  ScheduledAds() {
    let observ = new Observable<string>((observer) => {
      let counter = 0;
      let msgtime = setInterval(() => {

        if (this.adsList[counter] == "") {
          observer.error("Empty String");
        }

        observer.next(this.adsList[counter]);

        if (this.adsList.length - 1 > counter) {
          counter++;
        }
        else {
          observer.complete();
        }
      }, 3000);

      return {
        unsubscribe() {
          clearInterval(msgtime);
        }

      }

    });

    return observ;
  }
}
