import React from 'react';
import styled from 'styled-components';

const StyledCategory = styled.div`

display:flex;
justify-content: center;

ul {
  background: gray;
  list-style: none;
  width: 100%;

}

li {
  float: left;
  position: relative;
  width: auto;
  
}

a {  
  color: #black;
  display: flex;
  font: bold 24px sans-serif;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  -webkit-transition: all .25s ease;
  -moz-transition: all .25s ease;
  -ms-transition: all .25s ease;
  -o-transition: all .25s ease;
  transition: all .25s ease;

  &:hover {
    display:flex;
    justify-content:center;
    align-items:center;
    color: #FF5C00;

  }
}
`
const TextStyled = styled.span`
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
  font-size:32px;
  margin-top:80px;
`
const Category = () => {
  return (
    <div>
      <TextStyled>SHOP</TextStyled>
      <StyledCategory>            
        <nav id="primary_nav_wrap">
          <ul>
            <li className="current-menu-item"><a href="#">All</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Best</a>            
            </li>
            <li><a href="">Food</a>            
            </li>
            <li><a href="">Toy</a></li>
            <li><a href="">Clothes</a></li>
            <li><a href="">Others</a></li>
          </ul>
        </nav>
      </StyledCategory> 
    </div>
  );
};

export default Category;
