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
  max-width: 900px;
  width: 100%;
} 
.first_line_vs_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.yellow_line {
  max-width: 55px;
  width: 100%;
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
  margin-top: 15px;
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
  max-width: 290px;
  width: 100%;
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
  max-width: 430px;
  width: 100%;
  padding-top: 18px;
}
.main_wrap_tel {
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.tel_wrap {
  max-width: 50px;
  width: 100%;
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
  background-color: #171717;
  max-width: 230px;
  width: 100%;
  height: 270px;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
  animation: some 1s  linear alternate infinite;
}
@keyframes some {
  from{
    margin: 0px;
  } to {
    margin-bottom: 5px;
  }
}
.wrapper_in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.roket_style {
  max-width: 75px;
  width: 100%;
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
  margin-top: 100px;
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
  max-width: 80px;
  width: 100%;
  height: 80px;
}

@media only screen and (max-width:1240px) {


.person_style {
  max-width: 240px;
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background: #D9D9D9;
}  
.third_line {
  max-width: 250px;
  width: 100%;
} 
.yellow_line_wrapper {
  height: 98px;
  max-width: 100%;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  max-width: 210px;
  width: 100%;
  
}
}

@media only screen and (max-width: 930px) {

.Main_illuminate {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.first_line_vs_text {
  width: 500px;
}
.text_style {
  font-size: 40px;
}
.second_line_with_images {
  padding: 0px 30px;
  margin-top: 50px;
}
.text_tab {
  width: 285px;
}
.third_line {
  display: none;
}
.main_wrap_tel {
  margin-top: 20px;
}
.yellow_line_wrapper {
 display: flex;
 justify-content: center;
 gap: 20px;
 padding: 0px 20px;
}
.presence_style {
  font-size: 10px;
}
.stars_style {
  width: 40px;
  height: 40px;
}
}

@media only screen and (max-width: 430px) {


.text_style {
  max-width: 400px;
  width: 100%;
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; 
  padding-top: 10px;
  margin-top: 15px;
}
.second_line_with_images {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inside_one {
  display: flex;
  justify-content: center;
}
.person_style {
  max-width: 290px;
  width: 100%;
  height: 320px;
  border-radius: 30px;
}
.text_head {
  text-align: center;
}
.text_tab {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  align-self: stretch;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  max-width: 430px;
}
.yellow_line_wrapper {

}
.presence_style {
  font-size: 12px;
  line-height: 26px;
}


`