// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'jsx'],
};
