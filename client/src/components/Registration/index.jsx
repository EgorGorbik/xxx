import React, {Component} from 'react';
import {ErrorMessage, Formik} from 'formik';
import * as Yup from 'yup';
import Error from '../Error/index';
import './index.css';
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router";
import Spinner from "../Spinner";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(8, "Должен быть короче 8")
        .required('Данное поле должно быть заполнено'),
    password: Yup.string()
        .min(6, "Пароль должен содержать минимум 6 символов")
        .max(32, "Пароль должен содержать максимум 32 символа")
        .required('Данное поле должно быть заполнено')
})

class Registration extends Component {
    componentWillMount() {
    }

    render() {
        if(this.props.user.data) {
            return <Redirect to='/chat'/>
        }

        if(this.props.loader) {
            return <Spinner/>
        }

        return(
            <Formik
                initialValues={{ name: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    this.props.registrationUser({name: values.name, password: values.password})
                }}

            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                    <form onSubmit={handleSubmit} className='form'>
                        <div className='form_header'>Регистрация</div>

                        <div className='input-row'>
                            <label htmlFor='name'>Имя</label>
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
                            {this.props.user.errorName && <Error touched={true} message={this.props.user.errorName}/>}
                            <Error touched={touched.name} message={this.props.user.error || errors.name}/>
                        </div>

                        <div className='input-row'>
                            <label htmlFor='password'>Пароль</label>
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
                            {this.props.user.errorPassword && <Error touched={true} message={this.props.user.errorPassword}/>}
                            <Error touched={touched.password} message={errors.password}/>
                        </div>

                        <div className='input-row'>
                            <button className='btn_submit' type='submit' disabled={isSubmitting}>Зарегистрироваться</button>
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
    registrationUser: (user) => {dispatch({type: "REGISTRATION_USER", user})}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
