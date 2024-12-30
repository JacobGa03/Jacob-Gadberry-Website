import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RowItem = ({ href, icon }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        className="circle-button"
      >
        <FontAwesomeIcon
          color="#fff"
          icon={icon}
          size="2x"
        />
      </a>
    </div>
  )
}

RowItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object,
}

export default RowItem
