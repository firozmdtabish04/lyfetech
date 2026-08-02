import AppRoutes from "./routes/routes";
import ScrollToTopButton from "./components/card/ScrollToTopButton";
import BackgroundLayout from "../src/pages/background/BackgroundLayout";

function App() {
  return (
    <BackgroundLayout>
      <AppRoutes />
      <ScrollToTopButton />
    </BackgroundLayout>
  );
}

export default App;
