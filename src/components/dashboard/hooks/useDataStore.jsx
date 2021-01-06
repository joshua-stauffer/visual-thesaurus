
import { useGenericStore } from './useGenericStore';
import { useSpecificStore } from './useSpecificStore';

import { parseView } from './../utils/parseView';
import { useEffect } from 'react';

export function useDataStore(){
  
  const [accessQuotesStore, changeList, resetView, viewHasBeenReset] = useSpecificStore('quotes');
  let genQuotesData = useGenericStore('quotes', changeList, resetView, viewHasBeenReset);


  const genResourcesData = useGenericStore('resources')


  const getData = (rawView) => {

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