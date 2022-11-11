import {
    TextInput,
    Text,
    View,
    StyleSheet,
    Touchable,
    TouchableOpacity,
    ScrollView,
    Button
  } from 'react-native';
import { Card, IconButton} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimeScreen from './TimeScreen';
import { events } from '../../Mocks/Events';
import { EventContext } from '../../Context/EventContext'
import { useContext } from 'react';

export default function CreateEventScreen({ navigation }) {

    return (
        // <TouchableOpacity onPress={() => navigation.navigate('Modal')}
        //     style={styles.touchableOpacity}>
            // <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    {/* <Divider />
                        <TouchableOpacity style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>Event Name</Text>
                            <Icon name="chevron-right" />
                        </TouchableOpacity>
                    <Divider /> */}
                    <TextInput
                        placeholder='Title'
                        placeholderTextColor='gray'
                        style={styles.titleInput}
                        keyboardType='default'
                        />
                    
                    {/* <TextInput
                        placeholder='Add location'
                        placeholderTextColor='gray'
                        style={styles.titleInput}
                        keyboardType='default'
                    /> */}

                    <TextInput
                        placeholder='Description'
                        placeholderTextColor='gray'
                        style={styles.titleInput}
                        keyboardType='default'
                        multiline
                        numberOfLines={5}
                    />

                    <TouchableOpacity
                        style={styles.descriptionButton}
                        onPress={() => {navigation.navigate('Location')}} 
                        >
                        <Text style={styles.descriptionText}
                        >Location</Text>
                    </TouchableOpacity>

                    <TimeScreen />

                    <Card elevation={0} onPress={() => {navigation.navigate('Add tags')}}>
                        <Card.Title
                        title="Add tags"
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right"/>} />
                    </Card>

                    <Card elevation={0} onPress={() => {navigation.navigate('Event image')}}>
                        <Card.Title
                        title="Add image..."
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" />} />
                    </Card>
                    
                    {/* <TouchableOpacity
                        style={styles.descriptionButton}
                        onPress={() => {}} 
                        >
                        <Text style={styles.descriptionText}
                        onPress={() => {navigation.navigate('Event description')}}
                        >Description</Text>
                    </TouchableOpacity> */}

                   {/* <Card elevation={0}>
                        <Card.Title
                        title='Add event name'
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {navigation.navigate('Event name')}} />} />
                    </Card> */}

                    {/* <Card elevation={0}>
                        <Card.Title
                        title='Add description'
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {navigation.navigate('Event description')}} />} />
                    </Card> */}

                    {/* <Card elevation={0}>
                        <Card.Title
                        title='Add location'
                        titleVariant='titleLarge'
                        right={() => <IconButton icon="chevron-right" onPress={() => {navigation.navigate('Event location')}} />} />
                    </Card> */}
                
                </ScrollView>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    scrollView: {},
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
      },
      titleInput: {
        padding: 20,
        fontSize: 25
      },
      descriptionButton: {
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        padding: 20
      },
      descriptionText: {
        fontSize: 25,
        color: 'gray'
      }
  });