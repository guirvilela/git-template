import React, { useState, useEffect, FormEvent } from 'react';
import Logo from '../../assets/images/logo/Logo.svg';
import api from '../../services/api';
import ListRepositories, {
  Repository,
} from '../../components/ListRepositories';

import { Title, Form, Repositories, Error } from './styles';

const Dashboard: React.FC = () => {
  const [newRepo, setnewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GitHubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setnewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por este repositório');
    }
  }

  return (
    <>
      <img src={Logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="" hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(rep) => setnewRepo(rep.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((rep: Repository) => (
          <ListRepositories key={rep.full_name} repository={rep} />
        ))}
      </Repositories>
    </>
  );
};
export default Dashboard;
