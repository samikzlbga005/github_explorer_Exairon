import Link from "next/link";
import {useRef, useState} from "react";
import parse from "parse-link-header";

export default function UserLister({results})
{

    const [currentResults, setCurrentResults] = useState(results);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
     async function getNext(since){
         setLoading(true);
        const result = await fetch(`./api/getUsers?since=${since}`,);
        const res = await result.json();
        res.results.prev= currentResults;
        setCurrentResults(res.results);
        setCurrentPage(currentPage+1);
        setLoading(false);
    }

    return (
        <div>
            <h1>Users</h1>
            {currentResults.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <img src={user.avatar_url} alt={user.login} width={25} height={25} style={{marginRight:5}} />
                            <a style={{fontSize: 20, marginRight: 10}}  href={`/user/${user.login}`}>{user.login}</a>
                            <a style={{fontSize: 20}} href={user.html_url}>go to github</a>
                        </div>)
                }
            )
            }

            {
                currentResults.prev && (
                    <button onClick={loading?null:() => {
                        setCurrentResults(currentResults.prev);
                        setCurrentPage(currentPage-1);
                    }}>Previous</button>
                )
            }

            <p >Page: {currentPage+1}</p>

            {
                parse(currentResults.link).next && (
                    <button onClick={loading?null: () => {
                        const since = parse(currentResults.link).next.since;
                        getNext(since);

                    }}>Next</button>
                )

            }


        </div>

    )
}