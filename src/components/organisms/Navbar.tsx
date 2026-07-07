import SVGNavSide from "../atoms/svg/SVGNavSide";
import NavLink from "../molecules/Links/NavLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex w-fit h-fit gap-0">
      <SVGNavSide position="left" />
      <div className="flex justify-center items-center gap-8 p-0 border-b-2 border-blue-light bg-blue-dark-150 w-fit px-5 h-[51px] effect-glassmorphism ">
        <NavLink href="/" label="Home" isActive={true} />
        <NavLink href="/about" label="About" />
        <NavLink href="/contact" label="Events" />
      </div>
      <SVGNavSide position="right" />
    </nav>
  );
};

export default Navbar;
