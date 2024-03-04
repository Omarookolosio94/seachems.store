import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "core/components/Footer";
import { getRoutes } from "core/helpers/getRoutes";
import routes from "./routes";
import Navbar from "core/components/Navbar";

export default function Public() {
  return (
    <div className="relative">
      <Navbar />
      <div
        className="pt-[90px]"
        style={{
          zIndex: 50,
          minHeight: "80vh",
        }}
      >
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
