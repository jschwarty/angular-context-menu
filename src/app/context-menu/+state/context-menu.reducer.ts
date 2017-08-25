import { ContextMenuAction } from './context-menu.actions';
import { ContextMenu } from './context-menu.interfaces';
import { contextMenuInitialState } from './context-menu.init';

export function contextMenuReducer(state: ContextMenu = contextMenuInitialState, action: ContextMenuAction): ContextMenu {
  switch(action.type) {
    case 'OPEN_CONTEXT_MENU': {
      return {
        ...state,
        contextMenuIsOpen: true,
        contextMenuType: action.payload.componentType,
        mouseX: action.payload.mouseX,
        mouseY: action.payload.mouseY
      }
    }
    case 'CLOSE_CONTEXT_MENU': {
      return {
        ...state,
        contextMenuType: null,
        contextMenuIsOpen: false,
        mouseX: 0,
        mouseY: 0
      }
    }
    default: {
      return state;
    }
  }
}