import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import { HiChevronLeft } from 'react-icons/hi';

import { Link, useParams } from 'react-router-dom';
import { Container, Header, RepositoryInfo, UserInfo } from './styles';
import { Description } from '../../components/Repositories/styles';
import Issues, { IssuesRequest } from '../../components/Issues/Issues';
import api from '../../api/api';

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

interface RepositoryParams {
  repository: string;
}

const RepositoryComponent = (props: any) => {
  const [repository, setRepository] = useState<Repository | null>();
  const [issues, setIssues] = useState<IssuesRequest[]>([]);
  const params = useParams<RepositoryParams>();

  useEffect(() => {
    const propsLocation = props.location.pathname.split('/')[3];
    async function getIssues(): Promise<void> {
      const [repository, issues] = await Promise.all([
        api.get(`repos/${params.repository}/${propsLocation}`),
        api.get(`repos/${params.repository}/${propsLocation}/issues`),
      ]);
      setRepository(repository.data);
      setIssues(issues.data);
    }

    getIssues();
  }, [params.repository, props.location.pathname]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <HiChevronLeft size={24}></HiChevronLeft>Voltar
        </Link>

        <img src={Logo} alt="Logo"></img>
      </Header>

      <RepositoryInfo>
        <img src={repository?.owner.avatar_url} alt={repository?.owner.login} />
        <Description>
          <h2>{repository?.full_name}</h2>
          <p>{repository?.description}</p>
        </Description>
      </RepositoryInfo>

      <UserInfo>
        <div>
          <h3>{repository?.stargazers_count}</h3>
          <p>Stars</p>
        </div>
        <div>
          <h3>{repository?.forks_count}</h3>
          <p>Forks</p>
        </div>
        <div>
          <h3>{repository?.open_issues_count}</h3>
          <p>Issue</p>
        </div>
      </UserInfo>

      {issues.map((el: IssuesRequest) => (
        <Issues issues={el}></Issues>
      ))}
    </Container>
  );
};

export default RepositoryComponent;
