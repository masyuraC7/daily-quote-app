import { NavBar } from './NavBar';

export function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="main-layout">{children}</main>
    </div>
  );
}
