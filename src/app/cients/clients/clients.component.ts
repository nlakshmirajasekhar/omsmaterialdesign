import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public searchvend:string="";
  constructor(private router:Router) { }

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


    this.router.navigateByUrl('vendorcreate')



  }


}
