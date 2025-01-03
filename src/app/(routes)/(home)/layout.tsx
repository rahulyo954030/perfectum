import Footer from "@/_components/common/footer";
import Navbar from "@/_components/common/navbar";

export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
       <div>
        <Navbar/>
        {children}
        <Footer/>
        </div>
    );
}