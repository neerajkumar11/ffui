
export function TextInputBox({ label, placeholder, onChange, disabled = false }) {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2">
          {label}
        </div>
        <textarea
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full px-2 py-1 border rounded border-red-300"
        />
      </div>
    );
  }
  