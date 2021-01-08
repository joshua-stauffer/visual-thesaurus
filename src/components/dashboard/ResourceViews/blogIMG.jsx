

export function BlogIMG({ uri, payload, css, onChange, order }) {
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
        onChange={ () => onChange() }
      />
    </label>

    <label>
      <p>Alternate Text</p>
      <input
        type='text'
        value={ payload }
        onChange={ () => onChange() }
      />
    </label>

    <label>
      <p>Image Position</p>
      <select
        value={css}
        onChange={() => onChange()}
      >
        <option value='float: right;'>Right</option>
        <option value='float: left;'>Left</option>
      </select>
    </label>
    </>
  )
}