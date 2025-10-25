/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {RNTesterModuleExample} from '../../types/RNTesterTypes';

import RNTesterText from '../../components/RNTesterText';
import * as React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';

const {useState} = React;

function Playground() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Test out new features and ideas here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'column',
  },
});

export default ({
  title: 'Playground',
  name: 'playground',
  description: 'Test out new features and ideas.',
  render: (): React.Node => <Playground />,
}: RNTesterModuleExample);
