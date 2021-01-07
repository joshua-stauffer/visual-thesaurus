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

    // quotes

    case 'quotes-gen': {
      return {
        view: 'quotes-gen',
        apiAddress: '/api/quotes',
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'quotes-sp': {
      const id = action.payload.id;
      return {
        view: 'quotes-sp-' + id,
        apiAddress: '/api/quotes-' + id,
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'quotes-new': {
      // call api which will add new quote and redirect to list view
      return {
        view: 'quotes-gen',
        apiAddress: '/api/quotes',
        apiArgs: {
          method: 'POST'
        }
      }
    }

    case 'quotes-del': {
      const id = action.payload.id;
      return {
        view: 'quotes-gen',
        apiAddress: 'api/quotes-' + id,
        apiArgs: {
          method: 'DELETE'
        }
      }
    }

    case 'quotes-updateOne': {
      const id = action.payload.id;
      return {
        view: 'quotes-sp-' + id,
        apiAddress: 'api/quotes-' + id,
        apiArgs: {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(action.payload.body) // need to update this - this logic should only be here
        }
      }
    }

    // resources
    case 'resources-gen': {
      return {
        view: 'resources-gen',
        apiAddress: '/api/resources',
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'resources-updateBatch': {
      return {
        view: 'resources-gen',
        apiAddress: '/api/resources',
        apiArgs: {
          method: 'PUT',
          body: JSON.stringify(action.payload.body)
        }
      }
    }

    case 'resources-new': {
      return {
        view: 'resources-gen',
        apiAddress: '/api/resources',
        apiArgs: {
          method: 'POST'
        }
      }
    }

    case 'resources-sp': {
      const id = action.payload.id;
      return {
        view: 'resources-sp-' + id,
        apiAddress: '/api/resources-' + id,
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'resources-updateOne': {
      return {
        view: 'resources-sp-' + action.payload.id,
        apiAddress: '/api/resources-' + action.payload.id,
        apiArgs: {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(action.payload.body)
        }
      }
    }

    case 'resources-NewById': {
      const id = action.payload.id;
      return {
        view: 'resources-sp-' + id,
        apiAddress: '/api/resources-' + id,
        apiArgs: {
          method: 'POST',
        }
      }
    }

    case 'resources-del': {
      const id = action.payload.id;
      return {
        view: 'resources-gen',
        apiAddress: '/api/resources-' + id,
        apiArgs: {
          method: 'DELETE'
        }
      }
    }

    // videos

    case 'videos-gen': {
      return {
        view: 'videos-gen',
        apiAddress: '/api/videos',
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'videos-updateBatch': {
      return {
        view: 'videos-gen',
        apiAddress: '/api/videos',
        apiArgs: {
          method: 'PUT',
          body: JSON.stringify(action.payload.body)
        }
      }
    }

    case 'videos-new': {
      return {
        view: 'videos-gen',
        apiAddress: '/api/videos',
        apiArgs: {
          method: 'POST'
        }
      }
    }

    case 'videos-sp': {
      const id = action.payload.id;
      return {
        view: 'videos-sp-' + id,
        apiAddress: '/api/videos-' + id,
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'videos-updateOne': {
      return {
        view: 'videos-sp-' + action.payload.id,
        apiAddress: '/api/videos-' + action.payload.id,
        apiArgs: {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(action.payload.body)
        }
      }
    }

    case 'videos-NewById': {
      const id = action.payload.id;
      return {
        view: 'videos-sp-' + id,
        apiAddress: '/api/videos-' + id,
        apiArgs: {
          method: 'POST',
        }
      }
    }

    case 'videos-del': {
      const id = action.payload.id;
      return {
        view: 'videos-gen',
        apiAddress: '/api/videos-' + id,
        apiArgs: {
          method: 'DELETE'
        }
      }
    }

    // blog

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

    // thesaurus

    case 'thesaurus-gen': {
      return {
        view: 'thesaurus-gen',
        apiAddress: '/api/thesaurus',
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'thesaurus-sp': {
      const id = action.payload.id;
      return {
        view: 'thesaurus-sp-' + id,
        apiAddress: '/api/thesaurus-' + id,
        apiArgs: {
          method: 'GET'
        }
      }
    }

    case 'thesaurus-new': {
      // call api which will add new quote and redirect to list view
      return {
        view: 'thesaurus-gen',
        apiAddress: '/api/thesaurus',
        apiArgs: {
          method: 'POST'
        }
      }
    }

    case 'thesaurus-del': {
      const id = action.payload.id;
      return {
        view: 'thesaurus-gen',
        apiAddress: 'api/thesaurus-' + id,
        apiArgs: {
          method: 'DELETE'
        }
      }
    }

    case 'thesaurus-updateOne': {
      const id = action.payload.id;
      return {
        view: 'thesaurus-sp-' + id,
        apiAddress: 'api/thesaurus-' + id,
        apiArgs: {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(action.payload.body) // need to update this - this logic should only be here
        }
      }
    }

    default:
      throw new Error(`unknown view: ${action.type}`);
  }
}