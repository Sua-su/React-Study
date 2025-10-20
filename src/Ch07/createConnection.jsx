export function createConnection(roomId) {
    return{
        connect() {
            console.log(`$(roomId) 연결 완료 `);
        },
        disconnect() {
            console.log(`$(roomId) 연결 해제 `);

        }

        }
}