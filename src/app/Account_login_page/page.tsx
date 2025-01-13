import Footer from "../Footer/page";
import Header from "../Header/page";
import Login_Main from "../Login_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Login_Main />
                <Footer />
            </div>
        </>
    )
}