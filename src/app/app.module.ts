import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ContextMenuForPanel1Component } from './context-menu-for-panel1.component';
import { ContextMenuForPanel2Component } from './context-menu-for-panel2.component';
import { ContextMenuModule } from './context-menu/context-menu.module';

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuForPanel1Component,
    ContextMenuForPanel2Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    ContextMenuModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  entryComponents: [
    ContextMenuForPanel1Component,
    ContextMenuForPanel2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
