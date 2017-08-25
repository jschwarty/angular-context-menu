import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContextMenuForPanel1Component } from './context-menu-for-panel1.component';
import { ContextMenuForPanel2Component } from './context-menu-for-panel2.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Context menu example</h1>
    <p>(Right click or ctrl+shift+click on either of the panels below)</p>
    <div class="panel" [ngxContextMenu]="component1">Panel 1</div>
    <div class="panel" [ngxContextMenu]="component2">Panel 2</div>
    <app-context-menu-outlet></app-context-menu-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  component1 = ContextMenuForPanel1Component;
  component2 = ContextMenuForPanel2Component;
}
