
export function BlogVideo({ order, uri, payload, css, setInput }) {
  return (
    <>
    <p>{ order }</p>
    <iframe
      title={ order }
      alt={ payload }
      width="100%" 
      height="100%" 
      src={ uri } 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>


    <label>
      <p>Youtube Embed Code</p>
      <input
        type='text'
        value={ uri }
        onChange={ (e) => setInput(e.target.value, 'uri') }
      />
    </label>

    <label>
      <p>Alternate Text</p>
      <input
        type='text'
        value={ payload }
        onChange={ (e) => setInput(e.target.value, 'payload') }
      />
    </label>

    <label>
      <p>Video Position</p>
      <select
        value={css}
        onChange={(e) => setInput(e.target.value, 'css')}
      >
        <option value='float: right;'>Right</option>
        <option value='float: left;'>Left</option>
      </select>
    </label>
    </>
  )
}