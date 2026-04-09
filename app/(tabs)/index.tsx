import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const COLORS = [
  '#E6F1FB', '#EAF3DE', '#E1F5EE',
  '#FAEEDA', '#FBEAF0', '#EEEDFE',
  '#FAECE7', '#F1EFE8', '#FCEBEB',
];

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [bgColor, setBgColor] = useState('#F2F2F7');

  const handleMinus = () => {
    if (count > 0) setCount(count - 1);
  };

  const handlePlus = () => setCount(count + 1);

  const handleColorToggle = () => {
    const available = COLORS.filter(c => c !== bgColor);
    const random = available[Math.floor(Math.random() * available.length)];
    setBgColor(random);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.headerWrapper}>
        <Text style={styles.appTitle}>The Magic Dashboard</Text>
        <Text style={styles.appSubtitle}>State & Props Interactive App</Text>
      </View>

      {/* ── Main Quest 1: Counter System ── */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Counter</Text>

        <View style={styles.counterRow}>
          <TouchableOpacity
            style={[styles.circleBtn, styles.minusBtn, count === 0 && styles.btnDisabled]}
            onPress={handleMinus}
            disabled={count === 0}
            activeOpacity={0.7}
          >
            <Text style={styles.circleBtnText}>−</Text>
          </TouchableOpacity>

          <Text style={[styles.counterNum, count === 0 && styles.counterNumZero]}>
            {count}
          </Text>

          <TouchableOpacity
            style={[styles.circleBtn, styles.plusBtn]}
            onPress={handlePlus}
            activeOpacity={0.7}
          >
            <Text style={styles.circleBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        {count === 0 && (
          <Text style={styles.hint}>Angka tidak bisa kurang dari 0</Text>
        )}
      </View>

      {/* ── Main Quest 2: Greeting Form ── */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Form</Text>

        <TextInput
          style={styles.input}
          placeholder="Ketik namamu di sini..."
          placeholderTextColor="#AEAEB2"
          value={name}
          onChangeText={setName}
          maxLength={30}
          autoCorrect={false}
        />

        <View style={styles.greetingBox}>
          <Text style={styles.greetingText}>
            Halo, <Text style={styles.greetingName}>{name.trim() || 'Bro'}</Text>!
          </Text>
        </View>
      </View>

      {/* ── Side Quest: Toggle Color ── */}
      <View style={styles.card}>
        <Text style={styles.sectionLabel}>Toggle Color</Text>

        <View style={styles.colorPreviewRow}>
          <View style={[styles.colorDot, { backgroundColor: bgColor }]} />
          <Text style={styles.colorHex}>{bgColor}</Text>
        </View>

        <TouchableOpacity
          style={styles.colorBtn}
          onPress={handleColorToggle}
          activeOpacity={0.75}
        >
          <Text style={styles.colorBtnText}>Ganti Warna Background</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 14,
  },
  headerWrapper: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 2,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  appSubtitle: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 2,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.7,
    color: '#8E8E93',
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  circleBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  minusBtn: {
    backgroundColor: '#FFF0F0',
    borderColor: '#FFCDD2',
  },
  plusBtn: {
    backgroundColor: '#F0FFF4',
    borderColor: '#B9F6CA',
  },
  btnDisabled: {
    opacity: 0.35,
  },
  circleBtnText: {
    fontSize: 26,
    color: '#1C1C1E',
    lineHeight: 30,
  },
  counterNum: {
    fontSize: 56,
    fontWeight: '500',
    color: '#1C1C1E',
    minWidth: 80,
    textAlign: 'center',
  },
  counterNumZero: {
    color: '#AEAEB2',
  },
  hint: {
    textAlign: 'center',
    fontSize: 12,
    color: '#AEAEB2',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1C1C1E',
    backgroundColor: '#F9F9FB',
    marginBottom: 14,
  },
  greetingBox: {
    minHeight: 36,
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  greetingName: {
    color: '#185FA5',
    fontWeight: '600',
  },
  colorPreviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  colorDot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#D1D1D6',
  },
  colorHex: {
    fontSize: 13,
    color: '#8E8E93',
    fontFamily: 'monospace',
  },
  colorBtn: {
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
  },
  colorBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});