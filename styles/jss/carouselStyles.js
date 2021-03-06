import { container } from "./nextjs-material-kit.js";

const carouselStyle = {
  section: {
    padding: "0 0 70px 0"
  },
  titleItem: {
     color: '#000',
     fontWeight: 'bold',
     textShadow: '2px 2px 3px #FFFFFF'
  },
  container: {
    ...container,
    paddingHorizontal:0,
    paddingVertical: 0
  },
  marginAuto: {
    margin: "auto !important",
    marginRight: "auto !important",
    maxWidth: '400px',
    width: '100%'
  }
};

export default carouselStyle;
