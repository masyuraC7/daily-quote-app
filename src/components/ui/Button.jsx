export function Button({
  children,
  className = '',
  icon: Icon,
  variant = 'primary',
  ...props
}) {
  const variantClass = variant === 'danger' ? 'btn btn-danger' : 'btn btn-primary';

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {Icon ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
    </button>
  );
}
