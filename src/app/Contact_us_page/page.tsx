import Footer from "../Footer/page";
import Header from "../Header/page";
import Contact_Main from "../Contact_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Contact_Main />
                <Footer />
            </div>
        </>
    )
}