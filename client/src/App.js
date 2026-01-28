import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
