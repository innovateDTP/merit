import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Currency} from './currency'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({  
  templateUrl: './currency.component.html',
  styleUrls: ['../app.component.css']
})
export class CurrencyComponent {
  none;
  result:number;
  public fromLst : Array<String> = [
    'Euro',
    'Rupee',
    'Dollar'
  ]

  public toLst = [
    
    'Rupee',
    'Euro',
    'Dollar'
  ]
  
  constructor(private http: Http) 
  {
    //initializing select lists
    this.currencyModel.from = this.none = ""
    this.currencyModel.to = this.none = ""
  }

  //initializing model object
  currencyModel = new Currency();

  //method on convert button click
  public convert() :number {
    alert("inside convert method" + JSON.stringify(this.currencyModel));
    this.http
           .get('http://rate-exchange-1.appspot.com/currency?from=USD&to=EUR')
           .map(this.extractData)
           .catch( this.handleError);
           
    //alert("got amount: " + amount);
    return 0;
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);  
    return Observable.throw(errMsg)  
  }
  
}
