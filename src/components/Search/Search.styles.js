import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const spin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`

export const Banner = styled.header`
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  line-height: 21px;
  padding: 16px 32px;
  background-color: rgb(36, 41, 46);
  @media only screen and (max-width: 768px) {
    width: 100%;
    min-width: 100%;
    flex-wrap: wrap;
  }
`;


export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  max-width: 30%;
  > * {
    display: inline-block;
    min-width: 40%;
    :first-child {
      margin-right: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 15px;
    width: 100%;
    min-width: 100%;
    flex-wrap: wrap;
    > * {
      flex: 1 1 auto;
    }
  }
`;

export const GrowContainer = styled.div`
  margin-bottom: 0;
  margin-right: 16px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 21px;
  position: relative;
  max-width: 15%;
  width: 100%;
  transition: 0.2s all ease-in-out;

  :focus-within {
    max-width: 30%;
    color: rgb(36, 41, 46);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const SearchForm = styled.form`
  margin: 0;
  padding: 0;
`;

export const HiddenLabel = styled.label`
  display: flex;
  align-items: center;
  background-position-x: calc(100% - 8px);
  background-position-y: 50%;
  border-radius: 6px;
  border: 0px none #FFF;
  line-height: 20px;
  min-height: 28px;
  background: rgba(255, 255, 255, 0.125);
  transition: 0.3s all ease-in-out;

  :focus-within {
    background: rgba(255, 255, 255, 1);
  }
`;

export const SearchInput = styled.input`
  background: none;
  color: rgb(255, 255, 255);
  border-radius: 6px;
  border-color: #FFF;
  padding: 0 12px;
  vertical-align: middle;
  text-align: start;
  min-height: 28px;
  line-height: 20px;
  font-size: 14px;
  background-color: transparent;
  border-width: 0px;
  border-style: none;
  appearance: none;
  outline: 0px none #FFF;
  box-sizing: border-box;
  outline-color: rgb(255, 255, 255);
  width: 100%;
  ::placeholder {
    opacity: 1;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }
  :focus {
    color: rgb(36, 41, 46);
  }
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 8px;
  font-size: 16px;
  animation-name: ${spin};
  animation-iteration-count: infinite;
  animation-duration: 1s;
  transition: 0.2s all ease-in-out;
  opacity: ${props => props.theme.isSearching ? '1' : '0'};
`;
