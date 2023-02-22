import { Button } from '@/components/Button';
import { useState } from 'react';

const Login = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);

  const submitLogin = (): void => {
    if (credentials.password.length < 1 || credentials.user.length < 1) {
      setIsError(true);
    }
    console.log(credentials.password, credentials.user);
  };

  return (
    <div className=" w-full text-xs container mx-auto">
      <div className="flex flex-wrap justify-center items-center h-screen ">
        <div className=" w-full">
          <div>
            <h2 className="text-center text-2xl ">Inicio de Sesion</h2>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto ">
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                User:
                <input
                  className={`${
                    isError ? 'border-red-500 ' : ''
                  }shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  onChange={(e) => {
                    setCredentials({ ...credentials, user: e.target.value });
                  }}
                  type="text"
                />
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
                <input
                  className={`${
                    isError ? 'border-red-500 ' : ''
                  }shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                />
              </label>
            </div>
            <div>
              <Button cbClick={submitLogin} text={'Continuar'}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
