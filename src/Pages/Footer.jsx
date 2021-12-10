import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "7vh",
        padding: "30px 0px ",
        textAlign: "center",
        backgroundColor: "teal",
        color: 'white',
        fontSize:'15px',
        marginTop:'20px',
        fontWeight:'400'
      }}
    >
      <p>
        Develop by <span></span>
        <a href="https://github.com/MuhammadHamzaFarooq" target='_blank' style={{textDecoration:'none',color:'white'}}>
          MuhammadHamzaFarooq
        </a>
      </p>
    </div>
  );
};

export default Footer;
