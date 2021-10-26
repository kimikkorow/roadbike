import React from "react"
import presets, { colors } from "../utils/presets"
import { rhythm } from "../utils/typography"
import styled from "react-emotion"
import Stars from "./stars"
import bgImg from "../assets/Trees-Landscape-Silhouette.png"

const cover = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: `absolute`,
}


const ContainerStyled = styled(`div`)`
  height: 100vh;
  background: black;
  background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
`

const StarsStyled = styled(Stars)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

const LandscapeStyled = styled(`div`)`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImg});
  background-size: 1000px 250px;
  background-repeat: repeat-x;
  background-position: center bottom;
`

const FilterStyled = styled(`div`)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const MastheadBg = () => (
  <ContainerStyled
    className="masthead-bg"
    css={{
      ...cover,
      overflow: `hidden`,
      zIndex: -1,
    }}
  >
    <StarsStyled/>
    <LandscapeStyled />
    <FilterStyled />
  </ContainerStyled>
)

export default MastheadBg

