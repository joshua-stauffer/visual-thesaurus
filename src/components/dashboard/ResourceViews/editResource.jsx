import { MainButtonBar } from './mainButtonBar';
import { TextArea } from './textArea';
import { CheckBox } from './checkbox';

export function EditResource({ dispatch, dataObject, dataFuncs }) {
  const { id, data, editData, togglePublished, isEdited } = dataObject;
  const { save } = dataFuncs;

  return (
    <main>
      <MainButtonBar
        backFunc={() => dispatch({type: 'resources-gen'})}
        homeFunc={() => dispatch({type: 'home'})}
        saveFunc={() => save()}
        isEdited={isEdited}
      />
      <h1>Edit Resource Page</h1>
      <hr/>

      <TextArea
        title={'Title'}
        value={data.title}
        onChange={(e) => editData(e.target.value, 'title', id)}
      />

      <TextArea
        title={'Text'}
        value={data.text || ''}
        onChange={e => editData(e.target.value, 'text', id)}
      />

      <TextArea
        title={'URL Address'}
        value={data.uri || ''}
        onChange={e => editData(e.target.value, 'uri', id)}
      />

      <TextArea
        title={'Link Text'}
        value={data.uri_title || ''}
        onChange={e => editData(e.target.value, 'uri_title', id)}
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