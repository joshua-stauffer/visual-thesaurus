
import { BlogItem } from './blogItem';
import { compareObjOrder } from './../utils/compareObjOrder';

export function BlogList({ blogData, delContent, moveContentUp, moveContentDown }){
  blogData.sort(compareObjOrder)
  return (
    <>
    <h2>Contents</h2>
    <ul>
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
            />
      ) : <li>No content to display.</li>}
    </ul>
    
    </>
  )
}