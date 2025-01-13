import Footer from "../Footer/page";
import Header from "../Header/page";
import Blog_Main from "../Blog_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Blog_Main />
                <Footer />
            </div>
        </>
    )
}