export function SearchTerm({ term, index, clickFunc }) {
  return (
    <li key={index}>
      <button 
        onClick={() => clickFunc(term)}
        className='select-term-button'
      >
        { term }
      </button>
    </li>
    )
}