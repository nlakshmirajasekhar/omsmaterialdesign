import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-order-i',
  templateUrl: './order-i.component.html',
  styleUrls: ['./order-i.component.css']
})
export class OrderIComponent implements OnInit {

  public id:number=1;


  constructor(private serv:OrderserviceService) {
    this.serv.getordersheader().subscribe(
      res=>{
        console.log(res);


      }
    )
    this.serv.getorderslinesbyid(this.id).subscribe(
      res=>{
        console.log(res);

      }
    )

   }

  ngOnInit(): void {
  }

}
