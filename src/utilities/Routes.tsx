import { IonRouterOutlet } from "@ionic/react"
import { Redirect, Route } from "react-router"
import Home from "../pages/Landing/Home"
import Login from "../pages/Login/Login"

const AppRoutes = (
    <IonRouterOutlet>
        <Route exact path="/landing">
            <Home />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/">
            <Redirect to="/landing" />
        </Route>
    </IonRouterOutlet>
)

export default AppRoutes