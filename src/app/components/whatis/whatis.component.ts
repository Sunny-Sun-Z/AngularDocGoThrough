import { Component } from '@angular/core';

interface User {
  firstname: string,
  lastname: string,
  age: number
};

@Component({
  selector: 'app-whatis',
  // templateUrl: "./whatis.component.html",
  template: `
      <p [style.color] = 'color'></p>
      <button (click)='clickMe()'>ClickMe</button>
      <div *ngIf="canEdit; else noEdit">{{message}}</div>
      <ng-template #noEdit>Cannot edit!</ng-template>
      <p [attr.contenteditable]="canEdit">{{message}}</p>
      <ul *ngFor= "let item of users">
        <li>{{item.firstname}} {{" " + item.lastname}} {{" " + item.age}}</li>
      </ul>

  `,
  styleUrls: ['./whatis.component.css']
})


export class WhatisComponent {

  users: User[] = [
    {
      firstname: "shufang",
      lastname: "sun",
      age: 54
    },
    {
      firstname: "Max",
      lastname: "zheng",
      age: 55
    }
  ]


  message = "Hello World!"

  color = 'blue';
  sayHelloId = '1';
  disabled = false;

  canEdit = false;
  // noEdit = false;

  clickMe() {
    this.color = 'red';
    //alert('hi')
    // this.disabled = true;
    this.canEdit = !this.canEdit;
    if (this.canEdit)
      this.message = "You can edit me!";
    else
      this.message = "You cannot edit me!";
  }
}
