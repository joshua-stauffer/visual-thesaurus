

export function TextArea({ title, value, onChange }) {
  return (
    <label>
      <p>{ title }</p>
      <textarea
        value={value}
        onChange={onChange}
      />
    </label>
  )
}