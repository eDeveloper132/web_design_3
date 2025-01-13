import Footer from "../Footer/page";
import Header from "../Header/page";
import Shopping_Curt_Main from "../Shopping_Curt_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Shopping_Curt_Main />
                <Footer />
            </div>
        </>
    )
}