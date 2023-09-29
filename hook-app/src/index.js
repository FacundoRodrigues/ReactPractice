import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { MultiplesCustomHooks } from './components/03-examples/MultiplesCustomHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MultiplesCustomHooks />
);