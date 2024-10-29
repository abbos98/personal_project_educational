import styled from "styled-components";

export const Wrapper_blog = styled.div`
background-color: #0B0B0B;
width: 100%;

.main_image_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blog_style {
  color: white;
  text-align: center;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 69.95px; 
}.home_style {
  color: white;
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px; 
}
.sides_main_all {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;

}
.all_side_wrapper {
  display: flex;
  width: 900px;
  justify-content: space-between;
}
.left_side {
  width: 100%;
}
.right_side {

}


@media only screen and (max-width: 930px) {
height: 3600px;


.sides_main_all {
  display: flex;

}
.all_side_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
}
.left_side {
  height: 1400px;
  display: flex;
  justify-content: center;

}
.right_side {
  margin-top: 100px;
}


}







`