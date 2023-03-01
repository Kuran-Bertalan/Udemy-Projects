import NotificationContext from '@/store/notification-context';
import { Fragment, useContext } from 'react';
import Notification from '../ui/notification';
import MainHeader from './main-header';

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
    </Fragment>
  );
}
