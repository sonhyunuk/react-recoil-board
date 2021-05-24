import React, { useEffect, useState } from 'react';
import Header from '../component/Header'
import Gnb from '../component/Gnb'
import Footer from '../component/Footer'
import axios from 'axios';
import WebtoonList from '../component/WebtoonList';

const Main = (props) => {
    const [webtoonList, setWebtoonList] = useState([]);
    const [dday, setDday] = useState('mon');

    useEffect(() => {
        axios.get('dummy/webtoon_list.json')
            .then(res => setWebtoonList(res.data.webtoonList))
            .catch(error => console.log(error))
            console.log(props);

    }, []);
    return (
        <div>
            <Header />
            <Gnb />
            <WebtoonList list={webtoonList.filter(webtoon => (
                dday === webtoon.day
            ))
            } />
            <Footer />
        </div>
    );
}
export default Main;