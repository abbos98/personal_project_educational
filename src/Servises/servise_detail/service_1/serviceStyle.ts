import styled from "styled-components";

export const Wrapper_first = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #0B0B0B;
  padding-top: 120px;

.all_wrapper {
  max-width: 900px;
  width: 100%;
  display: flex;
  gap: 30px;
}
.left_side_wrapper {
  
}
.image_style {
  max-width: 560px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: #D9D9D9;
}
.texts_wrapper {
  padding-top: 25px;
}
.inovate_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 10px; 
}
.long_text {
  max-width: 560px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  opacity: 0.8;
  padding-top: 25px;
}
.wrapper_text {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
.text_and_icon {
  display: flex;
  align-items: center;
  padding-top: 15px;
  gap: 7px;
}
.icon_style {
  height: 15px;
}
.text_digital {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  opacity: 0.8;
}
.text_contanier {
  padding-top: 25px;
}
.style_in {
  max-width: 560px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  opacity: 0.8;
}
.bigger_text_contanier {
  padding-top: 30px;
}
.big {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 10px; 
  text-transform: capitalize;
}
.small {
  max-width: 560px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  opacity: 0.8;
  padding-top: 25px;
}
.six_boxes_wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.box_style {
  max-width: 265px;
  width: 100%;
  height: 250px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--200, #CCC);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
}
.box_style:hover {
  transform: scale(1.1);
  transition-duration: 0.7s;
  border: solid yellow;
}
.round_in {
  max-width: 75px;
  width: 100%;
  height: 75px;
  border-radius: 50%;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigate_style {
  max-width: 250px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
}
.bottom_side_in {
  
}
.right_side {
  display: inline-flex;
  height: 40px;
  max-width: 140px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  cursor: pointer;
}
.right_side:hover {
  background-color: yellow;
  button {
    color: black;
  }

}
.right_side:active {
  transform: scale(1.1);
}
.but_style {
  color: var(--White, #FFF);
  max-width: 65px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  text-transform: uppercase;
  background-color: #171717;
  border: none;
  background: transparent;
  cursor: pointer;
}
.but_style:hover {
  color: black;
}
.right_allow {
  max-width: 20px;
  width: 100%;
  height: 20px;
  background-color: #EEFB13;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon_style {
  width: 15px;
  height: 15px;
}
.num_text_wrapper {
  display: flex;
  align-items: center;
}
.left_side {
  max-width: 80px;
  width: 100%;
  height: 80px;
  border-radius: 50%;
  background: var(--900, #0B0B0B);
  display: flex;
  align-items: center;
  justify-content: center;
}
.zero_num {
  font-feature-settings: 'liga' off, 'clig' off;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; 
  color: white;
}
.center_side {
  margin-left: 40px;
}
.top_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
  max-width: 300px;
  width: 100%;
}
.bottom_text {
  max-width: 400px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  margin-top: 10px;
}
.right_side:active {
  transform: scale(1.1);
}
.but_style {
  color: var(--White, #FFF);
  max-width: 65px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  text-transform: uppercase;
  background-color: #171717;
  border: none;
  background: transparent;
  cursor: pointer;
}
.but_style:hover {
  color: black;
}
.right_allow {
  max-width: 23px;
  width: 100%;
  height: 23px;
  background-color: #EEFB13;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon_style {
  width: 15px;
  height: 15px;
}
.Peak_Performance_Clinic {
  
}
.text_peak {
  margin-top: 60px;
}
.main_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  text-transform: capitalize;
}

/* ............................................. */


.right_side_wrapper {
  max-width: 310px;
  width: 100%;
}
.Servise_details_wrapper {
  max-width: 310px;
  width: 100%;
  height: 340px;
  border-radius: 20px;
  background-color:  #171717;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.text_style_service {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  padding-left: 30px;
}
.inputs_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  gap: 20px;

}
.input_style {
  max-width: 250px;
  width: 100%;
  height: 45px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  cursor: pointer;
}
.input_style:hover {
  transform: scale(1.050);
}
.input_style:active {
  transform: scale(1.1);
}
.identity_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
}
.round {
  max-width: 20px;
  width: 100%;
  height: 20px;
  border-radius: 50%;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;  
}
.round:hover {
  background-color: gray;
}
.plus_style {
   
}
.ready_to_work_wrapper {
  max-width: 310px;
  width: 100%;
  height: 240px;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding: 10px 0px;
}
.ready_text {
  max-width: 250px;
  width: 100%;
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  text-transform: capitalize;
}
.button_wrapper {
  display: flex;
  max-width: 160px;
  width: 100%;
  height: 44px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  background: var(--Dark-Primary, #EEFB13);
  cursor: pointer;
  margin-top: 20px;
}
.button_wrapper:hover {
  transform: scale(1.050);
  transition-duration: 0.10s;
}
.button_wrapper:active {
  transform: scale(1.1);
}
.quote_style {
  color: var(--900, #0B0B0B);
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; 
  text-transform: uppercase;
}
.round {
  max-width: 18px;
  width: 100%;
  height: 18px;
  border-radius: 50%;
  border: 1px solid black;
}
.downland_wrapper {
  max-width: 310px;
  width: 100%;
  height: 180px;
  border-radius: 20px;
  border: 1px solid var(--200, #CCC);
  background: var(--700, #171717);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}
.first_line_down {
  max-width: 250px;
  width: 100%;
  height: 50px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  cursor: pointer;
}
.first_line_down:active {
  transform: scale(1.040);
}
.company_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.8;
}
.memory_icon_wrap {
  display: flex;
  align-items: center;
}
.memory {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.8;
}

@media only screen and (max-width: 1240px) {
  
}
@media only screen and (max-width: 930px) {

.all_wrapper {
  display: flex;
  flex-direction: column;
}
.left_side_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper_text {
  margin-left: -10px;
}
.six_boxes_wrapper {
  gap: 10px;
  margin-left: -10px;
}
.box_style {
  /* width: 150px; */
}
.box_style:hover {
  transform: scale(1.070);
  transition-duration: 0.50s;
}
.main_right_all {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right_side_wrapper {
  
}

}
@media only screen and (max-width: 600px) {
  
.texts_wrapper {
  padding: 20px 25px;
}  
.wrapper_text {
  padding: 0px 35px;
  
}
.text_contanier {
  padding: 0px 25px;
  margin-top: 25px;
}
.bigger_text_contanier {
  padding: 0px 25px;
  margin-top: 25px;
}
.six_boxes_wrapper {
  display: grid;
  grid-template-areas: 'a';
  justify-content: center;
  gap: 20px;
}
}

`