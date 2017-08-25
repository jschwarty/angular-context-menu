import {
  ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnDestroy, ViewChild,
  ViewContainerRef, HostListener,
} from '@angular/core';
import { AppState } from './+state/app.interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-context-menu-outlet',
  template: `
    <div [class.open]="contextMenuIsOpen | async" (click)="closeContextMenu()">
      <div 
        [style.top]="(mouseY | async) + 'px'" 
        [style.left]="(mouseX | async) + 'px'" 
        (click)="stopPropagation($event)"
        (contextmenu)="stopPropagation($event)">
        <ng-template #content></ng-template>
      </div>
    </div>
  `,
  styles: [`
    :host > div {
      display: none;
    }
    :host > div.open {
        display: block;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
    :host > div > div {
        position: relative;
        display: inline-block;
        z-index: 1;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuOutletComponent implements OnDestroy {
  @ViewChild('content', {read: ViewContainerRef}) contentViewContainerRef;
  @HostListener('contextmenu') onBrowserContextMenu() {
    this.closeContextMenu();
    return false;
  }
  contextMenuIsOpen = this.store.select(s => s.app.contextMenuIsOpen);
  mouseX = this.store.select(s => s.app.mouseX);
  mouseY = this.store.select(s => s.app.mouseY);
  componentRef;
  subscription: Subscription;

  constructor(private store: Store<AppState>,
              private cfr: ComponentFactoryResolver) {
    this.subscription = this.store.select(s => s.app.contextMenuType)
      .subscribe(component => {
        if (component !== null) {
          this.clear();
          const factory = this.cfr.resolveComponentFactory(component);
          this.componentRef = this.contentViewContainerRef.createComponent(factory);
          this.store.dispatch({type: 'OPEN_CONTEXT_MENU'});
        }
      });
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  closeContextMenu() {
    this.clear();
    this.store.dispatch({type: 'CLOSE_CONTEXT_MENU'});
  }

  private clear() {
    this.componentRef && this.componentRef.destroy();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
