import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Chen Qiuxia's personal resume`;
  uncheckableRadioModel = 'Middle';
  showFlag = false;
  habbit=["sleep","eating","dog","pig"];
  itemDetail = "";

  toggle($event){
    this.showFlag = !this.showFlag;
  }
}
