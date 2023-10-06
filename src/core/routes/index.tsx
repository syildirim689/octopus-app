import {Routes, Route} from "react-router-dom";
import SignInPage from "../../pages/sign-in";
import SignUpPage from "../../pages/sign-up";
import DashboardPage from "../../pages/dashboard";
import TablesPage from "../../pages/tables";

export default function HomeRoutes({appTitle}: { appTitle: string }) {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage appTitle={appTitle}/>}/>
            <Route path="tables" element={<TablesPage appTitle={appTitle}/>}/>
            <Route path="/sign-in" element={<SignInPage appTitle={appTitle}/>}/>
            <Route path="/sign-up" element={<SignUpPage appTitle={appTitle}/>}/>
        </Routes>
    );
};
