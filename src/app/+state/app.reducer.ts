import { App } from './app.interfaces';
import { AppAction } from './app.actions';

export function appReducer(state: App, action: AppAction): App {
  switch(action.type) {
    case 'REQUEST_CONTEXT_MENU': {
      return {
        ...state,
        contextMenuType: action.payload.componentType,
        mouseX: action.payload.mouseX,
        mouseY: action.payload.mouseY
      };
    }
    case 'OPEN_CONTEXT_MENU': {
      return {
        ...state,
        contextMenuIsOpen: true
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