import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) {


    
   }

   public getvendors()
   {
     return this.http.get('https://localhost:44358api/vendor/getvendor');

     
   }



}
