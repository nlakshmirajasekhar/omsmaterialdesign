import { HttpClient } from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../services/vendor.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  public searchvend:string="";
  public createview:boolean=true;
  constructor(private router:Router,private serv:VendorService) {

    this.serv.getvendors().subscribe(
      res=>{
        console.log(res);
      }
    )


   }

  ngOnInit(): void {
  }
  edit()
  {

  }
  delete()
  {

  }
  create()
  {

    this.createview=false;

    this.router.navigateByUrl('vendorcreate')



  }

}
