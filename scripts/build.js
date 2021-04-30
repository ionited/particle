const
    path = require('path'),
    { spawnSync } = require('child_process'),
    dir = process.cwd()
;

const outputs = [{
    input: 'src/particle.scss',
    dest: 'dist/particle'
}, {
    input: 'src/_base.scss',
    dest: 'dist/base'
}, {
    input: 'src/_grid.scss',
    dest: 'dist/grid'
}, {
    input: 'src/_utils.scss',
    dest: 'dist/utils'
}, {
    input: 'src/utils/_display.scss',
    dest: 'dist/utils/display'
}, {
    input: 'src/utils/_flex.scss',
    dest: 'dist/utils/flex'
}, {
    input: 'src/utils/_float.scss',
    dest: 'dist/utils/float'
}, {
    input: 'src/utils/_margin.scss',
    dest: 'dist/utils/margin'
}, {
    input: 'src/utils/_padding.scss',
    dest: 'dist/utils/padding'
}, {
    input: 'src/utils/_text_align.scss',
    dest: 'dist/utils/text-align'
}, {
    input: 'src/utils/_vertical_align.scss',
    dest: 'dist/utils/vertical-align'
}];

outputs.forEach(o => {
    spawnSync('sass', [path.join(dir, o.input), path.join(dir, `${o.dest}.css`)], { shell: true, stdio: 'inherit' });
    spawnSync('sass', [
        path.join(dir, o.input),
        path.join(dir, `${o.dest}.min.css`),
        '--style=compressed',
        '--no-source-map'
    ], { shell: true, stdio: 'inherit' });
});
