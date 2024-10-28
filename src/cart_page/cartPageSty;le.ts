import styled from "styled-components";

export const Wrapper_CartPage = styled.div`
background: linear-gradient(to right, black,yellow);
display: flex;
justify-content: center;

.all_main_Wrapper {
  max-width: 900px;
  width: 100%;
  height: 100vh;
  padding-top: 70px;

}
.top_text_wrapper {
  display: flex;
  justify-content: center;
}
.your_shopping_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
}
.Product_wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.first_line {

}
.product_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
.second_line {
  display: flex;
  gap: 185px;
  justify-content: space-between;
}
.price_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
.quantity_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
.total_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
}
.line_under {
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 10px;
}
.add_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
}
.Item_hart_wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
}
.image_style {
  max-width: 100px;
  width: 100%;
  height: 100px;
}
.basic_plan_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;  
}
.price_wrapper {
 display: flex;

}
.theerteen {

}
.style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;  
}
.plus_minus_wrapper {
  display: flex;
  justify-content: center;

}
.quantity_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;  
  
}
.minus {
  max-width: 40px;
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
}
.plus {
  max-width: 40px;
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.total_wrapper {

}
.num_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;  
}
.button_wrapper {
  display: flex;
  justify-content: end;
}
.but_style {
  max-width: 200px;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background: transparent;
  border: 2px solid green;
  background: linear-gradient(to right, yellow,green);
  cursor: pointer;
}
.but_style:hover {
  transform: scale(1.040);
}
.but_style:active {
  transform: scale(1.080); 
}

@media only screen and (max-width: 900px) {
padding-top: 50px;

.all_main_Wrapper {
    padding: 30px;
}
.second_line {
    gap: 140px;
}

}

@media only screen and (max-width: 430px) {

.all_main_Wrapper {
    height: 1000px;
    
}  
.all_main_Wrapper {
    padding: 30px;
}
.Product_wrapper {
    
}
.Item_hart_wrapper{
    display: flex;
    flex-direction: column;
}
.second_line {
    gap: 80px;
}
.add_wrapper {
    gap: 35px;
}
}

`