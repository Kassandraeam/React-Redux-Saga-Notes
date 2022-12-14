import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TemplateFunction(props) {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');
        // TODO: STEP 12 - Now we want to be able to see the information we got from the Database on the DOM, which means rendering it on our DOM. 
        /* Where are we storing that information right now?
        ? Where are we storing that information currently? 
        * In the reducer we just made, which is in the store.
        */
        // TODO: STEP 13 - Access that reducer by using the useSelector.
    const reducer = useSelector((store) => store.reducerTemplate)
        // ! Note that the reducer name is appended to store, indicating that that's the storage we want to access.
    const dispatch = useDispatch();
    const history = useHistory();

    const [id, setID] = useState();
    useEffect(() => {
        dispatch({
        // TODO: STEP 1 - We want to render some information on the DOM that is in our databse using this component. Create a type that will trigger a Saga. Go to _template.saga.js.
            type: 'This_Should_Match_Between_The_Component_And_Saga',
        // For this particular example, you can disregard this payload. You want to send a payload of id typically when you're trying to get specific information.
            payload: id
        })
    }, [])


    return (
        <div>
            <h2>{heading}</h2>
        {/* // TODO: Step 14 - Now that we have that information, we can display it however we want. */ }
        {/* //* Pretend that our SQL query asked the database for a table that had the columns: id, username, and password. We would now be able to render that to the DOM by appending those column names to the const reducer. */}
        <p>{reducer.id}</p>
        <p>{reducer.username}</p>
        <p>{reducer.password}</p>
        </div>
    );
}

export default TemplateFunction;
