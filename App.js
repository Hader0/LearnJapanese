import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Translate from "./Components/Translate/translate";
import './index.css'
import ErrorPage from "./Components/ErrorPage/errorPage";
import Dictionary from "./Components/Word-Dictionary/dictionary";
import DictionaryCategory from "./Components/Word-Dictionary/dictionaryCategory";

function App() {


  return (
    <Router>
      <div className="App">
        
        
        <Switch>
          <Route exact path='/'>
            <Translate />
          </Route>
            <Route exact path='/dictionary'>
              <Dictionary />
            </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;