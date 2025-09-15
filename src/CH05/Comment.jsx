const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        flexDirection: "colum",
        border: "1px solid grey",
        borderRedius: 16,
    },
    imageContainer:{},
    image: {
        width:50,
        geight:50,
        borderRedius: 25,
    },
    contentContatiner:{
        marginLeft:8,
        display: "flex",
        flexDirection:"colum",
        justifyConent: "center",
    },
    nameText: {
        color: "black",
        fontSize:16,
        fontWeight:"bold",
    },
    CommentText:{
        color:"black",
        fontSize:16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    style={styles.image}
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Protrait_placeholder.png"
                    alt="프로필 사진"
                />
            </div>
            <div style={styles.contentContatiner}>
                <span style={styles.nameText}>Su</span>
                <span style={styles.CommentText}>제가 만든 첫 컴포턴트</span>
            </div>
        </div>
    );
}
export default Comment;