
import { useGenericStore } from './useGenericStore';
import { useSpecificStore } from './useSpecificStore';

import { parseView } from './../utils/parseView';

export function useDataStore(){
  const genQuotesData = useGenericStore('quotes-gen')
  const accessQuotesStore = useSpecificStore();

  const genResourcesData = useGenericStore('resources-gen')


  const getData = (rawView) => {

    // get id info from view, if necessary
    const [view, id] = parseView(rawView)

    switch (view) {
      case 'quotes-gen': 
        return genQuotesData;

      case 'quotes-sp': {
        const dataObject = accessQuotesStore(id)
        return dataObject
      }

      case 'resources-gen':
        return genResourcesData;

      case 'videos':
        return

      case 'blog':
        return

      case 'thesaurus':
        return

      case 'home':
        return {
          
        }

      default:
        throw new Error('unknown view passed to useDataStore')
    }
  }

  return getData
}