import React from "react";
import Styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.cloud}>
          <div>
            <h1>Porque sua roupa sempre tem algo a contar</h1>
          </div>
        </div>

        <h1 className={Styles["contrast-white"]}>
          E aqui, cada costura é uma história, e nós estamos prontos para contar
          a sua através das suas roupas personalizadas.
        </h1>
      </div>

      <div className={Styles["cta-wrapper"]}>
        <div />
        <button onClick={() => navigate("/products")}>
          Conheça nossa linhas
        </button>
      </div>
    </div>
  );
};
