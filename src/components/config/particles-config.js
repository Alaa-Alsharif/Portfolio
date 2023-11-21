const particlesConfig = {

    fullScreen: { enable: false },
    background: {
        color: {
            value: '',
        },
    },
    fpsLimit: 120,
    interactivity: {
        detectsOn: ".hero",
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 2
            },
            repulse: {
                distance: 70,
                duration: 0.4,
            }
        }
    },
    particles: {
        color: {
            // value: '#e68e2e'
            value: 'FBF5F3'
        },
        links: {
            // color: '#f5d393',
            color: 'FBF5F3',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 1,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 100
        },
        opacity: {
            value: 0.6,
        },
        shape: {
            type: 'circle'

        },
        size: {
            value: { min: 1, max: 5 },

        },
    },
    detectRetina: true,


    // particles: {
    //     number: {
    //         value: 100, // Number of particles
    //     },
    //     size: {
    //         value: 3, // Size of particles
    //     },
    //     color: {
    //         value: "#e68e2e", // Color of particles
    //     },
    //     move: {
    //         enable: true, // Enable particle movement
    //         speed: 2, // Speed of particle movement
    //     },
    // }
}

export default particlesConfig