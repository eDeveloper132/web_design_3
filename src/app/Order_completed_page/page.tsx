import Footer from "../Footer/page";
import Header from "../Header/page";
import Completed_Main from "../Completed_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Completed_Main />
                <Footer />
            </div>
        </>
    )
}