import { StyleSheet } from "react-native";
import { Redirect, SplashScreen } from "expo-router";
import React, { useEffect } from "react";
// import { onAuthStateChanged } from 'firebase/auth';
// import { getFirebaseAuth } from "../services/authService";

let unsubscribeUserAuthStateChangedListener = null;

export default function App() {

  const READY_AUTHENTICATED = { loading: false, route: "(tabs)/my-bookings" };
  const READY_UNAUTHENTICATED = { loading: false, route: "(tabs)/training-sessions" };
  const LOADING = { loading: true, route: '(tabs)/training-sessions' };

  const [isReady, setReady] = React.useState(LOADING);

  const MyApp = (props) => {
    console.info('App is ready', isReady)
    return <Redirect href={isReady.route} />
  }    
  
  const ready = () => { setReady(READY_UNAUTHENTICATED)}
  useEffect(() => {
    console.info('app state', isReady);
    const prepare = async () => {
      let that = this;
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 5000);
      });
      ready();
    }
    //   unsubscribeUserAuthStateChangedListener = onAuthStateChanged(getFirebaseAuth(), (user) => {

    //     if (user) {
    //       console.info('app authenticated');
    //       setReady(READY_AUTHENTICATED)
    //     }
    //     else {
    //       console.info('app unauthenticated');
    //       setReady(READY_UNAUTHENTICATED)
    //     }
    //   });
    // };

    prepare();

  }, []);

  return (
    <>
      {isReady.loading && <SplashScreen />}
      {!isReady.loading && <MyApp />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "green"
  }
});