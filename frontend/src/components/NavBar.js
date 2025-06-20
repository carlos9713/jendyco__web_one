import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/products">Products</Link> | 
      <Link to="/quote">Quote</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
}
export default NavBar;
