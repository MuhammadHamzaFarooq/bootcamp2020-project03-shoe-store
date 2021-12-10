import React from "react";
import { useParams } from "react-router";
import data from "../Data/data.json";
import { Typography, Paper, Button } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const UnderarmourProductItem = () => {
  const { id } = useParams();
  const shoes = data["underarmour"];
  const Shoe = shoes[id];

  return (
    <div
      style={{
        padding: "10px",
        marginTop: "100px",
        cursor: "pointer",
      }}
    >
      <Paper
        sx={[
          styles.productpaper,
          {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "6px",
          },
        ]}
        elevation={6}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <KeyboardBackspaceRoundedIcon
              style={{ margin: "10px", color: "teal" }}
            />
          </Link>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
        >
          <Box
            component="div"
            sx={[
              styles.productImg,
              {
                minWidth: "250px",
                width: "45%",
                height: "80vh",
                margin: "8px",
              },
            ]}
          >
            <img width="100%" height="100%" src={Shoe.img} />
          </Box>
          <Box
            component="div"
            sx={[
              styles.ProductDetails,
              {
                minWidth: "200px",
                fontSize: "16px",
                padding: "20px",
                width: "45%",
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              },
            ]}
          >
            <Typography
              variant="h3"
              sx={[
                styles.productTitle,
                {
                  fontWeight: "900",
                  marginBottom: "40px",
                  color: "teal",
                },
              ]}
              component="div"
              gutterBottom
            >
              {Shoe.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              <span style={{ fontWeight: 700 }}> PRICE :</span> {Shoe.price}
            </Typography>
            <Typography
              sx={{ fontWeight: 700 }}
              variant="button"
              display="block"
              gutterBottom
            >
              DESCRIPTION :
            </Typography>
            <Typography
              sx={[
                styles.productDesc,
                { fontWeight: 500, textAlign: "justify" },
              ]}
              variant="button"
              display="block"
              gutterBottom
            >
              {Shoe.desc}
            </Typography>
            <Button
              sx={{
                width: "200px",
                padding: "10px",
                backgroundColor: "teal",
                marginTop: "40px",
                ":hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
              variant="contained"
            >
              ADD TO CART
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default UnderarmourProductItem;

const styles = {
	productImg: {
	  ["@media (max-width:868px)"]: {
		width: "100%",
	  },
	  ["@media (max-width:400px)"]: {
		height: "50vh",
	  },
	  ["@media (max-width:334px)"]: {
		height: "50vh",
		width: "90%",
		margin: '2px'
	  },
	  ["@media (max-width:280px)"]: {
		height: "50vh",
		width: "50%",
		margin: '2px'
	  },
	},
	ProductDetails: {
	  ["@media (max-width:868px)"]: {
		width: "100%",
	  },
	},
	productpaper: {
	  ["@media (max-width:334px)"]: {
		padding: "3px",
	  },
	  ["@media (max-width:280px)"]: {
		padding: "1px",
	  },
	},
	productTitle: {
	  ["@media (max-width:335px)"]: {
		fontWeight: "500",
		fontSize: "30px",
		marginBottom: "20px",
  
	  },
	  ["@media (max-width:280px)"]: {
		fontWeight: "500",
		fontSize: "30px",
		marginBottom: "20px",
	  },
	},
	productDesc:{
	  ["@media (max-width:334px)"]: {
		  fontWeight: '300',
		  fontSize: "15px",
		},
		["@media (max-width:280px)"]: {
		  fontWeight: "300",
		  fontSize: "15px",
		  
		},
	}
  };
  