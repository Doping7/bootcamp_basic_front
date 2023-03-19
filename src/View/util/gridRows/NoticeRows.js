const NoticeRows = (noticeData) => {

    const rows= [];

    noticeData.forEach((item, itemIdx) => {
        let row = {
            id: itemIdx + 1,
            dataId: item.id,
            title: item.title,
            user: item.user.userId
        };
        rows.push(row)
    })

    return rows
}
export default NoticeRows