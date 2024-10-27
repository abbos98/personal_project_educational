import styled from "styled-components";

export const Wrapper_Vmenu = styled.div`
width: 900px;

.cost_boxes_wrapper {
  
 
}
.main_firts_box_wrapper {
  max-width: 430px;
  width: 100%;
  display: flex;
}
.first_box_style {
  max-width: 430px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  border: 1px solid var(--700, #171717);
  display: flex;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
}

.box_inside_left {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 5px;
}
.basic_plan {
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  text-transform: capitalize;
}
.number_two_wrapper {
  display: flex;
  align-items: end;
}
.ninteen {
  color: white;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
}

.mo {
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
}
.box_first_image {
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  max-width: 150px;
  width: 100%;
  height: 130px;
}
.box_inside_center {
  max-width: 2px;
  width: 100%;
  height: 200px;
  background: gray;
  margin-top: 10px;
}
.box_inside_right {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.Test_in_wrapper {
 display: flex;
 align-items: center;
 gap: 5px;
}
.right_style {
  max-width: 11px;
  width: 100%;
  height: 11px;
}
.testS_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  opacity: 0.8;
}
.choose_button {
  display: flex;
  max-width: 190px;
  width: 100%;
  height: 35px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: 2px solid var(--700, #171717);
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  text-transform: uppercase;
  background-color: #0B0B0B;
  color: white;
  cursor: pointer; 
}
.choose_button:hover {
  transform: scale(1.050);
  background-color: yellow;
}
.choose_button:active {
  transform: scale(1.1);
}
.second_box_style {
  max-width: 430px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  border: 2px solid var(--700, #171717);
  display: flex;
  cursor: pointer;
}
.second_box_style:hover {
  transform: scale(1.060);
  transition-duration: 0.5s;
  border: 1px solid yellow;
}

@media only screen and (max-width: 930px) {


.cost_boxes_wrapper {
  display: flex;
  flex-direction: column;
}  
.main_firts_box_wrapper {
 display: flex;
 justify-content: center;
}  
}
@media only screen and (max-width: 430px) {

.cost_boxes_wrapper {
  display: flex;
  gap: 20px;
}
.first_box_style {
  max-width: 370px;
  width: 100%;
  height: 280px;
  border-radius: 20px;
  border: 1px solid var(--700, #171717);
  display: flex;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid yellow;
}  
}

`