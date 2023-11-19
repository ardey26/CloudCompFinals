import { Outlet, Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <nav className="w-full bg-red flex justify-between gap-4 mb-12 py-4 border-b border-black">
        <div>
          Cloud Computing Finals
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link> /
          <Link to="/todo">Todo</Link> /
          <Link to="/group">Group</Link> /
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;
