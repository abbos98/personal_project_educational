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
  line-height: 10px; 
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
  padding-top: 25px;
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
  padding-top: 20px;
}
.right_side_wrapper {
  max-width: 310px;
  width: 100%;
}
.Servise_details_wrapper {
  width: 310px;
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
  width: 250px;
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
  width: 20px;
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



`