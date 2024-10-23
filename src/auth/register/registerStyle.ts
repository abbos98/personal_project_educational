import styled from "styled-components";

export const Wrapper_reg = styled.div`
background: linear-gradient(to right,black, yellow);
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.register_box {
  max-width: 400px;
  width: 100%;
  height: 450px;
  border-radius: 30px;
  background-color: #0B0B0B;
}
.first_line {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.create_account_Style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;   
}
.second_line {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: 30px;
}
.icon_wrapper {
  max-width: 250px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  cursor: pointer;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
}
.person_style {
  color: white;
}
.input_style {
  background: transparent;
  border: none;
  padding-left: 10px;
  color: white;
  height: 40px;
} 
.third_line {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}
.button_Style_in {
  width: 150px;
  height: 45px;
  border-radius: 30px;
  border: 1px solid yellow;
  background: transparent;
  cursor: pointer;
  font-family: "Syne", sans-serif;
  color: white;
}
.button_Style_in:hover {
  background: linear-gradient(to right, yellow, black);
}
.button_Style_in:active {
    transform: scale(1.050);
}
`