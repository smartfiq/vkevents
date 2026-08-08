// VK Events - Main JS
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Video Modal Player
    const videoModal = document.getElementById('video-modal');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const closeModalBtn = document.getElementById('close-video-modal');

    window.openVideoModal = function(videoSrc) {
        if (!videoModal || !modalVideoPlayer) return;
        modalVideoPlayer.src = videoSrc;
        videoModal.classList.remove('hidden');
        videoModal.classList.add('flex');
        modalVideoPlayer.play();
    };

    window.closeVideoModal = function() {
        if (!videoModal || !modalVideoPlayer) return;
        modalVideoPlayer.pause();
        modalVideoPlayer.src = '';
        videoModal.classList.add('hidden');
        videoModal.classList.remove('flex');
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', window.closeVideoModal);
    }
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                window.closeVideoModal();
            }
        });
    }

    // 3. Blog Article Reader Modal & Expanded Long-Form Articles
    const blogModal = document.getElementById('blog-modal');
    const blogModalTitle = document.getElementById('blog-modal-title');
    const blogModalCategory = document.getElementById('blog-modal-category');
    const blogModalDate = document.getElementById('blog-modal-date');
    const blogModalContent = document.getElementById('blog-modal-content');
    const closeBlogModalBtn = document.getElementById('close-blog-modal');

    const blogArticlesData = {
        1: {
            title: "The Evolution of Grand Destination Weddings Across Jharkhand: From Ranchi to Netarhat",
            category: "Jharkhand Venues & Trends",
            date: "August 2026 • 12 min read • Author: VK Atelier",
            content: `
                <div class="space-y-6 text-on-surface-variant font-light leading-relaxed">
                    <p class="text-lg font-normal text-on-surface border-l-4 border-primary pl-4 italic">
                        "Jharkhand’s natural majesty—from the cascading waterfalls and verdant hill retreats of Netarhat to the serene lakeside luxury of Patratu and elite banquet estates in Ranchi and Jamshedpur—is defining a new paradigm in luxury destination weddings."
                    </p>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">1. Why Jharkhand is India's Rising Capital for Luxury Destination Celebrations</h4>
                    <p>
                        For decades, destination wedding hosts turned exclusively to Rajasthan palaces or Goa beaches. However, ultra-high-net-worth families are now seeking intimate, tranquil, and pristine landscapes where privacy and natural beauty harmonize. Jharkhand offers an extraordinary combination of expansive green topographies, cool hill retreats, high-capacity luxury banquet estates, and five-star hospitality hubs in Ranchi and Jamshedpur.
                    </p>
                    <p>
                        At <strong>VK Events</strong>, we specialize in curating end-to-end luxury celebrations across every district of Jharkhand. Our dedicated production teams bring architectural lighting, climate-controlled glass pavilions, and white-glove hospitality to breathtaking outdoor locations that were previously thought impossible for grand-scale events.
                    </p>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">2. Key Destination Hubs Across Jharkhand</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div class="bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
                            <h5 class="font-serif font-bold text-on-surface text-lg mb-2">Ranchi Metropolitan</h5>
                            <p class="text-xs text-on-surface-variant">Home to premier five-star properties like Radisson Blu Ranchi, Mayuri Convention Estates, and hilltop resorts. Ideal for 1,000+ guest royal receptions, sangeet concerts, and VIP guest hosting.</p>
                        </div>
                        <div class="bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
                            <h5 class="font-serif font-bold text-on-surface text-lg mb-2">Patratu Valley & Lake Resorts</h5>
                            <p class="text-xs text-on-surface-variant">Offering stunning lakeside views and dramatic valley backdrops, Patratu is the ultimate choice for floating water mandaps, sunset cocktail lounges, and glass pavilion receptions.</p>
                        </div>
                        <div class="bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
                            <h5 class="font-serif font-bold text-on-surface text-lg mb-2">Jamshedpur & Steel City Estates</h5>
                            <p class="text-xs text-on-surface-variant">Featuring historic club lawns, pristine golf resorts, and heritage suites. Perfect for regal outdoor Mehendi carnivals and high-fashion Sangeet galas.</p>
                        </div>
                        <div class="bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
                            <h5 class="font-serif font-bold text-on-surface-variant text-lg mb-2">Deoghar & Spiritual Destinations</h5>
                            <p class="text-xs text-on-surface-variant">For families desiring deeply sacred rituals, Deoghar provides a divine atmosphere for Vedic Phera ceremonies combined with our white-glove guest concierge services.</p>
                        </div>
                    </div>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">3. Infrastructure & Logistics: Navigating High-End Event Execution</h4>
                    <p>
                        Executing a 3-day luxury wedding requiring 20,000 square feet of temporary glass housing, imported Dutch floral arrangements, and 500+ VIP airport transfers demands rigorous precision. Our Ranchi headquarters manages complete turnkey logistics across Jharkhand.
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-sm">
                        <li><strong>Airport & Fleet Transfers:</strong> Direct tarmac greeting and private luxury car fleet management at Birsa Munda Airport (Ranchi).</li>
                        <li><strong>Power & Heavy Production:</strong> Silent soundproof generator grids providing up to 500 KVA uninterruptible power for massive concert LED stages and intelligent lighting.</li>
                        <li><strong>Artisanal Decor Supply Chains:</strong> Direct daily floral shipments flown in from Bangalore and international flower markets straight to event grounds across Jharkhand.</li>
                    </ul>

                    <div class="bg-primary/10 p-6 rounded-2xl border border-primary/30 mt-8">
                        <h5 class="font-serif text-xl font-bold text-primary mb-2">Planning Your Jharkhand Wedding?</h5>
                        <p class="text-xs text-on-surface-variant mb-4">Consult directly with VK Atelier to discuss spatial design, venue selections, and budget roadmaps tailored to your vision across Jharkhand.</p>
                        <a href="contact.html" class="inline-block bg-primary text-white font-semibold text-xs px-6 py-3 rounded uppercase tracking-widest hover:bg-primary-container transition">Schedule Private Consultation</a>
                    </div>
                </div>
            `
        },
        2: {
            title: "Designing Sacred Spaces: Vastu Shastra & Royal Mandap Spatial Aesthetics",
            category: "Sacred Architecture & Decor",
            date: "July 2026 • 10 min read • Author: VK Atelier",
            content: `
                <div class="space-y-6 text-on-surface-variant font-light leading-relaxed">
                    <p class="text-lg font-normal text-on-surface border-l-4 border-primary pl-4 italic">
                        "The Mandap is the sanctum sanctorum of an Indian wedding. It is not merely a decorative stage—it is a sacred Vedic altar constructed to harness positive cosmic energies for the couple's lifelong union."
                    </p>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">1. Cardinal Vastu Alignment for Marriage Rituals</h4>
                    <p>
                        According to traditional Vastu Shastra, the positioning of the wedding Mandap significantly influences the harmony, prosperity, and peace of the newly married couple. In every event we design across Jharkhand, our spatial architects collaborate with Vedic scholars to ensure exact cardinal orientation:
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-sm">
                        <li><strong>Northeast (Ishanya Corner) Placement:</strong> The ideal direction for installing the Mandap platform to attract pure spiritual energy.</li>
                        <li><strong>Orientation of the Havan Kund:</strong> Positioned in the Southeast (Agneya) corner of the Mandap, ensuring that the holy fire burns cleanly and sacred offerings reach the deities.</li>
                        <li><strong>Seating Dynamics:</strong> The bride and groom face East during sacred vows, receiving the auspicious morning and twilight solar rays.</li>
                    </ul>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">2. Architectural Pillared Pillars & Sacred Ceiling Canopy</h4>
                    <p>
                        A traditional Mandap rests upon four pillars, representing the four pillars of life: Dharma (Righteousness), Artha (Prosperity), Kama (Love & Desire), and Moksha (Spiritual Liberation). At VK Events, we elevate these four pillars into breathtaking architectural masterpieces:
                    </p>
                    <div class="space-y-4 my-6">
                        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                            <h5 class="font-bold text-on-surface">Golden Carved Stone & Acrylic Columns</h5>
                            <p class="text-xs">Custom-molded 12-foot pillars adorned with intricate lotus motifs and gold leafing, maintaining structural solidity while exuding sheer elegance.</p>
                        </div>
                        <div class="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30">
                            <h5 class="font-bold text-on-surface">Floral Acoustic Canopy</h5>
                            <p class="text-xs">A domed ceiling woven with fresh Tuberose (Rajnigandha), Jasmine, and Dutch Red Roses. This natural floral canopy absorbs smoke from the Havankund and diffuses a divine fragrance over the ceremony area.</p>
                        </div>
                    </div>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">3. Modern Innovations: Unobstructed Sightlines & Water Mirror Reflections</h4>
                    <p>
                        One of the most frequent complaints at large weddings is that heavy mandap drapes and thick pillars block guests from watching the Phera ceremonies. We solve this through transparent acrylic structural engineering and raised tiered seating. Additionally, our signature water mirror mandaps built over resort pools create ethereal reflections under the nighttime stars.
                    </p>
                </div>
            `
        },
        3: {
            title: "Atmospheric Mandap Lighting & Grand Stage Architecture in Jharkhand",
            category: "Atmospheric Lighting",
            date: "June 2026 • 11 min read • Author: VK Atelier",
            content: `
                <div class="space-y-6 text-on-surface-variant font-light leading-relaxed">
                    <p class="text-lg font-normal text-on-surface border-l-4 border-primary pl-4 italic">
                        "Atmospheric lighting brings royal architecture to life. Intricate mandap geometry illuminated with warm, curated illumination transforms night ceremonies into ethereal visual masterpieces."
                    </p>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">1. Architectural Mandap Illumination</h4>
                    <p>
                        Our specialized lighting designers utilize intelligent warm-spectrum LEDs, crystal chandeliers, and dynamic projection mapping to accentuate every sacred curve of your wedding mandap across Jharkhand venues:
                    </p>
                    <ul class="list-disc pl-6 space-y-2 text-sm">
                        <li><strong>Warm Amber Ambient Glow:</strong> Tailored color temperatures that enhance traditional gold attire and complex floral canopies.</li>
                        <li><strong>Dynamic Scene Control:</strong> Seamless transitions from subtle sacred ceremony lighting during Pheras to high-energy celebratory stage lighting.</li>
                        <li><strong>Water Mirror Reflection Lighting:</strong> Submersible aquatic LED arrays engineered for pool-top and lakeside mandap installations.</li>
                    </ul>

                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">2. Grand Stage Canopy & Spatial Engineering</h4>
                    <p>
                        We architect custom steel-truss raised stages and pillarless glass canopies engineered to provide uninterrupted 360-degree viewing angles for hundreds of guests in Ranchi, Jamshedpur, and Dhanbad.
                    </p>
                </div>
            `
        },
        4: {
            title: "Gourmet Culinary Curation & Traditional Royal Feast Dining Standards",
            category: "Culinary & Banqueting",
            date: "May 2026 • 9 min read • Author: VK Atelier",
            content: `
                <div class="space-y-6 text-on-surface-variant font-light leading-relaxed">
                    <p class="text-lg font-normal text-on-surface border-l-4 border-primary pl-4 italic">
                        "Food is the soul of Indian hospitality. A royal wedding feast must delight traditional palates while pushing the boundaries of global culinary artistry."
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">1. Blending Authentic Jharkhand Flavors with International Gastronomy</h4>
                    <p>
                        We collaborate with celebrity executive chefs to craft custom multi-course menus that celebrate rich local heritage alongside global delicacies. Live counters feature authentic Jharkhand specialities—Dhuska with spicy Aloo Chana, Pittha, and artisanal Mahua syrup desserts—presented in regal silver cutlery alongside authentic Italian truffle pasta and Japanese sushi live bars.
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">2. White-Glove French Sit-Down Service</h4>
                    <p>
                        For royal VVIP banquets, we replace crowded buffet lines with synchronous silver platters served directly to guest tables by tuxedo-clad servers, ensuring that every dish is served piping hot at the exact second.
                    </p>
                </div>
            `
        },
        5: {
            title: "Architectural Lighting, 3D Projection & Stage Technology in Modern Sangeets",
            category: "Event Tech & Lighting",
            date: "April 2026 • 8 min read • Author: VK Atelier",
            content: `
                <div class="space-y-6 text-on-surface-variant font-light leading-relaxed">
                    <p class="text-lg font-normal text-on-surface border-l-4 border-primary pl-4 italic">
                        "Modern luxury event design is an alchemy of high architecture and cutting-edge stage technology."
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">1. Concert-Scale Sangeet Stage Architecture</h4>
                    <p>
                        Sangeet nights have evolved into full-fledged stadium-grade live concerts. We deploy 4K curved LED walls, intelligent moving head light rigs, DMX-controlled pyrotechnic spark fountains, and custom laser choreography to turn your performance night into an unforgettable spectacle.
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">2. Warm Architectural Pin-Spotting</h4>
                    <p>
                        Unlike harsh white floodlights, our warm 2700K architectural lighting pin-spots highlight every floral stem, table crystal, and silk drape while ensuring optimal lighting for high-definition wedding photography and cinematography.
                    </p>
                </div>
            `
        },
        6: {
            title: "The Comprehensive Timeline & Guide to Booking Luxury Event Managers in Jharkhand",
            category: "Planning & Guide",
            date: "March 2026 • 15 min read • Author: VK Atelier",
            content: `
                <div class="space-y-6 text-on-surface-variant font-light leading-relaxed">
                    <p class="text-lg font-normal text-on-surface border-l-4 border-primary pl-4 italic">
                        "A step-by-step master plan for families planning a high-end wedding or gala in Jharkhand, from venue lock-ins to post-event teardown."
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">1. Month 12 to 9: Venue Acquisition & Spatial Planning</h4>
                    <p>
                        Locking in premier venues across Ranchi, Patratu, or Jamshedpur early is critical, especially during peak Muhurat dates between October and April. VK Events secures prime venues and initiates 3D spatial renders to visualize scale and layouts.
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">2. Month 8 to 4: Concept Theme Finalization & Artist Booking</h4>
                    <p>
                        Selecting color palettes, floral species, lighting architecture, and booking top musical performers, DJs, and Vedic priests.
                    </p>
                    <h4 class="font-serif text-2xl font-semibold text-primary mt-8">3. Month 3 to 1: Hospitality Roster & On-Site Dry Runs</h4>
                    <p>
                        Finalizing guest travel manifests, suite allocations, menu tastings, and complete technical rehearsals with lighting and sound engineers.
                    </p>
                    <div class="bg-primary-container text-on-primary-container p-6 rounded-2xl font-medium mt-6">
                        Ready to plan your luxury celebration in Jharkhand? Call or WhatsApp our lead atelier directly at <strong>+91 62039 24850</strong>.
                    </div>
                </div>
            `
        }
    };

    window.openBlogModal = function(id) {
        if (!blogModal || !blogArticlesData[id]) return;
        const article = blogArticlesData[id];
        blogModalTitle.textContent = article.title;
        blogModalCategory.textContent = article.category;
        blogModalDate.textContent = article.date;
        blogModalContent.innerHTML = article.content;

        blogModal.classList.remove('hidden');
        blogModal.classList.add('flex');
    };

    window.closeBlogModal = function() {
        if (!blogModal) return;
        blogModal.classList.add('hidden');
        blogModal.classList.remove('flex');
    };

    if (closeBlogModalBtn) {
        closeBlogModalBtn.addEventListener('click', window.closeBlogModal);
    }
    if (blogModal) {
        blogModal.addEventListener('click', (e) => {
            if (e.target === blogModal) {
                window.closeBlogModal();
            }
        });
    }

    // 4. Contact Form WhatsApp Handler (Target: 6203924850)
    window.sendInquiryToWhatsApp = function(event) {
        if (event) event.preventDefault();
        const form = event ? event.target : document.querySelector('form');
        if (!form) return;

        const firstName = form.querySelector('[name="firstName"]')?.value || form.querySelectorAll('input[type="text"]')[0]?.value || '';
        const lastName = form.querySelector('[name="lastName"]')?.value || form.querySelectorAll('input[type="text"]')[1]?.value || '';
        const email = form.querySelector('input[type="email"]')?.value || '';
        const phone = form.querySelector('input[type="tel"]')?.value || '';
        const date = form.querySelector('input[type="date"]')?.value || '';
        const location = form.querySelector('[name="location"]')?.value || form.querySelectorAll('input[type="text"]')[2]?.value || 'Jharkhand';
        const guestCount = form.querySelector('select')?.value || 'Not specified';
        const vision = form.querySelector('textarea')?.value || 'No specific note provided';

        const text = `*New Event Consultation Inquiry - VK Events*\n\n` +
                     `*Client Name:* ${firstName} ${lastName}\n` +
                     `*Phone Number:* ${phone}\n` +
                     `*Email Address:* ${email}\n` +
                     `*Event Date:* ${date}\n` +
                     `*Event Location:* ${location}\n` +
                     `*Guest Count:* ${guestCount}\n` +
                     `*Vision / Message:* ${vision}\n\n` +
                     `_Inquiry sent from VK Events Website_`;

        const targetPhone = "916203924850";
        const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
        
        // Open WhatsApp directly in new window
        window.open(whatsappUrl, '_blank');
    };

    // Auto-bind form submission if form present
    const inquiryForms = document.querySelectorAll('form');
    inquiryForms.forEach(form => {
        form.addEventListener('submit', window.sendInquiryToWhatsApp);
    });

    // 5. FAQ Accordion Toggle
    const faqToggles = document.querySelectorAll('.faq-toggle');
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('.faq-icon');
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                if (icon) icon.textContent = 'remove';
            } else {
                content.classList.add('hidden');
                if (icon) icon.textContent = 'add';
            }
        });
    });

    // 6. Gallery Filtering
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-white', 'shadow-lg');
                b.classList.add('bg-surface-container-low', 'text-on-surface-variant');
            });
            btn.classList.add('bg-primary', 'text-white', 'shadow-lg');
            btn.classList.remove('bg-surface-container-low', 'text-on-surface-variant');

            const filter = btn.getAttribute('data-filter');
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
