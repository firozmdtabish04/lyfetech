import AppRoutes from "./routes/routes";
import ScrollToTopButton from "./components/card/ScrollToTopButton";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <main className="relative z-10">
        <AppRoutes />
      </main>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
