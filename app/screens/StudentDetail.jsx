import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { COLORS } from '../constants/colors';
import { useStudents } from '../hooks/useStudents';

function InfoRow({ icon, value, onPress }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoLabelContainer}>
        {icon}
      </View>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.infoValue, styles.link]}>{value}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.infoValue}>{value}</Text>
      )}
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionAccent} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );
}

export default function StudentDetailScreen() {
  const { id } = useLocalSearchParams();
  const { students, loading } = useStudents();
  const navigation = useNavigation();
  const student = students.find((s) => String(s.id) === String(id));

useEffect(() => {
  if (student) navigation.setOptions({ title: 'Details' });
}, [student]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={COLORS.primary} />
        <Text style={styles.loadingText}>Loading details...</Text>
      </View>
    );
  }

  if (!student) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFound}>Student not found</Text>
      </View>
    );
  }

  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <Text style={styles.heroName}>{student.name}</Text>
          <Text style={styles.heroUsername}>@{student.username}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{student.company.name}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Section title="Contact Information">
            <InfoRow
              icon={<Feather name="mail" size={18} color={COLORS.secondary} />}
              value={student.email}
            />
            <InfoRow
              icon={<Feather name="phone" size={18} color={COLORS.secondary} />}
              value={student.phone}
            />
            <InfoRow
              icon={<Feather name="globe" size={18} color={COLORS.secondary} />}
              value={student.website}
            />
          </Section>

          <Section title="Address">
            <InfoRow
              icon={<Feather name="map-pin" size={18} color={COLORS.secondary} />}
              value={`${student.address.street}, ${student.address.suite}`}
            />
            <InfoRow
              icon={<MaterialIcons name="location-city" size={18} color={COLORS.secondary} />}
              value={student.address.city}
            />
            <InfoRow
              icon={<Feather name="hash" size={18} color={COLORS.secondary} />}
              value={student.address.zipcode}
            />
            <InfoRow
              icon={<Feather name="navigation" size={18} color={COLORS.secondary} />}
              value={`${student.address.geo.lat}, ${student.address.geo.lng}`}
            />
          </Section>

          <Section title="Company">
            <InfoRow
              icon={<FontAwesome5 name="building" size={16} color={COLORS.secondary} />}
              value={student.company.name}
            />
            <InfoRow
              icon={<Feather name="zap" size={18} color={COLORS.secondary} />}
              value={student.company.catchPhrase}
            />
            <InfoRow
              icon={<MaterialIcons name="bar-chart" size={18} color={COLORS.secondary} />}
              value={student.company.bs}
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
 
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: COLORS.background,

  },
  loadingText: {
    marginTop: 12,
    color: COLORS.gray,
    fontSize: 15,
  },
  notFound: {
    fontSize: 16,
    color: COLORS.gray,
  },
  hero: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 25,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  heroName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  heroUsername: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  sectionAccent: {
    width: 4,
    height: 18,
    backgroundColor: COLORS.secondary,
    borderRadius: 2,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
  },
  sectionBody: {
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    gap: 12,
  },
  infoLabelContainer: {
    width: 28,
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 13,
    color: COLORS.black,
    fontWeight: '500',
    flex: 1,
  },
  link: {
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
});