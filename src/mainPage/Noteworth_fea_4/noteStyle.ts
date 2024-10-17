import styled from "styled-components";

export const Noteworth_wrapper = styled.div`
  width: 100%;
  background: var(--900, #0B0B0B);
  display: flex;
  flex-direction: column;
  align-items: center;

.NoteWorth_container {
  max-width: 900px;
  width: 100%;
}
.wrapper_texts {
  padding-top: 316px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.noteworthy_style {
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; 
  padding-top: 10px;
}
.long_boxes_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 30px;
}
.box_style {
  max-width: 1290px;
  width: 100%;
  height: 170px;
  border-radius: 30px;
  background: var(--700, #171717);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  cursor: pointer;
}
.box_style:hover {
  transform: scale(1.1);
  transition-duration: 0.7s;
  border: solid yellow;
}
.num_text_wrapper {
  display: flex;
  align-items: center;
}
.left_side {
  max-width: 80px;
  width: 100%;
  height: 80px;
  border-radius: 50%;
  background: var(--900, #0B0B0B);
  display: flex;
  align-items: center;
  justify-content: center;
}
.zero_num {
  font-feature-settings: 'liga' off, 'clig' off;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; 
  color: white;
}
.center_side {
  margin-left: 40px;
}
.top_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
  max-width: 300px;
  width: 100%;
}
.bottom_text {
  max-width: 400px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  margin-top: 10px;
}
.image_style {
  max-width: 130px;
  width: 100%;
  height: 140px;
  transform: rotate(-15deg);
  border-radius: 30px;
  opacity: 0.2;
  background: url(<path-to-image>) lightgray -115.44px -15.075px / 180.692% 111.399% no-repeat;
}
.right_side {
  display: inline-flex;
  height: 50px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  cursor: pointer;
}
.right_side:hover {
  background-color: yellow;
  button {
    color: black;
  }

}
.right_side:active {
  transform: scale(1.1);
}
.but_style {
  color: var(--White, #FFF);
  width: 65px;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  text-transform: uppercase;
  background-color: #171717;
  border: none;
  background: transparent;
  cursor: pointer;
}
.but_style:hover {
  color: black;
}
.right_allow {
  width: 23px;
  height: 23px;
  background-color: #EEFB13;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon_style {
  width: 15px;
  height: 15px;
}

@media only screen and (max-width: 1240px) {


.box_style {
  max-width: 1290px;
  width: 100%;
  height: 170px;
  border-radius: 30px;
  background: var(--700, #171717);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  cursor: pointer;
}
.box_style:hover {
  transform: scale(1.070);
  transition-duration: 0.7s;
  border: solid yellow;
}
}

@media only screen and (max-width: 930px){


.long_boxes_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  gap: 30px;
  padding: 0px 30px;
}
.box_style {
  max-width: 1000px;
  width: 100%;
  height: 170px;
  border-radius: 30px;
  background: var(--700, #171717);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  cursor: pointer;

}
.box_style:hover {
  transform: scale(1.050);
  transition-duration: 0.7s;
  border: solid yellow;
}
.num_text_wrapper {
  display: flex;
  align-items: center;
}
.left_side {
  max-width: 80px;
  width: 100%;
  height: 80px;
  border-radius: 50%;
  background: var(--900, #0B0B0B);
  display: flex;
  align-items: center;
  justify-content: center;
}
.zero_num {
  font-feature-settings: 'liga' off, 'clig' off;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; 
  color: white;
}
.center_side {
  margin-left: 40px;
}
.top_text {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; 
}
.bottom_text {
  max-width: 375px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; 
  margin-top: 10px;
}
.image_style {
  max-width: 130px;
  width: 100%;
  height: 140px;
  transform: rotate(-15deg);
  border-radius: 30px;
  opacity: 0.2;
  background: url(<path-to-image>) lightgray -115.44px -15.075px / 180.692% 111.399% no-repeat;
}
.right_side {
  display: inline-flex;
  height: 40px;
  width: 140px;
  padding: 20px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: 1px solid var(--200, #CCC);
  cursor: pointer;
}
.right_side:hover {
  background-color: yellow;
  button {
    color: black;
  }

}
.right_side:active {
  transform: scale(1.1);
}
.but_style {
  color: var(--White, #FFF);
  width: 65px;
  font-family: "Inter", sans-serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  text-transform: uppercase;
  background-color: #171717;
  border: none;
  background: transparent;
  cursor: pointer;
}
.but_style:hover {
  color: black;
}
.right_allow {
  width: 23px;
  height: 23px;
  background-color: #EEFB13;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image_style {
  width: 100px;
  height: 100px;
}

}

`