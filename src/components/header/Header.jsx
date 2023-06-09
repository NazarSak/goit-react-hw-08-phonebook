import React from "react"
import PropTypes from 'prop-types';
import { TitleWords } from "./header.styled"

 const Header = ({title}) => {
   return(
<TitleWords>{title}</TitleWords>
   ) 
}

Header.propTypes = {
   title: PropTypes.string.isRequired,
 };

 export default Header