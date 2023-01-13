const NoticeRows = (noticeData) => {

    const rows= [];

    noticeData.map((item, itemIdx) => {
        let row = {
            id: itemIdx + 1,
            title: item.title,
            user: item.user.userName
        };
        rows.push(row)
    })

    return rows
}
export default NoticeRows