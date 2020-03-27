const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/p/:id', (request, response) => {
        const actualPage = '/post';
        const queryParams = { title: request.params.id };
        app.render(request, response, actualPage, queryParams);
    });

    server.get('*', (request, response) => {
        return handle(request, response);
    });

    server.listen(3000, (error) => {
        if (error) {
            throw error;
        }
        console.log('> Ready on http://localhost:3000');
    });
}).catch((exception) => {
    console.error(exception.stack);
    process.exit(1)
});