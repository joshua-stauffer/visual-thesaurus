import { TextArea } from './textArea';
import { BlogIMG } from './blogIMG';  
import { BlogButtons } from './blogButtons';
import { BlogHeader } from './blogHeader';
import { BlogVideo } from './blogVideo';


export function BlogItem({
  post_id,
  order,
  content_type,
  payload,
  uri,
  css,
  delContent,
  moveContentUp,
  moveContentDown,
  contentLength,
  setBlogUserInput
}) {

  const showMoveUp = order === 1 ? true : false;
  const showMoveDown = order === contentLength ? true : false;

  const setInput = (input, field) => 
      setBlogUserInput(post_id, order, input, field)


  return (
    <li>
    {
      (content_type === 'p') ?  
        <TextArea
          title={ order }
          value={ payload }
          onChange={(e) => setInput(e.target.value, 'payload') }
        />
        : (content_type === 'title') ?
        <BlogHeader
          order={order}
          payload={payload}
          onChange={ (e) => setInput(e.target.value, 'payload') }
        />
      : (content_type === 'img') ?
        <BlogIMG
          uri={ uri }
          payload={ payload }
          css={ css }
          setInput={ setInput }
          order={ order }
        />
      : (content_type === 'video') ?
        <BlogVideo
          uri={ uri }
          payload={ payload }
          css={ css }
          setInput={ setInput }
          order={ order }
        />
      : null
    }
      <BlogButtons
        delFunc={() => delContent(post_id, order)}
        moveContentUp={() => moveContentUp(post_id, order)}
        moveContentDown={() => moveContentDown(post_id, order)}
        showMoveUp={showMoveUp}
        showMoveDown={showMoveDown}
      />
    </li>
  )

}