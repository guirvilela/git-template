import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { ListIssues } from './styles';

export interface IssuesRequest {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface dataIssues {
  issues: IssuesRequest;
}

const IssuesListRepositories: React.FC<dataIssues> = ({ issues }) => {
  return (
    <ListIssues>
      <a href={issues.html_url} target="_blank">
        <div>
          <strong>{issues.title}</strong>
          <p>{issues.user.login}</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </ListIssues>
  );
};

export default IssuesListRepositories;
