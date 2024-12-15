import PropTypes from "prop-types"

const Section = ({ sectionName }) => {
  return (
    <div>
      <h1>{sectionName}</h1>
    </div>
  )
}

Section.propTypes = {
  sectionName: PropTypes.string.isRequired,
}

export default Section
