import Footer from "../Footer/page";
import Header from "../Header/page";
import Product_Main from "../Product_Main/page";

export default function shop_grid(){
    return(
        <>
            <div className="bg-white">
                <Header />
                <Product_Main />
                <Footer />
            </div>
        </>
    )
}