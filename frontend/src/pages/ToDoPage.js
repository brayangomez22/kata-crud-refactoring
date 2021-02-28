import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StoreProvider from '../components/StoreProvider';
import TittleTodo from '../components/TittleTodo';
import {Store} from '../context/context';

function ToDoPage() {
    return <StoreProvider>
        <TittleTodo/>
        <Form params={Store} />
        <List params={Store} />
    </StoreProvider>
}

export default ToDoPage;