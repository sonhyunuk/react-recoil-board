import React, { useEffect } from 'react';

const WebtoonInfo = ({ webtoon }) => {

    useEffect(() => {
        console.log(webtoon)
    }, [])
    return (
        <div className="warp_webtoon">
            <img src={webtoon.thumbnail} className="img_webtoon" alt={webtoon.title} />
            <div className="info_webtoon">
                <strong className="tit_webtoon">{webtoon.title}</strong>
                {webtoon.genre.map((g, index) => (
                    <span key={index} className="txt_genre">{g}</span>
                ))}
                <span className="num_score">평점 : {webtoon.score}</span>

            </div>
        </div>
    )

}
export default WebtoonInfo;