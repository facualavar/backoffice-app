const Form = (props) => {
  const { children, onSumbit } = props;

  return <form onSubmit={onSumbit}>{children}</form>;
};

export default Form;
