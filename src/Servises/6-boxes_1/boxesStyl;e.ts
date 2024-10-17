import styled from "styled-components";

export const Wrapper_six = styled.div`


.all_main_wrapper {
  width: 100%;
  background-color: #0B0B0B;
  display: flex;
  justify-content: center;
  padding-top: 120px;
}
.six_boxes_wrapper {
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-areas: 'a a a';
  gap: 15px;
}
.box_style {
  width: 290px;
  height: 200px;
  border-radius: 20px;
  background: var(--700, #171717);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 0px;
  cursor: pointer;
}
.box_style:hover {
  border: 1px solid yellow;
  transform: scale(1.060);
  transition-duration: 0.5s;
}
.box_style:active{
  transform: scale(1.150);
}
.top_line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.round_style {
  max-width: 60px;
  width: 100%;
  height: 60px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon_style {
  max-width: 35px;
  width: 100%;
  height: 35px;
}
.text_left_wrapper {

}
.naviga_style {
  max-width: 190px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.center_line {
  display: flex;
  justify-content: center;
}
.text_style_digital {
  max-width: 250px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
  opacity: 0.8;
}
.bottom_line {
  display: flex;
  margin-left: 20px;
}
.buttom_style {
  height: 42px;
  width: 130px;

  gap: 10px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.buttom_style:hover {
  background-color: yellow;
  p {
    color: black;
  }
}
.buttom_style:active {
  transform: scale(1.050);
}
.right_icon_wrapper {
  max-width: 18px;
  width: 100%;
  height: 18px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
}
.read_more_style {
  color: var(--White, #FFF);
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px; 
  text-transform: uppercase;
}
.right_style {
  max-width: 15px;
  width: 100%;
  height: 15px;
}
@media only screen and (max-width:1240px) {
  


}
@media only screen and (max-width:930px) {


.all_main_wrapper {
   
}
.six_boxes_wrapper {
    display: grid;
    grid-template-areas: 'a a';
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}
@media only screen and (max-width: 620px) {

.six_boxes_wrapper {

} 
.six_boxes_wrapper {
    display: grid;
    grid-template-areas: 'a';
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 
}
`