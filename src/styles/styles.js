import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
    flexGrow: 1,
  },
  
  // Header Section
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  studentName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1a365d',
    marginBottom: 4,
  },
  studentId: {
    fontSize: 14,
    fontWeight: '800',
    color: '#64748b',
    marginBottom: 12,
  },
  teacherMessage: {
    fontSize: 15,
    color: '#475569',
    fontStyle: 'italic',
    backgroundColor: '#f1f5f9',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
    textAlign: 'center',
  },
  
  // Section Styling
  section: {
    marginVertical: 12,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1e293b',
    letterSpacing: 0.5,
  },
  
  // Item Row Styling
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    minHeight: 60,
  },
  
  itemName: {
    fontSize: 16,
    flex: 1,
    color: '#334155',
    fontWeight: '500',
  },
  
  // Counter Controls
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  incrementButton: {
    backgroundColor: '#10b981',
  },
  
  decrementButton: {
    backgroundColor: '#ef4444',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  
  counter: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    minWidth: 40,
    textAlign: 'center',
  },
  
  // Search & Add Section
  searchSection: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  
  input: {
    borderWidth: 1.5,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    backgroundColor: '#f8fafc',
    color: '#1e293b',
  },
  
  inputFocused: {
    borderColor: '#10b981',
    backgroundColor: '#fff',
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  
  addButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  
  addButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  
  // Azkaar List
  azkaarList: {
    marginTop: 16,
  },
  
  azkaarItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#10b981',
  },
  
  azkaarText: {
    fontSize: 15,
    color: '#475569',
  },
  
  azkaarCount: {
    fontSize: 13,
    color: '#acb3bcff',
    fontWeight: '600',
  },
  
  // Empty State
  emptyState: {
    textAlign: 'center',
    color: '#2876e3ff',
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 8,
  },
});