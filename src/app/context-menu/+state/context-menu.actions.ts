export interface OpenContextMenuAction {
  type: 'OPEN_CONTEXT_MENU';
  payload: {
    componentType: any;
    mouseX: number;
    mouseY: number;
  };
}

export interface CloseContextMenuAction {
  type: 'CLOSE_CONTEXT_MENU';
}

export type ContextMenuAction =
  OpenContextMenuAction |
  CloseContextMenuAction;