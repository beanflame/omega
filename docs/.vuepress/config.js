module.exports = {
    base: '/',
    theme: 'antdocs',
    host: 'localhost',
    port: 10500,
    title: 'Omega',
    description: 'Minecraft 1.7.10 Forge Mod 开发手册! ',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    dest: './dist',
    extraWatchFiles: [
        '/docs/README.md',
        '/docs/.vuepress/config.js'
    ],
    themeConfig: {
        logo: '/icon.png',
        nav: [
            { text: 'Home', link: '/'},
            { text: 'GitHub', link: '/'}
        ]
    }
}