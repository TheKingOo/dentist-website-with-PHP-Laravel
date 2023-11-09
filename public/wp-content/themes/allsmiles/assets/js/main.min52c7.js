!(function (o) {
    "use strict";
    (window.qodef = {}),
        (qodef.body = o("body")),
        (qodef.html = o("html")),
        (qodef.window = o(window)),
        (qodef.windowWidth = o(window).width()),
        (qodef.windowHeight = o(window).height()),
        (qodef.scroll = 0),
        o(document).ready(function () {
            (qodef.scroll = o(window).scrollTop()),
                i.init(),
                q.init(),
                n.init(),
                s.init();
        }),
        o(window).resize(function () {
            (qodef.windowWidth = o(window).width()),
                (qodef.windowHeight = o(window).height());
        }),
        o(window).scroll(function () {
            qodef.scroll = o(window).scrollTop();
        }),
        o(document).on("allsmiles_trigger_get_new_posts", function () {
            q.init(), n.init();
        });
    var i = {
            init: function () {
                i.addBodyClassName();
            },
            isBrowser: function (e) {
                var t = !1;
                switch (e) {
                    case "chrome":
                        t =
                            /Chrome/.test(navigator.userAgent) &&
                            /Google Inc/.test(navigator.vendor);
                        break;
                    case "safari":
                        t =
                            /Safari/.test(navigator.userAgent) &&
                            /Apple Computer/.test(navigator.vendor);
                        break;
                    case "firefox":
                        t =
                            -1 <
                            navigator.userAgent
                                .toLowerCase()
                                .indexOf("firefox");
                        break;
                    case "ie":
                        t =
                            0 < window.navigator.userAgent.indexOf("MSIE ") ||
                            !!navigator.userAgent.match(/Trident.*rv\:11\./);
                        break;
                    case "edge":
                        t = /Edge\/\d./i.test(navigator.userAgent);
                }
                return t;
            },
            addBodyClassName: function () {
                o.each(
                    ["chrome", "safari", "firefox", "ie", "edge"],
                    function (e, t) {
                        i.isBrowser(t) &&
                            void 0 !== qodef.body &&
                            ("ie" === t && (t = "ms-explorer"),
                            qodef.body.addClass("qodef-browser--" + t));
                    }
                );
            },
        },
        q = {
            init: function (e) {
                (this.holder = o(".qodef-swiper-container")),
                    o.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            q.createSlider(o(this));
                        });
            },
            createSlider: function (e) {
                var t = q.getOptions(e),
                    i = q.getEvents(e, t);
                new Swiper(e, Object.assign(t, i));
            },
            getOptions: function (e, t) {
                var i = void 0 !== e.data("options") ? e.data("options") : {},
                    o =
                        void 0 !== i.spaceBetween && "" !== i.spaceBetween
                            ? i.spaceBetween
                            : 0,
                    n =
                        void 0 !== i.slidesPerView && "" !== i.slidesPerView
                            ? i.slidesPerView
                            : 1,
                    a =
                        void 0 !== i.centeredSlides &&
                        "" !== i.centeredSlides &&
                        i.centeredSlides,
                    s =
                        void 0 !== i.sliderScroll &&
                        "" !== i.sliderScroll &&
                        i.sliderScroll,
                    r = void 0 === i.loop || "" === i.loop || i.loop,
                    d =
                        void 0 === i.autoplay ||
                        "" === i.autoplay ||
                        i.autoplay,
                    l =
                        void 0 !== i.speed && "" !== i.speed
                            ? parseInt(i.speed, 10)
                            : 5e3,
                    f =
                        void 0 !== i.speedAnimation && "" !== i.speedAnimation
                            ? parseInt(i.speedAnimation, 10)
                            : 800,
                    c =
                        void 0 !== i.customStages &&
                        "" !== i.customStages &&
                        i.customStages,
                    u =
                        void 0 !== i.outsideNavigation &&
                        "yes" === i.outsideNavigation,
                    h = u
                        ? ".swiper-button-next-" + i.unique
                        : e.find(".swiper-button-next"),
                    g = u
                        ? ".swiper-button-prev-" + i.unique
                        : e.find(".swiper-button-prev"),
                    p = e.find(".swiper-pagination");
                !1 !== d && 5e3 !== l && (d = { delay: l });
                var m =
                        void 0 !== i.slidesPerView1440 &&
                        "" !== i.slidesPerView1440
                            ? parseInt(i.slidesPerView1440, 10)
                            : 5,
                    v =
                        void 0 !== i.slidesPerView1366 &&
                        "" !== i.slidesPerView1366
                            ? parseInt(i.slidesPerView1366, 10)
                            : 4,
                    w =
                        void 0 !== i.slidesPerView1024 &&
                        "" !== i.slidesPerView1024
                            ? parseInt(i.slidesPerView1024, 10)
                            : 3,
                    u =
                        void 0 !== i.slidesPerView768 &&
                        "" !== i.slidesPerView768
                            ? parseInt(i.slidesPerView768, 10)
                            : 2,
                    l =
                        void 0 !== i.slidesPerView680 &&
                        "" !== i.slidesPerView680
                            ? parseInt(i.slidesPerView680, 10)
                            : 1,
                    i =
                        void 0 !== i.slidesPerView480 &&
                        "" !== i.slidesPerView480
                            ? parseInt(i.slidesPerView480, 10)
                            : 1;
                return (
                    c ||
                        (n < 2
                            ? (u = w = v = m = n)
                            : n < 3
                            ? (w = v = m = n)
                            : n < 4
                            ? (v = m = n)
                            : n < 5 && (m = n)),
                    Object.assign(
                        {
                            slidesPerView: n,
                            centeredSlides: a,
                            sliderScroll: s,
                            spaceBetween: o,
                            autoplay: d,
                            loop: r,
                            speed: f,
                            navigation: { nextEl: h, prevEl: g },
                            pagination: {
                                el: p,
                                type: "bullets",
                                clickable: !0,
                            },
                            breakpoints: {
                                0: { slidesPerView: i },
                                481: { slidesPerView: l },
                                681: { slidesPerView: u },
                                769: { slidesPerView: w },
                                1025: { slidesPerView: v },
                                1367: { slidesPerView: m },
                                1441: { slidesPerView: n },
                            },
                        },
                        q.getSliderDatas(e)
                    )
                );
            },
            getSliderDatas: function (e) {
                var t,
                    i = e.data(),
                    o = {};
                for (t in i)
                    i.hasOwnProperty(t) &&
                        "options" !== t &&
                        void 0 !== i[t] &&
                        "" !== i[t] &&
                        (o[t] = i[t]);
                return o;
            },
            getEvents: function (i, e) {
                return {
                    on: {
                        init: function () {
                            var t;
                            i.addClass("qodef-swiper--initialized"),
                                e.sliderScroll &&
                                    ((t = !1),
                                    i.on("mousewheel", function (e) {
                                        e.preventDefault(),
                                            t ||
                                                ((t = !0),
                                                e.deltaY < 0
                                                    ? i[0].swiper.slideNext()
                                                    : i[0].swiper.slidePrev(),
                                                setTimeout(function () {
                                                    t = !1;
                                                }, 1e3));
                                    }));
                        },
                    },
                };
            },
        };
    qodef.qodefSwiper = q;
    var n = {
        init: function (e) {
            (this.holder = o(".qodef-magnific-popup")),
                o.extend(this.holder, e),
                this.holder.length &&
                    this.holder.each(function () {
                        var e = o(this);
                        e.hasClass("qodef-popup-item")
                            ? n.initSingleImagePopup(e)
                            : e.hasClass("qodef-popup-gallery") &&
                              n.initGalleryPopup(e);
                    });
        },
        initSingleImagePopup: function (e) {
            var t = e.data("type");
            e.magnificPopup({
                type: t,
                titleSrc: "title",
                image: { cursor: null },
                closeMarkup:
                    '<button title="%title%" type="button" class="mfp-close">' +
                    qodefGlobal.vars.iconClose +
                    "</button>",
            });
        },
        initGalleryPopup: function (e) {
            var e = e.find(".qodef-popup-item"),
                t = n.generateGalleryItems(e);
            e.each(function (e) {
                o(this).magnificPopup({
                    items: t,
                    gallery: {
                        enabled: !0,
                        arrowMarkup:
                            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' +
                            qodefGlobal.vars.iconArrowLeft +
                            "</button>",
                    },
                    index: e,
                    type: "image",
                    image: { cursor: null },
                    closeMarkup:
                        '<button title="%title%" type="button" class="mfp-close">' +
                        qodefGlobal.vars.iconClose +
                        "</button>",
                });
            });
        },
        generateGalleryItems: function (e) {
            var t = [];
            return (
                e.length &&
                    e.each(function () {
                        var e = o(this),
                            e = {
                                src: e.attr("href"),
                                title: e.attr("title"),
                                type: e.data("type"),
                            };
                        t.push(e);
                    }),
                t
            );
        },
    };
    qodef.qodefMagnificPopup = n;
    var s = {
        items: "",
        init: function (e) {
            (this.holder = o(".qodef-anchor")),
                o.extend(this.holder, e),
                this.holder.length &&
                    ((s.items = this.holder),
                    s.clickTrigger(),
                    o(window).on("load", function () {
                        s.checkAnchorOnScroll(), s.checkAnchorOnLoad();
                    }));
        },
        clickTrigger: function () {
            s.items.on("click", function (e) {
                var t = s.getAnchorItem(this),
                    i = t.attr("href"),
                    o = t.prop("hash").split("#")[1],
                    n = window.location.href,
                    a = -1 < n.indexOf("#") ? n.split("#")[1] : 0;
                (i.indexOf("http") < 0 ||
                    i === n ||
                    (0 !== a &&
                        i.substring(0, i.length - o.length - 1) ===
                            n.substring(0, n.length - a.length - 1)) ||
                    (0 === a &&
                        i.substring(0, i.length - o.length - 1) === n)) &&
                    e.preventDefault(),
                    s.animateScroll(t, o);
            });
        },
        checkAnchorOnLoad: function () {
            var t = window.location.hash.split("#")[1];
            void 0 !== t &&
                "" !== t &&
                s.items.length &&
                s.items.each(function () {
                    var e = s.getAnchorItem(this);
                    -1 < e.attr("href").indexOf(t) && s.animateScroll(e, t);
                });
        },
        checkAnchorOnScroll: function () {
            var e;
            1024 < qodef.windowWidth &&
                (e = o("#qodef-page-inner *[id]")).length &&
                e.each(function () {
                    var e = o(this),
                        t = o('[href*="#' + e.attr("id") + '"]');
                    t.length &&
                        (s.isTargetInView(e) && s.setActiveState(t),
                        o(window).scroll(function () {
                            s.isTargetInView(e)
                                ? s.setActiveState(t)
                                : t.removeClass(s.getItemClasses(t));
                        }));
                });
        },
        isTargetInView: function (e) {
            var t = e[0].getBoundingClientRect(),
                e = window.innerHeight || document.documentElement.clientHeight;
            return !(
                Math.floor(
                    100 - ((0 <= t.top ? 0 : t.top) / -+t.height) * 100
                ) < 20 ||
                Math.floor(100 - ((t.bottom - e) / t.height) * 100) < 20
            );
        },
        getAnchorItem: function (e) {
            return "A" === e.tagName ? o(e) : o(e).children("a");
        },
        animateScroll: function (e, t) {
            var i = "" !== t ? o('[id="' + t + '"]') : "";
            if (i.length) {
                i =
                    i.offset().top -
                    s.getHeaderHeight() -
                    qodefGlobal.vars.adminBarHeight;
                return (
                    s.setActiveState(e),
                    qodef.html
                        .stop()
                        .animate(
                            { scrollTop: Math.round(i) },
                            1e3,
                            function () {
                                history.pushState &&
                                    history.pushState(null, "", "#" + t);
                            }
                        ),
                    !1
                );
            }
        },
        getHeaderHeight: function () {
            var e = 0;
            return (e =
                1024 < qodef.windowWidth &&
                null !== qodefGlobal.vars.headerHeight &&
                "" !== qodefGlobal.vars.headerHeight
                    ? parseInt(qodefGlobal.vars.headerHeight, 10)
                    : e);
        },
        setActiveState: function (e) {
            var t = !e.parent().hasClass("qodef-anchor"),
                i = s.getItemClasses(e);
            s.items.removeClass(i), (t ? e : e.parent()).addClass(i);
        },
        getItemClasses: function (e) {
            return (
                "qodef-anchor--active" +
                (e.parents("#qodef-page-header")
                    ? " current-menu-item current_page_item"
                    : "")
            );
        },
    };
    (qodef.qodefAnchor = s),
        "function" != typeof Object.assign &&
            (Object.assign = function (e) {
                if (null == e)
                    throw new TypeError(
                        "Cannot convert undefined or null to object"
                    );
                e = Object(e);
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    if (null !== i)
                        for (var o in i)
                            Object.prototype.hasOwnProperty.call(i, o) &&
                                (e[o] = i[o]);
                }
                return e;
            });
})(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            n.init();
        }),
            o(window).resize(function () {
                n.init();
            }),
            o(document).on("allsmiles_trigger_get_new_posts", function (e, t) {
                t.hasClass("qodef-blog") && (i.resize(t), n.resize(t));
            });
        var i = {
            init: function () {
                var e = o(".qodef-blog");
                e.length && i.resize(e);
            },
            resize: function (e) {
                e = e
                    .find(".wp-video-shortcode, .wp-audio-shortcode")
                    .not(".mejs-container");
                e.length &&
                    e.each(function () {
                        var e = o(this);
                        "function" == typeof e.mediaelementplayer &&
                            e.mediaelementplayer({
                                videoWidth: "100%",
                                videoHeight: "56.5%",
                            });
                    });
            },
        };
        qodef.qodefReInitMediaElementPostFormats = i;
        var n = {
            init: function () {
                var e = o(".qodef-blog");
                e.length && n.resize(e);
            },
            resize: function (e) {
                e = e.find(".qodef-e-media iframe");
                e.length &&
                    e.each(function () {
                        var e = o(this),
                            t = e.attr("width"),
                            i = e.attr("height"),
                            i = (e.width() / t) * i;
                        e.css("height", i);
                    });
            },
        };
        qodef.qodefResizeIframes = n;
    })(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            s.init();
        }),
            o(document).on("allsmiles_trigger_get_new_posts", function (e, t) {
                t.hasClass("qodef-filter--on") &&
                    t.removeClass("qodef--filter-loading");
            });
        var s = {
            customListQuery: {},
            init: function (e) {
                (this.holder = o(".qodef-filter--on")),
                    o.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = o(this),
                                t = e.find(".qodef-m-filter-item");
                            s.checkCustomListQuery(e.data("options")),
                                s.clickEvent(e, t);
                        });
            },
            checkCustomListQuery: function (e) {
                void 0 !== e.additional_query_args &&
                    void 0 !== e.additional_query_args.tax_query &&
                    (s.customListQuery = e.additional_query_args.tax_query);
            },
            clickEvent: function (t, i) {
                i.on("click", function (e) {
                    e.preventDefault();
                    e = o(this);
                    e.hasClass("qodef--active") ||
                        (t.addClass("qodef--filter-loading"),
                        i.removeClass("qodef--active"),
                        e.addClass("qodef--active"),
                        s.setVisibility(t, e));
                });
            },
            setVisibility: function (e, t) {
                var i = t.data("taxonomy"),
                    o = t.data("filter"),
                    n = "*" === o,
                    a = e.data("options"),
                    t = {},
                    t = n
                        ? s.customListQuery
                        : {
                              0: {
                                  taxonomy: i,
                                  field:
                                      "number" == typeof o ? "term_id" : "slug",
                                  terms: o,
                              },
                          };
                (a.additional_query_args = { tax_query: t }),
                    qodef.body.trigger("allsmiles_trigger_load_more", [e, 1]);
            },
            isMasonryLayout: function (e) {
                return e.hasClass("qodef-layout--masonry");
            },
            hasLoadMore: function (e) {
                return e.hasClass("qodef-pagination-type--load-more");
            },
        };
        qodef.qodefFilter = s;
    })(jQuery),
    (function (r) {
        "use strict";
        r(document).ready(function () {
            t.init();
        }),
            r(document).on("allsmiles_trigger_get_new_posts", function () {
                t.init();
            });
        var t = {
            init: function () {
                var e = r(".qodef-layout--justified-gallery");
                e.length &&
                    e.each(function () {
                        t.setJustifyGallery(r(this));
                    });
            },
            setJustifyGallery: function (e) {
                var t = e.data("options"),
                    i = e.children(".qodef-grid-inner"),
                    o =
                        void 0 !== t.justified_gallery_row_height &&
                        "" !== t.justified_gallery_row_height
                            ? t.justified_gallery_row_height
                            : 150,
                    n =
                        void 0 !== t.justified_gallery_row_height_max &&
                        "" !== t.justified_gallery_row_height_max &&
                        t.justified_gallery_row_height_max,
                    a = void 0 !== t.space_value ? 2 * t.space_value : 0,
                    s =
                        void 0 !== t.justified_gallery_treshold &&
                        "" !== t.justified_gallery_treshold
                            ? t.justified_gallery_treshold
                            : 0.75;
                i.waitForImages(function () {
                    "function" == typeof i.justifiedGallery &&
                        i
                            .justifiedGallery({
                                captions: !1,
                                rowHeight: o,
                                maxRowHeight: n,
                                margins: a,
                                border: 0,
                                lastRow: "nojustify",
                                justifyThreshold: s,
                                selector: ".qodef-grid-item",
                            })
                            .on("jg.complete jg.rowflush", function () {
                                var t = r(this),
                                    i = !1;
                                t.find(".qodef-grid-item")
                                    .addClass("show")
                                    .each(function () {
                                        var e = r(this);
                                        e.height(Math.round(e.height())),
                                            i ||
                                                0 !== e.width() ||
                                                (t.height(
                                                    t.height() - e.height() - a
                                                ),
                                                (i = !0));
                                    });
                            }),
                        e.addClass("qodef--justified-gallery-init");
                });
            },
        };
        qodef.qodefJustifiedGallery = t;
    })(jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function () {
            n.init();
        }),
            t(window).resize(function () {
                n.reInit();
            }),
            t(document).on("allsmiles_trigger_get_new_posts", function (e, t) {
                t.hasClass("qodef-layout--masonry") && n.init();
            });
        var n = {
            init: function (e) {
                (this.holder = t(".qodef-layout--masonry")),
                    t.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            n.createMasonry(t(this));
                        });
            },
            reInit: function (e) {
                (this.holder = t(".qodef-layout--masonry")),
                    t.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = t(this).find(".qodef-grid-inner");
                            "function" == typeof e.isotope &&
                                e.isotope("layout");
                        });
            },
            createMasonry: function (t) {
                var i = t.find(".qodef-grid-inner"),
                    o = i.find(".qodef-grid-item");
                i.waitForImages(function () {
                    var e;
                    "function" == typeof i.isotope &&
                        (i.isotope({
                            layoutMode: "packery",
                            itemSelector: ".qodef-grid-item",
                            percentPosition: !0,
                            masonry: {
                                columnWidth: ".qodef-grid-masonry-sizer",
                                gutter: ".qodef-grid-masonry-gutter",
                            },
                        }),
                        t.hasClass("qodef-items--fixed") &&
                            ((e = n.getFixedImageSize(i, o)),
                            n.setFixedImageProportionSize(i, o, e)),
                        i.isotope("layout")),
                        i.addClass("qodef--masonry-init");
                });
            },
            getFixedImageSize: function (e, t) {
                var i = e.find(".qodef-item--square");
                if (i.length) {
                    var o = i.find("img"),
                        i = o.width(),
                        o = o.height();
                    return i !== o ? o : i;
                }
                return (
                    e.find(".qodef-grid-masonry-sizer").width() -
                    2 * parseInt(t.css("paddingLeft"), 10)
                );
            },
            setFixedImageProportionSize: function (e, t, i) {
                var o = parseInt(t.css("paddingLeft"), 10),
                    n =
                        (e.find(".qodef-item--square"),
                        e.find(".qodef-item--landscape")),
                    a = e.find(".qodef-item--portrait"),
                    s = e.find(".qodef-item--huge-square"),
                    e = qodef.windowWidth <= 680;
                t.css("height", i),
                    n.length && n.css("height", Math.round(i / 2)),
                    a.length && a.css("height", Math.round(2 * (i + o))),
                    e ||
                        (n.length && n.css("height", i),
                        s.length && s.css("height", Math.round(2 * (i + o))));
            },
        };
        qodef.qodefMasonryLayout = n;
    })(jQuery),
    (function (t) {
        "use strict";
        t(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                var e = t("#qodef-page-mobile-header");
                e.length &&
                    (i.initMobileHeaderOpener(e), i.initDropDownMobileMenu());
            },
            initMobileHeaderOpener: function (e) {
                var t,
                    i = e.find(".qodef-mobile-header-opener");
                i.length &&
                    ((t = e.find(".qodef-mobile-header-navigation")),
                    i.on("tap click", function (e) {
                        e.preventDefault(),
                            t.is(":visible")
                                ? (t.slideUp(450),
                                  i.removeClass("qodef--opened"))
                                : (t.slideDown(450),
                                  i.addClass("qodef--opened"));
                    }));
            },
            initDropDownMobileMenu: function () {
                var e = t(
                    ".qodef-mobile-header-navigation .menu-item-has-children > a"
                );
                e.length &&
                    e.each(function () {
                        var o = t(this);
                        o.on("tap click", function (e) {
                            e.preventDefault();
                            var t,
                                i = o.parent(),
                                e = i.siblings(".menu-item-has-children");
                            i.hasClass("menu-item-has-children") &&
                                ((t = i.find("ul.sub-menu").first()).is(
                                    ":visible"
                                )
                                    ? (t.slideUp(450),
                                      i.removeClass("qodef--opened"))
                                    : (i.addClass("qodef--opened"),
                                      (0 === e.length
                                          ? i
                                          : i
                                                .siblings()
                                                .removeClass("qodef--opened")
                                      )
                                          .find(".sub-menu")
                                          .slideUp(400, function () {
                                              t.slideDown(400);
                                          })));
                        });
                    });
            },
        };
    })(jQuery),
    (function (a) {
        a(document).ready(function () {
            e.init(), t.init();
        });
        var e = {
                init: function () {
                    var e = a(
                        ".qodef-header-navigation.qodef-header-navigation-initial > ul > li.qodef-menu-item--narrow.menu-item-has-children"
                    );
                    e.length &&
                        e.each(function () {
                            var e,
                                t = a(this),
                                i = t.offset().left,
                                o = t.find(" > ul"),
                                n = o.outerWidth(),
                                i = a(window).width() - i;
                            0 < t.find("li.menu-item-has-children").length &&
                                (e = i - n),
                                o.removeClass("qodef-drop-down--right"),
                                (i < n || e < n) &&
                                    o.addClass("qodef-drop-down--right");
                        });
                },
            },
            t = {
                init: function () {
                    var e = a(".qodef-header-navigation > ul");
                    e.length &&
                        e.each(function () {
                            var o = a(this),
                                e =
                                    ".current-menu-item, .current-menu-ancestor";
                            o.append('<li class="qodef-main-menu-line"></li>');
                            var t,
                                n = o.find(".qodef-main-menu-line"),
                                i = o.find("> li.menu-item");
                            i.filter(e).length
                                ? ((t = i.filter(e).offset().left),
                                  n.css("width", i.filter(e).outerWidth()))
                                : ((t = i.first().offset().left),
                                  n.css("width", i.first().outerWidth())),
                                n.css("left", t - o.offset().left),
                                i.mouseenter(function () {
                                    var e = a(this),
                                        t = e.outerWidth(),
                                        i = o.offset().left,
                                        i = e.offset().left - i;
                                    n.css("width", t), n.css("left", i);
                                }),
                                o.mouseleave(function () {
                                    i.filter(e).length
                                        ? n.css(
                                              "width",
                                              i.filter(e).outerWidth()
                                          )
                                        : n.css(
                                              "width",
                                              i.first().outerWidth()
                                          ),
                                        n.css("left", t - o.offset().left);
                                });
                        });
                },
            };
    })(jQuery),
    (function (s) {
        "use strict";
        s(document).ready(function () {
            r.init();
        }),
            s(window).scroll(function () {
                r.scroll();
            }),
            s(document).on("allsmiles_trigger_load_more", function (e, t, i) {
                r.triggerLoadMore(t, i);
            });
        var r = {
            init: function (e) {
                (this.holder = s(".qodef-pagination--on")),
                    s.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = s(this);
                            r.initPaginationType(e);
                        });
            },
            scroll: function (e) {
                (this.holder = s(".qodef-pagination--on")),
                    s.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = s(this);
                            e.hasClass(
                                "qodef-pagination-type--infinite-scroll"
                            ) && r.initInfiniteScroll(e);
                        });
            },
            initPaginationType: function (e) {
                e.hasClass("qodef-pagination-type--standard")
                    ? r.initStandard(e)
                    : e.hasClass("qodef-pagination-type--load-more")
                    ? r.initLoadMore(e)
                    : e.hasClass("qodef-pagination-type--infinite-scroll") &&
                      r.initInfiniteScroll(e);
            },
            initStandard: function (i, e) {
                var t,
                    o = i.find(".qodef-m-pagination-items");
                o.length &&
                    ((t = i.data("options")),
                    (e = void 0 !== e && "" !== e ? parseInt(e, 10) : 1),
                    r.changeStandardState(i, t.max_pages_num, e),
                    o.children().each(function () {
                        var t = s(this);
                        t.on("click", function (e) {
                            e.preventDefault(),
                                t.hasClass("qodef--active") ||
                                    r.getNewPosts(i, t.data("paged"));
                        });
                    }));
            },
            changeStandardState: function (e, t, i) {
                var o, n, a;
                e.hasClass("qodef-pagination-type--standard") &&
                    ((n = (o = e.find(".qodef-m-pagination-items")).children(
                        ".qodef--number"
                    )),
                    (a = o.children(".qodef--prev")),
                    (e = o.children(".qodef--next")),
                    r.standardPaginationVisibility(o, t),
                    n
                        .removeClass("qodef--active")
                        .eq(i - 1)
                        .addClass("qodef--active"),
                    a.data("paged", i - 1),
                    1 < i
                        ? (a.show(400, function () {
                              s(this).css("display", "flex");
                          }),
                          a.next().removeClass("qodef-prev--hidden"))
                        : (a.hide(), a.next().addClass("qodef-prev--hidden")),
                    e.data("paged", i + 1),
                    i === t
                        ? e.hide()
                        : e.show(400, function () {
                              s(this).css("display", "flex");
                          }));
            },
            standardPaginationVisibility: function (e, t) {
                1 === t ? e.hide() : 1 < t && !e.is(":visible") && e.show();
            },
            changeStandardHtml: function (e, t, i, o) {
                var n, a;
                e.hasClass("qodef-pagination-type--standard") &&
                    ((n = e.find(".qodef-m-pagination")),
                    (a = e.find(".qodef-m-pagination-spinner")),
                    r.standardPaginationVisibility(n, t),
                    n.remove(),
                    a.remove(),
                    e.append(o),
                    r.initStandard(e, i));
            },
            triggerStandardScrollAnimation: function (e) {
                e.hasClass("qodef-pagination-type--standard") &&
                    s("html, body").animate(
                        { scrollTop: e.offset().top - 100 },
                        500
                    );
            },
            initLoadMore: function (t) {
                t.find(".qodef-load-more-button").on("click", function (e) {
                    e.preventDefault(), r.getNewPosts(t);
                });
            },
            triggerLoadMore: function (e, t) {
                r.getNewPosts(e, t);
            },
            loadMoreButtonVisibility: function (e, t) {
                e.hasClass("qodef-pagination-type--load-more") &&
                    (t.next_page > t.max_pages_num || 1 === t.max_pages_num
                        ? e.find(".qodef-load-more-button").hide()
                        : 1 < t.max_pages_num &&
                          t.next_page <= t.max_pages_num &&
                          e.find(".qodef-load-more-button").show());
            },
            initInfiniteScroll: function (e) {
                var t = e.outerHeight() + e.offset().top,
                    i = qodef.scroll + qodef.windowHeight,
                    o = e.data("options");
                !e.hasClass("qodef--loading") &&
                    t < i &&
                    o.max_pages_num >= o.next_page &&
                    r.getNewPosts(e);
            },
            getNewPosts: function (t, i) {
                t.addClass("qodef--loading");
                var o = t.children(".qodef-grid-inner"),
                    n = t.data("options");
                r.setNextPageValue(n, i, !1),
                    s.ajax({
                        type: "GET",
                        url:
                            qodefGlobal.vars.restUrl +
                            qodefGlobal.vars.paginationRestRoute,
                        data: { options: n },
                        beforeSend: function (e) {
                            e.setRequestHeader(
                                "X-WP-Nonce",
                                qodefGlobal.vars.restNonce
                            );
                        },
                        success: function (e) {
                            "success" === e.status
                                ? (n.max_pages_num !== e.data.max_pages_num &&
                                      (n.max_pages_num = e.data.max_pages_num),
                                  r.setNextPageValue(n, i, !0),
                                  r.changeStandardHtml(
                                      t,
                                      n.max_pages_num,
                                      i,
                                      e.data.pagination_html
                                  ),
                                  o.waitForImages(function () {
                                      r.addPosts(o, e.data.html, i),
                                          r.reInitMasonryPosts(t, o),
                                          setTimeout(function () {
                                              qodef.body.trigger(
                                                  "allsmiles_trigger_get_new_posts",
                                                  [t, e.data, i]
                                              );
                                          }, 300);
                                  }),
                                  r.triggerStandardScrollAnimation(t),
                                  r.loadMoreButtonVisibility(t, n))
                                : console.log(e.message);
                        },
                        complete: function () {
                            t.removeClass("qodef--loading");
                        },
                    });
            },
            setNextPageValue: function (e, t, i) {
                void 0 === t || "" === t || i
                    ? i && (e.next_page = parseInt(e.next_page, 10) + 1)
                    : (e.next_page = t);
            },
            addPosts: function (e, t, i) {
                void 0 !== i && "" !== i ? e.html(t) : e.append(t);
            },
            reInitMasonryPosts: function (e, t) {
                e.hasClass("qodef-layout--masonry") &&
                    (t
                        .isotope("reloadItems")
                        .isotope({ sortBy: "original-order" }),
                    setTimeout(function () {
                        t.isotope("layout");
                    }, 200));
            },
        };
        qodef.qodefPagination = r;
    })(jQuery),
    (function (d) {
        "use strict";
        d(document).ready(function () {
            i.init(), e.init(), t.init(), o.init();
        });
        var i = {
                init: function (e) {
                    (this.holder = []),
                        this.holder.push({
                            holder: d(
                                "#qodef-woo-page .woocommerce-ordering select"
                            ),
                            options: { minimumResultsForSearch: 1 / 0 },
                        }),
                        this.holder.push({
                            holder: d("#qodef-woo-page .variations select"),
                            options: { minimumResultsForSearch: 1 / 0 },
                        }),
                        this.holder.push({
                            holder: d("#qodef-woo-page #calc_shipping_country"),
                            options: {},
                        }),
                        this.holder.push({
                            holder: d(
                                "#qodef-woo-page .shipping select#calc_shipping_state"
                            ),
                            options: {},
                        }),
                        this.holder.push({
                            holder: d(".widget.widget_archive select"),
                            options: {},
                        }),
                        this.holder.push({
                            holder: d(".widget.widget_categories select"),
                            options: {},
                        }),
                        this.holder.push({
                            holder: d(".widget.widget_text select"),
                            options: {},
                        }),
                        d.extend(this.holder, e),
                        "object" == typeof this.holder &&
                            d.each(this.holder, function (e, t) {
                                i.createSelect2(t.holder, t.options);
                            });
                },
                createSelect2: function (e, t) {
                    "function" == typeof e.select2 && e.select2(t);
                },
            },
            e = {
                init: function () {
                    d(document).on(
                        "click",
                        ".qodef-quantity-minus, .qodef-quantity-plus",
                        function (e) {
                            e.stopPropagation();
                            var t,
                                i = d(this),
                                o = i.siblings(".qodef-quantity-input"),
                                n = parseFloat(o.data("step")),
                                a = parseFloat(o.data("max")),
                                s = parseFloat(o.data("min")),
                                r = !1,
                                e =
                                    "function" == typeof Number.isNaN &&
                                    Number.isNaN(parseFloat(o.val()))
                                        ? s
                                        : parseFloat(o.val());
                            (r = i.hasClass("qodef-quantity-minus") ? !0 : r)
                                ? s <= (t = e - n)
                                    ? o.val(t)
                                    : o.val(s)
                                : ((t = e + n),
                                  void 0 !== a && a <= t ? o.val(a) : o.val(t)),
                                o.trigger("change");
                        }
                    );
                },
            },
            t = {
                init: function () {
                    var e;
                    "object" != typeof qodef.qodefMagnificPopup ||
                        ((e = d(
                            ".qodef--single.qodef-magnific-popup.qodef-popup-gallery .woocommerce-product-gallery__image"
                        )).length &&
                            (e.each(function () {
                                d(this)
                                    .children("a")
                                    .attr("data-type", "image")
                                    .addClass("qodef-popup-item");
                            }),
                            qodef.qodefMagnificPopup.init()));
                },
            };
        qodef.qodefWooMagnificPopup = t;
        var o = {
            init: function () {
                var e = d(".woocommerce-tabs > ul");
                e.length &&
                    e.each(function () {
                        var n = d(this),
                            a = ".active";
                        n.append('<li class="qodef-product-tabs-line"></li>');
                        var e,
                            s = n.find(".qodef-product-tabs-line"),
                            r = n.find("> li:not(.qodef-product-tabs-line)");
                        r.filter(a).length
                            ? ((e = r.filter(a).offset().left),
                              s.css("width", r.filter(a).outerWidth()))
                            : ((e = r.first().offset().left),
                              s.css("width", r.first().outerWidth())),
                            s.css("left", e - n.offset().left),
                            r.mouseenter(function () {
                                var e = d(this),
                                    t = e.outerWidth(),
                                    i = n.offset().left,
                                    i = e.offset().left - i;
                                s.css("width", t), s.css("left", i);
                            }),
                            r.mouseleave(function () {
                                var e = d(this),
                                    t = e.outerWidth(),
                                    i = n.offset().left,
                                    o = e.offset().left - i;
                                e.hasClass(a)
                                    ? (s.css("width", t), s.css("left", o))
                                    : ((o = (t = r.filter(a)).outerWidth()),
                                      (i = t.offset().left - i),
                                      s.css("width", o),
                                      s.css("left", i));
                            });
                    });
            },
        };
    })(jQuery);
