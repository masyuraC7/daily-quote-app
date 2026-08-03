import pkg from '../../../package.json';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>© {year} Daily Quote App</span>
      <span aria-hidden="true" className="footer__separator" />
      <span>v{pkg.version}</span>
    </footer>
  );
}
