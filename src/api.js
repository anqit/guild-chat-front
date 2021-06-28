const endpoint = process.env.API_ENDPOINT

const createUser = async (name) => {
    try {
        const body = JSON.stringify({name})
        const resp = await fetch(`http://${endpoint}/users`, {
            method: 'PUT',
            body,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await resp.json()
        return json
    } catch(e) {
        console.log(e);
        return {}
    }
}

export default {
    createUser
}
