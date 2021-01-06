export const resourceReducerState = {
  view: 'home',
  apiAddress: null
}


export function resourceReducer(state, action) {
  switch (action.type) {

    case 'home': {
      return {
        view: 'home',
      }
    }

    case 'quotes-gen': {
      return {
        view: 'quotes-gen',
        apiAddress: '/api/gen-quotes',
      }
    }

    case 'quotes-sp': {
      return {
        view: 'quotes-sp-' + action.payload,
        apiAddress: '/api/sp-quotes-' + action.payload,
      }
    }

    case 'quotes-new': {
      // call api which will add new quote and redirect to list view
      return {
        view: 'quotes-gen',
        apiAddress: '/api/new-quotes',
        apiArgs: {method: 'POST'}
      }
    }

    case 'quotes-del': {
      return {
        view: 'quotes-gen',
        apiAddress: 'api/del-quotes-' + action.payload,
        apiArgs: {method: 'DELETE'}
      }
    }

    case 'quotes-save': {
      const id = action.payload.id;
      return {
        view: 'quotes-sp-' + id,
        apiAddress: 'api/save-quotes',
        apiArgs: action.payload.body
      }
    }

    case 'resources-gen': {
      return {
        view: 'resources-gen',
        apiAddress: '/api/gen-resources',
        }
    }

    case 'resources-sp': {
      return {
        view: 'resources-sp-' + action.payload,
        apiAddress: '/api/sp-resources-' + action.payload,
        }
    }


    case 'videos-gen': {
      return {
        view: 'videos-gen',
        apiAddress: null,
        }
    }

    case 'videos-sp': {
      return {
        view: 'videos-sp',
        apiAddress: null,
        }
    }

    case 'blog-gen': {
      return {
        view: 'blog-gen',
        apiAddress: null,
        }
    }

    case 'blog-sp': {
      return {
        view: 'blog-sp',
        apiAddress: null,
        }
    }

    case 'thesaurus-gen': {
      return {
        view: 'thesaurus-gen',
        apiAddress: null,
        }
    }

    case 'thesaurus-sp': {
      return {
        view: 'thesaurus-sp',
        apiAddress: null,
        }
    }

    default:
      throw new Error(`unknown view: ${action.type}`);
  }
}