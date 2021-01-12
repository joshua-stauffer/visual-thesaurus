import { FaLink, FaTrash } from 'react-icons/fa'

export function ThesaurusItem({id, title, word, delFunc, allWords, buttonStyle}) {
  return (
  <li className='thesaurus-item'>
    <div className='thesaurus-term-box'>
      
      <button 
        onClick={() => delFunc(id, title, word)}
      >
        <FaTrash
          {...buttonStyle}
          title='Delete'
        />
      </button>
      { allWords.includes(word) && 
        < FaLink 
          {...buttonStyle}
          title={'This term will link to another term!'}
        />}
    </div>
    <p className='thesaurus-term'>{ word }</p> 
  </li>
  )
}