import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 /* items = ["Jinhwan",
          "June",
          "Hanbin",
          "Bobby",
          "Chanwoo"];*/
  items = [
      { name: "jinhwan" , tel : "0825520276", avatar :"1.jpg"},
      { name: "June" , tel : "0825520276", avatar : "2.jpg"},
      { name: "Hanbin" , tel : "0825520276" , avatar: "3.jpg"},
      { name: "Hanbin" , tel : "0825520276" , avatar :"4.jpg"},
      { name: "Bobby", tel :"0825520276", avatar :"5.jpg"}   
  ];

  itemSelected(item : string){
    console.log("Selected Item" ,item);
}
  constructor(public navCtrl: NavController) {

  }

}
