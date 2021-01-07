import { EditQuote } from './ResourceViews/editQuote';
import { EditResource } from './ResourceViews/editResource';
import { EditVideo } from './ResourceViews/editVideo';
import { EditThesaurus } from './ResourceViews/editThesaurus';

import { parseView } from './utils/parseView';


export function SpecificResourceView({ rawView, dispatch, dataObject, dataFuncs }) {

  const [view, id] = parseView(rawView)

  switch (view) {

    case 'quotes-sp':
      return <EditQuote dispatch={dispatch} dataObject={dataObject} dataFuncs={dataFuncs}/>

    case 'resources-sp':
      return <EditResource dispatch={dispatch} dataObject={dataObject} dataFuncs={dataFuncs}/>

    case 'videos-sp':
      return <EditVideo dispatch={dispatch} dataObject={dataObject} dataFuncs={dataFuncs}/>

    case 'thesaurus-sp':
      return <EditThesaurus dispatch={dispatch} dataObject={dataObject} dataFuncs={dataFuncs}/>

    default: throw new Error('unknown view in SpecificResourceView')
  }

}