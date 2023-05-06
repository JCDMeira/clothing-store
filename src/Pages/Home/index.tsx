import React from "react";
import Styles from "./styles.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content}>
        <div className={Styles.cloud}>
          <div>
            <h1>Porque sua roupa sempre tem algo a contar</h1>
          </div>
        </div>

        <h1 className={Styles["contrat-white"]}>
          E aqui, cada costura é uma história, e nós estamos prontos para contar
          a sua através das suas roupas personalizadas.
        </h1>
      </div>

      <div className={Styles["cta-wrapper"]}>
        <div />
        <button>Conheça nossa linhas</button>
      </div>
    </div>
  );
};
