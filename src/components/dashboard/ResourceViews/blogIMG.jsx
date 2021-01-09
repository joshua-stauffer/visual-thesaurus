

export function BlogIMG({ uri, payload, css, setInput, order }) {
  return (
    <>
    <p>{ order }</p>
    <img
      src={ uri }
      alt={ payload }
    />

    <label>
      <p>Image Source</p>
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
      <p>Image Position</p>
      <select
        value={css}
        onChange={ (e) => setInput(e.target.value, 'css') }
      >
        <option value='float: right;'>Right</option>
        <option value='float: left;'>Left</option>
      </select>
    </label>
    </>
  )
}