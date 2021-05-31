import React from 'react';
import { useRecoilState } from 'recoil';
import { boardListFilterState } from '../recoil/states';

const BoardFilter = () => {
    const [filter, setFilter] = useRecoilState(boardListFilterState);

    const updateFilter =(e) =>{
        const {name, value} = e.target;
        setFilter({[name] : value});
    }

    return (
        <>
            검색: <input type="text" name="boardFilter"  onChange={updateFilter} />
        </>
    )
}

export default BoardFilter;