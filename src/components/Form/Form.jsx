import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import PropTypes from 'prop-types';

class Form extends Component {
  state = { name: '', number: '' };

  nameInputId = nanoid();
  numberInputid = nanoid();

  hendleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };
}
