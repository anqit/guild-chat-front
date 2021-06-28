const endpoint = process.env.API_ENDPOINT

const createUser = (name) => fetch(`http://${endpoint}/users`, {
        method: 'PUT',
        body: JSON.stringify({ name }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(r => r.json)

export default {
    createUser
}
