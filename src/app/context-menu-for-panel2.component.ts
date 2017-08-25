import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-context-menu-for-panel2',
  template: `
    <ul>
      <li>Nav 1</li>
      <li>Nav 2</li>
      <li>Nav 3</li>
    </ul>
  `,
  styles: [`
      :host {
        display: inline-block;
        border: 1px solid black;
        padding: 4px;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuForPanel2Component {

  constructor() {
  }

}
