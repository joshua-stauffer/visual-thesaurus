import { useState } from 'react';

import { BlogList } from './blogList';
import { MainButtonBar } from './mainButtonBar';
import { TextArea } from './textArea';
import { CheckBox } from './checkbox';


export function EditBlog(props) {
  const [newContentType, setNewContentType] = useState('p')

  const { dispatch, dataObject, dataFuncs } = props
  const {
    id,
    data,
    editData,
    togglePublished,
    toggleUpdateTimestamp,
    isEdited,
    addContent,
    delContent,
    moveContentUp,
    moveContentDown
  } = dataObject;
  const { save } = dataFuncs;

  return (
    <main>
      <MainButtonBar
        backFunc={() => dispatch({type: 'blog-gen'})}
        homeFunc={() => dispatch({type: 'home'})}
        saveFunc={() => save()}
        isEdited={isEdited}
      />
      <h1>Edit Blog</h1>
      <hr/>

      <TextArea
        title={'Title'}
        value={data.title}
        onChange={(e) => editData(e.target.value, 'title', id)}
      />

      <TextArea
        title={'Subtitle'}
        value={data.sub_title}
        onChange={(e) => editData(e.target.value, 'sub_title', id)}
      />
      <CheckBox 
        title={'Published: '}
        name={'published'}
        checked={data.published}
        onChange={(e) => togglePublished(e, id)}
      />
      <CheckBox 
        title={'Update Timestamp: '}
        name={'update_timestamp'}
        checked={data.update_timestamp}
        onChange={(e) => toggleUpdateTimestamp(e, id)}
      />

      <BlogList
        blogData={data.contents}
        delContent={delContent}
        moveContentUp={moveContentUp}
        moveContentDown={moveContentDown}
      />

      <label>
        <h3>Add New Section</h3>
        <select 
          value={newContentType}
          onChange={(e) => setNewContentType(e.target.value)}>
            <option value='p'>Paragraph</option>
            <option value='title'>Title</option>
          <option value='img'>Image</option>
            <option value='video'>Video</option>
        </select>
        <button onClick={() => addContent(id, newContentType) }>Add</button>
    </label>
    </main>
  )
}