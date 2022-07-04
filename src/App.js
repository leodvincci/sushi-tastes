import "./App.css"
import SushiDiscoveryPage from "./SushiDiscoveryPage";
import NavComponent from "./NavComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SushiReviewPage from "./SushiReviewPage";
import SushiUserReviewsPage from "./SushiUserReviewsPage";
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
                    path={`/review/`}
                    element={
                        <div>
                            <NavComponent/>
                            <SushiReviewPage/>
                        </div>
                    }
                />


                <Route
                    path={`/userReviews/`}
                    element={
                        <div>
                            <NavComponent/>
                            <SushiUserReviewsPage/>
                        </div>
                    }
                />

            </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
