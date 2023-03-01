import { Header } from "./Header";
import { Footer } from "./Footer";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
