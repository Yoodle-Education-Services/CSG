import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OriginListComponent } from './origin-list/origin-list.component';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    OriginListComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [OriginListComponent]
})
export class AppModule { }
