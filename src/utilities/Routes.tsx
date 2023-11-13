import { IonRouterOutlet } from "@ionic/react"
import { Redirect, Route } from "react-router"
import Home from "../pages/Landing/Home"

const AppRoutes = (
    <IonRouterOutlet>
        <Route exact path="/landing">
            <Home />
        </Route>
        <Route exact path="/">
            <Redirect to="/landing" />
        </Route>

    </IonRouterOutlet>
)

export default AppRoutes