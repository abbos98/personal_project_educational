import styled from "styled-components";

export const Wrapper_prising = styled.div`
  background-color: #0B0B0B;
  display: flex;
  justify-content: center;
  padding-top: 100px;


.Pricing_plane_wrapper {
  
  
}
.top_text_sstyle {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Pricing_style {
  color: var(--White, #FFF);
  font-family: "Syne", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;

}
.Montly_yearly_contaniner {
  display: flex;
  margin-top: 20px;
}
.Montly_style {
  width: 130px;
  height: 55px;
  border-radius: 45px 0px 0px 45px;
  border: 1px solid var(--200, #CCC);
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Montly_style:hover {
  background-color:  #EEFB13;
  color: #0B0B0B; 
}
.Montly_style:active {
  transform: scale(1.1);
}
.Yearly_style {
  width: 130px;
  height: 55px;
  border-radius: 0px 45px 45px 0px;
  border: 1px solid var(--200, #CCC);
  color: var(--White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: "Inter", sans-serif;
  font-size: 18.281px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.Yearly_style:hover {
  background-color:  #EEFB13;
  color: #0B0B0B;
}
.Yearly_style:active{
  transform: scale(1.1);
}
.line_second {
  max-width: 900px;
  width: 100%;
  height: 1px;
  margin-top: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #CCC;
}
.cost_boxes_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 100px;
}


@media only screen and (max-width: 930px) {



.Pricing_plane_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_text_sstyle {
  width: 600px;
  display: flex;
  justify-content: space-between;
}
.Pricing_style {
  padding-top: 10px;
}
.line_second {
  width: 600px;
}
.cost_boxes_wrapper {
 display: flex;
 justify-content: center;
 gap: 10px;
}
}

@media only screen and (max-width: 430px) {
  

.top_text_sstyle {
  display: flex;
  flex-direction: column;

}
}
`