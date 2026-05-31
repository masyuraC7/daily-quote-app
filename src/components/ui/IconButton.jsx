export function IconButton({ label, icon: Icon, className = '', type = 'button', ...props }) {
  return (
    <button className={`icon-button ${className}`} type={type} aria-label={label} title={label} {...props}>
      <Icon aria-hidden="true" size={18} />
    </button>
  );
}
