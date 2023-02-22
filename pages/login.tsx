import LoginForm from '@/components/LoginForm';

const Login = (): JSX.Element => {
  return (
    <div className=" w-full text-xs container mx-auto">
      <div className="flex flex-wrap justify-center items-center h-screen ">
        <div className=" w-full">
          <div>
            <h2 className="text-center text-2xl ">Inicio de Sesion</h2>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto ">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
