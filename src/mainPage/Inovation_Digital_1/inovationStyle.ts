import styled from "styled-components";

export const Inovation_Digital_wrapper = styled.div`
background-color:  #171717;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 60px;
padding-bottom: 100px;

.Main_contaniner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  width: 100%;
}
.firt_part_wrapper {
  display: flex;
  flex-direction: column;
  /* max-width: 900px;
  width: 100%; */
}
.texts_wrapper {

}
.first_line {
  display: flex;
  align-items: center;
}
.text_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: 132.918px;
  font-family: "Syne", sans-serif;
  position: relative;
  z-index: 222;
}
.second_div {
  border-radius: 15px;
  background: var(--Dark-Primary, #EEFB13);
  max-width: 330px;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  position: relative;
  z-index: 222;
}
.text_style_second {
  color: var(--900, #0B0B0B);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: 132.918px; 
}
.wrapper_second_line {
  display: flex;
  align-items: center;
  margin-top: 26px;
}
.right_style {
  max-width: 120px;
  width: 100%;
  height: 75px;
}
.solution_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.359px; 
  padding-left: 58px;
  position: relative;
  z-index: 222;
}
.small_image {
  display: flex;
  margin-top: -17px;
}
.first_image_wrap {
  display: flex;
  margin-top: 70px;
}
.secondImage_wrap {
  margin-top: -200px;
  margin-left: -30px;
  position: relative;
  left: 65px;
  max-width: 565px;
  width: 100%;
  height: 500px;
}

@media only screen and (max-width: 930px) {


.first_line {
  display: flex;
  justify-content: center;
}
.text_style {
  font-size: 40px;
}
.second_div {
  width: 200px;
  height: 70px;
}
.text_style_second {
  font-size: 40px;
}
.wrapper_second_line {
  display: flex;
  justify-content: center;
}
.right_style {
  width: 90px;
  height: 90px;
}
.solution_style {
  font-size: 40px;
}
.small_image {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-left: -90px;
}
.first_image_wrap {
  display: none;
}
.secondImage_wrap {
  max-width: 500px;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
}
.small_image {
  display: flex;
  justify-content: center;
}

}
@media only screen and (max-width: 540px) {

.texts_wrapper {
  display: flex;
  flex-direction: column;
}
.first_line {
  display: flex;
  flex-direction: column;
}
.second_div {
  display: flex;
  flex-direction: column;
}
.wrapper_second_line {
  width: 100%;
  gap: 0px;
}
.solution_style {
  padding-left: 20px;
}
.secondImage_wrap {
  width: 370px;
}

}  
`