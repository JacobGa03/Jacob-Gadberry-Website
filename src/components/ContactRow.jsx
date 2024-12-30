import PropTypes from "prop-types"
import RowItem from "./RowItem"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "./ContactRow.css"

import {
  faGithub as fabGithub,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const ContactRow = () => {
  // Different ways to contact me
  const contactMethods = [
    {
      href: "mailto:jagadberry03@gmail.com",
      icon: faEnvelope,
    },
    {
      href: "https://www.linkedin.com/in/jacob-gadberry-2905a6311/",
      icon: fabLinkedin,
    },
    {
      href: "https://github.com/JacobGa03",
      icon: fabGithub,
    },
  ]

  return (
    <div className="item-row">
      {contactMethods.map((method, index) => (
        <RowItem
          key={index}
          href={method.href}
          icon={method.icon}
        ></RowItem>
      ))}
    </div>
  )
}

ContactRow.propTypes = {
  sectionName: PropTypes.string.isRequired,
}

export default ContactRow
