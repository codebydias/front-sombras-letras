import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { Footer } from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Collections  from "./pages/collections";
import Sales from "./pages/sales";


export default function App() {
  return (
    <BrowserRouter>

      <Header />
      <Toaster richColors position="top-center" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>

      <Footer />
    
    </BrowserRouter>
  );
}
