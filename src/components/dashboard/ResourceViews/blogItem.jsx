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
  contentLength
}) {
  const onChange = () => console.log('changed')

  const showMoveUp = order === 1 ? true : false;
  const showMoveDown = order === contentLength ? true : false;


  return (
    <li>
    {
      (content_type === 'p') ?  
        <TextArea
          title={ order }
          value={ payload }
          onChange={ onChange }
        />
      : (content_type === 'img') ?
        <BlogIMG
          uri={ uri }
          payload={ payload }
          css={ css }
          onChange={ onChange }
          order={ order }
        />
      : (content_type === 'title') ?
        <BlogHeader
          order={order}
          payload={payload}
          onChange={onChange}
        />
      : (content_type === 'video') ?
        <BlogVideo
          uri={ uri }
          payload={ payload }
          css={ css }
          onChange={ onChange }
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




  if (content_type === 'p'){
    return (
      <li>
      <TextArea
        title={ order }
        value={ payload }
        onChange={ onChange }
      />
      <BlogButtons
        delFunc={() => delContent(post_id, order)}
        moveContentUp={() => moveContentUp(post_id, order)}
        moveContentDown={() => moveContentDown(post_id, order)}
        showMoveUp={showMoveUp}
        showMoveDown={showMoveDown}
        />
      </li>
    )

  } else if (content_type === 'img'){

    return (
      <li>
        <BlogIMG
          uri={ uri }
          payload={ payload }
          css={ css }
          onChange={ onChange }
          order={ order }
        />
        <BlogButtons
        delFunc={() => delContent(post_id, order)}
        moveContentUp={() => moveContentUp(post_id, order)}
        moveContentDown={() => moveContentDown(post_id, order)}
        />
      </li>
    )

  } else if (content_type === 'title') {
    return (
      <li>
        <BlogHeader
          order={order}
          payload={payload}
          onChange={onChange}
        />
        <BlogButtons
        delFunc={() => delContent(post_id, order)}
        moveContentUp={() => moveContentUp(post_id, order)}
        moveContentDown={() => moveContentDown(post_id, order)}
        />
      </li>
    )

  } else if (content_type === 'video') {
    return (
      <li>
        <BlogVideo
          uri={ uri }
          payload={ payload }
          css={ css }
          onChange={ onChange }
          order={ order }
        />
        <BlogButtons
        delFunc={() => delContent(post_id, order)}
        moveContentUp={() => moveContentUp(post_id, order)}
        moveContentDown={() => moveContentDown(post_id, order)}
        />
      </li>
    )
  } else {
    console.log('unknown type passed to blogItem : ', content_type)
    return <h1>No content yet.</h1>
  }
}