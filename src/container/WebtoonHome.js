import React, { useEffect, useState } from 'react';
import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonInfo from '../component/WebtoonInfo';
import EpisodeList from '../component/EpisodeList';
import axios from 'axios';


const WebtoonHome = ({ match: { params: { webtoonId } } }) => {

    const [id, setId] = useState(parseInt(webtoonId));
    const [webtoon, setWebtoon] = useState();
    const [episodeList, setEpisodeList] = useState([]);

    useEffect(() => {
        _getWebtoon();
        _getEpisodeList();
    }, [])

    useEffect(() => {
        console.log(episodeList)
    }, [episodeList])

    useEffect(() => {
        console.log(webtoon)
    }, [webtoon])



    const _getWebtoon = () => {
        fetch('/dummy/webtonn_detail.json')
            .then(res => res.json())
            .then(res => (
                setWebtoon(res.webtoons.find(content => (
                    content.id === id
                )))
            ))
    }

    const _getEpisodeList = () => {
        axios.get('/dummy/episode_list.json')
            .then(data => {
                setEpisodeList(data.data.webtoonEpisodes.filter(episode => (
                    episode.webtoonId === id
                )))
            })
    }

    return (
        <div>
            <Header />
            <Gnb />
            {webtoon ? (<WebtoonInfo webtoon={webtoon} />) : (<span>Loading...</span>)}
            {episodeList.length  > 0 ? (<EpisodeList episodes={episodeList} />) : (<span>Loading...</span>)}
            <Footer />
        </div>
    );
}
export default WebtoonHome;