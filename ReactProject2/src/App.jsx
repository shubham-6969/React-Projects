import Button from './Components/Button.jsx';
import ContactForm from './Components/ContactForm.jsx';
import ContactHeader from './Components/ContactHeader.jsx';
import Navigation from './Components/Navigation.jsx'

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
}

export default App