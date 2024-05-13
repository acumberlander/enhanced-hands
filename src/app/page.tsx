import Hero from "@/components/Hero/Hero";
import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import BookingPolices from "@/components/BookingPolicies/BookingPolices";
import ExtraInfo from "@/components/ExtraInfo/ExtraInfo";

const app = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <BookingPolices />
      <ExtraInfo />
    </div>
  );
}

export default app;