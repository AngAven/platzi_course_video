import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../assets/styles/containers/NotFound";
import Layout from "../assets/styles/components/Layout";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App