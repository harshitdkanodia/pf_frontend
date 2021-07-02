import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children,showFooter=true,showHeader=true }) {
  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
