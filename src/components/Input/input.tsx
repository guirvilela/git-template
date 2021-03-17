import React, { FormEvent, useState } from 'react';
import { ContainerForm, ErrorInput, Input, SuccessStatus } from './styles';

const InputComponent = (props: any) => {
  const [repoValue, setRepoValue] = useState('');

  const [errorInput, setErrorInput] = useState('');
  console.log(props);
  function searchRepo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (repoValue) {
      props.onSearchRepo(repoValue);

      setRepoValue('');
      setErrorInput('');
    } else {
      setErrorInput('Preencha o campo');
    }
  }

  return (
    <>
      <ContainerForm action="" onSubmit={searchRepo}>
        <Input
          placeholder="Digite Aqui..."
          type="text"
          onChange={(rep) => setRepoValue(rep.target.value)}
          value={repoValue}
          error={!!errorInput || props.catch}
          success={props.success && !errorInput && !props.catch}
        />
        <button type="submit">Pesquisar</button>
      </ContainerForm>

      {props.success && !errorInput && !props.catch && (
        <SuccessStatus>{props.success}</SuccessStatus>
      )}
      {errorInput || props.catch ? (
        <ErrorInput>{errorInput ? errorInput : props.catch}</ErrorInput>
      ) : (
        ''
      )}
    </>
  );
};

export default InputComponent;
