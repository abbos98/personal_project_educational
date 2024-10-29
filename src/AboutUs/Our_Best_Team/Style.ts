import styled from "styled-components";

export const Wrapper_team = styled.div`
background-color:  #0B0B0B;
padding-top: 120px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;

.wrapper_texts {
display: flex;
flex-direction: column;
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
}
.team_wrapper {
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.first_best {
  display: flex;
  justify-content: center;
}
.second_best {
  cursor: pointer;
}
.our_best_member {
  color: black;
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}
.third_best {
  cursor: pointer;
}
.our_best_member_two {
  color: white;
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}

@media only screen and (max-width: 930px) {
 
.team_wrapper {
  display: grid;
  grid-template-areas: "a a";
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.third_best {
  margin-left: 55%;
}
}

@media only screen and (max-width: 620px) {

.noteworthy_style {
  line-height: 40px;
  margin-top: 15px;
}
.team_wrapper {
  display: grid;
  grid-template-areas: "a";
  justify-content: center;
}
.third_best {
  margin-left: 0px;
}
}


`