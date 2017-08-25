import { Directive, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContextMenuState } from './+state/context-menu.interfaces';

@Directive({
  selector: '[ngxContextMenu]'
})
export class ContextMenuDirective {
  @Input() ngxContextMenu;

  @HostListener('contextmenu', ['$event'])
  onBrowserContextMenu(event) {
    this.store.dispatch({
      type: 'OPEN_CONTEXT_MENU', payload: {
        componentType: this.ngxContextMenu,
        mouseX: event.clientX,
        mouseY: event.clientY
      }
    });
    return false;
  }

  constructor(private store: Store<ContextMenuState>) {
  }
}