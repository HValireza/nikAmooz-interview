import { useFormik } from 'formik';
import { User } from '../model/user';

interface loginError{
    username?:string;
    email?:string;
}

const validate = (values: User) => {
    const errors: loginError = {};
    if (!values.username) {
      errors.username = "Required!";
    }
    if (!values.email) {
      errors.email = "Required!";
    }
    return errors;
  };

const LoginForm = () => {
    const formik = useFormik<User>({
        initialValues:{
            username:"",
            email:""
        },
        validate,
        onSubmit:(values)=>{
          
        }
    })
    return(
        <form onSubmit={formik.handleSubmit} className="dr-login-form">
      <div>
        <div className="border-1 rounded-sm my-2 px-1">
          <input
            placeholder='user name'
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        {formik.errors.username ? (
          <div className="input-error">{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <div className="border-1 rounded-sm my-2 px-1">
          <input
            placeholder='email'
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email ? (
          <div className="input-error">{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Log in</button>
    </form>
    )
};

export default LoginForm;