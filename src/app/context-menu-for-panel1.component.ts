import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-context-menu-for-panel1',
  template: `
    <ul>
      <li (click)="onOptionClick('A')">Option A</li>
      <li>Option B</li>
      <li>Option C</li>
    </ul>
  `,
  styles: [`
      :host {
          display: inline-block;
          border: 4px solid black;
          border-radius: 6px;
          padding: 4px;
          background: lightgrey;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuForPanel1Component {

  constructor() {
  }

  onOptionClick(option) {
    console.log(option);
  }
}
