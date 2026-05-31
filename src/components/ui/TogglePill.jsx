export function TogglePill({ value, options, onChange }) {
  return (
    <div className="toggle-pill" aria-label="Download format">
      {options.map((option) => (
        <button
          aria-pressed={value === option.value}
          className="toggle-pill__item"
          key={option.value}
          onClick={() => onChange(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
