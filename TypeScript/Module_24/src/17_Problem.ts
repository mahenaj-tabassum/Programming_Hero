// ===============================================
//      Notification Center Renderer
// ===============================================

type LikeNotify = {
  type: "like";
  fromUser: string;
};
type SystemNotify = {
  type: "system";
  message: string;
  actionUrl?: string;
};
type Notification = LikeNotify | SystemNotify;

function renderNotification(notification: Notification): string {
  if (notification.type === "system") {
    let showMessage = notification.actionUrl
      ? `System: ${notification.message} (Tap to view)`
      : `System: ${notification.message}`;
    return showMessage;
  }

  return `${notification.fromUser} liked your post.`;
}

console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
// "Aisha liked your post."
console.log(
  renderNotification({ type: "system", message: "Maintenance complete." }),
);
// "System: Maintenance complete."

console.log(
  renderNotification({
    type: "system",
    message: "Your subscription is expiring soon.",
    actionUrl: "/billing",
  }),
);
// "System: Your subscription is expiring soon. (Tap to view)"
