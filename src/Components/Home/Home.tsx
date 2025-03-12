import About from "./About/About";
import Schedule from "./Doctors-schedule/Schedule";
import Hero from "./Hero/Hero";
import Products from "./Productssec/Products";
import Timings from "./Timings/Timings";

const Home = () => {
  return (
    <div className="container-fluid g-0 bg-image">
      <section>
        <Hero />
      </section>
      <section className="py-5 ">
        <About />
      </section>
      <section className="py-5 ">
        <Schedule />
      </section>
      <section className="py-5">
        <Products />
      </section>
      <section className="py-5">
        <Timings />
      </section>
    </div>
  );
};

export default Home;
