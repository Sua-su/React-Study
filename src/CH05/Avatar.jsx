function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.author} />
            <div className="user-info-name">{props.author.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo author={props.author} />
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{props.date}</div>
        </div>
    );
}