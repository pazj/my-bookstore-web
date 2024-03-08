import "./Footer.css"
import { FootersLinksData } from "../../Data/Data"
import { Link } from "react-router-dom"
import Copyright from "../Copyright/Copyright"

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <h4>About Us</h4>
          <ul className="about-params params-links">
            {
              FootersLinksData.Aboutus.map(({link, linkname}, index) =>{
                  return(
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                  )
              })
            }
          </ul>
        </div>

        <div>
          <h4>Discover Us</h4>
          <ul className="discover-params params-links">
            {
              FootersLinksData.Discover.map(({link, linkname}, index) =>{
                  return(
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                  )
              })
            }
          </ul>
        </div>

        <div>
          <h4>My Account</h4>
          <ul className="myaccount-params params-links">
            {
              FootersLinksData.Myaccount.map(({link, linkname}, index) =>{
                  return(
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                  )
              })
            }
          </ul>
        </div>

        <div>
          <h4>Help</h4>
          <ul className="Help-params params-links">
            {
              FootersLinksData.Help.map(({link, linkname}, index) =>{
                  return(
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                  )
              })
            }
          </ul>
        </div>
      </div>
      <Copyright />
    </footer>
  )
}
