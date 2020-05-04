import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { OriginListComponent } from './origin-list/origin-list.component';



@NgModule({
  declarations: [
    //AppComponent,
    OriginListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [OriginListComponent]
})
export class AppModule { }
