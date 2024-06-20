import { Navbar } from "./components/navbar/Navbar.tsx";
import { Hero } from "./components/hero/Hero.tsx";
import BasicInfo from "./components/basic-info/BasicInfo.tsx"
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BasicInfo/>
    </div>
  );
}

export default App
