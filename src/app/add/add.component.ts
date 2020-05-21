import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public newStore = {
    name:'',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    website: '',
    mapUrl: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
