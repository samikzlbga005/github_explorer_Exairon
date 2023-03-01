

const API_KEY = process.env.GITHUB_API_KEY;
export async function getUsersFromGithub(since) {
    const request_users =  await fetch(`https://api.github.com/users?since=${since}&per_page=10`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization : 'Bearer ' + API_KEY,
        }
    })
    const users = await request_users.json();
    return {
        users: users,
        link: request_users.headers.get('link')
    };
}

export async function getUserFromGithub(username) {
    const request_user =  await fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization : 'Bearer ' + API_KEY,
        }
    })
    if(request_user.status===404)
    return null;
    return await request_user.json();
}