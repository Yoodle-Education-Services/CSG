import { Component, OnInit, Input } from '@angular/core';
import {  CsgDataService } from '../csg-data.service';
import { Origin } from '../origin-list/origin-list.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-afstore',
  templateUrl: './afstore.component.html',
  styleUrls: ['./afstore.component.css']
})
export class AfstoreComponent implements OnInit {
  @Input() newOrigin: Origin;
  // newOrigin: Origin;
  
constructor(private csgDataService: CsgDataService, private route: ActivatedRoute  ) { }

public origins: Origin[];

// private getStores() : void {
//   this.csgDataService
//   .getStoresByOriginId()
//     .then(foundOrigins => this.origins = foundOrigins);
// }
ngOnInit(): void {
  this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('originId');
        return this.csgDataService.getStoresByOriginId(id);
      })
    )
    .subscribe((newOrigin: Origin) => {
      this.newOrigin = newOrigin;
      console.log(this.newOrigin);
    });
}

}

