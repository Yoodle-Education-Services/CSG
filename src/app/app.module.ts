import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { OrigiListComponent } from './origi-list/origi-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    OrigiListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
