
export function NumInputBox({ label, onChange, disabled = false }) {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2">
          {label}
        </div>
        <select onChange={onChange} disabled={disabled} className="w-full px-2 py-1 border rounded border-red-300">
          <option value={1}>★</option>
          <option value={2}>★★</option>
          <option value={3}>★★★</option>
          <option value={3}>★★★★</option>
          <option value={4}>★★★★★</option>
        </select>
      </div>
    );
  }
  
  