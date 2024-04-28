import { Card } from "react-native-paper"
import { View , StyleSheet} from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker'
export default function DateTimeCard ({ title, date, onChange }) {
    return (
        <Card elevation={0}>
                <Card.Title
                title={title}
                
                right={() =>
                 <View style={styles.view}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        onChange={onChange}
                        // style={{width: 320, backgroundColor: "white"}}
                        />
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'time'}
                        is24Hour={true}
                        onChange={onChange}
                        // style={{width: 320, backgroundColor: "white"}}
                        />
                </View>}
                />
            </Card>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        paddingRight: 10
    }
})