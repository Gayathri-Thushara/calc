import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calc';
  t1:any;t2:any
  result:any=""
  funcal(op:any){
    if(op=="m")
    this.result=this.t1*this.t2
    else if(op=="s")
    this.result=this.t1-this.t2
    else if(op=="d")
    this.result=this.t1/this.t2

  }
}
