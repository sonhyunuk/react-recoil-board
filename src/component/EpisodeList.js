import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const EpisodeList = ({ episodes }) => {
    useEffect(() => {
        console.log(episodes);
    }, [])

    return (
        <ul className="list_webtoon list_episode">
            {episodes.map((episode, index) => (
                <li key={index}>
                    <Link></Link>
                </li>
            ))}
        </ul>   
    )
}

export default EpisodeList;