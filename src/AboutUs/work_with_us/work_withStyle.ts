import styled from "styled-components";

export const Wrapper_work_with = styled.div`
width: 100%;
background: var(--700, #171717);
display: flex;
justify-content: center;
padding-top: 100px;

.main_main {
  max-width: 900px;
  width: 100%;
}
.firts_line {
  display: flex;
  justify-content: center;
  width: 100%;
}
.work_with_us {
  font-feature-settings: 'liga' off, 'clig' off;
  -webkit-text-stroke-width: 2;
  -webkit-text-stroke-color: var(--Dark-Primary, #EEFB13);
  font-family: "Syne", sans-serif;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 120px;
  opacity: 0.5;
  color: yellow;
}
.second_line {
  display: flex;
  justify-content: space-between;
}
.one {
  max-width: 240px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  background: var(--900, #0B0B0B);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}
.D_style_wrapper {
  display: flex;
}
.icon_style {
  max-width: 25px;
  width: 100%;
  height: 25px;
}
.iziti_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}
.text_style {

}
.it_is {
  max-width: 220px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.9;
}
.follow_us {

}
.follow_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
}
.sns_wrapper {
  display: flex;
  gap: 20px;
}
.facebook {
  max-width: 30px;
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: 1px solid var(--200, #CCC);
  opacity: 0.2;
}
.Company_wrapper {
  max-width: 130px;
  width: 100%;
  height: 250px;
  border-radius: 20px;
  background: var(--900, #0B0B0B);
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 10px;
}
.company_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
  padding-bottom: 15px;
}
.text_style_com {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.9;
  cursor: pointer;
}
.text_style_com:hover {
    text-decoration: underline;
}
.Company_wrapper_two {
  max-width: 220px;
  width: 100%;
  height: 220px;
  border-radius: 20px;
  background: var(--900, #0B0B0B);
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.company_style {

}
.sms_wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}
.sms_icon {
  color: yellow;
  width: 20px;
  height: 20px;
}
.email {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.9;
  cursor: pointer;
}
.email:hover {
  text-decoration: underline;
}
.location_wrapper {
  display: flex;
  align-items: start;
  gap: 5px;
}
.location_style {
  color: yellow;
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.address_style {
  max-width: 200px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; 
  opacity: 0.9;
  cursor: pointer;
}
.address_style:hover {
  text-decoration: underline;
}
.Company_wrapper_three {
  max-width: 250px;
  width: 100%;
  height: 240px;
  background-color: #0B0B0B;
  border-radius: 20px;
  padding: 10px;
}
.Establish {
  max-width: 230px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.9;
}
.input_wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 15px;
}
.your_email_style {
  max-width: 250px;
  width: 100%;
  height: 55px;
  border-radius: 999px;
  background: var(--900, #0B0B0B);
  border: 1px solid yellow;
  padding-left: 20px;
  cursor: pointer;
}
.but_yellow {
  display: flex;
  width: 45px;
  height: 45px;
  padding: 16.667px 25px;
  justify-content: center;
  align-items: center;
  gap: 8.333px;
  border-radius: 999px;
  background: var(--Dark-Primary, #EEFB13);
  margin-left: -55px;
  cursor: pointer;
}
.main_third {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-bottom: 20px;
}
.bottom_left {

}
.rights {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.7;
}
.bottom_right {
  display: flex;
  gap: 15px;
}
.texts_last_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  opacity: 0.7;
  cursor: pointer;
}
.texts_last_style:hover {
    text-decoration: underline;
}

@media only screen and (max-width:1240px) {

}
@media only screen and (max-width:930px) {

.main_main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.firts_line {

  width: 100%;
  display: flex;
  justify-content: center;
}
.work_with_us {
  font-size: 60px;

}
.second_line {
  display: none;
}
.main_third {

}
.bottom_left {

}
.rights {
  font-size: 15px;
  width: 170px;
}
.bottom_right {
  gap: 5px;
  display: flex;
  align-items: center;
}
.texts_last_style {
  width: 110px;
  font-size: 12px;
 
}

}

`