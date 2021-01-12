

export function TextArea({ title, value, onChange, sizeClass }) {
  return (
    <div className='sp-item'>
      <label>
        <p>{ title }</p>
        <textarea
          value={value}
          onChange={onChange}
          className={sizeClass}
        />
      </label>
    </div>
  )
}