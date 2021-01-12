import { MainButtonBar } from './mainButtonBar';
import { TextArea } from './textArea';
import { CheckBox } from './checkbox';

export function EditVideo({ dispatch, dataObject, dataFuncs }) {
  const { id, data, editData, togglePublished, isEdited } = dataObject;
  const { save } = dataFuncs;

  return (
    <main className='main-dashboard'>
      <div className='sp-body'>
        <div className='top-bar'>
          <h1 className='gen-header'>Edit Videos</h1>
          <MainButtonBar
            backFunc={() => dispatch({type: 'videos-gen'})}
            homeFunc={() => dispatch({type: 'home'})}
            saveFunc={() => save()}
            isEdited={isEdited}
          />
        </div>
        <hr/>

        <TextArea
          title={'Title'}
          value={data.title}
          onChange={(e) => editData(e.target.value, 'title', id)}
          sizeClass={'short-text'}
        />

        <TextArea
          title={'Text'}
          value={data.text || ''}
          onChange={e => editData(e.target.value, 'text', id)}
          sizeClass={'long-text'}
        />

        <TextArea
          title={'URL Address'}
          value={data.uri || ''}
          onChange={e => editData(e.target.value, 'uri', id)}
          sizeClass={'short-text'}
        />
        
        <CheckBox 
          title={'Published: '}
          name={'published'}
          checked={data.published}
          onChange={(e) => togglePublished(e, id)}
        />
        <div className='sp-item'>
          <label>
            <p>Preview:</p>
            <div className='iframe-preview'>
              <iframe title={data.id} width="560" height="315" src={ data.uri } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </label>
        </div>

      </div>
    </main>
  )
}