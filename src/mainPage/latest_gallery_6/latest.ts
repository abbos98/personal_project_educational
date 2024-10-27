import styled from "styled-components";

export const Wrapper_latest_gallery = styled.div`
padding-top: 80px;
padding-bottom: 80px;
background-color: #0B0B0B;
display: flex;
justify-content: center;

.all_main_wrapper {
  max-width: 900px;
  width: 100%;
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
  max-width: 285px;
  width: 100%;
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
  max-width: 270px;
  width: 100%;
  height: 235px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}
.style_three {
  max-width: 270px;
  width: 100%;
  height: 235px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}
.net_style {
  margin-left: 30px;
  max-width: 285px;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  background: #D9D9D9;
  opacity: 0.8;
}

@media only screen and (max-width: 930px) {
display: flex;

.Top_texts_wrapper {
  display: flex;
  justify-content: center;
  gap: 70px;
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
  max-width: 300px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; 
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

@media only screen and (max-width: 430px) {

.Top_texts_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
}
.long_texts_style {
  text-align: center;
  padding-top: 20px;
}
.images_wrapper {

}
.hana {
  width: 160px;
  height: 300px;
}
.net_style {
  width: 160px;
  height: 300px;
}
}



`