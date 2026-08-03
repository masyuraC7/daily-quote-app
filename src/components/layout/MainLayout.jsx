import { Footer } from './Footer';
import { NavBar } from './NavBar';

export function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="main-layout" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
