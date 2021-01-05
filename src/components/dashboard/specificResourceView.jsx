import { EditQuote } from './ResourceViews/editQuote';

import { parseView } from './utils/parseView';


export function SpecificResourceView({ rawView, dispatch, dataObject }) {

  const [view, id] = parseView(rawView)

  switch (view) {

    case 'quotes-sp':
      return <EditQuote dispatch={dispatch} dataObject={dataObject}/>

    default: throw new Error('unknown view in SpecificResourceView')
  }

}