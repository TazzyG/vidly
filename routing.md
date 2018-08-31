#Routing

- i react-router-dom, not native( used for mobile )
- index.js import { BrowserRoute} from "rrd and wrap component in <BrowserRouter>
- Register Routes. import {Route} from "rrd and pass at least one route in Navbar, index.jsx
- Switch (to prevent root page showing up on bottom of each page), can use exact component or better yet, use Switch component; import Switch with Route, then wrap routes with Switch
- use Link and to or NavLink and to, to make links clickable without loading whole page
- route props come with history, location, and match and you can customize them and add props by adding props to component by using render {(props) => Product sortBy= newest {...props}} example
- route parameters, example product/1 Route path="/products/:id" component={ file}
- appending ? makes expression optional
- optional string parameters are possible but not recommended. Query String ex: sortBy=newest &approved=true, query string are in the match property
- query-string package npi i query-string, add location to match on Const ... eg Posts, see my repo for sample-react-nav
- to redirect after use history eg this.props.history.replace("/movies") used in login pages
- Nexted links is easy, simply add links to that page don't forget to import links form rrd and then add the links

## Docs

Search for React Router documentation https://reacttraining.com
