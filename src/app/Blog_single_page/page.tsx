import Footer from "../Footer/page";
import Header from "../Header/page";
import Single_Main from "../Single_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Single_Main />
                <Footer />
            </div>
        </>
    )
}