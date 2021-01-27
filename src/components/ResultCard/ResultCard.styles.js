import styled from 'styled-components';
import { languageColorSelector } from '../../utils';

export const ResultCardContainer = styled.article`
  width: 95%;
  min-height: 100px;
  * {
    text-overflow: ellipsis;
  }
  border-radius: 10px;
  overflow: hidden;
  margin: 5px 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  @media only screen and (max-width: 768px) {
    width: 95%;
    max-width: 95%;
  }
`;

export const ContentContainer = styled.div`
  background: #fff;
  flex: 100% 1 1;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export const LanguageTab = styled.div`
  background: ${({ language }) => languageColorSelector(language)};
  flex: 25px 0 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;


export const AvatarContainer = styled.div`
  flex: 125px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    flex: 90px 0 0;
  }
`

export const AvatarImageContainer = styled.div`
  height: 76px;
  width: 76px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AvatarImage = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  flex: 70% 1 1;
  display: flex;
  flex-flow: column nowrap;

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const TitleText = styled.h2`
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

export const DescriptionText = styled.p`
  margin-top: 0;
  max-width: 80%;
`;

export const ActionContainer = styled.div`
  flex: 30% 1 1;
  padding-right: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  margin: 10px 0;

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const ActionLink = styled.a`
  text-decoration: none;
  min-width: 75px;
  border-radius: 25px;
  background: #000;
  /* background: ${props => props.isHomepage ? '#9bc2f2' : '#f54242'}; */
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  padding: 8px 20px;
  margin-bottom: 5px;
`;

export const TimeStamp = styled.p`
  margin: 2px 0;
`
