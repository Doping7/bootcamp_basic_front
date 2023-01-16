import moment from "moment";

const BoardRows = (boardData) => {

    const rows= [];

    boardData.map((item, itemIdx) => {
        let row = {
            id: itemIdx + 1,
            dataId: item.id,
            title: item.title,
            user: item.user.userName,
            createDate: item.createDate,
            viewCount: item.viewCount
        };
        rows.push(row)
    })

    return rows
}
export default BoardRows