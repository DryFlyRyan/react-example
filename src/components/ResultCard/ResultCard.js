import React from 'react';
import { formatDate } from '../../utils';

import {
  AvatarContainer,
  AvatarImage,
  AvatarImageContainer,
  DescriptionText,
  ResultCardContainer,
  ContentContainer,
  LanguageTab,
  TextContainer,
  TitleText,
  ActionContainer,
  ActionLink,
  TimeStamp,
} from './ResultCard.styles';

const ResultCard = ({ result }) => (
  <ResultCardContainer>
    <ContentContainer>
      <AvatarContainer>
        <AvatarImageContainer>
          <AvatarImage
            src={result.owner.avatar_url}
          />
        </AvatarImageContainer>
      </AvatarContainer>
      <TextContainer>
        <TitleText>
          {result.name}
        </TitleText>
        {!!result.description &&
          <DescriptionText>
            {result.description}
          </DescriptionText>
        }
      </TextContainer>
      <ActionContainer>
        <ActionLink
          isHomepage={!!result.homepage}
          href={result.homepage || result.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {result.homepage ? 'HOMEPAGE' : 'REPOSITORY'}
        </ActionLink>
        <TimeStamp>
          {formatDate('Created', result.created_at)}
        </TimeStamp>
        {!!result.updated_at &&
          <TimeStamp>
            {formatDate('Updated', result.updated_at)}
          </TimeStamp>
        }
      </ActionContainer>
    </ContentContainer>
    <LanguageTab
      title={result.language || 'None Detected'}
      language={result.language}
    >
    </LanguageTab>
  </ResultCardContainer>
)

export default ResultCard;
