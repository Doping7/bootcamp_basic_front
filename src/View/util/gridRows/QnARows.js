import moment from "moment";

const QnARows = (qnaData) => {

    const rows= [];

    qnaData.map((item, itemIdx) => {
        let row = {
            id: itemIdx + 1,
            question: item.question,
            quesUser: item.quesUser.userName,
            regDate: item.regDate,
            answered: item.answer ? 'O': 'X',
        };
        rows.push(row)
    })

    return rows
}
export default QnARows