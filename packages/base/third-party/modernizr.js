/*! modernizr 3.8.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-devicemotion_deviceorientation-matchmedia-placeholder-pointerevents-touchevents-websockets !*/
!(function(e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }

  function o() {
    return 'function' != typeof t.createElement
      ? t.createElement(arguments[0])
      : b
      ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
      : t.createElement.apply(t, arguments);
  }

  function i() {
    var e = t.body;
    return e || ((e = o(b ? 'svg' : 'body')), (e.fake = !0)), e;
  }

  function s(e, n, r, s) {
    var a,
      u,
      l,
      f,
      c = 'modernizr',
      d = o('div'),
      p = i();
    if (parseInt(r, 10)) for (; r--; ) (l = o('div')), (l.id = s ? s[r] : c + (r + 1)), d.appendChild(l);
    return (
      (a = o('style')),
      (a.type = 'text/css'),
      (a.id = 's' + c),
      (p.fake ? p : d).appendChild(a),
      p.appendChild(d),
      a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(t.createTextNode(e)),
      (d.id = c),
      p.fake &&
        ((p.style.background = ''),
        (p.style.overflow = 'hidden'),
        (f = _.style.overflow),
        (_.style.overflow = 'hidden'),
        _.appendChild(p)),
      (u = n(d, e)),
      p.fake ? (p.parentNode.removeChild(p), (_.style.overflow = f), _.offsetHeight) : d.parentNode.removeChild(d),
      !!u
    );
  }

  function a(e, t) {
    return !!~('' + e).indexOf(t);
  }

  function u(e) {
    return e
      .replace(/([A-Z])/g, function(e, t) {
        return '-' + t.toLowerCase();
      })
      .replace(/^ms-/, '-ms-');
  }

  function l(t, n, r) {
    var o;
    if ('getComputedStyle' in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? 'error' : 'log';
        i[s].call(i, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o;
  }

  function f(t, r) {
    var o = t.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--; ) if (e.CSS.supports(u(t[o]), r)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in e) {
      for (var i = []; o--; ) i.push('(' + u(t[o]) + ':' + r + ')');
      return (
        (i = i.join(' or ')),
        s('@supports (' + i + ') { #modernizr { position: absolute; } }', function(e) {
          return 'absolute' === l(e, null, 'position');
        })
      );
    }
    return n;
  }

  function c(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function(e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, '');
  }

  function d(e, t, i, s) {
    function u() {
      d && (delete A.style, delete A.modElem);
    }

    if (((s = !r(s, 'undefined') && s), !r(i, 'undefined'))) {
      var l = f(e, i);
      if (!r(l, 'undefined')) return l;
    }
    for (var d, p, v, m, h, y = ['modernizr', 'tspan', 'samp']; !A.style && y.length; )
      (d = !0), (A.modElem = o(y.shift())), (A.style = A.modElem.style);
    for (v = e.length, p = 0; p < v; p++)
      if (((m = e[p]), (h = A.style[m]), a(m, '-') && (m = c(m)), A.style[m] !== n)) {
        if (s || r(i, 'undefined')) return u(), 'pfx' !== t || m;
        try {
          A.style[m] = i;
        } catch (e) {}
        if (A.style[m] !== h) return u(), 'pfx' !== t || m;
      }
    return u(), !1;
  }

  function p(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }

  function v(e, t, n) {
    var o;
    for (var i in e) if (e[i] in t) return !1 === n ? e[i] : ((o = t[e[i]]), r(o, 'function') ? p(o, n || t) : o);
    return !1;
  }

  function m(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + ' ' + P.join(s + ' ') + s).split(' ');
    return r(t, 'string') || r(t, 'undefined')
      ? d(a, t, o, i)
      : ((a = (e + ' ' + S.join(s + ' ') + s).split(' ')), v(a, t, n));
  }

  var h = [],
    y = {
      _version: '3.8.0',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e]);
        }, 0);
      },
      addTest: function(e, t, n) {
        h.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function(e) {
        h.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = y), (Modernizr = new Modernizr());
  var g = [],
    C = 'Moz O ms Webkit',
    S = y._config.usePrefixes ? C.toLowerCase().split(' ') : [];
  y._domPrefixes = S;
  var w = [''].concat(S);
  y._domPrefixesAll = w;
  var _ = t.documentElement,
    b = 'svg' === _.nodeName.toLowerCase(),
    x = (function() {
      function e(e, r) {
        var i;
        return (
          !!e &&
          ((r && 'string' != typeof r) || (r = o(r || 'div')),
          (e = 'on' + e),
          (i = e in r),
          !i &&
            t &&
            (r.setAttribute || (r = o('div')),
            r.setAttribute(e, ''),
            (i = 'function' == typeof r[e]),
            r[e] !== n && (r[e] = n),
            r.removeAttribute(e)),
          i)
        );
      }

      var t = !('onblur' in _);
      return e;
    })();
  (y.hasEvent = x),
    Modernizr.addTest('pointerevents', function() {
      for (var e = 0, t = w.length; e < t; e++) if (x(w[e] + 'pointerdown')) return !0;
      return !1;
    });
  var T = y._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];
  y._prefixes = T;
  var E = (function() {
    var t = e.matchMedia || e.msMatchMedia;
    return t
      ? function(e) {
          var n = t(e);
          return (n && n.matches) || !1;
        }
      : function(t) {
          var n = !1;
          return (
            s('@media ' + t + ' { #modernizr { position: absolute; } }', function(t) {
              n = 'absolute' === (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
            }),
            n
          );
        };
  })();
  (y.mq = E),
    Modernizr.addTest('touchevents', function() {
      if ('ontouchstart' in e || e.TouchEvent || (e.DocumentTouch && t instanceof DocumentTouch)) return !0;
      var n = ['(', T.join('touch-enabled),('), 'heartz', ')'].join('');
      return E(n);
    });
  var z = !1;
  try {
    z = 'WebSocket' in e && 2 === e.WebSocket.CLOSING;
  } catch (e) {}
  Modernizr.addTest('websockets', z),
    Modernizr.addTest('devicemotion', 'DeviceMotionEvent' in e),
    Modernizr.addTest('deviceorientation', 'DeviceOrientationEvent' in e),
    Modernizr.addTest('placeholder', 'placeholder' in o('input') && 'placeholder' in o('textarea'));
  var P = y._config.usePrefixes ? C.split(' ') : [];
  y._cssomPrefixes = P;
  var k = { elem: o('modernizr') };
  Modernizr._q.push(function() {
    delete k.elem;
  });
  var A = { style: k.elem.style };
  Modernizr._q.unshift(function() {
    delete A.style;
  }),
    (y.testAllProps = m);
  var L = function(t) {
    var r,
      o = T.length,
      i = e.CSSRule;
    if (void 0 === i) return n;
    if (!t) return !1;
    if (((t = t.replace(/^@/, '')), (r = t.replace(/-/g, '_').toUpperCase() + '_RULE') in i)) return '@' + t;
    for (var s = 0; s < o; s++) {
      var a = T[s];
      if (a.toUpperCase() + '_' + r in i) return '@-' + a.toLowerCase() + '-' + t;
    }
    return !1;
  };
  y.atRule = L;
  var O = (y.prefixed = function(e, t, n) {
    return 0 === e.indexOf('@') ? L(e) : (-1 !== e.indexOf('-') && (e = c(e)), t ? m(e, t, n) : m(e, 'pfx'));
  });
  Modernizr.addTest('matchmedia', !!O('matchMedia', e)),
    (function() {
      var e, t, n, o, i, s, a;
      for (var u in h)
        if (h.hasOwnProperty(u)) {
          if (
            ((e = []),
            (t = h[u]),
            t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
          for (o = r(t.fn, 'function') ? t.fn() : t.fn, i = 0; i < e.length; i++)
            (s = e[i]),
              (a = s.split('.')),
              1 === a.length
                ? (Modernizr[a[0]] = o)
                : ((Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean)) ||
                    (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                  (Modernizr[a[0]][a[1]] = o)),
              g.push((o ? '' : 'no-') + a.join('-'));
        }
    })(),
    delete y.addTest,
    delete y.addAsyncTest;
  for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
  e.Modernizr = Modernizr;
})(window, document);
