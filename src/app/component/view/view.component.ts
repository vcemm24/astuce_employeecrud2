import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
myemployee:any;
  constructor(private employeeservice:MyserviceService) { }

  ngOnInit(): void {
    this.getmyuser();
  }
  getmyuser(){
    this.employeeservice.getuser().subscribe(res=>{
      this.myemployee = res;
    })
  }

}
