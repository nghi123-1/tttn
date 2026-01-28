export default function ProductFilter({ onChange }) {
  return (
    <div className="filter-box">
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
}
