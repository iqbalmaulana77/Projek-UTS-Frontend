import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DataGlobal from "../components/DataGlobal";
import Provinces from "../components/Provinces";
import FormCovid from "../components/FormCovid";
import Footer from "../components/Footer";
import data from '../utils/constants/provinces';

import { useState } from "react";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <DataGlobal />
      <Provinces data={provinces} />
      <FormCovid data={provinces} setProvinces={setProvinces}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
