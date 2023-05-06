import React from "react";
import styled from "../styles/css/footer.module.css";

function Footer() {
  return (
    <div className={styled.footerCon}>
      <div className={styled.innerCon}>
        <div className={styled.contents}>
          <p className={styled.title}>Chateau Puech-Haut</p>
          <p className={styled.text}>
            2012 Chateau Puech-Haut Les Complices de Puech Haut
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
