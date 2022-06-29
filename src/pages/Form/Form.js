import React from "react";
import { FormStyled } from "./Form.styled";
import Main from "../../assets/main.png";
import Text from "../../components/Text/Text";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Checkbox from "../../components/Checkbox/Checkbox";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";

const Form = ({ display }) => {
  return (
    <FormStyled display="flex">
      <div>
        <img src={Main} alt="" />
      </div>
      <Title text="Intern Sign Up" />
      <div class="container1">
        <Text text="Full Name *" />
        <Input placeholder="Name" width="98%" type="text" />
        <Error visibility="hidden" text="Fullname Invalid" />
      </div>
      <div class="container2">
        <div class="sub-container1">
          <Text text="Email *" />
          <Input placeholder="foo@bar.com" width="90%" type="email" />
          <Error visibility="hidden" text="Email Invalid" />
          <Text text="Password *" />
          <Input width="90%" type="password" />
          <Error visibility="hidden" text="Password Invalid" />
        </div>
        <div class="sub-container2">
          <div class="container-media">
            <Text text="Phone" />
            <Input placeholder="(83) 00000-0000" width="100%" type="tel" />
            <Error visibility="hidden" text="Phone Invalid" />
          </div>
          <div class="container-media">
            <Text text="Birthday *" />
            <Input width="100%" type="date" />
            <Error visibility="hidden" text="Age Invalid" />
          </div>
        </div>
      </div>
      <div class="container3">
        <div>
          <Checkbox type="checkbox" text="I accept the terms and privacy" />
          <Error visibility="hidden" text="You must accept the terms" />
        </div>
        <Button width="90px" height="40px" id="form-button" text="Register" />
      </div>
    </FormStyled>
  );
};

export default Form;
