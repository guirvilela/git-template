import React from 'react';
import { Description } from '../Repositories/styles';
import { ContainerIssues } from './styles';
import { HiChevronRight } from 'react-icons/hi';

export interface IssuesRequest {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface IssuesData {
  issues: IssuesRequest;
}

const Issues = ({ issues }: IssuesData) => {
  return (
    <ContainerIssues>
      <a href={issues.html_url} target="_blank" rel="noopener noreferrer">
        <Description>
          <h2>{issues.title}</h2>
          <p>{issues.user.login}</p>
        </Description>

        <HiChevronRight size={24}> </HiChevronRight>
      </a>
    </ContainerIssues>
  );
};

export default Issues;
