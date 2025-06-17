import { Header } from "../UI/Header";  
import Footer from "../UI/Footer";      
import App from "../../App";            

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <App />
      </main>
      <Footer />
    </>
  );
};
