// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('Test Functions', () => {
  describe('isPhoneNumber', () => {
    test('Returns true for valid phone number format', () => {
      expect(isPhoneNumber('123-123-1234')).toBe(true);  
    });
    test('Returns true for valid phone number format', () => {
      expect(isPhoneNumber('000-000-0000')).toBe(true);  
    });
    test('Returns false for invalid phone number format', () => {
      expect(isPhoneNumber('--')).toBe(false);  
    });
    test('Returns false for invalid phone number format', () => {
      expect(isPhoneNumber('abc-efg-hijk')).toBe(false);  
    });
  });

  describe('isEmail', () => {
    test('Returns true for valid email format', () => {
      expect(isEmail('nabitar@ucsd.edu')).toBe(true);  
    });
    test('Returns true for valid email format', () => {
      expect(isEmail('nabitar1@ucsd.edu')).toBe(true);  
    });
    test('Returns false for invalid email format', () => {
      expect(isEmail('nabitar@ucsd')).toBe(false);  
    });
    test('Returns false for invalid email format', () => {
      expect(isEmail('nabitareng.ucsd.edu')).toBe(false);  
    });
  });

  describe('isStrongPassword', () => {
    test('Returns true for strong password format', () => {
      expect(isStrongPassword('HelloWorld123_')).toBe(true);  
    });
    test('Returns true for strong password format', () => {
      expect(isStrongPassword('Ned1')).toBe(true);  
    });
    test('Returns false for weak password format', () => {
      expect(isStrongPassword('nabitar@ucsd')).toBe(false);  
    });
    test('Returns false for weak password format', () => {
      expect(isStrongPassword('123Pass_')).toBe(false);  
    });
  });

  describe('isDate', () => {
    test('Returns true for valid date format', () => {
      expect(isDate('12/31/2026')).toBe(true);  
    });
    test('Returns true for valid date format', () => {
      expect(isDate('5/7/2026')).toBe(true);  
    });
    test('Returns false for invalid date format', () => {
      expect(isDate('2026/12/31')).toBe(false);  
    });
    test('Returns false for invalid date format', () => {
      expect(isDate('31/12/26')).toBe(false);  
    });
  });

  describe('isHexColor', () => {
    test('Returns true for valid orange hex color', () => {
      expect(isHexColor('#FFA500')).toBe(true);  
    });
    test('Returns true for valid lower-case orange hex color', () => {
      expect(isHexColor('#ffa500')).toBe(true);  
    });
    test('Returns false for invalid hex code with missing character', () => {
      expect(isHexColor('#FFA50')).toBe(false);  
    });
    test('Returns false for invalid hex code with invalid character', () => {
      expect(isHexColor('#FFA50G')).toBe(false);  
    });
  });
});
