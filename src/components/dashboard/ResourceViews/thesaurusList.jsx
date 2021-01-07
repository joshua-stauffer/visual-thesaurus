import { useState } from 'react';

import { ThesaurusItem } from './thesaurusItem';

export function ThesaurusList({ id, title, list , allWords, dataFuncs}){
  
  const { addThesaurusTerm, delThesaurusTerm } = dataFuncs;
  const [inputState, setInputState] = useState('')
  const addWord = (id, title, val) => {
    addThesaurusTerm(id, title, val)
    setInputState('')
  }
  
  return (
    <>
    <h2>{ title }</h2>
    <ul>
      {list.map(d => 
        <ThesaurusItem
          id={id}
          title={title}
          word={d}
          delFunc={delThesaurusTerm}
          allWords={allWords}
        />
      )}
    </ul>
    <label><p>Add new word to { title }</p>
      <input
        type='text'
        value={inputState}
        onChange={(e) => setInputState(e.target.value)}
      />
      <button onClick={() => addWord(id, title, inputState)}>Add</button>
    </label>
    </>
  )
}