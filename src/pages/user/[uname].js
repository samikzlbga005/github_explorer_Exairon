import {useRouter} from "next/router";
import {getUserFromGithub, getUsersFromGithub} from "@component/utils/apiHelper";

export default function UserDetail(props)
{
    const router = useRouter();
    const {uname} = router.query;

    if(props.result===null)
    {
        return (
            <div>
                <h1>User Detail</h1>
                <p>Not Found</p>
            </div>
        )
    }

    console.log(props.result)

    return (
        <div>
            <h1>User Detail</h1>
            <img src={props.result.avatar_url} alt={props.result.name} />
            {props.result.login && <p>Username: {props.result.login}</p>}
            {props.result.name && <p>Name: {props.result.name}</p>}
            {props.result.bio && <p>Bio: {props.result.bio}</p>}
            {props.result.location && <p>Location: {props.result.location}</p>}
            {props.result.company && <p>Company: {props.result.company}</p>}
            {props.result.blog && <p>Blog: {props.result.blog}</p>}
            {props.result.email && <p>Email: {props.result.email}</p>}
            {props.result.twitter_username && <p>Twitter: {props.result.twitter_username}</p>}
            {props.result.followers && <p>Followers: {props.result.followers}</p>}
            {props.result.following && <p>Following: {props.result.following}</p>}
            {props.result.created_at && <p>Created At: {props.result.created_at}</p>}
            {props.result.updated_at && <p>Updated At: {props.result.updated_at}</p>}




        </div>
    )
}

export async function getServerSideProps(params) {
    const result= await getUserFromGithub(params.query.uname);
    return {
        props: {
            result
        },
    }
}