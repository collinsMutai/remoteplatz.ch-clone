import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { SharedModule } from './Shared/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BtnstyleDirective } from './Directives/btnstyle.directive';
import { FilterPipe } from '../app/Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FiltertitlePipe } from './Pipes/filtertitle.pipe';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnstyleDirective,
    FilterPipe,
    FiltertitlePipe,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
