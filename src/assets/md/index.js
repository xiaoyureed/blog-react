const names = [
    'hello',
    // 'linux-note',
];

const namePathMapping = names.map(name => {
    return {
        name,
        // mds is an array, contains packed paths
        path: name => require('./' + name + '/' + name + '.md'),
    };
});

export default namePathMapping;

// todo: react 动态加载 - https://www.jianshu.com/p/27cc69eb4556