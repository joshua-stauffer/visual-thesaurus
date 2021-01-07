import { FaLink } from 'react-icons/fa'

export function ThesaurusItem({id, title, word, delFunc, allWords}) {
  return (
  <li>{ allWords.includes(word) && < FaLink color='green' size='25px'/>} { word }
    <button 
      onClick={() => delFunc(id, title, word)}
    >
      Delete
    </button>
  </li>
  )
}