import "./App.css"
import SushiDiscoveryPage from "./SushiDiscoveryPage";
import NavComponent from "./NavComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SushiReviewPage from "./SushiReviewPage";
function App() {

  return (
    <div >
        <BrowserRouter>
            <Routes>
                <Route
                    path={"/"}
                    element={
                    <div>
                        <NavComponent/>
                        <SushiDiscoveryPage/>
                    </div>
                }
                />

                <Route
                    path={"/review"}
                    element={
                        <div>
                            <NavComponent/>
                            <SushiReviewPage/>
                        </div>
                    }
                />


            </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
