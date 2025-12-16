import React from 'react';
import Hero from './Hero';
import Solutions from './Solutions';
import Problems from './Problems';
import NoResults from './NoResults';
import Services from './Services';
import LeadForm from './LeadForm';
import Footer from './Footer';

function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      <Hero />
      <Solutions />
      <Problems />
      <NoResults />
      <Services />
      <LeadForm />
      <Footer />
    </main>
  );
}

export default App;
