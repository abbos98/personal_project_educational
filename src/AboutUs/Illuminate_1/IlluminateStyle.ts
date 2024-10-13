import styled from "styled-components";

export const Wrapper_Illuminate = styled.div`
width: 100%;
padding-top: 120px;
background-color: #0B0B0B;
display: flex;
justify-content: center;

.Main_illuminate {
  width: 900px;
  height: 725px;
} 
.first_line_vs_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.yellow_line {
  width: 55px;
  height: 15px;
}
.text_style {
  max-width: 800px;
  width: 100%;
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
  padding-top: 10px;
}
.second_line_with_images {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  gap: 30px;
}
.inside_one {

}
.person_style {
  width: 240px;
  height: 320px;
  border-radius: 30px;
  background: #D9D9D9;
}
.inside_two {

}
.text_head {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
  align-self: stretch;
}
.text_tab {
  width: 390px;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  opacity: 0.8;
}
.main_wrap_tel {
  display: flex;
  align-items: center;
  margin-top: 40px;
}

.tel_wrap {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #003300;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: abs 0.6s linear alternate infinite;

  @keyframes abs {
  from{
    margin: 0px;
  } to {
    margin-bottom: 10px;
  }
 }
}
.tel_style {
  color: yellow;
}
.text_inside {
  padding-left: 15px;
}
.need_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  cursor: pointer;
}
.num_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px;
  cursor: pointer; 
}
.third_line {
  width: 300px;
  height: 270px;
  border-radius: 20px;
  background: var(--700, #171717);
  margin-top: 50px;
  cursor: pointer;
  animation: some 1s  linear alternate infinite;
}
@keyframes some {
  from{
    margin: 0px;
  } to {
    margin-bottom: 10px;
  }
}


.wrapper_in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.roket_style {
  width: 75px;
  height: 75px;
  margin-top: 20px;
}
.three_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; 
  margin-top: 20px;
}
.text_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}
.website_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
}
.more_text_style {
  color: var(--White, #FFF);
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  margin-top: 7px;
  padding: 0px 2px;
}


`