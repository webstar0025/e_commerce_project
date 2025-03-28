import styled from 'styled-components';

import { deviceSize, colors } from '_constants';
import { isMobileDevice } from '_helpers';
import { Form } from '_components';

export const StyledModal = styled.div`
  @media (max-width: ${deviceSize.tablet}px) {
    width: 100%;
  }
`;

export const StyledForm = styled(Form)`
  > div {
    width: 100%;
  }

  @media (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  color: #6726f1;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${deviceSize.tablet}px) {
    justify-content: flex-start;
  }
`;

export const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;

  @media (max-width: ${deviceSize.tablet}px) {
    position: static;
    top: initial;
    right: initial;
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding-top: 18px;
  padding-bottom: ${({ loginType }) =>
    loginType === 'Reset Password' && isMobileDevice
      ? '84px'
      : loginType === 'Reset Instructions Sent'
      ? '50px'
      : '20px'};
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  white-space: nowrap;
`;

export const ForgotPasswordText = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #8d8d94;
  text-align: left;
  margin: 16px 0px 6px 0px;
`;

export const NoAccountText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #8d8d94;
  text-align: left;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 20px 32px;
  background-color: ${colors.brand};
  border-radius: 6px;
  border: none;
  font-size: 16px;
  color: white;
  margin-top: 20px;
  margin-bottom: 10px;
  ${({ position }) =>
    position === 'bottom' &&
    `position: absolute; bottom: 30px; right: 0; left: 0; margin: 0 auto; width: calc(100% - 40px);`}
`;

export const SignupFromSigninButton = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px 32px 18px 32px;
  background-color: white;
  border-radius: 6px;
  border: 1px solid ${colors.brand};
  font-size: 16px;
  color: ${colors.brand};
`;

export const SignupFromSigninText = styled.span`
  cursor: pointer;
  color: ${colors.brand};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-left 5px;
`;

export const ErrorMessage = styled.div`
  white-space: nowrap;
  padding: 10px 20px;
  width: 346px;
  height: 42px;
  background: #ffaba4;
  border: 2px solid #ff1600;
  border-radius: 24px;
  font-size: 14px;
  line-height: 22px;
  color: #e52210;
  margin: 30px auto;
`;

export const SuccessMessage = styled.div`
  white-space: nowrap;
  padding: 10px 20px;
  width: 346px;
  height: 42px;
  background: #a4ffab;
  border: 2px solid #00ff16;
  border-radius: 24px;
  font-size: 14px;
  line-height: 22px;
  color: black;
  margin: 30px auto;
`;

export const ResetPasswordText = styled.div`
  padding 10px;
  font-size: 14px;
  line-height: 22px;
  color: #8d8d94;
`;

export const BackToSignInText = styled.span`
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  color: ${colors.brand};
  margin-left: 5px;
`;

export const EmailSentImage = styled.img`
  margin-bottom: 20px;
`;

export const ExtraTextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

  hr {
    color: ${colors.darkGray};
    height: 0.5px;
    width: 80px;
  }
  span {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: 10px;
    margin-right: 10px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: ${colors.darkGray};
  }
`;
