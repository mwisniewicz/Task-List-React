import './utils.js'
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('webpack started');

console.log(validator.isEmail('m.wisniewiczgmail.com'));

const template = <p>Tested JSX</p>;
ReactDOM.render(template,document.getElementById('app'));