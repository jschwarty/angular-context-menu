export interface App {
  contextMenuIsOpen: boolean;
  contextMenuType: any;
  mouseX: number;
  mouseY: number;
}

export interface AppState {
  readonly app: App;
}