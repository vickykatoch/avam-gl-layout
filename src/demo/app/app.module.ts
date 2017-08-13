import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvamLayoutModule, } from 'avam-ng-layout';
import { GLTestModule } from './gl-layout-components/index';
// import { TestPanelComponent, TestViewComponent, TestDynComponent, GLLayoutTestComponent } from './gl-layout-components/index';
// import { GlLayoutConfig } from './gl-layout-components/gl-layout.config';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    AvamLayoutModule,
    GLTestModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
