import "./Copyright.css"
import { FootersLinksData } from "../../Data/Data"

export default function Copyright() {
  return (
    <div className="footer-copyright">
        <div className="container copyright-container">
            <p>BUILD WITH LOTS OF LOVE BY © 2024 PAZ JIMENEZ</p>
            <div className="footer-socials">
                {
                    FootersLinksData.socials.map((item,index) => {
                        return(
                            <a href={item.link} key={index}>
                                <item.icon />
                            </a>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
