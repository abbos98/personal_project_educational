import styled from "styled-components";

export const Sometihing = styled.div`
  display: flex;
  justify-content:center;
  background-color:  #0B0B0B;
  height: 800px;

.main {
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
}
.left_side {
 
}
.first_image {
  max-width: 620px;
  width: 100%;
  height: 450px;
  border-radius: 20px;
}
.right_side {
  background-color: #171717;
  max-width: 470px;
  width: 100%;
  height: 370px;
  flex-shrink: 0;
  margin-left: -20%;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.first {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.var_style {

}
.star_wrappe {
  display: flex;
}
.star {
  color: yellow;
}
.star_white {
  color: white;
}
.second {

}
.long_text {
  max-width: 400px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; 
  opacity: 0.8;
}
.third {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.person_wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}
.round_in {
  max-width: 60px;
  width: 100%;
  height: 60px;
  border-radius: 50%;
}
.text_wrap {
  display: flex;
  flex-direction: column;
}
.name {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
}
.web {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.9;
}
.arrow_wrapper {
  display: flex;
  gap: 20px;
}
.left {
  max-width: 60px;
  width: 100%;
  cursor: pointer;
  margin-left: -30px;
}
.right {
  max-width: 60px;
  width: 100%;
  cursor: pointer;
}

@media only screen and (max-width: 1240px) {
  
}


@media only screen and (max-width: 930px) {
  height: 900px;

.main {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.right_side {
  display: flex;
  justify-content: center;
  margin-left: 30px;
  margin-top: -60px;

}



}
@media only screen and (max-width: 430px) {

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left_side {
  width: 360px;

}
.right_side {
  width: 350px;
  margin-left: 0px;
}
.long_text {
  font-size: 18px;
  line-height: 30px;
}
.person_wrapper {
  display: flex;
  align-items: center;
}
.text_wrap {
  margin-top: 10px;
}
.name {
  line-height: 20px;
}
.web {
  line-height: 20px;
}
}
`

