import Footer from "../Footer/page";
import Header from "../Header/page";
import About_Main from "../About_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <About_Main />
                <Footer />
            </div>
        </>
    )
}