import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { ContextMenuOutletComponent } from './context-menu-outlet.component';
import { appReducer } from './+state/app.reducer';
import { environment } from '../environments/environment';
import { ContextMenuForPanel1Component } from './context-menu-for-panel1.component';
import { ContextMenuDirective } from './context-menu.directive';
import { appInitialState } from './+state/app.init';
import { ContextMenuForPanel2Component } from './context-menu-for-panel2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextMenuOutletComponent,
    ContextMenuForPanel1Component,
    ContextMenuForPanel2Component,
    ContextMenuDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {app: appReducer},
      {initialState: appInitialState}
    ),
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
