import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  font-size: 4rem;
  color: #fff0b5;
`
const TitleSection = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: bold; 
  text-align: center;
  padding: 15%;
`
const StyledDescription = styled.div`
  font-size: 1.5rem;
  padding: 5%;
  color: #4d8a76;

`

const Header = ({ siteTitle, siteDescription }) => (
  <TitleSection>
    <StyledHeader>
      {siteTitle}
    </StyledHeader>
    <StyledDescription>
      {siteDescription}
    </StyledDescription>
  </TitleSection>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sarah Witt`,
}

export default Header
