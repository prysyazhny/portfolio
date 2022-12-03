import './App.scss';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import Navbar from './components/Navbar';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

function App() {

  return (
    <div>
      
      <body>

        <Fullpage>
            <FullpageNavigation/>

            <FullPageSections>

                <FullpageSection >

                <Navbar/>

                  <Screen1/>

                </FullpageSection>

                <FullpageSection >
                    
                  <Screen2/>
                
                </FullpageSection>

                <FullpageSection>

                  <Screen3/>

                </FullpageSection>

            </FullPageSections>
        </Fullpage>

        </body>
    </div>
  );

}

export default App;
