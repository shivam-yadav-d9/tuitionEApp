import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { useAuth } from '../context/AuthContext';

function MenuItem({ icon, label, subtitle, onPress, danger }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.75}>
      <View style={[styles.menuIcon, danger && styles.menuIconDanger]}>
        {icon}
      </View>
      <View style={styles.menuText}>
        <Text style={[styles.menuLabel, danger && styles.menuLabelDanger]}>{label}</Text>
        {subtitle ? <Text style={styles.menuSubtitle}>{subtitle}</Text> : null}
      </View>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionCard}>{children}</View>
    </View>
  );
}

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const avatarInitials = user?.email?.slice(0, 2).toUpperCase() ?? 'AD';

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          logout();
          router.replace('/');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{avatarInitials}</Text>
            </View>
            <View style={styles.onlineDot} />
          </View>
          <Text style={styles.name}>{user?.email ?? 'Admin User'}</Text>
          {/* <Text style={styles.email}>{user?.email ?? 'admin@tuitionapp.com'}</Text> */}
        </View>

        <Section title="Account">
          <MenuItem
            icon={<Feather name="edit-2" size={18} color={COLORS.primary} />}
            label="Edit Profile"
            subtitle="Update your info"
            onPress={() => {}}
          />
          <MenuItem
            icon={<Feather name="lock" size={18} color={COLORS.primary} />}
            label="Change Password"
            subtitle="Update your password"
            onPress={() => {}}
          />
          <MenuItem
            icon={<Feather name="bell" size={18} color={COLORS.primary} />}
            label="Notifications"
            subtitle="Manage alerts"
            onPress={() => {}}
          />
        </Section>

        <Section title="Session">
          <MenuItem
            icon={<Feather name="log-out" size={18} color="#dc2a87

" />}
            label="Logout"
            danger
            onPress={handleLogout}
          />
        </Section>

        <Text style={styles.footer}>TuitionApp v1.0.0 • Made with ❤️</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  hero: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  avatarContainer: { position: 'relative', marginBottom: 14 },
  avatar: {
    width: 86, height: 86, borderRadius: 43,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 3, borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: { fontSize: 30, fontWeight: 'bold', color: '#fff' },
  onlineDot: {
    position: 'absolute', bottom: 4, right: 4,
    width: 16, height: 16, borderRadius: 8,
    backgroundColor: '#10b981',
    borderWidth: 2, borderColor: COLORS.primary,
  },
  name: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  email: { fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 12 },
  section: { marginTop: 20, paddingHorizontal: 16 },
  sectionTitle: {
    fontSize: 13, fontWeight: '700', color: '#6b7280',
    marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5,
  },
  sectionCard: {
    backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 6, elevation: 3,
  },
  menuItem: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14,
    borderBottomWidth: 1, borderBottomColor: '#f3f4f6',
  },
  menuIcon: {
    width: 38, height: 38, borderRadius: 10,
    backgroundColor: 'rgba(101,67,147,0.1)',
    justifyContent: 'center', alignItems: 'center', marginRight: 14,
  },



  menuIconDanger: { backgroundColor: 'rgba(239,68,68,0.1)' },
  menuText: { flex: 1 },
  menuLabel: { fontSize: 14, fontWeight: '600', color: '#111' },
  menuLabelDanger: { color: '#dc2a87' },
  menuSubtitle: { fontSize: 12, color: '#9ca3af', marginTop: 1 },
  menuArrow: { fontSize: 20, color: '#9ca3af' },
  footer: { textAlign: 'center', color: '#9ca3af', fontSize: 12, marginTop: 24, marginBottom: 32 },
});