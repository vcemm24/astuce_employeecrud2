import { Component, OnInit } from '@angular/core';
interface gender{
  value:string;
  viewvalue:string;
}
interface position{
  value:string,
  viewvalue:string
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
usergender:gender[]=[
 { value:'male',viewvalue:'male'},
  {value:'female',viewvalue:'female'}
]
userposition:position[]=[
  {value:'angulardev',viewvalue:'Anguler Developer'},
  {value:'vuedev',viewvalue:'Vue Developer'},
  {value:'nodedev',viewvalue:'Node Developer'},
  {value:'laraveldev',viewvalue:'Laravel Developer'},

]
  constructor() { }

  ngOnInit(): void {
  }

}
