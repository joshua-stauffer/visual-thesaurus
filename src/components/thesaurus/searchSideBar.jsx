import { useState } from 'react';
import {ThesaurusTerm} from './thesaurusTerm';
import { SideBarButtons } from './sideBarButtons';
import { SearchText } from './searchText';
import { useApi } from './apiHook';

export function SearchSideBar({clickNode, ...props}) {
  const [userSearch, setUserSearch] = useState('');
  const { data } = useApi();
  // console.log('in search side bar, data is ', data)

  const searchData = input => {
    setUserSearch(input);
  }

  const filteredData = userSearch.length ?
    Object.keys(data).filter(d => d.includes(userSearch))
    :
    [];

  const submit = e => {
    e.preventDefault();
    clickNode(userSearch)
  }

  return (
    <div className="sidebar">
      <SideBarButtons {...props}/>
      <form onSubmit={submit} className="search-form">
        <input
          type="text"
          placeholder="Begin typing to explore!"
          onChange={e => searchData(e.target.value)}
          required
          className="search-bar"
        />
        <p className="case-warning">Note: search is case sensitive</p>
        <button className="search-button">Go</button>
      </form>
      <ul>
        {filteredData.length ?
          filteredData.map((d, i) => (<ThesaurusTerm key={i} term={d}/>))
          :
          <SearchText userSearch={userSearch} />
        }
      </ul>
    </div>
  )
}