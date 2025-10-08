export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="p-3">
      <p>&copy; {year} Nuru, All Rights Reserved.</p>
    </footer>
  );
}
