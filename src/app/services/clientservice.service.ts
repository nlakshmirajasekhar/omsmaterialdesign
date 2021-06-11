import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commonUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private http:HttpClient) { }

getclient()
{
  return this.http.get(`${commonUrl}client/GetClient`);

}
getclientbyid(id:number)
{
  return this.http.get(`${commonUrl}client/GetClientById?id=`+id);

}

setclient(obj:any)
{
  return this.http.post(`${commonUrl}client/SetClient`,obj);

}
updateclient(obj:any)
{
  return this.http.post(`${commonUrl}client/SetClientUpdate`,obj);

}
deleteclient(id:number)
{
  return this.http.delete(`${commonUrl}client/DeleteClient?id=`+id)
}

}
