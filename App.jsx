import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ObjectivePage from './ObjectivePage';
import CoursesPage from './CoursesPage';
import InternshipsPage from './InternshipsPage';
import ResearchPage from './ResearchPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/objective" component={ObjectivePage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/internships" component={InternshipsPage} />
                <Route path="/research" component={ResearchPage} />
            </Switch>
        </Router>
    );
};

export default App;
