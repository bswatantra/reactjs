import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Post from './Post';

function Navbar ()
{
	return (
		<Router>
			<header className="site-header sticky-top py-1">
				<nav className="container d-flex flex-column flex-md-row justify-content-between">
					<Link className="py-2" to="/" aria-label="Product">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24">
							<title>Product</title><circle cx="12" cy="12" r="10" />
							<path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
						</svg>
					</Link>
					<Link className="py-2 d-none d-md-inline-block" to="/">Home</Link>
					<Link className="py-2 d-none d-md-inline-block" to="/posts">Posts</Link>
					<Link className="py-2 d-none d-md-inline-block" to="/about">About</Link>
					<Link className="py-2 d-none d-md-inline-block" to="/contact">Contact</Link>
				</nav>
			</header>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/posts">
					<Post />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	);
}

export default Navbar;

