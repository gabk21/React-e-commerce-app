import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #f3f3f3;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
cursor: pointer;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
opacity: 0.5;
z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: 0.7s ease;
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
flex: 1;
height: 100%;

`
const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`

const Title = styled.h1`
font-size:70px;`

const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;`

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction == "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2 );
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 );
        }
    };

  return (
    <Container>
        <Arrow direction = "left" onClick= {() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={ slideIndex }>
            {sliderItems.map((item) => (
            <Slide bg={item.bg}>
            <ImgContainer>
                <Image src= {item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            ))}
            <Slide bg="fcf1ed">
            <ImgContainer>
                <Image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Rainy Season Sale</Title>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugit quaerat tenetur eos!</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
            <Slide bg="fbf0f4">
            <ImgContainer>
                <Image src="https://material.angular.io/assets/img/examples/shiba2.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Christmas Season Sale</Title>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugit quaerat tenetur eos!</Description>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction = "right" onClick= {() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider