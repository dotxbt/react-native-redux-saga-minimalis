import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { countDecrementAction, countIncrementAction } from '../redux/actions/countAction';

const Counter = () => {
    const count = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    const incValue = () => {
        dispatch(countIncrementAction({
            value: 1
        }));
    };

    const decValue = () => {
        dispatch(countDecrementAction({
            value: 1
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.counterTitle}>Counter</Text>
            <View style={styles.counterContainer}>
            <TouchableOpacity onPress={decValue}>
                    <View style={{
                        backgroundColor: "#0055FF",
                        borderRadius: 10
                    }}>
                        <Text style={styles.buttonText}>-</Text>
                    </View>
                </TouchableOpacity>
                <View style={{
                    marginLeft: 40,
                    marginRight: 40,
                }}>
                    <Text style={styles.counterText}>{count}</Text>
                </View>
                <TouchableOpacity onPress={incValue}>
                    <View style={{
                        backgroundColor: "#0055FF",
                        borderRadius: 10
                    }}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterTitle: {
        fontFamily: 'System',
        fontSize: 46,
        fontWeight: '700',
        color: '#000',
        padding: 20,
        margin: 20,

    },
    counterText: {
        fontFamily: 'System',
        fontSize:46,
        fontWeight: 'bold',
        color: '#000',
    },
    buttonText: {
        fontFamily: 'System',
        fontSize: 50,
        fontWeight: '300',
        color: '#FFFFFF',
        marginLeft: 40,
        marginRight: 40,
    },
});

export default Counter;