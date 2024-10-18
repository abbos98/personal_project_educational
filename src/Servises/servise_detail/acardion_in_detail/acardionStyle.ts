import styled from "styled-components";

export const Wrapper_detail = styled.div`
padding-top: 30px;
background-color:  #0B0B0B;
width: 100%;
padding-bottom: 120px;

.wrapper_all {
  width: 420px;
  margin-left: 14.5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media only screen and (max-width: 930px) {
  display: flex;
  justify-content: center;

.wrapper_all {
  margin: 0px;
}
}
`