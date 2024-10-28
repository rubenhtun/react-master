import { ReactNode, createContext, useContext, useState } from "react";

interface NotiProps {
  children: ReactNode;
}

interface Notification {
  id: number;
  message: string;
}

interface NotificationFeatures {
  notificationList: Notification[];
  addNotification: (message: string) => void;
  removeNotification: (id: number) => void;
  deleteAllNotifications: () => void;
}

const NotificationContext = createContext<NotificationFeatures | undefined>(
  undefined
);

export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("an error occurred!");
  }
  return context;
}

export default function NotificationContextProvider({ children }: NotiProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string) => {
    setNotifications((prevNoti) => [...prevNoti, { id: Date.now(), message }]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNoti) => prevNoti.filter((noti) => noti.id !== id));
  };

  const deleteAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationList: notifications,
        addNotification,
        removeNotification,
        deleteAllNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
