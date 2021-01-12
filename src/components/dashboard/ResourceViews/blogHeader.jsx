import { BlogButtons } from './blogButtons'


export function BlogHeader({ payload, onChange, title, blogButtonsProps }) {

  return (
    <div className='sp-item'>


        <div className='blog-col-1'>

          <BlogButtons
            {...blogButtonsProps}
          />
          <p className='sp-label'>{ title }</p>
        </div>

      <label> 
        <p className='sp-label'>Header Text</p>

        <input
          type='text'
          value={ payload }
          onChange={ onChange }
        />
      </label>
    </div>
  )
}