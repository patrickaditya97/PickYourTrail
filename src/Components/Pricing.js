import React from "react";
import styled from "styled-components";

const PricingBoxContainer = styled.div`
    height: 100%;
    width: 35%;
    position: fixed;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const PricingBox = styled.div`
	height: 260px;
	width: 325px;
	border-radius: 8px;
	position: absolute;
	top: 60px;
	background: white;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
`

const Pricing = styled.div`
	width: 100%;
	height: 30%;
	border-bottom: 1px solid #e5e5e5;
    display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
    flex-direction: row;
`

const PricingInner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	&>span:first-child{
		font-size: 12px;
		color: #838383;
	}

	&>span:nth-child(2){
		font-size: 16px;
		font-weight: 900;
		text-decoration: line-through;
	}
`

const PricingDetails = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	align-items: center;
`

const UnlockButton = styled.button`
	text-align: center;
	width: 150px;
	height: 50px;
	border: none;
	background: #00C684;
	border-radius: 5px;
	font-size: 15px;
	font-weight: 600;
	color: white;
	outline: none;
	cursor: pointer;
`

const ProductText = styled.div`

	display: flex;
	flex-direction: row;
	align-items: baseline;

	&>p{
		padding-left: 10px;
		margin: 0px;
	}
`

const PricingTextContainer = styled.div`
	width: 100%;
	height: 70%;

`

const PricingTextInner = styled.div`
	height: 75%;
    display: flex;
    flex-direction: column;
	justify-content: space-evenly;
	padding: 25px;

	&>${ProductText}:first-child>p{
		font-family: Source Sans Pro;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: -0.02em;
		color: #333333;
		display: flex;
		justify-content: flex-start;
	}

	&>${ProductText}:not(first-child)>p{
		font-family: Source Sans Pro;
		font-style: normal;
		font-weight: 600;
		font-size: 13px;
		line-height: 24px;
		letter-spacing: -0.02em;
		color: #777777;
	}
`

function PricingComponent(props) {
    return (
        <PricingBoxContainer>
            <PricingBox>
                <Pricing>
                    <PricingDetails>
						<PricingInner>
							<span>price per person</span>
							<span>&#8377;53,450</span>
						</PricingInner>
                    	<UnlockButton>Unlock Deal</UnlockButton>
                    </PricingDetails>
                </Pricing>

                <PricingTextContainer>
                	<PricingTextInner>
						<ProductText>
							<span><img alt="icons" width="14" height="14" src="/images/tickicon.svg"/></span>
							<p>The Pickyourtrail Advantage</p>
						</ProductText>
						<ProductText>
							<span><img alt="icons" width="14" height="14" src="/images/tickicon.svg"/></span>
							<p>All inclusive real-time pricing</p>
						</ProductText>
						<ProductText>
							<span><img alt="icons" width="14" height="14" src="/images/tickicon.svg"/></span>
							<p>Instant booking confirmation</p>
						</ProductText>
						<ProductText>
							<span><img alt="icons" width="14" height="14" src="/images/tickicon.svg"/></span>
							<p>Travel concierge through app</p>
						</ProductText>
						<ProductText>
							<span><img alt="icons" width="14" height="14" src="/images/tickicon.svg"/></span>
							<p>Flexible payment options</p>
						</ProductText>
                	</PricingTextInner>
                </PricingTextContainer>
            </PricingBox>
        </PricingBoxContainer>
    );
}

export default PricingComponent;
