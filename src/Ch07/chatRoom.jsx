import { useState } from "react";

function ChatRoom(props) {
    return <h1>Welcome to {props.roomId} room! </h1>
}

export function ChatRoomContainer(props) {
    const [roomId, setRoomId] = useState("general");
    return (
        <div>
            <label>방 선택: </label>
            <select value={roomId} onChange={(e) => {setRoomId(e.target.value)}}>
                <option value="general">General</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
            <ChatRoom roomId={roomId} />
        </div>
    );
}