export const resourceReducerState = {
  resource: 'home',
  apiAddress: null,
  generalApiAddress: null,
  specificApiAddress: null
}


export function resourceReducer(state, action) {
  switch (action.type) {

    case 'home': {
      return {
        ...state,
        resource: 'home',
        generalApiAddress: null,
        specificApiAddress: null
      }
    }

    case 'quotes': {
      return {
        ...state,
        resource: 'quotes',
        generalApiAddress: null,
        specificApiAddress: null
      }
    }

    case 'resources': {
      return {
        ...state,
        resource: 'resources',
        generalApiAddress: null,
        specificApiAddress: null
      }
    }

    case 'videos': {
      return {
        ...state,
        resource: 'videos',
        generalApiAddress: null,
        specificApiAddress: null
      }
    }

    case 'blog': {
      return {
        ...state,
        resource: 'blog',
        generalApiAddress: null,
        specificApiAddress: null
      }
    }

    case 'thesaurus': {
      return {
        ...state,
        resource: 'thesaurus',
        generalApiAddress: null,
        specificApiAddress: null
      }
    }

    default:
      throw new Error();
  }
}