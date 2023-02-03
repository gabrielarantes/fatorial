import React, {useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Colors from '../utils/colors';
import {calcFactorial} from '../utils/functions';

import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';

import * as ManageNumberActions from '../store/actions/manageNumbers';

type Props = {
  number: number;
  increment: any;
  decrement: any;
};

const MainComponent = ({number, increment, decrement}: Props) => {
  const dispatch = useDispatch();
  const result = useMemo(() => calcFactorial(number), [number]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxRow}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(decrement(number))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Text style={styles.numberText}>{number}</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(increment(number))}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxResult}>
        <Text style={styles.textResult}>
          {number}! is equal {result}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    justifyContent: 'center',
    padding: 10,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    flex: 0.3,

    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 120,
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderRadius: 90,
    borderColor: Colors.white,
  },
  buttonText: {
    fontSize: 80,
    color: Colors.white,
    alignSelf: 'center',
  },
  numberText: {
    fontSize: 50,
    color: Colors.white,
    alignSelf: 'center',
  },
  boxResult: {
    paddingTop: 20,
    justifyContent: 'center',
  },
  textResult: {
    marginTop: 25,
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  number: state.manageNumber.number,
});

const mapDispatchToProps = dispatch => ({
  increment: (number: number) =>
    dispatch(ManageNumberActions.incrementNumber(number)),
  decrement: (number: number) =>
    dispatch(ManageNumberActions.decrementNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
