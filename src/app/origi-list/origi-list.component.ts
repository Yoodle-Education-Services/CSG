import { Component, OnInit } from '@angular/core';
import { CsgDataService } from '../csg-data.service';
import { Server } from 'http';
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
  
  public origins: Origin[];

  private getOrigins() : void {
    this.csgDataService
      .getOrigins()
      .then(foundOrigins => this.origins = foundOrigins);
  }
  ngOnInit(): void {
    this.getOrigins();