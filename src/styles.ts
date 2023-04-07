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