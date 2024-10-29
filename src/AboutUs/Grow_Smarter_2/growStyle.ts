import styled from "styled-components";

export const Wrapper_smarter = styled.div`
background-color: #171717;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.main_main {
width: 900px;
display: flex;
align-items: center;
justify-content: center;
}
.left_side {
 width: 550px;
}
.Why_chose_wraepper {

}
.why_style {
  color: var(--Dark-Primary, #EEFB13);
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; 
  letter-spacing: 0.72px;
  text-transform: uppercase;
}
.grow_style {
  width: 630px;
  color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; 
}
.digital_style {
  max-width: 500px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; 
  opacity: 0.8;
}
.two_input_wrapper {
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
.style_input {
  max-width: 500px;
  width: 100%;
  height: 80px;
  border-radius: 20px;
  background: var(--900, #0B0B0B);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
}
.icon_vs_text {
  display: flex;
  align-items: center;
}
.round {
  width: 60px;
  height: 60px;
  background-color: #171717;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drive_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
  padding-left: 20px;
}
.zero_one {

}
.num_style {
  font-feature-settings: 'liga' off, 'clig' off;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--200, #CCC);
  font-family: Syne;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  text-transform: capitalize;
  opacity: 0.5;
  color: white;
}
.right_side {

}
.people_image_style {
  width: 531px;
  height: 500px;
  border-radius: 0px 0px 0px 20px;
  background: #D9D9D9;
}
.grade_wrapper {
  width: 900px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  justify-content: space-between;
}
.complate_project {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ninteen {
  font-feature-settings: 'liga' off, 'clig' off;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 93.5px; 
  color: white;
}
.complete_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  opacity: 0.9;
  width: 110px;
}
.line_in {
  width: 1px;
  height: 75px;
  background: #FFF;
}

@media only screen and (max-width: 1200px) {

.main_main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}
.right_side {
  display: flex;
  justify-content: center;
  margin-left: -5%;
  margin-top: 20px;
}
.people_image_style {
  width: 460px;
  border-radius: 20px;
}
}

@media only screen and (max-width: 940px) {


.grade_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.line_in {
  display: none;
}
}

@media only screen and (max-width: 600px) {

.left_side {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.why_style {

}
.Why_chose_wraepper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.why_style {

}
.grow_style {
  text-align: center;
  font-size: 28px;
  width: 370px;
  line-height: 40px;
  margin-top: 10px;
}
.digital_style {
  text-align: center;
  width: 310px;
  margin-top: 10px;
}
.style_input {
  width: 350px;
}
.drive_style {
  font-size: 15px;
  line-height: 20px;
  width: 180px;
}
.right_side {
  display: flex;
  margin: 0px;
  padding-top: 40px;
}
.people_image_style {
  width: 350px;
}
}
`