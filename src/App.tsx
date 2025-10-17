import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import { Footer } from "./components/footer";
import Auth from "./pages/auth";
import { Toaster } from "./components/ui/sonner";


export default function App() {
  return (
    <BrowserRouter>

      <Header />
      <Toaster richColors position="top-center" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <Footer />
    
    </BrowserRouter>
  );
}
