

export default function DateTime() {
    return (
        <View>
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
        </View>
    )
}