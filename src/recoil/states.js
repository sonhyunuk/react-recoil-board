import { atom, selector } from 'recoil';

export const boardListState = atom({
    key: 'boardList',
    default: ''
});

export const boardListFilterState = atom({
    key: 'boardListFilterState',
    default: {
        boardFilter : ''
    }
});


export const filterBoardListState = selector({
    key: 'filterBoardListState',

    get: ({ get }) => {
        const boardList = get(boardListState);
        const filter = get(boardListFilterState);

        if (filter.boardFilter === '') {
            console.log(boardList);
            return boardList;
        } else {
            return boardList.filter((item) => item.title.toLowerCase().includes(filter.boardFilter));
        }
    }
})

