import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Distance} from './distance'
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({  
  templateUrl: './distance.component.html',
  styleUrls: ['../app.component.css']
})
export class DistanceComponent {
  none;
  result:number;
  public fromLst : Array<String> = [
    'Centimeter',
    'Meter',
    'Kilometer'
  ]

  public toLst = [
    'Centimeter',
    'Meter',
    'Kilometer'
  ]
  
  constructor(private http: Http) 
  {
    //initializing select lists
    this.distanceModel.from = this.none = ""
    this.distanceModel.to = this.none = ""
  }

  //initializing model object
  distanceModel = new Distance();

  //method on convert button click
  public convert() :number {
    alert("inside convert method" + JSON.stringify(this.distanceModel));
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
