import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/prezes.jpg";
import img3 from "../assets/images/tlo.jpg";
import img4 from "../assets/images/tecza.jpg";

const Header = () => {
  
  return (   
     <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mb-60">
                    <h1>SKŁAD OPAŁU</h1>
                                        <h3>Posiadamy najlepszy opał w najniższych cenach!</h3>
                    <h3>Ceny najniższe w internecie!!!</h3>
                    <h4>Zapraszamy do kontaktu! <a href="tel:48502564445">+48 502 564 445</a></h4>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Header;
