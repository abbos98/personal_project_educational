import styled from "styled-components";

export const Wrapper_question = styled.div`
width: 100%;
height: 720px;
display: flex;
justify-content: center;
background-color:  #0B0B0B;


.main_wrapper {
  width: 900px;
}
.text_wrapper {
  display: flex;
  justify-content: center;
  padding-top: 120px;
}
.some_style {
  color: var(--White, #FFF);
  text-align: center;
  font-family: "Syne", sans-serif;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; 
}
.all_side_wrapper {
    display: flex;
    align-items: center;
    padding-top: 50px;
    gap: 50px;
}
.right_side_wrapper {

}
.rigth_image {
  width: 450px;
  height: 400px;
  border-radius: 20px;
}

@media only screen and (max-width: 1240px) {

}

@media only screen and (max-width: 930px) {
height: 1100px;

.all_side_wrapper {
  display: flex;
  flex-direction: column-reverse;
}



}


`