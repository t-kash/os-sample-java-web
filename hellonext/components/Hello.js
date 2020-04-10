import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { hello } from "../actions/hello-action";

const useName = () => {
    const name = useSelector(state => state.helloReducer.name);
    return { name };
};

let Hello = ({ dispatch }) => {
    let inputNode;

    const { name } = useName();
    return (
        <div>
            <h1>Hello {name}!</h1>
            <input
                ref={(node) => {
                    inputNode = node;
                }}
                onChange={() => {
                    dispatch(hello(inputNode.value))
                }} />
        </div>
    );
};

Hello = connect()(Hello);

export default Hello;