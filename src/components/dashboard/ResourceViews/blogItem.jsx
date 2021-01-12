import { BlogText } from './blogText';
import { BlogIMG } from './blogIMG';  
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

  const blogButtonProps = {
    delFunc: () => delContent(post_id, order),
    moveContentUp: () => moveContentUp(post_id, order),
    moveContentDown: () => moveContentDown(post_id, order),
    showMoveUp: showMoveUp,
    showMoveDown: showMoveDown
  }


  return (
    <li className='sp-list-item'>
    {
      (content_type === 'p') ?  
        <BlogText
          title={ 'Paragraph ' + order }
          value={ payload }
          onChange={(e) => setInput(e.target.value, 'payload') }
          sizeClass={'long-text'}
          blogButtonsProps={blogButtonProps}
        />
        : (content_type === 'title') ?
        <BlogHeader
          title={ 'Heading ' + order}
          payload={payload}
          onChange={ (e) => setInput(e.target.value, 'payload') }
          blogButtonsProps={blogButtonProps}
        />
      : (content_type === 'img') ?
        <BlogIMG
          uri={ uri }
          payload={ payload }
          css={ css }
          setInput={ setInput }
          title={ 'Image ' + order }
          blogButtonsProps={blogButtonProps}
        />
      : (content_type === 'video') ?
        <BlogVideo
          uri={ uri }
          payload={ payload }
          css={ css }
          setInput={ setInput }
          blogButtonsProps={blogButtonProps}
          title={ 'Video ' + order }
        />
      : null
    }
    </li>
  )

}