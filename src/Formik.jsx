import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';



const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

const Formix = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
          console.log(values);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && errors.email}<br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Formix