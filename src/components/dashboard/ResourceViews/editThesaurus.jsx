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
    <main className='main-dashboard'>
      <div className='gen-body'>
        <div className='top-bar'>
          <h1 className='gen-header'>Edit Thesaurus</h1>
          <MainButtonBar
            backFunc={() => dispatch({type: 'thesaurus-gen'})}
            homeFunc={() => dispatch({type: 'home'})}
            saveFunc={() => save()}
            isEdited={isEdited}
          />
        </div>
                  
        <hr/>
        <h2 className='gen-sub-header'>Term Details</h2>
        <TextArea
          title={'Title'}
          value={data.title}
          onChange={(e) => editData(e.target.value, 'title', id)}
          sizeClass={'short-text'}
        />

        <TextArea
          title={'Definition'}
          value={data.text || ''}
          onChange={e => editData(e.target.value, 'text', id)}
          sizeClass={'med-text'}
        />

        <TextArea
          title={'Example'}
          value={data.example || ''}
          onChange={e => editData(e.target.value, 'example', id)}
          sizeClass={'med-text'}
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
      </div>
    </main>
  )
}