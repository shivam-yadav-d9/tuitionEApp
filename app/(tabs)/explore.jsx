import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

export default function ExploreScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Icon */}
                <View style={styles.iconCircle}>
                    <Text style={styles.iconEmoji}>🚀</Text>
                </View>

           

                <Text style={styles.title}>COMING SOON</Text>
                <Text style={styles.subtitle}>
                    We're working hard to bring you an amazing Explore experience. Stay tuned for updates!
                </Text>

         
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9fafb' },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    iconCircle: {
        width: 110,
        height: 110,
        borderRadius: 55,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.35,
        shadowRadius: 16,
        elevation: 10,
    },
    iconEmoji: { fontSize: 52 },
    badge: {
        backgroundColor: COLORS.secondary,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 5,
        marginBottom: 20,
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 2,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: COLORS.primary,
        textAlign: 'center',
        lineHeight: 34,
        marginBottom: 14,
    },
    subtitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 36,
    },
    featureList: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 3,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    featureEmoji: { fontSize: 22, marginRight: 14 },
    featureText: { fontSize: 14, color: '#374151', fontWeight: '500' },
});