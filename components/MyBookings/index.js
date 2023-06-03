import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Text } from 'react-native'

export const MyBookings = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Hello Bookings People</Text>
        </SafeAreaView>
    );
}