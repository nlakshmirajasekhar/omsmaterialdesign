import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commonUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }
  
  getordersheader()
  {
    return this.http.get(`${commonUrl}orders/GetOrdersheader`);
  }
  getorderslinesbyid(id:number)
  {
    return this.http.get(`${commonUrl}orders/GetOrderslinesbyID?id=`+id);
  }

  setorders(obj:any)
  {
    return this.http.post(`${commonUrl}orders/SetOrders`,obj)
  }
  updateorders(obj:any)
  {
    return this.http.post(`${commonUrl}orders/SetOrdersupdate`,obj)
  }
  deleteorders(id:number)
  {
    return this.http.delete(`${commonUrl}orders/deleteorder?id=`+id);
  }
}
