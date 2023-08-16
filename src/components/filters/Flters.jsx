
export const Filters = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      name="filter"
      onChange={event => onChange(event.target.value)}
    />
  );
};
