export interface ISpinsObject {
  easy: string[];
  medium: string[];
  hard: string[];
  impossible: string[];
}

export interface ITricksObject {
  soul: string[];
  groove: string[];
}

// negative top side switch - будут в коде выглядеть как флаг true/false, там названия не нужны

export const entrances: ISpinsObject = {
  easy: ['No spin', 'Inspin', 'Outspin'],
  medium: ['Zerospin', 'Alleyoop'],
  hard: ['Truespin', 'Full Cab', 'Full Cab true', '270', 'Hurricane'],
  impossible: ['450', '540', '720', 'Misty to', 'Back flip to']
};

export const tricks: ITricksObject = {
  soul: ['Soul', 'Mizou', 'Acid', 'PStar', 'Makio', 'X-Grind', 'Mistrial', 'Torque soul'],
  groove: ['UFO', 'Royale', 'Full Torque', 'Unity', 'Backslide', 'Torque', 'Cab driver', 'Fastslide', 'Pudslide'],
};

export const spins: ISpinsObject = {
  easy: ['No spin', '180 Easy way'],
  medium: ['180 Hard way', '270', '360'],
  hard: ['540', '720'],
  impossible: ['Misty out', 'Back flip out']
};

