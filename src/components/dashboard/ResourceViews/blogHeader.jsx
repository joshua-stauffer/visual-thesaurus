
export function BlogHeader({ payload, onChange, order }) {

  return (
    <>
    <p>{ order }</p>
    <label>
      <p>Header Text</p>
      <input
        type='text'
        value={ payload }
        onChange={ onChange }
      />
    </label>
    </>
  )
}