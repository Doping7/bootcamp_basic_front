const NoticeColumn = () => {

    const columns = [
        { field: 'id', headerName: 'No', width: 50 },
        { field: 'title', headerName: 'Title', flex: 1},
        { field: 'user', headerName: 'User' ,width: 150},
    ];

    return columns
}
export default NoticeColumn