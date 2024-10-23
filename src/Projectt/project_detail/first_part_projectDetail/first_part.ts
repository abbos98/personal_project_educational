import styled from "styled-components";

export const Wrapper_first = styled.div`
  width: 100%;
  background-color: #0B0B0B;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

.all_wrapper {
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding-bottom: 120px;

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
  opacity: 0.8;
}
.wrapper_text {
  display: grid;
  grid-template-areas: "a a";
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
  cursor: pointer;
}
.text_digital:hover {
  text-decoration: underline;
}
.bigger_text_contanier {
  padding-top: 30px;
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
.image_style_two {
  max-width: 560px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: #D9D9D9;
  margin-top: 30px;
}
.text_wrapper_smaller {
  margin-top: 30px;
}
.long_text_in {
  width: 560px;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; 
  opacity: 0.8;
}
.last_text_wrapper_with_input {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.your_deg_in {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  text-transform: capitalize;
}
.littel_text {
  width: 560px;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; 
  opacity: 0.8;
}
.previus_post_wrap {
  max-width: 560px;
  width: 100%;
  height: 45px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}
.left_side_previus {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.left_side_previus:hover {
  transform: scale(1.050);
  transition-duration: 0.40s;
.text_left {
  color: yellow;
}
}
.left_side_previus:active {
  transform: scale(1.2);
}
.text_left {
  color: white;
}
.previous_text_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; 
}
.right_side_next {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.right_side_next:hover {
  transform: scale(1.050);
  transition-duration: 0.40s;
.right_text_style {
  color: yellow;
}
}
.right_side_next:active {
  transform: scale(1.2);
}
.right_text_style {
  color: white;
}
.next_post {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; 
}

/* ............................................. */


.right_side_wrapper {
  max-width: 310px;
  width: 100%;
}
.Servise_details_wrapper {
  max-width: 310px;
  width: 100%;
  height: 380px;
  border-radius: 20px;
  border: 1px solid #CCC;
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
  gap: 11px;
}
.input_style {
  max-width: 220px;
  width: 100%;
  height: 40px;
  border-radius: 999px;
  background-color: #171717;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  cursor: pointer;
  gap: 5px;
}
.identity_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
}
.identity_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  opacity: 0.6;
}
.stars_wrapper {
  display: flex;
  padding-left: 10px;
}
.star_style {
  color: yellow;
  font-size: 13px;
}
.icons_wrap {
  display: flex;
  gap: 5px;
}
.icon_round {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon_round:hover {
  background-color: yellow;
.icon_in {
  color: black;
}
.facebook_style {
  color: black;
}
.instagram_style {
  color: black;
}
.telegram_style {
  color: black;
 }
}
.icon_round:active {
  transform: scale(1.1);
}
.icon_in {
  color: white;
  font-weight: 800;
}
.facebook_style {
  color: white;
  font-size: 18px;
}
.instagram_style {
  color: white;
  font-size: 19px;
}
.telegram_style {
  color: white;
  font-size: 19px;
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
  max-width: 150px;
  width: 100%;
  height: 42px;
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
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
}
.icon_in_style {
  width: 15px;
  height: 15px;
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
  max-width: 230px;
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
  width: 560px;
  display: flex;
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

.all_wrapper {
  width: 310px;
}
.texts_wrapper {

}
.wrapper_text {
  display: flex;
  flex-direction: column;
  width: 310px;
}
.long_text_in {
  width: 310px;
}
.previous_text_style {
  font-size: 12px;
}
.next_post {
  font-size: 12px;
}
.inovate_text {
  line-height: 20px; 
  font-size: 16px;
}
.last_text_wrapper_with_input {
  display: flex;
  justify-content: center;
}
.your_deg_in {
  width: 310px;
  font-size: 15px;
}
.littel_text {
  width: 300px;
  font-size: 11px;
}
.previus_post_wrap {
  width: 310px;

}

}

`

