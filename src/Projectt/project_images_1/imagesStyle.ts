import styled from "styled-components";

export const Wrapper_images = styled.div`
background-color: #0B0B0B;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 100px;

.image_all_wrapper {
  width: 900px;
}
.first_image_one {
  display: flex;
  justify-content: space-between;
}
.one_Style_wrapper {
  width: 430px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.one_Style_wrapper:hover {
  border: 1px solid yellow;
  transform: scale(1.050);
  transition-duration: 0.50s;
  .round {
    display: flex;
  }
}
.one_Style_wrapper:active {
  transform: scale(1.1);
}
.round {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: yellow;
  display: none;
  justify-content: center;
  align-items: center;
}
.arrow_style {
 transform: rotate(320deg); 
}
.two_Style_wrapper {
  width: 430px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.two_Style_wrapper:hover {
  border: 1px solid yellow;
  transform: scale(1.050);
  transition-duration: 0.50s;
  .round {
    display: flex;
  }
}
.two_Style_wrapper:active {
  transform: scale(1.1);  
}
.second_line {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

}
.three_Style_wrapper {
  width: 500px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.three_Style_wrapper:hover {
  border: 1px solid yellow;
  transform: scale(1.050);
  transition-duration: 0.50s;
  .round {
    display: flex;
  }
}
.three_Style_wrapper:active {
  transform: scale(1.1); 
}
.four_Style_wrapper {
  width: 370px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.four_Style_wrapper:hover {
  border: 1px solid yellow;
  transform: scale(1.050);
  transition-duration: 0.50s;
  .round {
    display: flex;
  }
}
.four_Style_wrapper:active {
  transform: scale(1.1);
}
.third_line {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.five_Style_wrapper {
  width: 440px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.five_Style_wrapper:hover {
  border: 1px solid yellow;
  transform: scale(1.050);
  transition-duration: 0.50s;
  .round {
    display: flex;
  }
}
.five_Style_wrapper:active {
  transform: scale(1.1);
}
.six_Style_wrapper {
  width: 440px;
  height: 350px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.six_Style_wrapper:hover {
  border: 1px solid yellow;
  transform: scale(1.050);
  transition-duration: 0.50s;
  .round {
    display: flex;
  }
}
.six_Style_wrapper:active {
  transform: scale(1.1);
}


@media only screen and (max-width: 1240px) {
  
}
@media only screen and (max-width: 930px) {
 .image_all_wrapper {
   width: 100%;
 } 
 .first_image_one {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
 }
 .one_Style_wrapper {
   width: 550px;
   height: 350px;
 }
 .two_Style_wrapper {
   width: 550px;
   height: 350px;
 }
 .second_line {
   display: flex;
   flex-direction: column;
   gap: 50px;
   align-items: center;
 }
 .three_Style_wrapper {
   width: 550px;
   height: 350px;
 }
 .four_Style_wrapper {
   width: 550px;
   height: 350px;
 }
.third_line {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
}
.five_Style_wrapper {
  width: 550px;
  height: 350px;
}
.six_Style_wrapper {
  width: 550px;
  height: 350px;
}
}
@media only screen and (max-width: 630px) {
.image_all_wrapper {

}
.first_image_one {
}
.one_Style_wrapper {
  width: 350px;
  height: 250px;
}
.two_Style_wrapper {
  width: 350px;
  height: 250px;
}
.second_line {

}
.three_Style_wrapper {
  width: 350px;
  height: 250px;
}
.four_Style_wrapper {
  width: 350px;
  height: 250px;
}
.third_line {

}
.five_Style_wrapper {
  width: 350px;
  height: 250px;
}
.six_Style_wrapper {
  width: 350px;
  height: 250px;
}
} 
`