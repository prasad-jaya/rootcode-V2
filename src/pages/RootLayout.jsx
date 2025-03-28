import { Outlet } from "react-router";


const RootLayout = () =>{
    return(
        <div className=" mx-auto container p-6">
            <div className="py-10">
                <Outlet/>
            </div>
           
        </div>
    )

}

export default RootLayout;