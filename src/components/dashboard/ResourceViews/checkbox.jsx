export function CheckBox({ title, name, checked, onChange}) {
  return (
    <label>
      { title }
        <input
          type="checkbox"
          name={ name }
          checked={checked}
          // amazingly, onChange won't accept a third parameter here!?!
          // always comes through as undefined
          onChange={onChange}
        />
  </label>
  )
}