import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { NewContact } from "./NewContact";
import { Contact } from "./Contact";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />}>
          <Route path=":id" element={<Contact />} />
          <Route path="new" element={<NewContact />} />
        </Route>
      </Routes>
    </div>
  );
}


