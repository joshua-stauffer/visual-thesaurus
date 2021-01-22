export function SearchTerm({ term, index, clickFunc }) {
  console.log('entered search term')
  return (
    <li key={index}>
      <button onClick={() => clickFunc(term)}>
        { term }
      </button>
    </li>
    )
}