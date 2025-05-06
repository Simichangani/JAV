(self.webpackChunk = self.webpackChunk || []).push([
  ["532"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new U.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          B.debug && window && window.console.warn(e);
        }
        var c,
          d,
          l,
          s = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(c, d) {
              function l() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              d === n && ((d = c), (c = Object)), (l.Bare = s);
              var u,
                f = (o[e] = c[e]),
                p = (s[e] = l[e] = new o());
              return (
                (p.constructor = l),
                (l.mixin = function (t) {
                  return (s[e] = l[e] = r(l, t)[e]), l;
                }),
                (l.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(l, p, f, l, c)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return i(p.init) || (p.init = c), l;
                }),
                l.open(d)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          g = "bkwld-tram",
          E = /[\-\.0-9]/g,
          y = /[A-Z]/,
          T = "number",
          I = /^(rgb|#)/,
          b = /(em|cm|mm|in|pt|pc|px)$/,
          m = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          _ = /(all|none) 0s ease 0s/,
          R = /^(width|height)$/,
          h = document.createElement("a"),
          N = ["Webkit", "Moz", "O", "ms"],
          A = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in h.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((n = N[t] + a) in h.style) return { dom: n, css: A[t] + e };
          },
          S = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (S.transition) {
          var C = S.timing.dom;
          if (((h.style[C] = u["ease-in-back"][0]), !h.style[C]))
            for (var w in f) u[w][0] = f[w];
        }
        var M = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && S.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          x = (t.now =
            (l =
              (d = p.performance) &&
              (d.now || d.webkitNow || d.msNow || d.mozNow)) && S.bind
              ? l.bind(d)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          P = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = W[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  c = this.props[a];
                return (
                  c || (c = this.props[a] = new o.Bare()),
                  c.init(this.$el, n, i, t),
                  c
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new X({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      d.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      l.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new X({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    g = !1,
                    E = {};
                  M(function () {
                    u.call(p, e, function (e) {
                      e.active && ((g = !0), (E[e.name] = e.nextStyle));
                    }),
                      g && p.$el.css(E);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function d() {
              c.call(this), (this.el.style.display = "none");
            }
            function l() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[S.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                c,
                d = t !== f,
                l = {};
              for (i in e)
                (r = e[i]),
                  i in Q
                    ? (l.transform || (l.transform = {}), (l.transform[i] = r))
                    : (y.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in W ? (l[i] = r) : (c || (c = {}), (c[i] = r)));
              for (i in l) {
                if (((r = l[i]), !(o = this.props[i]))) {
                  if (!d) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && c && a.call(this, c);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function T(e, n) {
              t[e] = function () {
                return this.children
                  ? I.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function I(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                B.keepInherited && !B.fallback)
              ) {
                var n = Y(this.el, "transition");
                n && !_.test(n) && (this.upstream = n);
              }
              S.backface &&
                B.hideBackface &&
                z(this.el, S.backface.css, "hidden");
            }),
              T("add", n),
              T("start", a),
              T("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new X({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", i),
              T("stop", c),
              T("set", function (e) {
                c.call(this, e), u.call(this, e, p, E);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", d),
              T("redraw", l),
              T("destroy", function () {
                c.call(this),
                  e.removeData(this.el, g),
                  (this.$el = this.el = null);
              });
          }),
          U = s(P, function (t) {
            function n(t, n) {
              var a = e.data(t, g) || e.data(t, g, new P.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          F = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            var n = 500,
              i = "ease",
              c = 0;
            (e.init = function (e, t, a, r) {
              (this.$el = e), (this.el = e[0]);
              var d,
                l,
                s,
                f = t[0];
              a[2] && (f = a[2]),
                j[f] && (f = j[f]),
                (this.name = f),
                (this.type = a[1]),
                (this.duration = o(t[1], this.duration, n)),
                (this.ease =
                  ((d = t[2]),
                  (l = this.ease),
                  (s = i),
                  void 0 !== l && (s = l),
                  d in u ? d : s)),
                (this.delay = o(t[3], this.delay, c)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = R.test(this.name)),
                (this.unit = r.unit || this.unit || B.defaultUnit),
                (this.angle = r.angle || this.angle || B.defaultAngle),
                B.fallback || r.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return Y(this.el, this.name);
              }),
              (e.update = function (e) {
                z(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  z(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o,
                  c,
                  d = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case T:
                    if (d) return e;
                    if (l && "" === e.replace(E, "")) return +e;
                    c = "number(unitless)";
                    break;
                  case I:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e)) {
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = e),
                            ((i = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(n))
                              ? a(i[1], i[2], i[3])
                              : n
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3"));
                      }
                    }
                    c = "hex or rgb string";
                    break;
                  case b:
                    if (d) return e + this.unit;
                    if (l && t.test(e)) return e;
                    c = "number(px) or string(unit)";
                    break;
                  case m:
                    if (d) return e + this.unit;
                    if (l && t.test(e)) return e;
                    c = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (d) return e + this.angle;
                    if (l && t.test(e)) return e;
                    c = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (d || (l && m.test(e))) return e;
                    c = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      c +
                      "] Got: [" +
                      typeof (o = e) +
                      "] " +
                      o
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          V = s(F, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), I));
            };
          }),
          G = s(F, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          D = s(F, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                (i = (o = Q[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Q.perspective &&
                    B.perspective &&
                    ((this.current.perspective = B.perspective),
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new H({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new H({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                z(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          k = s(function (t) {
            function o() {
              var e,
                t,
                n,
                a = d.length;
              if (a)
                for (M(o), t = x(), e = a; e--; ) (n = d[e]) && n.render(t);
            }
            var c = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || c.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = c.from),
                void 0 === a && (a = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = x()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                var e;
                this.active ||
                  (this.start || (this.start = x()),
                  (this.active = !0),
                  (e = this),
                  1 === d.push(e) && M(o));
              }),
              (t.stop = function () {
                var t, n, a;
                this.active &&
                  ((this.active = !1),
                  (t = this),
                  (a = e.inArray(t, d)) >= 0 &&
                    ((n = d.slice(a + 1)),
                    (d.length = a),
                    n.length && (d = d.concat(n))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r,
                    c = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        (r = c),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + c * this.change) * l) / l),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(E, "");
                  a !== e.replace(E, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var d = [],
              l = 1e3;
          }),
          X = s(k, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          H = s(k, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e, n;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          B = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!S.transition) return (B.fallback = !0);
          B.agentTests.push("(" + e + ")");
          var t = RegExp(B.agentTests.join("|"), "i");
          B.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new X({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var z = e.style,
          Y = e.css,
          j = { transform: S.transform && S.transform.css },
          W = {
            color: [V, I],
            background: [V, I, "background-color"],
            "outline-color": [V, I],
            "border-color": [V, I],
            "border-top-color": [V, I],
            "border-right-color": [V, I],
            "border-bottom-color": [V, I],
            "border-left-color": [V, I],
            "border-width": [F, b],
            "border-top-width": [F, b],
            "border-right-width": [F, b],
            "border-bottom-width": [F, b],
            "border-left-width": [F, b],
            "border-spacing": [F, b],
            "letter-spacing": [F, b],
            margin: [F, b],
            "margin-top": [F, b],
            "margin-right": [F, b],
            "margin-bottom": [F, b],
            "margin-left": [F, b],
            padding: [F, b],
            "padding-top": [F, b],
            "padding-right": [F, b],
            "padding-bottom": [F, b],
            "padding-left": [F, b],
            "outline-width": [F, b],
            opacity: [F, T],
            top: [F, m],
            right: [F, m],
            bottom: [F, m],
            left: [F, m],
            "font-size": [F, m],
            "text-indent": [F, m],
            "word-spacing": [F, m],
            width: [F, m],
            "min-width": [F, m],
            "max-width": [F, m],
            height: [F, m],
            "min-height": [F, m],
            "max-height": [F, m],
            "line-height": [F, v],
            "scroll-top": [G, T, "scrollTop"],
            "scroll-left": [G, T, "scrollLeft"],
          },
          Q = {};
        S.transform &&
          ((W.transform = [D]),
          (Q = {
            x: [m, "translateX"],
            y: [m, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          S.transform &&
            S.backface &&
            ((Q.z = [m, "translateZ"]),
            (Q.rotateZ = [O]),
            (Q.scaleZ = [T]),
            (Q.perspective = [b]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        c,
        d,
        l,
        s,
        u,
        f,
        p,
        g,
        E,
        y,
        T,
        I,
        b,
        m,
        O,
        v,
        _ = window.$,
        R = n(5487) && _.tram;
      e.exports =
        (((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (c = Function.prototype),
        o.push,
        (d = o.slice),
        (l = (o.concat, r.toString, r.hasOwnProperty)),
        (s = o.forEach),
        (u = o.map),
        (f = (o.reduce, o.reduceRight, o.filter)),
        (p = (o.every, o.some)),
        (g = o.indexOf),
        (E = (o.lastIndexOf, Object.keys)),
        c.bind,
        (y =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else {
                for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                  if (t.call(n, e[c[o]], c[o], e) === i) return;
              }
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (y(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              T(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (y(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (T =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, n)
                : (y(e, function (e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (g && e.indexOf === g
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = d.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            !t &&
              ((t = !0),
              (n = arguments),
              (a = this),
              R.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            c,
            d,
            l = function () {
              var s = a.now() - c;
              s < t
                ? (i = setTimeout(l, t - s))
                : ((i = null), !n && ((d = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            (r = this), (o = arguments), (c = a.now());
            var s = n && !i;
            return (
              !i && (i = setTimeout(l, t)),
              s && ((d = e.apply(r, o)), (r = o = null)),
              d
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return l.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (I = /(.)^/),
        (b = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (m = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + b[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || I)
                  .source,
                (t.interpolate || I).source,
                (t.evaluate || I).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            c = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (c += e.slice(r, o).replace(m, O)),
              (r = o + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (c += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (c += "';\n");
          var d = t.variable;
          if (d) {
            if (!v.test(d))
              throw Error("variable is not a bare identifier: " + d);
          } else (c = "with(obj||{}){\n" + c + "}\n"), (d = "obj");
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var l = function (e) {
            return i.call(this, e, a);
          };
          return (l.source = "function(" + d + "){\n" + c + "}"), l;
        }),
        a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            r = e("body"),
            c = window.location,
            d = /PhantomJS/i.test(navigator.userAgent),
            l =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          n.ready = function () {
            var n = o.attr("data-wf-status"),
              a = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(a) && c.hostname !== a && (n = !0),
              n &&
                !d &&
                ((t =
                  t ||
                  (function () {
                    var t = e('<a class="w-webflow-badge"></a>').attr(
                        "href",
                        "https://webflow.com?utm_campaign=brandjs"
                      ),
                      n = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                        )
                        .attr("alt", "")
                        .css({ marginRight: "4px", width: "26px" }),
                      a = e("<img>")
                        .attr(
                          "src",
                          "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                        )
                        .attr("alt", "Made in Webflow");
                    return t.append(n, a), t[0];
                  })()),
                u(),
                setTimeout(u, 500),
                e(i).off(l, s).on(l, s));
          };
          function u() {
            var e = r.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              i = a.env("editor");
            if (n) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), !i && r.append(t);
          }
          return n;
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            c = document.location,
            d = "hashchange",
            l =
              n.load ||
              function () {
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(d, u),
                  (function (e) {
                    var t = window.document.createElement("iframe");
                    (t.src =
                      "https://webflow.com/site/third-party-cookie-check.html"),
                      (t.style.display = "none"),
                      (t.sandbox = "allow-scripts allow-same-origin");
                    var n = function (a) {
                      "WF_third_party_cookies_unsupported" === a.data
                        ? (g(t, n), e(!1))
                        : "WF_third_party_cookies_supported" === a.data &&
                          (g(t, n), e(!0));
                    };
                    (t.onerror = function () {
                      g(t, n), e(!1);
                    }),
                      window.addEventListener("message", n, !1),
                      window.document.body.appendChild(t);
                  })(function (t) {
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success: (function (t) {
                        return function (n) {
                          if (!n) {
                            console.error("Could not load editor data");
                            return;
                          }
                          (n.thirdPartyCookiesSupported = t),
                            (function (t, n) {
                              e.ajax({
                                type: "GET",
                                url: t,
                                dataType: "script",
                                cache: !0,
                              }).then(n, f);
                            })(
                              (function (e) {
                                return e.indexOf("//") >= 0
                                  ? e
                                  : p("https://editor-api.webflow.com" + e);
                              })(n.scriptPath),
                              function () {
                                window.WebflowEditor(n);
                              }
                            );
                        };
                      })(t),
                    });
                  });
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            if (!i) /\?edit/.test(c.hash) && l();
          }
          s
            ? l()
            : c.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                /\?edit$/.test(c.href)) &&
              l()
            : o.on(d, u).triggerHandler(d);
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function g(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return {};
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        (!!e &&
                          e !== document &&
                          "HTML" !== e.nodeName &&
                          "BODY" !== e.nodeName &&
                          "classList" in e &&
                          "contains" in e.classList) ||
                        !1
                      );
                    }
                    function r(e) {
                      if (!e.getAttribute("data-wf-focus-visible"))
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function d() {
                      document.addEventListener("mousemove", l),
                        document.addEventListener("mousedown", l),
                        document.addEventListener("mouseup", l),
                        document.addEventListener("pointermove", l),
                        document.addEventListener("pointerdown", l),
                        document.addEventListener("pointerup", l),
                        document.addEventListener("touchmove", l),
                        document.addEventListener("touchstart", l),
                        document.addEventListener("touchend", l);
                    }
                    function l(e) {
                      if (
                        !e.target.nodeName ||
                        "html" !== e.target.nodeName.toLowerCase()
                      )
                        (t = !1),
                          document.removeEventListener("mousemove", l),
                          document.removeEventListener("mousedown", l),
                          document.removeEventListener("mouseup", l),
                          document.removeEventListener("pointermove", l),
                          document.removeEventListener("pointerdown", l),
                          document.removeEventListener("pointerup", l),
                          document.removeEventListener("touchmove", l),
                          document.removeEventListener("touchstart", l),
                          document.removeEventListener("touchend", l);
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        if (!n.metaKey && !n.altKey && !n.ctrlKey)
                          o(e.activeElement) && r(e.activeElement), (t = !0);
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), d());
                        },
                        !0
                      ),
                      d(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          var n, a, c;
                          if (!!o(e.target)) {
                            if (
                              t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable)
                            )
                              r(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (!!o(e.target))
                            e.target.hasAttribute("data-wf-focus-visible") &&
                              ((n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              !(function (e) {
                                if (!!e.getAttribute("data-wf-focus-visible"))
                                  e.removeAttribute("data-wf-focus-visible");
                              })(e.target));
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            if (
              ((i = (a = n.target).tagName),
              (/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls))
            )
              (t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0);
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            if (!a.__wf_intro)
              (a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO);
          },
          outro: function (e, a) {
            if (!!a.__wf_intro)
              (a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO);
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            if (!!o.hasOwnProperty(e))
              n.triggers[e] = function (e, n) {
                a.push([t, n]);
              };
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var o = window.jQuery,
        r = {},
        c = ".w-ix";
      (r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = r);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        c = [],
        d = window.Webflow || [],
        l = window.jQuery,
        s = l(window),
        u = l(document),
        f = l.isFunction,
        p = (o._ = n(5756)),
        g = (o.tram = n(5487) && l.tram),
        E = !1,
        y = !1;
      function T(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) {
                e.ready();
                return;
              }
              if (!p.contains(c, e.ready)) c.push(e.ready);
            })(e);
      }
      (g.config.hideBackface = !1),
        (g.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && I(r[e]);
          var a = (r[e] = t(l, p, n) || {});
          return T(a), a;
        }),
        (o.require = function (e) {
          return r[e];
        });
      function I(e) {
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              c = p.filter(c, function (t) {
                return t !== e.ready;
              });
            })(e);
      }
      (o.push = function (e) {
        if (E) {
          f(e) && e();
          return;
        }
        d.push(e);
      }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var b = navigator.userAgent.toLowerCase(),
        m = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(b) &&
          /Google/.test(navigator.vendor) &&
          parseInt(b.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(b));
      (o.env.safari = /safari/.test(b) && !O && !v),
        m &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = m
          ? function (e) {
              return e === a || l.contains(e, a);
            }
          : function () {
              return !0;
            });
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        R = "scroll.webflow " + _;
      function h(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            if (!("function" != typeof e || p.contains(n, e))) n.push(e);
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function N(e) {
        f(e) && e();
      }
      (o.resize = h(s, _)),
        (o.scroll = h(s, R)),
        (o.redraw = h()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (E = !0),
            y
              ? (function () {
                  (y = !1), p.each(r, T);
                })()
              : p.each(c, N),
            p.each(d, N),
            o.resize.up();
        });
      function A() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new l.Deferred()),
          s.on("load", i.resolve);
      }
      (o.load = function (e) {
        i.then(e);
      }),
        (o.destroy = function (e) {
          (e = e || {}),
            (y = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(r, I),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (c = []),
            (d = []),
            "pending" === i.state() && A();
        }),
        l(o.ready),
        A(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            c = e(window),
            d = a.env(),
            l = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          r.ready =
            r.design =
            r.preview =
              function () {
                (n = d && a.env("design")),
                  (o = a.env("slug") || l.pathname || ""),
                  a.scroll.off(g),
                  (i = []);
                for (var t = document.links, r = 0; r < t.length; ++r)
                  (function (t) {
                    if (t.getAttribute("hreflang")) return;
                    var a =
                      (n && t.getAttribute("href-disabled")) ||
                      t.getAttribute("href");
                    if (((s.href = a), a.indexOf(":") >= 0)) return;
                    var r = e(t);
                    if (
                      s.hash.length > 1 &&
                      s.host + s.pathname === l.host + l.pathname
                    ) {
                      if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                      var c = e(s.hash);
                      c.length && i.push({ link: r, sec: c, active: !1 });
                      return;
                    }
                    if ("#" !== a && "" !== a)
                      E(
                        r,
                        u,
                        s.href === l.href || a === o || (f.test(a) && p.test(o))
                      );
                  })(t[r]);
                i.length && (a.scroll.on(g), g());
              };
          function g() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(i, function (t) {
              if (t.link.attr("hreflang")) return;
              var a = t.link,
                i = t.sec,
                o = i.offset().top,
                r = i.outerHeight(),
                c = 0.5 * n,
                d = i.is(":visible") && o + r - c >= e && o + c <= e + n;
              if (t.active !== d) (t.active = d), E(a, u, d);
            });
          }
          function E(e, t, n) {
            var a = e.hasClass(t);
            if ((!n || !a) && (!!n || !!a))
              n ? e.addClass(t) : e.removeClass(t);
          }
          return r;
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = (function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? null
              : window.history,
            o = e(window),
            r = e(document),
            c = e(document.body),
            d =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            l = a.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              l +
              " > .header, " +
              l +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var g = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var r,
              l = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(l.className))
              )
            ) {
              var u = ((r = l),
              g.test(r.hash) && r.host + r.pathname === n.host + n.pathname)
                ? l.hash
                : "";
              if ("" !== u) {
                var f = e(u);
                if (!f.length) return;
                t && (t.preventDefault(), t.stopPropagation()),
                  (function (e) {
                    n.hash !== e &&
                      i &&
                      i.pushState &&
                      !(a.env.chrome && "file:" === n.protocol) &&
                      (i.state && i.state.hash) !== e &&
                      i.pushState({ hash: e }, "", e);
                  })(u, t),
                  window.setTimeout(
                    function () {
                      (function (t, n) {
                        var a = o.scrollTop(),
                          i = (function (t) {
                            var n = e(s),
                              a =
                                "fixed" === n.css("position")
                                  ? n.outerHeight()
                                  : 0,
                              i = t.offset().top - a;
                            if ("mid" === t.data("scroll")) {
                              var r = o.height() - a,
                                c = t.outerHeight();
                              c < r && (i -= Math.round((r - c) / 2));
                            }
                            return i;
                          })(t);
                        if (a !== i) {
                          var r = (function (e, t, n) {
                              if (
                                "none" ===
                                  document.body.getAttribute(
                                    "data-wf-scroll-motion"
                                  ) ||
                                E.matches
                              )
                                return 0;
                              var a = 1;
                              return (
                                c.add(e).each(function (e, t) {
                                  var n = parseFloat(
                                    t.getAttribute("data-scroll-time")
                                  );
                                  !isNaN(n) && n >= 0 && (a = n);
                                }),
                                (472.143 * Math.log(Math.abs(t - n) + 125) -
                                  2e3) *
                                  a
                              );
                            })(t, a, i),
                            l = Date.now(),
                            u = function () {
                              var e = Date.now() - l;
                              window.scroll(
                                0,
                                (function (e, t, n, a) {
                                  return n > a
                                    ? t
                                    : e +
                                        (t - e) *
                                          (function (e) {
                                            return e < 0.5
                                              ? 4 * e * e * e
                                              : (e - 1) *
                                                  (2 * e - 2) *
                                                  (2 * e - 2) +
                                                  1;
                                          })(n / a);
                                })(a, i, e, r)
                              ),
                                e <= r ? d(u) : "function" == typeof n && n();
                            };
                          d(u);
                        }
                      })(f, function () {
                        y(f, "add"),
                          f.get(0).focus({ preventScroll: !0 }),
                          y(f, "remove");
                      });
                    },
                    t ? 0 : 300
                  );
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              r.on(n, f, T),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function d(e) {
              var t = e.touches;
              if (!t || !(t.length > 1))
                (o = !0),
                  t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                  (i = a);
            }
            function l(t) {
              if (!!o) {
                if (r && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a = t.touches,
                  d = a ? a[0].clientX : t.clientX,
                  l = d - i;
                (i = d),
                  Math.abs(l) > c &&
                    n &&
                    "" === String(n()) &&
                    ((function (t, n, a) {
                      var i = e.Event(t, { originalEvent: n });
                      e(n.target).trigger(i, a);
                    })("swipe", t, { direction: l > 0 ? "right" : "left" }),
                    u());
              }
            }
            function s(e) {
              if (!!o) {
                if (((o = !1), r && "mouseup" === e.type)) {
                  e.preventDefault(), e.stopPropagation(), (r = !1);
                  return;
                }
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", d, !1),
              t.addEventListener("touchmove", l, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", d, !1),
              t.addEventListener("mousemove", l, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1);
            this.destroy = function () {
              t.removeEventListener("touchstart", d, !1),
                t.removeEventListener("touchmove", l, !1),
                t.removeEventListener("touchend", s, !1),
                t.removeEventListener("touchcancel", u, !1),
                t.removeEventListener("mousedown", d, !1),
                t.removeEventListener("mousemove", l, !1),
                t.removeEventListener("mouseup", s, !1),
                t.removeEventListener("mouseout", u, !1),
                (t = null);
            };
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, a, i, o, r, c, d, l, s, u, f) {
        return function (p) {
          e(p);
          var g = p.form,
            E = {
              name: g.attr("data-name") || g.attr("name") || "Untitled Form",
              pageId: g.attr("data-wf-page-id") || "",
              elementId: g.attr("data-wf-element-id") || "",
              domain: u("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                g.html()
              ),
              trackingCookies: a(),
            };
          let y = g.attr("data-wf-flow");
          y && (E.wfFlow = y), i(p);
          var T = o(g, E.fields);
          if (T) return r(T);
          if (((E.fileUploads = c(g)), d(p), !l)) {
            s(p);
            return;
          }
          u.ajax({
            url: f,
            type: "POST",
            data: E,
            dataType: "json",
            crossDomain: !0,
          })
            .done(function (e) {
              e && 200 === e.code && (p.success = !0), s(p);
            })
            .fail(function () {
              s(p);
            });
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var a = n(3949);
      let i = (e, t, n, a) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              a();
            },
          });
      };
      a.define(
        "forms",
        (e.exports = function (e, t) {
          let o;
          let r = "TURNSTILE_LOADED";
          var c,
            d,
            l,
            s,
            u,
            f = {},
            p = e(document),
            g = window.location,
            E = window.XDomainRequest && !window.atob,
            y = ".w-form",
            T = /e(-)?mail/i,
            I = /^\S+@\S+$/,
            b = window.alert,
            m = a.env();
          let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            _ = t.debounce(function () {
              b(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          f.ready =
            f.design =
            f.preview =
              function () {
                (function () {
                  O &&
                    (((o = document.createElement("script")).src =
                      "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                    document.head.appendChild(o),
                    (o.onload = () => {
                      p.trigger(r);
                    }));
                })(),
                  (function () {
                    if (
                      ((s =
                        "https://webflow.com/api/v1/form/" +
                        (d = e("html").attr("data-wf-site"))),
                      E &&
                        s.indexOf("https://webflow.com") >= 0 &&
                        (s = s.replace(
                          "https://webflow.com",
                          "https://formdata.webflow.com"
                        )),
                      (u = `${s}/signFile`),
                      !!(c = e(y + " form")).length)
                    )
                      c.each(R);
                  })(),
                  (!m || a.env("preview")) &&
                    !l &&
                    (function () {
                      (l = !0),
                        p.on("submit", y + " form", function (t) {
                          var n = e.data(this, y);
                          n.handler && ((n.evt = t), n.handler(n));
                        });
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        a = "w--redirected-checked",
                        i = "w--redirected-focus",
                        o = "w--redirected-focus-visible",
                        r = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      p.on(
                        "change",
                        y + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(a);
                        }
                      ),
                        p.on("change", y + ' form input[type="radio"]', (i) => {
                          e(`input[name="${i.target.name}"]:not(${t})`).map(
                            (t, i) => e(i).siblings(n).removeClass(a)
                          );
                          let o = e(i.target);
                          !o.hasClass("w-radio-input") &&
                            o.siblings(n).addClass(a);
                        }),
                        r.forEach(([t, n]) => {
                          p.on(
                            "focus",
                            y + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              e(t.target).siblings(n).addClass(i),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(n)
                                  .addClass(o);
                            }
                          ),
                            p.on(
                              "blur",
                              y + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${i} ${o}`);
                              }
                            );
                        });
                    })();
              };
          function R(t, o) {
            var c = e(o),
              l = e.data(o, y);
            !l && (l = e.data(o, y, { form: c })), h(l);
            var f = c.closest("div.w-form");
            (l.done = f.find("> .w-form-done")),
              (l.fail = f.find("> .w-form-fail")),
              (l.fileUploads = f.find(".w-file-upload")),
              l.fileUploads.each(function (t) {
                (function (t, n) {
                  if (!!n.fileUploads && !!n.fileUploads[t]) {
                    var a,
                      i = e(n.fileUploads[t]),
                      o = i.find("> .w-file-upload-default"),
                      r = i.find("> .w-file-upload-uploading"),
                      c = i.find("> .w-file-upload-success"),
                      d = i.find("> .w-file-upload-error"),
                      l = o.find(".w-file-upload-input"),
                      s = o.find(".w-file-upload-label"),
                      f = s.children(),
                      p = d.find(".w-file-upload-error-msg"),
                      g = c.find(".w-file-upload-file"),
                      E = c.find(".w-file-remove-link"),
                      y = g.find(".w-file-upload-file-name"),
                      T = p.attr("data-w-size-error"),
                      I = p.attr("data-w-type-error"),
                      b = p.attr("data-w-generic-error");
                    if (
                      (!m &&
                        s.on("click keydown", function (e) {
                          if (
                            "keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which
                          )
                            e.preventDefault(), l.click();
                        }),
                      s
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      E.find(".w-icon-file-upload-remove").attr(
                        "aria-hidden",
                        "true"
                      ),
                      m)
                    )
                      l.on("click", function (e) {
                        e.preventDefault();
                      }),
                        s.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      E.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        l.removeAttr("data-value"),
                          l.val(""),
                          y.html(""),
                          o.toggle(!0),
                          c.toggle(!1),
                          s.focus();
                      }),
                        l.on("change", function (i) {
                          if (
                            !!(a =
                              i.target && i.target.files && i.target.files[0])
                          )
                            o.toggle(!1),
                              d.toggle(!1),
                              r.toggle(!0),
                              r.focus(),
                              y.text(a.name),
                              !A() && N(n),
                              (n.fileUploads[t].uploading = !0),
                              (function (t, n) {
                                var a = new URLSearchParams({
                                  name: t.name,
                                  size: t.size,
                                });
                                e.ajax({
                                  type: "GET",
                                  url: `${u}?${a}`,
                                  crossDomain: !0,
                                })
                                  .done(function (e) {
                                    n(null, e);
                                  })
                                  .fail(function (e) {
                                    n(e);
                                  });
                              })(a, _);
                        });
                      var O = s.outerHeight();
                      l.height(O), l.width(1);
                    }
                  }
                  function v(e) {
                    var a = e.responseJSON && e.responseJSON.msg,
                      i = b;
                    "string" == typeof a &&
                    0 === a.indexOf("InvalidFileTypeError")
                      ? (i = I)
                      : "string" == typeof a &&
                        0 === a.indexOf("MaxFileSizeError") &&
                        (i = T),
                      p.text(i),
                      l.removeAttr("data-value"),
                      l.val(""),
                      r.toggle(!1),
                      o.toggle(!0),
                      d.toggle(!0),
                      d.focus(),
                      (n.fileUploads[t].uploading = !1),
                      !A() && h(n);
                  }
                  function _(t, n) {
                    if (t) return v(t);
                    var i = n.fileName,
                      o = n.postData,
                      r = n.fileId,
                      c = n.s3Url;
                    l.attr("data-value", r),
                      (function (t, n, a, i, o) {
                        var r = new FormData();
                        for (var c in n) r.append(c, n[c]);
                        r.append("file", a, i),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: r,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              o(null);
                            })
                            .fail(function (e) {
                              o(e);
                            });
                      })(c, o, a, i, R);
                  }
                  function R(e) {
                    if (e) return v(e);
                    r.toggle(!1),
                      c.css("display", "inline-block"),
                      c.focus(),
                      (n.fileUploads[t].uploading = !1),
                      !A() && h(n);
                  }
                  function A() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, l);
              }),
              O &&
                ((l.wait = !1),
                N(l),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : r,
                  function () {
                    i(
                      O,
                      o,
                      (e) => {
                        (l.turnstileToken = e), h(l);
                      },
                      () => {
                        N(l);
                      }
                    );
                  }
                ));
            var E =
              l.form.attr("aria-label") || l.form.attr("data-name") || "Form";
            !l.done.attr("aria-label") && l.form.attr("aria-label", E),
              l.done.attr("tabindex", "-1"),
              l.done.attr("role", "region"),
              !l.done.attr("aria-label") &&
                l.done.attr("aria-label", E + " success"),
              l.fail.attr("tabindex", "-1"),
              l.fail.attr("role", "region"),
              !l.fail.attr("aria-label") &&
                l.fail.attr("aria-label", E + " failure");
            var T = (l.action = c.attr("action"));
            if (
              ((l.handler = null),
              (l.redirect = c.attr("data-redirect")),
              v.test(T))
            ) {
              l.handler = w;
              return;
            }
            if (!T) {
              if (d) {
                l.handler = (0, n(6524).default)(
                  h,
                  g,
                  a,
                  C,
                  x,
                  A,
                  b,
                  L,
                  N,
                  d,
                  M,
                  e,
                  s
                );
                return;
              }
              _();
            }
          }
          function h(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null),
              (e.success = !1),
              t.prop("disabled", !!(O && !e.turnstileToken)),
              e.label && t.val(e.label);
          }
          function N(e) {
            var t = e.btn,
              n = e.wait;
            t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
          }
          function A(t, n) {
            var a = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (i, o) {
                  var r = e(o),
                    c = r.attr("type"),
                    d =
                      r.attr("data-name") ||
                      r.attr("name") ||
                      "Field " + (i + 1);
                  d = encodeURIComponent(d);
                  var l = r.val();
                  if ("checkbox" === c) l = r.is(":checked");
                  else if ("radio" === c) {
                    if (null === n[d] || "string" == typeof n[d]) return;
                    l =
                      t
                        .find('input[name="' + r.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof l && (l = e.trim(l)),
                    (n[d] = l),
                    (a =
                      a ||
                      (function (e, t, n, a) {
                        var i = null;
                        return (
                          "password" === t
                            ? (i = "Passwords cannot be submitted.")
                            : e.attr("required")
                            ? a
                              ? T.test(e.attr("type")) &&
                                !I.test(a) &&
                                (i =
                                  "Please enter a valid email address for: " +
                                  n)
                              : (i = "Please fill out the required field: " + n)
                            : "g-recaptcha-response" === n &&
                              !a &&
                              (i = "Please confirm youâ€™re not a robot."),
                          i
                        );
                      })(r, c, d, l));
                }),
              a
            );
          }
          function L(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, a) {
                var i = e(a),
                  o =
                    i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                  r = i.attr("data-value");
                "string" == typeof r && (r = e.trim(r)), (n[o] = r);
              }),
              n
            );
          }
          let S = { _mkto_trk: "marketo" };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                a = n[0];
              if (a in S) {
                let t = S[a],
                  i = n.slice(1).join("=");
                e[t] = i;
              }
              return e;
            }, {});
          }
          function w(n) {
            h(n);
            var a,
              i = n.form,
              o = {};
            if (/^https/.test(g.href) && !/^https/.test(n.action)) {
              i.attr("method", "post");
              return;
            }
            x(n);
            var r = A(i, o);
            if (r) return b(r);
            N(n),
              t.each(o, function (e, t) {
                T.test(t) && (o.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (a = e),
                  /^(first[ _-]?name)$/i.test(t) && (o.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (o.LNAME = e);
              }),
              a &&
                !o.FNAME &&
                ((a = a.split(" ")),
                (o.FNAME = a[0]),
                (o.LNAME = o.LNAME || a[1]));
            var c = n.action.replace("/post?", "/post-json?") + "&c=?",
              d = c.indexOf("u=") + 2;
            d = c.substring(d, c.indexOf("&", d));
            var l = c.indexOf("id=") + 3;
            (o["b_" + d + "_" + (l = c.substring(l, c.indexOf("&", l)))] = ""),
              e
                .ajax({ url: c, data: o, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    !n.success && console.info("MailChimp error: " + e.msg),
                    M(n);
                })
                .fail(function () {
                  M(n);
                });
          }
          function M(e) {
            var t = e.form,
              n = e.redirect,
              i = e.success;
            if (i && n) {
              a.location(n);
              return;
            }
            e.done.toggle(i),
              e.fail.toggle(!i),
              i ? e.done.focus() : e.fail.focus(),
              t.toggle(!i),
              h(e);
          }
          function x(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            r,
            c,
            d,
            l = {},
            s = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            g = a.env(),
            E = ".w-nav",
            y = "w--open",
            T = "w--nav-dropdown-open",
            I = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            m = "w--nav-link-open",
            O = i.triggers,
            v = e();
          (l.ready =
            l.design =
            l.preview =
              function () {
                if (
                  ((c = g && a.env("design")),
                  (d = a.env("editor")),
                  (n = e(document.body)),
                  !!(r = f.find(E)).length)
                )
                  r.each(h),
                    _(),
                    (function () {
                      a.resize.on(R);
                    })();
              }),
            (l.destroy = function () {
              (v = e()), _(), r && r.length && r.each(N);
            });
          function _() {
            a.resize.off(R);
          }
          function R() {
            r.each(P);
          }
          function h(n, a) {
            var i = e(a),
              r = e.data(a, E);
            !r &&
              (r = e.data(a, E, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1,
              })),
              (r.menu = i.find(".w-nav-menu")),
              (r.links = r.menu.find(".w-nav-link")),
              (r.dropdowns = r.menu.find(".w-dropdown")),
              (r.dropdownToggle = r.menu.find(".w-dropdown-toggle")),
              (r.dropdownList = r.menu.find(".w-dropdown-list")),
              (r.button = i.find(".w-nav-button")),
              (r.container = i.find(".w-container")),
              (r.overlayContainerId = "w-nav-overlay-" + n),
              (r.outside = (function (t) {
                return (
                  t.outside && f.off("click" + E, t.outside),
                  function (n) {
                    var a = e(n.target);
                    if (!d || !a.closest(".w-editor-bem-EditorOverlay").length)
                      x(t, a);
                  }
                );
              })(r));
            var l = i.find(".w-nav-brand");
            l &&
              "/" === l.attr("href") &&
              null == l.attr("aria-label") &&
              l.attr("aria-label", "home"),
              r.button.attr("style", "-webkit-user-select: text;"),
              null == r.button.attr("aria-label") &&
                r.button.attr("aria-label", "menu"),
              r.button.attr("role", "button"),
              r.button.attr("tabindex", "0"),
              r.button.attr("aria-controls", r.overlayContainerId),
              r.button.attr("aria-haspopup", "menu"),
              r.button.attr("aria-expanded", "false"),
              r.el.off(E),
              r.button.off(E),
              r.menu.off(E),
              L(r),
              c
                ? (A(r),
                  r.el.on(
                    "setting" + E,
                    (function (e) {
                      return function (n, a) {
                        a = a || {};
                        var i = u.width();
                        L(e),
                          !0 === a.open && G(e, !0),
                          !1 === a.open && k(e, !0),
                          e.open &&
                            t.defer(function () {
                              i !== u.width() && C(e);
                            });
                      };
                    })(r)
                  ))
                : ((function (t) {
                    if (!t.overlay)
                      (t.overlay = e(
                        '<div class="w-nav-overlay" data-wf-ignore />'
                      ).appendTo(t.el)),
                        t.overlay.attr("id", t.overlayContainerId),
                        (t.parent = t.menu.parent()),
                        k(t, !0);
                  })(r),
                  r.button.on("click" + E, w(r)),
                  r.menu.on("click" + E, "a", M(r)),
                  r.button.on(
                    "keydown" + E,
                    (function (e) {
                      return function (t) {
                        switch (t.keyCode) {
                          case o.SPACE:
                          case o.ENTER:
                            return (
                              w(e)(), t.preventDefault(), t.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              k(e), t.preventDefault(), t.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                          case o.HOME:
                          case o.END:
                            if (!e.open)
                              return t.preventDefault(), t.stopPropagation();
                            return (
                              t.keyCode === o.END
                                ? (e.selectedIdx = e.links.length - 1)
                                : (e.selectedIdx = 0),
                              S(e),
                              t.preventDefault(),
                              t.stopPropagation()
                            );
                        }
                      };
                    })(r)
                  ),
                  r.el.on(
                    "keydown" + E,
                    (function (e) {
                      return function (t) {
                        if (!!e.open)
                          switch (
                            ((e.selectedIdx = e.links.index(
                              document.activeElement
                            )),
                            t.keyCode)
                          ) {
                            case o.HOME:
                            case o.END:
                              return (
                                t.keyCode === o.END
                                  ? (e.selectedIdx = e.links.length - 1)
                                  : (e.selectedIdx = 0),
                                S(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ESCAPE:
                              return (
                                k(e),
                                e.button.focus(),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                              return (
                                (e.selectedIdx = Math.max(
                                  -1,
                                  e.selectedIdx - 1
                                )),
                                S(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                              return (
                                (e.selectedIdx = Math.min(
                                  e.links.length - 1,
                                  e.selectedIdx + 1
                                )),
                                S(e),
                                t.preventDefault(),
                                t.stopPropagation()
                              );
                          }
                      };
                    })(r)
                  )),
              P(n, a);
          }
          function N(t, n) {
            var a = e.data(n, E);
            a && (A(a), e.removeData(n, E));
          }
          function A(e) {
            if (!!e.overlay) k(e, !0), e.overlay.remove(), (e.overlay = null);
          }
          function L(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function S(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), M(t);
            }
          }
          function C(e) {
            if (!!e.open) k(e, !0), G(e, !0);
          }
          function w(e) {
            return p(function () {
              e.open ? k(e) : G(e);
            });
          }
          function M(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget)) {
                n.preventDefault();
                return;
              }
              i && 0 === i.indexOf("#") && t.open && k(t);
            };
          }
          var x = p(function (e, t) {
            if (!!e.open) {
              var n = t.closest(".w-nav-menu");
              !e.menu.is(n) && k(e);
            }
          });
          function P(t, n) {
            var a = e.data(n, E),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((a.open && !i && !c && k(a, !0), a.container.length)) {
              var o = (function (t) {
                var n = t.container.css(U);
                return (
                  "none" === n && (n = ""),
                  function (t, a) {
                    (a = e(a)).css(U, ""), "none" === a.css(U) && a.css(U, n);
                  }
                );
              })(a);
              a.links.each(o), a.dropdowns.each(o);
            }
            a.open && D(a);
          }
          var U = "max-width";
          function F(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function V(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function G(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(F),
                e.links.addClass(m),
                e.dropdowns.addClass(T),
                e.dropdownToggle.addClass(I),
                e.dropdownList.addClass(b),
                e.button.addClass(y);
              var n = e.config;
              ("none" === n.animation ||
                !s.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = D(e),
                o = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                d = e.el.height(),
                l = e.el[0];
              if (
                (P(0, l),
                O.intro(0, l),
                a.redraw.up(),
                !c && f.on("click" + E, e.outside),
                t)
              ) {
                p();
                return;
              }
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                s(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * r, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(r);
                return;
              }
              s(e.menu)
                .add(u)
                .set({ y: -(d + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function D(e) {
            var t = e.config,
              a = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function k(e, t) {
            if (!!e.open) {
              (e.open = !1), e.button.removeClass(y);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !s.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + E, e.outside),
                t)
              ) {
                s(e.menu).stop(), c();
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                r = e.el.height();
              if (n.animOver) {
                s(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(c);
                return;
              }
              s(e.menu)
                .add(a)
                .start({ y: -(r + i) })
                .then(c);
            }
            function c() {
              e.menu.height(""),
                s(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(V),
                e.links.removeClass(m),
                e.dropdowns.removeClass(T),
                e.dropdownToggle.removeClass(I),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return l;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        actionListPlaybackChanged: function () {
          return B;
        },
        animationFrameChanged: function () {
          return V;
        },
        clearRequested: function () {
          return x;
        },
        elementStateChanged: function () {
          return H;
        },
        eventListenerAdded: function () {
          return P;
        },
        eventStateChanged: function () {
          return F;
        },
        instanceAdded: function () {
          return D;
        },
        instanceRemoved: function () {
          return X;
        },
        instanceStarted: function () {
          return k;
        },
        mediaQueriesDefined: function () {
          return Y;
        },
        parameterChanged: function () {
          return G;
        },
        playbackRequested: function () {
          return w;
        },
        previewRequested: function () {
          return C;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return A;
        },
        sessionStarted: function () {
          return L;
        },
        sessionStopped: function () {
          return S;
        },
        stopRequested: function () {
          return M;
        },
        testFrameRendered: function () {
          return U;
        },
        viewportWidthChanged: function () {
          return z;
        },
      });
      let a = n(7087),
        i = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: d,
          IX2_PREVIEW_REQUESTED: l,
          IX2_PLAYBACK_REQUESTED: s,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: f,
          IX2_EVENT_LISTENER_ADDED: p,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: E,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: I,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: m,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
          IX2_VIEWPORT_WIDTH_CHANGED: _,
          IX2_MEDIA_QUERIES_DEFINED: R,
        } = a.IX2EngineActionTypes,
        { reifyState: h } = i.IX2VanillaUtils,
        N = (e) => ({ type: o, payload: { ...h(e) } }),
        A = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: r,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        L = () => ({ type: c }),
        S = () => ({ type: d }),
        C = ({ rawData: e, defer: t }) => ({
          type: l,
          payload: { defer: t, rawData: e },
        }),
        w = ({
          actionTypeId: e = a.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: o,
          immediate: r,
          testManual: c,
          verbose: d,
          rawData: l,
        }) => ({
          type: s,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: i,
            allowEvents: o,
            immediate: r,
            verbose: d,
            rawData: l,
          },
        }),
        M = (e) => ({ type: u, payload: { actionListId: e } }),
        x = () => ({ type: f }),
        P = (e, t) => ({ type: p, payload: { target: e, listenerParams: t } }),
        U = (e = 1) => ({ type: g, payload: { step: e } }),
        F = (e, t) => ({ type: E, payload: { stateKey: e, newState: t } }),
        V = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        G = (e, t) => ({ type: T, payload: { key: e, value: t } }),
        D = (e) => ({ type: I, payload: { ...e } }),
        k = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        X = (e) => ({ type: m, payload: { instanceId: e } }),
        H = (e, t, n, a) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        B = ({ actionListId: e, isPlaying: t }) => ({
          type: v,
          payload: { actionListId: e, isPlaying: t },
        }),
        z = ({ width: e, mediaQueries: t }) => ({
          type: _,
          payload: { width: e, mediaQueries: t },
        }),
        Y = () => ({ type: R });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        actions: function () {
          return r;
        },
        destroy: function () {
          return u;
        },
        init: function () {
          return s;
        },
        setEnv: function () {
          return l;
        },
        store: function () {
          return d;
        },
      });
      let a = n(9516),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(7243)),
        o = n(1970),
        r = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, a.createStore)(i.default);
      function l(e) {
        e() && (0, o.observeRequests)(d);
      }
      function s(e) {
        u(), (0, o.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function u() {
        (0, o.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        elementContains: function () {
          return T;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return f;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return v;
        },
        getSiblingElements: function () {
          return m;
        },
        getStyle: function () {
          return u;
        },
        getValidDocument: function () {
          return E;
        },
        isSiblingNode: function () {
          return I;
        },
        matchSelector: function () {
          return p;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return s;
        },
      });
      let a = n(9468),
        i = n(7087),
        { ELEMENT_MATCHES: o } = a.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: r,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: d,
          WF_PAGE: l,
        } = i.IX2EngineConstants;
      function s(e, t, n) {
        e.style[t] = n;
      }
      function u(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function f(e, t) {
        return e[t];
      }
      function p(e) {
        return (t) => t[o](e);
      }
      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(r)) {
            let n = e.split(r),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(l)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function E(e) {
        return null == e || e === document.documentElement.getAttribute(l)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function T(e, t) {
        return e.contains(t);
      }
      function I(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (!!i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function m(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[o] && n[o](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function v(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : d
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        observeRequests: function () {
          return $;
        },
        startActionGroup: function () {
          return ef;
        },
        startEngine: function () {
          return et;
        },
        stopActionGroup: function () {
          return eu;
        },
        stopAllActionGroups: function () {
          return es;
        },
        stopEngine: function () {
          return en;
        },
      });
      let a = y(n(9777)),
        i = y(n(4738)),
        o = y(n(4659)),
        r = y(n(3452)),
        c = y(n(6633)),
        d = y(n(3729)),
        l = y(n(2397)),
        s = y(n(5082)),
        u = n(7087),
        f = n(9468),
        p = n(3946),
        g = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = T(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        E = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (T = function (e) {
          return e ? n : t;
        })(e);
      }
      let I = Object.keys(u.QuickEffectIds),
        b = (e) => I.includes(e),
        {
          COLON_DELIMITER: m,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: v,
          RENDER_GENERAL: _,
          W_MOD_IX: R,
        } = u.IX2EngineConstants,
        {
          getAffectedElements: h,
          getElementId: N,
          getDestinationValues: A,
          observeStore: L,
          getInstanceId: S,
          renderHTMLElement: C,
          clearAllStyles: w,
          getMaxDurationItemIndex: M,
          getComputedStyle: x,
          getInstanceOrigin: P,
          reduceListToGroup: U,
          shouldNamespaceEventParameter: F,
          getNamespacedParameterId: V,
          shouldAllowMediaQuery: G,
          cleanupHTMLElement: D,
          clearObjectCache: k,
          stringifyTarget: X,
          mediaQueriesEqual: H,
          shallowEqual: B,
        } = f.IX2VanillaUtils,
        {
          isPluginType: z,
          createPluginInstance: Y,
          getPluginDuration: j,
        } = f.IX2VanillaPlugins,
        W = navigator.userAgent,
        Q = W.match(/iPad/i) || W.match(/iPhone/);
      function $(e) {
        L({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: q }),
          L({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: Z,
          }),
          L({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: J }),
          L({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: ee });
      }
      function q({ rawData: e, defer: t }, n) {
        let a = () => {
          et({ store: n, rawData: e, allowEvents: !0 }), K();
        };
        t ? setTimeout(a, 0) : a();
      }
      function K() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function Z(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: c,
            testManual: d,
            verbose: l = !0,
          } = e,
          { rawData: s } = e;
        if (a && i && s && c) {
          let e = s.actionLists[a];
          e && (s = U({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (et({ store: t, rawData: s, allowEvents: r, testManual: d }),
          (a && n === u.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
        ) {
          eu({ store: t, actionListId: a }),
            el({ store: t, actionListId: a, eventId: o });
          let e = ef({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: c,
            verbose: l,
          });
          l &&
            e &&
            t.dispatch(
              (0, p.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !c,
              })
            );
        }
      }
      function J({ actionListId: e }, t) {
        e ? eu({ store: t, actionListId: e }) : es({ store: t }), en(t);
      }
      function ee(e, t) {
        en(t), w({ store: t, elementApi: g });
      }
      function et({ store: e, rawData: t, allowEvents: n, testManual: r }) {
        let { ixSession: c } = e.getState();
        if ((t && e.dispatch((0, p.rawDataImported)(t)), !c.active)) {
          if (
            (e.dispatch(
              (0, p.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(O),
                reducedMotion:
                  document.body.hasAttribute("data-wf-ix-vacation") &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              })
            ),
            n &&
              ((function (e) {
                let { ixData: t } = e.getState(),
                  { eventTypeMap: n } = t;
                eo(e),
                  (0, l.default)(n, (t, n) => {
                    let r = E.default[n];
                    if (!r) {
                      console.warn(`IX2 event type not configured: ${n}`);
                      return;
                    }
                    (function ({ logic: e, store: t, events: n }) {
                      (function (e) {
                        if (!Q) return;
                        let t = {},
                          n = "";
                        for (let a in e) {
                          let { eventTypeId: i, target: o } = e[a],
                            r = g.getQuerySelector(o);
                          if (!t[r])
                            (i === u.EventTypeConsts.MOUSE_CLICK ||
                              i === u.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                              ((t[r] = !0),
                              (n +=
                                r +
                                "{cursor: pointer;touch-action: manipulation;}"));
                        }
                        if (n) {
                          let e = document.createElement("style");
                          (e.textContent = n), document.body.appendChild(e);
                        }
                      })(n);
                      let { types: r, handler: c } = e,
                        { ixData: d } = t.getState(),
                        { actionLists: f } = d,
                        E = er(n, ed);
                      if (!(0, o.default)(E)) return;
                      (0, l.default)(E, (e, o) => {
                        let r = n[o],
                          {
                            action: c,
                            id: l,
                            mediaQueries: s = d.mediaQueryKeys,
                          } = r,
                          { actionListId: E } = c.config;
                        !H(s, d.mediaQueryKeys) &&
                          t.dispatch((0, p.mediaQueriesDefined)()),
                          c.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                            (Array.isArray(r.config)
                              ? r.config
                              : [r.config]
                            ).forEach((n) => {
                              let { continuousParameterGroupId: o } = n,
                                r = (0, i.default)(
                                  f,
                                  `${E}.continuousParameterGroups`,
                                  []
                                ),
                                c = (0, a.default)(r, ({ id: e }) => e === o),
                                d = (n.smoothing || 0) / 100,
                                s = (n.restingState || 0) / 100;
                              if (!!c)
                                e.forEach((e, a) => {
                                  !(function ({
                                    store: e,
                                    eventStateKey: t,
                                    eventTarget: n,
                                    eventId: a,
                                    eventConfig: o,
                                    actionListId: r,
                                    parameterGroup: c,
                                    smoothing: d,
                                    restingValue: l,
                                  }) {
                                    let { ixData: s, ixSession: f } =
                                        e.getState(),
                                      { events: p } = s,
                                      E = p[a],
                                      { eventTypeId: y } = E,
                                      T = {},
                                      I = {},
                                      b = [],
                                      { continuousActionGroups: v } = c,
                                      { id: _ } = c;
                                    F(y, o) && (_ = V(t, _));
                                    let R =
                                      f.hasBoundaryNodes && n
                                        ? g.getClosestElement(n, O)
                                        : null;
                                    v.forEach((e) => {
                                      let { keyframe: t, actionItems: a } = e;
                                      a.forEach((e) => {
                                        let { actionTypeId: a } = e,
                                          { target: i } = e.config;
                                        if (!i) return;
                                        let o = i.boundaryMode ? R : null,
                                          r = X(i) + m + a;
                                        if (
                                          ((I[r] = (function (e = [], t, n) {
                                            let a;
                                            let i = [...e];
                                            return (
                                              i.some(
                                                (e, n) =>
                                                  e.keyframe === t &&
                                                  ((a = n), !0)
                                              ),
                                              null == a &&
                                                ((a = i.length),
                                                i.push({
                                                  keyframe: t,
                                                  actionItems: [],
                                                })),
                                              i[a].actionItems.push(n),
                                              i
                                            );
                                          })(I[r], t, e)),
                                          !T[r])
                                        ) {
                                          T[r] = !0;
                                          let { config: t } = e;
                                          h({
                                            config: t,
                                            event: E,
                                            eventTarget: n,
                                            elementRoot: o,
                                            elementApi: g,
                                          }).forEach((e) => {
                                            b.push({ element: e, key: r });
                                          });
                                        }
                                      });
                                    }),
                                      b.forEach(({ element: t, key: n }) => {
                                        let o = I[n],
                                          c = (0, i.default)(
                                            o,
                                            "[0].actionItems[0]",
                                            {}
                                          ),
                                          { actionTypeId: s } = c,
                                          f = (
                                            s === u.ActionTypeConsts.PLUGIN_RIVE
                                              ? 0 ===
                                                (
                                                  c.config?.target
                                                    ?.selectorGuids || []
                                                ).length
                                              : z(s)
                                          )
                                            ? Y(s)?.(t, c)
                                            : null,
                                          p = A(
                                            {
                                              element: t,
                                              actionItem: c,
                                              elementApi: g,
                                            },
                                            f
                                          );
                                        ep({
                                          store: e,
                                          element: t,
                                          eventId: a,
                                          actionListId: r,
                                          actionItem: c,
                                          destination: p,
                                          continuous: !0,
                                          parameterId: _,
                                          actionGroups: o,
                                          smoothing: d,
                                          restingValue: l,
                                          pluginInstance: f,
                                        });
                                      });
                                  })({
                                    store: t,
                                    eventStateKey: l + m + a,
                                    eventTarget: e,
                                    eventId: l,
                                    eventConfig: n,
                                    actionListId: E,
                                    parameterGroup: c,
                                    smoothing: d,
                                    restingValue: s,
                                  });
                                });
                            }),
                          (c.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_START_ACTION ||
                            b(c.actionTypeId)) &&
                            el({ store: t, actionListId: E, eventId: l });
                      });
                      let y = (e) => {
                          let { ixSession: a } = t.getState();
                          ec(E, (i, o, r) => {
                            let l = n[o],
                              s = a.eventState[r],
                              {
                                action: f,
                                mediaQueries: g = d.mediaQueryKeys,
                              } = l;
                            if (!G(g, a.mediaQueryKey)) return;
                            let E = (n = {}) => {
                              let a = c(
                                {
                                  store: t,
                                  element: i,
                                  event: l,
                                  eventConfig: n,
                                  nativeEvent: e,
                                  eventStateKey: r,
                                },
                                s
                              );
                              !B(a, s) &&
                                t.dispatch((0, p.eventStateChanged)(r, a));
                            };
                            f.actionTypeId ===
                            u.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                              ? (Array.isArray(l.config)
                                  ? l.config
                                  : [l.config]
                                ).forEach(E)
                              : E();
                          });
                        },
                        T = (0, s.default)(y, 12),
                        I = ({
                          target: e = document,
                          types: n,
                          throttle: a,
                        }) => {
                          n.split(" ")
                            .filter(Boolean)
                            .forEach((n) => {
                              let i = a ? T : y;
                              e.addEventListener(n, i),
                                t.dispatch(
                                  (0, p.eventListenerAdded)(e, [n, i])
                                );
                            });
                        };
                      Array.isArray(r)
                        ? r.forEach(I)
                        : "string" == typeof r && I(e);
                    })({ logic: r, store: e, events: t });
                  });
                let { ixSession: r } = e.getState();
                r.eventListeners.length &&
                  (function (e) {
                    let t = () => {
                      eo(e);
                    };
                    ei.forEach((n) => {
                      window.addEventListener(n, t),
                        e.dispatch((0, p.eventListenerAdded)(window, [n, t]));
                    }),
                      t();
                  })(e);
              })(e),
              (function () {
                let { documentElement: e } = document;
                -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
              })(),
              e.getState().ixSession.hasDefinedMediaQueries))
          ) {
            var d;
            L({
              store: (d = e),
              select: ({ ixSession: e }) => e.mediaQueryKey,
              onChange: () => {
                en(d),
                  w({ store: d, elementApi: g }),
                  et({ store: d, allowEvents: !0 }),
                  K();
              },
            });
          }
          e.dispatch((0, p.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                i.active &&
                  (e.dispatch((0, p.animationFrameChanged)(a, o)),
                  t
                    ? !(function (e, t) {
                        let n = L({
                          store: e,
                          select: ({ ixSession: e }) => e.tick,
                          onChange: (e) => {
                            t(e), n();
                          },
                        });
                      })(e, n)
                    : requestAnimationFrame(n));
              };
              n(window.performance.now());
            })(e, r);
        }
      }
      function en(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(ea), k(), e.dispatch((0, p.sessionStopped)());
        }
      }
      function ea({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let ei = ["resize", "orientationchange"];
      function eo(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, p.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let er = (e, t) => (0, r.default)((0, d.default)(e, t), c.default),
        ec = (e, t) => {
          (0, l.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + m + a);
            });
          });
        },
        ed = (e) =>
          h({
            config: { target: e.target, targets: e.targets },
            elementApi: g,
          });
      function el({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: o } = e.getState(),
          { actionLists: r, events: c } = a,
          d = c[n],
          l = r[t];
        if (l && l.useFirstGroupAsInitialState) {
          let r = (0, i.default)(l, "actionItemGroups[0].actionItems", []);
          if (
            !G(
              (0, i.default)(d, "mediaQueries", a.mediaQueryKeys),
              o.mediaQueryKey
            )
          )
            return;
          r.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = h({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: d.target, targets: d.targets }
                    : i,
                event: d,
                elementApi: g,
              }),
              c = z(o);
            r.forEach((i) => {
              let r = c ? Y(o)?.(i, a) : null;
              ep({
                destination: A({ element: i, actionItem: a, elementApi: g }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function es({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, l.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            eg(t, e),
              a &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eu({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: o,
      }) {
        let { ixInstances: r, ixSession: c } = e.getState(),
          d = c.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null;
        (0, l.default)(r, (n) => {
          let r = (0, i.default)(n, "actionItem.config.target.boundaryMode"),
            c = !a || n.eventStateKey === a;
          if (n.actionListId === o && n.eventId === t && c) {
            if (d && r && !g.elementContains(d, n.element)) return;
            eg(n, e),
              n.verbose &&
                e.dispatch(
                  (0, p.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ef({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: o,
        groupIndex: r = 0,
        immediate: c,
        verbose: d,
      }) {
        let { ixData: l, ixSession: s } = e.getState(),
          { events: u } = l,
          f = u[t] || {},
          { mediaQueries: p = l.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: y } = (0,
          i.default)(l, `actionLists.${o}`, {});
        if (!E || !E.length) return !1;
        r >= E.length && (0, i.default)(f, "config.loop") && (r = 0),
          0 === r && y && r++;
        let T =
            (0 === r || (1 === r && y)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          I = (0, i.default)(E, [r, "actionItems"], []);
        if (!I.length || !G(p, s.mediaQueryKey)) return !1;
        let m = s.hasBoundaryNodes && n ? g.getClosestElement(n, O) : null,
          v = M(I),
          _ = !1;
        return (
          I.forEach((i, l) => {
            let { config: s, actionTypeId: u } = i,
              p = z(u),
              { target: E } = s;
            if (!!E)
              h({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? m : null,
                elementApi: g,
              }).forEach((s, f) => {
                let E = p ? Y(u)?.(s, i) : null,
                  y = p ? j(u)(s, i) : null;
                _ = !0;
                let I = x({ element: s, actionItem: i }),
                  b = A({ element: s, actionItem: i, elementApi: g }, E);
                ep({
                  store: e,
                  element: s,
                  actionItem: i,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: o,
                  groupIndex: r,
                  isCarrier: v === l && 0 === f,
                  computedStyle: I,
                  destination: b,
                  immediate: c,
                  verbose: d,
                  pluginInstance: E,
                  pluginDuration: y,
                  instanceDelay: T,
                });
              });
          }),
          _
        );
      }
      function ep(e) {
        let t;
        let { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: c,
            pluginInstance: d,
            continuous: l,
            restingValue: s,
            eventId: f,
          } = i,
          E = S(),
          { ixElements: y, ixSession: T, ixData: I } = n.getState(),
          b = N(y, o),
          { refState: m } = y[b] || {},
          O = g.getRefType(o),
          v = T.reducedMotion && u.ReducedMotionTypes[r.actionTypeId];
        if (v && l)
          switch (I.events[f]?.eventTypeId) {
            case u.EventTypeConsts.MOUSE_MOVE:
            case u.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let _ = P(o, m, a, r, g, d);
        if (
          (n.dispatch(
            (0, p.instanceAdded)({
              instanceId: E,
              elementId: b,
              origin: _,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eE(document.body, "ix2-animation-started", E),
          c)
        ) {
          (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, p.instanceStarted)(t, 0)),
              e.dispatch((0, p.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            ey(a[t], e);
          })(n, E);
          return;
        }
        L({ store: n, select: ({ ixInstances: e }) => e[E], onChange: ey }),
          !l && n.dispatch((0, p.instanceStarted)(E, T.tick));
      }
      function eg(e, t) {
        eE(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        r === v && D(o, a, g), t.dispatch((0, p.instanceRemoved)(e.id));
      }
      function eE(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: c,
            renderType: d,
            current: l,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: E,
            actionListId: y,
            isCarrier: T,
            styleProp: I,
            verbose: b,
            pluginInstance: m,
          } = e,
          { ixData: O, ixSession: R } = t.getState(),
          { events: h } = O,
          { mediaQueries: N = O.mediaQueryKeys } = h && h[u] ? h[u] : {};
        if (!!G(N, R.mediaQueryKey)) {
          if (a || n || i) {
            if (l || (d === _ && i)) {
              t.dispatch((0, p.elementStateChanged)(o, c, l, r));
              let { ixElements: e } = t.getState(),
                { ref: n, refType: a, refState: i } = e[o] || {},
                s = i && i[c];
              (a === v || z(c)) && C(n, i, s, u, r, I, g, d, m);
            }
            if (i) {
              if (T) {
                let e = ef({
                  store: t,
                  eventId: u,
                  eventTarget: f,
                  eventStateKey: E,
                  actionListId: y,
                  groupIndex: s + 1,
                  verbose: b,
                });
                b &&
                  !e &&
                  t.dispatch(
                    (0, p.actionListPlaybackChanged)({
                      actionListId: y,
                      isPlaying: !1,
                    })
                  );
              }
              eg(e, t);
            }
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a, i, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return eE;
          },
        });
      let r = p(n(5801)),
        c = p(n(4738)),
        d = p(n(3789)),
        l = n(7087),
        s = n(1970),
        u = n(3946),
        f = n(9468);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: g,
          MOUSE_SECOND_CLICK: E,
          MOUSE_DOWN: y,
          MOUSE_UP: T,
          MOUSE_OVER: I,
          MOUSE_OUT: b,
          DROPDOWN_CLOSE: m,
          DROPDOWN_OPEN: O,
          SLIDER_ACTIVE: v,
          SLIDER_INACTIVE: _,
          TAB_ACTIVE: R,
          TAB_INACTIVE: h,
          NAVBAR_CLOSE: N,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: L,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: C,
          SCROLL_OUT_OF_VIEW: w,
          PAGE_SCROLL_UP: M,
          SCROLLING_IN_VIEW: x,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: U,
          ECOMMERCE_CART_OPEN: F,
          PAGE_START: V,
          PAGE_SCROLL: G,
        } = l.EventTypeConsts,
        D = "COMPONENT_ACTIVE",
        k = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: X } = l.IX2EngineConstants,
        { getNamespacedParameterId: H } = f.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        z = B(({ element: e, nativeEvent: t }) => e === t.target),
        Y = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        j = (0, r.default)([z, Y]),
        W = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !en[i.eventTypeId]) return i;
          }
          return null;
        },
        Q = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!W(e, a);
        },
        $ = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: o, id: r } = t,
            { actionListId: d, autoStopEventId: l } = o.config,
            u = W(e, l);
          return (
            u &&
              (0, s.stopActionGroup)({
                store: e,
                eventId: l,
                eventTarget: n,
                eventStateKey: l + X + a.split(X)[1],
                actionListId: (0, c.default)(u, "action.config.actionListId"),
              }),
            (0, s.stopActionGroup)({
              store: e,
              eventId: r,
              eventTarget: n,
              eventStateKey: a,
              actionListId: d,
            }),
            (0, s.startActionGroup)({
              store: e,
              eventId: r,
              eventTarget: n,
              eventStateKey: a,
              actionListId: d,
            }),
            i
          );
        },
        q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        K = { handler: q(j, $) },
        Z = { ...K, types: [D, k].join(" ") },
        J = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        ee = "mouseover mouseout",
        et = { types: J },
        en = { PAGE_START: V, PAGE_FINISH: P },
        ea = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, d.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        ei = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        eo = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return ("mouseout" === n && !!o && !!r) || !1;
        },
        er = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = ea(),
            o = n.scrollOffsetValue,
            r = n.scrollOffsetUnit,
            c = "PX" === r ? o : (i * (o || 0)) / 100;
          return ei(t.getBoundingClientRect(), {
            left: 0,
            top: c,
            right: a,
            bottom: i - c,
          });
        },
        ec = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [D, k].indexOf(a) ? a === D : n.isActive,
            o = { ...n, isActive: i };
          return n && o.isActive === n.isActive ? o : e(t, o) || o;
        },
        ed = (e) => (t, n) => {
          let a = { elementHovered: eo(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let a, i;
            let { stiffScrollTop: o, scrollHeight: r, innerHeight: c } = ea(),
              {
                event: { config: d, eventTypeId: l },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = d,
              f = r - c,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let g = ("PX" === u ? s : (c * (s || 0)) / 100) / f,
              E = 0;
            n &&
              ((a = p > n.percentTop),
              (E = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let y = l === S ? p >= E + g : p <= E - g,
              T = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: E,
                scrollingDown: a,
              };
            return (n && y && (i || T.inBounds !== n.inBounds) && e(t, T)) || T;
          },
        es = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        eu =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        ef = (e = !0) => ({
          ...Z,
          handler: q(
            e ? j : z,
            ec((e, t) => (t.isActive ? K.handler(e, t) : t))
          ),
        }),
        ep = (e = !0) => ({
          ...Z,
          handler: q(
            e ? j : z,
            ec((e, t) => (t.isActive ? t : K.handler(e, t)))
          ),
        });
      let eg = {
        ...et,
        handler:
          ((a = (e, t) => {
            let { elementVisible: n } = t,
              { event: a, store: i } = e,
              { ixData: o } = i.getState(),
              { events: r } = o;
            return !r[a.action.config.autoStopEventId] && t.triggered
              ? t
              : (a.eventTypeId === C) === n
              ? ($(e), { ...t, triggered: !0 })
              : t;
          }),
          (e, t) => {
            let n = { ...t, elementVisible: er(e) };
            return (
              ((t ? n.elementVisible !== t.elementVisible : n.elementVisible) &&
                a(e, n)) ||
              n
            );
          }),
      };
      let eE = {
        [v]: ef(),
        [_]: ep(),
        [O]: ef(),
        [m]: ep(),
        [A]: ef(!1),
        [N]: ep(!1),
        [R]: ef(),
        [h]: ep(),
        [F]: { types: "ecommerce-cart-open", handler: q(j, $) },
        [U]: { types: "ecommerce-cart-close", handler: q(j, $) },
        [g]: {
          types: "click",
          handler: q(
            j,
            eu((e, { clickCount: t }) => {
              Q(e) ? 1 === t && $(e) : $(e);
            })
          ),
        },
        [E]: {
          types: "click",
          handler: q(
            j,
            eu((e, { clickCount: t }) => {
              2 === t && $(e);
            })
          ),
        },
        [y]: { ...K, types: "mousedown" },
        [T]: { ...K, types: "mouseup" },
        [I]: {
          types: ee,
          handler: q(
            j,
            ed((e, t) => {
              t.elementHovered && $(e);
            })
          ),
        },
        [b]: {
          types: ee,
          handler: q(
            j,
            ed((e, t) => {
              !t.elementHovered && $(e);
            })
          ),
        },
        [L]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: a,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: r,
                selectedAxis: c,
                continuousParameterGroupId: d,
                reverse: s,
                restingState: f = 0,
              } = n,
              {
                clientX: p = o.clientX,
                clientY: g = o.clientY,
                pageX: E = o.pageX,
                pageY: y = o.pageY,
              } = a,
              T = "X_AXIS" === c,
              I = "mouseout" === a.type,
              b = f / 100,
              m = d,
              O = !1;
            switch (r) {
              case l.EventBasedOn.VIEWPORT:
                b = T
                  ? Math.min(p, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              case l.EventBasedOn.PAGE: {
                let {
                  scrollLeft: e,
                  scrollTop: t,
                  scrollWidth: n,
                  scrollHeight: a,
                } = ea();
                b = T ? Math.min(e + E, n) / n : Math.min(t + y, a) / a;
                break;
              }
              case l.EventBasedOn.ELEMENT:
              default: {
                m = H(i, d);
                let e = 0 === a.type.indexOf("mouse");
                if (e && !0 !== j({ element: t, nativeEvent: a })) break;
                let n = t.getBoundingClientRect(),
                  { left: o, top: r, width: c, height: l } = n;
                if (!e && !es({ left: p, top: g }, n)) break;
                (O = !0), (b = T ? (p - o) / c : (g - r) / l);
              }
            }
            return (
              I && (b > 0.95 || b < 0.05) && (b = Math.round(b)),
              (r !== l.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                ((b = s ? 1 - b : b),
                e.dispatch((0, u.parameterChanged)(m, b))),
              { elementHovered: O, clientX: p, clientY: g, pageX: E, pageY: y }
            );
          },
        },
        [G]: {
          types: J,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: a } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: r } = ea(),
              c = i / (o - r);
            (c = a ? 1 - c : c), e.dispatch((0, u.parameterChanged)(n, c));
          },
        },
        [x]: {
          types: J,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: a },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: r,
                scrollWidth: c,
                scrollHeight: d,
                clientHeight: s,
              } = ea(),
              {
                basedOn: f,
                selectedAxis: p,
                continuousParameterGroupId: g,
                startsEntering: E,
                startsExiting: y,
                addEndOffset: T,
                addStartOffset: I,
                addOffsetValue: b = 0,
                endOffsetValue: m = 0,
              } = n;
            if (f === l.EventBasedOn.VIEWPORT) {
              let e = "X_AXIS" === p ? o / c : r / d;
              return (
                e !== i.scrollPercent &&
                  t.dispatch((0, u.parameterChanged)(g, e)),
                { scrollPercent: e }
              );
            }
            {
              let n = H(a, g),
                o = e.getBoundingClientRect(),
                r = (I ? b : 0) / 100,
                c = (T ? m : 0) / 100;
              (r = E ? r : 1 - r), (c = y ? c : 1 - c);
              let l = o.top + Math.min(o.height * r, s),
                f = o.top + o.height * c,
                p = Math.min(s + (f - l), d),
                O = Math.min(Math.max(0, s - l), p) / p;
              return (
                O !== i.scrollPercent &&
                  t.dispatch((0, u.parameterChanged)(n, O)),
                { scrollPercent: O }
              );
            }
          },
        },
        [C]: eg,
        [w]: eg,
        [S]: {
          ...et,
          handler: el((e, t) => {
            t.scrollingDown && $(e);
          }),
        },
        [M]: {
          ...et,
          handler: el((e, t) => {
            !t.scrollingDown && $(e);
          }),
        },
        [P]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: q(
            z,
            ((i = $),
            (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && i(e), n;
            })
          ),
        },
        [V]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: q(z, ((o = $), (e, t) => (t || o(e), { started: !0 }))),
        },
      };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) => {
          if (t.type === a) return t.payload.ixData || Object.freeze({});
          return e;
        };
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: d,
          IX2_INSTANCE_STARTED: l,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: g,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: E } = a.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: T,
          getStyleProp: I,
        } = i.IX2VanillaUtils,
        b = (e, t) => {
          let n, a, i, r;
          let {
              position: c,
              parameterId: d,
              actionGroups: l,
              destinationKeys: s,
              smoothing: u,
              restingValue: g,
              actionTypeId: E,
              customEasingFn: T,
              skipMotion: I,
              skipToValue: b,
            } = e,
            { parameters: m } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = m[d];
          null == v && ((O = 1), (v = g));
          let _ = f((Math.max(v, 0) || 0) - c),
            R = I ? b : f(c + _ * O),
            h = 100 * R;
          if (R === c && e.current) return e;
          for (let e = 0, { length: t } = l; e < t; e++) {
            let { keyframe: t, actionItems: o } = l[e];
            if ((0 === e && (n = o[0]), h >= t)) {
              n = o[0];
              let c = l[e + 1],
                d = c && h !== t;
              (a = d ? c.actionItems[0] : null),
                d && ((i = t / 100), (r = (c.keyframe - t) / 100));
            }
          }
          let N = {};
          if (n && !a)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              N[t] = y(E, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (R - i) / r,
              t = p(n.config.easing, e, T);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = y(E, i, n.config),
                r = (y(E, i, a.config) - o) * t + o;
              N[i] = r;
            }
          }
          return (0, o.merge)(e, { position: R, current: N });
        },
        m = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: c,
              verbose: d,
              actionItem: l,
              destination: s,
              destinationKeys: u,
              pluginDuration: g,
              instanceDelay: y,
              customEasingFn: T,
              skipMotion: I,
            } = e,
            b = l.config.easing,
            { duration: m, delay: O } = l.config;
          null != g && (m = g),
            (O = null != y ? y : O),
            c === E ? (m = 0) : (r || I) && (m = O = 0);
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (d) {
              let t = m + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / m), 1)),
              r = p(b, n, T),
              c = {},
              l = null;
            return (
              u.length &&
                (l = u.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * r + i), e;
                }, {})),
              (c.current = l),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, o.merge)(e, c)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case d: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: c,
                  eventStateKey: d,
                  actionListId: l,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: y,
                  continuous: b,
                  parameterId: m,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: _,
                  pluginInstance: R,
                  pluginDuration: h,
                  instanceDelay: N,
                  skipMotion: A,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: S } = i,
                C = T(S),
                w = I(C, S),
                M = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: x } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: M,
                immediate: E,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: S,
                eventId: r,
                eventTarget: c,
                eventStateKey: d,
                actionListId: l,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: w,
                continuous: b,
                parameterId: m,
                actionGroups: O,
                smoothing: v,
                restingValue: _,
                pluginInstance: R,
                pluginDuration: h,
                instanceDelay: N,
                skipMotion: A,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(x) && 4 === x.length ? g(x) : void 0,
              });
            }
            case l: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  c = e[i],
                  d = c.continuous ? b : m;
                n = (0, o.set)(n, i, d(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        c = n(9468),
        d = n(7718),
        l = n(1540),
        { ixElements: s } = c.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: s,
          ixInstances: d.ixInstances,
          ixParameters: l.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: d,
        } = a.IX2EngineActionTypes,
        l = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [c]: { value: "stop" },
          [d]: { value: "clear" },
        }),
        u = (e = l, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: d,
          IX2_EVENT_LISTENER_ADDED: l,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: g,
        } = a.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = E, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case d:
              return E;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case l: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case g:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return d;
        },
        createPluginInstance: function () {
          return r;
        },
        getPluginConfig: function () {
          return n;
        },
        getPluginDestination: function () {
          return o;
        },
        getPluginDuration: function () {
          return a;
        },
        getPluginOrigin: function () {
          return i;
        },
        renderPlugin: function () {
          return c;
        },
      });
      let n = (e) => e.value,
        a = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        i = (e) => e || { value: 0 },
        o = (e) => ({ value: e.value }),
        r = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        d = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return u;
        },
      });
      let n = "--wf-rive-fit",
        a = "--wf-rive-alignment",
        i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("rive"),
        r = (e, t) => e.value.inputs[t],
        c = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        l = (e) => e.value.inputs ?? {},
        s = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        u = (e, { PLUGIN_RIVE: t }, i) => {
          let r = o();
          if (!r) return;
          let c = r.getInstance(e),
            d = r.rive.StateMachineInputType,
            { name: l, inputs: s = {} } = i.config.value || {};
          function u(e) {
            if (e.loaded) i();
            else {
              let t = () => {
                i(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function i() {
              let i = e.stateMachineInputs(l);
              if (null != i) {
                if ((!e.isPlaying && e.play(l, !1), n in s || a in s)) {
                  let t = e.layout,
                    i = s[n] ?? t.fit,
                    o = s[a] ?? t.alignment;
                  (i !== t.fit || o !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: i, alignment: o }));
                }
                for (let e in s) {
                  if (e === n || e === a) continue;
                  let o = i.find((t) => t.name === e);
                  if (null != o)
                    switch (o.type) {
                      case d.Boolean:
                        if (null != s[e]) {
                          let t = !!s[e];
                          o.value = t;
                        }
                        break;
                      case d.Number: {
                        let n = t[e];
                        null != n && (o.value = n);
                        break;
                      }
                      case d.Trigger:
                        s[e] && o.fire();
                    }
                }
              }
            }
          }
          c?.rive ? u(c.rive) : r.setLoadHandler(e, u);
        },
        f = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return f;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return u;
        },
      });
      let n = (e) => document.querySelector(`[data-w-id="${e}"]`),
        a = () => window.Webflow.require("spline"),
        i = (e, t) => e.filter((e) => !t.includes(e)),
        o = (e, t) => e.value[t],
        r = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        d = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = i(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        l = (e) => e.value,
        s = (e, t) => {
          let a = t?.config?.target?.pluginElement;
          return a ? n(a) : null;
        },
        u = (e, t, n) => {
          let i = a();
          if (!i) return;
          let o = i.getInstance(e),
            r = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          o ? c(o.spline) : i.setLoadHandler(e, c);
        },
        f = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return u;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return s;
        },
      });
      let a = n(380),
        i = (e, t) => e.value[t],
        o = () => null,
        r = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            o = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(o, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(o) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, a.normalizeColor)(o)
            : void 0;
        },
        c = (e) => e.value,
        d = () => null,
        l = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => {
              if ("-" === t) return e;
              return `${e}${t}`;
            },
          },
        },
        s = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(l).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        u = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = n(7087),
        i = l(n(7377)),
        o = l(n(2866)),
        r = l(n(2570)),
        c = l(n(1407));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return I;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return f;
        },
        IX2_CLEAR_REQUESTED: function () {
          return l;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return T;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return s;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return u;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return E;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return m;
        },
        IX2_PARAMETER_CHANGED: function () {
          return p;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return r;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return n;
        },
        IX2_SESSION_INITIALIZED: function () {
          return a;
        },
        IX2_SESSION_STARTED: function () {
          return i;
        },
        IX2_SESSION_STOPPED: function () {
          return o;
        },
        IX2_STOP_REQUESTED: function () {
          return d;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      });
      let n = "IX2_RAW_DATA_IMPORTED",
        a = "IX2_SESSION_INITIALIZED",
        i = "IX2_SESSION_STARTED",
        o = "IX2_SESSION_STOPPED",
        r = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        d = "IX2_STOP_REQUESTED",
        l = "IX2_CLEAR_REQUESTED",
        s = "IX2_EVENT_LISTENER_ADDED",
        u = "IX2_EVENT_STATE_CHANGED",
        f = "IX2_ANIMATION_FRAME_CHANGED",
        p = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        E = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        I = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        m = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ABSTRACT_NODE: function () {
          return J;
        },
        AUTO: function () {
          return H;
        },
        BACKGROUND: function () {
          return F;
        },
        BACKGROUND_COLOR: function () {
          return U;
        },
        BAR_DELIMITER: function () {
          return Y;
        },
        BORDER_COLOR: function () {
          return V;
        },
        BOUNDARY_SELECTOR: function () {
          return r;
        },
        CHILDREN: function () {
          return j;
        },
        COLON_DELIMITER: function () {
          return z;
        },
        COLOR: function () {
          return G;
        },
        COMMA_DELIMITER: function () {
          return B;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return s;
        },
        CONFIG_X_UNIT: function () {
          return u;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return f;
        },
        CONFIG_Y_VALUE: function () {
          return d;
        },
        CONFIG_Z_UNIT: function () {
          return p;
        },
        CONFIG_Z_VALUE: function () {
          return l;
        },
        DISPLAY: function () {
          return D;
        },
        FILTER: function () {
          return w;
        },
        FLEX: function () {
          return k;
        },
        FONT_VARIATION_SETTINGS: function () {
          return M;
        },
        HEIGHT: function () {
          return P;
        },
        HTML_ELEMENT: function () {
          return K;
        },
        IMMEDIATE_CHILDREN: function () {
          return W;
        },
        IX2_ID_DELIMITER: function () {
          return n;
        },
        OPACITY: function () {
          return C;
        },
        PARENT: function () {
          return $;
        },
        PLAIN_OBJECT: function () {
          return Z;
        },
        PRESERVE_3D: function () {
          return q;
        },
        RENDER_GENERAL: function () {
          return et;
        },
        RENDER_PLUGIN: function () {
          return ea;
        },
        RENDER_STYLE: function () {
          return en;
        },
        RENDER_TRANSFORM: function () {
          return ee;
        },
        ROTATE_X: function () {
          return R;
        },
        ROTATE_Y: function () {
          return h;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return _;
        },
        SCALE_X: function () {
          return m;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return v;
        },
        SIBLINGS: function () {
          return Q;
        },
        SKEW: function () {
          return A;
        },
        SKEW_X: function () {
          return L;
        },
        SKEW_Y: function () {
          return S;
        },
        TRANSFORM: function () {
          return E;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return T;
        },
        TRANSLATE_Z: function () {
          return I;
        },
        WF_PAGE: function () {
          return a;
        },
        WIDTH: function () {
          return x;
        },
        WILL_CHANGE: function () {
          return X;
        },
        W_MOD_IX: function () {
          return o;
        },
        W_MOD_JS: function () {
          return i;
        },
      });
      let n = "|",
        a = "data-wf-page",
        i = "w-mod-js",
        o = "w-mod-ix",
        r = ".w-dyn-item",
        c = "xValue",
        d = "yValue",
        l = "zValue",
        s = "value",
        u = "xUnit",
        f = "yUnit",
        p = "zUnit",
        g = "unit",
        E = "transform",
        y = "translateX",
        T = "translateY",
        I = "translateZ",
        b = "translate3d",
        m = "scaleX",
        O = "scaleY",
        v = "scaleZ",
        _ = "scale3d",
        R = "rotateX",
        h = "rotateY",
        N = "rotateZ",
        A = "skew",
        L = "skewX",
        S = "skewY",
        C = "opacity",
        w = "filter",
        M = "font-variation-settings",
        x = "width",
        P = "height",
        U = "backgroundColor",
        F = "background",
        V = "borderColor",
        G = "color",
        D = "display",
        k = "flex",
        X = "willChange",
        H = "AUTO",
        B = ",",
        z = ":",
        Y = "|",
        j = "CHILDREN",
        W = "IMMEDIATE_CHILDREN",
        Q = "SIBLINGS",
        $ = "PARENT",
        q = "preserve-3d",
        K = "HTML_ELEMENT",
        Z = "PLAIN_OBJECT",
        J = "ABSTRACT_NODE",
        ee = "RENDER_TRANSFORM",
        et = "RENDER_GENERAL",
        en = "RENDER_STYLE",
        ea = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ActionAppliesTo: function () {
          return a;
        },
        ActionTypeConsts: function () {
          return n;
        },
      });
      let n = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        a = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ActionTypeConsts: function () {
          return i.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return o;
        },
        IX2EngineConstants: function () {
          return r;
        },
        QuickEffectIds: function () {
          return a.QuickEffectIds;
        },
      });
      let a = c(n(1833), t),
        i = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let o = l(n(8023)),
        r = l(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" !== n &&
              !Object.prototype.hasOwnProperty.call(t, n) &&
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: c,
          STYLE_FILTER: d,
          STYLE_FONT_VARIATION: l,
        } = n(262).ActionTypeConsts,
        s = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [c]: !0, [d]: !0, [l]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        EventAppliesTo: function () {
          return a;
        },
        EventBasedOn: function () {
          return i;
        },
        EventContinuousMouseAxes: function () {
          return o;
        },
        EventLimitAffectedElements: function () {
          return r;
        },
        EventTypeConsts: function () {
          return n;
        },
        QuickEffectDirectionConsts: function () {
          return d;
        },
        QuickEffectIds: function () {
          return c;
        },
      });
      let n = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        a = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        i = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        o = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        r = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        d = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t, a, i;
        let o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (c.startsWith("hsla")) {
          let e, n, r;
          let d = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            l = parseFloat(d[0]),
            s = parseFloat(d[1].replace("%", "")) / 100,
            u = parseFloat(d[2].replace("%", "")) / 100;
          o = parseFloat(d[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((l / 60) % 2) - 1)),
            g = u - f / 2;
          l >= 0 && l < 60
            ? ((e = f), (n = p), (r = 0))
            : l >= 60 && l < 120
            ? ((e = p), (n = f), (r = 0))
            : l >= 120 && l < 180
            ? ((e = 0), (n = f), (r = p))
            : l >= 180 && l < 240
            ? ((e = 0), (n = p), (r = f))
            : l >= 240 && l < 300
            ? ((e = p), (n = 0), (r = f))
            : ((e = f), (n = 0), (r = p)),
            (t = Math.round((e + g) * 255)),
            (a = Math.round((n + g) * 255)),
            (i = Math.round((r + g) * 255));
        } else if (c.startsWith("hsl")) {
          let e, n, o;
          let r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            d = parseFloat(r[0]),
            l = parseFloat(r[1].replace("%", "")) / 100,
            s = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * l,
            f = u * (1 - Math.abs(((d / 60) % 2) - 1)),
            p = s - u / 2;
          d >= 0 && d < 60
            ? ((e = u), (n = f), (o = 0))
            : d >= 60 && d < 120
            ? ((e = f), (n = u), (o = 0))
            : d >= 120 && d < 180
            ? ((e = 0), (n = u), (o = f))
            : d >= 180 && d < 240
            ? ((e = 0), (n = f), (o = u))
            : d >= 240 && d < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        IX2BrowserSupport: function () {
          return a;
        },
        IX2EasingUtils: function () {
          return o;
        },
        IX2Easings: function () {
          return i;
        },
        IX2ElementsReducer: function () {
          return r;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return d;
        },
      });
      let a = s(n(2662)),
        i = s(n(8686)),
        o = s(n(3767)),
        r = s(n(5861)),
        c = s(n(1799)),
        d = s(n(4124));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        ELEMENT_MATCHES: function () {
          return r;
        },
        FLEX_PREFIXED: function () {
          return c;
        },
        IS_BROWSER_ENV: function () {
          return i;
        },
        TRANSFORM_PREFIXED: function () {
          return d;
        },
        TRANSFORM_STYLE_PREFIXED: function () {
          return s;
        },
        withBrowser: function () {
          return o;
        },
      });
      let a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(9777)),
        i = "undefined" != typeof window,
        o = (e, t) => (i ? e() : t),
        r = o(() =>
          (0, a.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        c = o(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = o(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        l = d.split("transform")[0],
        s = l ? l + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        applyEasing: function () {
          return d;
        },
        createBezierEasing: function () {
          return c;
        },
        optimizeFloat: function () {
          return r;
        },
      });
      let a = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = o(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(a, r, c)
                : (a[r] = e[r]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1361));
      function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (o = function (e) {
          return e ? n : t;
        })(e);
      }
      function r(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function c(e) {
        return (0, i.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? r(t > 0 ? n(t) : t)
          : r(t > 0 && e && a[e] ? a[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        bounce: function () {
          return D;
        },
        bouncePast: function () {
          return k;
        },
        ease: function () {
          return i;
        },
        easeIn: function () {
          return o;
        },
        easeInOut: function () {
          return c;
        },
        easeOut: function () {
          return r;
        },
        inBack: function () {
          return C;
        },
        inCirc: function () {
          return N;
        },
        inCubic: function () {
          return u;
        },
        inElastic: function () {
          return x;
        },
        inExpo: function () {
          return _;
        },
        inOutBack: function () {
          return M;
        },
        inOutCirc: function () {
          return L;
        },
        inOutCubic: function () {
          return p;
        },
        inOutElastic: function () {
          return U;
        },
        inOutExpo: function () {
          return h;
        },
        inOutQuad: function () {
          return s;
        },
        inOutQuart: function () {
          return y;
        },
        inOutQuint: function () {
          return b;
        },
        inOutSine: function () {
          return v;
        },
        inQuad: function () {
          return d;
        },
        inQuart: function () {
          return g;
        },
        inQuint: function () {
          return T;
        },
        inSine: function () {
          return m;
        },
        outBack: function () {
          return w;
        },
        outBounce: function () {
          return S;
        },
        outCirc: function () {
          return A;
        },
        outCubic: function () {
          return f;
        },
        outElastic: function () {
          return P;
        },
        outExpo: function () {
          return R;
        },
        outQuad: function () {
          return l;
        },
        outQuart: function () {
          return E;
        },
        outQuint: function () {
          return I;
        },
        outSine: function () {
          return O;
        },
        swingFrom: function () {
          return V;
        },
        swingFromTo: function () {
          return F;
        },
        swingTo: function () {
          return G;
        },
      });
      let a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(1361)),
        i = (0, a.default)(0.25, 0.1, 0.25, 1),
        o = (0, a.default)(0.42, 0, 1, 1),
        r = (0, a.default)(0, 0, 0.58, 1),
        c = (0, a.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function l(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function s(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function u(e) {
        return Math.pow(e, 3);
      }
      function f(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function g(e) {
        return Math.pow(e, 4);
      }
      function E(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function T(e) {
        return Math.pow(e, 5);
      }
      function I(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function b(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function m(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function O(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function v(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function _(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function R(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function h(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function N(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function A(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function L(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function S(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function C(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function w(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function M(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!n && (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function P(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (!n && (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (!n && (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function F(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function G(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function D(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
        if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
        else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function k(e) {
        if (e < 1 / 2.75) return 7.5625 * e * e;
        if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
        if (e < 2.5 / 2.75)
          return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
        else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return d;
        },
        isPluginType: function () {
          return o;
        },
        renderPlugin: function () {
          return f;
        },
      });
      let a = n(2662),
        i = n(3690);
      function o(e) {
        return i.pluginMethodMap.has(e);
      }
      let r = (e) => (t) => {
          if (!a.IS_BROWSER_ENV) return () => null;
          let n = i.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let o = n[e];
          if (!o) throw Error(`IX2 invalid plugin method: ${e}`);
          return o;
        },
        c = r("getPluginConfig"),
        d = r("getPluginOrigin"),
        l = r("getPluginDuration"),
        s = r("getPluginDestination"),
        u = r("createPluginInstance"),
        f = r("renderPlugin"),
        p = r("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        cleanupHTMLElement: function () {
          return eB;
        },
        clearAllStyles: function () {
          return ek;
        },
        clearObjectCache: function () {
          return el;
        },
        getActionListProgress: function () {
          return eW;
        },
        getAffectedElements: function () {
          return eI;
        },
        getComputedStyle: function () {
          return eb;
        },
        getDestinationValues: function () {
          return eA;
        },
        getElementId: function () {
          return ep;
        },
        getInstanceId: function () {
          return eu;
        },
        getInstanceOrigin: function () {
          return e_;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return ej;
        },
        getNamespacedParameterId: function () {
          return eq;
        },
        getRenderType: function () {
          return eL;
        },
        getStyleProp: function () {
          return eS;
        },
        mediaQueriesEqual: function () {
          return eZ;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return eQ;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eC;
        },
        shallowEqual: function () {
          return d.default;
        },
        shouldAllowMediaQuery: function () {
          return eK;
        },
        shouldNamespaceEventParameter: function () {
          return e$;
        },
        stringifyTarget: function () {
          return eJ;
        },
      });
      let a = p(n(4075)),
        i = p(n(1455)),
        o = p(n(5720)),
        r = n(1185),
        c = n(7087),
        d = p(n(7164)),
        l = n(3767),
        s = n(380),
        u = n(1799),
        f = n(2662);
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: E,
          TRANSLATE_3D: y,
          SCALE_3D: T,
          ROTATE_X: I,
          ROTATE_Y: b,
          ROTATE_Z: m,
          SKEW: O,
          PRESERVE_3D: v,
          FLEX: _,
          OPACITY: R,
          FILTER: h,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: A,
          HEIGHT: L,
          BACKGROUND_COLOR: S,
          BORDER_COLOR: C,
          COLOR: w,
          CHILDREN: M,
          IMMEDIATE_CHILDREN: x,
          SIBLINGS: P,
          PARENT: U,
          DISPLAY: F,
          WILL_CHANGE: V,
          AUTO: G,
          COMMA_DELIMITER: D,
          COLON_DELIMITER: k,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: H,
          RENDER_GENERAL: B,
          RENDER_STYLE: z,
          RENDER_PLUGIN: Y,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: j,
          TRANSFORM_SCALE: W,
          TRANSFORM_ROTATE: Q,
          TRANSFORM_SKEW: $,
          STYLE_OPACITY: q,
          STYLE_FILTER: K,
          STYLE_FONT_VARIATION: Z,
          STYLE_SIZE: J,
          STYLE_BACKGROUND_COLOR: ee,
          STYLE_BORDER: et,
          STYLE_TEXT_COLOR: en,
          GENERAL_DISPLAY: ea,
          OBJECT_VALUE: ei,
        } = c.ActionTypeConsts,
        eo = (e) => e.trim(),
        er = Object.freeze({ [ee]: S, [et]: C, [en]: w }),
        ec = Object.freeze({
          [f.TRANSFORM_PREFIXED]: E,
          [S]: g,
          [R]: R,
          [h]: h,
          [A]: A,
          [L]: L,
          [N]: N,
        }),
        ed = new Map();
      function el() {
        ed.clear();
      }
      let es = 1;
      function eu() {
        return "i" + es++;
      }
      let ef = 1;
      function ep(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + ef++;
      }
      function eg({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, i.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return !e[n] && (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          o = n && n.mediaQueries,
          r = [];
        return (
          o
            ? (r = o.map((e) => e.key))
            : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: o,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eE = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: a = eE }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) {
              r();
              return;
            }
            !a(o, c) && n((c = o), e);
          }),
          c = t(i());
        return r;
      }
      function eT(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function eI({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, d;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: l } = e;
        if (Array.isArray(l) && l.length > 0)
          return l.reduce(
            (e, o) =>
              e.concat(
                eI({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: p,
            getChildElements: g,
            getSiblingElements: E,
            matchSelector: y,
            elementContains: T,
            isSiblingNode: I,
          } = i,
          { target: b } = e;
        if (!b) return [];
        let {
          id: m,
          objectId: O,
          selector: v,
          selectorGuids: _,
          appliesTo: R,
          useEventTarget: h,
        } = eT(b);
        if (O) return [ed.has(O) ? ed.get(O) : ed.set(O, {}).get(O)];
        if (R === c.EventAppliesTo.PAGE) {
          let e = s(m);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[m || v] || {},
          A = !!(N.id || N.selector),
          L = t && u(eT(t.target));
        if (
          (A
            ? ((o = N.limitAffectedElements), (r = L), (d = u(N)))
            : (r = d = u({ id: m, selector: v, selectorGuids: _ })),
          t && h)
        ) {
          let e = n && (d || !0 === h) ? [n] : p(L);
          if (d) {
            if (h === U) return p(d).filter((t) => e.some((e) => T(t, e)));
            if (h === M) return p(d).filter((t) => e.some((e) => T(e, t)));
            if (h === P) return p(d).filter((t) => e.some((e) => I(e, t)));
          }
          return e;
        }
        if (null == r || null == d) return [];
        if (f.IS_BROWSER_ENV && a) return p(d).filter((e) => a.contains(e));
        if (o === M) return p(r, d);
        if (o === x) return g(p(r)).filter(y(d));
        if (o === P) return E(p(r)).filter(y(d));
        else return p(d);
      }
      function eb({ element: e, actionItem: t }) {
        if (!f.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case J:
          case ee:
          case et:
          case en:
          case ea:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let em = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e),
            e || {}
          ),
        ev = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ex[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function e_(e, t = {}, n = {}, i, o) {
        let { getStyle: r } = o,
          { actionTypeId: c } = i;
        if ((0, u.isPluginType)(c)) return (0, u.getPluginOrigin)(c)(t[c], i);
        switch (i.actionTypeId) {
          case j:
          case W:
          case Q:
          case $:
            return t[i.actionTypeId] || ew[i.actionTypeId];
          case K:
            return eO(t[i.actionTypeId], i.config.filters);
          case Z:
            return ev(t[i.actionTypeId], i.config.fontVariations);
          case q:
            return { value: (0, a.default)(parseFloat(r(e, R)), 1) };
          case J: {
            let t, o;
            let c = r(e, A),
              d = r(e, L);
            return (
              (t =
                i.config.widthUnit === G
                  ? em.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.width)
                  : (0, a.default)(parseFloat(c), parseFloat(n.width))),
              {
                widthValue: t,
                heightValue: (o =
                  i.config.heightUnit === G
                    ? em.test(d)
                      ? parseFloat(d)
                      : parseFloat(n.height)
                    : (0, a.default)(parseFloat(d), parseFloat(n.height))),
              }
            );
          }
          case ee:
          case et:
          case en:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let o = er[t],
                r = i(e, o),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eV, eF.test(r) ? r : n[o]).split(D);
              return {
                rValue: (0, a.default)(parseInt(c[0], 10), 255),
                gValue: (0, a.default)(parseInt(c[1], 10), 255),
                bValue: (0, a.default)(parseInt(c[2], 10), 255),
                aValue: (0, a.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case ea:
            return { value: (0, a.default)(r(e, F), n.display) };
          case ei:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, u.isPluginType)(e)) return (0, u.getPluginConfig)(e)(n, t);
          switch (e) {
            case K: {
              let e = (0, o.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case Z: {
              let e = (0, o.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eA({ element: e, actionItem: t, elementApi: n }) {
        if ((0, u.isPluginType)(t.actionTypeId))
          return (0, u.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case j:
          case W:
          case Q:
          case $: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case J: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: c } = t.config,
              { widthValue: d, heightValue: l } = t.config;
            if (!f.IS_BROWSER_ENV) return { widthValue: d, heightValue: l };
            if (r === G) {
              let t = a(e, A);
              i(e, A, ""), (d = o(e, "offsetWidth")), i(e, A, t);
            }
            if (c === G) {
              let t = a(e, L);
              i(e, L, ""), (l = o(e, "offsetHeight")), i(e, L, t);
            }
            return { widthValue: d, heightValue: l };
          }
          case ee:
          case et:
          case en: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, c),
                i = (0, s.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case K:
            return t.config.filters.reduce(eR, {});
          case Z:
            return t.config.fontVariations.reduce(eh, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eL(e) {
        return /^TRANSFORM_/.test(e)
          ? H
          : /^STYLE_/.test(e)
          ? z
          : /^GENERAL_/.test(e)
          ? B
          : /^PLUGIN_/.test(e)
          ? Y
          : void 0;
      }
      function eS(e, t) {
        return e === z ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eC(e, t, n, a, o, r, c, d, l) {
        switch (d) {
          case H:
            return (function (e, t, n, a, i) {
              let o = eU
                  .map((e) => {
                    let n = ew[e],
                      {
                        xValue: a = n.xValue,
                        yValue: i = n.yValue,
                        zValue: o = n.zValue,
                        xUnit: r = "",
                        yUnit: c = "",
                        zUnit: d = "",
                      } = t[e] || {};
                    switch (e) {
                      case j:
                        return `${y}(${a}${r}, ${i}${c}, ${o}${d})`;
                      case W:
                        return `${T}(${a}${r}, ${i}${c}, ${o}${d})`;
                      case Q:
                        return `${I}(${a}${r}) ${b}(${i}${c}) ${m}(${o}${d})`;
                      case $:
                        return `${O}(${a}${r}, ${i}${c})`;
                      default:
                        return "";
                    }
                  })
                  .join(" "),
                { setStyle: r } = i;
              eG(e, f.TRANSFORM_PREFIXED, i),
                r(e, f.TRANSFORM_PREFIXED, o),
                (function (
                  { actionTypeId: e },
                  { xValue: t, yValue: n, zValue: a }
                ) {
                  return (
                    (e === j && void 0 !== a) ||
                    (e === W && void 0 !== a) ||
                    (e === Q && (void 0 !== t || void 0 !== n))
                  );
                })(a, n) && r(e, f.TRANSFORM_STYLE_PREFIXED, v);
            })(e, t, n, o, c);
          case z:
            return (function (e, t, n, a, o, r) {
              let { setStyle: c } = r;
              switch (a.actionTypeId) {
                case J: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: o, heightValue: d } = n;
                  void 0 !== o &&
                    (t === G && (t = "px"), eG(e, A, r), c(e, A, o + t)),
                    void 0 !== d &&
                      (i === G && (i = "px"), eG(e, L, r), c(e, L, d + i));
                  break;
                }
                case K:
                  !(function (e, t, n, a) {
                    let o = (0, i.default)(
                        t,
                        (e, t, a) => `${e} ${a}(${t}${eP(a, n)})`,
                        ""
                      ),
                      { setStyle: r } = a;
                    eG(e, h, a), r(e, h, o);
                  })(e, n, a.config, r);
                  break;
                case Z:
                  !(function (e, t, n, a) {
                    let o = (0, i.default)(
                        t,
                        (e, t, n) => (e.push(`"${n}" ${t}`), e),
                        []
                      ).join(", "),
                      { setStyle: r } = a;
                    eG(e, N, a), r(e, N, o);
                  })(e, n, a.config, r);
                  break;
                case ee:
                case et:
                case en: {
                  let t = er[a.actionTypeId],
                    i = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    d = Math.round(n.bValue),
                    l = n.aValue;
                  eG(e, t, r),
                    c(
                      e,
                      t,
                      l >= 1
                        ? `rgb(${i},${o},${d})`
                        : `rgba(${i},${o},${d},${l})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  eG(e, o, r), c(e, o, n.value + t);
                }
              }
            })(e, t, n, o, r, c);
          case B:
            return (function (e, t, n) {
              let { setStyle: a } = n;
              if (t.actionTypeId === ea) {
                let { value: n } = t.config;
                a(e, F, n === _ && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : n);
                return;
              }
            })(e, o, c);
          case Y: {
            let { actionTypeId: e } = o;
            if ((0, u.isPluginType)(e)) return (0, u.renderPlugin)(e)(l, t, o);
          }
        }
      }
      let ew = {
          [j]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [W]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ex = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eP = (e, t) => {
          let n = (0, o.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eU = Object.keys(ew),
        eF = /^rgb/,
        eV = RegExp("rgba?\\(([^)]+)\\)");
      function eG(e, t, n) {
        if (!f.IS_BROWSER_ENV) return;
        let a = ec[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, V);
        if (!r) {
          o(e, V, a);
          return;
        }
        let c = r.split(D).map(eo);
        -1 === c.indexOf(a) && o(e, V, c.concat(a).join(D));
      }
      function eD(e, t, n) {
        if (!f.IS_BROWSER_ENV) return;
        let a = ec[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, V);
        if (!!r && -1 !== r.indexOf(a))
          o(
            e,
            V,
            r
              .split(D)
              .map(eo)
              .filter((e) => e !== a)
              .join(D)
          );
      }
      function ek({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            c = i[r];
          c && eX({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eX({ actionList: i[e], elementApi: t });
          });
      }
      function eX({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            eH({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eH({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eH({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a;
          let { actionTypeId: i, config: o } = e;
          (a = (0, u.isPluginType)(i)
            ? (t) => (0, u.clearPlugin)(i)(t, e)
            : ez({ effect: eY, actionTypeId: i, elementApi: n })),
            eI({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function eB(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === J) {
          let { config: n } = t;
          n.widthUnit === G && a(e, A, ""), n.heightUnit === G && a(e, L, "");
        }
        i(e, V) && ez({ effect: eD, actionTypeId: o, elementApi: n })(e);
      }
      let ez =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case j:
            case W:
            case Q:
            case $:
              e(a, f.TRANSFORM_PREFIXED, n);
              break;
            case K:
              e(a, h, n);
              break;
            case Z:
              e(a, N, n);
              break;
            case q:
              e(a, R, n);
              break;
            case J:
              e(a, A, n), e(a, L, n);
              break;
            case ee:
            case et:
            case en:
              e(a, er[t], n);
              break;
            case ea:
              e(a, F, n);
          }
        };
      function eY(e, t, n) {
        let { setStyle: a } = n;
        eD(e, t, n),
          a(e, t, ""),
          t === f.TRANSFORM_PREFIXED && a(e, f.TRANSFORM_STYLE_PREFIXED, "");
      }
      function ej(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function eW(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              d = n[ej(n)],
              { config: l, actionTypeId: s } = d;
            i.id === d.id && (c = r + o);
            let u = eL(s) === B ? 0 : l.duration;
            r += l.delay + u;
          }),
          r > 0 ? (0, l.optimizeFloat)(c / r) : 0
        );
      }
      function eQ({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          c = (e) => (
            o.push((0, r.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(c)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(c));
            }),
          (0, r.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function e$(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eq(e, t) {
        return e + k + t;
      }
      function eK(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function eZ(e, t) {
        return (0, d.default)(e && e.sort(), t && t.sort());
      }
      function eJ(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + X + n + X + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(t, {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return m;
        },
        mergeActionState: function () {
          return v;
        },
      });
      let a = n(1185),
        i = n(7087),
        {
          HTML_ELEMENT: o,
          PLAIN_OBJECT: r,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: d,
          CONFIG_Y_VALUE: l,
          CONFIG_Z_VALUE: s,
          CONFIG_VALUE: u,
          CONFIG_X_UNIT: f,
          CONFIG_Y_UNIT: p,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: E,
        } = i.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: I,
        } = i.IX2EngineActionTypes,
        b = {},
        m = (e = b, t = {}) => {
          switch (t.type) {
            case y:
              return b;
            case T: {
              let {
                  elementId: n,
                  element: i,
                  origin: o,
                  actionItem: r,
                  refType: c,
                } = t.payload,
                { actionTypeId: d } = r,
                l = e;
              return (
                (0, a.getIn)(l, [n, i]) !== i && (l = O(l, i, c, n, r)),
                v(l, n, d, o, r)
              );
            }
            case I: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return v(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function O(e, t, n, i, o) {
        let c =
          n === r ? (0, a.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, a.mergeIn)(e, [i], { id: i, ref: t, refId: c, refType: n });
      }
      function v(e, t, n, i, o) {
        let r = (function (e) {
          let { config: t } = e;
          return _.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return null != o && null != r && (e[i] = r), e;
          }, {});
        })(o);
        return (0, a.mergeIn)(e, [t, "refState", n], i, r);
      }
      let _ = [
        [d, f],
        [l, p],
        [s, g],
        [u, E],
      ];
    },
    9334: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: { actionListId: "a", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
              id: "674f3b03fdfffc5606c0c120|cf27677c-e3d0-62bd-4d63-f46756324b46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|cf27677c-e3d0-62bd-4d63-f46756324b46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19272f3c94b,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927307e6e5,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-10",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273ab9e63,
          },
          "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-7",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-12",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".locations_item",
              originalId: "855e7db5-8687-facb-58bc-c9c9e1e84ed6",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".locations_item",
                originalId: "855e7db5-8687-facb-58bc-c9c9e1e84ed6",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273aeea31,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-14",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faqs_item",
              originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faqs_item",
                originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273b2d7cb,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-13",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faqs_item",
              originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faqs_item",
                originalId: "ab1a3d19-977b-898b-3bc1-40074489c468",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273b2d7cc,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|4654afeb-bf30-8433-b76d-671c51894643",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|4654afeb-bf30-8433-b76d-671c51894643",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19273b6631e,
          },
          "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4500f34f-ad71-c737-340f-a39b6520a857",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4500f34f-ad71-c737-340f-a39b6520a857",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19273b89ca6,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "4500f34f-ad71-c737-340f-a39b6520a855",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "4500f34f-ad71-c737-340f-a39b6520a855",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19273b8cd91,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-12",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|cf27677c-e3d0-62bd-4d63-f46756324b46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|cf27677c-e3d0-62bd-4d63-f46756324b46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-12-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19273dcc57f,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".player_item",
              originalId: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".player_item",
                originalId: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !0,
                addOffsetValue: 15,
                startsExiting: !0,
                addEndOffset: !1,
                endOffsetValue: 20,
              },
            ],
            createdOn: 0x19278306f4b,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-14",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|ecf134b5-aa9e-9740-f390-8f3f07464eb0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|ecf134b5-aa9e-9740-f390-8f3f07464eb0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-14-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192783fff21,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|03ed8e6b-3b81-745a-78d6-9b0187a7ce30",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|03ed8e6b-3b81-745a-78d6-9b0187a7ce30",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 80,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192784863b5,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-24",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192784ad660,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x192784c2e47,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|7df0f447-f4c0-5e53-7f1e-55491f278c40",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|7df0f447-f4c0-5e53-7f1e-55491f278c40",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192784de346,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-29",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|2ad11c2f-e27d-3c08-ad75-c1f693737f7a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|2ad11c2f-e27d-3c08-ad75-c1f693737f7a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192785143dc,
          },
          "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c122|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c122|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927852378e,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19278611c72,
          },
          "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192786bb5be,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|a41fac32-d451-d387-ddeb-f99c2df28067",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|a41fac32-d451-d387-ddeb-f99c2df28067",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192786d09b4,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|2868c035-7512-59ff-d96d-180201f9bdc9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|2868c035-7512-59ff-d96d-180201f9bdc9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927871b3dc,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|edacf3db-d746-a07d-9d0a-ba32c805a8af",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|edacf3db-d746-a07d-9d0a-ba32c805a8af",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19278742f37,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav_link",
              originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_link",
                originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19278785d14,
          },
          "e-42": {
            id: "e-42",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-41",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".nav_link",
              originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".nav_link",
                originalId: "5edb4eb9-d636-2d84-0fda-7fc3e9497815",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19278785d14,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192787ea217,
          },
          "e-44": {
            id: "e-44",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-43",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17a6340c-761b-7fc0-e914-c76287f98ca8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192787ea217,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button.is-link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button.is-link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192788dbeb3,
          },
          "e-46": {
            id: "e-46",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-45",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button.is-link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button.is-link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x192788dbeb4,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer_link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192788fe139,
          },
          "e-48": {
            id: "e-48",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-47",
              },
            },
            mediaQueries: ["main"],
            target: {
              selector: ".footer_link",
              originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_link",
                originalId: "6c8afb6f-bcf6-b9d9-52c0-fda26c3ed4dc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192788fe151,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link",
              originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link",
                originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b216cb3,
          },
          "e-50": {
            id: "e-50",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-49",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".social-link",
              originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".social-link",
                originalId: "d0e80abc-0b67-11d7-2a38-8a77c9d01ecf",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b216cb3,
          },
          "e-53": {
            id: "e-53",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-23",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd529",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd529",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-23-p",
                selectedAxis: "X_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-23-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "ELEMENT",
                reverse: !1,
                smoothing: 90,
                restingState: 50,
              },
            ],
            createdOn: 0x1927b29f4c7,
          },
          "e-54": {
            id: "e-54",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-55",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd529",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd529",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b2ae17d,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-54",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd529",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd529",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b2ae17d,
          },
          "e-56": {
            id: "e-56",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-57",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|cd271bba-260c-d0ac-a377-96bcddb9d88f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|cd271bba-260c-d0ac-a377-96bcddb9d88f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b2c5d91,
          },
          "e-58": {
            id: "e-58",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-59",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|0020ec38-bce4-0963-4a28-4bb0331c2c9c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|0020ec38-bce4-0963-4a28-4bb0331c2c9c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3a41a8,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-61",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|ec3f27ba-38d3-5e7c-803d-89b817e226e9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|ec3f27ba-38d3-5e7c-803d-89b817e226e9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3abc05,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-63",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|3d8a5086-b811-6497-ff27-f5612d0369ec",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|3d8a5086-b811-6497-ff27-f5612d0369ec",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3bbfbd,
          },
          "e-64": {
            id: "e-64",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-65",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|00e4789c-f5b4-f8f6-d739-25a9b69e21df",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|00e4789c-f5b4-f8f6-d739-25a9b69e21df",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3cb5b3,
          },
          "e-66": {
            id: "e-66",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-25",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-67",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|9df46b77-dac5-2d62-d982-31df081bda45",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|9df46b77-dac5-2d62-d982-31df081bda45",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b3d2116,
          },
          "e-68": {
            id: "e-68",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-69",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".exp-slider_arrow",
              originalId:
                "674f3b03fdfffc5606c0c123|06c99d02-5b1b-ab82-23bb-aa92962fad52",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".exp-slider_arrow",
                originalId:
                  "674f3b03fdfffc5606c0c123|06c99d02-5b1b-ab82-23bb-aa92962fad52",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b7717ae,
          },
          "e-69": {
            id: "e-69",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-68",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".exp-slider_arrow",
              originalId:
                "674f3b03fdfffc5606c0c123|06c99d02-5b1b-ab82-23bb-aa92962fad52",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".exp-slider_arrow",
                originalId:
                  "674f3b03fdfffc5606c0c123|06c99d02-5b1b-ab82-23bb-aa92962fad52",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b7717af,
          },
          "e-70": {
            id: "e-70",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-71",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c125|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c125|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b8b0c9c,
          },
          "e-73": {
            id: "e-73",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-72",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c125",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c125",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b8d41e5,
          },
          "e-74": {
            id: "e-74",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-75",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|b2d90520-e10a-4f72-0cf3-af4a01a8b8ba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927b9afb80,
          },
          "e-76": {
            id: "e-76",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-77",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1927ba0748b,
          },
          "e-78": {
            id: "e-78",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|f34fdec2-7330-0cd6-5ea1-badf54d8c9e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba0a731,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-81",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|0e2ba735-0b1e-eb7d-5169-048742268950",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|0e2ba735-0b1e-eb7d-5169-048742268950",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba1d31c,
          },
          "e-82": {
            id: "e-82",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-83",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|0e2ba735-0b1e-eb7d-5169-048742268950",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|0e2ba735-0b1e-eb7d-5169-048742268950",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba1eca4,
          },
          "e-84": {
            id: "e-84",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-85",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|39c41625-96bb-d3d0-8826-2fcb008cc178",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|39c41625-96bb-d3d0-8826-2fcb008cc178",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba291d3,
          },
          "e-86": {
            id: "e-86",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-87",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c120|39c41625-96bb-d3d0-8826-2fcb008cc178",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c120|39c41625-96bb-d3d0-8826-2fcb008cc178",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba359d3,
          },
          "e-88": {
            id: "e-88",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-89",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|cd271bba-260c-d0ac-a377-96bcddb9d88f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|cd271bba-260c-d0ac-a377-96bcddb9d88f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba4569a,
          },
          "e-90": {
            id: "e-90",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-91",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|f0443543-7ba6-cbc7-74ed-da3d58ab7911",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba64dc4,
          },
          "e-92": {
            id: "e-92",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-93",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c123|7df0f447-f4c0-5e53-7f1e-55491f278c40",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c123|7df0f447-f4c0-5e53-7f1e-55491f278c40",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba6a13c,
          },
          "e-94": {
            id: "e-94",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-95",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c122|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c122|77dfe5a9-bc5b-9fc5-7a87-e2dc3413984c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba6d964,
          },
          "e-96": {
            id: "e-96",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-97",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|dac3a0ad-1bc4-f50d-4480-37c180ea2f7d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba792dc,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|a41fac32-d451-d387-ddeb-f99c2df28067",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|a41fac32-d451-d387-ddeb-f99c2df28067",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba7ca65,
          },
          "e-100": {
            id: "e-100",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c124|2868c035-7512-59ff-d96d-180201f9bdc9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c124|2868c035-7512-59ff-d96d-180201f9bdc9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 20,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba7ed23,
          },
          "e-102": {
            id: "e-102",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "674f3b03fdfffc5606c0c125|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "674f3b03fdfffc5606c0c125|ab7d90b9-0e1e-c69a-4acb-4f38bdc8b700",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1927ba84352,
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-38",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer_social-link",
              originalId:
                "674f3b03fdfffc5606c0c129|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_social-link",
                originalId:
                  "674f3b03fdfffc5606c0c129|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272574313,
          },
          "e-113": {
            id: "e-113",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-112",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".footer_social-link",
              originalId:
                "674f3b03fdfffc5606c0c129|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".footer_social-link",
                originalId:
                  "674f3b03fdfffc5606c0c129|a24b44d3-91b8-6a6c-aaf2-27ae9adc25c4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19272574313,
          },
          "e-114": {
            id: "e-114",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-115",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "17a6340c-761b-7fc0-e914-c76287f98ca6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17a6340c-761b-7fc0-e914-c76287f98ca6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928996ef7e,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "17a6340c-761b-7fc0-e914-c76287f98ca6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "17a6340c-761b-7fc0-e914-c76287f98ca6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1928996ef7f,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "hero-video â€“> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 0.6,
                          yValue: 0.6,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-3",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 3.125, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1.5,
                          yValue: 1.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 400,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 33.33,
                    actionItems: [
                      {
                        id: "a-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-4",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-n-6",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-n-8",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19272f3d471,
          },
          "a-2": {
            id: "a-2",
            title: "homepage -> loads",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|7392a2d2-e2cf-5cad-069a-b7a3d9846baa",
                      },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-19",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      xValue: 3,
                      yValue: 3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      yValue: 15,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-22",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-24",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-25",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-26",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-33",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-34",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-35",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-36",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-37",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-38",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-20",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-2-n-18",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|805de4e7-667f-95f8-2868-3a3b4fbdd528",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-27",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-28",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|256a64f6-f429-7765-d6fb-826f628ae915",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-29",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-30",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|9d3ddad4-712e-c16c-7560-87756315819c",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-32",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-31",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|af0f8885-ee6b-84ff-4a36-f2fd2ec4124f",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|7392a2d2-e2cf-5cad-069a-b7a3d9846baa",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-40",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-39",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|499d3b83-ae7b-a8b5-0eaf-abde592d3be3",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-42",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-41",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|7d330f68-f229-ae7c-c9da-be61c38d44a3",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-43",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-44",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c120|49273ef5-6d27-c105-5fc8-92c5b230491d",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927307f2d5,
          },
          "a-6": {
            id: "a-6",
            title: "headline -> scrolls in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-45",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-37",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-50",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-51",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-52",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-53",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-54",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-55",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-56",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-57",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-58",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-59",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-60",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-61",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-62",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-63",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-64",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-65",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-1",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "49c75286-500c-32b1-dd65-fd7943cdd2cf",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-2",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e85835c6-584e-056c-31b8-2f99e8d689c0",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-39",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-40",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-3",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "62b0e67e-5461-b1fb-25a2-60c1294f5399",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-66",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-67",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-4",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d6ef9d9b-7b8b-0654-5624-5101625fba8c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-68",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-69",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-5",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "e449fd35-9e5f-eefb-6b51-baf2db877263",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-70",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-71",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-6",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "52a8482f-030e-4e3b-cac4-1c4711750e0d",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-72",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-73",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-7",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "716b3604-0b7a-ef53-80df-85bbbdb4d28c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-74",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-8",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d1dafe24-8d6d-818d-7546-7f077edf4880",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-75",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-8",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "d1dafe24-8d6d-818d-7546-7f077edf4880",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-76",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-77",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-9",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "cc4f24dd-070e-a75b-873f-aa94b2de8ed7",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-78",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-79",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-80",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-81",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-10",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "ad725f09-1016-7b2a-427a-b0b7ac63c649",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-82",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-83",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1100,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-11",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "b5bdae95-4906-aa85-9551-53e2e870816e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-6-n-84",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-85",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1200,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".is-word.is-12",
                        selectorGuids: [
                          "78bca9e3-55d0-e474-95c3-ec527deb940a",
                          "7eee6a62-fd71-7f7d-3e51-c7547211218b",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19273abab01,
          },
          "a-7": {
            id: "a-7",
            title: "location-card -> scrolls in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-7-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_visual",
                        selectorGuids: ["f6533226-b8fd-feff-3eaf-36d019eb890e"],
                      },
                      xValue: 0.9,
                      yValue: 0.9,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-7-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: !0,
                        id: "20bd0fcf-0ffa-fb32-1801-11b2da2948a3",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-7-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_visual",
                        selectorGuids: ["f6533226-b8fd-feff-3eaf-36d019eb890e"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192739f3b5a,
          },
          "a-8": {
            id: "a-8",
            title: "accordion ->\xa0open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_body",
                        selectorGuids: ["4c898ee7-0c25-2f3d-7256-6b31cfb2708d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_body",
                        selectorGuids: ["4c898ee7-0c25-2f3d-7256-6b31cfb2708d"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-8-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-24",
                        selectorGuids: ["3e1240f1-6b72-d2d8-cbb3-3f0a0a43ecd1"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-8-n-4",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "ab1a3d19-977b-898b-3bc1-40074489c468",
                      },
                      globalSwatchId: "--green",
                      rValue: 206,
                      bValue: 101,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                  {
                    id: "a-8-n-3",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_head",
                        selectorGuids: ["79c5458c-1afe-cb19-4d69-c0c12c553457"],
                      },
                      globalSwatchId: "--green",
                      rValue: 206,
                      bValue: 101,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19273b023b5,
          },
          "a-9": {
            id: "a-9",
            title: "accordion ->\xa0close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_body",
                        selectorGuids: ["4c898ee7-0c25-2f3d-7256-6b31cfb2708d"],
                      },
                      widthValue: 100,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-9-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-24",
                        selectorGuids: ["3e1240f1-6b72-d2d8-cbb3-3f0a0a43ecd1"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-9-n-4",
                    actionTypeId: "STYLE_BORDER",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: !0,
                        id: "ab1a3d19-977b-898b-3bc1-40074489c468",
                      },
                      globalSwatchId: "",
                      rValue: 206,
                      bValue: 101,
                      gValue: 255,
                      aValue: 0.2,
                    },
                  },
                  {
                    id: "a-9-n-5",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_head",
                        selectorGuids: ["79c5458c-1afe-cb19-4d69-c0c12c553457"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19273b023b5,
          },
          "a-10": {
            id: "a-10",
            title: "img ->\xa0parallax",
            continuousParameterGroups: [
              {
                id: "a-10-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-10-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".parallax-img",
                            selectorGuids: [
                              "d15d6864-842a-b05f-d9f5-7cc06f7d443b",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-10-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".parallax-img",
                            selectorGuids: [
                              "d15d6864-842a-b05f-d9f5-7cc06f7d443b",
                            ],
                          },
                          yValue: 20,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19273b66cad,
          },
          "a-11": {
            id: "a-11",
            title: "bottom-cta -> scroll",
            continuousParameterGroups: [
              {
                id: "a-11-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-11-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".bottom-cta_box",
                            selectorGuids: [
                              "d4790e7b-d1b7-7854-e50a-5d88e7eaec39",
                            ],
                          },
                          xValue: 2.5,
                          yValue: 2.5,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-11-n-5",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem" },
                          target: {
                            objectId: "--bottom-cta-radius",
                            useEventTarget: !0,
                            id: "4500f34f-ad71-c737-340f-a39b6520a855",
                          },
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-11-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".bottom-cta_box",
                            selectorGuids: [
                              "d4790e7b-d1b7-7854-e50a-5d88e7eaec39",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-11-n-6",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 3.125, unit: "rem" },
                          target: {
                            objectId: "--bottom-cta-radius",
                            useEventTarget: !0,
                            id: "4500f34f-ad71-c737-340f-a39b6520a855",
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19273b8d69e,
          },
          "a-12": {
            id: "a-12",
            title: "hero-video_re â€“> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-12-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-12-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 0.9,
                          yValue: 0.9,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-2",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 1.5, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-12-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-12-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          yValue: 200,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 33.33,
                    actionItems: [
                      {
                        id: "a-12-n-7",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-8",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "rem" },
                          target: {
                            objectId: "--hero-video-radius",
                            useEventTarget: "CHILDREN",
                            selector: ".video_wrap",
                            selectorGuids: [
                              "c7878a48-9b25-1085-cc5f-a0d9fe85121a",
                            ],
                          },
                        },
                      },
                      {
                        id: "a-12-n-9",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_btn",
                            selectorGuids: [
                              "48b5f15e-f360-0f00-57eb-ace111f7e884",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-12-n-10",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_title",
                            selectorGuids: [
                              "69b99529-818a-58a6-ff57-383ad53add5a",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19272f3d471,
          },
          "a-13": {
            id: "a-13",
            title: "player-card -> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-13-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".player_visual.shadow-card",
                            selectorGuids: [
                              "3a803c13-2474-0783-ab89-0536f44e8d5a",
                              "d302a14c-c67d-193b-56d6-1fa3b69c41e0",
                            ],
                          },
                          xValue: 0.7,
                          yValue: 0.7,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-13-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".player_visual.shadow-card",
                            selectorGuids: [
                              "3a803c13-2474-0783-ab89-0536f44e8d5a",
                              "d302a14c-c67d-193b-56d6-1fa3b69c41e0",
                            ],
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x192783079f5,
          },
          "a-14": {
            id: "a-14",
            title: "gallery -> parallax",
            continuousParameterGroups: [
              {
                id: "a-14-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-14-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._1",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "80c8c62a-60e0-7ba3-d041-13625a5d51b3",
                            ],
                          },
                          yValue: 5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._2",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "ce1c6c2c-2ef1-a485-02a8-a32b10364e7c",
                            ],
                          },
                          yValue: 7,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._3",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "557edea9-8d53-fb47-483c-cfdeced4177d",
                            ],
                          },
                          yValue: 12,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._4",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b4de19f3-f263-7496-d564-44abd2f8f3d1",
                            ],
                          },
                          yValue: 12,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._5",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b677b4d2-4c0c-54b8-131b-8b89ab717d99",
                            ],
                          },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-14-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._1",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "80c8c62a-60e0-7ba3-d041-13625a5d51b3",
                            ],
                          },
                          yValue: -5,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._2",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "ce1c6c2c-2ef1-a485-02a8-a32b10364e7c",
                            ],
                          },
                          yValue: -7,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._3",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "557edea9-8d53-fb47-483c-cfdeced4177d",
                            ],
                          },
                          yValue: -6,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-8",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._4",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b4de19f3-f263-7496-d564-44abd2f8f3d1",
                            ],
                          },
                          yValue: -4,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-10",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".gallery_img._5",
                            selectorGuids: [
                              "eb70c2a8-3bcd-dded-675b-cf9805985161",
                              "b677b4d2-4c0c-54b8-131b-8b89ab717d99",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1927840095f,
          },
          "a-15": {
            id: "a-15",
            title: "fitness -> intro-line",
            continuousParameterGroups: [
              {
                id: "a-15-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-15-n",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 0, unit: "em" },
                          target: {
                            objectId: "--fitness-intro-shadow-y",
                            useEventTarget: !0,
                            id: "674f3b03fdfffc5606c0c123|6a3ecc14-ec69-9bbd-db05-9782133e248d",
                          },
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-15-n-2",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: -0.6, unit: "em" },
                          target: {
                            objectId: "--fitness-intro-shadow-y",
                            useEventTarget: !0,
                            id: "674f3b03fdfffc5606c0c123|6a3ecc14-ec69-9bbd-db05-9782133e248d",
                          },
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19278460dff,
          },
          "a-16": {
            id: "a-16",
            title: "feature-visual -> scrolls in",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "674f3b03fdfffc5606c0c123|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
                          },
                          xValue: 0.7,
                          yValue: 0.7,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "674f3b03fdfffc5606c0c123|c4c61132-10a5-f5b8-f9a0-5ff4e441da56",
                          },
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x192783079f5,
          },
          "a-17": {
            id: "a-17",
            title: "hover-line -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link_line",
                        selectorGuids: ["9cf9eaf6-20c8-12d4-b89c-f09b8d97a9db"],
                      },
                      xValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link_line",
                        selectorGuids: ["9cf9eaf6-20c8-12d4-b89c-f09b8d97a9db"],
                      },
                      xValue: 1,
                      yValue: null,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19278786762,
          },
          "a-18": {
            id: "a-18",
            title: "hover-line -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link_line",
                        selectorGuids: ["9cf9eaf6-20c8-12d4-b89c-f09b8d97a9db"],
                      },
                      xValue: 0,
                      yValue: null,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19278786762,
          },
          "a-19": {
            id: "a-19",
            title: "hover-box -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      xValue: 0.5,
                      yValue: 0.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-19-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-19-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "swingTo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      value: 0.7,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927b2177ba,
          },
          "a-20": {
            id: "a-20",
            title: "hover-box -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      xValue: 0.5,
                      yValue: 0.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-20-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".link-box",
                        selectorGuids: ["7bc8cf0d-181f-72ae-b9f8-7197dc1c2e37"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b2177ba,
          },
          "a-23": {
            id: "a-23",
            title: "learn-more -> mouse move",
            continuousParameterGroups: [
              {
                id: "a-23-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-23-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          xValue: -2,
                          xUnit: "rem",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-23-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          xValue: 2,
                          xUnit: "rem",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-23-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-23-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          xValue: null,
                          yValue: -1,
                          xUnit: "rem",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-23-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".video_play",
                            selectorGuids: [
                              "3f81e598-cd52-c8c6-f044-98729414ef51",
                            ],
                          },
                          yValue: 1,
                          xUnit: "PX",
                          yUnit: "rem",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1927b2a04de,
          },
          "a-21": {
            id: "a-21",
            title: "learn-more -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".video_play",
                        selectorGuids: ["3f81e598-cd52-c8c6-f044-98729414ef51"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16",
                        selectorGuids: ["a5a0defd-f324-bd27-81c2-3ca4ba015545"],
                      },
                      xValue: 0.8,
                      yValue: 0.8,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b274687,
          },
          "a-22": {
            id: "a-22",
            title: "learn-more -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".video_play",
                        selectorGuids: ["3f81e598-cd52-c8c6-f044-98729414ef51"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-22-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-16",
                        selectorGuids: ["a5a0defd-f324-bd27-81c2-3ca4ba015545"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b274687,
          },
          "a-26": {
            id: "a-26",
            title: "rotate-image_3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 16e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-26-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 16e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-26-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 16e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-26-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 16e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-28": {
            id: "a-28",
            title: "rotate-image_5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 32e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 32e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-24": {
            id: "a-24",
            title: "rotate-image_1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-24-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 32e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-24-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 32e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-27": {
            id: "a-27",
            title: "rotate-image_4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 24e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 24e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-27-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 8e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-27-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 8e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-25": {
            id: "a-25",
            title: "rotate-image_2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-25-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 8e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 8e3,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: null,
                      zValue: 12,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 3e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      xValue: null,
                      yValue: 360,
                      zValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 1500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-5",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-25-n-6",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "swingFromTo",
                      duration: 24e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-25-n-7",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 24e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".rotate-box",
                        selectorGuids: ["64b602f0-f009-741c-1939-6d1ec1651a56"],
                      },
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b31ab88,
          },
          "a-29": {
            id: "a-29",
            title: "arrow-dot -> hover-in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "swingFrom",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      xValue: 0.5,
                      yValue: 0.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-29-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-29-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927b77261f,
          },
          "a-30": {
            id: "a-30",
            title: "arrow-dot -> hover-out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-30-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow_dot",
                        selectorGuids: ["b7c0798c-83d6-a982-8035-9c825a65e32f"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1927b77261f,
          },
          "a-31": {
            id: "a-31",
            title: "contact-us -> reveal",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c125|d5f6a4b2-9414-5c9e-4db8-6d4a9b945aee",
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "674f3b03fdfffc5606c0c125|d38a1bab-da7c-5502-1032-859abe3a6aa1",
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-31-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c125|d5f6a4b2-9414-5c9e-4db8-6d4a9b945aee",
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-31-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        id: "674f3b03fdfffc5606c0c125|d38a1bab-da7c-5502-1032-859abe3a6aa1",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1927b8d4c3b,
          },
          "a-32": {
            id: "a-32",
            title: "content -> scrolls in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-8",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-13",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-14",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-16",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-17",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-18",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-86",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-85",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-89",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-90",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      yValue: 0.5,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-68",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-67",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-medium",
                        selectorGuids: ["bb0086f1-7d86-7383-094f-dae4e0e5c93b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-69",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-70",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button",
                        selectorGuids: ["e5195153-8ecd-ca48-1499-6df4e8b316e4"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-71",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-72",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".text-size-eyebrow",
                        selectorGuids: ["cc41b641-e58b-e5dc-41b1-6af0378874a0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-87",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-88",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".form-input.is-green",
                        selectorGuids: [
                          "91772283-4ead-0021-4f37-755517caa597",
                          "bdae9cda-2f2b-170e-6d17-38a135c23c26",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-73",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-74",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".list_wrap",
                        selectorGuids: ["ae6fffdd-9b43-0d81-0e4f-dd34a7eaabb0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-75",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-76",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".stats_list",
                        selectorGuids: ["3ecdc732-91d5-84d9-fb13-bb959b77b91e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-77",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-78",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".locations_grid",
                        selectorGuids: ["7024e355-2af1-c79f-03a7-f1a37083951b"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-79",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-80",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".history_list",
                        selectorGuids: ["3d58ef48-d7bf-a157-a46a-0a0230028eb5"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-81",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-82",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".staff_list",
                        selectorGuids: ["484e9a30-5c3f-51e9-d732-5225de224bdc"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-83",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-84",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".contact_form-block",
                        selectorGuids: ["c04ace79-72ea-6e51-26ad-97e856419d0e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-32-n-91",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-32-n-92",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 500,
                      easing: "outExpo",
                      duration: 2e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faqs_list",
                        selectorGuids: ["ed9c93f3-129e-3ffa-fbb9-0c4f553721ae"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "em",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19273abab01,
          },
          "a-38": {
            id: "a-38",
            title: "link-box -> hover in",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-38-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-38-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19272591974,
          },
          "a-39": {
            id: "a-39",
            title: "link-box -> hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-39-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      xValue: 0,
                      yValue: 0,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19272591974,
          },
          "a-40": {
            id: "a-40",
            title: "nav -> opens",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-40-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-top",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "e49c9707-83d6-f07b-5915-354f36640bfe",
                        ],
                      },
                      yValue: 7,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-40-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-bottom",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "14d5974f-54ac-e12a-4410-9140ae491336",
                        ],
                      },
                      yValue: -7,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-40-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-middle",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "f70b7933-aff6-d0c5-f34b-446c9eeda13e",
                        ],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-40-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-inner",
                        selectorGuids: ["0c9c9542-2999-3584-1285-d4e26d2db556"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192899779c0,
          },
          "a-41": {
            id: "a-41",
            title: "nav -> close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-middle",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "f70b7933-aff6-d0c5-f34b-446c9eeda13e",
                        ],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-41-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-inner",
                        selectorGuids: ["0c9c9542-2999-3584-1285-d4e26d2db556"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-top",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "e49c9707-83d6-f07b-5915-354f36640bfe",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".nav_button-line.is-bottom",
                        selectorGuids: [
                          "011acbae-1098-1982-3684-b5f8e5bf3bc6",
                          "14d5974f-54ac-e12a-4410-9140ae491336",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192899779c0,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
