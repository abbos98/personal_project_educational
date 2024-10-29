import styled from "styled-components";

export const Wrapper_two_side = styled.div`
background-color: #0B0B0B;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.all_main_Wrapper {
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
  margin-bottom: 120px;
}
.left_side_wrapper {
  max-width: 430px;
  width: 100%;
}
.top_side {

}
.get_in_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding-top: 20px;
}
.long_text_style {
  font-family: "Inter", sans-serif;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-top: 15px;
}
.smaller_text_style {
  max-width: 400px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 15px;
}
.Get_an_appointment_wrapper {
  max-width: 400px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: var(--700, #171717);
  margin-top: 20px;
}
.get_an_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
  padding-top: 10px;
  padding-left: 20px;
}
.name_email_wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
}
.your_name {
  max-width: 170px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  color: white;
  cursor: pointer;
}
.your_name:hover {
  transform: scale(1.050);
}
.number_option_wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}
.Your_number {
  max-width: 170px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  color: white;
  cursor: pointer;
}
.Your_number:hover {
  transform: scale(1.050);
}
.Your_option {
  max-width: 170px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  color: white;
  cursor: pointer;
}
.Your_option:hover {
  transform: scale(1.050);
}
.text_area_Wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.text_area_Style {
  max-width: 360px;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  color: white;
  cursor: pointer;
}
.text_area_Style:hover {
  transform: scale(1.050);
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
  margin-top: 30px;
  margin-left: 20px;
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
  width: 20px;
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
.right_side_wrapper {
  max-width: 430px;
  width: 100%;
  padding-top: 25px;
}
.image_wrapper {

}
.image_style_map {
  max-width: 430px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background: #D9D9D9;

}
.detail_address_wrapper {
  display: grid;
  grid-template-areas: "a a";
  justify-content: space-between;
  row-gap: 20px;
  padding: 20px;
}
.message_wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon_left_side {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.icon_left_side:hover {
  transform: scale(1.070);
}
.icon_left_side:active {
  transform: scale(1.1);
}
.icon_style_in {
  color: yellow;
  width: 30px;
  height: 30px;
}
.text_detail_right {

}
.email_style_right {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
.email_style_det {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
}
@media only screen and (max-width: 1240px) {

}
@media only screen and (max-width: 930px) {


.all_main_Wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.left_side_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_side {
  padding-left: 20px;
}
.right_side_wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image_style_map {
  width: 400px;
}
.detail_address_wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
 
}
.email_style_right {
  font-size: 18px;
}
.email_style_det {
  font-size: 20px;
}
}

@media only screen and (max-width: 430px) {

.top_side {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.long_text_style {
  text-align: center;
  width: 350px;
  font-size: 24px;
}
.smaller_text_style{
  text-align: center;
}
.Get_an_appointment_wrapper {
  width: 380px;
}
.image_style_map {
  width: 380px;
}
}


`