import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OriginListComponent } from './origin-list/origin-list.component';
import { RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { AfstoreComponent } from './afstore/afstore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    //AppComponent,
    OriginListComponent,
    FrameworkComponent,
    AboutComponent,
    AfstoreComponent,
    AddComponent,
    BlogComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: OriginListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'origins/:originId',
        component: AfstoreComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
