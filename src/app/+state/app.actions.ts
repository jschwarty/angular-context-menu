export interface RequestContextMenuAction {
  type: 'REQUEST_CONTEXT_MENU';
  payload: {
    componentType: any;
    mouseX: number;
    mouseY: number;
  };
}

export interface OpenContextMenuAction {
  type: 'OPEN_CONTEXT_MENU';
}

export interface CloseContextMenuAction {
  type: 'CLOSE_CONTEXT_MENU';
}

export type AppAction =
  RequestContextMenuAction |
  OpenContextMenuAction |
  CloseContextMenuAction;