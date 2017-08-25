import { NgModule } from '@angular/core';
import { ContextMenuDirective } from './context-menu.directive';
import { ContextMenuOutletComponent } from './context-menu-outlet.component';
import { StoreModule } from '@ngrx/store';
import { contextMenuReducer } from './+state/context-menu.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContextMenuDirective,
    ContextMenuOutletComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('contextMenu', contextMenuReducer)
  ],
  exports: [
    ContextMenuDirective,
    ContextMenuOutletComponent
  ]
})
export class ContextMenuModule {}