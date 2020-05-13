import { Component, OnInit } from '@angular/core';
import { CsgDataService } from '../csg-data.service';
export class Origin {
  _id: string;
  origin: string;
}
@Component({
  selector: 'app-origin-list',
  templateUrl: './origin-list.component.html',
  styleUrls: ['./origin-list.component.css']
})
export class OriginListComponent implements OnInit {

  constructor(private csgDataService: CsgDataService) { }
  // origins: Origin[] = [{
  //   _id: '5ebad5e27411e525541be539',
  //   origin: 'African'
  // }, {
  //   _id: '5eb70c7d2cf4d83818ec879',
  //   origin: 'Indian'
  // }];
  public origins: Origin[];

  private getOrigins() : void {
    this.csgDataService
      .getOrigins()
      .then(foundOrigins => this.origins = foundOrigins);
  }
  ngOnInit(): void {
    this.getOrigins();
  }
}
