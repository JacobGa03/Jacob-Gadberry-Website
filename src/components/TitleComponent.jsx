import Typography from "@mui/material/Typography"
import PropTypes from "prop-types"
import Grid from "@mui/material/Grid"
import { Avatar } from "@mui/material"

const TitleComponent = ({ title, subtitle, imageURI }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        xs
      >
        <Typography
          variant="h4"
          component="h1"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid item>
        <a href="https://github.com/JacobGa03">
          <Avatar
            src={imageURI}
            sx={{ width: 200, height: 200 }}
          ></Avatar>
        </a>
      </Grid>
    </Grid>
  )
}

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageURI: PropTypes.string.isRequired,
}

export default TitleComponent
