import styled from "styled-components";

export const Wrapper_Login = styled.div`
background: linear-gradient(to right,black, yellow);
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.login_box {
  max-width: 400px;
  width: 100%;
  height: 450px;
  border-radius: 30px;
  background-color: #0B0B0B;
}
.first_line {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 10px;
}
.login_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; 
}
.small_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  opacity: 0.4;
}
.second_line_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
}
.second_line {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
.second_line:hover {
  transform: scale(1.040);
  transition-duration: 0.30s;
}
.third_line {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
}
.forgot_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.4;
  cursor: pointer;
}
.forgot_style:hover {
  text-decoration: underline; 
}
.button_Styke {
  max-width: 100px;
  width: 100%;
  height: 50px;
  border: 1px solid green;
  background: transparent;
  border-radius: 20px;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  cursor: pointer;
}
.button_Styke:hover {
    transform: scale(1.050);
}
.button_Styke:active {
    transform: scale(1.1);
}
.username_wrapper {
  max-width: 250px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  opacity: 0.6;
  padding-left: 80px;
}
.fourt_line {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.telegram_style {
  color: white;
  cursor: pointer;
}
.telegram_style:hover {
  color: yellow;
}
.telegram_style:active {
  transform: scale(1.1);
}
.instagram_style {
  color: white;
  cursor: pointer;
}
.instagram_style:hover {
  color: yellow;
}
.instagram_style:active{
  transform: scale(1.1);    
}
.facebook_style {
  color: white;
  cursor: pointer;
}
.facebook_style:hover {
  color: yellow;
}
.facebook_style:active {
  transform: scale(1.1);     
}
.create_acc_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.create_style {
  width: 250px;
  height: 30px;
  border-radius: 20px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  color: white;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  background-color: green;
}
.create_style:hover {
  background-color: yellow;
  color: black;
}
.create_style:active {
  transform: scale(1.080);
}



`