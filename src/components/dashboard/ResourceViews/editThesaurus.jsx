import { CheckBox } from './checkbox';
import { MainButtonBar } from './mainButtonBar';
import { TextArea } from './textArea';
import { ThesaurusList } from './thesaurusList';

export function EditThesaurus({ dispatch, dataObject, dataFuncs }) {
  const {
    id,
    data,
    editData,
    togglePublished,
    isEdited,
    addThesaurusTerm,
    delThesaurusTerm
  } = dataObject;
  const { save } = dataFuncs;

  return (
    <main>
      <MainButtonBar
        backFunc={() => dispatch({type: 'thesaurus-gen'})}
        homeFunc={() => dispatch({type: 'home'})}
        saveFunc={() => save()}
        isEdited={isEdited}
      />
      <h1>Edit Visual Thesaurus</h1>
      <hr/>

      <TextArea
        title={'Title'}
        value={data.title}
        onChange={(e) => editData(e.target.value, 'title', id)}
      />

      <TextArea
        title={'Definition'}
        value={data.text || ''}
        onChange={e => editData(e.target.value, 'text', id)}
      />

      <TextArea
        title={'Example'}
        value={data.example || ''}
        onChange={e => editData(e.target.value, 'example', id)}
      />

      <ThesaurusList
        id={id}
        title='synonyms'
        list={data.synonyms}
        allWords={data.word_list}
        dataFuncs={{addThesaurusTerm, delThesaurusTerm}}
      />

      <ThesaurusList
        id={id}
        title='antonyms'
        list={data.antonyms}
        allWords={data.word_list}
        dataFuncs={{addThesaurusTerm, delThesaurusTerm}}
      />

      <CheckBox 
        title={'Published: '}
        name={'published'}
        checked={data.published}
        onChange={(e) => togglePublished(e, id)}
      />

    </main>
  )
}