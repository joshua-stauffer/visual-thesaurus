import { useState } from 'react';
import { useApi } from './oops_apiHook';
import {ThesaurusTerm} from './thesaurusTerm'

export function SearchBar({ setSelectedNode = f => f, data}) {
  const [validSearch, setValidSearch] = useState(false);
  const [userSearch, setUserSearch] = useState('');

  const searchData = input => {
    setUserSearch(input);
  }

  const filteredData = Object.keys(data).filter(d => d.startsWith(userSearch) || d === '')

  const submit = e => {
    e.preventDefault();

  }

  return (
    <>
    <form onSubmit={submit}>
      <p>Begin typing to explore the thesaurus:</p>
      <input
        type="text"
        onChange={e => searchData(e.target.value)}
        required
        className="search-bar"
      />
      <button disabled={!validSearch}>Go</button>
    </form>
    <ul>
      {filteredData.map(o => (<ThesaurusTerm term={o}/>))}
    </ul>
    </>
  )
}