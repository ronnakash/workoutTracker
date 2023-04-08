import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  export const workoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      workoutContainer: {
        width: '30%',
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
      },
      author: {
        fontStyle: 'italic',
        marginBottom: 10,
      },
      exerciseContainer: {
        marginBottom: 10,
      },
      exerciseName: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      setContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      setText: {
        marginRight: 10,
      },
    
  })

export const loginFormStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    row: {
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 10,
    }
  });
  