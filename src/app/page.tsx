import Hero from "@/components/Hero/Hero";
import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import BookingPolices from "@/components/BookingPolicies/BookingPolices";
import ExtraInfo from "@/components/ExtraInfo/ExtraInfo";
import BusinessInfo from "@/components/BusinessInfo/BusinessInfo";
import ChooseAppointment from "@/components/ChooseAppointment/ChooseAppointment";

const app = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <BookingPolices />
      <ExtraInfo />
      <BusinessInfo />
      <ChooseAppointment />
    </div>
  );
}

export default app;