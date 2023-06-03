import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
    return (

        <Tabs>
            <Tabs.Screen name="training-sessions" options={{ title:'Training Sessions',  tabBarIcon: planIcon }} />
            <Tabs.Screen name="my-bookings" options={{title:'My Bookings', tabBarIcon: socialIcon }}/>
        </Tabs>
    );
}

function planIcon(tab) {
    return <Ionicons name="book-outline" size={32} color={tabColor(tab)} />
}

function recordIcon(tab) {
    return <Ionicons name="recording-outline" size={32} color={tabColor(tab)} />
}

function socialIcon(tab) {
    return <Ionicons name="share-social-outline" size={32} color={tabColor(tab)} />
}

function settingsIcon(tab) {
    return <Ionicons name="cog-outline" size={32} color={tabColor(tab)} />
}

function tabColor(tab){
    return tab.focused ? "#df4723" : "#404040"
}

