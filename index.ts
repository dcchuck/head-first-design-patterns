import program from 'commander';
import patterns from './patterns';

const patternNames = Object.keys(patterns);

function listAllPatterns() {
  patternNames.forEach(pattern => { console.log(pattern) });
}

function runPattern(k: string) {
  if (patternNames.filter(n => n === k).length !== 1) {
    console.log('Pattern not found. Patterns include:');
    listAllPatterns();
    return;
  }

  function runAll(obj: any) {
    Object.keys(obj).forEach(key => {
      obj[key]();
    })
  }
  const ok = patterns[k];
  runAll(ok);
}

program
  .option('-a, --all', 'run all examples')
  .option('-p, --pattern <name>', 'run specific example')
  .option('-l, --list', 'list available examples');

program.parse(process.argv);

let executed = false;

if (program.list) {
  executed = true;
  listAllPatterns();
}

if (program.pattern) {
  executed = true;
  runPattern(program.pattern)
}

if (program.all) {
  executed = true;
  patternNames.forEach(pattern => {
    runPattern(pattern);
  })
}

if (!executed) {
  program.outputHelp();
}
