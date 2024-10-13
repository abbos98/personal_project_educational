import styled from "styled-components";

export const Wrapper_prising = styled.div`
background-color: #0B0B0B;
display: flex;
justify-content: center;

.Pricing_plane_wrapper {
 padding-top: 100px;
 width: 900px;
}
.top_text_sstyle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Pricing_style {
  color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px;
}
.Montly_yearly_contaniner {
  display: flex;
}
.Montly_style {
  width: 130px;
  height: 55px;
  border-radius: 45px 0px 0px 45px;
  border: 1px solid var(--200, #CCC);
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Montly_style:hover {
  background-color:  #EEFB13;
  color: #0B0B0B;
  
}
.Montly_style:active {
  transform: scale(1.1);
}
.Yearly_style {
  width: 130px;
  height: 55px;
  border-radius: 0px 45px 45px 0px;
  border: 1px solid var(--200, #CCC);
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Yearly_style:hover {
  background-color:  #EEFB13;
  color: #0B0B0B;
}
.Yearly_style:active{
  transform: scale(1.1);
}
.line_second {
  max-width: 900px;
  width: 100%;
  height: 1px;
  margin-top: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #CCC;
}
.cost_boxes_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 100px;
}
.main_firts_box_wrapper {
  max-width: 430px;
  width: 100%;
  height: 252px;
}
.first_box_style {
  max-width: 430px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  border: 2px solid var(--700, #171717);
  display: flex;
  align-items: start;
  justify-content: space-between;
  cursor: pointer;
  animation: kkk 1s linear alternate;

}
.first_box_style:hover {
  transform: scale(1.1);
  transition-duration: 1s;
  border: 1px solid yellow;
  
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
  color: var(--White, #FFF);
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
  width: 150px;
  height: 130px;
}
.box_inside_center {
  width: 2px;
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
  width: 11px;
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
  width: 190px;
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
  
}
.choose_button:hover {
  background-color: #EEFB13;
  color: black;
}
.second_box_style {
  max-width: 430px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  border: 2px solid var(--700, #171717);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.second_box_style:hover {
  transform: scale(1.1);
  transition-duration: 1s;
  border: 1px solid yellow;
}
.second_box_style:active{
  
}



`