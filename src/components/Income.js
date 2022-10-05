import React, { Component } from 'react';

class Income extends Component {
	render() {
		const defaultIncomeValue = 48.408;

		return (
			<div className="homeIncome">
				<div className="income__container">
					<div className="show_income">
						<h3 className="graphic__title">Renta media por hogar</h3>
						<span className="income_value">{this.props.incomeNeighborhood.toLocaleString() || defaultIncomeValue}  €/año</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Income;
