import React from 'react';
import styled from "styled-components";

const ProductOuterContainer = styled.div`
    width: 65%;
    height: 100%;
    position: absolute;
`

const ProductTitle = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.02em;
    color: #666666;
    position: absolute;
    left: 40px;
    top: 20px;
`

const ProductContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
`

const ProductChooser = styled.div`
    width: 90%;
    position: absolute;
    top: 60px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 8px;
`

function ProductComponent(props) {

    const dayDataMap = {
        "Day 1 - 25th Mar": [
            {
                time: "MORNING",
                place: "Taj Exotica Resort - Premium Suite",
                description:
                    "Enjoy convenient pickup from your Dubai hotel and head to the banks of Dubai Creek, where you can step aboard a wooden dhow boat and let the hosts lead you to your table for the evening",
                images: [
                    "https://picsum.photos/200",
                    "https://picsum.photos/200",
                    "https://picsum.photos/200",
                    "https://picsum.photos/200",
                ],
            },
            {
                time: "NOON TO EVENING",
                place: "Water surfing in the shores of Elephant beach",
                description:
                    "Enjoy convenient pickup from your Dubai hotel and head to the banks of Dubai Creek, where you can step aboard a wooden dhow boat and let the hosts lead you to your table for the evening",
                images: [
                    "https://picsum.photos/200",
                    "https://picsum.photos/200",
                    "https://picsum.photos/200",
                    "https://picsum.photos/200",
                ],
            },
        ],
    };

    return (
        <ProductOuterContainer>
            <ProductContainer>
                <ProductTitle>Day to Day plan</ProductTitle>
                <ProductChooser>
                    <OneDayPlanContainer>
                        {Object.keys(dayDataMap).map((value, key) => {
                            return (
                                <React.Fragment key={value}>
                                    <Date>{value}</Date>
                                    {
                                        dayDataMap[value].map((element, key) => {
                                            const {time, place, description, images} = element
                                            return(
                                                <OneDayPlan
                                                    key={key}
                                                    time = {time}
                                                    place = {place}
                                                    description = {description}
                                                    images = {images}
                                                />
                                            )
                                        })
                                    }
                                </React.Fragment>
                            );
                        })}
                    </OneDayPlanContainer>
                </ProductChooser>
            </ProductContainer>
        </ProductOuterContainer>
    );
}

const OneDayPlanContainer = styled.div`
    border-bottom: 1px solid #E5E5E5;
    margin-left: 40px;
    margin-bottom: 30px;
    margin-top: 30px;
`

const Date = styled.div`
    font-family: Source Sans Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #999999;
    border-radius: 10px;
    margin-bottom: 5px;
`

const DayPlanContainer = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-bottom: 20px;

    &>div:first-child{
        height: 10px;
        padding: 5px;
        background: #F0F0F0;
        border-radius: 100px;
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        color: #777777;
    }
    
    &>div:nth-child(2){
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #1895B3;
    }

    &>div:nth-child(3){
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #444444;
    }
`

const ImagesContainer = styled.div`
    width: 100%;
    &>img{
        margin-right: 10px;
        border-radius: 4px;
    }
`

function OneDayPlan({ time, place, description, images }) {
        return (
            <DayPlanContainer>
                <div>{time}</div>
                <div>{place}</div>
                <div>{description}</div>
                <ImagesContainer>
                    {
                        images.map(element => {
                            return (
                                <img alt="images" src={element} width="60" height="60"/>
                            )
                        })
                    }
                </ImagesContainer>
            </DayPlanContainer>
        )
}

export default ProductComponent;