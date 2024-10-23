import styled from "styled-components";

export const Wrapper_right = styled.div`
background-color: pink;
width: 310px;
height: 500px;

.right_side_main {
  margin-top: 120px;
}
.one {
  width: 310px;
  height: 180px;
  border-radius: 20px;
  background: var(--700, #171717);
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
.search_style {
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Syne", sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  text-transform: capitalize;
  padding-left: 20px;
}
.wrapper_input_search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.input_style {
  width: 280px;
  height: 50px;
  border-radius: 999px;
  border: 1px solid white;
  border: 1px solid var(--200, #CCC);
  padding-left: 20px;
  background: transparent;
  color: white;
}
.search_icon_style {
 margin-left: -35px;
 color: white;
}
`