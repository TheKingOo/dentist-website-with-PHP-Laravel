!(function (t) {
    "use strict";
    "object" != typeof qodef && (window.qodef = {}),
        (window.qodefCore = {}),
        (qodefCore.shortcodes = {}),
        (qodefCore.listShortcodesScripts = {
            qodefSwiper: qodef.qodefSwiper,
            qodefPagination: qodef.qodefPagination,
            qodefFilter: qodef.qodefFilter,
            qodefMasonryLayout: qodef.qodefMasonryLayout,
            qodefJustifiedGallery: qodef.qodefJustifiedGallery,
        }),
        (qodefCore.body = t("body")),
        (qodefCore.html = t("html")),
        (qodefCore.windowWidth = t(window).width()),
        (qodefCore.windowHeight = t(window).height()),
        (qodefCore.scroll = 0),
        t(document).ready(function () {
            (qodefCore.scroll = t(window).scrollTop()), e.init();
        }),
        t(window).resize(function () {
            (qodefCore.windowWidth = t(window).width()),
                (qodefCore.windowHeight = t(window).height());
        }),
        t(window).scroll(function () {
            qodefCore.scroll = t(window).scrollTop();
        });
    var n = {
        disable: function () {
            window.addEventListener &&
                window.addEventListener("wheel", n.preventDefaultValue, {
                    passive: !1,
                }),
                (document.onkeydown = n.keyDown);
        },
        enable: function () {
            window.removeEventListener &&
                window.removeEventListener("wheel", n.preventDefaultValue, {
                    passive: !1,
                }),
                (window.onmousewheel =
                    document.onmousewheel =
                    document.onkeydown =
                        null);
        },
        preventDefaultValue: function (e) {
            (e = e || window.event).preventDefault && e.preventDefault(),
                (e.returnValue = !1);
        },
        keyDown: function (e) {
            for (var o = [37, 38, 39, 40], t = o.length; t--; )
                if (e.keyCode === o[t]) return void n.preventDefaultValue(e);
        },
    };
    qodefCore.qodefScroll = n;
    var o = {
        init: function (e) {
            e.length && o.qodefInitScroll(e);
        },
        qodefInitScroll: function (e) {
            var o = new PerfectScrollbar(e[0], {
                wheelSpeed: 0.6,
                suppressScrollX: !0,
            });
            t(window).resize(function () {
                o.update();
            });
        },
    };
    qodefCore.qodefPerfectScrollbar = o;
    var e = {
        init: function () {
            var e;
            (this.holder = t("#allsmiles-core-page-inline-style")),
                !this.holder.length ||
                    ((e = this.holder.data("style")).length &&
                        t("head").append(
                            '<style type="text/css">' + e + "</style>"
                        ));
        },
    };
})(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            t.init();
        });
        var t = {
            init: function () {
                var e;
                (this.holder = o("#qodef-age-verification-modal")),
                    !this.holder.length ||
                        ((e = this.holder.find(".qodef-m-content-prevent"))
                            .length &&
                            e
                                .find(".qodef-prevent--yes")
                                .on("click", function () {
                                    var e = new Date();
                                    e.setTime(e.getTime() + 6048e5);
                                    e = "expires=" + e.toUTCString();
                                    (document.cookie =
                                        "disabledAgeVerification=Yes;" +
                                        e +
                                        ";path=/"),
                                        t.handleClassAndScroll("remove");
                                }));
            },
            handleClassAndScroll: function (e) {
                "remove" === e &&
                    (qodefCore.body.removeClass(
                        "qodef-age-verification--opened"
                    ),
                    qodefCore.qodefScroll.enable()),
                    "add" === e &&
                        (qodefCore.body.addClass(
                            "qodef-age-verification--opened"
                        ),
                        qodefCore.qodefScroll.disable());
            },
        };
    })(jQuery),
    (function (a) {
        "use strict";
        a(document).ready(function () {
            d.init();
        });
        var d = {
            init: function () {
                (this.holder = a("#qodef-back-to-top")),
                    this.holder.length &&
                        (this.holder.on("click", function (e) {
                            e.preventDefault(), d.animateScrollToTop();
                        }),
                        d.showHideBackToTop());
            },
            animateScrollToTop: function () {
                var o,
                    t = qodef.scroll,
                    n = qodef.scroll,
                    i = function () {
                        var e;
                        0 !== n &&
                            (n < 1e-4 && (n = 0),
                            (e = d.easingFunction((t - n) / t)),
                            a("html, body").scrollTop(t - (t - n) * e),
                            (n *= 0.9),
                            (o = requestAnimationFrame(i)));
                    };
                i(),
                    a(window).one("wheel touchstart", function () {
                        cancelAnimationFrame(o);
                    });
            },
            easingFunction: function (e) {
                return 0 == e ? 0 : Math.pow(1024, e - 1);
            },
            showHideBackToTop: function () {
                a(window).scroll(function () {
                    var e = a(this),
                        o = e.scrollTop(),
                        e = e.height(),
                        e = 0 < o ? o + e / 2 : 1;
                    e < 1e3 ? d.addClass("off") : d.addClass("on");
                });
            },
            addClass: function (e) {
                this.holder.removeClass("qodef--off qodef--on"),
                    "on" === e
                        ? this.holder.addClass("qodef--on")
                        : this.holder.addClass("qodef--off");
            },
        };
    })(jQuery),
    (function (t) {
        "use strict";
        t(window).on("load", function () {
            e.init();
        });
        var e = {
            holder: "",
            init: function () {
                (this.holder = t("#qodef-page-footer.qodef--uncover")),
                    this.holder.length &&
                        !qodefCore.html.hasClass("touchevents") &&
                        (e.addClass(),
                        e.setHeight(this.holder),
                        t(window).resize(function () {
                            e.setHeight(e.holder);
                        }));
            },
            setHeight: function (e) {
                e.css("height", "auto");
                var o = e.outerHeight();
                0 < o &&
                    (t("#qodef-page-outer").css({
                        "margin-bottom": o,
                        "background-color":
                            qodefCore.body.css("backgroundColor"),
                    }),
                    e.css("height", o));
            },
            addClass: function () {
                qodefCore.body.addClass("qodef-page-footer--uncover");
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        n(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                var t = n("a.qodef-fullscreen-menu-opener"),
                    e = n("#qodef-fullscreen-area nav ul li a");
                t.on("click", function (e) {
                    e.preventDefault();
                    var o = n(this);
                    qodefCore.body.hasClass("qodef-fullscreen-menu--opened")
                        ? i.closeFullscreen(o)
                        : (i.openFullscreen(o),
                          n(document).keyup(function (e) {
                              27 === e.keyCode && i.closeFullscreen(o);
                          }));
                }),
                    e.on("tap click", function (e) {
                        var o = n(this);
                        o.parent().hasClass("menu-item-has-children")
                            ? (e.preventDefault(), i.clickItemWithChild(o))
                            : "http://#" !== o.attr("href") &&
                              "#" !== o.attr("href") &&
                              i.closeFullscreen(t);
                    });
            },
            openFullscreen: function (e) {
                e.addClass("qodef--opened"),
                    qodefCore.body
                        .removeClass("qodef-fullscreen-menu-animate--out")
                        .addClass(
                            "qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in"
                        ),
                    qodefCore.qodefScroll.disable();
            },
            closeFullscreen: function (e) {
                e.removeClass("qodef--opened"),
                    qodefCore.body
                        .removeClass(
                            "qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in"
                        )
                        .addClass("qodef-fullscreen-menu-animate--out"),
                    qodefCore.qodefScroll.enable(),
                    n("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200);
            },
            clickItemWithChild: function (e) {
                var o = e.parent(),
                    e = o.find(".sub-menu").first();
                e.is(":visible")
                    ? (e.slideUp(300), o.removeClass("qodef--opened"))
                    : (e.slideDown(300),
                      o
                          .addClass("qodef--opened")
                          .siblings()
                          .find(".sub-menu")
                          .slideUp(400));
            },
        };
    })(jQuery),
    (function () {
        "use strict";
        jQuery(document).ready(function () {
            e.init();
        });
        var e = {
            appearanceType: function () {
                return -1 !==
                    qodefCore.body
                        .attr("class")
                        .indexOf("qodef-header-appearance--")
                    ? qodefCore.body
                          .attr("class")
                          .match(/qodef-header-appearance--([\w]+)/)[1]
                    : "";
            },
            init: function () {
                var e = this.appearanceType();
                "" !== e && "none" !== e && qodefCore[e + "HeaderAppearance"]();
            },
        };
    })(),
    (function (n) {
        "use strict";
        n(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                var e, o, t;
                qodefCore.body.hasClass(
                    "qodef-mobile-header-appearance--sticky"
                ) &&
                    ((e = qodefCore.scroll),
                    (o =
                        qodefGlobal.vars.mobileHeaderHeight +
                        qodefGlobal.vars.adminBarHeight),
                    (t = n("#qodef-page-outer")),
                    i.showHideMobileHeader(e, o, t),
                    n(window).scroll(function () {
                        i.showHideMobileHeader(e, o, t), (e = qodefCore.scroll);
                    }),
                    n(window).resize(function () {
                        t.css("padding-top", 0),
                            i.showHideMobileHeader(e, o, t);
                    }));
            },
            showHideMobileHeader: function (e, o, t) {
                qodefCore.windowWidth <= 1024 &&
                    (qodefCore.scroll > 2 * o
                        ? (qodefCore.body.addClass(
                              "qodef-mobile-header--sticky"
                          ),
                          setTimeout(function () {
                              qodefCore.body.addClass(
                                  "qodef-mobile-header--sticky-animation"
                              );
                          }, 300),
                          t.css(
                              "padding-top",
                              qodefGlobal.vars.mobileHeaderHeight
                          ))
                        : (qodefCore.body.removeClass(
                              "qodef-mobile-header--sticky"
                          ),
                          setTimeout(function () {
                              qodefCore.body.removeClass(
                                  "qodef-mobile-header--sticky-animation"
                              );
                          }, 300),
                          t.css("padding-top", 0)),
                    (qodefCore.scroll > e && qodefCore.scroll > o) ||
                    qodefCore.scroll < 3 * o
                        ? qodefCore.body.removeClass(
                              "qodef-mobile-header--sticky-display"
                          )
                        : qodefCore.body.addClass(
                              "qodef-mobile-header--sticky-display"
                          ));
            },
        };
    })(jQuery),
    (function (r) {
        "use strict";
        r(document).ready(function () {
            e.init();
        });
        var e = {
            init: function () {
                e.dropdownBehavior(),
                    e.wideDropdownPosition(),
                    e.dropdownPosition();
            },
            dropdownBehavior: function () {
                r(".qodef-header-navigation > ul > li").each(function () {
                    var t = r(this);
                    t.find(".qodef-drop-down-second").length &&
                        t.waitForImages(function () {
                            var e = t.find(".qodef-drop-down-second"),
                                o = e
                                    .find(".qodef-drop-down-second-inner ul")
                                    .outerHeight();
                            navigator.userAgent.match(/(iPod|iPhone|iPad)/)
                                ? t
                                      .on("touchstart mouseenter", function () {
                                          e.css({
                                              height: o,
                                              overflow: "visible",
                                              visibility: "visible",
                                              opacity: "1",
                                          });
                                      })
                                      .on("mouseleave", function () {
                                          e.css({
                                              height: "0px",
                                              overflow: "hidden",
                                              visibility: "hidden",
                                              opacity: "0",
                                          });
                                      })
                                : qodefCore.body.hasClass(
                                      "qodef-drop-down-second--animate-height"
                                  )
                                ? t.hoverIntent({
                                      interval: 0,
                                      over: function () {
                                          setTimeout(function () {
                                              e
                                                  .addClass(
                                                      "qodef-drop-down--start"
                                                  )
                                                  .css({
                                                      visibility: "visible",
                                                      height: "0",
                                                      opacity: "1",
                                                  }),
                                                  e
                                                      .stop()
                                                      .animate(
                                                          { height: o },
                                                          400,
                                                          "easeInOutQuint",
                                                          function () {
                                                              e.css(
                                                                  "overflow",
                                                                  "visible"
                                                              );
                                                          }
                                                      );
                                          }, 100);
                                      },
                                      timeout: 100,
                                      out: function () {
                                          e
                                              .stop()
                                              .animate(
                                                  { height: "0", opacity: 0 },
                                                  100,
                                                  function () {
                                                      e.css({
                                                          overflow: "hidden",
                                                          visibility: "hidden",
                                                      });
                                                  }
                                              ),
                                              e.removeClass(
                                                  "qodef-drop-down--start"
                                              );
                                      },
                                  })
                                : t.hoverIntent({
                                      interval: 0,
                                      over: function () {
                                          setTimeout(function () {
                                              e.addClass(
                                                  "qodef-drop-down--start"
                                              )
                                                  .stop()
                                                  .css({ height: o });
                                          }, 150);
                                      },
                                      timeout: 150,
                                      out: function () {
                                          e.stop()
                                              .css({ height: "0" })
                                              .removeClass(
                                                  "qodef-drop-down--start"
                                              );
                                      },
                                  });
                        });
                });
            },
            wideDropdownPosition: function () {
                var e = r(
                    ".qodef-header-navigation > ul > li.qodef-menu-item--wide"
                );
                e.length &&
                    e.each(function () {
                        var e,
                            o,
                            t = r(this).find(".qodef-drop-down-second");
                        t.length &&
                            (t.css("left", 0),
                            (e = t.offset().left),
                            qodefCore.body.hasClass("qodef--boxed")
                                ? ((o = r(
                                      ".qodef--boxed #qodef-page-wrapper"
                                  ).outerWidth()),
                                  (e -= (qodefCore.windowWidth - o) / 2),
                                  t.css({ left: -e, width: o }))
                                : qodefCore.body.hasClass(
                                      "qodef-drop-down-second--full-width"
                                  )
                                ? t.css({ left: -e })
                                : t.css({
                                      left:
                                          -e +
                                          (qodefCore.windowWidth - t.width()) /
                                              2,
                                  }));
                    });
            },
            dropdownPosition: function () {
                var e = r(
                    ".qodef-header-navigation > ul > li.qodef-menu-item--narrow.menu-item-has-children"
                );
                e.length &&
                    e.each(function () {
                        var e,
                            o = r(this),
                            t = o.offset().left,
                            n = o.find(".qodef-drop-down-second"),
                            i = n.find(".qodef-drop-down-second-inner ul"),
                            a = i.outerWidth(),
                            d = r(window).width() - t;
                        qodef.body.hasClass("qodef--boxed") &&
                            (d =
                                r(
                                    ".qodef--boxed #qodef-page-wrapper"
                                ).outerWidth() - t),
                            0 < o.find("li.menu-item-has-children").length &&
                                (e = d - a),
                            n.removeClass("qodef-drop-down--right"),
                            i.removeClass("qodef-drop-down--right"),
                            (d < a || e < a) &&
                                (n.addClass("qodef-drop-down--right"),
                                i.addClass("qodef-drop-down--right"));
                    });
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        n(window).on("load", function () {
            i.init();
        });
        var i = {
            init: function (e) {
                (this.$sections = n(".qodef-parallax")),
                    n.extend(this.$sections, e);
                e =
                    !qodefCore.html.hasClass("touchevents") &&
                    !qodefCore.body.hasClass("qodef-browser--edge") &&
                    !qodefCore.body.hasClass("qodef-browser--ms-explorer");
                this.$sections.length &&
                    e &&
                    this.$sections.each(function () {
                        i.ready(n(this));
                    });
            },
            ready: function (e) {
                (e.$imgHolder = e.find(".qodef-parallax-img-holder")),
                    (e.$imgWrapper = e.find(".qodef-parallax-img-wrapper")),
                    (e.$img = e.find("img.qodef-parallax-img"));
                var o = e.height(),
                    t = e.$imgWrapper.height();
                (e.movement = (100 * (t - o)) / o / 2),
                    (e.buffer = window.pageYOffset),
                    (e.scrollBuffer = null),
                    requestAnimationFrame(function () {
                        e.$imgHolder.animate({ opacity: 1 }, 100),
                            i.calc(e),
                            i.loop(e);
                    }),
                    n(window).on("resize", function () {
                        i.calc(e);
                    });
            },
            calc: function (e) {
                var o = e.$imgWrapper.height(),
                    t = e.$imgWrapper.width();
                e.$img.width() < t &&
                    e.$img.css({ width: "100%", height: "auto" }),
                    e.$img.height() < o &&
                        e.$img.css({
                            height: "100%",
                            width: "auto",
                            "max-width": "unset",
                        });
            },
            loop: function (e) {
                if (e.scrollBuffer === Math.round(window.pageYOffset))
                    return (
                        requestAnimationFrame(function () {
                            i.loop(e);
                        }),
                        !1
                    );
                e.scrollBuffer = Math.round(window.pageYOffset);
                var o = window.outerHeight,
                    t = e.offset().top,
                    n = e.height();
                e.scrollBuffer + 1.2 * o > t &&
                    e.scrollBuffer < t + n &&
                    ((n = (
                        (o = (
                            Math.abs(e.scrollBuffer + o - t) /
                            (o + n)
                        ).toFixed(4)) * e.movement
                    ).toFixed(4)),
                    e.buffer !== o &&
                        e.$imgWrapper.css(
                            "transform",
                            "translate3d(0," + n + "%, 0)"
                        ),
                    (e.buffer = o)),
                    requestAnimationFrame(function () {
                        i.loop(e);
                    });
            },
        };
        qodefCore.qodefParallaxBackground = i;
    })(jQuery),
    (function (a) {
        "use strict";
        a(document).ready(function () {
            e.init();
        });
        var e = {
            init: function () {
                function i(e, o) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        t < o
                            ? a(n).addClass("active")
                            : a(n).removeClass("active");
                    }
                }
                var e = a("#qodef-page-comments-form .qodef-rating-inner");
                e.each(function () {
                    var e = a(this),
                        o = e.find(".qodef-rating"),
                        t = o.val(),
                        n = e.find(".qodef-star-rating");
                    i(n, t),
                        n.on("click", function () {
                            o.val(a(this).data("value")).trigger("change");
                        }),
                        o.change(function () {
                            (t = o.val()), i(n, t);
                        });
                });
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        n(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                var e = n("a.qodef-side-area-opener"),
                    o = n("#qodef-side-area-close"),
                    t = n("#qodef-side-area");
                i.openerHoverColor(e),
                    e.on("click", function (e) {
                        e.preventDefault(),
                            qodefCore.body.hasClass("qodef-side-area--opened")
                                ? i.closeSideArea()
                                : (i.openSideArea(),
                                  n(document).keyup(function (e) {
                                      27 === e.keyCode && i.closeSideArea();
                                  }));
                    }),
                    o.on("click", function (e) {
                        e.preventDefault(), i.closeSideArea();
                    }),
                    t.length &&
                        "object" == typeof qodefCore.qodefPerfectScrollbar &&
                        qodefCore.qodefPerfectScrollbar.init(t);
            },
            openSideArea: function () {
                var e = n("#qodef-page-wrapper"),
                    o = n(window).scrollTop();
                n(".qodef-side-area-cover").remove(),
                    e.prepend('<div class="qodef-side-area-cover"/>'),
                    qodefCore.body
                        .removeClass("qodef-side-area-animate--out")
                        .addClass(
                            "qodef-side-area--opened qodef-side-area-animate--in"
                        ),
                    n(".qodef-side-area-cover").on("click", function (e) {
                        e.preventDefault(), i.closeSideArea();
                    }),
                    n(window).scroll(function () {
                        400 < Math.abs(qodefCore.scroll - o) &&
                            i.closeSideArea();
                    });
            },
            closeSideArea: function () {
                qodefCore.body
                    .removeClass(
                        "qodef-side-area--opened qodef-side-area-animate--in"
                    )
                    .addClass("qodef-side-area-animate--out");
            },
            openerHoverColor: function (e) {
                var o, t;
                void 0 !== e.data("hover-color") &&
                    ((o = e.data("hover-color")),
                    (t = e.css("color")),
                    e
                        .on("mouseenter", function () {
                            e.css("color", o);
                        })
                        .on("mouseleave", function () {
                            e.css("color", t);
                        }));
            },
        };
    })(jQuery),
    (function (i) {
        "use strict";
        i(document).ready(function () {
            t.init();
        }),
            i(window).on("elementor/frontend/init", function () {
                var e = Boolean(elementorFrontend.isEditMode());
                e && t.init(e);
            });
        var t = {
            init: function (e) {
                (this.holder = i(
                    "#qodef-page-spinner:not(.qodef-layout--allsmiles)"
                )),
                    this.holder.length &&
                        (t.animateSpinner(this.holder, e),
                        t.fadeOutAnimation());
            },
            animateSpinner: function (e, o) {
                i(window).on("load", function () {
                    t.fadeOutLoader(e);
                }),
                    o && t.fadeOutLoader(e);
            },
            fadeOutLoader: function (o, t, e, n) {
                (t = t || 600),
                    (n = n || "swing"),
                    o.delay((e = e || 0)).fadeOut(t, n),
                    i(window).on("bind", "pageshow", function (e) {
                        e.originalEvent.persisted && o.fadeOut(t, n);
                    });
            },
            fadeOutAnimation: function () {
                var t, e;
                qodefCore.body.hasClass("qodef-spinner--fade-out") &&
                    ((t = i("#qodef-page-wrapper")),
                    (e = i("a")),
                    window.addEventListener("pageshow", function (e) {
                        (e.persisted ||
                            (void 0 !== window.performance &&
                                2 === window.performance.navigation.type)) &&
                            !t.is(":visible") &&
                            t.show();
                    }),
                    e.on("click", function (e) {
                        var o = i(this);
                        1 === e.which &&
                            0 <= o.attr("href").indexOf(window.location.host) &&
                            !o.hasClass("remove") &&
                            o.parent(".product-remove").length <= 0 &&
                            o.parents(".woocommerce-product-gallery__image")
                                .length <= 0 &&
                            void 0 === o.data("rel") &&
                            void 0 === o.attr("rel") &&
                            !o.hasClass("lightbox-active") &&
                            (void 0 === o.attr("target") ||
                                "_self" === o.attr("target")) &&
                            o.attr("href").split("#")[0] !==
                                window.location.href.split("#")[0] &&
                            (e.preventDefault(),
                            t.fadeOut(600, "easeOutSine", function () {
                                window.location = o.attr("href");
                            }));
                    }));
            },
        };
    })(jQuery),
    (function (d) {
        "use strict";
        d(window).on("load", function () {
            r.init();
        });
        var r = {
            init: function () {
                var e, o, t, n, i, a;
                (this.holder = d("#qodef-subscribe-popup-modal")),
                    this.holder.length &&
                        ((e = this.holder.find(".qodef-sp-prevent")),
                        (o = d(".qodef-sp-close")),
                        (t = "no"),
                        e.length &&
                            ((n = this.holder.hasClass(
                                "qodef-sp-prevent-cookies"
                            )),
                            (i = e.find(".qodef-sp-prevent-input")),
                            (a = i.data("value")),
                            n
                                ? ((t = localStorage.getItem("disabledPopup")),
                                  sessionStorage.removeItem("disabledPopup"))
                                : ((t =
                                      sessionStorage.getItem("disabledPopup")),
                                  localStorage.removeItem("disabledPopup")),
                            e.children().on("click", function (e) {
                                "yes" !== a
                                    ? ((a = "yes"),
                                      i
                                          .addClass("qodef-sp-prevent-clicked")
                                          .data("value", "yes"))
                                    : ((a = "no"),
                                      i
                                          .removeClass(
                                              "qodef-sp-prevent-clicked"
                                          )
                                          .data("value", "no")),
                                    "yes" === a
                                        ? (n
                                              ? localStorage
                                              : sessionStorage
                                          ).setItem("disabledPopup", "yes")
                                        : (n
                                              ? localStorage
                                              : sessionStorage
                                          ).setItem("disabledPopup", "no");
                            })),
                        "yes" !== t &&
                            (qodefCore.body.hasClass("qodef-sp-opened")
                                ? r.handleClassAndScroll("remove")
                                : r.handleClassAndScroll("add"),
                            o.on("click", function (e) {
                                e.preventDefault(),
                                    r.handleClassAndScroll("remove");
                            }),
                            d(document).keyup(function (e) {
                                27 === e.keyCode &&
                                    r.handleClassAndScroll("remove");
                            })));
            },
            handleClassAndScroll: function (e) {
                "remove" === e &&
                    (qodefCore.body.removeClass("qodef-sp-opened"),
                    qodefCore.qodefScroll.enable()),
                    "add" === e &&
                        (qodefCore.body.addClass("qodef-sp-opened"),
                        qodefCore.qodefScroll.disable());
            },
        };
    })(jQuery),
    (function (a) {
        "use strict";
        a(document).ready(function () {
            e.initBookingFormSingle();
            date.initBookingFormSingle();
        });
        var e = {
                initBookingFormSingle: function () {
                    a(".qodef-e-booking.qodef-book-now").each(function () {
                        a(this).on("click", function (e) {
                            e.preventDefault(),
                                a(".qodef-booking-form-single").slideToggle();
                        });
                    }),
                        a(".qodef-booking-form-single").each(function (e) {
                            var o = a(this),
                                t = o.find("form"),
                                n = t.find(".qodef-bf-form-response-holder"),
                                i = o.data("workdays");
                            d.initField(o.find(".qodef-bf-input-date"), {
                                workdays: i,
                            }),
                                r.initField(o.find(".qodef-bf-input-time")),
                                t.submit(function (e) {
                                    e.preventDefault();
                                    e = {
                                        member: t
                                            .find("input.qodef-bf-input-member")
                                            .val(),
                                        name: t
                                            .find("input.qodef-bf-input-name")
                                            .val(),
                                        contact: t
                                            .find(
                                                "input.qodef-bf-input-contact"
                                            )
                                            .val(),
                                        date: t
                                            .find("input.qodef-bf-input-date")
                                            .val(),
                                        time: t
                                            .find("select.qodef-bf-input-time")
                                            .val(),
                                    };
                                    a.ajax({
                                        type: "POST",
                                        url:
                                            qodefGlobal.vars.restUrl +
                                            qodefGlobal.vars
                                                .teamBookingRestRoute,
                                        data: { options: e },
                                        beforeSend: function (e) {
                                            e.setRequestHeader(
                                                "X-WP-Nonce",
                                                qodefGlobal.vars
                                                    .teamBookingNonce
                                            );
                                        },
                                        success: function (e) {
                                            e.success &&
                                                n.addClass("qodef-success"),
                                                n.html(e.data).slideDown(300),
                                                setTimeout(function () {
                                                    n.slideUp(300, function () {
                                                        n.html("").removeClass(
                                                            "qodef-success"
                                                        );
                                                    });
                                                }, 3e3);
                                        },
                                    });
                                });
                        });
                },
            },
            date = {initBookingFormSingle: function () {
                a("#wpcf7-f1475-p3508-o1").each(function (e) {
                        var o = a(this),
                            t = o.find("form"),
                            /*n = t.find(".qodef-bf-form-response-holder"),*/
                            i = o.data("workdays");
                        d.initField(o.find(".qodef-bf-input-date"), {
                            workdays: i,
                        })
                            
                    });
            },},
            d = {
                initField: function (e, t) {
                    t = t || {};
                    var o = e.data("date-format");
                    e.datepicker({
                        dateFormat: o,
                        beforeShowDay: function (e) {
                            var o = !1;
                            return [
                                (o =
                                    t.hasOwnProperty("workdays") &&
                                    -1 !== t.workdays.indexOf(e.getDay())
                                        ? !0
                                        : o),
                            ];
                        },
                    });
                },
            },
            r = {
                initField: function (e) {
                    "function" == typeof e.select2 &&
                        e.select2({
                            width: "100%",
                            allowClear: !1,
                            minimumResultsForSearch: 11,
                        });
                },
            };
    })(jQuery),
    (function (n) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_accordion = {}),
            n(document).ready(function () {
                o.init();
            });
        var o = {
            init: function () {
                (this.holder = n(".qodef-accordion")),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = n(this);
                            e.hasClass("qodef-behavior--accordion") &&
                                o.initAccordion(e),
                                e.hasClass("qodef-behavior--toggle") &&
                                    o.initToggle(e),
                                e.addClass("qodef--init");
                        });
            },
            initAccordion: function (e) {
                e.accordion({
                    animate: "swing",
                    collapsible: !0,
                    active: 0,
                    icons: "",
                    heightStyle: "content",
                });
            },
            initToggle: function (e) {
                var o = e.find(".qodef-accordion-title"),
                    t = o.next();
                e.addClass(
                    "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"
                ),
                    o.addClass(
                        "ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"
                    ),
                    t
                        .addClass(
                            "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                        )
                        .hide(),
                    o.each(function () {
                        var e = n(this);
                        e.hover(function () {
                            e.toggleClass("ui-state-hover");
                        }),
                            e.on("click", function () {
                                e.toggleClass(
                                    "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"
                                ),
                                    e
                                        .next()
                                        .toggleClass(
                                            "ui-accordion-content-active"
                                        )
                                        .slideToggle(400);
                            });
                    });
            },
        };
        qodefCore.shortcodes.allsmiles_core_accordion.qodefAccordion = o;
    })(jQuery),
    (function (a) {
        "use strict";
        a(document).ready(function () {
            d.init();
        }),
            a(window).scroll(function () {
                d.scroll();
            }),
            a(document).on(
                "allsmiles_core_trigger_author_load_more",
                function (e, o, t) {
                    d.triggerLoadMore(o, t);
                }
            );
        var d = {
            init: function (e) {
                (this.holder = a(".qodef-author-pagination--on")),
                    a.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = a(this);
                            d.initPaginationType(e);
                        });
            },
            scroll: function (e) {
                (this.holder = a(".qodef-author-pagination--on")),
                    a.extend(this.holder, e),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = a(this);
                            e.hasClass(
                                "qodef-pagination-type--infinite-scroll"
                            ) && d.initInfiniteScroll(e);
                        });
            },
            initPaginationType: function (e) {
                e.hasClass("qodef-pagination-type--standard")
                    ? d.initStandard(e)
                    : e.hasClass("qodef-pagination-type--load-more")
                    ? d.initLoadMore(e)
                    : e.hasClass("qodef-pagination-type--infinite-scroll") &&
                      d.initInfiniteScroll(e);
            },
            initStandard: function (n) {
                var e,
                    o = n.find(".qodef-m-pagination-items");
                o.length &&
                    ((e = n.data("options")),
                    o.children().each(function () {
                        var o = a(this),
                            t = o.children("a");
                        d.changeStandardState(n, e.max_num_pages, 1),
                            t.on("click", function (e) {
                                e.preventDefault(),
                                    o.hasClass("qodef--active") ||
                                        d.getNewPosts(n, t.data("paged"));
                            });
                    }));
            },
            changeStandardState: function (e, o, t) {
                var n, i;
                e.hasClass("qodef-pagination-type--standard") &&
                    ((n = (i = e.find(".qodef-m-pagination-items")).children(
                        ".qodef--number"
                    )),
                    (e = i.children(".qodef--prev")),
                    (i = i.children(".qodef--next")),
                    n
                        .removeClass("qodef--active")
                        .eq(t - 1)
                        .addClass("qodef--active"),
                    e.children().data("paged", t - 1),
                    1 < t ? e.show() : e.hide(),
                    i.children().data("paged", t + 1),
                    t === o ? i.hide() : i.show());
            },
            initLoadMore: function (o) {
                o.find(".qodef-load-more-button").on("click", function (e) {
                    e.preventDefault(), d.getNewPosts(o);
                });
            },
            triggerLoadMore: function (e, o) {
                d.getNewPosts(e, o);
            },
            hideLoadMoreButton: function (e, o) {
                e.hasClass("qodef-pagination-type--load-more") &&
                    o.next_page > o.max_num_pages &&
                    e.find(".qodef-load-more-button").hide();
            },
            initInfiniteScroll: function (e) {
                var o = e.outerHeight() + e.offset().top,
                    t = qodefCore.scroll + qodefCore.windowHeight,
                    n = e.data("options");
                !e.hasClass("qodef--loading") &&
                    o < t &&
                    n.max_num_pages >= n.next_page &&
                    d.getNewPosts(e);
            },
            getNewPosts: function (o, t) {
                o.addClass("qodef--loading");
                var n = o.children(".qodef-grid-inner"),
                    i = o.data("options");
                d.setNextPageValue(i, t, !1),
                    a.ajax({
                        type: "GET",
                        url:
                            qodefGlobal.vars.restUrl +
                            qodefGlobal.vars.authorPaginationRestRoute,
                        data: { options: i },
                        beforeSend: function (e) {
                            e.setRequestHeader(
                                "X-WP-Nonce",
                                qodefGlobal.vars.restNonce
                            );
                        },
                        success: function (e) {
                            "success" === e.status
                                ? (d.setNextPageValue(i, t, !0),
                                  d.changeStandardState(o, i.max_num_pages, t),
                                  n.waitForImages(function () {
                                      d.addPosts(n, e.data, t),
                                          qodefCore.body.trigger(
                                              "allsmiles_core_trigger_get_new_authors",
                                              [o]
                                          );
                                  }),
                                  d.hideLoadMoreButton(o, i))
                                : console.log(e.message);
                        },
                        complete: function () {
                            o.removeClass("qodef--loading");
                        },
                    });
            },
            setNextPageValue: function (e, o, t) {
                void 0 === o || "" === o || t
                    ? t && (e.next_page = parseInt(e.next_page, 10) + 1)
                    : (e.next_page = o);
            },
            addPosts: function (e, o, t) {
                void 0 !== t && "" !== t ? e.html(o) : e.append(o);
            },
        };
    })(jQuery),
    (function (t) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_before_after = {}),
            t(document).ready(function () {
                e.init();
            });
        var e = {
            init: function () {
                (this.holder = t(".before-after-image-holder")),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = t(this),
                                o = e.data("offset") / 100;
                            e.waitForImages(function () {
                                e.css("visibility", "visible"),
                                    e.twentytwenty({ default_offset_pct: o });
                            });
                        });
            },
        };
        qodefCore.shortcodes.allsmiles_core_before_after.qodefBeforeAfter = e;
    })(jQuery),
    (function (i) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_button = {}),
            i(document).ready(function () {
                n.init();
            });
        var n = {
            init: function () {
                (this.buttons = i(".qodef-button")),
                    this.buttons.length &&
                        this.buttons.each(function () {
                            var e = i(this);
                            n.buttonHoverColor(e),
                                n.buttonHoverBgColor(e),
                                n.buttonHoverBorderColor(e),
                                n.buttonDirAwareHover(e);
                        });
            },
            buttonHoverColor: function (e) {
                var o, t;
                void 0 !== e.data("hover-color") &&
                    ((o = e.data("hover-color")),
                    (t = e.css("color")),
                    e.on("mouseenter touchstart", function () {
                        n.changeColor(e, "color", o);
                    }),
                    e.on("mouseleave touchend", function () {
                        n.changeColor(e, "color", t);
                    }));
            },
            buttonDirAwareHover: function (e) {
                var n;
                e.hasClass("qodef-direction-animation") &&
                    ((n = e.find(".qodef-btn-background")),
                    void 0 !== e.data("hover-background-color") &&
                        n.css(
                            "background-color",
                            e.data("hover-background-color")
                        ),
                    e.on("mouseenter touchstart", function (e) {
                        var o = i(this).offset(),
                            t = e.pageX - o.left,
                            o = e.pageY - o.top;
                        n.css({ top: o, left: t });
                    }),
                    e.on("mouseout touchend", function (e) {
                        var o = i(this).offset(),
                            t = e.pageX - o.left,
                            o = e.pageY - o.top;
                        n.css({ top: o, left: t });
                    }));
            },
            buttonHoverBgColor: function (e) {
                var o, t;
                e.hasClass("qodef-direction-animation") ||
                    void 0 === e.data("hover-background-color") ||
                    ((o = e.data("hover-background-color")),
                    (t = e.css("background-color")),
                    e.on("mouseenter touchstart", function () {
                        n.changeColor(e, "background-color", o);
                    }),
                    e.on("mouseleave touchend", function () {
                        n.changeColor(e, "background-color", t);
                    }));
            },
            buttonHoverBorderColor: function (e) {
                var o, t;
                void 0 !== e.data("hover-border-color") &&
                    ((o = e.data("hover-border-color")),
                    (t = e.css("borderTopColor")),
                    e.on("mouseenter touchstart", function () {
                        n.changeColor(e, "border-color", o),
                            n.changeColor(
                                e.find(".qodef-m-icon"),
                                "border-color",
                                o
                            );
                    }),
                    e.on("mouseleave touchend", function () {
                        n.changeColor(e, "border-color", t),
                            n.changeColor(
                                e.find(".qodef-m-icon"),
                                "border-color",
                                t
                            );
                    }));
            },
            changeColor: function (e, o, t) {
                e.css(o, t);
            },
        };
        qodefCore.shortcodes.allsmiles_core_button.qodefButton = n;
    })(jQuery),
    (function (n) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_cards_gallery = {}),
            n(document).ready(function () {
                o.init();
            });
        var o = {
            init: function () {
                (this.holder = n(".qodef-cards-gallery")),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = n(this);
                            o.initCards(e), o.initBundle(e);
                        });
            },
            initCards: function (o) {
                var t = o.find(".qodef-m-card");
                t.each(function () {
                    var e = n(this);
                    e.on("click", function () {
                        if (!t.last().is(e))
                            return (
                                e
                                    .addClass("qodef-out qodef-animating")
                                    .siblings()
                                    .addClass("qodef-animating-siblings"),
                                e.detach(),
                                e.insertAfter(t.last()),
                                setTimeout(function () {
                                    e.removeClass("qodef-out");
                                }, 200),
                                setTimeout(function () {
                                    e.removeClass("qodef-animating")
                                        .siblings()
                                        .removeClass(
                                            "qodef-animating-siblings"
                                        );
                                }, 1200),
                                (t = o.find(".qodef-m-card")),
                                !1
                            );
                    });
                });
            },
            initBundle: function (e) {
                e.hasClass("qodef-animation--bundle") &&
                    !qodefCore.html.hasClass("touchevents") &&
                    e.appear(
                        function () {
                            e.addClass("qodef-appeared"),
                                e
                                    .find("img")
                                    .one(
                                        "animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd",
                                        function () {
                                            n(this).addClass(
                                                "qodef-animation-done"
                                            );
                                        }
                                    );
                        },
                        { accX: 0, accY: -100 }
                    );
            },
        };
        qodefCore.shortcodes.allsmiles_core_cards_gallery.qodefCardsGallery = o;
    })(jQuery),
    (function (r) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_countdown = {}),
            r(document).ready(function () {
                t.init();
            });
        var t = {
            init: function () {
                (this.countdowns = r(".qodef-countdown")),
                    this.countdowns.length &&
                        this.countdowns.each(function () {
                            var e = r(this),
                                o = e.find(".qodef-m-date"),
                                e = t.generateOptions(e);
                            t.initCountdown(o, e);
                        });
            },
            generateOptions: function (e) {
                var o = {};
                return (
                    (o.date =
                        void 0 !== e.data("date") ? e.data("date") : null),
                    (o.weekLabel =
                        void 0 !== e.data("week-label")
                            ? e.data("week-label")
                            : ""),
                    (o.weekLabelPlural =
                        void 0 !== e.data("week-label-plural")
                            ? e.data("week-label-plural")
                            : ""),
                    (o.dayLabel =
                        void 0 !== e.data("day-label")
                            ? e.data("day-label")
                            : ""),
                    (o.dayLabelPlural =
                        void 0 !== e.data("day-label-plural")
                            ? e.data("day-label-plural")
                            : ""),
                    (o.hourLabel =
                        void 0 !== e.data("hour-label")
                            ? e.data("hour-label")
                            : ""),
                    (o.hourLabelPlural =
                        void 0 !== e.data("hour-label-plural")
                            ? e.data("hour-label-plural")
                            : ""),
                    (o.minuteLabel =
                        void 0 !== e.data("minute-label")
                            ? e.data("minute-label")
                            : ""),
                    (o.minuteLabelPlural =
                        void 0 !== e.data("minute-label-plural")
                            ? e.data("minute-label-plural")
                            : ""),
                    (o.secondLabel =
                        void 0 !== e.data("second-label")
                            ? e.data("second-label")
                            : ""),
                    (o.secondLabelPlural =
                        void 0 !== e.data("second-label-plural")
                            ? e.data("second-label-plural")
                            : ""),
                    o
                );
            },
            initCountdown: function (e, o) {
                var t =
                        '<span class="qodef-digit-wrapper"><span class="qodef-digit">%w</span><span class="qodef-label">%!w:' +
                        o.weekLabel +
                        "," +
                        o.weekLabelPlural +
                        ";</span></span>",
                    n =
                        '<span class="qodef-digit-wrapper"><span class="qodef-digit">%d</span><span class="qodef-label">%!d:' +
                        o.dayLabel +
                        "," +
                        o.dayLabelPlural +
                        ";</span></span>",
                    i =
                        '<span class="qodef-digit-wrapper"><span class="qodef-digit">%H</span><span class="qodef-label">%!H:' +
                        o.hourLabel +
                        "," +
                        o.hourLabelPlural +
                        ";</span></span>",
                    a =
                        '<span class="qodef-digit-wrapper"><span class="qodef-digit">%M</span><span class="qodef-label">%!M:' +
                        o.minuteLabel +
                        "," +
                        o.minuteLabelPlural +
                        ";</span></span>",
                    d =
                        '<span class="qodef-digit-wrapper"><span class="qodef-digit">%S</span><span class="qodef-label">%!S:' +
                        o.secondLabel +
                        "," +
                        o.secondLabelPlural +
                        ";</span></span>";
                e.countdown(o.date, function (e) {
                    r(this).html(e.strftime(t + n + i + a + d));
                });
            },
        };
        qodefCore.shortcodes.allsmiles_core_countdown.qodefCountdown = t;
    })(jQuery),
    (function (d) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_counter = {}),
            d(document).ready(function () {
                t.init();
            });
        var t = {
            init: function () {
                (this.counters = d(".qodef-counter")),
                    this.counters.length &&
                        this.counters.each(function () {
                            var e = d(this),
                                o = e.find(".qodef-m-digit"),
                                e = t.generateOptions(e);
                            t.counterScript(o, e);
                        });
            },
            generateOptions: function (e) {
                var o = {};
                return (
                    (o.start =
                        void 0 !== e.data("start-digit") &&
                        "" !== e.data("start-digit")
                            ? e.data("start-digit")
                            : 0),
                    (o.end =
                        void 0 !== e.data("end-digit") &&
                        "" !== e.data("end-digit")
                            ? e.data("end-digit")
                            : null),
                    (o.step =
                        void 0 !== e.data("step-digit") &&
                        "" !== e.data("step-digit")
                            ? e.data("step-digit")
                            : 1),
                    (o.delay =
                        void 0 !== e.data("step-delay") &&
                        "" !== e.data("step-delay")
                            ? parseInt(e.data("step-delay"), 10)
                            : 100),
                    (o.txt =
                        void 0 !== e.data("digit-label") &&
                        "" !== e.data("digit-label")
                            ? e.data("digit-label")
                            : ""),
                    o
                );
            },
            counterScript: function (e, o) {
                var t = d.extend(
                        { start: 0, end: null, step: 1, delay: 50, txt: "" },
                        o || {}
                    ),
                    n = t.start,
                    i = t.end;
                e.text(n + t.txt);
                function a() {
                    (null !== i && i <= n) ||
                        ((n += t.step), i <= n && (n = i), e.text(n + t.txt));
                }
                e.appear(
                    function () {
                        setInterval(a, t.delay);
                    },
                    { accX: 0, accY: 0 }
                );
            },
        };
        qodefCore.shortcodes.allsmiles_core_counter.qodefCounter = t;
    })(jQuery),
    (function (e) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_google_map = {}),
            e(document).ready(function () {
                o.init();
            });
        var o = {
            init: function () {
                (this.holder = e(".qodef-google-map")),
                    this.holder.length &&
                        this.holder.each(function () {
                            void 0 !== window.qodefGoogleMap &&
                                window.qodefGoogleMap.init(
                                    e(this).find(".qodef-m-map")
                                );
                        });
            },
        };
        qodefCore.shortcodes.allsmiles_core_google_map.qodefGoogleMap = o;
    })(jQuery),
    (function (o) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_icon = {}),
            o(document).ready(function () {
                i.init();
            });
        var i = {
            init: function () {
                (this.icons = o(".qodef-icon-holder")),
                    this.icons.length &&
                        this.icons.each(function () {
                            var e = o(this);
                            i.iconHoverColor(e),
                                i.iconHoverBgColor(e),
                                i.iconHoverBorderColor(e);
                        });
            },
            iconHoverColor: function (e) {
                var o, t, n;
                void 0 !== e.data("hover-color") &&
                    ((o = e.find("span")),
                    (t = o.css("color")),
                    (n = e.data("hover-color")),
                    e.on("mouseenter", function () {
                        i.changeColor(o, "color", n);
                    }),
                    e.on("mouseleave", function () {
                        i.changeColor(o, "color", t);
                    }));
            },
            iconHoverBgColor: function (e) {
                var o, t;
                void 0 !== e.data("hover-background-color") &&
                    ((o = e.data("hover-background-color")),
                    (t = e.css("background-color")),
                    e.on("mouseenter", function () {
                        i.changeColor(e, "background-color", o);
                    }),
                    e.on("mouseleave", function () {
                        i.changeColor(e, "background-color", t);
                    }));
            },
            iconHoverBorderColor: function (e) {
                var o, t;
                void 0 !== e.data("hover-border-color") &&
                    ((o = e.data("hover-border-color")),
                    (t = e.css("borderTopColor")),
                    e.on("mouseenter", function () {
                        i.changeColor(e, "border-color", o);
                    }),
                    e.on("mouseleave", function () {
                        i.changeColor(e, "border-color", t);
                    }));
            },
            changeColor: function (e, o, t) {
                e.css(o, t);
            },
        };
        qodefCore.shortcodes.allsmiles_core_icon.qodefIcon = i;
    })(jQuery),
    (function () {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_image_gallery = {}),
            (qodefCore.shortcodes.allsmiles_core_image_gallery.qodefSwiper =
                qodef.qodefSwiper),
            (qodefCore.shortcodes.allsmiles_core_image_gallery.qodefMasonryLayout =
                qodef.qodefMasonryLayout);
    })(jQuery),
    (function () {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_image_with_text = {}),
            (qodefCore.shortcodes.allsmiles_core_image_with_text.qodefMagnificPopup =
                qodef.qodefMagnificPopup);
    })(jQuery),
    (function (o) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_stacked_images = {}),
            o(document).ready(function () {
                t.init();
            });
        var t = {
            init: function () {
                (this.images = o(".qodef-stacked-images")),
                    this.images.length &&
                        this.images.each(function () {
                            var e = o(this);
                            t.animate(e);
                        });
            },
            animate: function (e) {
                var o = e.find(".qodef-m-images");
                e.animate({ opacity: 1 }, 300),
                    setTimeout(function () {
                        e.appear(function () {
                            o.addClass("qodef--appeared");
                        });
                    }, 200);
            },
        };
        qodefCore.shortcodes.allsmiles_core_stacked_images.qodefStackedImages =
            t;
    })(jQuery),
    (function (n) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_tabs = {}),
            n(document).ready(function () {
                e.init();
            });
        var e = {
            init: function () {
                (this.holder = n(".qodef-tabs")),
                    this.holder.length &&
                        this.holder.each(function () {
                            e.initTabs(n(this));
                        });
            },
            initTabs: function (e) {
                e.children(".qodef-tabs-content").each(function (e) {
                    e += 1;
                    var o = n(this),
                        t = o.attr("id"),
                        o = o
                            .parent()
                            .find(
                                ".qodef-tabs-navigation li:nth-child(" +
                                    e +
                                    ") a"
                            ),
                        e = o.attr("href");
                    -1 < (t = "#" + t).indexOf(e) && o.attr("href", t);
                }),
                    e.addClass("qodef--init").tabs();
            },
        };
        qodefCore.shortcodes.allsmiles_core_tabs.qodefTabs = e;
    })(jQuery),
    (function () {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_video_button = {}),
            (qodefCore.shortcodes.allsmiles_core_video_button.qodefMagnificPopup =
                qodef.qodefMagnificPopup);
    })(jQuery),
    (function (n) {
        "use strict";
        n(window).on("load", function () {
            o.init();
        });
        var o = {
            init: function () {
                var e = n(".widget_allsmiles_core_sticky_sidebar");
                e.length &&
                    1024 < qodefCore.windowWidth &&
                    ((e.wrapper = e.parents("#qodef-page-sidebar")),
                    (e.c = 24),
                    (e.offsetM = e.offset().top - e.wrapper.offset().top),
                    (e.adj = 15),
                    o.callStack(e),
                    n(window).on("resize", function () {
                        1024 < qodefCore.windowWidth && o.callStack(e);
                    }),
                    n(window).on("scroll", function () {
                        1024 < qodefCore.windowWidth && o.infoPosition(e);
                    }));
            },
            calc: function (e) {
                var o = n(".qodef-page-content-section"),
                    t = qodefCore.body.hasClass("qodef-header-appearance--none")
                        ? 0
                        : parseInt(qodefGlobal.vars.headerHeight, 10);
                (e.start = o.offset().top),
                    (e.end = o.outerHeight()),
                    (e.h = e.wrapper.height()),
                    (e.w = e.outerWidth()),
                    (e.left = e.offset().left),
                    (e.top =
                        t + qodefGlobal.vars.adminBarHeight + e.c - e.offsetM),
                    e.data("state", "top");
            },
            infoPosition: function (e) {
                var o;
                qodefCore.scroll < e.start - e.top &&
                qodefCore.scroll + e.h &&
                "top" !== e.data("state")
                    ? (TweenMax.to(e.wrapper, 0.1, { y: 5 }),
                      TweenMax.to(e.wrapper, 0.3, { y: 0, delay: 0.1 }),
                      e.data("state", "top"),
                      e.wrapper.css({ position: "static" }))
                    : qodefCore.scroll >= e.start - e.top &&
                      qodefCore.scroll + e.h + e.adj <= e.start + e.end &&
                      "fixed" !== e.data("state")
                    ? ((o = "top" === e.data("state") ? 1 : -1),
                      e.data("state", "fixed"),
                      e.wrapper.css({
                          position: "fixed",
                          top: e.top,
                          left: e.left,
                          width: e.w,
                      }),
                      TweenMax.fromTo(
                          e.wrapper,
                          0.2,
                          { y: 0 },
                          { y: 10 * o, ease: Power4.easeInOut }
                      ),
                      TweenMax.to(e.wrapper, 0.2, { y: 0, delay: 0.2 }))
                    : qodefCore.scroll + e.h + e.adj > e.start + e.end &&
                      "bottom" !== e.data("state") &&
                      (e.data("state", "bottom"),
                      e.wrapper.css({
                          position: "absolute",
                          top: e.end - e.h - e.adj,
                          left: 0,
                      }),
                      TweenMax.fromTo(e.wrapper, 0.1, { y: 0 }, { y: -5 }),
                      TweenMax.to(e.wrapper, 0.3, { y: 0, delay: 0.1 }));
            },
            callStack: function (e) {
                this.calc(e), this.infoPosition(e);
            },
        };
    })(jQuery),
    (function (e) {
        "use strict";
        var t = "allsmiles_core_blog_list";
        (qodefCore.shortcodes[t] = {}),
            "object" == typeof qodefCore.listShortcodesScripts &&
                e.each(qodefCore.listShortcodesScripts, function (e, o) {
                    qodefCore.shortcodes[t][e] = o;
                }),
            (qodefCore.shortcodes[t].qodefResizeIframes =
                qodef.qodefResizeIframes);
    })(jQuery),
    (function (t) {
        "use strict";
        var n = {
            showHideHeader: function (e, o) {
                1024 < qodefCore.windowWidth &&
                    (qodefCore.scroll <= 0
                        ? (qodefCore.body.removeClass(
                              "qodef-header--fixed-display"
                          ),
                          e.css("padding-top", "0"),
                          o.css("margin-top", "0"))
                        : (qodefCore.body.addClass(
                              "qodef-header--fixed-display"
                          ),
                          e.css(
                              "padding-top",
                              parseInt(
                                  qodefGlobal.vars.headerHeight +
                                      qodefGlobal.vars.topAreaHeight
                              ) + "px"
                          ),
                          o.css(
                              "margin-top",
                              parseInt(qodefGlobal.vars.topAreaHeight) + "px"
                          )));
            },
            init: function () {
                var e, o;
                qodefCore.body.hasClass("qodef-header--vertical") ||
                    ((e = t("#qodef-page-outer")),
                    (o = t("#qodef-page-header")),
                    n.showHideHeader(e, o),
                    t(window).scroll(function () {
                        n.showHideHeader(e, o);
                    }),
                    t(window).resize(function () {
                        e.css("padding-top", "0"), n.showHideHeader(e, o);
                    }));
            },
        };
        qodefCore.fixedHeaderAppearance = n.init;
    })(jQuery),
    (function (n) {
        "use strict";
        var i = {
            header: "",
            docYScroll: 0,
            init: function () {
                var e = i.displayAmount();
                (i.header = n(".qodef-header-sticky")),
                    (i.docYScroll = n(document).scrollTop()),
                    i.setVisibility(e),
                    n(window).scroll(function () {
                        i.setVisibility(e);
                    });
            },
            displayAmount: function () {
                return 0 !== qodefGlobal.vars.qodefStickyHeaderScrollAmount
                    ? parseInt(
                          qodefGlobal.vars.qodefStickyHeaderScrollAmount,
                          10
                      )
                    : parseInt(
                          qodefGlobal.vars.headerHeight +
                              qodefGlobal.vars.adminBarHeight,
                          10
                      );
            },
            setVisibility: function (e) {
                var o,
                    t = qodefCore.scroll < e;
                i.header.hasClass("qodef-appearance--up") &&
                    ((t =
                        ((o = n(document).scrollTop()) > i.docYScroll &&
                            e < o) ||
                        o < e),
                    (i.docYScroll = n(document).scrollTop())),
                    i.showHideHeader(t);
            },
            showHideHeader: function (e) {
                e
                    ? qodefCore.body.removeClass("qodef-header--sticky-display")
                    : qodefCore.body.addClass("qodef-header--sticky-display");
            },
        };
        qodefCore.stickyHeaderAppearance = i.init;
    })(jQuery),
    (function (d) {
        "use strict";
        d(document).ready(function () {
            t.init();
        });
        var t = {
            init: function () {
                var e,
                    o = d("#qodef-side-area-mobile-header");
                o.length &&
                    qodefCore.body.hasClass("qodef-mobile-header--side-area") &&
                    ((e = o.find(".qodef-m-navigation")),
                    t.initOpenerTrigger(o, e),
                    t.initNavigationClickToggle(e),
                    "object" == typeof qodefCore.qodefPerfectScrollbar &&
                        qodefCore.qodefPerfectScrollbar.init(o));
            },
            initOpenerTrigger: function (o, e) {
                var t = d(".qodef-side-area-mobile-header-opener"),
                    n = o.children(".qodef-m-close");
                t.length &&
                    e.length &&
                    t.on("tap click", function (e) {
                        e.stopPropagation(),
                            e.preventDefault(),
                            o.hasClass("qodef--opened")
                                ? o.removeClass("qodef--opened")
                                : o.addClass("qodef--opened");
                    }),
                    n.on("tap click", function (e) {
                        e.stopPropagation(),
                            e.preventDefault(),
                            o.hasClass("qodef--opened") &&
                                o.removeClass("qodef--opened");
                    });
            },
            initNavigationClickToggle: function (e) {
                var a = e.find("ul li.menu-item-has-children");
                a.each(function () {
                    var o = d(this),
                        t = o.find(" > .qodef-drop-down-second, > ul"),
                        n = o.find("> a"),
                        i = "fast";
                    n.on("click tap", function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            t.is(":visible")
                                ? (o.removeClass("qodef-menu-item--open"),
                                  t.slideUp(i))
                                : (n
                                      .parent()
                                      .parent()
                                      .children()
                                      .hasClass("qodef-menu-item--open") &&
                                  n
                                      .parent()
                                      .parent()
                                      .parent()
                                      .hasClass("qodef-vertical-menu")
                                      ? (o
                                            .parent()
                                            .parent()
                                            .children()
                                            .removeClass(
                                                "qodef-menu-item--open"
                                            ),
                                        o
                                            .parent()
                                            .parent()
                                            .children()
                                            .find(" > .qodef-drop-down-second")
                                            .slideUp(i))
                                      : (o
                                            .parents("li")
                                            .hasClass(
                                                "qodef-menu-item--open"
                                            ) ||
                                            (a.removeClass(
                                                "qodef-menu-item--open"
                                            ),
                                            a
                                                .find(
                                                    " > .qodef-drop-down-second, > ul"
                                                )
                                                .slideUp(i)),
                                        o
                                            .parent()
                                            .parent()
                                            .children()
                                            .hasClass(
                                                "qodef-menu-item--open"
                                            ) &&
                                            (o
                                                .parent()
                                                .parent()
                                                .children()
                                                .removeClass(
                                                    "qodef-menu-item--open"
                                                ),
                                            o
                                                .parent()
                                                .parent()
                                                .children()
                                                .find(
                                                    " > .qodef-drop-down-second, > ul"
                                                )
                                                .slideUp(i))),
                                  o.addClass("qodef-menu-item--open"),
                                  t.slideDown("slow"));
                    });
                });
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        n(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                var e = n("a.qodef-search-opener"),
                    o = n(".qodef-search-cover-form"),
                    t = o.find(".qodef-m-close");
                e.length &&
                    o.length &&
                    (e.on("click", function (e) {
                        e.preventDefault(), i.openCoversHeader(o);
                    }),
                    t.on("click", function (e) {
                        e.preventDefault(), i.closeCoversHeader(o);
                    }));
            },
            openCoversHeader: function (e) {
                qodefCore.body.addClass(
                    "qodef-covers-search--opened qodef-covers-search--fadein"
                ),
                    qodefCore.body.removeClass("qodef-covers-search--fadeout"),
                    setTimeout(function () {
                        e.find(".qodef-m-form-field").focus();
                    }, 600);
            },
            closeCoversHeader: function (e) {
                qodefCore.body.removeClass(
                    "qodef-covers-search--opened qodef-covers-search--fadein"
                ),
                    qodefCore.body.addClass("qodef-covers-search--fadeout"),
                    setTimeout(function () {
                        e.find(".qodef-m-form-field").val(""),
                            e.find(".qodef-m-form-field").blur(),
                            qodefCore.body.removeClass(
                                "qodef-covers-search--fadeout"
                            );
                    }, 300);
            },
        };
    })(jQuery),
    (function (n) {
        "use strict";
        n(document).ready(function () {
            i.init();
        });
        var i = {
            init: function () {
                var e = n("a.qodef-search-opener"),
                    o = n(".qodef-fullscreen-search-holder"),
                    t = o.find(".qodef-m-close");
                e.length &&
                    o.length &&
                    (e.on("click", function (e) {
                        e.preventDefault(),
                            qodefCore.body.hasClass(
                                "qodef-fullscreen-search--opened"
                            )
                                ? i.closeFullscreen(o)
                                : i.openFullscreen(o);
                    }),
                    t.on("click", function (e) {
                        e.preventDefault(), i.closeFullscreen(o);
                    }),
                    n(document).keyup(function (e) {
                        27 === e.keyCode &&
                            qodefCore.body.hasClass(
                                "qodef-fullscreen-search--opened"
                            ) &&
                            i.closeFullscreen(o);
                    }));
            },
            openFullscreen: function (e) {
                qodefCore.body.removeClass("qodef-fullscreen-search--fadeout"),
                    qodefCore.body.addClass(
                        "qodef-fullscreen-search--opened qodef-fullscreen-search--fadein"
                    ),
                    setTimeout(function () {
                        e.find(".qodef-m-form-field").focus();
                    }, 900),
                    qodefCore.qodefScroll.disable();
            },
            closeFullscreen: function (e) {
                qodefCore.body.removeClass(
                    "qodef-fullscreen-search--opened qodef-fullscreen-search--fadein"
                ),
                    qodefCore.body.addClass("qodef-fullscreen-search--fadeout"),
                    setTimeout(function () {
                        e.find(".qodef-m-form-field").val(""),
                            e.find(".qodef-m-form-field").blur(),
                            qodefCore.body.removeClass(
                                "qodef-fullscreen-search--fadeout"
                            );
                    }, 300),
                    qodefCore.qodefScroll.enable();
            },
        };
    })(jQuery),
    (function (o) {
        "use strict";
        o(document).ready(function () {
            t.init();
        });
        var t = {
            init: function () {
                (this.search = o("a.qodef-search-opener")),
                    this.search.length &&
                        this.search.each(function () {
                            var e = o(this);
                            t.searchHoverColor(e);
                        });
            },
            searchHoverColor: function (e) {
                var o, t;
                void 0 !== e.data("hover-color") &&
                    ((o = e.data("hover-color")),
                    (t = e.css("color")),
                    e
                        .on("mouseenter", function () {
                            e.css("color", o);
                        })
                        .on("mouseleave", function () {
                            e.css("color", t);
                        }));
            },
        };
    })(jQuery),
    (function (a) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_social_share = {}),
            a(document).ready(function () {
                e.init();
            });
        var e = {
            init: function () {
                (this.holder = a(".qodef-social-share.qodef-layout--dropdown")),
                    this.holder.length &&
                        this.holder.each(function () {
                            e.animateDropdown(a(this));
                        });
            },
            animateDropdown: function (e) {
                var o = e.find(".qodef-social-share-inner"),
                    t = e.find(".qodef-social-share-dropdown ul li"),
                    n = e.innerWidth(),
                    i = n;
                t.each(function () {
                    i += a(this).innerWidth();
                }),
                    e.on("mouseenter", function () {
                        o.stop().animate(
                            { width: i },
                            300,
                            "easeInOutQuint",
                            function () {
                                t.each(function (e) {
                                    var o = a(this);
                                    setTimeout(function () {
                                        o.show(), o.css("opacity", "1");
                                    }, 150 * e);
                                });
                            }
                        );
                    }),
                    e.on("mouseleave", function () {
                        t.each(function (e) {
                            a(this).css("opacity", "0");
                        }),
                            setTimeout(function () {
                                o.stop().animate(
                                    { width: n },
                                    200,
                                    "easeInOutQuint"
                                );
                            }, 200);
                    });
            },
        };
        qodefCore.shortcodes.allsmiles_core_social_share.qodefSocialShare = e;
    })(jQuery),
    (function (i) {
        "use strict";
        i(document).ready(function () {
            n.init();
        }),
            i(window).on("elementor/frontend/init", function () {
                var e = Boolean(elementorFrontend.isEditMode());
                e && n.init(e);
            });
        var n = {
            init: function (e) {
                var o = i("#qodef-page-spinner.qodef-layout--allsmiles"),
                    t = i("#qodef-landing-rev-holder");
                (n.windowLoaded = !1),
                    o.length &&
                        (e ? n.fadeOutLoader(o) : n.animateSpinner(o, t));
            },
            animateSpinner: function (o, t) {
                o.addClass("qodef--animate"),
                    i(window).on("load", function () {
                        n.windowLoaded = !0;
                    }),
                    setTimeout(function () {
                        var e;
                        n.windowLoaded
                            ? (o.removeClass("qodef--animate"),
                              setTimeout(function () {
                                  n.fadeOutLoader(o),
                                      t.length &&
                                          t.find("rs-module").revstart();
                              }, 100))
                            : (e = setInterval(function () {
                                  n.windowLoaded &&
                                      (clearInterval(e),
                                      setTimeout(function () {
                                          n.fadeOutLoader(o),
                                              o.removeClass("qodef--animate"),
                                              t.length &&
                                                  t
                                                      .find("rs-module")
                                                      .revstart();
                                      }, 100));
                              }, 100));
                    }, 4e3);
            },
            fadeOutLoader: function (o, t, e, n) {
                (t = t || 600),
                    (n = n || "swing"),
                    o.delay((e = e || 0)).fadeOut(t, n),
                    i(window).on("bind", "pageshow", function (e) {
                        e.originalEvent.persisted && o.fadeOut(t, n);
                    });
            },
        };
    })(jQuery),
    (function (d) {
        "use strict";
        d(document).ready(function () {
            r.init();
        });
        var r = {
            percentNumber: 0,
            init: function () {
                (this.holder = d(
                    "#qodef-page-spinner.qodef-layout--progress-bar"
                )),
                    this.holder.length && r.animateSpinner(this.holder);
            },
            animateSpinner: function (e) {
                var o,
                    t = e.find(".qodef-m-spinner-number-label"),
                    n = e.find(".qodef-m-spinner-line-front"),
                    i = !1;
                n.animate({ width: "100%" }, 1e4, "linear");
                var a = setInterval(function () {
                    r.animatePercent(t, r.percentNumber), i && clearInterval(a);
                }, 100);
                d(window).on("load", function () {
                    (i = !0),
                        (o = setInterval(function () {
                            100 <= r.percentNumber
                                ? (clearInterval(o),
                                  n.stop().animate({ width: "100%" }, 500),
                                  setTimeout(function () {
                                      e.addClass("qodef--finished"),
                                          setTimeout(function () {
                                              r.fadeOutLoader(e);
                                          }, 1e3);
                                  }, 600))
                                : r.animatePercent(t, r.percentNumber);
                        }, 6));
                });
            },
            animatePercent: function (e, o) {
                o < 100 && (e.text((o += 5)), (r.percentNumber = o));
            },
            fadeOutLoader: function (o, t, e, n) {
                (t = t || 600),
                    (n = n || "swing"),
                    o.delay((e = e || 0)).fadeOut(t, n),
                    d(window).on("bind", "pageshow", function (e) {
                        e.originalEvent.persisted && o.fadeOut(t, n);
                    });
            },
        };
    })(jQuery),
    (function (i) {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_instagram_list = {}),
            i(document).ready(function () {
                e.init();
            });
        var e = {
            init: function () {
                (this.holder = i(".sbi.qodef-instagram-swiper-container")),
                    this.holder.length &&
                        this.holder.each(function () {
                            var e = i(this),
                                o = e.parent().attr("data-options"),
                                t = e.find(".sbi_item.sbi_type_image"),
                                n = e.find("#sbi_images");
                            e.attr("data-options", o),
                                n.addClass("swiper-wrapper"),
                                t.length &&
                                    t.each(function () {
                                        i(this).addClass(
                                            "qodef-e qodef-image-wrapper swiper-slide"
                                        );
                                    }),
                                "object" == typeof qodef.qodefSwiper &&
                                    qodef.qodefSwiper.init(e);
                        });
            },
        };
        (qodefCore.shortcodes.allsmiles_core_instagram_list.qodefInstagram = e),
            (qodefCore.shortcodes.allsmiles_core_instagram_list.qodefSwiper =
                qodef.qodefSwiper);
    })(jQuery),
    (function () {
        "use strict";
        jQuery(document).on("yith_wccl_product_gallery_loaded", function () {
            "function" == typeof qodefCore.qodefWooMagnificPopup &&
                qodefCore.qodefWooMagnificPopup.init();
        });
    })(),
    (function () {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_product_category_list = {}),
            (qodefCore.shortcodes.allsmiles_core_product_category_list.qodefMasonryLayout =
                qodef.qodefMasonryLayout),
            (qodefCore.shortcodes.allsmiles_core_product_category_list.qodefSwiper =
                qodef.qodefSwiper);
    })(jQuery),
    (function (e) {
        "use strict";
        var t = "allsmiles_core_product_list";
        (qodefCore.shortcodes[t] = {}),
            "object" == typeof qodefCore.listShortcodesScripts &&
                e.each(qodefCore.listShortcodesScripts, function (e, o) {
                    qodefCore.shortcodes[t][e] = o;
                });
    })(jQuery),
    (function () {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_clients_list = {}),
            (qodefCore.shortcodes.allsmiles_core_clients_list.qodefSwiper =
                qodef.qodefSwiper);
    })(jQuery),
    (function (a) {
        "use strict";
        var t = "allsmiles_core_team_list";
        (qodefCore.shortcodes[t] = {}),
            "object" == typeof qodefCore.listShortcodesScripts &&
                a.each(qodefCore.listShortcodesScripts, function (e, o) {
                    qodefCore.shortcodes[t][e] = o;
                }),
            a(document).ready(function () {
                e.init();
            });
        var e = {
            init: function () {
                (this.holder = a(
                    ".qodef-team-list.qodef-item-layout--info-below .qodef-e-social-icons"
                )),
                    this.holder.length &&
                        this.holder.each(function () {
                            e.animateDropdown(a(this));
                        });
            },
            animateDropdown: function (e) {
                var o = e.find(".qodef-e-social-icons-inner"),
                    t = e.find(".qodef-e-social-icons-dropdown ul li"),
                    n = e.innerWidth(),
                    i = n;
                t.each(function () {
                    i += a(this).innerWidth();
                }),
                    e.on("mouseenter", function () {
                        o.stop().animate(
                            { width: i },
                            300,
                            "easeInOutQuint",
                            function () {
                                t.each(function (e) {
                                    var o = a(this);
                                    setTimeout(function () {
                                        o.show(), o.css("opacity", "1");
                                    }, 150 * e);
                                });
                            }
                        );
                    }),
                    e.on("mouseleave", function () {
                        t.each(function (e) {
                            a(this).css("opacity", "0");
                        }),
                            setTimeout(function () {
                                o.stop().animate(
                                    { width: n },
                                    200,
                                    "easeInOutQuint"
                                );
                            }, 200);
                    });
            },
        };
        qodefCore.shortcodes.allsmiles_core_team_list.qodefTeamList = e;
    })(jQuery),
    (function () {
        "use strict";
        (qodefCore.shortcodes.allsmiles_core_testimonials_list = {}),
            (qodefCore.shortcodes.allsmiles_core_testimonials_list.qodefSwiper =
                qodef.qodefSwiper);
    })(jQuery),
    (function (s) {
        s(document).ready(function () {
            e.init();
        });
        var e = {
            init: function () {
                var e = s(".qodef-tabs > ul");
                e.length &&
                    e.each(function () {
                        var i = s(this),
                            a = ".ui-tabs-active";
                        i.append('<li class="qodef-main-menu-line"></li>');
                        var e,
                            d = i.find(".qodef-main-menu-line"),
                            r = i.find("> li.ui-state-default");
                        r.filter(a).length
                            ? ((e = r.filter(a).offset().left),
                              d.css("width", r.filter(a).outerWidth()))
                            : ((e = r.first().offset().left),
                              d.css("width", r.first().outerWidth())),
                            d.css("left", e - i.offset().left),
                            r.mouseenter(function () {
                                var e = s(this),
                                    o = e.outerWidth(),
                                    t = i.offset().left,
                                    t = e.offset().left - t;
                                d.css("width", o), d.css("left", t);
                            }),
                            r.mouseleave(function () {
                                var e = s(this),
                                    o = e.outerWidth(),
                                    t = i.offset().left,
                                    n = e.offset().left - t;
                                e.hasClass(a)
                                    ? (d.css("width", o), d.css("left", n))
                                    : ((n = (o = r.filter(a)).outerWidth()),
                                      (t = o.offset().left - t),
                                      d.css("width", n),
                                      d.css("left", t));
                            });
                    });
            },
        };
    })(jQuery);
