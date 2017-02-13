import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
// import { SearchComponent } from './search.component';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule ],
  declarations: [ AppComponent,
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
