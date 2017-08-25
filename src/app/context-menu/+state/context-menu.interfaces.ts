export interface ContextMenu {
  contextMenuIsOpen: boolean;
  contextMenuType: any;
  mouseX: number;
  mouseY: number;
}

export interface ContextMenuState {
  contextMenu: ContextMenu;
}