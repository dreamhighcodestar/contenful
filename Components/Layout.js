import Link from "next/link";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Navbar */}
      <Navbar />

      <div className="page-content">{children}</div>

      {/* Footer */}
      <footer></footer>
    </div>
  );
}
