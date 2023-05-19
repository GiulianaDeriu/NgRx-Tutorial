import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter.component';
import { counterReducer } from './ngrx/reducer';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({count: counterReducer})],
  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/