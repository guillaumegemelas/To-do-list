const Checkbox = ({ value, index, setChecked, checked }) => {
  return (
    <div>
      <input
        className="input"
        type="checkbox"
        key={index}
        checked={value}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default Checkbox;
