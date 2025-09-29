import React from "react";
import Notification from "./Notificaltion";

const reservedNotifications = [
    {
        id : 1,
        message: "Hello,"
    }, 
    {
        id: 2,
        message: "lunchTime"
    },
    {
        id: 3,
        message: "presentation time 10 min later"
    }
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const {notifications} = this.state;
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                const nextNotifications = [...this.state.notifications,
                    reservedNotifications[index],
                ];
                this.setState({notifications: nextNotifications });

            }else{
                 clearInterval(this.timer);
            }

        }, 1000);

      //  setInterval(this.displaylog, 1000);
    }


    componentWillUnmount() {
        if (this.timer){
            clearInterval(this.timer);
        }
    }
        render() {
        return (
            <div>
                {this.state.notifications.map((notifications) =>{
                    return (
                        <Notification
                            key={notifications.id}
                            id = {notifications.id}
                            message = {notifications.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;