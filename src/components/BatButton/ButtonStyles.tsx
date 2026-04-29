import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


button:{
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
},

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#E5BF3C'
  },

  configContainer: {
    width: '100%',
    marginTop: 14,
    marginBottom: 6,
    gap: 8
  },

  configLabel: {
    color: '#FFFFFF',
    fontWeight: '600'
  },

  lengthInput: {
    width: '100%',
    backgroundColor: '#4D4D4D',
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5BF3C',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8
  },

  toggleRow: {
    flexDirection: 'row',
    gap: 10
  },

  toggleButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E5BF3C',
    backgroundColor: '#4D4D4D'
  },

  toggleButtonActive: {
    backgroundColor: '#E5BF3C'
  },

  toggleText: {
    fontWeight: '700'
  },

  toggleTextActive: {
    color: '#000000'
  },

  toggleTextInactive: {
    color: '#E5BF3C'
  },

  feedbackText: {
    marginTop: 10,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});