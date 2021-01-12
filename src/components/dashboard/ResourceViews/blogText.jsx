
import { BlogButtons } from './blogButtons';


export function BlogText({ title, value, onChange, sizeClass, blogButtonsProps }) {
  return (
    <div className='sp-item'>
      <label>

      <div className='blog-col-1'>
        <BlogButtons
          {...blogButtonsProps}
        />
      <p className='sp-label'>{ title }</p>

      </div>
 
        <textarea
          value={value}
          onChange={onChange}
          className={sizeClass}
        />
      </label>
    </div>
  )
}