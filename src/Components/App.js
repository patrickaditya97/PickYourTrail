import React from "react";
import styled from "styled-components";
import MenuBarComponent from "./MenuBar.js";
import PricingComponent from "./Pricing.js";
import ProductComponent from "./Product.js";

const AppContainer = styled.div`
	
`

const MainContainer = styled.div`
	width: 100%;
	height: calc(100% - 78px);
	position: absolute;
	bottom: 0px;
`

function App() {
	return (
		<AppContainer>
			<nav>
				<MenuBarComponent/>
			</nav>
			
			<main>
				<MainContainer>
					<aside>
						<PricingComponent/>
					</aside>

					<div>
						<ProductComponent/>
					</div>
				</MainContainer>
			</main>
		</AppContainer>
	);
}

export default App;
