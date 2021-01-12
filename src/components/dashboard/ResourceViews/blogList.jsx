
import { BlogItem } from './blogItem';
import { compareObjOrder } from './../utils/compareObjOrder';

export function BlogList({
  blogData,
  delContent,
  moveContentUp,
  moveContentDown,
  setBlogUserInput
}){
  blogData.sort(compareObjOrder)
  return (
    <>
    <h2 className='gen-sub-header'>Post Contents</h2>
    <ul className='sp-list'>
      {blogData.length ?  
        blogData
          .map(d => 
            <BlogItem
              post_id={d.post_id}
              order={d.order}
              content_type={d.content_type}
              payload={d.payload}
              uri={d.uri}
              css={d.css}
              delContent={delContent}
              moveContentUp={moveContentUp}
              moveContentDown={moveContentDown}
              contentLength={blogData.length}
              setBlogUserInput={setBlogUserInput}
            />
      ) : <li className='sp-list-item'><p>No content to display, yet.</p></li>}
    </ul>
    
    </>
  )
}