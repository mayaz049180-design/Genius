import Login from "./Auth/Login/Login";
import Genius from "./Auth/Login/Genius";
import Activity from "./Pages/Activities/Activity";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Surveys from "./Pages/Surveys/Surveys";
import SubmitSurvey from "./pages/Surveys/SubmitSurvey";
import Setting from "./Pages/Settings/Setting";
import Starfall from "./Pages/Starfall/Starfall";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
// import SubmitActivity from "./Pages/Activities/SubmitActivity/SubmitActivity";
import Starmain from "./Pages/Starfall/Starmain";
import Cart from "./Pages/Starfall/Cart";
import Earning from "./Pages/EarningOverview/Earning";
import About from "./Pages/About/About";
import Privacy from "./Pages/Privacy/Privacy";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Genius />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />

          <Route path="/activities" element={<Activity />} />

          <Route path="/starfall-store" element={<Starmain />}>
            <Route index element={<Starfall />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="/surveys" element={<Surveys />} />
          <Route path="/surveys/submit" element={<SubmitSurvey />} />

          <Route path="/settings" element={<Setting />} />
          <Route path="/settings/earning" element={<Earning />} />
          <Route path="/settings/about" element={<About />} />
          <Route path="/settings/privacy" element={<Privacy />} />

          {/* <Route path="submitactivity" element={<SubmitActivity />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
