import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

export default function CreateEventHeader({ title }) {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        padding: 15,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center'
    }
  });