const
    path = require('path'),
    { spawnSync } = require('child_process'),
    dir = process.cwd(),
    dest = path.join(dir, 'dist/'),
    input = path.join(dir, 'src/particle.scss');

spawnSync('sass', [input, dest + 'particle.css'], { shell: true, stdio: 'inherit' });
spawnSync('sass', [
    input,
    dest + 'particle.min.css',
    '--style=compressed',
    '--no-source-map'
], { shell: true, stdio: 'inherit' });