const HELLONEXT_APP = '@@hellonext/';

export const HELLO = HELLONEXT_APP + 'HELLO';
export const hello = (name) => (
    {
        type: HELLO,
        name
    }
);