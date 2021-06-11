import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendorview',
  templateUrl: './vendorview.component.html',
  styleUrls: ['./vendorview.component.css']
})
export class VendorviewComponent implements OnInit {

public createview:boolean=false;
public searchvend:string="";

  constructor(private router:Router,private vend:VendorService) {

    this.vend.getvendors().subscribe(
     res=> {
       console.log(res);

      }
    )
    
   }

  ngOnInit(): void {
  }

}
