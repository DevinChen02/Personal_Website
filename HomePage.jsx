import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My Website</h1>
            <p>This is a brief introduction about your website...</p>

            <nav>
                <ul>
                    <li><Link to="/objective">Objective</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/internships">Internships</Link></li>
                    <li><Link to="/research">Research</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;


