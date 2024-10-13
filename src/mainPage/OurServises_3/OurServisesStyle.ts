import styled from "styled-components";

export const Main_Wrap_OurSrvises = styled.div`
background: var(--700, #171717);
display: flex;
justify-content: center;
padding-top: 100px;
height: 1000px;

.OurServise_main {
  width: 900px;
  height: 700px;
  
}
.Top_texts_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between; 
}
.Our_Servises_style {
  color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
}
.long_texts_style {
  max-width: 320px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
}
.line_under-wrapper {
  display: flex;
  justify-content: center;
}
.inside_line {
  max-width: 1290px;
  width: 100%;
  height: 1px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #CCC;
  margin-top: 30px;
}
.boxes_wrapper {
  display: grid;
  grid-template-areas: 'a a a';
  justify-content: center;
  gap: 15px;
  margin-top: 50px;
}
.box_style {
  width: 290px;
  height: 200px;
  border-radius: 30px;
  border: 1px solid var(--200, #CCC);
  background: var(--700, #171717);
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
 
}
.box_style:hover {
  transform: translateY(-10px);
  transition-duration: 0.5s;
  border: 1px solid yellow;
  
}
.box_style:active{
    transform: scale(1.1);
    /* background-color: red; */
  }
  .Murodil_Wrapper {
    
  }
.Murodil_teacher {
  position: absolute;
  margin: 20px 0px -20px 2px;
}
.Digital_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 20.625px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 

  
}
.digital_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 20.625px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 

  z-index: 2;
}
.icon_style {
  width: 65px;
  height: 65px;
}
.icon_st {

  z-index: 999;
}
.digital_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 20.625px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
}
.Text_style_inside {
  width: 290px;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 20.625px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
}
.video_ma {
  display: flex;
  justify-content: center;
  margin-top: 120px;
  position: relative;
  z-index: 111;
}
.video_wrapper {
  width: 1290px;
  height: 445px;
  border-radius: 30px;
  background: #D9D9D9;
}
`