import AppRoutes from "./routes/routes";
import ScrollToTopButton from "./components/card/ScrollToTopButton";

function App() {
  return (
    <>
      <AppRoutes />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  );
}

export default App;
