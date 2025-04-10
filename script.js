new WOW().init();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });

        $(document).ready(function () {
            const sections = $('section');

            function checkVisibility() {
                sections.each(function () {
                    const sectionTop = $(this).offset().top;
                    const windowTop = $(window).scrollTop();
                    const windowHeight = $(window).height();

                    const triggerPoint = sectionTop - windowHeight + 150;

                    if (windowTop > triggerPoint) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                });
            }

            checkVisibility();
            $(window).scroll(checkVisibility);
        });