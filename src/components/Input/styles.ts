import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface Property {
  error: boolean;
  success: string;
}

export const ContainerForm = styled.form`
  max-width: 720px;
  display: flex;
  margin-top: 40px;

  button {
    border: 0;
    background: #04d361;
    color: #fff;
    font-size: 18px;
    width: 200px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    outline: 0;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
`;

export const Input = styled.input<Property>`
  height: 70px;
  flex: 1;
  outline: 0;
  border: 0;
  font-size: 16px;
  padding-left: 10px;
  border-radius: 5px 0 0 5px;

  ${(props) =>
    props.error &&
    css`
      border: 2px solid #c53030;
      border-right: 0;
    `}
  ${(props) =>
    props.success &&
    css`
      border: 2px solid #04d361;
      border-right: 0;
    `}
`;

export const ErrorInput = styled.p`
  color: #c53030;
`;

export const SuccessStatus = styled.p`
  color: #04d361;
`;
