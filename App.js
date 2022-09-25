import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(3547, 'jq1TCuBgPaFDGDSmZbBqmD');

  const sendNotification = () => {
    try {
      axios.post(`https://app.nativenotify.com/api/notification`, {
        appId: 3547,
        appToken: "jq1TCuBgPaFDGDSmZbBqmD",
        title: "New Message",
        body: "Come through API NativeNotify",
        dateSent: new Date(),
        // dateSent: "8-17-2022 9:02PM",
        pushData: { yourProperty: "yourPropertyValue" }
      });
    } catch (error) {
      alert("An error has occurred");
    }
  }

  return (
    <View style={styles.container}>
        <Button title='Send Notification' onPress={sendNotification} />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
