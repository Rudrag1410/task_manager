import Navbar from "@/components/navbar";
import styles from "./layout.module.scss";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
export default Layout;
