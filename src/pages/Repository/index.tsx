import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import IssuesListRepositories, {
  IssuesRequest,
} from '../../components/IssuesList';
import api from '../../services/api';
import Logo from '../../assets/images/logo/Logo.svg';

import { Header, RepositoryInfo, IssuesComp } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<IssuesRequest[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    async function handleGetIssues(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(repository.data);
      setIssues(issues.data);
    }

    handleGetIssues();
  }, [params.repository]); //eslint-disabled-line

  return (
    <>
      <Header>
        <img src={Logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository ? (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      ) : (
        <h1>CARREGANDO</h1>
      )}

      <IssuesComp>
        {issues.map((rep: IssuesRequest) => (
          <IssuesListRepositories key={rep.id} issues={rep} />
        ))}
      </IssuesComp>
    </>
  );
};

export default Repository;
