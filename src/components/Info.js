import React from 'react';
import logoapi from './../images/REDapi.png';

class Info extends React.Component {
	render () {
		return (
			<section id="infoSection" className="info">
				<div className="block__container">
					<div className="info__container">
						<div className="info__details--description">
							<p className="info__text">
								<span className="info__span--logo"><img src={logoapi} alt="RED api logo" className="header__image" padding-right="20px" width="150px"/></span>
							es una plataforma global de información que te permite acceder a indicadores inmobiliarios de manera ágil e implementarlos fácilmente en tu empresa.</p>
							<p className="info__text">“Obtén indicadores financieros y urbanos tanto para alquiler como compraventa que apoyen tu modelo de negocio”.</p>
						</div>
						<div className="info__details--action">
							<h3 className="info__title">¿Quieres saber cómo integrar las APIs de urbanData Analytics  en tu empresa?</h3>
							<button className="button button--contact" onClick={this.props.openCoupon}>Contacta con nosotros</button>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Info;
