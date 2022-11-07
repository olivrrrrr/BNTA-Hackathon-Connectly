import {
    Text,
    View,
    StyleSheet,
    Touchable,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
import { Card, Title, Divider, IconButton} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateEventHeader({ navigation }) {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Modal')}
            style={styles.touchableOpacity}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.headerTitle}>Create Event</Text>

                    {/* <Divider />
                        <TouchableOpacity style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>Event Name</Text>
                            <Icon name="chevron-right" />
                        </TouchableOpacity>
                    <Divider /> */}
                    <Card>
                        <Card.Title
                        title='Event name'
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {navigation.navigate('EventNameScreen')}} />} />
                    </Card>

                    <Card>
                        <Card.Title
                        title='Description'
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {}} />} />
                    </Card>

                    <Card>
                        <Card.Title
                        title='Location'
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {}} />} />
                    </Card>

                    <Card>
                        <Card.Title
                        title="Time"
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {}} />} />
                    </Card>

                    <Card>
                        <Card.Title
                        title="Tags"
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {}} />} />
                    </Card>

                    <Card>
                        <Card.Title
                        title="Image"
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {}} />} />
                    </Card>
                
                </ScrollView>
            </SafeAreaView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    scrollView: {},
    headerContainer: {
        height: 60,
        padding: 15,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center'
    },
    buttonWrapper: {
        paddingLeft: 8,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      buttonText: {
        fontSize: 20
      }
  });