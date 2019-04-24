/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-devicemotion_deviceorientation-matchmedia-placeholder-pointerevents-touchevents-websockets !*/
!(function(e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function o() {
    var e, t, n, o, i, s, a;
    for (var u in y)
      if (y.hasOwnProperty(u)) {
        if (
          ((e = []),
          (t = y[u]),
          t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, 'function') ? t.fn() : t.fn, i = 0; i < e.length; i++)
          (s = e[i]),
            (a = s.split('.')),
            1 === a.length
              ? (Modernizr[a[0]] = o)
              : (!Modernizr[a[0]] ||
                  Modernizr[a[0]] instanceof Boolean ||
                  (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                (Modernizr[a[0]][a[1]] = o)),
            C.push((o ? '' : 'no-') + a.join('-'));
      }
  }
  function i() {
    return 'function' != typeof t.createElement
      ? t.createElement(arguments[0])
      : _
      ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function s() {
    var e = t.body;
    return e || ((e = i(_ ? 'svg' : 'body')), (e.fake = !0)), e;
  }
  function a(e, n, r, o) {
    var a,
      u,
      l,
      f,
      d = 'modernizr',
      c = i('div'),
      p = s();
    if (parseInt(r, 10)) for (; r--; ) (l = i('div')), (l.id = o ? o[r] : d + (r + 1)), c.appendChild(l);
    return (
      (a = i('style')),
      (a.type = 'text/css'),
      (a.id = 's' + d),
      (p.fake ? p : c).appendChild(a),
      p.appendChild(c),
      a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(t.createTextNode(e)),
      (c.id = d),
      p.fake &&
        ((p.style.background = ''),
        (p.style.overflow = 'hidden'),
        (f = x.style.overflow),
        (x.style.overflow = 'hidden'),
        x.appendChild(p)),
      (u = n(c, e)),
      p.fake ? (p.parentNode.removeChild(p), (x.style.overflow = f), x.offsetHeight) : c.parentNode.removeChild(c),
      !!u
    );
  }
  function u(e, t) {
    return !!~('' + e).indexOf(t);
  }
  function l(e) {
    return e
      .replace(/([A-Z])/g, function(e, t) {
        return '-' + t.toLowerCase();
      })
      .replace(/^ms-/, '-ms-');
  }
  function f(t, n, r) {
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
  function d(t, r) {
    var o = t.length;
    if ('CSS' in e && 'supports' in e.CSS) {
      for (; o--; ) if (e.CSS.supports(l(t[o]), r)) return !0;
      return !1;
    }
    if ('CSSSupportsRule' in e) {
      for (var i = []; o--; ) i.push('(' + l(t[o]) + ':' + r + ')');
      return (
        (i = i.join(' or ')),
        a('@supports (' + i + ') { #modernizr { position: absolute; } }', function(e) {
          return 'absolute' == f(e, null, 'position');
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
  function p(e, t, o, s) {
    function a() {
      f && (delete L.style, delete L.modElem);
    }
    if (((s = r(s, 'undefined') ? !1 : s), !r(o, 'undefined'))) {
      var l = d(e, o);
      if (!r(l, 'undefined')) return l;
    }
    for (var f, p, v, m, h, y = ['modernizr', 'tspan', 'samp']; !L.style && y.length; )
      (f = !0), (L.modElem = i(y.shift())), (L.style = L.modElem.style);
    for (v = e.length, p = 0; v > p; p++)
      if (((m = e[p]), (h = L.style[m]), u(m, '-') && (m = c(m)), L.style[m] !== n)) {
        if (s || r(o, 'undefined')) return a(), 'pfx' == t ? m : !0;
        try {
          L.style[m] = o;
        } catch (g) {}
        if (L.style[m] != h) return a(), 'pfx' == t ? m : !0;
      }
    return a(), !1;
  }
  function v(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  function m(e, t, n) {
    var o;
    for (var i in e) if (e[i] in t) return n === !1 ? e[i] : ((o = t[e[i]]), r(o, 'function') ? v(o, n || t) : o);
    return !1;
  }
  function h(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + ' ' + P.join(s + ' ') + s).split(' ');
    return r(t, 'string') || r(t, 'undefined')
      ? p(a, t, o, i)
      : ((a = (e + ' ' + w.join(s + ' ') + s).split(' ')), m(a, t, n));
  }
  var y = [],
    g = {
      _version: '3.6.0',
      _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e]);
        }, 0);
      },
      addTest: function(e, t, n) {
        y.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function(e) {
        y.push({ name: null, fn: e });
      }
    },
    Modernizr = function() {};
  (Modernizr.prototype = g), (Modernizr = new Modernizr());
  var C = [],
    S = 'Moz O ms Webkit',
    w = g._config.usePrefixes ? S.toLowerCase().split(' ') : [];
  g._domPrefixes = w;
  var x = t.documentElement,
    _ = 'svg' === x.nodeName.toLowerCase(),
    b = (function() {
      function e(e, t) {
        var o;
        return e
          ? ((t && 'string' != typeof t) || (t = i(t || 'div')),
            (e = 'on' + e),
            (o = e in t),
            !o &&
              r &&
              (t.setAttribute || (t = i('div')),
              t.setAttribute(e, ''),
              (o = 'function' == typeof t[e]),
              t[e] !== n && (t[e] = n),
              t.removeAttribute(e)),
            o)
          : !1;
      }
      var r = !('onblur' in t.documentElement);
      return e;
    })();
  (g.hasEvent = b),
    Modernizr.addTest('pointerevents', function() {
      var e = !1,
        t = w.length;
      for (e = Modernizr.hasEvent('pointerdown'); t-- && !e; ) b(w[t] + 'pointerdown') && (e = !0);
      return e;
    });
  var T = g._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];
  g._prefixes = T;
  var E = (g.testStyles = a);
  Modernizr.addTest('touchevents', function() {
    var n;
    if ('ontouchstart' in e || (e.DocumentTouch && t instanceof DocumentTouch)) n = !0;
    else {
      var r = ['@media (', T.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join(
        ''
      );
      E(r, function(e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  });
  var z = !1;
  try {
    z = 'WebSocket' in e && 2 === e.WebSocket.CLOSING;
  } catch (k) {}
  Modernizr.addTest('websockets', z),
    Modernizr.addTest('devicemotion', 'DeviceMotionEvent' in e),
    Modernizr.addTest('deviceorientation', 'DeviceOrientationEvent' in e),
    Modernizr.addTest('placeholder', 'placeholder' in i('input') && 'placeholder' in i('textarea'));
  var P = g._config.usePrefixes ? S.split(' ') : [];
  g._cssomPrefixes = P;
  var A = { elem: i('modernizr') };
  Modernizr._q.push(function() {
    delete A.elem;
  });
  var L = { style: A.elem.style };
  Modernizr._q.unshift(function() {
    delete L.style;
  }),
    (g.testAllProps = h);
  var O = function(t) {
    var r,
      o = T.length,
      i = e.CSSRule;
    if ('undefined' == typeof i) return n;
    if (!t) return !1;
    if (((t = t.replace(/^@/, '')), (r = t.replace(/-/g, '_').toUpperCase() + '_RULE'), r in i)) return '@' + t;
    for (var s = 0; o > s; s++) {
      var a = T[s],
        u = a.toUpperCase() + '_' + r;
      if (u in i) return '@-' + a.toLowerCase() + '-' + t;
    }
    return !1;
  };
  g.atRule = O;
  var N = (g.prefixed = function(e, t, n) {
    return 0 === e.indexOf('@') ? O(e) : (-1 != e.indexOf('-') && (e = c(e)), t ? h(e, t, n) : h(e, 'pfx'));
  });
  Modernizr.addTest('matchmedia', !!N('matchMedia', e)), o(), delete g.addTest, delete g.addAsyncTest;
  for (var j = 0; j < Modernizr._q.length; j++) Modernizr._q[j]();
  e.Modernizr = Modernizr;
})(window, document);
