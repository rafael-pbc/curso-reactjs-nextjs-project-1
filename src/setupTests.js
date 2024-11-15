// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest'
import { jest } from '@jest/globals';
import 'web-streams-polyfill';
import { TextDecoder, TextEncoder } from 'util';
import { BroadcastChannel } from 'broadcast-channel';

global.BroadcastChannel = BroadcastChannel;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.BroadcastChannel = class {
  postMessage() { }
  close() { }
};
global.TransformStream = class {
  constructor() {
    this.writable = { getWriter: jest.fn() };
    this.readable = { getReader: jest.fn() };
  }
};
