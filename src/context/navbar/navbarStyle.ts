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
.login_and_cart_wrapper {
  display: flex;
  gap: 7px;
}
.menu_wrapper {
  display: none;
}
.login_style {
  color: white;
  cursor: pointer;
}
.payment_style {
  color: white;
  cursor: pointer;
}
.right_side {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--700, #171717);
  border-radius: 999px;
  border: 1px solid var(--Dark-Primary, #EEFB13);
  display: flex;
  width: 150px;
  height: 45px;
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
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; 
  text-transform: uppercase;
}
.button_style:hover {
  cursor: pointer;
}
.arrow_style {
   width: 20px;
   height: 20px;
   font-size: 10px;
}
.menu_style {
  display: none;
}


@media only screen and (max-width: 1240px) {
  padding: 0px 30px;

.wrapper_all_side {
  display: flex;
}
.login_and_cart_wrapper {
  gap: 15px;
}
.menu_wrapper {
  display: flex;
}
.menu_style {
  display: flex;
  color: white;
  font-size: 30px;
  cursor: pointer;
}
.login_style {
  color: white;
  font-size: 30px;
}
.payment_style {
  color: white;
  font-size: 30px;
}
.button_wrap {
  display: none;
}
.right_side {
  display: none;
}

}

@media only screen and (max-width: 930px) {
 
}



`