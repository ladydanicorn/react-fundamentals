// Task 1: Header Component
function Header() {
  return (
    <header style={{ position: "relative", textAlign: "center" }}>
      <img src="https://fhd.multiurok.ru/f/e/b/feb32de45787b7032e4d4595fa094192f79fa290/img1.jpg" 
      alt="221B Baker Street" 
      style={{ width: '100%' }}
      />
      <h1 style={{ position: "absolute", top: "50%", left: "50%", 
        transform: "translate(-50%, -50%)", color: "white" }}>
        Sherlock Holmes
      </h1>
    </header>
  );
}

// Task 2: About Component
function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        Consulting detective based in London at 221B Baker Street. 
        Specializing in solving seemingly impossible cases through 
        the science of deduction.
      </p>
    </div>
  );
}

// Task 3: Contact Component
function Contact() {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Address: 221B Baker Street, London, England</p>
      <p>Email: sherlock.holmes@consulting-detective.com</p>
    </div>
  );
}

// Task 4: App Component that imports and displays all components
function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;