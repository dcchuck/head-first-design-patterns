import adapterFacade  from './adapter-facade';
import command        from './command';
import decorator      from './decorator';
import factory        from './factory';
import iterator       from './iterator';
import observer       from './observer';
import singleton      from './singleton';
import strategy       from './strategy';

interface IPOTO {
  [index: string]: { [index: string]: () => void }
}

const patterns: IPOTO = {
  adapterFacade,
  command,
  decorator,
  factory,
  iterator,
  observer,
  singleton,
  strategy,
}
export default patterns;
