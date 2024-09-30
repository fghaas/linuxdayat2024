// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({

    controls: false,

    progress: true,
    history: true,
    center: true,
    showNotes: false,

    transition: 'fade',


    totalTime: 45 * 60,


    menu: {
        themes: [
	    {
		name: 'Dunkel',
		theme: 'reveal.js/dist/theme/black.css'
	    },
	    {
		name: 'Hell',
		theme: 'reveal.js/dist/theme/white.css'
	    }
	],

        themesPath: 'reveal.js/dist/theme',

        transitions: false,
        openButton: true,
        openSlideNumber: true,
        markers: true
    },



    multiplex: {
        secret: multiplex_config['secret'],
        id: multiplex_config['socketId'],
        url: "https://reveal-multiplex.glitch.me"
    },





    dependencies: [
       { src: 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js', async: true },
       { src: 'https://reveal-multiplex.glitch.me/master.js', async: true }
    ],


    plugins: [
	RevealMarkdown,
	RevealNotes,
	RevealHighlight,
        RevealZoom,
        RevealMenu
    ]

});
