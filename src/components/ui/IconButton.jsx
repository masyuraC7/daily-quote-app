export function IconButton({ label, icon: Icon, className = '', ...props }) {
  return (
    <button className={`icon-button ${className}`} aria-label={label} title={label} {...props}>
      <Icon aria-hidden="true" size={18} />
    </button>
  );
}
