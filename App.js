import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

// Constants for testing
const FOCUS_TIME = 5 * 60;
const BREAK_TIME = 1 * 60;

export default function App() {
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(true);

  useEffect(() => {
    let timer = null;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      handleSwitch();
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleSwitch = () => {
    const nextMode = !isFocus;
    setIsFocus(nextMode);
    setTimeLeft(nextMode ? FOCUS_TIME : BREAK_TIME);
    setIsActive(false);
    Alert.alert("Timer Done!", `Switching to ${nextMode ? 'Focus' : 'Break'} mode.`);
    Notifications.scheduleNotificationAsync({
      content: { title: "Timer Done!", body: `Time for a ${nextMode ? 'Focus' : 'Break'}!` },
      trigger: null,
    });
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <View style={[styles.container, { backgroundColor: isFocus ? '#f87171' : '#4ade80' }]}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.modeText}>{isFocus ? "Focus Time" : "Break Time"}</Text>
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setIsActive(!isActive)}>
          <Text style={styles.buttonText}>{isActive ? "Pause" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { setIsActive(false); setTimeLeft(isFocus ? FOCUS_TIME : BREAK_TIME); }}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modeText: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
  },
  timer: {
    fontSize: 72,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
});
