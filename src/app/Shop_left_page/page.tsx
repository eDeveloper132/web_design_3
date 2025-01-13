import Footer from "../Footer/page";
import Header from "../Header/page";
import Shop_Left_Main from "../Shop_Left_Main/page";

export default function shop_left(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Shop_Left_Main />
                <Footer />
            </div>
        </>
    )
}