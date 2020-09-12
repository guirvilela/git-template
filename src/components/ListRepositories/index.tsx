import React, { Children } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { ListRepository } from './styles';
import { Link } from 'react-router-dom';

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

const ListRepositories: React.FC<dataRepository> = ({ repository }) => {
  return (
    <ListRepository>
      <Link to={`/repository/${repository.full_name}`}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>

        <FiChevronRight size={20} />
      </Link>
    </ListRepository>
  );
};

export default ListRepositories;
