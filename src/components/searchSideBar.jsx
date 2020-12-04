import { useState } from 'react';
import {ThesaurusTerm} from './thesaurusTerm'
import { SideBarButtons } from './sideBarButtons'
import data from '../d3/data.json';

export function SearchSideBar({clickNode, ...props}) {
  const [userSearch, setUserSearch] = useState('');

  const searchData = input => {
    setUserSearch(input);
  }

  const filteredData = userSearch.length ?
    Object.keys(data).filter(d => d.startsWith(userSearch))
    :
    [];

  const submit = e => {
    e.preventDefault();
    clickNode(userSearch)
  }

  return (
    <div className="sidebar">
      <SideBarButtons {...props}/>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Begin typing to explore the thesaurus"
          onChange={e => searchData(e.target.value)}
          required
          className="search-bar"
        />
        <button>Go</button>
      </form>
      <ul>
        {filteredData.length ?
          filteredData.map((d, i) => (<ThesaurusTerm key={i} term={d}/>))
          :
          <p>Sorry, your search doesn't match any terms.</p>
        }
      </ul>
    </div>
  )
}