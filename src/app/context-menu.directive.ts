import { Directive, HostListener, Input } from '@angular/core';
import { AppState } from './+state/app.interfaces';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[ngxContextMenu]'
})
export class ContextMenuDirective {
  @Input() ngxContextMenu;

  @HostListener('contextmenu', ['$event'])
  onBrowserContextMenu(event) {
    this.store.dispatch({
      type: 'REQUEST_CONTEXT_MENU', payload: {
        componentType: this.ngxContextMenu,
        mouseX: event.clientX,
        mouseY: event.clientY
      }
    });
    return false;
  }

  constructor(private store: Store<AppState>) {
  }
}