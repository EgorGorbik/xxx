import React, {Component} from 'react';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import Error from '../Error/index';
import './index.css';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Loader from "../Loader";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(8, "Должен быть короче 8")
        .required('Данное поле должно быть заполнено'),
    password: Yup.string()
        .min(6, "Пароль должен содержать минимум 6 символов")
        .max(32, "Пароль должен содержать максимум 32 символа")
        .required('Данное поле должно быть заполнено')
})

class Login extends Component {
    render() {
        if(this.props.loader) {
            return <Loader/>
        }
        console.log(this.props.loader)
        return(
            <Formik
                initialValues={{ name: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    this.props.loginUser({name: values.name, password: values.password})
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='form_header'>Log In</div>
                        {this.props.user.error && <div>{this.props.user.error}</div>}

                        <div className='input-row'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter your name...'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className={touched.name && errors.name ? 'has-error' : null}
                            />
                            <Error touched={touched.name} message={errors.name}/>
                        </div>

                        <div className='input-row'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='text'
                                name='password'
                                id='password'
                                placeholder='Enter your password...'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={touched.password && errors.password ? 'has-error' : null}
                            />
                            <Error touched={touched.password} message={errors.password}/>
                        </div>

                        <div className='input-row'>
                            <button className='btn_submit' type='submit' disabled={isSubmitting}>Submit</button>
                        </div>
                    </form>
                )}
            </Formik>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loader: state.loader
});

const mapDispatchToProps = (dispatch) =>  ({
    loginUser: (user) => {dispatch({type: "LOGIN_USER", user: user})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
