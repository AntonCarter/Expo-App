import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store';
import { Stack } from "expo-router";

export default function Layout() {
  return (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Stack initialRouteName>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>
      </Stack>
    </PersistGate>
  </Provider>
  );}