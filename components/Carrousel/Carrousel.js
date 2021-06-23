import React from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";
import { container } from "@/styles/jss/nextjs-material-kit.js";

const useStyles =makeStyles((theme) => ({
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
            [theme.breakpoints.down('sm')]: {
                maxWidth: 300,
                width: '100%',
            },
        }
  }));

export default function Carousel() {
  const classes = useStyles();
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false
  // };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
          <GridItem className={classes.marginAuto}>
            <Card carousel>
              <Slider {...settings}>
                <div>
                  <img src="about1.png" alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                    Politica 1
                    </h3>
                  </div>
                </div>
                <div>
                  <img src="about2.png" alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                      Politica 2
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                    Politica 3
                    </h3>
                  </div>
                  <img
                    src="about3.png"
                    alt="Second slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img src="about4.png" alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h3 className={classes.titleItem}>
                    Politica 4
                    </h3>
                  </div>
                </div>
              </Slider>
            </Card>
          </GridItem>
  );
}