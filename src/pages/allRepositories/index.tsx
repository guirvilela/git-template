import React, { useEffect, useState } from 'react';
import api from '../../api/api';

import Logo from '../../assets/Logo.svg';
import InputComponent from '../../components/Input/input';
import Repositories, {
  Repository,
} from '../../components/Repositories/repositories';

import { Container, ListRepositories } from './styles';

const AllRepository = () => {
  const [failSearch, setFailSearch] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem('@git-project');

    if (storageRepository) {
      return JSON.parse(storageRepository);
    } else {
      return [];
    }
  });

  async function searchRepo(value: string) {
    try {
      const { data } = await api.get(`/repos/${value}`);

      setRepositories([...repositories, data]);
      setFailSearch('');
    } catch (error) {
      setFailSearch('Falha ao encontrar repositório');
    }
  }

  useEffect(() => {
    localStorage.setItem('@git-project', JSON.stringify(repositories));
  }, [repositories]);

  return (
    <Container>
      <img src={Logo} alt="Logo"></img>

      <h1>Explore repositórios no Github.</h1>

      <InputComponent
        onSearchRepo={searchRepo}
        catch={failSearch}
      ></InputComponent>
      <ListRepositories>
        {repositories.map((el: Repository) => (
          <Repositories key={el.full_name} repository={el}></Repositories>
        ))}
      </ListRepositories>
    </Container>
  );
};

export default AllRepository;
