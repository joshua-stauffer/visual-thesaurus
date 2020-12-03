import { useState } from 'react';
import {ThesaurusTerm} from './thesaurusTerm'

export function SearchBar({ setSelectedNode = f => f, data}) {
  const [validSearch, setValidSearch] = useState(false);
  const [userSearch, setUserSearch] = useState('');

  const searchData = input => {
    setUserSearch(input);
  }

  const fakeData = {
    "Test": "A",
    "Tyranny": "B",
    "Truth": "C",
    "Validation": "A"
  }
  const filteredData = Object.keys(fakeData).filter(d => d.startsWith(userSearch) || d === '')

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