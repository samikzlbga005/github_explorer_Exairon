import {getUsersFromGithub} from "@component/utils/apiHelper";

export default async function handler(req, res) {
    if(req.query.since===undefined)
    {
        const results= await getUsersFromGithub(0);
        res.status(200).json({ results: results })
    }
    else
    {
        const results= await getUsersFromGithub(req.query.since);
        res.status(200).json({ results: results })
    }
}
