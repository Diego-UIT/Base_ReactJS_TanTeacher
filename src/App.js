import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import Calculator from './components/Calculator/Calculator'
import WeatherApp from './components/WeatherApp/WeatherApp'
import PageNotFound from './components/PageNotFound/PageNotFound'
import TaskUseReducer from './components/hook/TaskUseReducer'
import Header from './components/Layout/Header'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={WeatherApp} />
                    <Route exact path="/calculator" component={Calculator} />
                    <Route exact path="/reducer" component={TaskUseReducer} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default App
