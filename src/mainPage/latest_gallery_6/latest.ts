import styled from "styled-components";

export const Wrapper_latest_gallery = styled.div`
background-color: red;
padding-top: 120px;
background-color: #0B0B0B;
display: flex;
justify-content: center;

.all_main_wrapper {
  width: 900px;
}
.Top_texts_wrapper {
  display: flex;
  justify-content: space-between;

}
.Our_Servises_style {
  color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
}
.long_texts_style {
  max-width: 370px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
}
.line_under-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.inside_line {
  max-width: 1290px;
  width: 100%;
  height: 1px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #CCC;
}
.images_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.hana {
  width: 285px;
  height: 500px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}
.center_Wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 30px;
}
.style_two {
  width: 270px;
  height: 235px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}
.style_three {
  width: 270px;
  height: 235px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}
.net_style {
  margin-left: 30px;
  width: 285px;
  height: 500px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}


@media only screen and (max-width: 1240ox) {

  
.images_wrapper {

}

.center_Wrapper {
  
}
}


@media only screen and (max-width: 930px) {
  padding: 0px 30px;
  padding-top: 100px;

.all_main_wrapper {
  width: 600px;
}
.Top_texts_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Our_Servises_style {
  color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; 
}
.long_texts_style {
  max-width: 250px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; 
}
.line_under-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.inside_line {
  width: 600px;
}
.images_wrapper {

}
.center_Wrapper {
  display: none;
 }
}
`