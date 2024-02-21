export const capitalLatter = () =>
  Array.from({length: 26}, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i),
  );

export const smallLatter = () =>
  Array.from({length: 26}, (_, i) =>
    String.fromCharCode('a'.charCodeAt(0) + i),
  );

export const numbers = () =>
  Array.from({length: 10}, (_, i) =>
    String.fromCharCode('0'.charCodeAt(0) + i),
  );
