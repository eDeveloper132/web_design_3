import Footer from "../Footer/page";
import Header from "../Header/page";
import Shop_Main from "../Shop_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Shop_Main />
                <Footer />
            </div>
        </>
    )
}