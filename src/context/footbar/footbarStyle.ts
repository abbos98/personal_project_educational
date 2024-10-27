  import styled from "styled-components";


export const Footer_test = styled.div`
display: flex;
justify-content: center;
background: var(--700, #171717);

.main_main {
  max-width: 900px;
  width: 100%;
  height: 621px;
}
.main_first {
  padding-top: 70px;
}
.left_side_top {
  display: flex;
  justify-content: space-between;
}
.d_style {
  display: flex;
  gap: 1px;
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
.texts_warpper {
    display: flex;
    align-items: center;
    gap: 5px;
}
.button_wrap {
  display: flex;
  align-items: center;
}
.testStyle {
  text-decoration: none;
  color: var(--White, #FFF);
  font-size: 13.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  font-family: "Inter", sans-serif;
}
.testStyle:hover {
  text-decoration: underline;
  
}
.icon_style {
  color: var(--White, #FFF);
  font-family: "Font Awesome 6 Free";
  font-size: 10px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.main_second {
  display: flex;
  gap: 26px;
  padding-top: 90px;
}
.center_text_wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.follow_us {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
  padding-bottom: 15px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
}
.facebook:hover {
 transform: scale(1.050);
 border: 1px solid yellow;
}
.facebook:active{
  transform: scale(1.1);
}
.facebook_sty {
  color: white;
  width: 20px;
  height: 20px;
}
.in_style {
  color: white;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; 
}
.telegram_style {
  color: white;
  width: 20px;
  height: 20px;
}
.long_text {
  max-width: 230px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px; 
}
.Company_wrapper {

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
.Company_wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.company_style {

}
.sms_wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
}
.sms_icon {
  color: white;
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
  color: white;
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
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; 
  opacity: 0.9;
  cursor: pointer;
}
.address_style:hover {
  text-decoration: underline;
}
.Establish {
  max-width: 250px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14 px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  opacity: 0.9;
}
.input_wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.your_email_style {
  max-width: 250px;
  width: 100%;
  height: 55px;
  border-radius: 999px;
  background: var(--900, #0B0B0B);
  border: none;
  padding-left: 20px;
}
.but_yellow {
  display: flex;
  max-width: 45px;
  width: 100%;
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

@media only screen and (max-width: 1240px) {
 padding: 0px 30px;



}

@media only screen and (max-width: 930px) {


  .main_second {
    display: none;
  }
  .d_style {
    display: flex;
    height: 20px;
  }
  .icon_style {
    width: 20px;
    height: 20px;
    margin-top: 6px;
  }
  .iziti_style {
    font-size: 10px;
  }
  .texts_warpper {
    display: flex;
   
  }
  .button_wrap {
    display: flex;
    align-items: center;
  }
  .testStyle {
    font-size: 8px;
  }
  .icon_style {
    width: 13px;
    height: 13px;
  }
  .main_third {
    display: none;
  }
}


















`