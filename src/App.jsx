import { useState, useEffect } from "react";
import AppRoutes from "./routes/routes";
import ScrollToTopButton from "./components/card/ScrollToTopButton";
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <AppRoutes />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
