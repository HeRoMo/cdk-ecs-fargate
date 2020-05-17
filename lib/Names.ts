import { CONFIG } from './Config';

const { systemName } = CONFIG;

export class Names {
  static prependSystemName(name: string) {
    return `${systemName}-${name}`;
  }

  static stackName(name: string) {
    return this.prependSystemName(`${name}-stack`);
  }
}
