import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { commonUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) {


    
   }
  

   public getvendors()
   {
     
     return this.http.get(`${commonUrl}vendor/getvendor`);

     
   }
   public setvendors(obj:any)
   {
     return this.http.post(`${commonUrl}vendor/setVendor`,obj);
   }
   public updatevendors(obj:any)
   {
     return this.http.post(`${commonUrl}vendor/updatevendor`,obj);
   }
   public deletevendors(id:number)
   {
     return this.http.delete(`${commonUrl}vendor/deletevendor?id=`+id);
   }

   public getitems(id:number)
   {
     return this.http.get(`${commonUrl}item/ItembyVendorID?id=`+id);
   }
   public setitemsbyVendor(obj:any)
   {
     return this.http.post(`${commonUrl}item/itemsetbyvendor`,obj);
   }
   public updateitembyvendor(obj:any)
   {
     return this.http.post(`${commonUrl}item/`,obj)
   }
   public deleteitems(id:number)
   {
     return this.http.delete(`${commonUrl}item/deleteItems?id=`+id);
   }



}
