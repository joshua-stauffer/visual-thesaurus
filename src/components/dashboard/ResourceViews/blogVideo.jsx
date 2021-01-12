import { BlogButtons } from './blogButtons';


export function BlogVideo({ title, uri, payload, css, setInput, blogButtonsProps }) {
  return (
    <div className='sp-item'>
        <div className='blog-col-1'>
          <BlogButtons
            {...blogButtonsProps}
          />
          <p className='sp-label'>{ title }</p>
        </div>


      <div className='iframe-preview'>
        <iframe
          title={ title }
          alt={ payload }
          width="560"
          height="315"
          src={ uri } 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
     


      <label>
        <p className='sp-label'>Embed Url</p>
        <input
          type='text'
          value={ uri }
          onChange={ (e) => setInput(e.target.value, 'uri') }
        />
      </label>

      <label>
        <p className='sp-label'>Alternate Text</p>
        <input
          type='text'
          value={ payload }
          onChange={ (e) => setInput(e.target.value, 'payload') }
        />
      </label>

      <label>
        <p className='sp-label'>Video Position</p>
        <select
          value={css}
          onChange={(e) => setInput(e.target.value, 'css')}
        >
          <option value='float: right;'>Right</option>
          <option value='float: left;'>Left</option>
        </select>
      </label>
    </div>
  )
}