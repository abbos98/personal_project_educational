import styled from "styled-components";


export const Wrap_illuminate = styled.div`
  background: var(--900, #0B0B0B);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 100px;

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
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  align-self: stretch;
  font-family: "Inter", sans-serif;
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  max-width: 450px;
  width: 100%;
  padding-top: 18px;
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
}

.tel_wrap:hover {
  /* background-color: #EEFB13; */
  transform: translateY(-10px);
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
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  margin-top: 7px;
  padding: 0px 2px;
}
.yellow_line_wrapper {
  height: 98px;
  width: 100%;
  background: var(--Dark-Primary, #EEFB13);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0px 10px;

}
.presence_style {
  color: var(--900, #0B0B0B);
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
}
.stars_style {
  width: 80px;
  height: 80px;
}








`