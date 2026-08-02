import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";
import { Outlet } from "react-router-dom";
import BackgroundLayout from "../../pages/background/BackgroundLayout";
export default function MainLayout() {
  return (
    <BackgroundLayout>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </BackgroundLayout>
  );
}
