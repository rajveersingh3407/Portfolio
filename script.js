// Default configuration
        const defaultConfig = {
            hero_name: "ALEX NEURAL",
            hero_tagline: "Intelligent AI Solutions",
            about_title: "ABOUT ME",
            background_color: "#141414",
            text_color: "#FFFFFF",
            accent_color: "#E50914",
            secondary_color: "#1a1a1a",
            muted_color: "#B3B3B3",
            font_family: "Inter",
            font_size: 16
        };

        // Initialize Element SDK
        window.elementSdk.init({
            defaultConfig,
            async onConfigChange(config) {
                // Update hero name
                const heroName = document.getElementById('hero-name');
                if (heroName) {
                    heroName.textContent = config.hero_name || defaultConfig.hero_name;
                }

                // Update hero tagline
                const heroTagline = document.getElementById('hero-tagline');
                if (heroTagline) {
                    heroTagline.textContent = config.hero_tagline || defaultConfig.hero_tagline;
                }

                // Update about title
                const aboutTitle = document.getElementById('about-title');
                if (aboutTitle) {
                    aboutTitle.textContent = config.about_title || defaultConfig.about_title;
                }

                // Apply colors
                const bgColor = config.background_color || defaultConfig.background_color;
                const textColor = config.text_color || defaultConfig.text_color;
                const accentColor = config.accent_color || defaultConfig.accent_color;
                const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
                const mutedColor = config.muted_color || defaultConfig.muted_color;

                document.documentElement.style.setProperty('--netflix-red', accentColor);
                document.documentElement.style.setProperty('--dark-bg', bgColor);
                document.documentElement.style.setProperty('--card-bg', secondaryColor);
                document.documentElement.style.setProperty('--text-primary', textColor);
                document.documentElement.style.setProperty('--text-secondary', mutedColor);

                // Apply font
                const fontFamily = config.font_family || defaultConfig.font_family;
                const baseFontStack = 'Inter, sans-serif';
                document.body.style.fontFamily = `${fontFamily}, ${baseFontStack}`;

                // Apply font size scaling
                const baseSize = config.font_size || defaultConfig.font_size;
                document.documentElement.style.fontSize = `${baseSize}px`;
            },
            mapToCapabilities(config) {
                return {
                    recolorables: [
                        {
                            get: () => config.background_color || defaultConfig.background_color,
                            set: (value) => {
                                config.background_color = value;
                                window.elementSdk.setConfig({ background_color: value });
                            }
                        },
                        {
                            get: () => config.secondary_color || defaultConfig.secondary_color,
                            set: (value) => {
                                config.secondary_color = value;
                                window.elementSdk.setConfig({ secondary_color: value });
                            }
                        },
                        {
                            get: () => config.text_color || defaultConfig.text_color,
                            set: (value) => {
                                config.text_color = value;
                                window.elementSdk.setConfig({ text_color: value });
                            }
                        },
                        {
                            get: () => config.accent_color || defaultConfig.accent_color,
                            set: (value) => {
                                config.accent_color = value;
                                window.elementSdk.setConfig({ accent_color: value });
                            }
                        },
                        {
                            get: () => config.muted_color || defaultConfig.muted_color,
                            set: (value) => {
                                config.muted_color = value;
                                window.elementSdk.setConfig({ muted_color: value });
                            }
                        }
                    ],
                    borderables: [],
                    fontEditable: {
                        get: () => config.font_family || defaultConfig.font_family,
                        set: (value) => {
                            config.font_family = value;
                            window.elementSdk.setConfig({ font_family: value });
                        }
                    },
                    fontSizeable: {
                        get: () => config.font_size || defaultConfig.font_size,
                        set: (value) => {
                            config.font_size = value;
                            window.elementSdk.setConfig({ font_size: value });
                        }
                    }
                };
            },
            mapToEditPanelValues(config) {
                return new Map([
                    ["hero_name", config.hero_name || defaultConfig.hero_name],
                    ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
                    ["about_title", config.about_title || defaultConfig.about_title]
                ]);
            }
        });

        // Typing animation for tagline
        const taglineElement = document.getElementById('hero-tagline');
        const phrases = [
            "Intelligent AI Solutions",
            "Deep Learning Models",
            "Computer Vision Systems",
            "NLP Applications",
            "ML Pipelines"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                taglineElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                taglineElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }

        // Start typing effect after a delay
        setTimeout(typeEffect, 2000);

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        const nav = document.querySelector('nav');
        const appWrapper = document.getElementById('app-wrapper');
        
        appWrapper.addEventListener('scroll', () => {
            if (appWrapper.scrollTop > 50) {
                nav.style.background = 'rgba(20, 20, 20, 0.95)';
            } else {
                nav.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent)';
            }
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9bedf988a6dc9e1b',t:'MTc2ODU3MDMwMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();