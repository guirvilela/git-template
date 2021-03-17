import React from 'react';
import { Link } from 'react-router-dom';
import { Description, List } from './styles';
import { HiChevronRight } from 'react-icons/hi';

export interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface dataRepository {
  repository: Repository;
}

const Repositories = ({ repository }: dataRepository) => {
  return (
    <List>
      <Link to={`/repository/${repository.full_name}`}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <Description>
          <h2>{repository.full_name}</h2>
          <p>{repository.description}</p>
        </Description>

        <HiChevronRight size={24}> </HiChevronRight>
      </Link>
    </List>
  );
};

export default Repositories;
