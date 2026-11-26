import { NavigationBar } from "./components/navigation-bar";
import { PageContainer } from "./components/page-container";
import { About } from "./features/about";
import { Contact } from "./features/contact";
import { Experience } from "./features/experience/experience";
import { TechnicalExpertise } from "./features/technical-expertise";

function App() {
  return (
    <PageContainer>
      <NavigationBar />
      <About />
      <Experience />
      <TechnicalExpertise />
      <Contact />
    </PageContainer>
  );
}

export default App;
