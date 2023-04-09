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
      newWorkoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      newWorkoutButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
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
  
  export const workoutFormStyles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    },
    label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    },
    button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    },
    buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    },
    submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    },
    submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    },
    setColumn: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    padding: 10,
    },
    setInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
    },
    setGrid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    },
    exerciseInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    },
    exerciseHeader: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    },
    setLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    },
    setLabelSmall: {
      fontWeight: '600',
      textAlign: 'center',
      margin: 10,
    },
    exerciseButtonText: {
      color: 'blue',
      fontSize: 16,
      fontWeight: 'bold',
    },
    setButtonText: {
      color: 'blue',
      fontSize: 14,
      fontWeight: 'bold',
    },
    exerciseButton: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'blue',
      padding: 5,
      borderRadius: 5,
      marginTop: 20,
      textAlign: 'center',

    },
    setContainer: {
      backgroundColor: '#F5F5F5',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    exerciseContainer: {
      backgroundColor: '#EEEEEE',
      padding: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    setButton: {
      backgroundColor: 'grey',
      padding: 5,
      borderRadius: 5,
      marginLeft: 5,
      textAlign: 'center',
    },
    });    