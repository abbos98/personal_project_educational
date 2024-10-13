import styled from "styled-components";


export const Wrapper_navbar = styled.div`
  display: flex;
  justify-content: center;
  background-color: #171717;
  flex-wrap: wrap;

.wrapper_all_side {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 30px;
}
.d_style {
  max-width: 25px;
  width: 100%;
  height: 25px;
}
.left_side {
  display: flex;
  cursor: pointer;
}
.iziti {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-left: 2px;
}
.center_side {
  display: flex;
  align-items: center;
  gap: 13px;
}
.button_wrap {
  display: flex;
  align-items: center;
}

.testStyle {
  text-decoration: none;
  color: var(--White, #FFF);
  font-size: 13.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  font-family: "Inter", sans-serif;
}
.testStyle:hover {
  text-decoration: underline;
  
}
.icon_style {
  color: var(--White, #FFF);
  font-family: "Font Awesome 6 Free";
  font-size: 15px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.right_side {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--700, #171717);
  border-radius: 999px;
  border: 1px solid var(--Dark-Primary, #EEFB13);
  display: flex;
  width: 170px;
  height: 55px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--White, #FFF);
  cursor: pointer;
}
.right_side:hover {
  background-color: yellow;
  color: black;
  button{color:black}
}
.button_style {
  border: none;
  background: transparent;
  color: #FFF;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; 
  text-transform: uppercase;
}

`