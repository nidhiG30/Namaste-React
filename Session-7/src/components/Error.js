import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  const {status, statusText} = err; // With object destructuring we can get the error information as well
  // console.log(err);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{status + statusText}</h2>
    </div>
  );
};

export default Error;
