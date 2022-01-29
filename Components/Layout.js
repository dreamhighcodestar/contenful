import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Navbar */}

      <div className="page-content">{children}</div>

      {/* Footer */}
      <footer></footer>
    </div>
  );
}
