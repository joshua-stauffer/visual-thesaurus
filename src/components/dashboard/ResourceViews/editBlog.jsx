import { useState } from 'react';

import { BlogList } from './blogList';
import { MainButtonBar } from './mainButtonBar';
import { TextArea } from './textArea';
import { CheckBox } from './checkbox';
import { AiOutlinePlus } from 'react-icons/ai';


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
    moveContentDown,
    setBlogUserInput
  } = dataObject;
  const { save } = dataFuncs;

  return (
    <main className='main-dashboard'>
      <div className='gen-body'>

        <div className='top-bar'>
          <h1 className='gen-header'>Edit Blog</h1>
          <MainButtonBar
            backFunc={() => dispatch({type: 'blog-gen'})}
            homeFunc={() => dispatch({type: 'home'})}
            saveFunc={() => save()}
            isEdited={isEdited}
          />
        </div>

          <hr/>
          <h2 className='gen-sub-header'>Post Details</h2>

          <TextArea
            title={'Title: '}
            value={data.title}
            onChange={(e) => editData(e.target.value, 'title', id)}
            sizeClass={'short-text'}
          />

          <TextArea
            title={'Subtitle: '}
            value={data.sub_title}
            onChange={(e) => editData(e.target.value, 'sub_title', id)}
            sizeClass={'short-text'}
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

          <hr/>

          <BlogList
            blogData={data.contents}
            delContent={delContent}
            moveContentUp={moveContentUp}
            moveContentDown={moveContentDown}
            setBlogUserInput={setBlogUserInput}
          />

          <label className='blog-end'>
            <div className='add-blog-content-box'>
              <select 
                value={newContentType}
                onChange={(e) => setNewContentType(e.target.value)}>
                  <option value='p'>Paragraph</option>
                  <option value='title'>Title</option>
                <option value='img'>Image</option>
                  <option value='video'>Video</option>
              </select>
              <button
                value='Create New Blog Content'
                onClick={() => addContent(id, newContentType) }
                className='add-blog-button'
              >
                <AiOutlinePlus /> Add New Blog Content
              </button>
            </div>
        </label>
      </div>
    </main>
  )
}