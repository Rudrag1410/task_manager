import { useIsMobile } from "@/hooks/isMobile";
import MobileNavbar from "@/components/navbar/mobileNavbar";
import DesktopNavbar from "@/components/navbar/desktopNavbar";

const Navbar = (): JSX.Element => {
  const isMobile = useIsMobile();
  return <> {isMobile ? <MobileNavbar /> : <DesktopNavbar />} </>;
};
export default Navbar;
