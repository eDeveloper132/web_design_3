import Footer from "./Footer/page";
import Header from "./Header/page";
import MainHome from "./Main/page";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <MainHome />
        <Footer />
      </div>
    </>
  );
}
