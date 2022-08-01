import React from 'react'
import HomeScreen from './Screens/HomeScreen'
import PostScreen from './Screens/PostScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css'
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <div className='app'>
                <Layout>
                    <Switch>
                        <Route exact path="/posts">
                            <PostScreen />
                        </Route>
                        <Route path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                </Layout>
            </div>
        </Router>
    )
}

export default App

