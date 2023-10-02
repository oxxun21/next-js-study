import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export default NotificationContext;

export function NotificationContextProvider(props) {
  const [activeNoti, setActiveNoti] = useState();

  useEffect(() => {
    if (activeNoti && (activeNoti.status === "success" || activeNoti.status === "error")) {
      const timer = setTimeout(() => {
        setActiveNoti(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNoti]);

  function showNotiHandler(notificationData) {
    setActiveNoti(notificationData);
  }

  function hideNotiHandler() {
    setActiveNoti(null);
  }

  const context = { notification: activeNoti, showNotification: showNotiHandler, hideNotification: hideNotiHandler };

  return <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>;
}
