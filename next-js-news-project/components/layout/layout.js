import { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

function Layout(props) {
  const notiCtx = useContext(NotificationContext);
  const activeNoti = notiCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNoti && <Notification title={activeNoti.title} message={activeNoti.message} status={activeNoti.status} />}
    </Fragment>
  );
}

export default Layout;
