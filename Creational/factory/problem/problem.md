# Problems with This Approach:

- **Tight Coupling**: The client code (sendNotification function) is tightly coupled with specific classes like
  EmailNotification, SMSNotification, and PushNotification. If you add a new channel, you need to modify the client
  code.
- **Scalability**: If you want to add a new channel, you need to modify the client code. This is not scalable.
- **Lack of Abstraction**: The client code is aware of the concrete classes like EmailNotification, SMSNotification, and
  PushNotification. It should be abstracted from the concrete classes.
