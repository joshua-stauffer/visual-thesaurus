import { MainButtonBar } from './mainButtonBar';
import { TextArea } from './textArea';
import { CheckBox } from './checkbox';

export function EditVideo({ dispatch, dataObject, dataFuncs }) {
  const { id, data, editData, togglePublished, isEdited } = dataObject;
  const { save } = dataFuncs;

  return (
    <main>
      <MainButtonBar
        backFunc={() => dispatch({type: 'videos-gen'})}
        homeFunc={() => dispatch({type: 'home'})}
        saveFunc={() => save()}
        isEdited={isEdited}
      />
      <h1>Edit Videos Page</h1>
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
      
      <CheckBox 
        title={'Published: '}
        name={'published'}
        checked={data.published}
        onChange={(e) => togglePublished(e, id)}
      />

      <iframe title={data.id} width="560" height="315" src={ data.uri } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </main>
  )
}