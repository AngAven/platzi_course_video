import React from "react";
import '../assets/styles/components/Carroussel.scss'

const Carroussel = ({children}) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
)

export default Carroussel