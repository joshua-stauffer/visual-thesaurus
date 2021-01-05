export const resourceReducerState = {
  view: 'home',
  apiAddress: null
}


export function resourceReducer(state, action) {
  switch (action.type) {

    case 'home': {
      return {
        ...state,
        view: 'home',
        apiAddress: null
      }
    }

    case 'quotes-gen': {
      return {
        view: 'quotes-gen',
        apiAddress: '/api/gen-quotes',
        apiArgs: 'my api args'
      }
    }

    case 'quotes-sp': {
      return {
        view: 'quotes-sp-' + action.payload,
        apiAddress: '/api/sp-quotes-' + action.payload,
      }
    }

    case 'resources-gen': {
      return {
        ...state,
        view: 'resources-gen',
        apiAddress: '/api/gen-resources',
        }
    }

    case 'resources-sp': {
      return {
        ...state,
        view: 'resources-sp',
        apiAddress: null,
        }
    }


    case 'videos-gen': {
      return {
        ...state,
        view: 'videos-gen',
        apiAddress: null,
        }
    }

    case 'videos-sp': {
      return {
        ...state,
        view: 'videos-sp',
        apiAddress: null,
        }
    }

    case 'blog-gen': {
      return {
        ...state,
        view: 'blog-gen',
        apiAddress: null,
        }
    }

    case 'blog-sp': {
      return {
        ...state,
        view: 'blog-sp',
        apiAddress: null,
        }
    }

    case 'thesaurus-gen': {
      return {
        ...state,
        view: 'thesaurus-gen',
        apiAddress: null,
        }
    }

    case 'thesaurus-sp': {
      return {
        ...state,
        view: 'thesaurus-sp',
        apiAddress: null,
        }
    }

    default:
      throw new Error();
  }
}