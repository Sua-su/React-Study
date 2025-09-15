import Comment from "./Comment";

const comments = [
    { name: "Sua", comment: "test 1" },
    { name: "Suya", comment: "test 2" },
    { name: "test", comment: "test3" },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((c) => {
            return <Comment name={comments.name} comment={c.comment} />;
            })}

        </div>
    );
}

export default CommentList;