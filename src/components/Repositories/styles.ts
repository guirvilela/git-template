import styled from 'styled-components';

export const List = styled.li`
  list-style-type: none;
  background-color: #fff;
  padding: 14px;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #ccc;
  margin-bottom: 16px;
  transition: 0.2s;
  img {
    border-radius: 50%;
    max-width: 80px;
  }
  a {
    text-decoration: none;
    color: #41414d;
    display: flex;
    align-items: center;

    svg {
      margin-left: auto;
      color: #ccc;
    }
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const Description = styled.div`
  margin-left: 24px;

  p {
    margin: 0;
    color: #a8a8b3;
  }
  h2 {
    margin: 0;
    margin-bottom: 4px;
    font-size: 24px;
    font-weight: 700;
  }
`;
