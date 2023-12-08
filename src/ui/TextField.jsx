function TextField({ label, name, value, onChange }) {
  return (
    <div className="">
      <label htmlFor={name} className="mb-1 block">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        autoComplete="off"
        type="text"
        className="textField__input"
      />
    </div>
  );
}

export default TextField;
