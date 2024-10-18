import styled from "styled-components";

export const Wrapper_six_box = styled.div`
  background-color: #0B0B0B;
  width: 100%;
  display: flex;
  justify-content: center;

.all_Wrapper {
  max-width: 900px;
  width: 100%;
}
.boxes_wrapper {
  display: grid;
  grid-template-areas: 'a a a';
  justify-content: center;
  gap: 15px;
  padding-top: 120px;
}
.box_Style {
  width: 290px;
  height: 240px;
  border-radius: 20px;
  background: var(--700, #171717);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 0px;
  cursor: pointer;
}
.box_Style:hover {
  transform: scale(1.050);
  transition-duration: 0.40s;
  border: 1px solid yellow;
}
.top_side_in {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
}
.round {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #0B0B0B;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text_navigare {
  max-width: 180px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}
.center_side_in {
  display: flex;
  justify-content: center;
}
.long_text_style {
  max-width: 250px;
  width: 100%;
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  opacity: 0.8;
}
.bottom_side_in {
  margin-left: 20px;
}
.right_side {
  display: inline-flex;
  height: 40px;
  width: 140px;
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
  width: 20px;
  height: 20px;
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

}

@media only screen and (max-width: 930px) {
.boxes_wrapper {
  display: grid;
  grid-template-areas: 'a a';
}
}

@media only screen and (max-width: 630px) {

.boxes_wrapper {
  display: grid;
  grid-template-areas: 'a';
}
}


`