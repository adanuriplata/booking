import { Formik } from 'formik';
import { Button } from './Button';
import * as Yup from 'yup';

const LoginForm = (): JSX.Element => {
  const initialValues = {
    user: '',
    password: '',
  };

  const makeLogin = (val: { user: string; password: string }): void => {
    console.log(val);
  };

  const validationLogin = Yup.object({
    user: Yup.string().max(15).required('*Requerido'),
    password: Yup.string().max(15).required('*Requerido'),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          makeLogin(values);
        }}
        validationSchema={validationLogin}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                User:
                <input
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="user"
                  value={values.user}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.user != null && (touched.user ?? false) && (
                  <span className=" text-red-500 text-xs ">{errors.user}</span>
                )}
              </label>
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
                <input
                  className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password != null && (touched.password ?? false) && (
                  <span className=" text-red-500 text-xs ">
                    {errors.password}
                  </span>
                )}
              </label>
            </div>
            <div>
              <Button
                disabled={isSubmitting}
                text={'Continuar'}
                type={'submit'}
              ></Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
