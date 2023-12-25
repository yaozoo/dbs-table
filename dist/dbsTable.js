import './style.css';
import { defineComponent as Gi, useSlots as gc, computed as _c, resolveComponent as Va, unref as Ie, openBlock as Gr, createBlock as $t, createSlots as D0, withCtx as $a, createElementBlock as Xa, Fragment as O0, renderList as Si, renderSlot as I0, normalizeProps as wc, guardReactiveProps as Ec, createCommentVNode as Jt, normalizeClass as N0, createElementVNode as R0, toDisplayString as hu, createVNode as xu, ref as Na, watch as du, onMounted as pu, resolveDirective as Js, withDirectives as qs, normalizeStyle as vu } from "vue";
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Zs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zs(Object(r), !0).forEach(function(a) {
      mu(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zs(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function _i(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _i = function(t) {
    return typeof t;
  } : _i = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function mu(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ut() {
  return Ut = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ut.apply(this, arguments);
}
function gu(e, t) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), n, i;
  for (i = 0; i < a.length; i++)
    n = a[i], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function _u(e, t) {
  if (e == null)
    return {};
  var r = gu(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++)
      a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
var wu = "1.15.0";
function Bt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Wt = Bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), $n = Bt(/Edge/i), Qs = Bt(/firefox/i), wn = Bt(/safari/i) && !Bt(/chrome/i) && !Bt(/android/i), Tc = Bt(/iP(ad|od|hone)/i), kc = Bt(/chrome/i) && Bt(/android/i), Sc = {
  capture: !1,
  passive: !1
};
function Ue(e, t, r) {
  e.addEventListener(t, r, !Wt && Sc);
}
function Be(e, t, r) {
  e.removeEventListener(t, r, !Wt && Sc);
}
function yi(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Eu(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function St(e, t, r, a) {
  if (e) {
    r = r || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === r && yi(e, t) : yi(e, t)) || a && e === r)
        return e;
      if (e === r)
        break;
    } while (e = Eu(e));
  }
  return null;
}
var ef = /\s+/g;
function $r(e, t, r) {
  if (e && t)
    if (e.classList)
      e.classList[r ? "add" : "remove"](t);
    else {
      var a = (" " + e.className + " ").replace(ef, " ").replace(" " + t + " ", " ");
      e.className = (a + (r ? " " + t : "")).replace(ef, " ");
    }
}
function _e(e, t, r) {
  var a = e && e.style;
  if (a) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (r = e.currentStyle), t === void 0 ? r : r[t];
    !(t in a) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), a[t] = r + (typeof r == "string" ? "" : "px");
  }
}
function Ya(e, t) {
  var r = "";
  if (typeof e == "string")
    r = e;
  else
    do {
      var a = _e(e, "transform");
      a && a !== "none" && (r = a + " " + r);
    } while (!t && (e = e.parentNode));
  var n = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return n && new n(r);
}
function yc(e, t, r) {
  if (e) {
    var a = e.getElementsByTagName(t), n = 0, i = a.length;
    if (r)
      for (; n < i; n++)
        r(a[n], n);
    return a;
  }
  return [];
}
function Ft() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function pr(e, t, r, a, n) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, s, f, c, o, l, u;
    if (e !== window && e.parentNode && e !== Ft() ? (i = e.getBoundingClientRect(), s = i.top, f = i.left, c = i.bottom, o = i.right, l = i.height, u = i.width) : (s = 0, f = 0, c = window.innerHeight, o = window.innerWidth, l = window.innerHeight, u = window.innerWidth), (t || r) && e !== window && (n = n || e.parentNode, !Wt))
      do
        if (n && n.getBoundingClientRect && (_e(n, "transform") !== "none" || r && _e(n, "position") !== "static")) {
          var h = n.getBoundingClientRect();
          s -= h.top + parseInt(_e(n, "border-top-width")), f -= h.left + parseInt(_e(n, "border-left-width")), c = s + i.height, o = f + i.width;
          break;
        }
      while (n = n.parentNode);
    if (a && e !== window) {
      var d = Ya(n || e), p = d && d.a, x = d && d.d;
      d && (s /= x, f /= p, u /= p, l /= x, c = s + l, o = f + u);
    }
    return {
      top: s,
      left: f,
      bottom: c,
      right: o,
      width: u,
      height: l
    };
  }
}
function rf(e, t, r) {
  for (var a = qt(e, !0), n = pr(e)[t]; a; ) {
    var i = pr(a)[r], s = void 0;
    if (r === "top" || r === "left" ? s = n >= i : s = n <= i, !s)
      return a;
    if (a === Ft())
      break;
    a = qt(a, !1);
  }
  return !1;
}
function Qa(e, t, r, a) {
  for (var n = 0, i = 0, s = e.children; i < s.length; ) {
    if (s[i].style.display !== "none" && s[i] !== we.ghost && (a || s[i] !== we.dragged) && St(s[i], r.draggable, e, !1)) {
      if (n === t)
        return s[i];
      n++;
    }
    i++;
  }
  return null;
}
function q0(e, t) {
  for (var r = e.lastElementChild; r && (r === we.ghost || _e(r, "display") === "none" || t && !yi(r, t)); )
    r = r.previousElementSibling;
  return r || null;
}
function ct(e, t) {
  var r = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== we.clone && (!t || yi(e, t)) && r++;
  return r;
}
function tf(e) {
  var t = 0, r = 0, a = Ft();
  if (e)
    do {
      var n = Ya(e), i = n.a, s = n.d;
      t += e.scrollLeft * i, r += e.scrollTop * s;
    } while (e !== a && (e = e.parentNode));
  return [t, r];
}
function Tu(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      for (var a in t)
        if (t.hasOwnProperty(a) && t[a] === e[r][a])
          return Number(r);
    }
  return -1;
}
function qt(e, t) {
  if (!e || !e.getBoundingClientRect)
    return Ft();
  var r = e, a = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var n = _e(r);
      if (r.clientWidth < r.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body)
          return Ft();
        if (a || t)
          return r;
        a = !0;
      }
    }
  while (r = r.parentNode);
  return Ft();
}
function ku(e, t) {
  if (e && t)
    for (var r in t)
      t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
function s0(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var En;
function Fc(e, t) {
  return function() {
    if (!En) {
      var r = arguments, a = this;
      r.length === 1 ? e.call(a, r[0]) : e.apply(a, r), En = setTimeout(function() {
        En = void 0;
      }, t);
    }
  };
}
function Su() {
  clearTimeout(En), En = void 0;
}
function Ac(e, t, r) {
  e.scrollLeft += t, e.scrollTop += r;
}
function Cc(e) {
  var t = window.Polymer, r = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : r ? r(e).clone(!0)[0] : e.cloneNode(!0);
}
var Jr = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function yu() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(n) {
          if (!(_e(n, "display") === "none" || n === we.ghost)) {
            e.push({
              target: n,
              rect: pr(n)
            });
            var i = Ct({}, e[e.length - 1].rect);
            if (n.thisAnimationDuration) {
              var s = Ya(n, !0);
              s && (i.top -= s.f, i.left -= s.e);
            }
            n.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(a) {
      e.push(a);
    },
    removeAnimationState: function(a) {
      e.splice(Tu(e, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var n = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof a == "function" && a();
        return;
      }
      var i = !1, s = 0;
      e.forEach(function(f) {
        var c = 0, o = f.target, l = o.fromRect, u = pr(o), h = o.prevFromRect, d = o.prevToRect, p = f.rect, x = Ya(o, !0);
        x && (u.top -= x.f, u.left -= x.e), o.toRect = u, o.thisAnimationDuration && s0(h, u) && !s0(l, u) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - u.top) / (p.left - u.left) === (l.top - u.top) / (l.left - u.left) && (c = Au(p, h, d, n.options)), s0(u, l) || (o.prevFromRect = l, o.prevToRect = u, c || (c = n.options.animation), n.animate(o, p, u, c)), c && (i = !0, s = Math.max(s, c), clearTimeout(o.animationResetTimer), o.animationResetTimer = setTimeout(function() {
          o.animationTime = 0, o.prevFromRect = null, o.fromRect = null, o.prevToRect = null, o.thisAnimationDuration = null;
        }, c), o.thisAnimationDuration = c);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof a == "function" && a();
      }, s) : typeof a == "function" && a(), e = [];
    },
    animate: function(a, n, i, s) {
      if (s) {
        _e(a, "transition", ""), _e(a, "transform", "");
        var f = Ya(this.el), c = f && f.a, o = f && f.d, l = (n.left - i.left) / (c || 1), u = (n.top - i.top) / (o || 1);
        a.animatingX = !!l, a.animatingY = !!u, _e(a, "transform", "translate3d(" + l + "px," + u + "px,0)"), this.forRepaintDummy = Fu(a), _e(a, "transition", "transform " + s + "ms" + (this.options.easing ? " " + this.options.easing : "")), _e(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          _e(a, "transition", ""), _e(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, s);
      }
    }
  };
}
function Fu(e) {
  return e.offsetWidth;
}
function Au(e, t, r, a) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - r.top, 2) + Math.pow(t.left - r.left, 2)) * a.animation;
}
var Ra = [], f0 = {
  initializeByDefault: !0
}, Yn = {
  mount: function(t) {
    for (var r in f0)
      f0.hasOwnProperty(r) && !(r in t) && (t[r] = f0[r]);
    Ra.forEach(function(a) {
      if (a.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Ra.push(t);
  },
  pluginEvent: function(t, r, a) {
    var n = this;
    this.eventCanceled = !1, a.cancel = function() {
      n.eventCanceled = !0;
    };
    var i = t + "Global";
    Ra.forEach(function(s) {
      r[s.pluginName] && (r[s.pluginName][i] && r[s.pluginName][i](Ct({
        sortable: r
      }, a)), r.options[s.pluginName] && r[s.pluginName][t] && r[s.pluginName][t](Ct({
        sortable: r
      }, a)));
    });
  },
  initializePlugins: function(t, r, a, n) {
    Ra.forEach(function(f) {
      var c = f.pluginName;
      if (!(!t.options[c] && !f.initializeByDefault)) {
        var o = new f(t, r, t.options);
        o.sortable = t, o.options = t.options, t[c] = o, Ut(a, o.defaults);
      }
    });
    for (var i in t.options)
      if (t.options.hasOwnProperty(i)) {
        var s = this.modifyOption(t, i, t.options[i]);
        typeof s < "u" && (t.options[i] = s);
      }
  },
  getEventProperties: function(t, r) {
    var a = {};
    return Ra.forEach(function(n) {
      typeof n.eventProperties == "function" && Ut(a, n.eventProperties.call(r[n.pluginName], t));
    }), a;
  },
  modifyOption: function(t, r, a) {
    var n;
    return Ra.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[r] == "function" && (n = i.optionListeners[r].call(t[i.pluginName], a));
    }), n;
  }
};
function Cu(e) {
  var t = e.sortable, r = e.rootEl, a = e.name, n = e.targetEl, i = e.cloneEl, s = e.toEl, f = e.fromEl, c = e.oldIndex, o = e.newIndex, l = e.oldDraggableIndex, u = e.newDraggableIndex, h = e.originalEvent, d = e.putSortable, p = e.extraEventProperties;
  if (t = t || r && r[Jr], !!t) {
    var x, v = t.options, _ = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Wt && !$n ? x = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(a, !0, !0)), x.to = s || r, x.from = f || r, x.item = n || r, x.clone = i, x.oldIndex = c, x.newIndex = o, x.oldDraggableIndex = l, x.newDraggableIndex = u, x.originalEvent = h, x.pullMode = d ? d.lastPutMode : void 0;
    var T = Ct(Ct({}, p), Yn.getEventProperties(a, t));
    for (var g in T)
      x[g] = T[g];
    r && r.dispatchEvent(x), v[_] && v[_].call(t, x);
  }
}
var bu = ["evt"], Vr = function(t, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.evt, i = _u(a, bu);
  Yn.pluginEvent.bind(we)(t, r, Ct({
    dragEl: se,
    parentEl: rr,
    ghostEl: ke,
    rootEl: Je,
    nextEl: xa,
    lastDownEl: wi,
    cloneEl: Qe,
    cloneHidden: Kt,
    dragStarted: dn,
    putSortable: Tr,
    activeSortable: we.active,
    originalEvent: n,
    oldIndex: Ga,
    oldDraggableIndex: Tn,
    newIndex: Yr,
    newDraggableIndex: Yt,
    hideGhostForTarget: Ic,
    unhideGhostForTarget: Nc,
    cloneNowHidden: function() {
      Kt = !0;
    },
    cloneNowShown: function() {
      Kt = !1;
    },
    dispatchSortableEvent: function(f) {
      Mr({
        sortable: r,
        name: f,
        originalEvent: n
      });
    }
  }, i));
};
function Mr(e) {
  Cu(Ct({
    putSortable: Tr,
    cloneEl: Qe,
    targetEl: se,
    rootEl: Je,
    oldIndex: Ga,
    oldDraggableIndex: Tn,
    newIndex: Yr,
    newDraggableIndex: Yt
  }, e));
}
var se, rr, ke, Je, xa, wi, Qe, Kt, Ga, Yr, Tn, Yt, ii, Tr, Ua = !1, Fi = !1, Ai = [], ua, dt, c0, o0, af, nf, dn, Pa, kn, Sn = !1, si = !1, Ei, Ar, l0 = [], P0 = !1, Ci = [], zi = typeof document < "u", fi = Tc, sf = $n || Wt ? "cssFloat" : "float", Du = zi && !kc && !Tc && "draggable" in document.createElement("div"), bc = function() {
  if (zi) {
    if (Wt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Dc = function(t, r) {
  var a = _e(t), n = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), i = Qa(t, 0, r), s = Qa(t, 1, r), f = i && _e(i), c = s && _e(s), o = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + pr(i).width, l = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + pr(s).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && f.float && f.float !== "none") {
    var u = f.float === "left" ? "left" : "right";
    return s && (c.clear === "both" || c.clear === u) ? "vertical" : "horizontal";
  }
  return i && (f.display === "block" || f.display === "flex" || f.display === "table" || f.display === "grid" || o >= n && a[sf] === "none" || s && a[sf] === "none" && o + l > n) ? "vertical" : "horizontal";
}, Ou = function(t, r, a) {
  var n = a ? t.left : t.top, i = a ? t.right : t.bottom, s = a ? t.width : t.height, f = a ? r.left : r.top, c = a ? r.right : r.bottom, o = a ? r.width : r.height;
  return n === f || i === c || n + s / 2 === f + o / 2;
}, Iu = function(t, r) {
  var a;
  return Ai.some(function(n) {
    var i = n[Jr].options.emptyInsertThreshold;
    if (!(!i || q0(n))) {
      var s = pr(n), f = t >= s.left - i && t <= s.right + i, c = r >= s.top - i && r <= s.bottom + i;
      if (f && c)
        return a = n;
    }
  }), a;
}, Oc = function(t) {
  function r(i, s) {
    return function(f, c, o, l) {
      var u = f.options.group.name && c.options.group.name && f.options.group.name === c.options.group.name;
      if (i == null && (s || u))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (s && i === "clone")
        return i;
      if (typeof i == "function")
        return r(i(f, c, o, l), s)(f, c, o, l);
      var h = (s ? f : c).options.group.name;
      return i === !0 || typeof i == "string" && i === h || i.join && i.indexOf(h) > -1;
    };
  }
  var a = {}, n = t.group;
  (!n || _i(n) != "object") && (n = {
    name: n
  }), a.name = n.name, a.checkPull = r(n.pull, !0), a.checkPut = r(n.put), a.revertClone = n.revertClone, t.group = a;
}, Ic = function() {
  !bc && ke && _e(ke, "display", "none");
}, Nc = function() {
  !bc && ke && _e(ke, "display", "");
};
zi && !kc && document.addEventListener("click", function(e) {
  if (Fi)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Fi = !1, !1;
}, !0);
var ha = function(t) {
  if (se) {
    t = t.touches ? t.touches[0] : t;
    var r = Iu(t.clientX, t.clientY);
    if (r) {
      var a = {};
      for (var n in t)
        t.hasOwnProperty(n) && (a[n] = t[n]);
      a.target = a.rootEl = r, a.preventDefault = void 0, a.stopPropagation = void 0, r[Jr]._onDragOver(a);
    }
  }
}, Nu = function(t) {
  se && se.parentNode[Jr]._isOutsideThisEl(t.target);
};
function we(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = Ut({}, t), e[Jr] = this;
  var r = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Dc(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(s, f) {
      s.setData("Text", f.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: we.supportPointer !== !1 && "PointerEvent" in window && !wn,
    emptyInsertThreshold: 5
  };
  Yn.initializePlugins(this, e, r);
  for (var a in r)
    !(a in t) && (t[a] = r[a]);
  Oc(t);
  for (var n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Du, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? Ue(e, "pointerdown", this._onTapStart) : (Ue(e, "mousedown", this._onTapStart), Ue(e, "touchstart", this._onTapStart)), this.nativeDraggable && (Ue(e, "dragover", this), Ue(e, "dragenter", this)), Ai.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), Ut(this, yu());
}
we.prototype = /** @lends Sortable.prototype */
{
  constructor: we,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Pa = null);
  },
  _getDirection: function(t, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, r, se) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var r = this, a = this.el, n = this.options, i = n.preventOnFilter, s = t.type, f = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, c = (f || t).target, o = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || c, l = n.filter;
      if (Hu(a), !se && !(/mousedown|pointerdown/.test(s) && t.button !== 0 || n.disabled) && !o.isContentEditable && !(!this.nativeDraggable && wn && c && c.tagName.toUpperCase() === "SELECT") && (c = St(c, n.draggable, a, !1), !(c && c.animated) && wi !== c)) {
        if (Ga = ct(c), Tn = ct(c, n.draggable), typeof l == "function") {
          if (l.call(this, t, c, this)) {
            Mr({
              sortable: r,
              rootEl: o,
              name: "filter",
              targetEl: c,
              toEl: a,
              fromEl: a
            }), Vr("filter", r, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (l && (l = l.split(",").some(function(u) {
          if (u = St(o, u.trim(), a, !1), u)
            return Mr({
              sortable: r,
              rootEl: u,
              name: "filter",
              targetEl: c,
              fromEl: a,
              toEl: a
            }), Vr("filter", r, {
              evt: t
            }), !0;
        }), l)) {
          i && t.cancelable && t.preventDefault();
          return;
        }
        n.handle && !St(o, n.handle, a, !1) || this._prepareDragStart(t, f, c);
      }
    }
  },
  _prepareDragStart: function(t, r, a) {
    var n = this, i = n.el, s = n.options, f = i.ownerDocument, c;
    if (a && !se && a.parentNode === i) {
      var o = pr(a);
      if (Je = i, se = a, rr = se.parentNode, xa = se.nextSibling, wi = a, ii = s.group, we.dragged = se, ua = {
        target: se,
        clientX: (r || t).clientX,
        clientY: (r || t).clientY
      }, af = ua.clientX - o.left, nf = ua.clientY - o.top, this._lastX = (r || t).clientX, this._lastY = (r || t).clientY, se.style["will-change"] = "all", c = function() {
        if (Vr("delayEnded", n, {
          evt: t
        }), we.eventCanceled) {
          n._onDrop();
          return;
        }
        n._disableDelayedDragEvents(), !Qs && n.nativeDraggable && (se.draggable = !0), n._triggerDragStart(t, r), Mr({
          sortable: n,
          name: "choose",
          originalEvent: t
        }), $r(se, s.chosenClass, !0);
      }, s.ignore.split(",").forEach(function(l) {
        yc(se, l.trim(), u0);
      }), Ue(f, "dragover", ha), Ue(f, "mousemove", ha), Ue(f, "touchmove", ha), Ue(f, "mouseup", n._onDrop), Ue(f, "touchend", n._onDrop), Ue(f, "touchcancel", n._onDrop), Qs && this.nativeDraggable && (this.options.touchStartThreshold = 4, se.draggable = !0), Vr("delayStart", this, {
        evt: t
      }), s.delay && (!s.delayOnTouchOnly || r) && (!this.nativeDraggable || !($n || Wt))) {
        if (we.eventCanceled) {
          this._onDrop();
          return;
        }
        Ue(f, "mouseup", n._disableDelayedDrag), Ue(f, "touchend", n._disableDelayedDrag), Ue(f, "touchcancel", n._disableDelayedDrag), Ue(f, "mousemove", n._delayedDragTouchMoveHandler), Ue(f, "touchmove", n._delayedDragTouchMoveHandler), s.supportPointer && Ue(f, "pointermove", n._delayedDragTouchMoveHandler), n._dragStartTimer = setTimeout(c, s.delay);
      } else
        c();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var r = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    se && u0(se), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    Be(t, "mouseup", this._disableDelayedDrag), Be(t, "touchend", this._disableDelayedDrag), Be(t, "touchcancel", this._disableDelayedDrag), Be(t, "mousemove", this._delayedDragTouchMoveHandler), Be(t, "touchmove", this._delayedDragTouchMoveHandler), Be(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, r) {
    r = r || t.pointerType == "touch" && t, !this.nativeDraggable || r ? this.options.supportPointer ? Ue(document, "pointermove", this._onTouchMove) : r ? Ue(document, "touchmove", this._onTouchMove) : Ue(document, "mousemove", this._onTouchMove) : (Ue(se, "dragend", this), Ue(Je, "dragstart", this._onDragStart));
    try {
      document.selection ? Ti(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, r) {
    if (Ua = !1, Je && se) {
      Vr("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && Ue(document, "dragover", Nu);
      var a = this.options;
      !t && $r(se, a.dragClass, !1), $r(se, a.ghostClass, !0), we.active = this, t && this._appendGhost(), Mr({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (dt) {
      this._lastX = dt.clientX, this._lastY = dt.clientY, Ic();
      for (var t = document.elementFromPoint(dt.clientX, dt.clientY), r = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(dt.clientX, dt.clientY), t !== r); )
        r = t;
      if (se.parentNode[Jr]._isOutsideThisEl(t), r)
        do {
          if (r[Jr]) {
            var a = void 0;
            if (a = r[Jr]._onDragOver({
              clientX: dt.clientX,
              clientY: dt.clientY,
              target: t,
              rootEl: r
            }), a && !this.options.dragoverBubble)
              break;
          }
          t = r;
        } while (r = r.parentNode);
      Nc();
    }
  },
  _onTouchMove: function(t) {
    if (ua) {
      var r = this.options, a = r.fallbackTolerance, n = r.fallbackOffset, i = t.touches ? t.touches[0] : t, s = ke && Ya(ke, !0), f = ke && s && s.a, c = ke && s && s.d, o = fi && Ar && tf(Ar), l = (i.clientX - ua.clientX + n.x) / (f || 1) + (o ? o[0] - l0[0] : 0) / (f || 1), u = (i.clientY - ua.clientY + n.y) / (c || 1) + (o ? o[1] - l0[1] : 0) / (c || 1);
      if (!we.active && !Ua) {
        if (a && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < a)
          return;
        this._onDragStart(t, !0);
      }
      if (ke) {
        s ? (s.e += l - (c0 || 0), s.f += u - (o0 || 0)) : s = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: l,
          f: u
        };
        var h = "matrix(".concat(s.a, ",").concat(s.b, ",").concat(s.c, ",").concat(s.d, ",").concat(s.e, ",").concat(s.f, ")");
        _e(ke, "webkitTransform", h), _e(ke, "mozTransform", h), _e(ke, "msTransform", h), _e(ke, "transform", h), c0 = l, o0 = u, dt = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ke) {
      var t = this.options.fallbackOnBody ? document.body : Je, r = pr(se, !0, fi, !0, t), a = this.options;
      if (fi) {
        for (Ar = t; _e(Ar, "position") === "static" && _e(Ar, "transform") === "none" && Ar !== document; )
          Ar = Ar.parentNode;
        Ar !== document.body && Ar !== document.documentElement ? (Ar === document && (Ar = Ft()), r.top += Ar.scrollTop, r.left += Ar.scrollLeft) : Ar = Ft(), l0 = tf(Ar);
      }
      ke = se.cloneNode(!0), $r(ke, a.ghostClass, !1), $r(ke, a.fallbackClass, !0), $r(ke, a.dragClass, !0), _e(ke, "transition", ""), _e(ke, "transform", ""), _e(ke, "box-sizing", "border-box"), _e(ke, "margin", 0), _e(ke, "top", r.top), _e(ke, "left", r.left), _e(ke, "width", r.width), _e(ke, "height", r.height), _e(ke, "opacity", "0.8"), _e(ke, "position", fi ? "absolute" : "fixed"), _e(ke, "zIndex", "100000"), _e(ke, "pointerEvents", "none"), we.ghost = ke, t.appendChild(ke), _e(ke, "transform-origin", af / parseInt(ke.style.width) * 100 + "% " + nf / parseInt(ke.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, r) {
    var a = this, n = t.dataTransfer, i = a.options;
    if (Vr("dragStart", this, {
      evt: t
    }), we.eventCanceled) {
      this._onDrop();
      return;
    }
    Vr("setupClone", this), we.eventCanceled || (Qe = Cc(se), Qe.removeAttribute("id"), Qe.draggable = !1, Qe.style["will-change"] = "", this._hideClone(), $r(Qe, this.options.chosenClass, !1), we.clone = Qe), a.cloneId = Ti(function() {
      Vr("clone", a), !we.eventCanceled && (a.options.removeCloneOnHide || Je.insertBefore(Qe, se), a._hideClone(), Mr({
        sortable: a,
        name: "clone"
      }));
    }), !r && $r(se, i.dragClass, !0), r ? (Fi = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Be(document, "mouseup", a._onDrop), Be(document, "touchend", a._onDrop), Be(document, "touchcancel", a._onDrop), n && (n.effectAllowed = "move", i.setData && i.setData.call(a, n, se)), Ue(document, "drop", a), _e(se, "transform", "translateZ(0)")), Ua = !0, a._dragStartId = Ti(a._dragStarted.bind(a, r, t)), Ue(document, "selectstart", a), dn = !0, wn && _e(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var r = this.el, a = t.target, n, i, s, f = this.options, c = f.group, o = we.active, l = ii === c, u = f.sort, h = Tr || o, d, p = this, x = !1;
    if (P0)
      return;
    function v(De, V) {
      Vr(De, p, Ct({
        evt: t,
        isOwner: l,
        axis: d ? "vertical" : "horizontal",
        revert: s,
        dragRect: n,
        targetRect: i,
        canSort: u,
        fromSortable: h,
        target: a,
        completed: T,
        onMove: function(me, A) {
          return ci(Je, r, se, n, me, pr(me), t, A);
        },
        changed: g
      }, V));
    }
    function _() {
      v("dragOverAnimationCapture"), p.captureAnimationState(), p !== h && h.captureAnimationState();
    }
    function T(De) {
      return v("dragOverCompleted", {
        insertion: De
      }), De && (l ? o._hideClone() : o._showClone(p), p !== h && ($r(se, Tr ? Tr.options.ghostClass : o.options.ghostClass, !1), $r(se, f.ghostClass, !0)), Tr !== p && p !== we.active ? Tr = p : p === we.active && Tr && (Tr = null), h === p && (p._ignoreWhileAnimating = a), p.animateAll(function() {
        v("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== h && (h.animateAll(), h._ignoreWhileAnimating = null)), (a === se && !se.animated || a === r && !a.animated) && (Pa = null), !f.dragoverBubble && !t.rootEl && a !== document && (se.parentNode[Jr]._isOutsideThisEl(t.target), !De && ha(t)), !f.dragoverBubble && t.stopPropagation && t.stopPropagation(), x = !0;
    }
    function g() {
      Yr = ct(se), Yt = ct(se, f.draggable), Mr({
        sortable: p,
        name: "change",
        toEl: r,
        newIndex: Yr,
        newDraggableIndex: Yt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), a = St(a, f.draggable, r, !0), v("dragOver"), we.eventCanceled)
      return x;
    if (se.contains(t.target) || a.animated && a.animatingX && a.animatingY || p._ignoreWhileAnimating === a)
      return T(!1);
    if (Fi = !1, o && !f.disabled && (l ? u || (s = rr !== Je) : Tr === this || (this.lastPutMode = ii.checkPull(this, o, se, t)) && c.checkPut(this, o, se, t))) {
      if (d = this._getDirection(t, a) === "vertical", n = pr(se), v("dragOverValid"), we.eventCanceled)
        return x;
      if (s)
        return rr = Je, _(), this._hideClone(), v("revert"), we.eventCanceled || (xa ? Je.insertBefore(se, xa) : Je.appendChild(se)), T(!0);
      var D = q0(r, f.draggable);
      if (!D || Lu(t, d, this) && !D.animated) {
        if (D === se)
          return T(!1);
        if (D && r === t.target && (a = D), a && (i = pr(a)), ci(Je, r, se, n, a, i, t, !!a) !== !1)
          return _(), D && D.nextSibling ? r.insertBefore(se, D.nextSibling) : r.appendChild(se), rr = r, g(), T(!0);
      } else if (D && Bu(t, d, this)) {
        var P = Qa(r, 0, f, !0);
        if (P === se)
          return T(!1);
        if (a = P, i = pr(a), ci(Je, r, se, n, a, i, t, !1) !== !1)
          return _(), r.insertBefore(se, P), rr = r, g(), T(!0);
      } else if (a.parentNode === r) {
        i = pr(a);
        var O = 0, k, I = se.parentNode !== r, b = !Ou(se.animated && se.toRect || n, a.animated && a.toRect || i, d), G = d ? "top" : "left", M = rf(a, "top", "top") || rf(se, "top", "top"), B = M ? M.scrollTop : void 0;
        Pa !== a && (k = i[G], Sn = !1, si = !b && f.invertSwap || I), O = Mu(t, a, i, d, b ? 1 : f.swapThreshold, f.invertedSwapThreshold == null ? f.swapThreshold : f.invertedSwapThreshold, si, Pa === a);
        var K;
        if (O !== 0) {
          var oe = ct(se);
          do
            oe -= O, K = rr.children[oe];
          while (K && (_e(K, "display") === "none" || K === ke));
        }
        if (O === 0 || K === a)
          return T(!1);
        Pa = a, kn = O;
        var ee = a.nextElementSibling, le = !1;
        le = O === 1;
        var fe = ci(Je, r, se, n, a, i, t, le);
        if (fe !== !1)
          return (fe === 1 || fe === -1) && (le = fe === 1), P0 = !0, setTimeout(Pu, 30), _(), le && !ee ? r.appendChild(se) : a.parentNode.insertBefore(se, le ? ee : a), M && Ac(M, 0, B - M.scrollTop), rr = se.parentNode, k !== void 0 && !si && (Ei = Math.abs(k - pr(a)[G])), g(), T(!0);
      }
      if (r.contains(se))
        return T(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Be(document, "mousemove", this._onTouchMove), Be(document, "touchmove", this._onTouchMove), Be(document, "pointermove", this._onTouchMove), Be(document, "dragover", ha), Be(document, "mousemove", ha), Be(document, "touchmove", ha);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    Be(t, "mouseup", this._onDrop), Be(t, "touchend", this._onDrop), Be(t, "pointerup", this._onDrop), Be(t, "touchcancel", this._onDrop), Be(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var r = this.el, a = this.options;
    if (Yr = ct(se), Yt = ct(se, a.draggable), Vr("drop", this, {
      evt: t
    }), rr = se && se.parentNode, Yr = ct(se), Yt = ct(se, a.draggable), we.eventCanceled) {
      this._nulling();
      return;
    }
    Ua = !1, si = !1, Sn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), B0(this.cloneId), B0(this._dragStartId), this.nativeDraggable && (Be(document, "drop", this), Be(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), wn && _e(document.body, "user-select", ""), _e(se, "transform", ""), t && (dn && (t.cancelable && t.preventDefault(), !a.dropBubble && t.stopPropagation()), ke && ke.parentNode && ke.parentNode.removeChild(ke), (Je === rr || Tr && Tr.lastPutMode !== "clone") && Qe && Qe.parentNode && Qe.parentNode.removeChild(Qe), se && (this.nativeDraggable && Be(se, "dragend", this), u0(se), se.style["will-change"] = "", dn && !Ua && $r(se, Tr ? Tr.options.ghostClass : this.options.ghostClass, !1), $r(se, this.options.chosenClass, !1), Mr({
      sortable: this,
      name: "unchoose",
      toEl: rr,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Je !== rr ? (Yr >= 0 && (Mr({
      rootEl: rr,
      name: "add",
      toEl: rr,
      fromEl: Je,
      originalEvent: t
    }), Mr({
      sortable: this,
      name: "remove",
      toEl: rr,
      originalEvent: t
    }), Mr({
      rootEl: rr,
      name: "sort",
      toEl: rr,
      fromEl: Je,
      originalEvent: t
    }), Mr({
      sortable: this,
      name: "sort",
      toEl: rr,
      originalEvent: t
    })), Tr && Tr.save()) : Yr !== Ga && Yr >= 0 && (Mr({
      sortable: this,
      name: "update",
      toEl: rr,
      originalEvent: t
    }), Mr({
      sortable: this,
      name: "sort",
      toEl: rr,
      originalEvent: t
    })), we.active && ((Yr == null || Yr === -1) && (Yr = Ga, Yt = Tn), Mr({
      sortable: this,
      name: "end",
      toEl: rr,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Vr("nulling", this), Je = se = rr = ke = xa = Qe = wi = Kt = ua = dt = dn = Yr = Yt = Ga = Tn = Pa = kn = Tr = ii = we.dragged = we.ghost = we.clone = we.active = null, Ci.forEach(function(t) {
      t.checked = !0;
    }), Ci.length = c0 = o0 = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        se && (this._onDragOver(t), Ru(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], r, a = this.el.children, n = 0, i = a.length, s = this.options; n < i; n++)
      r = a[n], St(r, s.draggable, this.el, !1) && t.push(r.getAttribute(s.dataIdAttr) || Wu(r));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, r) {
    var a = {}, n = this.el;
    this.toArray().forEach(function(i, s) {
      var f = n.children[s];
      St(f, this.options.draggable, n, !1) && (a[i] = f);
    }, this), r && this.captureAnimationState(), t.forEach(function(i) {
      a[i] && (n.removeChild(a[i]), n.appendChild(a[i]));
    }), r && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, r) {
    return St(t, r || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, r) {
    var a = this.options;
    if (r === void 0)
      return a[t];
    var n = Yn.modifyOption(this, t, r);
    typeof n < "u" ? a[t] = n : a[t] = r, t === "group" && Oc(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Vr("destroy", this);
    var t = this.el;
    t[Jr] = null, Be(t, "mousedown", this._onTapStart), Be(t, "touchstart", this._onTapStart), Be(t, "pointerdown", this._onTapStart), this.nativeDraggable && (Be(t, "dragover", this), Be(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ai.splice(Ai.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Kt) {
      if (Vr("hideClone", this), we.eventCanceled)
        return;
      _e(Qe, "display", "none"), this.options.removeCloneOnHide && Qe.parentNode && Qe.parentNode.removeChild(Qe), Kt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Kt) {
      if (Vr("showClone", this), we.eventCanceled)
        return;
      se.parentNode == Je && !this.options.group.revertClone ? Je.insertBefore(Qe, se) : xa ? Je.insertBefore(Qe, xa) : Je.appendChild(Qe), this.options.group.revertClone && this.animate(se, Qe), _e(Qe, "display", ""), Kt = !1;
    }
  }
};
function Ru(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function ci(e, t, r, a, n, i, s, f) {
  var c, o = e[Jr], l = o.options.onMove, u;
  return window.CustomEvent && !Wt && !$n ? c = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (c = document.createEvent("Event"), c.initEvent("move", !0, !0)), c.to = t, c.from = e, c.dragged = r, c.draggedRect = a, c.related = n || t, c.relatedRect = i || pr(t), c.willInsertAfter = f, c.originalEvent = s, e.dispatchEvent(c), l && (u = l.call(o, c, s)), u;
}
function u0(e) {
  e.draggable = !1;
}
function Pu() {
  P0 = !1;
}
function Bu(e, t, r) {
  var a = pr(Qa(r.el, 0, r.options, !0)), n = 10;
  return t ? e.clientX < a.left - n || e.clientY < a.top && e.clientX < a.right : e.clientY < a.top - n || e.clientY < a.bottom && e.clientX < a.left;
}
function Lu(e, t, r) {
  var a = pr(q0(r.el, r.options.draggable)), n = 10;
  return t ? e.clientX > a.right + n || e.clientX <= a.right && e.clientY > a.bottom && e.clientX >= a.left : e.clientX > a.right && e.clientY > a.top || e.clientX <= a.right && e.clientY > a.bottom + n;
}
function Mu(e, t, r, a, n, i, s, f) {
  var c = a ? e.clientY : e.clientX, o = a ? r.height : r.width, l = a ? r.top : r.left, u = a ? r.bottom : r.right, h = !1;
  if (!s) {
    if (f && Ei < o * n) {
      if (!Sn && (kn === 1 ? c > l + o * i / 2 : c < u - o * i / 2) && (Sn = !0), Sn)
        h = !0;
      else if (kn === 1 ? c < l + Ei : c > u - Ei)
        return -kn;
    } else if (c > l + o * (1 - n) / 2 && c < u - o * (1 - n) / 2)
      return Uu(t);
  }
  return h = h || s, h && (c < l + o * i / 2 || c > u - o * i / 2) ? c > l + o / 2 ? 1 : -1 : 0;
}
function Uu(e) {
  return ct(se) < ct(e) ? 1 : -1;
}
function Wu(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, r = t.length, a = 0; r--; )
    a += t.charCodeAt(r);
  return a.toString(36);
}
function Hu(e) {
  Ci.length = 0;
  for (var t = e.getElementsByTagName("input"), r = t.length; r--; ) {
    var a = t[r];
    a.checked && Ci.push(a);
  }
}
function Ti(e) {
  return setTimeout(e, 0);
}
function B0(e) {
  return clearTimeout(e);
}
zi && Ue(document, "touchmove", function(e) {
  (we.active || Ua) && e.cancelable && e.preventDefault();
});
we.utils = {
  on: Ue,
  off: Be,
  css: _e,
  find: yc,
  is: function(t, r) {
    return !!St(t, r, t, !1);
  },
  extend: ku,
  throttle: Fc,
  closest: St,
  toggleClass: $r,
  clone: Cc,
  index: ct,
  nextTick: Ti,
  cancelNextTick: B0,
  detectDirection: Dc,
  getChild: Qa
};
we.get = function(e) {
  return e[Jr];
};
we.mount = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (we.utils = Ct(Ct({}, we.utils), a.utils)), Yn.mount(a);
  });
};
we.create = function(e, t) {
  return new we(e, t);
};
we.version = wu;
var ur = [], pn, L0, M0 = !1, h0, x0, bi, vn;
function Vu() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(r) {
      var a = r.originalEvent;
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ue(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? Ue(document, "touchmove", this._handleFallbackAutoScroll) : Ue(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var a = r.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : (Be(document, "pointermove", this._handleFallbackAutoScroll), Be(document, "touchmove", this._handleFallbackAutoScroll), Be(document, "mousemove", this._handleFallbackAutoScroll)), ff(), ki(), Su();
    },
    nulling: function() {
      bi = L0 = pn = M0 = vn = h0 = x0 = null, ur.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, a) {
      var n = this, i = (r.touches ? r.touches[0] : r).clientX, s = (r.touches ? r.touches[0] : r).clientY, f = document.elementFromPoint(i, s);
      if (bi = r, a || this.options.forceAutoScrollFallback || $n || Wt || wn) {
        d0(r, this.options, f, a);
        var c = qt(f, !0);
        M0 && (!vn || i !== h0 || s !== x0) && (vn && ff(), vn = setInterval(function() {
          var o = qt(document.elementFromPoint(i, s), !0);
          o !== c && (c = o, ki()), d0(r, n.options, o, a);
        }, 10), h0 = i, x0 = s);
      } else {
        if (!this.options.bubbleScroll || qt(f, !0) === Ft()) {
          ki();
          return;
        }
        d0(r, this.options, qt(f, !1), !1);
      }
    }
  }, Ut(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ki() {
  ur.forEach(function(e) {
    clearInterval(e.pid);
  }), ur = [];
}
function ff() {
  clearInterval(vn);
}
var d0 = Fc(function(e, t, r, a) {
  if (t.scroll) {
    var n = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, s = t.scrollSensitivity, f = t.scrollSpeed, c = Ft(), o = !1, l;
    L0 !== r && (L0 = r, ki(), pn = t.scroll, l = t.scrollFn, pn === !0 && (pn = qt(r, !0)));
    var u = 0, h = pn;
    do {
      var d = h, p = pr(d), x = p.top, v = p.bottom, _ = p.left, T = p.right, g = p.width, D = p.height, P = void 0, O = void 0, k = d.scrollWidth, I = d.scrollHeight, b = _e(d), G = d.scrollLeft, M = d.scrollTop;
      d === c ? (P = g < k && (b.overflowX === "auto" || b.overflowX === "scroll" || b.overflowX === "visible"), O = D < I && (b.overflowY === "auto" || b.overflowY === "scroll" || b.overflowY === "visible")) : (P = g < k && (b.overflowX === "auto" || b.overflowX === "scroll"), O = D < I && (b.overflowY === "auto" || b.overflowY === "scroll"));
      var B = P && (Math.abs(T - n) <= s && G + g < k) - (Math.abs(_ - n) <= s && !!G), K = O && (Math.abs(v - i) <= s && M + D < I) - (Math.abs(x - i) <= s && !!M);
      if (!ur[u])
        for (var oe = 0; oe <= u; oe++)
          ur[oe] || (ur[oe] = {});
      (ur[u].vx != B || ur[u].vy != K || ur[u].el !== d) && (ur[u].el = d, ur[u].vx = B, ur[u].vy = K, clearInterval(ur[u].pid), (B != 0 || K != 0) && (o = !0, ur[u].pid = setInterval((function() {
        a && this.layer === 0 && we.active._onTouchMove(bi);
        var ee = ur[this.layer].vy ? ur[this.layer].vy * f : 0, le = ur[this.layer].vx ? ur[this.layer].vx * f : 0;
        typeof l == "function" && l.call(we.dragged.parentNode[Jr], le, ee, e, bi, ur[this.layer].el) !== "continue" || Ac(ur[this.layer].el, le, ee);
      }).bind({
        layer: u
      }), 24))), u++;
    } while (t.bubbleScroll && h !== c && (h = qt(h, !1)));
    M0 = o;
  }
}, 30), Rc = function(t) {
  var r = t.originalEvent, a = t.putSortable, n = t.dragEl, i = t.activeSortable, s = t.dispatchSortableEvent, f = t.hideGhostForTarget, c = t.unhideGhostForTarget;
  if (r) {
    var o = a || i;
    f();
    var l = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, u = document.elementFromPoint(l.clientX, l.clientY);
    c(), o && !o.el.contains(u) && (s("spill"), this.onSpill({
      dragEl: n,
      putSortable: a
    }));
  }
};
function Z0() {
}
Z0.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var r = t.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(t) {
    var r = t.dragEl, a = t.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var n = Qa(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(r, n) : this.sortable.el.appendChild(r), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: Rc
};
Ut(Z0, {
  pluginName: "revertOnSpill"
});
function Q0() {
}
Q0.prototype = {
  onSpill: function(t) {
    var r = t.dragEl, a = t.putSortable, n = a || this.sortable;
    n.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), n.animateAll();
  },
  drop: Rc
};
Ut(Q0, {
  pluginName: "removeOnSpill"
});
we.mount(new Vu());
we.mount(Q0, Z0);
const Xu = Gi({
  props: {
    row: Object,
    render: Function,
    index: Number || String,
    column: { type: Object, default: null }
  },
  render: function() {
    return this.render(this.row, this.index);
  }
}), Gu = { key: 1 }, zu = { key: 2 }, ju = Gi({
  name: "ColumnItem"
}), $u = /* @__PURE__ */ Gi({
  ...ju,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    columnIndex: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = e;
    let r = gc(), a = _c(() => t.item);
    return (n, i) => {
      const s = Va("ColumnItem", !0), f = Va("el-table-column");
      return Ie(a).hasOwnProperty("show") && Ie(a).show || !Ie(a).hasOwnProperty("show") ? (Gr(), $t(f, {
        "show-overflow-tooltip": Ie(a).tooltip || !1,
        key: Ie(a).cusKey || Ie(a).key,
        width: Ie(a).width || "",
        height: Ie(a).height || "",
        "max-height": Ie(a).maxHeight || "",
        "min-width": Ie(a).minWidth || "",
        prop: Ie(a).key,
        label: Ie(a).label || Ie(a).title,
        align: Ie(a).align || "left",
        sortable: Ie(a).sortable,
        "sort-method": Ie(a).sortMethod,
        "header-align": Ie(a).align || "left",
        fixed: Ie(a).fixed
      }, D0({
        default: $a(() => [
          Ie(a).children ? (Gr(!0), Xa(O0, { key: 0 }, Si(Ie(a).children, (c, o) => (Gr(), Xa(O0, null, [
            Ie(a).children ? (Gr(), $t(s, {
              key: 0,
              item: c,
              columnIndex: `${e.columnIndex}-${o}`
            }, D0({ _: 2 }, [
              Si(Object.keys(Ie(r)), (l) => ({
                name: l,
                fn: $a((u) => [
                  I0(n.$slots, l, wc(Ec(u)))
                ])
              }))
            ]), 1032, ["item", "columnIndex"])) : Jt("", !0)
          ], 64))), 256)) : Jt("", !0)
        ]),
        _: 2
      }, [
        Ie(a).children ? void 0 : {
          name: "default",
          fn: $a((c) => [
            Ie(a).slot ? I0(n.$slots, Ie(a).slot, {
              key: 0,
              class: N0(Ie(a).className),
              scope: c
            }) : Ie(a).render ? Ie(a).render ? (Gr(), Xa("div", zu, [
              xu(Xu, {
                column: Ie(a),
                row: c.row,
                render: Ie(a).render,
                index: Number(e.columnIndex)
              }, null, 8, ["column", "row", "render", "index"])
            ])) : Jt("", !0) : (Gr(), Xa("div", Gu, [
              R0("span", {
                class: N0(Ie(a).className)
              }, hu(c.row[Ie(a).key]), 3)
            ]))
          ]),
          key: "0"
        }
      ]), 1032, ["show-overflow-tooltip", "width", "height", "max-height", "min-width", "prop", "label", "align", "sortable", "sort-method", "header-align", "fixed"])) : Jt("", !0);
    };
  }
});
var Wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yu(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function a() {
      return this instanceof a ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(a) {
    var n = Object.getOwnPropertyDescriptor(e, a);
    Object.defineProperty(r, a, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[a];
      }
    });
  }), r;
}
var Pc = {}, p0 = { exports: {} }, cf;
function Ku() {
  return cf || (cf = 1, function(e, t) {
    (function(r, a) {
      a();
    })(Wa, function() {
      function r(o, l) {
        return typeof l > "u" ? l = { autoBom: !1 } : typeof l != "object" && (console.warn("Deprecated: Expected third argument to be a object"), l = { autoBom: !l }), l.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type) ? new Blob(["\uFEFF", o], { type: o.type }) : o;
      }
      function a(o, l, u) {
        var h = new XMLHttpRequest();
        h.open("GET", o), h.responseType = "blob", h.onload = function() {
          c(h.response, l, u);
        }, h.onerror = function() {
          console.error("could not download file");
        }, h.send();
      }
      function n(o) {
        var l = new XMLHttpRequest();
        l.open("HEAD", o, !1);
        try {
          l.send();
        } catch {
        }
        return 200 <= l.status && 299 >= l.status;
      }
      function i(o) {
        try {
          o.dispatchEvent(new MouseEvent("click"));
        } catch {
          var l = document.createEvent("MouseEvents");
          l.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), o.dispatchEvent(l);
        }
      }
      var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Wa == "object" && Wa.global === Wa ? Wa : void 0, f = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), c = s.saveAs || (typeof window != "object" || window !== s ? function() {
      } : "download" in HTMLAnchorElement.prototype && !f ? function(o, l, u) {
        var h = s.URL || s.webkitURL, d = document.createElement("a");
        l = l || o.name || "download", d.download = l, d.rel = "noopener", typeof o == "string" ? (d.href = o, d.origin === location.origin ? i(d) : n(d.href) ? a(o, l, u) : i(d, d.target = "_blank")) : (d.href = h.createObjectURL(o), setTimeout(function() {
          h.revokeObjectURL(d.href);
        }, 4e4), setTimeout(function() {
          i(d);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(o, l, u) {
        if (l = l || o.name || "download", typeof o != "string")
          navigator.msSaveOrOpenBlob(r(o, u), l);
        else if (n(o))
          a(o, l, u);
        else {
          var h = document.createElement("a");
          h.href = o, h.target = "_blank", setTimeout(function() {
            i(h);
          });
        }
      } : function(o, l, u, h) {
        if (h = h || open("", "_blank"), h && (h.document.title = h.document.body.innerText = "downloading..."), typeof o == "string")
          return a(o, l, u);
        var d = o.type === "application/octet-stream", p = /constructor/i.test(s.HTMLElement) || s.safari, x = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((x || d && p || f) && typeof FileReader < "u") {
          var v = new FileReader();
          v.onloadend = function() {
            var g = v.result;
            g = x ? g : g.replace(/^data:[^;]*;/, "data:attachment/file;"), h ? h.location.href = g : location = g, h = null;
          }, v.readAsDataURL(o);
        } else {
          var _ = s.URL || s.webkitURL, T = _.createObjectURL(o);
          h ? h.location = T : location.href = T, h = null, setTimeout(function() {
            _.revokeObjectURL(T);
          }, 4e4);
        }
      });
      s.saveAs = c.saveAs = c, e.exports = c;
    });
  }(p0)), p0.exports;
}
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Nn = {};
Nn.version = "0.18.5";
var Qr = 1200, _a = 1252, Ju = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], es = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
}, ji = function(e) {
  Ju.indexOf(e) != -1 && (_a = es[0] = e);
};
function qu() {
  ji(1252);
}
var ut = function(e) {
  Qr = e, ji(e);
};
function $i() {
  ut(1200), qu();
}
function Di(e) {
  for (var t = [], r = 0, a = e.length; r < a; ++r)
    t[r] = e.charCodeAt(r);
  return t;
}
function Zu(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return t.join("");
}
function Bc(e) {
  for (var t = [], r = 0; r < e.length >> 1; ++r)
    t[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return t.join("");
}
var za = function(e) {
  var t = e.charCodeAt(0), r = e.charCodeAt(1);
  return t == 255 && r == 254 ? Zu(e.slice(2)) : t == 254 && r == 255 ? Bc(e.slice(2)) : t == 65279 ? e.slice(1) : e;
}, mn = function(t) {
  return String.fromCharCode(t);
}, U0 = function(t) {
  return String.fromCharCode(t);
}, Pe;
function Qu(e) {
  Pe = e, ut = function(t) {
    Qr = t, ji(t);
  }, za = function(t) {
    return t.charCodeAt(0) === 255 && t.charCodeAt(1) === 254 ? Pe.utils.decode(1200, Di(t.slice(2))) : t;
  }, mn = function(r) {
    return Qr === 1200 ? String.fromCharCode(r) : Pe.utils.decode(Qr, [r & 255, r >> 8])[0];
  }, U0 = function(r) {
    return Pe.utils.decode(_a, [r])[0];
  }, ho();
}
var Zt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Rn(e) {
  for (var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, o = 0; o < e.length; )
    r = e.charCodeAt(o++), i = r >> 2, a = e.charCodeAt(o++), s = (r & 3) << 4 | a >> 4, n = e.charCodeAt(o++), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), t += Zt.charAt(i) + Zt.charAt(s) + Zt.charAt(f) + Zt.charAt(c);
  return t;
}
function et(e) {
  var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var o = 0; o < e.length; )
    i = Zt.indexOf(e.charAt(o++)), s = Zt.indexOf(e.charAt(o++)), r = i << 2 | s >> 4, t += String.fromCharCode(r), f = Zt.indexOf(e.charAt(o++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (t += String.fromCharCode(a)), c = Zt.indexOf(e.charAt(o++)), n = (f & 3) << 6 | c, c !== 64 && (t += String.fromCharCode(n));
  return t;
}
var Ae = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), Ht = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function ta(e) {
  return Ae ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function of(e) {
  return Ae ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var qr = function(t) {
  return Ae ? Ht(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function Kn(e) {
  if (typeof ArrayBuffer > "u")
    return qr(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), a = 0; a != e.length; ++a)
    r[a] = e.charCodeAt(a) & 255;
  return t;
}
function sa(e) {
  if (Array.isArray(e))
    return e.map(function(a) {
      return String.fromCharCode(a);
    }).join("");
  for (var t = [], r = 0; r < e.length; ++r)
    t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function eh(e) {
  if (typeof Uint8Array > "u")
    throw new Error("Unsupported");
  return new Uint8Array(e);
}
function rs(e) {
  if (typeof ArrayBuffer > "u")
    throw new Error("Unsupported");
  if (e instanceof ArrayBuffer)
    return rs(new Uint8Array(e));
  for (var t = new Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}
var wr = Ae ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : Ht(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t)
      r += e[t].length;
    var a = new Uint8Array(r), n = 0;
    for (t = 0, r = 0; t < e.length; r += n, ++t)
      if (n = e[t].length, e[t] instanceof Uint8Array)
        a.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        a.set(new Uint8Array(e[t]), r);
      }
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function rh(e) {
  for (var t = [], r = 0, a = e.length + 250, n = ta(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128)
      n[r++] = s;
    else if (s < 2048)
      n[r++] = 192 | s >> 6 & 31, n[r++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[r++] = 240 | s >> 8 & 7, n[r++] = 128 | s >> 2 & 63, n[r++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[r++] = 128 | f & 63;
    } else
      n[r++] = 224 | s >> 12 & 15, n[r++] = 128 | s >> 6 & 63, n[r++] = 128 | s & 63;
    r > a && (t.push(n.slice(0, r)), r = 0, n = ta(65535), a = 65530);
  }
  return t.push(n.slice(0, r)), wr(t);
}
var Nr = /\u0000/g, gn = /[\u0001-\u0006]/g;
function Ka(e) {
  for (var t = "", r = e.length - 1; r >= 0; )
    t += e.charAt(r--);
  return t;
}
function vt(e, t) {
  var r = "" + e;
  return r.length >= t ? r : tr("0", t - r.length) + r;
}
function ts(e, t) {
  var r = "" + e;
  return r.length >= t ? r : tr(" ", t - r.length) + r;
}
function Oi(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + tr(" ", t - r.length);
}
function th(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : tr("0", t - r.length) + r;
}
function ah(e, t) {
  var r = "" + e;
  return r.length >= t ? r : tr("0", t - r.length) + r;
}
var lf = /* @__PURE__ */ Math.pow(2, 32);
function Ba(e, t) {
  if (e > lf || e < -lf)
    return th(e, t);
  var r = Math.round(e);
  return ah(r, t);
}
function Ii(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var uf = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], v0 = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function nh(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var pe = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, hf = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, ih = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function Ni(e, t, r) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, c = 1, o = 0, l = 0, u = Math.floor(n); o < t && (u = Math.floor(n), f = u * s + i, l = u * o + c, !(n - u < 5e-8)); )
    n = 1 / (n - u), i = s, s = f, c = o, o = l;
  if (l > t && (o > t ? (l = c, f = i) : (l = o, f = s)), !r)
    return [0, a * f, l];
  var h = Math.floor(a * f / l);
  return [h, a * f - h * l, l];
}
function Qt(e, t, r) {
  if (e > 2958465 || e < 0)
    return null;
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), t && t.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60)
    s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0)
    s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var c = new Date(1900, 0, 1);
    c.setDate(c.getDate() + a - 1), s = [c.getFullYear(), c.getMonth() + 1, c.getDate()], i = c.getDay(), a < 60 && (i = (i + 6) % 7), r && (i = uh(c, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
var Lc = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), sh = /* @__PURE__ */ Lc.getTime(), fh = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Mc(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= fh && (r += 24 * 60 * 60 * 1e3), (r - (sh + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Lc.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function as(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function ch(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function oh(e) {
  var t = e < 0 ? 12 : 11, r = as(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function lh(e) {
  var t = as(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function Pn(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = oh(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = lh(e), as(ch(r.toUpperCase()));
}
function wa(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Pn(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return rt(14, Mc(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function uh(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function hh(e, t, r, a) {
  var n = "", i = 0, s = 0, f = r.y, c, o = 0;
  switch (e) {
    case 98:
      f = r.y + 543;
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          c = f % 100, o = 2;
          break;
        default:
          c = f % 1e4, o = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          c = r.m, o = t.length;
          break;
        case 3:
          return v0[r.m - 1][1];
        case 5:
          return v0[r.m - 1][0];
        default:
          return v0[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          c = r.d, o = t.length;
          break;
        case 3:
          return uf[r.q][0];
        default:
          return uf[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          c = 1 + (r.H + 11) % 12, o = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          c = r.H, o = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          c = r.M, o = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000")
        throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? vt(r.S, t.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (r.S + r.u)), i >= 60 * s && (i = 0), t === "s" ? i === 0 ? "0" : "" + i / s : (n = vt(i, 2 + a), t === "ss" ? n.substr(0, 2) : "." + n.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          c = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          c = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          c = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      o = t.length === 3 ? 1 : 2;
      break;
    case 101:
      c = f, o = 1;
      break;
  }
  var l = o > 0 ? vt(c, o) : "";
  return l;
}
function ea(e) {
  var t = 3;
  if (e.length <= t)
    return e;
  for (var r = e.length % t, a = e.substr(0, r); r != e.length; r += t)
    a += (a.length > 0 ? "," : "") + e.substr(r, t);
  return a;
}
var Uc = /%/g;
function xh(e, t, r) {
  var a = t.replace(Uc, ""), n = t.length - a.length;
  return Lt(e, a, r * Math.pow(10, 2 * n)) + tr("%", n);
}
function dh(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44; )
    --a;
  return Lt(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)));
}
function Wc(e, t) {
  var r, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + Wc(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (i < 0 && (i += n), r = (t / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), r.indexOf("e") === -1) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, n) + "." + r.substr(2 + n), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
      return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
    });
  } else
    r = t.toExponential(a);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var Hc = /# (\?+)( ?)\/( ?)(\d+)/;
function ph(e, t, r) {
  var a = parseInt(e[4], 10), n = Math.round(t * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return r + (i === 0 ? "" : "" + i) + " " + (s === 0 ? tr(" ", e[1].length + 1 + e[4].length) : ts(s, e[1].length) + e[2] + "/" + e[3] + vt(f, e[4].length));
}
function vh(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + tr(" ", e[1].length + 2 + e[4].length);
}
var Vc = /^#*0*\.([0#]+)/, Xc = /\).*[0#]/, Gc = /\(###\) ###\\?-####/;
function Ur(e) {
  for (var t = "", r, a = 0; a != e.length; ++a)
    switch (r = e.charCodeAt(a)) {
      case 35:
        break;
      case 63:
        t += " ";
        break;
      case 48:
        t += "0";
        break;
      default:
        t += String.fromCharCode(r);
    }
  return t;
}
function xf(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function df(e, t) {
  var r = e - Math.floor(e), a = Math.pow(10, t);
  return t < ("" + Math.round(r * a)).length ? 0 : Math.round(r * a);
}
function mh(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function gh(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function it(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Xc)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? it("n", a, r) : "(" + it("n", a, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return dh(e, t, r);
  if (t.indexOf("%") !== -1)
    return xh(e, t, r);
  if (t.indexOf("E") !== -1)
    return Wc(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + it(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, i, s, f, c = Math.abs(r), o = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return o + Ba(c, t.length);
  if (t.match(/^[#?]+$/))
    return n = Ba(r, 0), n === "0" && (n = ""), n.length > t.length ? n : Ur(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(Hc))
    return ph(i, c, o);
  if (t.match(/^#+0+$/))
    return o + Ba(c, t.length - t.indexOf("0"));
  if (i = t.match(Vc))
    return n = xf(r, i[1].length).replace(/^([^\.]+)$/, "$1." + Ur(i[1])).replace(/\.$/, "." + Ur(i[1])).replace(/\.(\d*)$/, function(p, x) {
      return "." + x + tr("0", Ur(
        /*::(*/
        i[1]
      ).length - x.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return o + xf(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return o + ea(Ba(c, 0));
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + it(e, t, -r) : ea("" + (Math.floor(r) + mh(r, i[1].length))) + "." + vt(df(r, i[1].length), i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return it(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Ka(it(e, t.replace(/[\\-]/g, ""), r)), s = 0, Ka(Ka(t.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return s < n.length ? n.charAt(s++) : p === "0" ? "0" : "";
    }));
  if (t.match(Gc))
    return n = it(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var l = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), f = Ni(c, Math.pow(10, s) - 1, !1), n = "" + o, l = Lt(
      "n",
      /*::String(*/
      i[1],
      f[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), n += l + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], l = Oi(f[2], s), l.length < i[4].length && (l = Ur(i[4].substr(i[4].length - l.length)) + l), n += l, n;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = Ni(c, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? ts(f[1], s) + i[2] + "/" + i[3] + Oi(f[2], s) : tr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return n = Ba(r, 0), t.length <= n.length ? n : Ur(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var u = t.indexOf(".") - s, h = t.length - n.length - u;
    return Ur(t.substr(0, u) + n + t.substr(t.length - h));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return s = df(r, i[1].length), r < 0 ? "-" + it(e, t, -r) : ea(gh(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? vt(0, 3 - p.length) : "") + p;
    }) + "." + vt(s, i[1].length);
  switch (t) {
    case "###,##0.00":
      return it(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = ea(Ba(c, 0));
      return d !== "0" ? o + d : "";
    case "###,###.00":
      return it(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return it(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function _h(e, t, r) {
  for (var a = t.length - 1; t.charCodeAt(a - 1) === 44; )
    --a;
  return Lt(e, t.substr(0, a), r / Math.pow(10, 3 * (t.length - a)));
}
function wh(e, t, r) {
  var a = t.replace(Uc, ""), n = t.length - a.length;
  return Lt(e, a, r * Math.pow(10, 2 * n)) + tr("%", n);
}
function zc(e, t) {
  var r, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0)
      return "0.0E+0";
    if (t < 0)
      return "-" + zc(e, -t);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(t) * Math.LOG10E) % n;
    if (i < 0 && (i += n), r = (t / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), !r.match(/[Ee]/)) {
      var s = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
      return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
    });
  } else
    r = t.toExponential(a);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Tt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(Xc)) {
    var a = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Tt("n", a, r) : "(" + Tt("n", a, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44)
    return _h(e, t, r);
  if (t.indexOf("%") !== -1)
    return wh(e, t, r);
  if (t.indexOf("E") !== -1)
    return zc(t, r);
  if (t.charCodeAt(0) === 36)
    return "$" + Tt(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var n, i, s, f, c = Math.abs(r), o = r < 0 ? "-" : "";
  if (t.match(/^00+$/))
    return o + vt(c, t.length);
  if (t.match(/^[#?]+$/))
    return n = "" + r, r === 0 && (n = ""), n.length > t.length ? n : Ur(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(Hc))
    return vh(i, c, o);
  if (t.match(/^#+0+$/))
    return o + vt(c, t.length - t.indexOf("0"));
  if (i = t.match(Vc))
    return n = ("" + r).replace(/^([^\.]+)$/, "$1." + Ur(i[1])).replace(/\.$/, "." + Ur(i[1])), n = n.replace(/\.(\d*)$/, function(p, x) {
      return "." + x + tr("0", Ur(i[1]).length - x.length);
    }), t.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), i = t.match(/^(0*)\.(#*)$/))
    return o + ("" + c).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = t.match(/^#{1,3},##0(\.?)$/))
    return o + ea("" + c);
  if (i = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Tt(e, t, -r) : ea("" + r) + "." + tr("0", i[1].length);
  if (i = t.match(/^#,#*,#0/))
    return Tt(e, t.replace(/^#,#*,/, ""), r);
  if (i = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Ka(Tt(e, t.replace(/[\\-]/g, ""), r)), s = 0, Ka(Ka(t.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return s < n.length ? n.charAt(s++) : p === "0" ? "0" : "";
    }));
  if (t.match(Gc))
    return n = Tt(e, "##########", r), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var l = "";
  if (i = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), f = Ni(c, Math.pow(10, s) - 1, !1), n = "" + o, l = Lt(
      "n",
      /*::String(*/
      i[1],
      f[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), n += l + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], l = Oi(f[2], s), l.length < i[4].length && (l = Ur(i[4].substr(i[4].length - l.length)) + l), n += l, n;
  if (i = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = Ni(c, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? ts(f[1], s) + i[2] + "/" + i[3] + Oi(f[2], s) : tr(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = t.match(/^[#0?]+$/))
    return n = "" + r, t.length <= n.length ? n : Ur(t.substr(0, t.length - n.length)) + n;
  if (i = t.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var u = t.indexOf(".") - s, h = t.length - n.length - u;
    return Ur(t.substr(0, u) + n + t.substr(t.length - h));
  }
  if (i = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + Tt(e, t, -r) : ea("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? vt(0, 3 - p.length) : "") + p;
    }) + "." + vt(0, i[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = ea("" + c);
      return d !== "0" ? o + d : "";
    default:
      if (t.match(/\.[0#?]*$/))
        return Tt(e, t.slice(0, t.lastIndexOf(".")), r) + Ur(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function Lt(e, t, r) {
  return (r | 0) === r ? Tt(e, t, r) : it(e, t, r);
}
function Eh(e) {
  for (var t = [], r = !1, a = 0, n = 0; a < e.length; ++a)
    switch (
      /*cc=*/
      e.charCodeAt(a)
    ) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++a;
        break;
      case 59:
        t[t.length] = e.substr(n, a - n), n = a + 1;
    }
  if (t[t.length] = e.substr(n), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var jc = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Fa(e) {
  for (var t = 0, r = "", a = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        Ii(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午")
          return !0;
        ++t;
        break;
      case "[":
        for (a = r; e.charAt(t++) !== "]" && t < e.length; )
          a += e.charAt(t);
        if (a.match(jc))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function Th(e, t, r, a) {
  for (var n = [], i = "", s = 0, f = "", c = "t", o, l, u, h = "H"; s < e.length; )
    switch (f = e.charAt(s)) {
      case "G":
        if (!Ii(e, s))
          throw new Error("unrecognized character " + f + " in " + e);
        n[n.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (i = ""; (u = e.charCodeAt(++s)) !== 34 && s < e.length; )
          i += String.fromCharCode(u);
        n[n.length] = { t: "t", v: i }, ++s;
        break;
      case "\\":
        var d = e.charAt(++s), p = d === "(" || d === ")" ? d : "t";
        n[n.length] = { t: p, v: d }, ++s;
        break;
      case "_":
        n[n.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        n[n.length] = { t: "T", v: t }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (o == null && (o = Qt(t, r, e.charAt(s + 1) === "2"), o == null))
            return "";
          n[n.length] = { t: "X", v: e.substr(s, 2) }, c = f, s += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        f = f.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || o == null && (o = Qt(t, r), o == null))
          return "";
        for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; )
          i += f;
        f === "m" && c.toLowerCase() === "h" && (f = "M"), f === "h" && (f = h), n[n.length] = { t: f, v: i }, c = f;
        break;
      case "A":
      case "a":
      case "上":
        var x = { t: f, v: f };
        if (o == null && (o = Qt(t, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (o != null && (x.v = o.H >= 12 ? "P" : "A"), x.t = "T", h = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (o != null && (x.v = o.H >= 12 ? "PM" : "AM"), x.t = "T", s += 5, h = "h") : e.substr(s, 5).toUpperCase() === "上午/下午" ? (o != null && (x.v = o.H >= 12 ? "下午" : "上午"), x.t = "T", s += 5, h = "h") : (x.t = "t", ++s), o == null && x.t === "T")
          return "";
        n[n.length] = x, c = f;
        break;
      case "[":
        for (i = f; e.charAt(s++) !== "]" && s < e.length; )
          i += e.charAt(s);
        if (i.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + i + "|";
        if (i.match(jc)) {
          if (o == null && (o = Qt(t, r), o == null))
            return "";
          n[n.length] = { t: "Z", v: i.toLowerCase() }, c = i.charAt(1);
        } else
          i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", Fa(e) || (n[n.length] = { t: "t", v: i }));
        break;
      case ".":
        if (o != null) {
          for (i = f; ++s < e.length && (f = e.charAt(s)) === "0"; )
            i += f;
          n[n.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1; )
          i += f;
        n[n.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = f; e.charAt(++s) === f; )
          i += f;
        n[n.length] = { t: f, v: i }, c = f;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        n[n.length] = { t: a === 1 ? "t" : f, v: f }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; )
          i += e.charAt(s);
        n[n.length] = { t: "D", v: i };
        break;
      case " ":
        n[n.length] = { t: f, v: f }, ++s;
        break;
      case "$":
        n[n.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1)
          throw new Error("unrecognized character " + f + " in " + e);
        n[n.length] = { t: "t", v: f }, ++s;
        break;
    }
  var v = 0, _ = 0, T;
  for (s = n.length - 1, c = "t"; s >= 0; --s)
    switch (n[s].t) {
      case "h":
      case "H":
        n[s].t = h, c = "h", v < 1 && (v = 1);
        break;
      case "s":
        (T = n[s].v.match(/\.0+$/)) && (_ = Math.max(_, T[0].length - 1)), v < 3 && (v = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        c = n[s].t;
        break;
      case "m":
        c === "s" && (n[s].t = "M", v < 2 && (v = 2));
        break;
      case "X":
        break;
      case "Z":
        v < 1 && n[s].v.match(/[Hh]/) && (v = 1), v < 2 && n[s].v.match(/[Mm]/) && (v = 2), v < 3 && n[s].v.match(/[Ss]/) && (v = 3);
    }
  switch (v) {
    case 0:
      break;
    case 1:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M), o.M >= 60 && (o.M = 0, ++o.H);
      break;
    case 2:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M);
      break;
  }
  var g = "", D;
  for (s = 0; s < n.length; ++s)
    switch (n[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        n[s].v = "", n[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        n[s].v = hh(n[s].t.charCodeAt(0), n[s].v, o, _), n[s].t = "t";
        break;
      case "n":
      case "?":
        for (D = s + 1; n[D] != null && ((f = n[D].t) === "?" || f === "D" || (f === " " || f === "t") && n[D + 1] != null && (n[D + 1].t === "?" || n[D + 1].t === "t" && n[D + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[D].v === "/" || n[D].v === " " && n[D + 1] != null && n[D + 1].t == "?")); )
          n[s].v += n[D].v, n[D] = { v: "", t: ";" }, ++D;
        g += n[s].v, s = D - 1;
        break;
      case "G":
        n[s].t = "t", n[s].v = wa(t, r);
        break;
    }
  var P = "", O, k;
  if (g.length > 0) {
    g.charCodeAt(0) == 40 ? (O = t < 0 && g.charCodeAt(0) === 45 ? -t : t, k = Lt("n", g, O)) : (O = t < 0 && a > 1 ? -t : t, k = Lt("n", g, O), O < 0 && n[0] && n[0].t == "t" && (k = k.substr(1), n[0].v = "-" + n[0].v)), D = k.length - 1;
    var I = n.length;
    for (s = 0; s < n.length; ++s)
      if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
        I = s;
        break;
      }
    var b = n.length;
    if (I === n.length && k.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s)
        n[s] == null || "n?".indexOf(n[s].t) === -1 || (D >= n[s].v.length - 1 ? (D -= n[s].v.length, n[s].v = k.substr(D + 1, n[s].v.length)) : D < 0 ? n[s].v = "" : (n[s].v = k.substr(0, D + 1), D = -1), n[s].t = "t", b = s);
      D >= 0 && b < n.length && (n[b].v = k.substr(0, D + 1) + n[b].v);
    } else if (I !== n.length && k.indexOf("E") === -1) {
      for (D = k.indexOf(".") - 1, s = I; s >= 0; --s)
        if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
          for (l = n[s].v.indexOf(".") > -1 && s === I ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, P = n[s].v.substr(l + 1); l >= 0; --l)
            D >= 0 && (n[s].v.charAt(l) === "0" || n[s].v.charAt(l) === "#") && (P = k.charAt(D--) + P);
          n[s].v = P, n[s].t = "t", b = s;
        }
      for (D >= 0 && b < n.length && (n[b].v = k.substr(0, D + 1) + n[b].v), D = k.indexOf(".") + 1, s = I; s < n.length; ++s)
        if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== I)) {
          for (l = n[s].v.indexOf(".") > -1 && s === I ? n[s].v.indexOf(".") + 1 : 0, P = n[s].v.substr(0, l); l < n[s].v.length; ++l)
            D < k.length && (P += k.charAt(D++));
          n[s].v = P, n[s].t = "t", b = s;
        }
    }
  }
  for (s = 0; s < n.length; ++s)
    n[s] != null && "n?".indexOf(n[s].t) > -1 && (O = a > 1 && t < 0 && s > 0 && n[s - 1].v === "-" ? -t : t, n[s].v = Lt(n[s].t, n[s].v, O), n[s].t = "t");
  var G = "";
  for (s = 0; s !== n.length; ++s)
    n[s] != null && (G += n[s].v);
  return G;
}
var pf = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function vf(e, t) {
  if (t == null)
    return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function kh(e, t) {
  var r = Eh(e), a = r.length, n = r[a - 1].indexOf("@");
  if (a < 4 && n > -1 && --a, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number")
    return [4, r.length === 4 || n > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = n > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = n > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = n > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [a, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(pf), f = r[1].match(pf);
    return vf(t, s) ? [a, r[0]] : vf(t, f) ? [a, r[1]] : [a, r[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function rt(e, t, r) {
  r == null && (r = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? a = r.dateNF : a = e;
      break;
    case "number":
      e == 14 && r.dateNF ? a = r.dateNF : a = (r.table != null ? r.table : pe)[e], a == null && (a = r.table && r.table[hf[e]] || pe[hf[e]]), a == null && (a = ih[e] || "General");
      break;
  }
  if (Ii(a, 0))
    return wa(t, r);
  t instanceof Date && (t = Mc(t, r.date1904));
  var n = kh(a, t);
  if (Ii(n[1]))
    return wa(t, r);
  if (t === !0)
    t = "TRUE";
  else if (t === !1)
    t = "FALSE";
  else if (t === "" || t == null)
    return "";
  return Th(n[1], t, r, n[0]);
}
function At(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (pe[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (pe[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return pe[t] = e, t;
}
function Jn(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && At(e[t], t);
}
function an() {
  pe = nh();
}
var $c = {
  format: rt,
  load: At,
  _table: pe,
  load_table: Jn,
  parse_date_code: Qt,
  is_date: Fa,
  get_table: function() {
    return $c._table = pe;
  }
}, Sh = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, Yc = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function yh(e) {
  var t = typeof e == "number" ? pe[e] : e;
  return t = t.replace(Yc, "(\\d+)"), new RegExp("^" + t + "$");
}
function Fh(e, t, r) {
  var a = -1, n = -1, i = -1, s = -1, f = -1, c = -1;
  (t.match(Yc) || []).forEach(function(u, h) {
    var d = parseInt(r[h + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        a = d;
        break;
      case "d":
        i = d;
        break;
      case "h":
        s = d;
        break;
      case "s":
        c = d;
        break;
      case "m":
        s >= 0 ? f = d : n = d;
        break;
    }
  }), c >= 0 && f == -1 && n >= 0 && (f = n, n = -1);
  var o = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  o.length == 7 && (o = "0" + o), o.length == 8 && (o = "20" + o);
  var l = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
  return s == -1 && f == -1 && c == -1 ? o : a == -1 && n == -1 && i == -1 ? l : o + "T" + l;
}
var Ah = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var k = 0, I = new Array(256), b = 0; b != 256; ++b)
      k = b, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, k = k & 1 ? -306674912 ^ k >>> 1 : k >>> 1, I[b] = k;
    return typeof Int32Array < "u" ? new Int32Array(I) : I;
  }
  var r = t();
  function a(k) {
    var I = 0, b = 0, G = 0, M = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (G = 0; G != 256; ++G)
      M[G] = k[G];
    for (G = 0; G != 256; ++G)
      for (b = k[G], I = 256 + G; I < 4096; I += 256)
        b = M[I] = b >>> 8 ^ k[b & 255];
    var B = [];
    for (G = 1; G != 16; ++G)
      B[G - 1] = typeof Int32Array < "u" ? M.subarray(G * 256, G * 256 + 256) : M.slice(G * 256, G * 256 + 256);
    return B;
  }
  var n = a(r), i = n[0], s = n[1], f = n[2], c = n[3], o = n[4], l = n[5], u = n[6], h = n[7], d = n[8], p = n[9], x = n[10], v = n[11], _ = n[12], T = n[13], g = n[14];
  function D(k, I) {
    for (var b = I ^ -1, G = 0, M = k.length; G < M; )
      b = b >>> 8 ^ r[(b ^ k.charCodeAt(G++)) & 255];
    return ~b;
  }
  function P(k, I) {
    for (var b = I ^ -1, G = k.length - 15, M = 0; M < G; )
      b = g[k[M++] ^ b & 255] ^ T[k[M++] ^ b >> 8 & 255] ^ _[k[M++] ^ b >> 16 & 255] ^ v[k[M++] ^ b >>> 24] ^ x[k[M++]] ^ p[k[M++]] ^ d[k[M++]] ^ h[k[M++]] ^ u[k[M++]] ^ l[k[M++]] ^ o[k[M++]] ^ c[k[M++]] ^ f[k[M++]] ^ s[k[M++]] ^ i[k[M++]] ^ r[k[M++]];
    for (G += 15; M < G; )
      b = b >>> 8 ^ r[(b ^ k[M++]) & 255];
    return ~b;
  }
  function O(k, I) {
    for (var b = I ^ -1, G = 0, M = k.length, B = 0, K = 0; G < M; )
      B = k.charCodeAt(G++), B < 128 ? b = b >>> 8 ^ r[(b ^ B) & 255] : B < 2048 ? (b = b >>> 8 ^ r[(b ^ (192 | B >> 6 & 31)) & 255], b = b >>> 8 ^ r[(b ^ (128 | B & 63)) & 255]) : B >= 55296 && B < 57344 ? (B = (B & 1023) + 64, K = k.charCodeAt(G++) & 1023, b = b >>> 8 ^ r[(b ^ (240 | B >> 8 & 7)) & 255], b = b >>> 8 ^ r[(b ^ (128 | B >> 2 & 63)) & 255], b = b >>> 8 ^ r[(b ^ (128 | K >> 6 & 15 | (B & 3) << 4)) & 255], b = b >>> 8 ^ r[(b ^ (128 | K & 63)) & 255]) : (b = b >>> 8 ^ r[(b ^ (224 | B >> 12 & 15)) & 255], b = b >>> 8 ^ r[(b ^ (128 | B >> 6 & 63)) & 255], b = b >>> 8 ^ r[(b ^ (128 | B & 63)) & 255]);
    return ~b;
  }
  return e.table = r, e.bstr = D, e.buf = P, e.str = O, e;
}(), de = /* @__PURE__ */ function() {
  var t = {};
  t.version = "1.2.1";
  function r(m, S) {
    for (var w = m.split("/"), E = S.split("/"), y = 0, F = 0, W = Math.min(w.length, E.length); y < W; ++y) {
      if (F = w[y].length - E[y].length)
        return F;
      if (w[y] != E[y])
        return w[y] < E[y] ? -1 : 1;
    }
    return w.length - E.length;
  }
  function a(m) {
    if (m.charAt(m.length - 1) == "/")
      return m.slice(0, -1).indexOf("/") === -1 ? m : a(m.slice(0, -1));
    var S = m.lastIndexOf("/");
    return S === -1 ? m : m.slice(0, S + 1);
  }
  function n(m) {
    if (m.charAt(m.length - 1) == "/")
      return n(m.slice(0, -1));
    var S = m.lastIndexOf("/");
    return S === -1 ? m : m.slice(S + 1);
  }
  function i(m, S) {
    typeof S == "string" && (S = new Date(S));
    var w = S.getHours();
    w = w << 6 | S.getMinutes(), w = w << 5 | S.getSeconds() >>> 1, m.write_shift(2, w);
    var E = S.getFullYear() - 1980;
    E = E << 4 | S.getMonth() + 1, E = E << 5 | S.getDate(), m.write_shift(2, E);
  }
  function s(m) {
    var S = m.read_shift(2) & 65535, w = m.read_shift(2) & 65535, E = /* @__PURE__ */ new Date(), y = w & 31;
    w >>>= 5;
    var F = w & 15;
    w >>>= 4, E.setMilliseconds(0), E.setFullYear(w + 1980), E.setMonth(F - 1), E.setDate(y);
    var W = S & 31;
    S >>>= 5;
    var j = S & 63;
    return S >>>= 6, E.setHours(S), E.setMinutes(j), E.setSeconds(W << 1), E;
  }
  function f(m) {
    Sr(m, 0);
    for (var S = (
      /*::(*/
      {}
    ), w = 0; m.l <= m.length - 4; ) {
      var E = m.read_shift(2), y = m.read_shift(2), F = m.l + y, W = {};
      switch (E) {
        case 21589:
          w = m.read_shift(1), w & 1 && (W.mtime = m.read_shift(4)), y > 5 && (w & 2 && (W.atime = m.read_shift(4)), w & 4 && (W.ctime = m.read_shift(4))), W.mtime && (W.mt = new Date(W.mtime * 1e3));
          break;
      }
      m.l = F, S[E] = W;
    }
    return S;
  }
  var c;
  function o() {
    return c || (c = {});
  }
  function l(m, S) {
    if (m[0] == 80 && m[1] == 75)
      return Ks(m, S);
    if ((m[0] | 32) == 109 && (m[1] | 32) == 105)
      return su(m, S);
    if (m.length < 512)
      throw new Error("CFB file size " + m.length + " < 512");
    var w = 3, E = 512, y = 0, F = 0, W = 0, j = 0, U = 0, H = [], X = (
      /*::(*/
      m.slice(0, 512)
    );
    Sr(X, 0);
    var Z = u(X);
    switch (w = Z[0], w) {
      case 3:
        E = 512;
        break;
      case 4:
        E = 4096;
        break;
      case 0:
        if (Z[1] == 0)
          return Ks(m, S);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + w);
    }
    E !== 512 && (X = /*::(*/
    m.slice(0, E), Sr(
      X,
      28
      /* blob.l */
    ));
    var ce = m.slice(0, E);
    h(X, w);
    var xe = X.read_shift(4, "i");
    if (w === 3 && xe !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + xe);
    X.l += 4, W = X.read_shift(4, "i"), X.l += 4, X.chk("00100000", "Mini Stream Cutoff Size: "), j = X.read_shift(4, "i"), y = X.read_shift(4, "i"), U = X.read_shift(4, "i"), F = X.read_shift(4, "i");
    for (var re = -1, he = 0; he < 109 && (re = X.read_shift(4, "i"), !(re < 0)); ++he)
      H[he] = re;
    var Te = d(m, E);
    v(U, F, Te, E, H);
    var qe = T(Te, W, H, E);
    qe[W].name = "!Directory", y > 0 && j !== K && (qe[j].name = "!MiniFAT"), qe[H[0]].name = "!FAT", qe.fat_addrs = H, qe.ssz = E;
    var Ze = {}, Fr = [], ln = [], un = [];
    g(W, qe, Te, Fr, y, Ze, ln, j), p(ln, un, Fr), Fr.shift();
    var hn = {
      FileIndex: ln,
      FullPaths: un
    };
    return S && S.raw && (hn.raw = { header: ce, sectors: Te }), hn;
  }
  function u(m) {
    if (m[m.l] == 80 && m[m.l + 1] == 75)
      return [0, 0];
    m.chk(oe, "Header Signature: "), m.l += 16;
    var S = m.read_shift(2, "u");
    return [m.read_shift(2, "u"), S];
  }
  function h(m, S) {
    var w = 9;
    switch (m.l += 2, w = m.read_shift(2)) {
      case 9:
        if (S != 3)
          throw new Error("Sector Shift: Expected 9 saw " + w);
        break;
      case 12:
        if (S != 4)
          throw new Error("Sector Shift: Expected 12 saw " + w);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + w);
    }
    m.chk("0600", "Mini Sector Shift: "), m.chk("000000000000", "Reserved: ");
  }
  function d(m, S) {
    for (var w = Math.ceil(m.length / S) - 1, E = [], y = 1; y < w; ++y)
      E[y - 1] = m.slice(y * S, (y + 1) * S);
    return E[w - 1] = m.slice(w * S), E;
  }
  function p(m, S, w) {
    for (var E = 0, y = 0, F = 0, W = 0, j = 0, U = w.length, H = [], X = []; E < U; ++E)
      H[E] = X[E] = E, S[E] = w[E];
    for (; j < X.length; ++j)
      E = X[j], y = m[E].L, F = m[E].R, W = m[E].C, H[E] === E && (y !== -1 && H[y] !== y && (H[E] = H[y]), F !== -1 && H[F] !== F && (H[E] = H[F])), W !== -1 && (H[W] = E), y !== -1 && E != H[E] && (H[y] = H[E], X.lastIndexOf(y) < j && X.push(y)), F !== -1 && E != H[E] && (H[F] = H[E], X.lastIndexOf(F) < j && X.push(F));
    for (E = 1; E < U; ++E)
      H[E] === E && (F !== -1 && H[F] !== F ? H[E] = H[F] : y !== -1 && H[y] !== y && (H[E] = H[y]));
    for (E = 1; E < U; ++E)
      if (m[E].type !== 0) {
        if (j = E, j != H[j])
          do
            j = H[j], S[E] = S[j] + "/" + S[E];
          while (j !== 0 && H[j] !== -1 && j != H[j]);
        H[E] = -1;
      }
    for (S[0] += "/", E = 1; E < U; ++E)
      m[E].type !== 2 && (S[E] += "/");
  }
  function x(m, S, w) {
    for (var E = m.start, y = m.size, F = [], W = E; w && y > 0 && W >= 0; )
      F.push(S.slice(W * B, W * B + B)), y -= B, W = da(w, W * 4);
    return F.length === 0 ? z(0) : wr(F).slice(0, m.size);
  }
  function v(m, S, w, E, y) {
    var F = K;
    if (m === K) {
      if (S !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (m !== -1) {
      var W = w[m], j = (E >>> 2) - 1;
      if (!W)
        return;
      for (var U = 0; U < j && (F = da(W, U * 4)) !== K; ++U)
        y.push(F);
      v(da(W, E - 4), S - 1, w, E, y);
    }
  }
  function _(m, S, w, E, y) {
    var F = [], W = [];
    y || (y = []);
    var j = E - 1, U = 0, H = 0;
    for (U = S; U >= 0; ) {
      y[U] = !0, F[F.length] = U, W.push(m[U]);
      var X = w[Math.floor(U * 4 / E)];
      if (H = U * 4 & j, E < 4 + H)
        throw new Error("FAT boundary crossed: " + U + " 4 " + E);
      if (!m[X])
        break;
      U = da(m[X], H);
    }
    return { nodes: F, data: Cf([W]) };
  }
  function T(m, S, w, E) {
    var y = m.length, F = [], W = [], j = [], U = [], H = E - 1, X = 0, Z = 0, ce = 0, xe = 0;
    for (X = 0; X < y; ++X)
      if (j = [], ce = X + S, ce >= y && (ce -= y), !W[ce]) {
        U = [];
        var re = [];
        for (Z = ce; Z >= 0; ) {
          re[Z] = !0, W[Z] = !0, j[j.length] = Z, U.push(m[Z]);
          var he = w[Math.floor(Z * 4 / E)];
          if (xe = Z * 4 & H, E < 4 + xe)
            throw new Error("FAT boundary crossed: " + Z + " 4 " + E);
          if (!m[he] || (Z = da(m[he], xe), re[Z]))
            break;
        }
        F[ce] = { nodes: j, data: Cf([U]) };
      }
    return F;
  }
  function g(m, S, w, E, y, F, W, j) {
    for (var U = 0, H = E.length ? 2 : 0, X = S[m].data, Z = 0, ce = 0, xe; Z < X.length; Z += 128) {
      var re = (
        /*::(*/
        X.slice(Z, Z + 128)
      );
      Sr(re, 64), ce = re.read_shift(2), xe = qi(re, 0, ce - H), E.push(xe);
      var he = {
        name: xe,
        type: re.read_shift(1),
        color: re.read_shift(1),
        L: re.read_shift(4, "i"),
        R: re.read_shift(4, "i"),
        C: re.read_shift(4, "i"),
        clsid: re.read_shift(16),
        state: re.read_shift(4, "i"),
        start: 0,
        size: 0
      }, Te = re.read_shift(2) + re.read_shift(2) + re.read_shift(2) + re.read_shift(2);
      Te !== 0 && (he.ct = D(re, re.l - 8));
      var qe = re.read_shift(2) + re.read_shift(2) + re.read_shift(2) + re.read_shift(2);
      qe !== 0 && (he.mt = D(re, re.l - 8)), he.start = re.read_shift(4, "i"), he.size = re.read_shift(4, "i"), he.size < 0 && he.start < 0 && (he.size = he.type = 0, he.start = K, he.name = ""), he.type === 5 ? (U = he.start, y > 0 && U !== K && (S[U].name = "!StreamData")) : he.size >= 4096 ? (he.storage = "fat", S[he.start] === void 0 && (S[he.start] = _(w, he.start, S.fat_addrs, S.ssz)), S[he.start].name = he.name, he.content = S[he.start].data.slice(0, he.size)) : (he.storage = "minifat", he.size < 0 ? he.size = 0 : U !== K && he.start !== K && S[U] && (he.content = x(he, S[U].data, (S[j] || {}).data))), he.content && Sr(he.content, 0), F[xe] = he, W.push(he);
    }
  }
  function D(m, S) {
    return new Date((_r(m, S + 4) / 1e7 * Math.pow(2, 32) + _r(m, S) / 1e7 - 11644473600) * 1e3);
  }
  function P(m, S) {
    return o(), l(c.readFileSync(m), S);
  }
  function O(m, S) {
    var w = S && S.type;
    switch (w || Ae && Buffer.isBuffer(m) && (w = "buffer"), w || "base64") {
      case "file":
        return P(m, S);
      case "base64":
        return l(qr(et(m)), S);
      case "binary":
        return l(qr(m), S);
    }
    return l(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      m,
      S
    );
  }
  function k(m, S) {
    var w = S || {}, E = w.root || "Root Entry";
    if (m.FullPaths || (m.FullPaths = []), m.FileIndex || (m.FileIndex = []), m.FullPaths.length !== m.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    m.FullPaths.length === 0 && (m.FullPaths[0] = E + "/", m.FileIndex[0] = { name: E, type: 5 }), w.CLSID && (m.FileIndex[0].clsid = w.CLSID), I(m);
  }
  function I(m) {
    var S = "Sh33tJ5";
    if (!de.find(m, "/" + S)) {
      var w = z(4);
      w[0] = 55, w[1] = w[3] = 50, w[2] = 54, m.FileIndex.push({ name: S, type: 2, content: w, size: 4, L: 69, R: 69, C: 69 }), m.FullPaths.push(m.FullPaths[0] + S), b(m);
    }
  }
  function b(m, S) {
    k(m);
    for (var w = !1, E = !1, y = m.FullPaths.length - 1; y >= 0; --y) {
      var F = m.FileIndex[y];
      switch (F.type) {
        case 0:
          E ? w = !0 : (m.FileIndex.pop(), m.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          E = !0, isNaN(F.R * F.L * F.C) && (w = !0), F.R > -1 && F.L > -1 && F.R == F.L && (w = !0);
          break;
        default:
          w = !0;
          break;
      }
    }
    if (!(!w && !S)) {
      var W = new Date(1987, 1, 19), j = 0, U = Object.create ? /* @__PURE__ */ Object.create(null) : {}, H = [];
      for (y = 0; y < m.FullPaths.length; ++y)
        U[m.FullPaths[y]] = !0, m.FileIndex[y].type !== 0 && H.push([m.FullPaths[y], m.FileIndex[y]]);
      for (y = 0; y < H.length; ++y) {
        var X = a(H[y][0]);
        E = U[X], E || (H.push([X, {
          name: n(X).replace("/", ""),
          type: 1,
          clsid: le,
          ct: W,
          mt: W,
          content: null
        }]), U[X] = !0);
      }
      for (H.sort(function(xe, re) {
        return r(xe[0], re[0]);
      }), m.FullPaths = [], m.FileIndex = [], y = 0; y < H.length; ++y)
        m.FullPaths[y] = H[y][0], m.FileIndex[y] = H[y][1];
      for (y = 0; y < H.length; ++y) {
        var Z = m.FileIndex[y], ce = m.FullPaths[y];
        if (Z.name = n(ce).replace("/", ""), Z.L = Z.R = Z.C = -(Z.color = 1), Z.size = Z.content ? Z.content.length : 0, Z.start = 0, Z.clsid = Z.clsid || le, y === 0)
          Z.C = H.length > 1 ? 1 : -1, Z.size = 0, Z.type = 5;
        else if (ce.slice(-1) == "/") {
          for (j = y + 1; j < H.length && a(m.FullPaths[j]) != ce; ++j)
            ;
          for (Z.C = j >= H.length ? -1 : j, j = y + 1; j < H.length && a(m.FullPaths[j]) != a(ce); ++j)
            ;
          Z.R = j >= H.length ? -1 : j, Z.type = 1;
        } else
          a(m.FullPaths[y + 1] || "") == a(ce) && (Z.R = y + 1), Z.type = 2;
      }
    }
  }
  function G(m, S) {
    var w = S || {};
    if (w.fileType == "mad")
      return fu(m, w);
    switch (b(m), w.fileType) {
      case "zip":
        return eu(m, w);
    }
    var E = function(xe) {
      for (var re = 0, he = 0, Te = 0; Te < xe.FileIndex.length; ++Te) {
        var qe = xe.FileIndex[Te];
        if (qe.content) {
          var Ze = qe.content.length;
          Ze > 0 && (Ze < 4096 ? re += Ze + 63 >> 6 : he += Ze + 511 >> 9);
        }
      }
      for (var Fr = xe.FullPaths.length + 3 >> 2, ln = re + 7 >> 3, un = re + 127 >> 7, hn = ln + he + Fr + un, la = hn + 127 >> 7, i0 = la <= 109 ? 0 : Math.ceil((la - 109) / 127); hn + la + i0 + 127 >> 7 > la; )
        i0 = ++la <= 109 ? 0 : Math.ceil((la - 109) / 127);
      var Rt = [1, i0, la, un, Fr, he, re, 0];
      return xe.FileIndex[0].size = re << 6, Rt[7] = (xe.FileIndex[0].start = Rt[0] + Rt[1] + Rt[2] + Rt[3] + Rt[4] + Rt[5]) + (Rt[6] + 7 >> 3), Rt;
    }(m), y = z(E[7] << 9), F = 0, W = 0;
    {
      for (F = 0; F < 8; ++F)
        y.write_shift(1, ee[F]);
      for (F = 0; F < 8; ++F)
        y.write_shift(2, 0);
      for (y.write_shift(2, 62), y.write_shift(2, 3), y.write_shift(2, 65534), y.write_shift(2, 9), y.write_shift(2, 6), F = 0; F < 3; ++F)
        y.write_shift(2, 0);
      for (y.write_shift(4, 0), y.write_shift(4, E[2]), y.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1), y.write_shift(4, 0), y.write_shift(4, 4096), y.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : K), y.write_shift(4, E[3]), y.write_shift(-4, E[1] ? E[0] - 1 : K), y.write_shift(4, E[1]), F = 0; F < 109; ++F)
        y.write_shift(-4, F < E[2] ? E[1] + F : -1);
    }
    if (E[1])
      for (W = 0; W < E[1]; ++W) {
        for (; F < 236 + W * 127; ++F)
          y.write_shift(-4, F < E[2] ? E[1] + F : -1);
        y.write_shift(-4, W === E[1] - 1 ? K : W + 1);
      }
    var j = function(xe) {
      for (W += xe; F < W - 1; ++F)
        y.write_shift(-4, F + 1);
      xe && (++F, y.write_shift(-4, K));
    };
    for (W = F = 0, W += E[1]; F < W; ++F)
      y.write_shift(-4, fe.DIFSECT);
    for (W += E[2]; F < W; ++F)
      y.write_shift(-4, fe.FATSECT);
    j(E[3]), j(E[4]);
    for (var U = 0, H = 0, X = m.FileIndex[0]; U < m.FileIndex.length; ++U)
      X = m.FileIndex[U], X.content && (H = X.content.length, !(H < 4096) && (X.start = W, j(H + 511 >> 9)));
    for (j(E[6] + 7 >> 3); y.l & 511; )
      y.write_shift(-4, fe.ENDOFCHAIN);
    for (W = F = 0, U = 0; U < m.FileIndex.length; ++U)
      X = m.FileIndex[U], X.content && (H = X.content.length, !(!H || H >= 4096) && (X.start = W, j(H + 63 >> 6)));
    for (; y.l & 511; )
      y.write_shift(-4, fe.ENDOFCHAIN);
    for (F = 0; F < E[4] << 2; ++F) {
      var Z = m.FullPaths[F];
      if (!Z || Z.length === 0) {
        for (U = 0; U < 17; ++U)
          y.write_shift(4, 0);
        for (U = 0; U < 3; ++U)
          y.write_shift(4, -1);
        for (U = 0; U < 12; ++U)
          y.write_shift(4, 0);
        continue;
      }
      X = m.FileIndex[F], F === 0 && (X.start = X.size ? X.start - 1 : K);
      var ce = F === 0 && w.root || X.name;
      if (H = 2 * (ce.length + 1), y.write_shift(64, ce, "utf16le"), y.write_shift(2, H), y.write_shift(1, X.type), y.write_shift(1, X.color), y.write_shift(-4, X.L), y.write_shift(-4, X.R), y.write_shift(-4, X.C), X.clsid)
        y.write_shift(16, X.clsid, "hex");
      else
        for (U = 0; U < 4; ++U)
          y.write_shift(4, 0);
      y.write_shift(4, X.state || 0), y.write_shift(4, 0), y.write_shift(4, 0), y.write_shift(4, 0), y.write_shift(4, 0), y.write_shift(4, X.start), y.write_shift(4, X.size), y.write_shift(4, 0);
    }
    for (F = 1; F < m.FileIndex.length; ++F)
      if (X = m.FileIndex[F], X.size >= 4096)
        if (y.l = X.start + 1 << 9, Ae && Buffer.isBuffer(X.content))
          X.content.copy(y, y.l, 0, X.size), y.l += X.size + 511 & -512;
        else {
          for (U = 0; U < X.size; ++U)
            y.write_shift(1, X.content[U]);
          for (; U & 511; ++U)
            y.write_shift(1, 0);
        }
    for (F = 1; F < m.FileIndex.length; ++F)
      if (X = m.FileIndex[F], X.size > 0 && X.size < 4096)
        if (Ae && Buffer.isBuffer(X.content))
          X.content.copy(y, y.l, 0, X.size), y.l += X.size + 63 & -64;
        else {
          for (U = 0; U < X.size; ++U)
            y.write_shift(1, X.content[U]);
          for (; U & 63; ++U)
            y.write_shift(1, 0);
        }
    if (Ae)
      y.l = y.length;
    else
      for (; y.l < y.length; )
        y.write_shift(1, 0);
    return y;
  }
  function M(m, S) {
    var w = m.FullPaths.map(function(U) {
      return U.toUpperCase();
    }), E = w.map(function(U) {
      var H = U.split("/");
      return H[H.length - (U.slice(-1) == "/" ? 2 : 1)];
    }), y = !1;
    S.charCodeAt(0) === 47 ? (y = !0, S = w[0].slice(0, -1) + S) : y = S.indexOf("/") !== -1;
    var F = S.toUpperCase(), W = y === !0 ? w.indexOf(F) : E.indexOf(F);
    if (W !== -1)
      return m.FileIndex[W];
    var j = !F.match(gn);
    for (F = F.replace(Nr, ""), j && (F = F.replace(gn, "!")), W = 0; W < w.length; ++W)
      if ((j ? w[W].replace(gn, "!") : w[W]).replace(Nr, "") == F || (j ? E[W].replace(gn, "!") : E[W]).replace(Nr, "") == F)
        return m.FileIndex[W];
    return null;
  }
  var B = 64, K = -2, oe = "d0cf11e0a1b11ae1", ee = [208, 207, 17, 224, 161, 177, 26, 225], le = "00000000000000000000000000000000", fe = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: K,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: oe,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: le,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function De(m, S, w) {
    o();
    var E = G(m, w);
    c.writeFileSync(S, E);
  }
  function V(m) {
    for (var S = new Array(m.length), w = 0; w < m.length; ++w)
      S[w] = String.fromCharCode(m[w]);
    return S.join("");
  }
  function ve(m, S) {
    var w = G(m, S);
    switch (S && S.type || "buffer") {
      case "file":
        return o(), c.writeFileSync(S.filename, w), w;
      case "binary":
        return typeof w == "string" ? w : V(w);
      case "base64":
        return Rn(typeof w == "string" ? w : V(w));
      case "buffer":
        if (Ae)
          return Buffer.isBuffer(w) ? w : Ht(w);
      case "array":
        return typeof w == "string" ? qr(w) : w;
    }
    return w;
  }
  var me;
  function A(m) {
    try {
      var S = m.InflateRaw, w = new S();
      if (w._processChunk(new Uint8Array([3, 0]), w._finishFlushFlag), w.bytesRead)
        me = m;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (E) {
      console.error("cannot use native zlib: " + (E.message || E));
    }
  }
  function L(m, S) {
    if (!me)
      return $s(m, S);
    var w = me.InflateRaw, E = new w(), y = E._processChunk(m.slice(m.l), E._finishFlushFlag);
    return m.l += E.bytesRead, y;
  }
  function N(m) {
    return me ? me.deflateRawSync(m) : Ce(m);
  }
  var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Y = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], te = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function ae(m) {
    var S = (m << 1 | m << 11) & 139536 | (m << 5 | m << 15) & 558144;
    return (S >> 16 | S >> 8 | S) & 255;
  }
  for (var Q = typeof Uint8Array < "u", q = Q ? new Uint8Array(256) : [], Fe = 0; Fe < 256; ++Fe)
    q[Fe] = ae(Fe);
  function C(m, S) {
    var w = q[m & 255];
    return S <= 8 ? w >>> 8 - S : (w = w << 8 | q[m >> 8 & 255], S <= 16 ? w >>> 16 - S : (w = w << 8 | q[m >> 16 & 255], w >>> 24 - S));
  }
  function je(m, S) {
    var w = S & 7, E = S >>> 3;
    return (m[E] | (w <= 6 ? 0 : m[E + 1] << 8)) >>> w & 3;
  }
  function Re(m, S) {
    var w = S & 7, E = S >>> 3;
    return (m[E] | (w <= 5 ? 0 : m[E + 1] << 8)) >>> w & 7;
  }
  function Ge(m, S) {
    var w = S & 7, E = S >>> 3;
    return (m[E] | (w <= 4 ? 0 : m[E + 1] << 8)) >>> w & 15;
  }
  function Oe(m, S) {
    var w = S & 7, E = S >>> 3;
    return (m[E] | (w <= 3 ? 0 : m[E + 1] << 8)) >>> w & 31;
  }
  function ue(m, S) {
    var w = S & 7, E = S >>> 3;
    return (m[E] | (w <= 1 ? 0 : m[E + 1] << 8)) >>> w & 127;
  }
  function sr(m, S, w) {
    var E = S & 7, y = S >>> 3, F = (1 << w) - 1, W = m[y] >>> E;
    return w < 8 - E || (W |= m[y + 1] << 8 - E, w < 16 - E) || (W |= m[y + 2] << 16 - E, w < 24 - E) || (W |= m[y + 3] << 24 - E), W & F;
  }
  function tt(m, S, w) {
    var E = S & 7, y = S >>> 3;
    return E <= 5 ? m[y] |= (w & 7) << E : (m[y] |= w << E & 255, m[y + 1] = (w & 7) >> 8 - E), S + 3;
  }
  function _t(m, S, w) {
    var E = S & 7, y = S >>> 3;
    return w = (w & 1) << E, m[y] |= w, S + 1;
  }
  function It(m, S, w) {
    var E = S & 7, y = S >>> 3;
    return w <<= E, m[y] |= w & 255, w >>>= 8, m[y + 1] = w, S + 8;
  }
  function cn(m, S, w) {
    var E = S & 7, y = S >>> 3;
    return w <<= E, m[y] |= w & 255, w >>>= 8, m[y + 1] = w & 255, m[y + 2] = w >>> 8, S + 16;
  }
  function Gt(m, S) {
    var w = m.length, E = 2 * w > S ? 2 * w : S + 5, y = 0;
    if (w >= S)
      return m;
    if (Ae) {
      var F = of(E);
      if (m.copy)
        m.copy(F);
      else
        for (; y < m.length; ++y)
          F[y] = m[y];
      return F;
    } else if (Q) {
      var W = new Uint8Array(E);
      if (W.set)
        W.set(m);
      else
        for (; y < w; ++y)
          W[y] = m[y];
      return W;
    }
    return m.length = E, m;
  }
  function jr(m) {
    for (var S = new Array(m), w = 0; w < m; ++w)
      S[w] = 0;
    return S;
  }
  function Nt(m, S, w) {
    var E = 1, y = 0, F = 0, W = 0, j = 0, U = m.length, H = Q ? new Uint16Array(32) : jr(32);
    for (F = 0; F < 32; ++F)
      H[F] = 0;
    for (F = U; F < w; ++F)
      m[F] = 0;
    U = m.length;
    var X = Q ? new Uint16Array(U) : jr(U);
    for (F = 0; F < U; ++F)
      H[y = m[F]]++, E < y && (E = y), X[F] = 0;
    for (H[0] = 0, F = 1; F <= E; ++F)
      H[F + 16] = j = j + H[F - 1] << 1;
    for (F = 0; F < U; ++F)
      j = m[F], j != 0 && (X[F] = H[j + 16]++);
    var Z = 0;
    for (F = 0; F < U; ++F)
      if (Z = m[F], Z != 0)
        for (j = C(X[F], E) >> E - Z, W = (1 << E + 4 - Z) - 1; W >= 0; --W)
          S[j | W << Z] = Z & 15 | F << 4;
    return E;
  }
  var zt = Q ? new Uint16Array(512) : jr(512), on = Q ? new Uint16Array(32) : jr(32);
  if (!Q) {
    for (var Lr = 0; Lr < 512; ++Lr)
      zt[Lr] = 0;
    for (Lr = 0; Lr < 32; ++Lr)
      on[Lr] = 0;
  }
  (function() {
    for (var m = [], S = 0; S < 32; S++)
      m.push(5);
    Nt(m, on, 32);
    var w = [];
    for (S = 0; S <= 143; S++)
      w.push(8);
    for (; S <= 255; S++)
      w.push(9);
    for (; S <= 279; S++)
      w.push(7);
    for (; S <= 287; S++)
      w.push(8);
    Nt(w, zt, 288);
  })();
  var wt = /* @__PURE__ */ function() {
    for (var S = Q ? new Uint8Array(32768) : [], w = 0, E = 0; w < te.length - 1; ++w)
      for (; E < te[w + 1]; ++E)
        S[E] = w;
    for (; E < 32768; ++E)
      S[E] = 29;
    var y = Q ? new Uint8Array(259) : [];
    for (w = 0, E = 0; w < Y.length - 1; ++w)
      for (; E < Y[w + 1]; ++E)
        y[E] = w;
    function F(j, U) {
      for (var H = 0; H < j.length; ) {
        var X = Math.min(65535, j.length - H), Z = H + X == j.length;
        for (U.write_shift(1, +Z), U.write_shift(2, X), U.write_shift(2, ~X & 65535); X-- > 0; )
          U[U.l++] = j[H++];
      }
      return U.l;
    }
    function W(j, U) {
      for (var H = 0, X = 0, Z = Q ? new Uint16Array(32768) : []; X < j.length; ) {
        var ce = (
          /* data.length - boff; */
          Math.min(65535, j.length - X)
        );
        if (ce < 10) {
          for (H = tt(U, H, +(X + ce == j.length)), H & 7 && (H += 8 - (H & 7)), U.l = H / 8 | 0, U.write_shift(2, ce), U.write_shift(2, ~ce & 65535); ce-- > 0; )
            U[U.l++] = j[X++];
          H = U.l * 8;
          continue;
        }
        H = tt(U, H, +(X + ce == j.length) + 2);
        for (var xe = 0; ce-- > 0; ) {
          var re = j[X];
          xe = (xe << 5 ^ re) & 32767;
          var he = -1, Te = 0;
          if ((he = Z[xe]) && (he |= X & -32768, he > X && (he -= 32768), he < X))
            for (; j[he + Te] == j[X + Te] && Te < 250; )
              ++Te;
          if (Te > 2) {
            re = y[Te], re <= 22 ? H = It(U, H, q[re + 1] >> 1) - 1 : (It(U, H, 3), H += 5, It(U, H, q[re - 23] >> 5), H += 3);
            var qe = re < 8 ? 0 : re - 4 >> 2;
            qe > 0 && (cn(U, H, Te - Y[re]), H += qe), re = S[X - he], H = It(U, H, q[re] >> 3), H -= 3;
            var Ze = re < 4 ? 0 : re - 2 >> 1;
            Ze > 0 && (cn(U, H, X - he - te[re]), H += Ze);
            for (var Fr = 0; Fr < Te; ++Fr)
              Z[xe] = X & 32767, xe = (xe << 5 ^ j[X]) & 32767, ++X;
            ce -= Te - 1;
          } else
            re <= 143 ? re = re + 48 : H = _t(U, H, 1), H = It(U, H, q[re]), Z[xe] = X & 32767, ++X;
        }
        H = It(U, H, 0) - 1;
      }
      return U.l = (H + 7) / 8 | 0, U.l;
    }
    return function(U, H) {
      return U.length < 8 ? F(U, H) : W(U, H);
    };
  }();
  function Ce(m) {
    var S = z(50 + Math.floor(m.length * 1.1)), w = wt(m, S);
    return S.slice(0, w);
  }
  var fr = Q ? new Uint16Array(32768) : jr(32768), at = Q ? new Uint16Array(32768) : jr(32768), dr = Q ? new Uint16Array(128) : jr(128), oa = 1, js = 1;
  function ql(m, S) {
    var w = Oe(m, S) + 257;
    S += 5;
    var E = Oe(m, S) + 1;
    S += 5;
    var y = Ge(m, S) + 4;
    S += 4;
    for (var F = 0, W = Q ? new Uint8Array(19) : jr(19), j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], U = 1, H = Q ? new Uint8Array(8) : jr(8), X = Q ? new Uint8Array(8) : jr(8), Z = W.length, ce = 0; ce < y; ++ce)
      W[R[ce]] = F = Re(m, S), U < F && (U = F), H[F]++, S += 3;
    var xe = 0;
    for (H[0] = 0, ce = 1; ce <= U; ++ce)
      X[ce] = xe = xe + H[ce - 1] << 1;
    for (ce = 0; ce < Z; ++ce)
      (xe = W[ce]) != 0 && (j[ce] = X[xe]++);
    var re = 0;
    for (ce = 0; ce < Z; ++ce)
      if (re = W[ce], re != 0) {
        xe = q[j[ce]] >> 8 - re;
        for (var he = (1 << 7 - re) - 1; he >= 0; --he)
          dr[xe | he << re] = re & 7 | ce << 3;
      }
    var Te = [];
    for (U = 1; Te.length < w + E; )
      switch (xe = dr[ue(m, S)], S += xe & 7, xe >>>= 3) {
        case 16:
          for (F = 3 + je(m, S), S += 2, xe = Te[Te.length - 1]; F-- > 0; )
            Te.push(xe);
          break;
        case 17:
          for (F = 3 + Re(m, S), S += 3; F-- > 0; )
            Te.push(0);
          break;
        case 18:
          for (F = 11 + ue(m, S), S += 7; F-- > 0; )
            Te.push(0);
          break;
        default:
          Te.push(xe), U < xe && (U = xe);
          break;
      }
    var qe = Te.slice(0, w), Ze = Te.slice(w);
    for (ce = w; ce < 286; ++ce)
      qe[ce] = 0;
    for (ce = E; ce < 30; ++ce)
      Ze[ce] = 0;
    return oa = Nt(qe, fr, 286), js = Nt(Ze, at, 30), S;
  }
  function Zl(m, S) {
    if (m[0] == 3 && !(m[1] & 3))
      return [ta(S), 2];
    for (var w = 0, E = 0, y = of(S || 1 << 18), F = 0, W = y.length >>> 0, j = 0, U = 0; !(E & 1); ) {
      if (E = Re(m, w), w += 3, E >>> 1)
        E >> 1 == 1 ? (j = 9, U = 5) : (w = ql(m, w), j = oa, U = js);
      else {
        w & 7 && (w += 8 - (w & 7));
        var H = m[w >>> 3] | m[(w >>> 3) + 1] << 8;
        if (w += 32, H > 0)
          for (!S && W < F + H && (y = Gt(y, F + H), W = y.length); H-- > 0; )
            y[F++] = m[w >>> 3], w += 8;
        continue;
      }
      for (; ; ) {
        !S && W < F + 32767 && (y = Gt(y, F + 32767), W = y.length);
        var X = sr(m, w, j), Z = E >>> 1 == 1 ? zt[X] : fr[X];
        if (w += Z & 15, Z >>>= 4, !(Z >>> 8 & 255))
          y[F++] = Z;
        else {
          if (Z == 256)
            break;
          Z -= 257;
          var ce = Z < 8 ? 0 : Z - 4 >> 2;
          ce > 5 && (ce = 0);
          var xe = F + Y[Z];
          ce > 0 && (xe += sr(m, w, ce), w += ce), X = sr(m, w, U), Z = E >>> 1 == 1 ? on[X] : at[X], w += Z & 15, Z >>>= 4;
          var re = Z < 4 ? 0 : Z - 2 >> 1, he = te[Z];
          for (re > 0 && (he += sr(m, w, re), w += re), !S && W < xe && (y = Gt(y, xe + 100), W = y.length); F < xe; )
            y[F] = y[F - he], ++F;
        }
      }
    }
    return S ? [y, w + 7 >>> 3] : [y.slice(0, F), w + 7 >>> 3];
  }
  function $s(m, S) {
    var w = m.slice(m.l || 0), E = Zl(w, S);
    return m.l += E[1], E[0];
  }
  function Ys(m, S) {
    if (m)
      typeof console < "u" && console.error(S);
    else
      throw new Error(S);
  }
  function Ks(m, S) {
    var w = (
      /*::(*/
      m
    );
    Sr(w, 0);
    var E = [], y = [], F = {
      FileIndex: E,
      FullPaths: y
    };
    k(F, { root: S.root });
    for (var W = w.length - 4; (w[W] != 80 || w[W + 1] != 75 || w[W + 2] != 5 || w[W + 3] != 6) && W >= 0; )
      --W;
    w.l = W + 4, w.l += 4;
    var j = w.read_shift(2);
    w.l += 6;
    var U = w.read_shift(4);
    for (w.l = U, W = 0; W < j; ++W) {
      w.l += 20;
      var H = w.read_shift(4), X = w.read_shift(4), Z = w.read_shift(2), ce = w.read_shift(2), xe = w.read_shift(2);
      w.l += 8;
      var re = w.read_shift(4), he = f(
        /*::(*/
        w.slice(w.l + Z, w.l + Z + ce)
        /*:: :any)*/
      );
      w.l += Z + ce + xe;
      var Te = w.l;
      w.l = re + 4, Ql(w, H, X, F, he), w.l = Te;
    }
    return F;
  }
  function Ql(m, S, w, E, y) {
    m.l += 2;
    var F = m.read_shift(2), W = m.read_shift(2), j = s(m);
    if (F & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var U = m.read_shift(4), H = m.read_shift(4), X = m.read_shift(4), Z = m.read_shift(2), ce = m.read_shift(2), xe = "", re = 0; re < Z; ++re)
      xe += String.fromCharCode(m[m.l++]);
    if (ce) {
      var he = f(
        /*::(*/
        m.slice(m.l, m.l + ce)
        /*:: :any)*/
      );
      (he[21589] || {}).mt && (j = he[21589].mt), ((y || {})[21589] || {}).mt && (j = y[21589].mt);
    }
    m.l += ce;
    var Te = m.slice(m.l, m.l + H);
    switch (W) {
      case 8:
        Te = L(m, X);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + W);
    }
    var qe = !1;
    F & 8 && (U = m.read_shift(4), U == 134695760 && (U = m.read_shift(4), qe = !0), H = m.read_shift(4), X = m.read_shift(4)), H != S && Ys(qe, "Bad compressed size: " + S + " != " + H), X != w && Ys(qe, "Bad uncompressed size: " + w + " != " + X), n0(E, xe, Te, { unsafe: !0, mt: j });
  }
  function eu(m, S) {
    var w = S || {}, E = [], y = [], F = z(1), W = w.compression ? 8 : 0, j = 0, U = 0, H = 0, X = 0, Z = 0, ce = m.FullPaths[0], xe = ce, re = m.FileIndex[0], he = [], Te = 0;
    for (U = 1; U < m.FullPaths.length; ++U)
      if (xe = m.FullPaths[U].slice(ce.length), re = m.FileIndex[U], !(!re.size || !re.content || xe == "Sh33tJ5")) {
        var qe = X, Ze = z(xe.length);
        for (H = 0; H < xe.length; ++H)
          Ze.write_shift(1, xe.charCodeAt(H) & 127);
        Ze = Ze.slice(0, Ze.l), he[Z] = Ah.buf(
          /*::((*/
          re.content,
          0
        );
        var Fr = re.content;
        W == 8 && (Fr = N(Fr)), F = z(30), F.write_shift(4, 67324752), F.write_shift(2, 20), F.write_shift(2, j), F.write_shift(2, W), re.mt ? i(F, re.mt) : F.write_shift(4, 0), F.write_shift(-4, he[Z]), F.write_shift(4, Fr.length), F.write_shift(
          4,
          /*::(*/
          re.content.length
        ), F.write_shift(2, Ze.length), F.write_shift(2, 0), X += F.length, E.push(F), X += Ze.length, E.push(Ze), X += Fr.length, E.push(Fr), F = z(46), F.write_shift(4, 33639248), F.write_shift(2, 0), F.write_shift(2, 20), F.write_shift(2, j), F.write_shift(2, W), F.write_shift(4, 0), F.write_shift(-4, he[Z]), F.write_shift(4, Fr.length), F.write_shift(
          4,
          /*::(*/
          re.content.length
        ), F.write_shift(2, Ze.length), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(4, 0), F.write_shift(4, qe), Te += F.l, y.push(F), Te += Ze.length, y.push(Ze), ++Z;
      }
    return F = z(22), F.write_shift(4, 101010256), F.write_shift(2, 0), F.write_shift(2, 0), F.write_shift(2, Z), F.write_shift(2, Z), F.write_shift(4, Te), F.write_shift(4, X), F.write_shift(2, 0), wr([wr(E), wr(y), F]);
  }
  var ni = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function ru(m, S) {
    if (m.ctype)
      return m.ctype;
    var w = m.name || "", E = w.match(/\.([^\.]+)$/);
    return E && ni[E[1]] || S && (E = (w = S).match(/[\.\\]([^\.\\])+$/), E && ni[E[1]]) ? ni[E[1]] : "application/octet-stream";
  }
  function tu(m) {
    for (var S = Rn(m), w = [], E = 0; E < S.length; E += 76)
      w.push(S.slice(E, E + 76));
    return w.join(`\r
`) + `\r
`;
  }
  function au(m) {
    var S = m.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(H) {
      var X = H.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (X.length == 1 ? "0" + X : X);
    });
    S = S.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), S.charAt(0) == `
` && (S = "=0D" + S.slice(1)), S = S.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var w = [], E = S.split(`\r
`), y = 0; y < E.length; ++y) {
      var F = E[y];
      if (F.length == 0) {
        w.push("");
        continue;
      }
      for (var W = 0; W < F.length; ) {
        var j = 76, U = F.slice(W, W + j);
        U.charAt(j - 1) == "=" ? j-- : U.charAt(j - 2) == "=" ? j -= 2 : U.charAt(j - 3) == "=" && (j -= 3), U = F.slice(W, W + j), W += j, W < F.length && (U += "="), w.push(U);
      }
    }
    return w.join(`\r
`);
  }
  function nu(m) {
    for (var S = [], w = 0; w < m.length; ++w) {
      for (var E = m[w]; w <= m.length && E.charAt(E.length - 1) == "="; )
        E = E.slice(0, E.length - 1) + m[++w];
      S.push(E);
    }
    for (var y = 0; y < S.length; ++y)
      S[y] = S[y].replace(/[=][0-9A-Fa-f]{2}/g, function(F) {
        return String.fromCharCode(parseInt(F.slice(1), 16));
      });
    return qr(S.join(`\r
`));
  }
  function iu(m, S, w) {
    for (var E = "", y = "", F = "", W, j = 0; j < 10; ++j) {
      var U = S[j];
      if (!U || U.match(/^\s*$/))
        break;
      var H = U.match(/^(.*?):\s*([^\s].*)$/);
      if (H)
        switch (H[1].toLowerCase()) {
          case "content-location":
            E = H[2].trim();
            break;
          case "content-type":
            F = H[2].trim();
            break;
          case "content-transfer-encoding":
            y = H[2].trim();
            break;
        }
    }
    switch (++j, y.toLowerCase()) {
      case "base64":
        W = qr(et(S.slice(j).join("")));
        break;
      case "quoted-printable":
        W = nu(S.slice(j));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + y);
    }
    var X = n0(m, E.slice(w.length), W, { unsafe: !0 });
    F && (X.ctype = F);
  }
  function su(m, S) {
    if (V(m.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var w = S && S.root || "", E = (Ae && Buffer.isBuffer(m) ? m.toString("binary") : V(m)).split(`\r
`), y = 0, F = "";
    for (y = 0; y < E.length; ++y)
      if (F = E[y], !!/^Content-Location:/i.test(F) && (F = F.slice(F.indexOf("file")), w || (w = F.slice(0, F.lastIndexOf("/") + 1)), F.slice(0, w.length) != w))
        for (; w.length > 0 && (w = w.slice(0, w.length - 1), w = w.slice(0, w.lastIndexOf("/") + 1), F.slice(0, w.length) != w); )
          ;
    var W = (E[1] || "").match(/boundary="(.*?)"/);
    if (!W)
      throw new Error("MAD cannot find boundary");
    var j = "--" + (W[1] || ""), U = [], H = [], X = {
      FileIndex: U,
      FullPaths: H
    };
    k(X);
    var Z, ce = 0;
    for (y = 0; y < E.length; ++y) {
      var xe = E[y];
      xe !== j && xe !== j + "--" || (ce++ && iu(X, E.slice(Z, y), w), Z = y);
    }
    return X;
  }
  function fu(m, S) {
    var w = S || {}, E = w.boundary || "SheetJS";
    E = "------=" + E;
    for (var y = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + E.slice(2) + '"',
      "",
      "",
      ""
    ], F = m.FullPaths[0], W = F, j = m.FileIndex[0], U = 1; U < m.FullPaths.length; ++U)
      if (W = m.FullPaths[U].slice(F.length), j = m.FileIndex[U], !(!j.size || !j.content || W == "Sh33tJ5")) {
        W = W.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Te) {
          return "_x" + Te.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(Te) {
          return "_u" + Te.charCodeAt(0).toString(16) + "_";
        });
        for (var H = j.content, X = Ae && Buffer.isBuffer(H) ? H.toString("binary") : V(H), Z = 0, ce = Math.min(1024, X.length), xe = 0, re = 0; re <= ce; ++re)
          (xe = X.charCodeAt(re)) >= 32 && xe < 128 && ++Z;
        var he = Z >= ce * 4 / 5;
        y.push(E), y.push("Content-Location: " + (w.root || "file:///C:/SheetJS/") + W), y.push("Content-Transfer-Encoding: " + (he ? "quoted-printable" : "base64")), y.push("Content-Type: " + ru(j, W)), y.push(""), y.push(he ? au(X) : tu(X));
      }
    return y.push(E + `--\r
`), y.join(`\r
`);
  }
  function cu(m) {
    var S = {};
    return k(S, m), S;
  }
  function n0(m, S, w, E) {
    var y = E && E.unsafe;
    y || k(m);
    var F = !y && de.find(m, S);
    if (!F) {
      var W = m.FullPaths[0];
      S.slice(0, W.length) == W ? W = S : (W.slice(-1) != "/" && (W += "/"), W = (W + S).replace("//", "/")), F = { name: n(S), type: 2 }, m.FileIndex.push(F), m.FullPaths.push(W), y || de.utils.cfb_gc(m);
    }
    return F.content = w, F.size = w ? w.length : 0, E && (E.CLSID && (F.clsid = E.CLSID), E.mt && (F.mt = E.mt), E.ct && (F.ct = E.ct)), F;
  }
  function ou(m, S) {
    k(m);
    var w = de.find(m, S);
    if (w) {
      for (var E = 0; E < m.FileIndex.length; ++E)
        if (m.FileIndex[E] == w)
          return m.FileIndex.splice(E, 1), m.FullPaths.splice(E, 1), !0;
    }
    return !1;
  }
  function lu(m, S, w) {
    k(m);
    var E = de.find(m, S);
    if (E) {
      for (var y = 0; y < m.FileIndex.length; ++y)
        if (m.FileIndex[y] == E)
          return m.FileIndex[y].name = n(w), m.FullPaths[y] = w, !0;
    }
    return !1;
  }
  function uu(m) {
    b(m, !0);
  }
  return t.find = M, t.read = O, t.parse = l, t.write = ve, t.writeFile = De, t.utils = {
    cfb_new: cu,
    cfb_add: n0,
    cfb_del: ou,
    cfb_mov: lu,
    cfb_gc: uu,
    ReadShift: yn,
    CheckField: xo,
    prep_blob: Sr,
    bconcat: wr,
    use_zlib: A,
    _deflateRaw: Ce,
    _inflateRaw: $s,
    consts: fe
  }, t;
}();
let ra;
function Ch(e) {
  ra = e;
}
function bh(e) {
  return typeof e == "string" ? Kn(e) : Array.isArray(e) ? eh(e) : e;
}
function qn(e, t, r) {
  if (typeof ra < "u" && ra.writeFileSync)
    return r ? ra.writeFileSync(e, t, r) : ra.writeFileSync(e, t);
  if (typeof Deno < "u") {
    if (r && typeof t == "string")
      switch (r) {
        case "utf8":
          t = new TextEncoder(r).encode(t);
          break;
        case "binary":
          t = Kn(t);
          break;
        default:
          throw new Error("Unsupported encoding " + r);
      }
    return Deno.writeFileSync(e, t);
  }
  var a = r == "utf8" ? yt(t) : t;
  if (typeof IE_SaveFile < "u")
    return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([bh(a)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob)
      return navigator.msSaveBlob(n, e);
    if (typeof saveAs < "u")
      return saveAs(n, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var i = URL.createObjectURL(n);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), chrome.downloads.download({ url: i, filename: e, saveAs: !0 });
      var s = document.createElement("a");
      if (s.download != null)
        return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), i;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var f = File(e);
      return f.open("w"), f.encoding = "binary", Array.isArray(t) && (t = sa(t)), f.write(t), f.close(), t;
    } catch (c) {
      if (!c.message || !c.message.match(/onstruct/))
        throw c;
    }
  throw new Error("cannot save file " + e);
}
function Dh(e) {
  if (typeof ra < "u")
    return ra.readFileSync(e);
  if (typeof Deno < "u")
    return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var t = File(e);
      t.open("r"), t.encoding = "binary";
      var r = t.read();
      return t.close(), r;
    } catch (a) {
      if (!a.message || !a.message.match(/onstruct/))
        throw a;
    }
  throw new Error("Cannot access file " + e);
}
function ir(e) {
  for (var t = Object.keys(e), r = [], a = 0; a < t.length; ++a)
    Object.prototype.hasOwnProperty.call(e, t[a]) && r.push(t[a]);
  return r;
}
function mf(e, t) {
  for (var r = [], a = ir(e), n = 0; n !== a.length; ++n)
    r[e[a[n]][t]] == null && (r[e[a[n]][t]] = a[n]);
  return r;
}
function Yi(e) {
  for (var t = [], r = ir(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] = r[a];
  return t;
}
function Ki(e) {
  for (var t = [], r = ir(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] = parseInt(r[a], 10);
  return t;
}
function Oh(e) {
  for (var t = [], r = ir(e), a = 0; a !== r.length; ++a)
    t[e[r[a]]] == null && (t[e[r[a]]] = []), t[e[r[a]]].push(r[a]);
  return t;
}
var Ri = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function mr(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  t && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var a = /* @__PURE__ */ Ri.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Ri.getTimezoneOffset()) * 6e4;
  return (r - a) / (24 * 60 * 60 * 1e3);
}
var Kc = /* @__PURE__ */ new Date(), Ih = /* @__PURE__ */ Ri.getTime() + (/* @__PURE__ */ Kc.getTimezoneOffset() - /* @__PURE__ */ Ri.getTimezoneOffset()) * 6e4, gf = /* @__PURE__ */ Kc.getTimezoneOffset();
function Ji(e) {
  var t = /* @__PURE__ */ new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + Ih), t.getTimezoneOffset() !== gf && t.setTime(t.getTime() + (t.getTimezoneOffset() - gf) * 6e4), t;
}
function Nh(e) {
  var t = 0, r = 0, a = !1, n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!n)
    throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var i = 1; i != n.length; ++i)
    if (n[i]) {
      switch (r = 1, i > 3 && (a = !0), n[i].slice(n[i].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + n[i].slice(n[i].length - 1));
        case "D":
          r *= 24;
        case "H":
          r *= 60;
        case "M":
          if (a)
            r *= 60;
          else
            throw new Error("Unsupported ISO Duration Field: M");
      }
      t += r * parseInt(n[i], 10);
    }
  return t;
}
var _f = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Jc = /* @__PURE__ */ isNaN(/* @__PURE__ */ _f.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : _f, Rh = /* @__PURE__ */ Jc.getFullYear() == 2017;
function Ke(e, t) {
  var r = new Date(e);
  if (Rh)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (Jc.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var a = r.getFullYear();
    return e.indexOf("" + a) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], i = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i;
}
function Ea(e, t) {
  if (Ae && Buffer.isBuffer(e)) {
    if (t) {
      if (e[0] == 255 && e[1] == 254)
        return yt(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return yt(Bc(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (t) {
        if (e[0] == 255 && e[1] == 254)
          return yt(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return yt(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        "ˆ": "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
        return r[i] || i;
      });
    } catch {
    }
  for (var a = [], n = 0; n != e.length; ++n)
    a.push(String.fromCharCode(e[n]));
  return a.join("");
}
function ze(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = ze(e[r]));
  return t;
}
function tr(e, t) {
  for (var r = ""; r.length < t; )
    r += e;
  return r;
}
function mt(e) {
  var t = Number(e);
  if (!isNaN(t))
    return isFinite(t) ? t : NaN;
  if (!/\d/.test(e))
    return t;
  var r = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(a)) || (a = a.replace(/[(](.*)[)]/, function(n, i) {
    return r = -r, i;
  }), !isNaN(t = Number(a))) ? t / r : t;
}
var Ph = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function en(e) {
  var t = new Date(e), r = /* @__PURE__ */ new Date(NaN), a = t.getYear(), n = t.getMonth(), i = t.getDate();
  if (isNaN(i))
    return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), s.length > 3 && Ph.indexOf(s) == -1)
      return r;
  } else if (s.match(/[a-z]/))
    return r;
  return a < 0 || a > 8099 ? r : (n > 0 || i > 1) && a != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
var Bh = /* @__PURE__ */ function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, a, n) {
    if (e || typeof a == "string")
      return r.split(a);
    for (var i = r.split(a), s = [i[0]], f = 1; f < i.length; ++f)
      s.push(n), s.push(i[f]);
    return s;
  };
}();
function qc(e) {
  return e ? e.content && e.type ? Ea(e.content, !0) : e.data ? za(e.data) : e.asNodeBuffer && Ae ? za(e.asNodeBuffer().toString("binary")) : e.asBinary ? za(e.asBinary()) : e._data && e._data.getContent ? za(Ea(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Zc(e) {
  if (!e)
    return null;
  if (e.data)
    return Di(e.data);
  if (e.asNodeBuffer && Ae)
    return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var t = e._data.getContent();
    return typeof t == "string" ? Di(t) : Array.prototype.slice.call(t);
  }
  return e.content && e.type ? e.content : null;
}
function Lh(e) {
  return e && e.name.slice(-4) === ".bin" ? Zc(e) : qc(e);
}
function ot(e, t) {
  for (var r = e.FullPaths || ir(e.files), a = t.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < r.length; ++i) {
    var s = r[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s)
      return e.files ? e.files[r[i]] : e.FileIndex[i];
  }
  return null;
}
function ns(e, t) {
  var r = ot(e, t);
  if (r == null)
    throw new Error("Cannot find file " + t + " in zip");
  return r;
}
function hr(e, t, r) {
  if (!r)
    return Lh(ns(e, t));
  if (!t)
    return null;
  try {
    return hr(e, t);
  } catch {
    return null;
  }
}
function Zr(e, t, r) {
  if (!r)
    return qc(ns(e, t));
  if (!t)
    return null;
  try {
    return Zr(e, t);
  } catch {
    return null;
  }
}
function Qc(e, t, r) {
  if (!r)
    return Zc(ns(e, t));
  if (!t)
    return null;
  try {
    return Qc(e, t);
  } catch {
    return null;
  }
}
function wf(e) {
  for (var t = e.FullPaths || ir(e.files), r = [], a = 0; a < t.length; ++a)
    t[a].slice(-1) != "/" && r.push(t[a].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function ye(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var a;
      return Ae ? a = Ht(r) : a = rh(r), de.utils.cfb_add(e, t, a);
    }
    de.utils.cfb_add(e, t, r);
  } else
    e.file(t, r);
}
function is() {
  return de.utils.cfb_new();
}
function eo(e, t) {
  switch (t.type) {
    case "base64":
      return de.read(e, { type: "base64" });
    case "binary":
      return de.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return de.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + t.type);
}
function _n(e, t) {
  if (e.charAt(0) == "/")
    return e.slice(1);
  var r = t.split("/");
  t.slice(-1) != "/" && r.pop();
  for (var a = e.split("/"); a.length !== 0; ) {
    var n = a.shift();
    n === ".." ? r.pop() : n !== "." && r.push(n);
  }
  return r.join("/");
}
var or = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Mh = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, Ef = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, Uh = /<[^>]*>/g, Br = /* @__PURE__ */ or.match(Ef) ? Ef : Uh, Wh = /<\w*:/, Hh = /<(\/?)\w+:/;
function Ee(e, t, r) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n)
    ;
  if (t || (a[0] = e.slice(0, n)), n === e.length)
    return a;
  var s = e.match(Mh), f = 0, c = "", o = 0, l = "", u = "", h = 1;
  if (s)
    for (o = 0; o != s.length; ++o) {
      for (u = s[o], i = 0; i != u.length && u.charCodeAt(i) !== 61; ++i)
        ;
      for (l = u.slice(0, i).trim(); u.charCodeAt(i + 1) == 32; )
        ++i;
      for (h = (n = u.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, c = u.slice(i + 1 + h, u.length - h), f = 0; f != l.length && l.charCodeAt(f) !== 58; ++f)
        ;
      if (f === l.length)
        l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), a[l] = c, r || (a[l.toLowerCase()] = c);
      else {
        var d = (f === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(f + 1);
        if (a[d] && l.slice(f - 3, f) == "ext")
          continue;
        a[d] = c, r || (a[d.toLowerCase()] = c);
      }
    }
  return a;
}
function Dt(e) {
  return e.replace(Hh, "<$1");
}
var ro = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, ss = /* @__PURE__ */ Yi(ro), Le = /* @__PURE__ */ function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, t = /_x([\da-fA-F]{4})_/ig;
  return function r(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1)
      return n.replace(e, function(f, c) {
        return ro[f] || String.fromCharCode(parseInt(c, f.indexOf("x") > -1 ? 16 : 10)) || f;
      }).replace(t, function(f, c) {
        return String.fromCharCode(parseInt(c, 16));
      });
    var s = n.indexOf("]]>");
    return r(n.slice(0, i)) + n.slice(i + 9, s) + r(n.slice(s + 3));
  };
}(), fs = /[&<>'"]/g, Vh = /[\u0000-\u0008\u000b-\u001f]/g;
function Ve(e) {
  var t = e + "";
  return t.replace(fs, function(r) {
    return ss[r];
  }).replace(Vh, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function Tf(e) {
  return Ve(e).replace(/ /g, "_x0020_");
}
var to = /[\u0000-\u001f]/g;
function cs(e) {
  var t = e + "";
  return t.replace(fs, function(r) {
    return ss[r];
  }).replace(/\n/g, "<br/>").replace(to, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function Xh(e) {
  var t = e + "";
  return t.replace(fs, function(r) {
    return ss[r];
  }).replace(to, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var kf = /* @__PURE__ */ function() {
  var e = /&#(\d+);/g;
  function t(r, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, t);
  };
}();
function Gh(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function $e(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function m0(e) {
  for (var t = "", r = 0, a = 0, n = 0, i = 0, s = 0, f = 0; r < e.length; ) {
    if (a = e.charCodeAt(r++), a < 128) {
      t += String.fromCharCode(a);
      continue;
    }
    if (n = e.charCodeAt(r++), a > 191 && a < 224) {
      s = (a & 31) << 6, s |= n & 63, t += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(r++), a < 240) {
      t += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(r++), f = ((a & 7) << 18 | (n & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, t += String.fromCharCode(55296 + (f >>> 10 & 1023)), t += String.fromCharCode(56320 + (f & 1023));
  }
  return t;
}
function Sf(e) {
  var t = ta(2 * e.length), r, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n)
    n = 1, (f = e.charCodeAt(a)) < 128 ? r = f : f < 224 ? (r = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (r = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, r = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), r -= 65536, s = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), s !== 0 && (t[i++] = s & 255, t[i++] = s >>> 8, s = 0), t[i++] = r % 256, t[i++] = r >>> 8;
  return t.slice(0, i).toString("ucs2");
}
function yf(e) {
  return Ht(e, "binary").toString("utf8");
}
var oi = "foo bar bazâð£", Xe = Ae && (/* @__PURE__ */ yf(oi) == /* @__PURE__ */ m0(oi) && yf || /* @__PURE__ */ Sf(oi) == /* @__PURE__ */ m0(oi) && Sf) || m0, yt = Ae ? function(e) {
  return Ht(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, a = 0, n = 0; r < e.length; )
    switch (a = e.charCodeAt(r++), !0) {
      case a < 128:
        t.push(String.fromCharCode(a));
        break;
      case a < 2048:
        t.push(String.fromCharCode(192 + (a >> 6))), t.push(String.fromCharCode(128 + (a & 63)));
        break;
      case (a >= 55296 && a < 57344):
        a -= 55296, n = e.charCodeAt(r++) - 56320 + (a << 10), t.push(String.fromCharCode(240 + (n >> 18 & 7))), t.push(String.fromCharCode(144 + (n >> 12 & 63))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (a >> 12))), t.push(String.fromCharCode(128 + (a >> 6 & 63))), t.push(String.fromCharCode(128 + (a & 63)));
    }
  return t.join("");
}, Bn = /* @__PURE__ */ function() {
  var e = {};
  return function(r, a) {
    var n = r + "|" + (a || "");
    return e[n] ? e[n] : e[n] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", a || "");
  };
}(), ao = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var a = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), n = 0; n < e.length; ++n)
      a = a.replace(e[n][0], e[n][1]);
    return a;
  };
}(), zh = /* @__PURE__ */ function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
}(), jh = /<\/?(?:vt:)?variant>/g, $h = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Ff(e, t) {
  var r = Ee(e), a = e.match(zh(r.baseType)) || [], n = [];
  if (a.length != r.size) {
    if (t.WTF)
      throw new Error("unexpected vector length " + a.length + " != " + r.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(jh, "").match($h);
    s && n.push({ v: Xe(s[2]), t: s[1] });
  }), n;
}
var no = /(^\s|\s$|\n)/;
function yr(e, t) {
  return "<" + e + (t.match(no) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function Ln(e) {
  return ir(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function ne(e, t, r) {
  return "<" + e + (r != null ? Ln(r) : "") + (t != null ? (t.match(no) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function W0(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t)
      throw r;
  }
  return "";
}
function Yh(e, t) {
  switch (typeof e) {
    case "string":
      var r = ne("vt:lpwstr", Ve(e));
      return t && (r = r.replace(/&quot;/g, "_x0022_")), r;
    case "number":
      return ne((e | 0) == e ? "vt:i4" : "vt:r8", Ve(String(e)));
    case "boolean":
      return ne("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date)
    return ne("vt:filetime", W0(e));
  throw new Error("Unable to serialize " + e);
}
function os(e) {
  if (Ae && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(e))
    return e.toString("utf8");
  if (typeof e == "string")
    return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array)
    return Xe(sa(rs(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Mn = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, vr = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Aa = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], Kr = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Kh(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), a = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), n = e[t + 6] & 15, i = 5; i >= 0; --i)
    n = n * 256 + e[t + i];
  return a == 2047 ? n == 0 ? r * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), r * Math.pow(2, a - 52) * n);
}
function Jh(e, t, r) {
  var a = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -t : t;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(t) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256)
    e[r + f] = i & 255;
  e[r + 6] = (n & 15) << 4 | i & 15, e[r + 7] = n >> 4 | a;
}
var Af = function(e) {
  for (var t = [], r = 10240, a = 0; a < e[0].length; ++a)
    if (e[0][a])
      for (var n = 0, i = e[0][a].length; n < i; n += r)
        t.push.apply(t, e[0][a].slice(n, n + r));
  return t;
}, Cf = Ae ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : Ht(t);
  })) : Af(e);
} : Af, bf = function(e, t, r) {
  for (var a = [], n = t; n < r; n += 2)
    a.push(String.fromCharCode(Pt(e, n)));
  return a.join("").replace(Nr, "");
}, qi = Ae ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(Nr, "") : bf(e, t, r);
} : bf, Df = function(e, t, r) {
  for (var a = [], n = t; n < t + r; ++n)
    a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, io = Ae ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : Df(e, t, r);
} : Df, Of = function(e, t, r) {
  for (var a = [], n = t; n < r; n++)
    a.push(String.fromCharCode(Ha(e, n)));
  return a.join("");
}, nn = Ae ? function(t, r, a) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, a) : Of(t, r, a);
} : Of, so = function(e, t) {
  var r = _r(e, t);
  return r > 0 ? nn(e, t + 4, t + 4 + r - 1) : "";
}, ls = so, fo = function(e, t) {
  var r = _r(e, t);
  return r > 0 ? nn(e, t + 4, t + 4 + r - 1) : "";
}, us = fo, co = function(e, t) {
  var r = 2 * _r(e, t);
  return r > 0 ? nn(e, t + 4, t + 4 + r - 1) : "";
}, hs = co, oo = function(t, r) {
  var a = _r(t, r);
  return a > 0 ? qi(t, r + 4, r + 4 + a) : "";
}, xs = oo, lo = function(e, t) {
  var r = _r(e, t);
  return r > 0 ? nn(e, t + 4, t + 4 + r) : "";
}, ds = lo, uo = function(e, t) {
  return Kh(e, t);
}, Pi = uo, ps = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
Ae && (ls = function(t, r) {
  if (!Buffer.isBuffer(t))
    return so(t, r);
  var a = t.readUInt32LE(r);
  return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : "";
}, us = function(t, r) {
  if (!Buffer.isBuffer(t))
    return fo(t, r);
  var a = t.readUInt32LE(r);
  return a > 0 ? t.toString("utf8", r + 4, r + 4 + a - 1) : "";
}, hs = function(t, r) {
  if (!Buffer.isBuffer(t))
    return co(t, r);
  var a = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + a - 1);
}, xs = function(t, r) {
  if (!Buffer.isBuffer(t))
    return oo(t, r);
  var a = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + a);
}, ds = function(t, r) {
  if (!Buffer.isBuffer(t))
    return lo(t, r);
  var a = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + a);
}, Pi = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : uo(t, r);
}, ps = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
function ho() {
  qi = function(e, t, r) {
    return Pe.utils.decode(1200, e.slice(t, r)).replace(Nr, "");
  }, nn = function(e, t, r) {
    return Pe.utils.decode(65001, e.slice(t, r));
  }, ls = function(e, t) {
    var r = _r(e, t);
    return r > 0 ? Pe.utils.decode(_a, e.slice(t + 4, t + 4 + r - 1)) : "";
  }, us = function(e, t) {
    var r = _r(e, t);
    return r > 0 ? Pe.utils.decode(Qr, e.slice(t + 4, t + 4 + r - 1)) : "";
  }, hs = function(e, t) {
    var r = 2 * _r(e, t);
    return r > 0 ? Pe.utils.decode(1200, e.slice(t + 4, t + 4 + r - 1)) : "";
  }, xs = function(e, t) {
    var r = _r(e, t);
    return r > 0 ? Pe.utils.decode(1200, e.slice(t + 4, t + 4 + r)) : "";
  }, ds = function(e, t) {
    var r = _r(e, t);
    return r > 0 ? Pe.utils.decode(65001, e.slice(t + 4, t + 4 + r)) : "";
  };
}
typeof Pe < "u" && ho();
var Ha = function(e, t) {
  return e[t];
}, Pt = function(e, t) {
  return e[t + 1] * 256 + e[t];
}, qh = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, _r = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, da = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, Zh = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function yn(e, t) {
  var r = "", a, n, i = [], s, f, c, o;
  switch (t) {
    case "dbcs":
      if (o = this.l, Ae && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (c = 0; c < e; ++c)
          r += String.fromCharCode(Pt(this, o)), o += 2;
      e *= 2;
      break;
    case "utf8":
      r = nn(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = qi(this, this.l, this.l + e);
      break;
    case "wstr":
      if (typeof Pe < "u")
        r = Pe.utils.decode(Qr, this.slice(this.l, this.l + 2 * e));
      else
        return yn.call(this, e, "dbcs");
      e = 2 * e;
      break;
    case "lpstr-ansi":
      r = ls(this, this.l), e = 4 + _r(this, this.l);
      break;
    case "lpstr-cp":
      r = us(this, this.l), e = 4 + _r(this, this.l);
      break;
    case "lpwstr":
      r = hs(this, this.l), e = 4 + 2 * _r(this, this.l);
      break;
    case "lpp4":
      e = 4 + _r(this, this.l), r = xs(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + _r(this, this.l), r = ds(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = Ha(this, this.l + e++)) !== 0; )
        i.push(mn(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = Pt(this, this.l + e)) !== 0; )
        i.push(mn(s)), e += 2;
      e += 2, r = i.join("");
      break;
    case "dbcs-cont":
      for (r = "", o = this.l, c = 0; c < e; ++c) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = Ha(this, o), this.l = o + 1, f = yn.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(mn(Pt(this, o))), o += 2;
      }
      r = i.join(""), e *= 2;
      break;
    case "cpstr":
      if (typeof Pe < "u") {
        r = Pe.utils.decode(Qr, this.slice(this.l, this.l + e));
        break;
      }
    case "sbcs-cont":
      for (r = "", o = this.l, c = 0; c != e; ++c) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = Ha(this, o), this.l = o + 1, f = yn.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(mn(Ha(this, o))), o += 1;
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Ha(this, this.l), this.l++, a;
        case 2:
          return a = (t === "i" ? qh : Pt)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return t === "i" || !(this[this.l + 3] & 128) ? (a = (e > 0 ? da : Zh)(this, this.l), this.l += 4, a) : (n = _r(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? n = Pi(this, this.l) : n = Pi([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          r = io(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Qh = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, e1 = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, r1 = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function t1(e, t, r) {
  var a = 0, n = 0;
  if (r === "dbcs") {
    for (n = 0; n != t.length; ++n)
      r1(this, t.charCodeAt(n), this.l + 2 * n);
    a = 2 * t.length;
  } else if (r === "sbcs") {
    if (typeof Pe < "u" && _a == 874)
      for (n = 0; n != t.length; ++n) {
        var i = Pe.utils.encode(_a, t.charAt(n));
        this[this.l + n] = i[0];
      }
    else
      for (t = t.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != t.length; ++n)
        this[this.l + n] = t.charCodeAt(n) & 255;
    a = t.length;
  } else if (r === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(t.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(t.length, e); ++n) {
      var f = t.charCodeAt(n);
      this[this.l++] = f & 255, this[this.l++] = f >> 8;
    }
    for (; this.l < s; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        a = 1, this[this.l] = t & 255;
        break;
      case 2:
        a = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
        break;
      case 3:
        a = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
        break;
      case 4:
        a = 4, Qh(this, t, this.l);
        break;
      case 8:
        if (a = 8, r === "f") {
          Jh(this, t, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        a = 4, e1(this, t, this.l);
        break;
    }
  return this.l += a, this;
}
function xo(e, t) {
  var r = io(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function Sr(e, t) {
  e.l = t, e.read_shift = /*::(*/
  yn, e.chk = xo, e.write_shift = t1;
}
function Pr(e, t) {
  e.l += t;
}
function z(e) {
  var t = ta(e);
  return Sr(t, 0), t;
}
function Vt(e, t, r) {
  if (e) {
    var a, n, i;
    Sr(e, e.l || 0);
    for (var s = e.length, f = 0, c = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var o = Gn[f] || Gn[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n)
        i += ((a = e.read_shift(1)) & 127) << 7 * n;
      c = e.l + i;
      var l = o.f && o.f(e, i, r);
      if (e.l = c, t(l, o, f))
        return;
    }
  }
}
function zr() {
  var e = [], t = Ae ? 256 : 2048, r = function(o) {
    var l = z(o);
    return Sr(l, 0), l;
  }, a = r(t), n = function() {
    a && (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a), a = null);
  }, i = function(o) {
    return a && o < a.length - a.l ? a : (n(), a = r(Math.max(o + 1, t)));
  }, s = function() {
    return n(), wr(e);
  }, f = function(o) {
    n(), a = o, a.l == null && (a.l = a.length), i(t);
  };
  return { next: i, push: f, end: s, _bufs: e };
}
function J(e, t, r, a) {
  var n = +t, i;
  if (!isNaN(n)) {
    a || (a = Gn[n].p || (r || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f)
      if (a >= 128)
        s.write_shift(1, (a & 127) + 128), a >>= 7;
      else {
        s.write_shift(1, a);
        break;
      }
    /*:: length != null &&*/
    a > 0 && ps(r) && e.push(r);
  }
}
function Fn(e, t, r) {
  var a = ze(e);
  if (t.s ? (a.cRel && (a.c += t.s.c), a.rRel && (a.r += t.s.r)) : (a.cRel && (a.c += t.c), a.rRel && (a.r += t.r)), !r || r.biff < 12) {
    for (; a.c >= 256; )
      a.c -= 256;
    for (; a.r >= 65536; )
      a.r -= 65536;
  }
  return a;
}
function If(e, t, r) {
  var a = ze(e);
  return a.s = Fn(a.s, t.s, r), a.e = Fn(a.e, t.s, r), a;
}
function An(e, t) {
  if (e.cRel && e.c < 0)
    for (e = ze(e); e.c < 0; )
      e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = ze(e); e.r < 0; )
      e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = ge(e);
  return !e.cRel && e.cRel != null && (r = i1(r)), !e.rRel && e.rRel != null && (r = a1(r)), r;
}
function g0(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ye(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ye(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + ar(e.s.r) + ":" + (e.e.rRel ? "" : "$") + ar(e.e.r) : An(e.s, t.biff) + ":" + An(e.e, t.biff);
}
function vs(e) {
  return parseInt(n1(e), 10) - 1;
}
function ar(e) {
  return "" + (e + 1);
}
function a1(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function n1(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function ms(e) {
  for (var t = s1(e), r = 0, a = 0; a !== t.length; ++a)
    r = 26 * r + t.charCodeAt(a) - 64;
  return r - 1;
}
function Ye(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function i1(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function s1(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function f1(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function er(e) {
  for (var t = 0, r = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? t = 10 * t + (n - 48) : n >= 65 && n <= 90 && (r = 26 * r + (n - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function ge(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0)
    r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function Hr(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: er(e), e: er(e) } : { s: er(e.slice(0, t)), e: er(e.slice(t + 1)) };
}
function Se(e, t) {
  return typeof t > "u" || typeof t == "number" ? Se(e.s, e.e) : (typeof e != "string" && (e = ge(e)), typeof t != "string" && (t = ge(t)), e == t ? e : e + ":" + t);
}
function Ne(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, a = 0, n = 0, i = e.length;
  for (r = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    r = 26 * r + n;
  for (t.s.c = --r, r = 0; a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    r = 10 * r + n;
  if (t.s.r = --r, a === i || n != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++a, r = 0; a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    r = 26 * r + n;
  for (t.e.c = --r, r = 0; a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    r = 10 * r + n;
  return t.e.r = --r, t;
}
function Nf(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null)
    try {
      return e.w = rt(e.z, r ? mr(t) : t);
    } catch {
    }
  try {
    return e.w = rt((e.XF || {}).numFmtId || (r ? 14 : 0), r ? mr(t) : t);
  } catch {
    return "" + t;
  }
}
function bt(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Xt[e.v] || e.v : t == null ? Nf(e, e.v) : Nf(e, t));
}
function fa(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", a = {};
  return a[r] = e, { SheetNames: [r], Sheets: a };
}
function po(e, t, r) {
  var a = r || {}, n = e ? Array.isArray(e) : a.dense, i = e || (n ? [] : {}), s = 0, f = 0;
  if (i && a.origin != null) {
    if (typeof a.origin == "number")
      s = a.origin;
    else {
      var c = typeof a.origin == "string" ? er(a.origin) : a.origin;
      s = c.r, f = c.c;
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var l = Ne(i["!ref"]);
    o.s.c = l.s.c, o.s.r = l.s.r, o.e.c = Math.max(o.e.c, l.e.c), o.e.r = Math.max(o.e.r, l.e.r), s == -1 && (o.e.r = s = l.e.r + 1);
  }
  for (var u = 0; u != t.length; ++u)
    if (t[u]) {
      if (!Array.isArray(t[u]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var h = 0; h != t[u].length; ++h)
        if (!(typeof t[u][h] > "u")) {
          var d = { v: t[u][h] }, p = s + u, x = f + h;
          if (o.s.r > p && (o.s.r = p), o.s.c > x && (o.s.c = x), o.e.r < p && (o.e.r = p), o.e.c < x && (o.e.c = x), t[u][h] && typeof t[u][h] == "object" && !Array.isArray(t[u][h]) && !(t[u][h] instanceof Date))
            d = t[u][h];
          else if (Array.isArray(d.v) && (d.f = t[u][h][1], d.v = d.v[0]), d.v === null)
            if (d.f)
              d.t = "n";
            else if (a.nullError)
              d.t = "e", d.v = 0;
            else if (a.sheetStubs)
              d.t = "z";
            else
              continue;
          else
            typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = a.dateNF || pe[14], a.cellDates ? (d.t = "d", d.w = rt(d.z, mr(d.v))) : (d.t = "n", d.v = mr(d.v), d.w = rt(d.z, d.v))) : d.t = "s";
          if (n)
            i[p] || (i[p] = []), i[p][x] && i[p][x].z && (d.z = i[p][x].z), i[p][x] = d;
          else {
            var v = ge({ c: x, r: p });
            i[v] && i[v].z && (d.z = i[v].z), i[v] = d;
          }
        }
    }
  return o.s.c < 1e7 && (i["!ref"] = Se(o)), i;
}
function sn(e, t) {
  return po(null, e, t);
}
function c1(e) {
  return e.read_shift(4, "i");
}
function gt(e, t) {
  return t || (t = z(4)), t.write_shift(4, e), t;
}
function Rr(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function Er(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function o1(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function l1(e, t) {
  return t || (t = z(4)), t.write_shift(2, e.ich || 0), t.write_shift(2, e.ifnt || 0), t;
}
function gs(e, t) {
  var r = e.l, a = e.read_shift(1), n = Rr(e), i = [], s = { t: n, h: n };
  if (a & 1) {
    for (var f = e.read_shift(4), c = 0; c != f; ++c)
      i.push(o1(e));
    s.r = i;
  } else
    s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, s;
}
function u1(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(15 + 4 * e.t.length)), t.write_shift(1, 0), Er(e.t, t), r ? t.slice(0, t.l) : t;
}
var h1 = gs;
function x1(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(23 + 4 * e.t.length)), t.write_shift(1, 1), Er(e.t, t), t.write_shift(4, 1), l1({ ich: 0, ifnt: 0 }, t), r ? t.slice(0, t.l) : t;
}
function xt(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function Ca(e, t) {
  return t == null && (t = z(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function ba(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function Da(e, t) {
  return t == null && (t = z(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var d1 = Rr, vo = Er;
function _s(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function Bi(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var p1 = Rr, H0 = _s, ws = Bi;
function Es(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, a = t[0] & 2;
  e.l += 4;
  var n = a === 0 ? Pi([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : da(t, 0) >> 2;
  return r ? n / 100 : n;
}
function mo(e, t) {
  t == null && (t = z(4));
  var r = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -(1 << 29) && n < 1 << 29 && (a = 1, r = 1), a)
    t.write_shift(-4, ((r ? n : e) << 2) + (r + 2));
  else
    throw new Error("unsupported RkNumber " + e);
}
function go(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function v1(e, t) {
  return t || (t = z(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var Oa = go, fn = v1;
function Ir(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Ta(e, t) {
  return (t || z(8)).write_shift(8, e, "f");
}
function m1(e) {
  var t = {}, r = e.read_shift(1), a = r >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), c = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = n;
      var o = pa[n];
      o && (t.rgb = Wn(o));
      break;
    case 2:
      t.rgb = Wn([s, f, c]);
      break;
    case 3:
      t.theme = n;
      break;
  }
  return i != 0 && (t.tint = i > 0 ? i / 32767 : i / 32768), t;
}
function Li(e, t) {
  if (t || (t = z(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var a = e.rgb || "FFFFFF";
    typeof a == "number" && (a = ("000000" + a.toString(16)).slice(-6)), t.write_shift(1, parseInt(a.slice(0, 2), 16)), t.write_shift(1, parseInt(a.slice(2, 4), 16)), t.write_shift(1, parseInt(a.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function g1(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function _1(e, t) {
  t || (t = z(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
function _o(e, t) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, a = e.read_shift(4);
  switch (a) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (a > 400)
    throw new Error("Unsupported Clipboard: " + a.toString(16));
  return e.l -= 4, e.read_shift(0, t == 1 ? "lpstr" : "lpwstr");
}
function w1(e) {
  return _o(e, 1);
}
function E1(e) {
  return _o(e, 2);
}
var Ts = 2, Xr = 3, li = 11, Rf = 12, Mi = 19, ui = 64, T1 = 65, k1 = 71, S1 = 4108, y1 = 4126, gr = 80, wo = 81, F1 = [gr, wo], V0 = {
  /*::[*/
  1: { n: "CodePage", t: Ts },
  /*::[*/
  2: { n: "Category", t: gr },
  /*::[*/
  3: { n: "PresentationFormat", t: gr },
  /*::[*/
  4: { n: "ByteCount", t: Xr },
  /*::[*/
  5: { n: "LineCount", t: Xr },
  /*::[*/
  6: { n: "ParagraphCount", t: Xr },
  /*::[*/
  7: { n: "SlideCount", t: Xr },
  /*::[*/
  8: { n: "NoteCount", t: Xr },
  /*::[*/
  9: { n: "HiddenCount", t: Xr },
  /*::[*/
  10: { n: "MultimediaClipCount", t: Xr },
  /*::[*/
  11: { n: "ScaleCrop", t: li },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: S1
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: y1
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: gr },
  /*::[*/
  15: { n: "Company", t: gr },
  /*::[*/
  16: { n: "LinksUpToDate", t: li },
  /*::[*/
  17: { n: "CharacterCount", t: Xr },
  /*::[*/
  19: { n: "SharedDoc", t: li },
  /*::[*/
  22: { n: "HyperlinksChanged", t: li },
  /*::[*/
  23: { n: "AppVersion", t: Xr, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: T1 },
  /*::[*/
  26: { n: "ContentType", t: gr },
  /*::[*/
  27: { n: "ContentStatus", t: gr },
  /*::[*/
  28: { n: "Language", t: gr },
  /*::[*/
  29: { n: "Version", t: gr },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: Mi },
  /*::[*/
  2147483651: { n: "Behavior", t: Mi },
  /*::[*/
  1919054434: {}
}, X0 = {
  /*::[*/
  1: { n: "CodePage", t: Ts },
  /*::[*/
  2: { n: "Title", t: gr },
  /*::[*/
  3: { n: "Subject", t: gr },
  /*::[*/
  4: { n: "Author", t: gr },
  /*::[*/
  5: { n: "Keywords", t: gr },
  /*::[*/
  6: { n: "Comments", t: gr },
  /*::[*/
  7: { n: "Template", t: gr },
  /*::[*/
  8: { n: "LastAuthor", t: gr },
  /*::[*/
  9: { n: "RevNumber", t: gr },
  /*::[*/
  10: { n: "EditTime", t: ui },
  /*::[*/
  11: { n: "LastPrinted", t: ui },
  /*::[*/
  12: { n: "CreatedDate", t: ui },
  /*::[*/
  13: { n: "ModifiedDate", t: ui },
  /*::[*/
  14: { n: "PageCount", t: Xr },
  /*::[*/
  15: { n: "WordCount", t: Xr },
  /*::[*/
  16: { n: "CharCount", t: Xr },
  /*::[*/
  17: { n: "Thumbnail", t: k1 },
  /*::[*/
  18: { n: "Application", t: gr },
  /*::[*/
  19: { n: "DocSecurity", t: Xr },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: Mi },
  /*::[*/
  2147483651: { n: "Behavior", t: Mi },
  /*::[*/
  1919054434: {}
}, Pf = {
  /*::[*/
  1: "US",
  // United States
  /*::[*/
  2: "CA",
  // Canada
  /*::[*/
  3: "",
  // Latin America (except Brazil)
  /*::[*/
  7: "RU",
  // Russia
  /*::[*/
  20: "EG",
  // Egypt
  /*::[*/
  30: "GR",
  // Greece
  /*::[*/
  31: "NL",
  // Netherlands
  /*::[*/
  32: "BE",
  // Belgium
  /*::[*/
  33: "FR",
  // France
  /*::[*/
  34: "ES",
  // Spain
  /*::[*/
  36: "HU",
  // Hungary
  /*::[*/
  39: "IT",
  // Italy
  /*::[*/
  41: "CH",
  // Switzerland
  /*::[*/
  43: "AT",
  // Austria
  /*::[*/
  44: "GB",
  // United Kingdom
  /*::[*/
  45: "DK",
  // Denmark
  /*::[*/
  46: "SE",
  // Sweden
  /*::[*/
  47: "NO",
  // Norway
  /*::[*/
  48: "PL",
  // Poland
  /*::[*/
  49: "DE",
  // Germany
  /*::[*/
  52: "MX",
  // Mexico
  /*::[*/
  55: "BR",
  // Brazil
  /*::[*/
  61: "AU",
  // Australia
  /*::[*/
  64: "NZ",
  // New Zealand
  /*::[*/
  66: "TH",
  // Thailand
  /*::[*/
  81: "JP",
  // Japan
  /*::[*/
  82: "KR",
  // Korea
  /*::[*/
  84: "VN",
  // Viet Nam
  /*::[*/
  86: "CN",
  // China
  /*::[*/
  90: "TR",
  // Turkey
  /*::[*/
  105: "JS",
  // Ramastan
  /*::[*/
  213: "DZ",
  // Algeria
  /*::[*/
  216: "MA",
  // Morocco
  /*::[*/
  218: "LY",
  // Libya
  /*::[*/
  351: "PT",
  // Portugal
  /*::[*/
  354: "IS",
  // Iceland
  /*::[*/
  358: "FI",
  // Finland
  /*::[*/
  420: "CZ",
  // Czech Republic
  /*::[*/
  886: "TW",
  // Taiwan
  /*::[*/
  961: "LB",
  // Lebanon
  /*::[*/
  962: "JO",
  // Jordan
  /*::[*/
  963: "SY",
  // Syria
  /*::[*/
  964: "IQ",
  // Iraq
  /*::[*/
  965: "KW",
  // Kuwait
  /*::[*/
  966: "SA",
  // Saudi Arabia
  /*::[*/
  971: "AE",
  // United Arab Emirates
  /*::[*/
  972: "IL",
  // Israel
  /*::[*/
  974: "QA",
  // Qatar
  /*::[*/
  981: "IR",
  // Iran
  /*::[*/
  65535: "US"
  // United States
}, A1 = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function C1(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var b1 = /* @__PURE__ */ C1([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), pa = /* @__PURE__ */ ze(b1), Xt = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, Eo = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, G0 = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, hi = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function ks() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function D1(e) {
  var t = ks();
  if (!e || !e.match)
    return t;
  var r = {};
  if ((e.match(Br) || []).forEach(function(a) {
    var n = Ee(a);
    switch (n[0].replace(Wh, "<")) {
      case "<?xml":
        break;
      case "<Types":
        t.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[n.Extension] = n.ContentType;
        break;
      case "<Override":
        t[G0[n.ContentType]] !== void 0 && t[G0[n.ContentType]].push(n.PartName);
        break;
    }
  }), t.xmlns !== vr.CT)
    throw new Error("Unknown Namespace: " + t.xmlns);
  return t.calcchain = t.calcchains.length > 0 ? t.calcchains[0] : "", t.sst = t.strs.length > 0 ? t.strs[0] : "", t.style = t.styles.length > 0 ? t.styles[0] : "", t.defaults = r, delete t.calcchains, t;
}
function To(e, t) {
  var r = Oh(G0), a = [], n;
  a[a.length] = or, a[a.length] = ne("Types", null, {
    xmlns: vr.CT,
    "xmlns:xsd": vr.xsd,
    "xmlns:xsi": vr.xsi
  }), a = a.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(c) {
    return ne("Default", null, { Extension: c[0], ContentType: c[1] });
  }));
  var i = function(c) {
    e[c] && e[c].length > 0 && (n = e[c][0], a[a.length] = ne("Override", null, {
      PartName: (n[0] == "/" ? "" : "/") + n,
      ContentType: hi[c][t.bookType] || hi[c].xlsx
    }));
  }, s = function(c) {
    (e[c] || []).forEach(function(o) {
      a[a.length] = ne("Override", null, {
        PartName: (o[0] == "/" ? "" : "/") + o,
        ContentType: hi[c][t.bookType] || hi[c].xlsx
      });
    });
  }, f = function(c) {
    (e[c] || []).forEach(function(o) {
      a[a.length] = ne("Override", null, {
        PartName: (o[0] == "/" ? "" : "/") + o,
        ContentType: r[c][0]
      });
    });
  };
  return i("workbooks"), s("sheets"), s("charts"), f("themes"), ["strs", "styles"].forEach(i), ["coreprops", "extprops", "custprops"].forEach(f), f("vba"), f("comments"), f("threadedcomments"), f("drawings"), s("metadata"), f("people"), a.length > 2 && (a[a.length] = "</Types>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var be = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Un(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function Cn(e, t) {
  var r = { "!id": {} };
  if (!e)
    return r;
  t.charAt(0) !== "/" && (t = "/" + t);
  var a = {};
  return (e.match(Br) || []).forEach(function(n) {
    var i = Ee(n);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = i.Target, s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var f = i.TargetMode === "External" ? i.Target : _n(i.Target, t);
      r[f] = s, a[i.Id] = s;
    }
  }), r["!id"] = a, r;
}
function Ja(e) {
  var t = [or, ne("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: vr.RELS
  })];
  return ir(e["!id"]).forEach(function(r) {
    t[t.length] = ne("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function He(e, t, r, a, n, i) {
  if (n || (n = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0)
    for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
      ;
  if (e["!idx"] = t + 1, n.Id = "rId" + t, n.Type = a, n.Target = r, i ? n.TargetMode = i : [be.HLINK, be.XPATH, be.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id])
    throw new Error("Cannot rewrite rId " + t);
  return e["!id"][n.Id] = n, e[("/" + n.Target).replace("//", "/")] = n, t;
}
var O1 = "application/vnd.oasis.opendocument.spreadsheet";
function I1(e, t) {
  for (var r = os(e), a, n; a = Mn.exec(r); )
    switch (a[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (n = Ee(a[0], !1), n.path == "/" && n.type !== O1)
          throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (t && t.WTF)
          throw a;
    }
}
function N1(e) {
  var t = [or];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r)
    t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function Bf(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function R1(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function P1(e) {
  var t = [or];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(Bf(e[r][0], e[r][1])), t.push(R1("", e[r][0]));
  return t.push(Bf("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function ko() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + Nn.version + "</meta:generator></office:meta></office:document-meta>";
}
var ht = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
], B1 = /* @__PURE__ */ function() {
  for (var e = new Array(ht.length), t = 0; t < ht.length; ++t) {
    var r = ht[t], a = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[t] = new RegExp("<" + a + "[^>]*>([\\s\\S]*?)</" + a + ">");
  }
  return e;
}();
function So(e) {
  var t = {};
  e = Xe(e);
  for (var r = 0; r < ht.length; ++r) {
    var a = ht[r], n = e.match(B1[r]);
    n != null && n.length > 0 && (t[a[1]] = Le(n[1])), a[2] === "date" && t[a[1]] && (t[a[1]] = Ke(t[a[1]]));
  }
  return t;
}
function _0(e, t, r, a, n) {
  n[e] != null || t == null || t === "" || (n[e] = t, t = Ve(t), a[a.length] = r ? ne(e, t, r) : yr(e, t));
}
function yo(e, t) {
  var r = t || {}, a = [or, ne("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": vr.CORE_PROPS,
    "xmlns:dc": vr.dc,
    "xmlns:dcterms": vr.dcterms,
    "xmlns:dcmitype": vr.dcmitype,
    "xmlns:xsi": vr.xsi
  })], n = {};
  if (!e && !r.Props)
    return a.join("");
  e && (e.CreatedDate != null && _0("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : W0(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && _0("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : W0(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != ht.length; ++i) {
    var s = ht[i], f = r.Props && r.Props[s[1]] != null ? r.Props[s[1]] : e ? e[s[1]] : null;
    f === !0 ? f = "1" : f === !1 ? f = "0" : typeof f == "number" && (f = String(f)), f != null && _0(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var va = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], Fo = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function Ao(e, t, r, a) {
  var n = [];
  if (typeof e == "string")
    n = Ff(e, a);
  else
    for (var i = 0; i < e.length; ++i)
      n = n.concat(e[i].map(function(l) {
        return { v: l };
      }));
  var s = typeof t == "string" ? Ff(t, a).map(function(l) {
    return l.v;
  }) : t, f = 0, c = 0;
  if (s.length > 0)
    for (var o = 0; o !== n.length; o += 2) {
      switch (c = +n[o + 1].v, n[o].v) {
        case "Worksheets":
        case "工作表":
        case "Листы":
        case "أوراق العمل":
        case "ワークシート":
        case "גליונות עבודה":
        case "Arbeitsblätter":
        case "Çalışma Sayfaları":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de cálculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de cálculo":
        case "Werkbladen":
          r.Worksheets = c, r.SheetNames = s.slice(f, f + c);
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          r.NamedRanges = c, r.DefinedNames = s.slice(f, f + c);
          break;
        case "Charts":
        case "Diagramme":
          r.Chartsheets = c, r.ChartNames = s.slice(f, f + c);
          break;
      }
      f += c;
    }
}
function L1(e, t, r) {
  var a = {};
  return t || (t = {}), e = Xe(e), va.forEach(function(n) {
    var i = (e.match(Bn(n[0])) || [])[1];
    switch (n[2]) {
      case "string":
        i && (t[n[1]] = Le(i));
        break;
      case "bool":
        t[n[1]] = i === "true";
        break;
      case "raw":
        var s = e.match(new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"));
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && Ao(a.HeadingPairs, a.TitlesOfParts, t, r), t;
}
function Co(e) {
  var t = [], r = ne;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = or, t[t.length] = ne("Properties", null, {
    xmlns: vr.EXT_PROPS,
    "xmlns:vt": vr.vt
  }), va.forEach(function(a) {
    if (e[a[1]] !== void 0) {
      var n;
      switch (a[2]) {
        case "string":
          n = Ve(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (t[t.length] = r(a[0], n));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(a) {
    return "<vt:lpstr>" + Ve(a) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var M1 = /<[^>]+>[^<]*/g;
function U1(e, t) {
  var r = {}, a = "", n = e.match(M1);
  if (n)
    for (var i = 0; i != n.length; ++i) {
      var s = n[i], f = Ee(s);
      switch (f[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          a = Le(f.name);
          break;
        case "</property>":
          a = null;
          break;
        default:
          if (s.indexOf("<vt:") === 0) {
            var c = s.split(">"), o = c[0].slice(4), l = c[1];
            switch (o) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                r[a] = Le(l);
                break;
              case "bool":
                r[a] = $e(l);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                r[a] = parseInt(l, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                r[a] = parseFloat(l);
                break;
              case "filetime":
              case "date":
                r[a] = Ke(l);
                break;
              case "cy":
              case "error":
                r[a] = Le(l);
                break;
              default:
                if (o.slice(-1) == "/")
                  break;
                t.WTF && typeof console < "u" && console.warn("Unexpected", s, o, c);
            }
          } else if (s.slice(0, 2) !== "</") {
            if (t.WTF)
              throw new Error(s);
          }
      }
    }
  return r;
}
function bo(e) {
  var t = [or, ne("Properties", null, {
    xmlns: vr.CUST_PROPS,
    "xmlns:vt": vr.vt
  })];
  if (!e)
    return t.join("");
  var r = 1;
  return ir(e).forEach(function(n) {
    ++r, t[t.length] = ne("property", Yh(e[n], !0), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: Ve(n)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var z0 = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
}, w0;
function W1(e, t, r) {
  w0 || (w0 = Yi(z0)), t = w0[t] || t, e[t] = r;
}
function H1(e, t) {
  var r = [];
  return ir(z0).map(function(a) {
    for (var n = 0; n < ht.length; ++n)
      if (ht[n][1] == a)
        return ht[n];
    for (n = 0; n < va.length; ++n)
      if (va[n][1] == a)
        return va[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = t && t.Props && t.Props[a[1]] != null ? t.Props[a[1]] : e[a[1]];
      switch (a[2]) {
        case "date":
          n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof n == "number" ? n = String(n) : n === !0 || n === !1 ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), r.push(yr(z0[a[1]] || a[1], n));
    }
  }), ne("DocumentProperties", r.join(""), { xmlns: Kr.o });
}
function V1(e, t) {
  var r = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && ir(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < ht.length; ++s)
        if (i == ht[s][1])
          return;
      for (s = 0; s < va.length; ++s)
        if (i == va[s][1])
          return;
      for (s = 0; s < r.length; ++s)
        if (i == r[s])
          return;
      var f = e[i], c = "string";
      typeof f == "number" ? (c = "float", f = String(f)) : f === !0 || f === !1 ? (c = "boolean", f = f ? "1" : "0") : f = String(f), n.push(ne(Tf(i), f, { "dt:dt": c }));
    }
  }), t && ir(t).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(t, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = t[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === !0 || s === !1 ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(ne(Tf(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Kr.o + '">' + n.join("") + "</" + a + ">";
}
function Ss(e) {
  var t = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + t / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function X1(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, a = r % Math.pow(2, 32), n = (r - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = z(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function Do(e, t, r) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (r)
    for (; e.l - a & 3; )
      ++e.l;
  return n;
}
function Oo(e, t, r) {
  var a = e.read_shift(0, "lpwstr");
  return r && (e.l += 4 - (a.length + 1 & 3) & 3), a;
}
function Io(e, t, r) {
  return t === 31 ? Oo(e) : Do(e, t, r);
}
function j0(e, t, r) {
  return Io(e, t, r === !1 ? 0 : 4);
}
function G1(e, t) {
  if (!t)
    throw new Error("VtUnalignedString must have positive length");
  return Io(e, t, 0);
}
function z1(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a != t; ++a) {
    var n = e.l;
    r[a] = e.read_shift(0, "lpwstr").replace(Nr, ""), e.l - n & 2 && (e.l += 2);
  }
  return r;
}
function j1(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a != t; ++a)
    r[a] = e.read_shift(0, "lpstr-cp").replace(Nr, "");
  return r;
}
function $1(e) {
  var t = e.l, r = Ui(e, wo);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - t & 2 && (e.l += 2);
  var a = Ui(e, Xr);
  return [r, a];
}
function Y1(e) {
  for (var t = e.read_shift(4), r = [], a = 0; a < t / 2; ++a)
    r.push($1(e));
  return r;
}
function Lf(e, t) {
  for (var r = e.read_shift(4), a = {}, n = 0; n != r; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, t === 1200 ? "utf16le" : "utf8").replace(Nr, "").replace(gn, "!"), t === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 2 + 1 << 2), a;
}
function No(e) {
  var t = e.read_shift(4), r = e.slice(e.l, e.l + t);
  return e.l += t, (t & 3) > 0 && (e.l += 4 - (t & 3) & 3), r;
}
function K1(e) {
  var t = {};
  return t.Size = e.read_shift(4), e.l += t.Size + 3 - (t.Size - 1) % 4, t;
}
function Ui(e, t, r) {
  var a = e.read_shift(2), n, i = r || {};
  if (e.l += 2, t !== Rf && a !== t && F1.indexOf(t) === -1 && !((t & 65534) == 4126 && (a & 65534) == 4126))
    throw new Error("Expected type " + t + " saw " + a);
  switch (t === Rf ? a : t) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      return Do(e, a, 4).replace(Nr, "");
    case 31:
      return Oo(e);
    case 64:
      return Ss(e);
    case 65:
      return No(e);
    case 71:
      return K1(e);
    case 80:
      return j0(e, a, !i.raw).replace(Nr, "");
    case 81:
      return G1(
        e,
        a
        /*, 4*/
      ).replace(Nr, "");
    case 4108:
      return Y1(e);
    case 4126:
    case 4127:
      return a == 4127 ? z1(e) : j1(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + t + " " + a);
  }
}
function Mf(e, t) {
  var r = z(4), a = z(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      a.write_shift(-4, t);
      break;
    case 5:
      a = z(8), a.write_shift(8, t, "f");
      break;
    case 11:
      a.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      a = X1(t);
      break;
    case 31:
    case 80:
      for (a = z(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), a.write_shift(4, t.length + 1), a.write_shift(0, t, "dbcs"); a.l != a.length; )
        a.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return wr([r, a]);
}
function Uf(e, t) {
  var r = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, c = -1, o = {};
  for (s = 0; s != n; ++s) {
    var l = e.read_shift(4), u = e.read_shift(4);
    i[s] = [l, u + r];
  }
  i.sort(function(T, g) {
    return T[1] - g[1];
  });
  var h = {};
  for (s = 0; s != n; ++s) {
    if (e.l !== i[s][1]) {
      var d = !0;
      if (s > 0 && t)
        switch (t[i[s - 1][0]].t) {
          case 2:
            e.l + 2 === i[s][1] && (e.l += 2, d = !1);
            break;
          case 80:
            e.l <= i[s][1] && (e.l = i[s][1], d = !1);
            break;
          case 4108:
            e.l <= i[s][1] && (e.l = i[s][1], d = !1);
            break;
        }
      if ((!t || s == 0) && e.l <= i[s][1] && (d = !1, e.l = i[s][1]), d)
        throw new Error("Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s);
    }
    if (t) {
      var p = t[i[s][0]];
      if (h[p.n] = Ui(e, p.t, { raw: !0 }), p.p === "version" && (h[p.n] = String(h[p.n] >> 16) + "." + ("0000" + String(h[p.n] & 65535)).slice(-4)), p.n == "CodePage")
        switch (h[p.n]) {
          case 0:
            h[p.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            ut(f = h[p.n] >>> 0 & 65535);
            break;
          default:
            throw new Error("Unsupported CodePage: " + h[p.n]);
        }
    } else if (i[s][0] === 1) {
      if (f = h.CodePage = Ui(e, Ts), ut(f), c !== -1) {
        var x = e.l;
        e.l = i[c][1], o = Lf(e, f), e.l = x;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        c = s, e.l = i[s + 1][1];
        continue;
      }
      o = Lf(e, f);
    } else {
      var v = o[i[s][0]], _;
      switch (e[e.l]) {
        case 65:
          e.l += 4, _ = No(e);
          break;
        case 30:
          e.l += 4, _ = j0(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, _ = j0(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, _ = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, _ = e.read_shift(4);
          break;
        case 5:
          e.l += 4, _ = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, _ = cr(e, 4);
          break;
        case 64:
          e.l += 4, _ = Ke(Ss(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      h[v] = _;
    }
  }
  return e.l = r + a, h;
}
var Ro = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function J1(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date)
        return 64;
      break;
  }
  return -1;
}
function Wf(e, t, r) {
  var a = z(8), n = [], i = [], s = 8, f = 0, c = z(8), o = z(8);
  if (c.write_shift(4, 2), c.write_shift(4, 1200), o.write_shift(4, 1), i.push(c), n.push(o), s += 8 + c.length, !t) {
    o = z(8), o.write_shift(4, 0), n.unshift(o);
    var l = [z(4)];
    for (l[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var u = e[f][0];
      for (c = z(4 + 4 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2)), c.write_shift(4, f + 2), c.write_shift(4, u.length + 1), c.write_shift(0, u, "dbcs"); c.l != c.length; )
        c.write_shift(1, 0);
      l.push(c);
    }
    c = wr(l), i.unshift(c), s += 8 + c.length;
  }
  for (f = 0; f < e.length; ++f)
    if (!(t && !t[e[f][0]]) && !(Ro.indexOf(e[f][0]) > -1 || Fo.indexOf(e[f][0]) > -1) && e[f][1] != null) {
      var h = e[f][1], d = 0;
      if (t) {
        d = +t[e[f][0]];
        var p = r[d];
        if (p.p == "version" && typeof h == "string") {
          var x = h.split(".");
          h = (+x[0] << 16) + (+x[1] || 0);
        }
        c = Mf(p.t, h);
      } else {
        var v = J1(h);
        v == -1 && (v = 31, h = String(h)), c = Mf(v, h);
      }
      i.push(c), o = z(8), o.write_shift(4, t ? d : 2 + f), n.push(o), s += 8 + c.length;
    }
  var _ = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f)
    n[f].write_shift(4, _), _ += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), wr([a].concat(n).concat(i));
}
function Hf(e, t, r) {
  var a = e.content;
  if (!a)
    return {};
  Sr(a, 0);
  var n, i, s, f, c = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var o = a.read_shift(4), l = a.read_shift(16);
  if (l !== de.utils.consts.HEADER_CLSID && l !== r)
    throw new Error("Bad PropertySet CLSID " + l);
  if (n = a.read_shift(4), n !== 1 && n !== 2)
    throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l)
    throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), c = a.read_shift(4));
  var u = Uf(a, t), h = { SystemIdentifier: o };
  for (var d in u)
    h[d] = u[d];
  if (h.FMTID = i, n === 1)
    return h;
  if (c - a.l == 2 && (a.l += 2), a.l !== c)
    throw new Error("Length mismatch 2: " + a.l + " !== " + c);
  var p;
  try {
    p = Uf(a, null);
  } catch {
  }
  for (d in p)
    h[d] = p[d];
  return h.FMTID = [i, s], h;
}
function Vf(e, t, r, a, n, i) {
  var s = z(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, de.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, t, "hex"), s.write_shift(4, n ? 68 : 48);
  var c = Wf(e, r, a);
  if (f.push(c), n) {
    var o = Wf(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + c.length), f.push(o);
  }
  return wr(f);
}
function jt(e, t) {
  return e.read_shift(t), null;
}
function q1(e, t) {
  t || (t = z(e));
  for (var r = 0; r < e; ++r)
    t.write_shift(1, 0);
  return t;
}
function Z1(e, t, r) {
  for (var a = [], n = e.l + t; e.l < n; )
    a.push(r(e, n - e.l));
  if (n !== e.l)
    throw new Error("Slurp error");
  return a;
}
function cr(e, t) {
  return e.read_shift(t) === 1;
}
function Wr(e, t) {
  return t || (t = z(2)), t.write_shift(2, +!!e), t;
}
function xr(e) {
  return e.read_shift(2, "u");
}
function lt(e, t) {
  return t || (t = z(2)), t.write_shift(2, e), t;
}
function Po(e, t) {
  return Z1(e, t, xr);
}
function Q1(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? t : t === 1;
}
function Bo(e, t, r) {
  return r || (r = z(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function Zn(e, t, r) {
  var a = e.read_shift(r && r.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = Qr;
  if (r && r.biff >= 8 && (Qr = 1200), !r || r.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else
    r.biff == 12 && (n = "wstr");
  r.biff >= 2 && r.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return Qr = i, f;
}
function ex(e) {
  var t = Qr;
  Qr = 1200;
  var r = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, c, o = {};
  i && (f = e.read_shift(2)), n && (c = e.read_shift(4));
  var l = s == 2 ? "dbcs-cont" : "sbcs-cont", u = r === 0 ? "" : e.read_shift(r, l);
  return i && (e.l += 4 * f), n && (e.l += c), o.t = u, i || (o.raw = "<t>" + o.t + "</t>", o.r = o.t), Qr = t, o;
}
function rx(e) {
  var t = e.t || "", r = z(3 + 0);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var a = z(2 * t.length);
  a.write_shift(2 * t.length, t, "utf16le");
  var n = [r, a];
  return wr(n);
}
function ka(e, t, r) {
  var a;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(t, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(t, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(t, "sbcs-cont") : a = e.read_shift(t, "dbcs-cont"), a;
}
function Qn(e, t, r) {
  var a = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : ka(e, a, r);
}
function Ia(e, t, r) {
  if (r.biff > 5)
    return Qn(e, t, r);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Lo(e, t, r) {
  return r || (r = z(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function tx(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [t, r];
}
function ax(e) {
  var t = e.read_shift(4), r = e.l, a = !1;
  t > 24 && (e.l += t - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = !0), e.l = r);
  var n = e.read_shift((a ? t - 24 : t) >> 1, "utf16le").replace(Nr, "");
  return a && (e.l += 24), n;
}
function nx(e) {
  for (var t = e.read_shift(2), r = ""; t-- > 0; )
    r += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005)
    throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0)
    return r + a.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3)
    throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(Nr, "");
  return r + s;
}
function ix(e, t) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return ax(e);
    case "0303000000000000c000000000000046":
      return nx(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function xi(e) {
  var t = e.read_shift(4), r = t > 0 ? e.read_shift(t, "utf16le").replace(Nr, "") : "";
  return r;
}
function Xf(e, t) {
  t || (t = z(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function sx(e, t) {
  var r = e.l + t, a = e.read_shift(4);
  if (a !== 2)
    throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, c, o = "", l, u;
  n & 16 && (i = xi(e, r - e.l)), n & 128 && (s = xi(e, r - e.l)), (n & 257) === 257 && (f = xi(e, r - e.l)), (n & 257) === 1 && (c = ix(e, r - e.l)), n & 8 && (o = xi(e, r - e.l)), n & 32 && (l = e.read_shift(16)), n & 64 && (u = Ss(
    e
    /*, 8*/
  )), e.l = r;
  var h = s || f || c || "";
  h && o && (h += "#" + o), h || (h = "#" + o), n & 2 && h.charAt(0) == "/" && h.charAt(1) != "/" && (h = "file://" + h);
  var d = { Target: h };
  return l && (d.guid = l), u && (d.time = u), i && (d.Tooltip = i), d;
}
function fx(e) {
  var t = z(512), r = 0, a = e.Target;
  a.slice(0, 7) == "file://" && (a = a.slice(7));
  var n = a.indexOf("#"), i = n > -1 ? 31 : 23;
  switch (a.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < s.length; ++r)
    t.write_shift(4, s[r]);
  if (i == 28)
    a = a.slice(1), Xf(a, t);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (t.write_shift(4, 2 * (f.length + 1)), r = 0; r < f.length; ++r)
      t.write_shift(2, f.charCodeAt(r));
    t.write_shift(2, 0), i & 8 && Xf(n > -1 ? a.slice(n + 1) : "", t);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < s.length; ++r)
      t.write_shift(1, parseInt(s[r], 16));
    for (var c = 0; a.slice(c * 3, c * 3 + 3) == "../" || a.slice(c * 3, c * 3 + 3) == "..\\"; )
      ++c;
    for (t.write_shift(2, c), t.write_shift(4, a.length - 3 * c + 1), r = 0; r < a.length - 3 * c; ++r)
      t.write_shift(1, a.charCodeAt(r + 3 * c) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r)
      t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function Mo(e) {
  var t = e.read_shift(1), r = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [t, r, a, n];
}
function Uo(e, t) {
  var r = Mo(e);
  return r[3] = 0, r;
}
function Ot(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2);
  return { r: t, c: r, ixfe: a };
}
function Sa(e, t, r, a) {
  return a || (a = z(6)), a.write_shift(2, e), a.write_shift(2, t), a.write_shift(2, r || 0), a;
}
function cx(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: t, flags: r };
}
function ox(e, t, r) {
  return t === 0 ? "" : Ia(e, t, r);
}
function lx(e, t, r) {
  var a = r.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function Wo(e) {
  var t = e.read_shift(2), r = Es(e);
  return [t, r];
}
function ux(e, t, r) {
  e.l += 4, t -= 4;
  var a = e.l + t, n = Zn(e, t, r), i = e.read_shift(2);
  if (a -= e.l, i !== a)
    throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function Zi(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r: t }, e: { c: n, r } };
}
function Ho(e, t) {
  return t || (t = z(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function Vo(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r: t }, e: { c: n, r } };
}
var hx = Vo;
function Xo(e) {
  e.l += 4;
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function xx(e) {
  var t = {};
  return e.l += 4, e.l += 16, t.fSharedNote = e.read_shift(2), e.l += 4, t;
}
function dx(e) {
  var t = {};
  return e.l += 4, e.cf = e.read_shift(2), t;
}
function Cr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var px = {
  /*::[*/
  0: Cr,
  /* FtEnd */
  /*::[*/
  4: Cr,
  /* FtMacro */
  /*::[*/
  5: Cr,
  /* FtButton */
  /*::[*/
  6: Cr,
  /* FtGmo */
  /*::[*/
  7: dx,
  /* FtCf */
  /*::[*/
  8: Cr,
  /* FtPioGrbit */
  /*::[*/
  9: Cr,
  /* FtPictFmla */
  /*::[*/
  10: Cr,
  /* FtCbls */
  /*::[*/
  11: Cr,
  /* FtRbo */
  /*::[*/
  12: Cr,
  /* FtSbs */
  /*::[*/
  13: xx,
  /* FtNts */
  /*::[*/
  14: Cr,
  /* FtSbsFmla */
  /*::[*/
  15: Cr,
  /* FtGboData */
  /*::[*/
  16: Cr,
  /* FtEdoData */
  /*::[*/
  17: Cr,
  /* FtRboData */
  /*::[*/
  18: Cr,
  /* FtCblsData */
  /*::[*/
  19: Cr,
  /* FtLbsData */
  /*::[*/
  20: Cr,
  /* FtCblsFmla */
  /*::[*/
  21: Xo
};
function vx(e, t) {
  for (var r = e.l + t, a = []; e.l < r; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a.push(px[n](e, r - e.l));
    } catch {
      return e.l = r, a;
    }
  }
  return e.l != r && (e.l = r), a;
}
function di(e, t) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), t -= 2, t >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (t > 6)
        throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(t), r;
}
function ys(e, t, r) {
  var a = 1536, n = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      a = 1280, n = 8;
      break;
    case "biff4":
      a = 4, n = 6;
      break;
    case "biff3":
      a = 3, n = 6;
      break;
    case "biff2":
      a = 2, n = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = z(n);
  return i.write_shift(2, a), i.write_shift(2, t), n > 4 && i.write_shift(2, 29282), n > 6 && i.write_shift(2, 1997), n > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function mx(e, t) {
  return t === 0 || e.read_shift(2), 1200;
}
function gx(e, t, r) {
  if (r.enc)
    return e.l += t, "";
  var a = e.l, n = Ia(e, 0, r);
  return e.read_shift(t + a - e.l), n;
}
function _x(e, t) {
  var r = !t || t.biff == 8, a = z(r ? 112 : 54);
  for (a.write_shift(t.biff == 8 ? 2 : 1, 7), r && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (r ? 0 : 536870912)); a.l < a.length; )
    a.write_shift(1, r ? 0 : 32);
  return a;
}
function wx(e, t, r) {
  var a = r && r.biff == 8 || t == 2 ? e.read_shift(2) : (e.l += t, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function Ex(e, t, r) {
  var a = e.read_shift(4), n = e.read_shift(1) & 3, i = e.read_shift(1);
  switch (i) {
    case 0:
      i = "Worksheet";
      break;
    case 1:
      i = "Macrosheet";
      break;
    case 2:
      i = "Chartsheet";
      break;
    case 6:
      i = "VBAModule";
      break;
  }
  var s = Zn(e, 0, r);
  return s.length === 0 && (s = "Sheet1"), { pos: a, hs: n, dt: i, name: s };
}
function Tx(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, a = z(8 + r * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), t.biff >= 8 && a.write_shift(1, 1), a.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function kx(e, t) {
  for (var r = e.l + t, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < r; ++s)
    i.push(ex(e));
  return i.Count = a, i.Unique = n, i;
}
function Sx(e, t) {
  var r = z(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n)
    a[n] = rx(e[n]);
  var i = wr([r].concat(a));
  return i.parts = [r.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function yx(e, t) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += t - 2, r;
}
function Fx(e) {
  var t = {};
  t.r = e.read_shift(2), t.c = e.read_shift(2), t.cnt = e.read_shift(2) - t.c;
  var r = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (t.level = a & 7), a & 32 && (t.hidden = !0), a & 64 && (t.hpt = r / 20), t;
}
function Ax(e) {
  var t = cx(e);
  if (t.type != 2211)
    throw new Error("Invalid Future Record " + t.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function Cx(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Gf(e, t, r) {
  var a = 0;
  r && r.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  r && r.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function bx(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), c = e.read_shift(2), o = e.read_shift(2);
  return {
    Pos: [t, r],
    Dim: [a, n],
    Flags: i,
    CurTab: s,
    FirstTab: f,
    Selected: c,
    TabRatio: o
  };
}
function Dx() {
  var e = z(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Ox(e, t, r) {
  if (r && r.biff >= 2 && r.biff < 5)
    return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function Ix(e) {
  var t = z(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function Nx() {
}
function Rx(e, t, r) {
  var a = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return a.name = Zn(e, 0, r), a;
}
function Px(e, t) {
  var r = e.name || "Arial", a = t && t.biff == 5, n = a ? 15 + r.length : 16 + 2 * r.length, i = z(n);
  return i.write_shift(2, (e.sz || 12) * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, r.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * r.length, r, a ? "sbcs" : "utf16le"), i;
}
function Bx(e) {
  var t = Ot(e);
  return t.isst = e.read_shift(4), t;
}
function Lx(e, t, r, a) {
  var n = z(10);
  return Sa(e, t, a, n), n.write_shift(4, r), n;
}
function Mx(e, t, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var a = e.l + t, n = Ot(e);
  r.biff == 2 && e.l++;
  var i = Qn(e, a - e.l, r);
  return n.val = i, n;
}
function Ux(e, t, r, a, n) {
  var i = !n || n.biff == 8, s = z(6 + 2 + +i + (1 + i) * r.length);
  return Sa(e, t, a, s), s.write_shift(2, r.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * r.length, r, i ? "utf16le" : "sbcs"), s;
}
function Wx(e, t, r) {
  var a = e.read_shift(2), n = Ia(e, 0, r);
  return [a, n];
}
function Hx(e, t, r, a) {
  var n = r && r.biff == 5;
  a || (a = z(n ? 3 + t.length : 5 + 2 * t.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, t.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * t.length, t, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var Vx = Ia;
function zf(e, t, r) {
  var a = e.l + t, n = r.biff == 8 || !r.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), c = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c } };
}
function Xx(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, a = z(2 * r + 6);
  return a.write_shift(r, e.s.r), a.write_shift(r, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function Gx(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = Wo(e);
  return { r: t, c: r, ixfe: a[0], rknum: a[1] };
}
function zx(e, t) {
  for (var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < r; )
    i.push(Wo(e));
  if (e.l !== r)
    throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1)
    throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function jx(e, t) {
  for (var r = e.l + t - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < r; )
    i.push(e.read_shift(2));
  if (e.l !== r)
    throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1)
    throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function $x(e, t, r, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), c = e.read_shift(2);
  return n.patternType = A1[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = c & 127, n.icvBack = c >> 7 & 127, n.fsxButton = c >> 14 & 1), n;
}
function Yx(e, t, r) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, t -= 6, a.data = $x(e, t, a.fStyle, r), a;
}
function jf(e, t, r, a) {
  var n = r && r.biff == 5;
  a || (a = z(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, t << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function Kx(e) {
  e.l += 4;
  var t = [e.read_shift(2), e.read_shift(2)];
  if (t[0] !== 0 && t[0]--, t[1] !== 0 && t[1]--, t[0] > 7 || t[1] > 7)
    throw new Error("Bad Gutters: " + t.join("|"));
  return t;
}
function Jx(e) {
  var t = z(8);
  return t.write_shift(4, 0), t.write_shift(2, e[0] ? e[0] + 1 : 0), t.write_shift(2, e[1] ? e[1] + 1 : 0), t;
}
function $f(e, t, r) {
  var a = Ot(e);
  (r.biff == 2 || t == 9) && ++e.l;
  var n = Q1(e);
  return a.val = n, a.t = n === !0 || n === !1 ? "b" : "e", a;
}
function qx(e, t, r, a, n, i) {
  var s = z(8);
  return Sa(e, t, a, s), Bo(r, i, s), s;
}
function Zx(e, t, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var a = Ot(e), n = Ir(e);
  return a.val = n, a;
}
function Qx(e, t, r, a) {
  var n = z(14);
  return Sa(e, t, a, n), Ta(r, n), n;
}
var Yf = ox;
function ed(e, t, r) {
  var a = e.l + t, n = e.read_shift(2), i = e.read_shift(2);
  if (r.sbcch = i, i == 1025 || i == 14849)
    return [i, n];
  if (i < 1 || i > 255)
    throw new Error("Unexpected SupBook type: " + i);
  for (var s = ka(e, i), f = []; a > e.l; )
    f.push(Qn(e));
  return [i, n, s, f];
}
function Kf(e, t, r) {
  var a = e.read_shift(2), n, i = {
    fBuiltIn: a & 1,
    fWantAdvise: a >>> 1 & 1,
    fWantPict: a >>> 2 & 1,
    fOle: a >>> 3 & 1,
    fOleLink: a >>> 4 & 1,
    cf: a >>> 5 & 1023,
    fIcon: a >>> 15 & 1
  };
  return r.sbcch === 14849 && (n = ux(e, t - 2, r)), i.body = n || e.read_shift(t - 2), typeof n == "string" && (i.Name = n), i;
}
var rd = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function Jf(e, t, r) {
  var a = e.l + t, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(r && r.biff == 2 ? 1 : 2), c = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), c = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var o = ka(e, s, r);
  n & 32 && (o = rd[o.charCodeAt(0)]);
  var l = a - e.l;
  r && r.biff == 2 && --l;
  var u = a == e.l || f === 0 || !(l > 0) ? [] : vg(e, l, r, f);
  return {
    chKey: i,
    Name: o,
    itab: c,
    rgce: u
  };
}
function Go(e, t, r) {
  if (r.biff < 8)
    return td(e, t, r);
  for (var a = [], n = e.l + t, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; )
    a.push(lx(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != n)
    throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function td(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = Zn(e, t, r);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function ad(e, t, r) {
  if (r.biff < 8) {
    e.l += t;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = ka(e, a, r), s = ka(e, n, r);
  return [i, s];
}
function nd(e, t, r) {
  var a = Vo(e);
  e.l++;
  var n = e.read_shift(1);
  return t -= 8, [mg(e, t, r), n, a];
}
function qf(e, t, r) {
  var a = hx(e);
  switch (r.biff) {
    case 2:
      e.l++, t -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, t -= 8;
      break;
    default:
      e.l += 6, t -= 12;
  }
  return [a, dg(e, t, r)];
}
function id(e) {
  var t = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [t, r, a];
}
function sd(e, t, r) {
  if (!(r.biff < 8)) {
    var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Ia(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: a, c: n }, f, s, i];
  }
}
function fd(e, t, r) {
  return sd(e, t, r);
}
function cd(e, t) {
  for (var r = [], a = e.read_shift(2); a--; )
    r.push(Zi(e));
  return r;
}
function od(e) {
  var t = z(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r)
    Ho(e[r], t);
  return t;
}
function ld(e, t, r) {
  if (r && r.biff < 8)
    return hd(e, t, r);
  var a = Xo(e), n = vx(e, t - 22, a[1]);
  return { cmo: a, ft: n };
}
var ud = {
  8: function(e, t) {
    var r = e.l + t;
    e.l += 10;
    var a = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var n = e.read_shift(1);
    return e.l += n, e.l = r, { fmt: a };
  }
};
function hd(e, t, r) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, t -= 36;
  var s = [];
  return s.push((ud[a] || Pr)(e, t, r)), { cmo: [n, a, i], ft: s };
}
function xd(e, t, r) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (r.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = tx(e, 6, r);
    var f = e.read_shift(2);
    e.read_shift(2), xr(e, 2);
    var c = e.read_shift(2);
    e.l += c;
    for (var o = 1; o < e.lens.length - 1; ++o) {
      if (e.l - a != e.lens[o])
        throw new Error("TxO: bad continue record");
      var l = e[e.l], u = ka(e, e.lens[o + 1] - e.lens[o] - 1);
      if (n += u, n.length >= (l ? f : 2 * f))
        break;
    }
    if (n.length !== f && n.length !== f * 2)
      throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + t, { t: n };
  } catch {
    return e.l = a + t, { t: n };
  }
}
function dd(e, t) {
  var r = Zi(e);
  e.l += 16;
  var a = sx(e, t - 24);
  return [r, a];
}
function pd(e) {
  var t = z(24), r = er(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n)
    t.write_shift(1, parseInt(a[n], 16));
  return wr([t, fx(e[1])]);
}
function vd(e, t) {
  e.read_shift(2);
  var r = Zi(e), a = e.read_shift((t - 10) / 2, "dbcs-cont");
  return a = a.replace(Nr, ""), [r, a];
}
function md(e) {
  var t = e[1].Tooltip, r = z(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var a = er(e[0]);
  r.write_shift(2, a.r), r.write_shift(2, a.r), r.write_shift(2, a.c), r.write_shift(2, a.c);
  for (var n = 0; n < t.length; ++n)
    r.write_shift(2, t.charCodeAt(n));
  return r.write_shift(2, 0), r;
}
function gd(e) {
  var t = [0, 0], r;
  return r = e.read_shift(2), t[0] = Pf[r] || r, r = e.read_shift(2), t[1] = Pf[r] || r, t;
}
function _d(e) {
  return e || (e = z(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function wd(e) {
  for (var t = e.read_shift(2), r = []; t-- > 0; )
    r.push(Uo(e));
  return r;
}
function Ed(e) {
  for (var t = e.read_shift(2), r = []; t-- > 0; )
    r.push(Uo(e));
  return r;
}
function Td(e) {
  e.l += 2;
  var t = { cxfs: 0, crc: 0 };
  return t.cxfs = e.read_shift(2), t.crc = e.read_shift(4), t;
}
function zo(e, t, r) {
  if (!r.cellStyles)
    return Pr(e, t);
  var a = r && r.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), c = e.read_shift(2);
  a == 2 && (e.l += 2);
  var o = { s: n, e: i, w: s, ixfe: f, flags: c };
  return (r.biff >= 5 || !r.biff) && (o.level = c >> 8 & 7), o;
}
function kd(e, t) {
  var r = z(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), r.write_shift(1, a), a = e.level || 0, r.write_shift(1, a), r.write_shift(2, 0), r;
}
function Sd(e, t) {
  var r = {};
  return t < 32 || (e.l += 16, r.header = Ir(e), r.footer = Ir(e), e.l += 2), r;
}
function yd(e, t, r) {
  var a = { area: !1 };
  if (r.biff != 5)
    return e.l += t, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = !0), a;
}
function Fd(e) {
  for (var t = z(2 * e), r = 0; r < e; ++r)
    t.write_shift(2, r + 1);
  return t;
}
var Ad = Ot, Cd = Po, bd = Qn;
function Dd(e) {
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(4), n = { fmt: t, env: r, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function Od(e, t, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var a = Ot(e);
  ++e.l;
  var n = Ia(e, t - 7, r);
  return a.t = "str", a.val = n, a;
}
function Id(e) {
  var t = Ot(e);
  ++e.l;
  var r = Ir(e);
  return t.t = "n", t.val = r, t;
}
function Nd(e, t, r) {
  var a = z(15);
  return ai(a, e, t), a.write_shift(8, r, "f"), a;
}
function Rd(e) {
  var t = Ot(e);
  ++e.l;
  var r = e.read_shift(2);
  return t.t = "n", t.val = r, t;
}
function Pd(e, t, r) {
  var a = z(9);
  return ai(a, e, t), a.write_shift(2, r), a;
}
function Bd(e) {
  var t = e.read_shift(1);
  return t === 0 ? (e.l++, "") : e.read_shift(t, "sbcs-cont");
}
function Ld(e, t) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += t - 13;
}
function Md(e, t, r) {
  var a = e.l + t, n = Ot(e), i = e.read_shift(2), s = ka(e, i, r);
  return e.l = a, n.t = "str", n.val = s, n;
}
var Ud = [2, 3, 48, 49, 131, 139, 140, 245], $0 = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, t = Yi({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(f, c) {
    var o = [], l = ta(1);
    switch (c.type) {
      case "base64":
        l = qr(et(f));
        break;
      case "binary":
        l = qr(f);
        break;
      case "buffer":
      case "array":
        l = f;
        break;
    }
    Sr(l, 0);
    var u = l.read_shift(1), h = !!(u & 136), d = !1, p = !1;
    switch (u) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        d = !0, h = !0;
        break;
      case 49:
        d = !0, h = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        p = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + u.toString(16));
    }
    var x = 0, v = 521;
    u == 2 && (x = l.read_shift(2)), l.l += 3, u != 2 && (x = l.read_shift(4)), x > 1048576 && (x = 1e6), u != 2 && (v = l.read_shift(2));
    var _ = l.read_shift(2), T = c.codepage || 1252;
    u != 2 && (l.l += 16, l.read_shift(1), l[l.l] !== 0 && (T = e[l[l.l]]), l.l += 1, l.l += 2), p && (l.l += 36);
    for (var g = [], D = {}, P = Math.min(l.length, u == 2 ? 521 : v - 10 - (d ? 264 : 0)), O = p ? 32 : 11; l.l < P && l[l.l] != 13; )
      switch (D = {}, D.name = Pe.utils.decode(T, l.slice(l.l, l.l + O)).replace(/[\u0000\r\n].*$/g, ""), l.l += O, D.type = String.fromCharCode(l.read_shift(1)), u != 2 && !p && (D.offset = l.read_shift(4)), D.len = l.read_shift(1), u == 2 && (D.offset = l.read_shift(2)), D.dec = l.read_shift(1), D.name.length && g.push(D), u != 2 && (l.l += p ? 13 : 14), D.type) {
        case "B":
          (!d || D.len != 8) && c.WTF && console.log("Skipping " + D.name + ":" + D.type);
          break;
        case "G":
        case "P":
          c.WTF && console.log("Skipping " + D.name + ":" + D.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + D.type);
      }
    if (l[l.l] !== 13 && (l.l = v - 1), l.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
    l.l = v;
    var k = 0, I = 0;
    for (o[0] = [], I = 0; I != g.length; ++I)
      o[0][I] = g[I].name;
    for (; x-- > 0; ) {
      if (l[l.l] === 42) {
        l.l += _;
        continue;
      }
      for (++l.l, o[++k] = [], I = 0, I = 0; I != g.length; ++I) {
        var b = l.slice(l.l, l.l + g[I].len);
        l.l += g[I].len, Sr(b, 0);
        var G = Pe.utils.decode(T, b);
        switch (g[I].type) {
          case "C":
            G.trim().length && (o[k][I] = G.replace(/\s+$/, ""));
            break;
          case "D":
            G.length === 8 ? o[k][I] = new Date(+G.slice(0, 4), +G.slice(4, 6) - 1, +G.slice(6, 8)) : o[k][I] = G;
            break;
          case "F":
            o[k][I] = parseFloat(G.trim());
            break;
          case "+":
          case "I":
            o[k][I] = p ? b.read_shift(-4, "i") ^ 2147483648 : b.read_shift(4, "i");
            break;
          case "L":
            switch (G.trim().toUpperCase()) {
              case "Y":
              case "T":
                o[k][I] = !0;
                break;
              case "N":
              case "F":
                o[k][I] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + G + "|");
            }
            break;
          case "M":
            if (!h)
              throw new Error("DBF Unexpected MEMO for type " + u.toString(16));
            o[k][I] = "##MEMO##" + (p ? parseInt(G.trim(), 10) : b.read_shift(4));
            break;
          case "N":
            G = G.replace(/\u0000/g, "").trim(), G && G != "." && (o[k][I] = +G || 0);
            break;
          case "@":
            o[k][I] = new Date(b.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            o[k][I] = new Date((b.read_shift(4) - 2440588) * 864e5 + b.read_shift(4));
            break;
          case "Y":
            o[k][I] = b.read_shift(4, "i") / 1e4 + b.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            o[k][I] = -b.read_shift(-8, "f");
            break;
          case "B":
            if (d && g[I].len == 8) {
              o[k][I] = b.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            b.l += g[I].len;
            break;
          case "0":
            if (g[I].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + g[I].type);
        }
      }
    }
    if (u != 2 && l.l < l.length && l[l.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
    return c && c.sheetRows && (o = o.slice(0, c.sheetRows)), c.DBF = g, o;
  }
  function a(f, c) {
    var o = c || {};
    o.dateNF || (o.dateNF = "yyyymmdd");
    var l = sn(r(f, o), o);
    return l["!cols"] = o.DBF.map(function(u) {
      return {
        wch: u.len,
        DBF: u
      };
    }), delete o.DBF, l;
  }
  function n(f, c) {
    try {
      return fa(a(f, c), c);
    } catch (o) {
      if (c && c.WTF)
        throw o;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, c) {
    var o = c || {};
    if (+o.codepage >= 0 && ut(+o.codepage), o.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var l = zr(), u = Xi(f, { header: 1, raw: !0, cellDates: !0 }), h = u[0], d = u.slice(1), p = f["!cols"] || [], x = 0, v = 0, _ = 0, T = 1;
    for (x = 0; x < h.length; ++x) {
      if (((p[x] || {}).DBF || {}).name) {
        h[x] = p[x].DBF.name, ++_;
        continue;
      }
      if (h[x] != null) {
        if (++_, typeof h[x] == "number" && (h[x] = h[x].toString(10)), typeof h[x] != "string")
          throw new Error("DBF Invalid column name " + h[x] + " |" + typeof h[x] + "|");
        if (h.indexOf(h[x]) !== x) {
          for (v = 0; v < 1024; ++v)
            if (h.indexOf(h[x] + "_" + v) == -1) {
              h[x] += "_" + v;
              break;
            }
        }
      }
    }
    var g = Ne(f["!ref"]), D = [], P = [], O = [];
    for (x = 0; x <= g.e.c - g.s.c; ++x) {
      var k = "", I = "", b = 0, G = [];
      for (v = 0; v < d.length; ++v)
        d[v][x] != null && G.push(d[v][x]);
      if (G.length == 0 || h[x] == null) {
        D[x] = "?";
        continue;
      }
      for (v = 0; v < G.length; ++v) {
        switch (typeof G[v]) {
          case "number":
            I = "B";
            break;
          case "string":
            I = "C";
            break;
          case "boolean":
            I = "L";
            break;
          case "object":
            I = G[v] instanceof Date ? "D" : "C";
            break;
          default:
            I = "C";
        }
        b = Math.max(b, String(G[v]).length), k = k && k != I ? "C" : I;
      }
      b > 250 && (b = 250), I = ((p[x] || {}).DBF || {}).type, I == "C" && p[x].DBF.len > b && (b = p[x].DBF.len), k == "B" && I == "N" && (k = "N", O[x] = p[x].DBF.dec, b = p[x].DBF.len), P[x] = k == "C" || I == "N" ? b : i[k] || 0, T += P[x], D[x] = k;
    }
    var M = l.next(32);
    for (M.write_shift(4, 318902576), M.write_shift(4, d.length), M.write_shift(2, 296 + 32 * _), M.write_shift(2, T), x = 0; x < 4; ++x)
      M.write_shift(4, 0);
    for (M.write_shift(4, 0 | (+t[
      /*::String(*/
      _a
      /*::)*/
    ] || 3) << 8), x = 0, v = 0; x < h.length; ++x)
      if (h[x] != null) {
        var B = l.next(32), K = (h[x].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        B.write_shift(1, K, "sbcs"), B.write_shift(1, D[x] == "?" ? "C" : D[x], "sbcs"), B.write_shift(4, v), B.write_shift(1, P[x] || i[D[x]] || 0), B.write_shift(1, O[x] || 0), B.write_shift(1, 2), B.write_shift(4, 0), B.write_shift(1, 0), B.write_shift(4, 0), B.write_shift(4, 0), v += P[x] || i[D[x]] || 0;
      }
    var oe = l.next(264);
    for (oe.write_shift(4, 13), x = 0; x < 65; ++x)
      oe.write_shift(4, 0);
    for (x = 0; x < d.length; ++x) {
      var ee = l.next(T);
      for (ee.write_shift(1, 0), v = 0; v < h.length; ++v)
        if (h[v] != null)
          switch (D[v]) {
            case "L":
              ee.write_shift(1, d[x][v] == null ? 63 : d[x][v] ? 84 : 70);
              break;
            case "B":
              ee.write_shift(8, d[x][v] || 0, "f");
              break;
            case "N":
              var le = "0";
              for (typeof d[x][v] == "number" && (le = d[x][v].toFixed(O[v] || 0)), _ = 0; _ < P[v] - le.length; ++_)
                ee.write_shift(1, 32);
              ee.write_shift(1, le, "sbcs");
              break;
            case "D":
              d[x][v] ? (ee.write_shift(4, ("0000" + d[x][v].getFullYear()).slice(-4), "sbcs"), ee.write_shift(2, ("00" + (d[x][v].getMonth() + 1)).slice(-2), "sbcs"), ee.write_shift(2, ("00" + d[x][v].getDate()).slice(-2), "sbcs")) : ee.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var fe = String(d[x][v] != null ? d[x][v] : "").slice(0, P[v]);
              for (ee.write_shift(1, fe, "sbcs"), _ = 0; _ < P[v] - fe.length; ++_)
                ee.write_shift(1, 32);
              break;
          }
    }
    return l.next(1).write_shift(1, 26), l.end();
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: s
  };
}(), jo = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + ir(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(h, d) {
    var p = e[d];
    return typeof p == "number" ? U0(p) : p;
  }, a = function(h, d, p) {
    var x = d.charCodeAt(0) - 32 << 4 | p.charCodeAt(0) - 48;
    return x == 59 ? h : U0(x);
  };
  e["|"] = 254;
  function n(h, d) {
    switch (d.type) {
      case "base64":
        return i(et(h), d);
      case "binary":
        return i(h, d);
      case "buffer":
        return i(Ae && Buffer.isBuffer(h) ? h.toString("binary") : sa(h), d);
      case "array":
        return i(Ea(h), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function i(h, d) {
    var p = h.split(/[\n\r]+/), x = -1, v = -1, _ = 0, T = 0, g = [], D = [], P = null, O = {}, k = [], I = [], b = [], G = 0, M;
    for (+d.codepage >= 0 && ut(+d.codepage); _ !== p.length; ++_) {
      G = 0;
      var B = p[_].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(t, r), K = B.replace(/;;/g, "\0").split(";").map(function(R) {
        return R.replace(/\u0000/g, ";");
      }), oe = K[0], ee;
      if (B.length > 0)
        switch (oe) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            K[1].charAt(0) == "P" && D.push(B.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var le = !1, fe = !1, De = !1, V = !1, ve = -1, me = -1;
            for (T = 1; T < K.length; ++T)
              switch (K[T].charAt(0)) {
                case "A":
                  break;
                case "X":
                  v = parseInt(K[T].slice(1)) - 1, fe = !0;
                  break;
                case "Y":
                  for (x = parseInt(K[T].slice(1)) - 1, fe || (v = 0), M = g.length; M <= x; ++M)
                    g[M] = [];
                  break;
                case "K":
                  ee = K[T].slice(1), ee.charAt(0) === '"' ? ee = ee.slice(1, ee.length - 1) : ee === "TRUE" ? ee = !0 : ee === "FALSE" ? ee = !1 : isNaN(mt(ee)) ? isNaN(en(ee).getDate()) || (ee = Ke(ee)) : (ee = mt(ee), P !== null && Fa(P) && (ee = Ji(ee))), typeof Pe < "u" && typeof ee == "string" && (d || {}).type != "string" && (d || {}).codepage && (ee = Pe.utils.decode(d.codepage, ee)), le = !0;
                  break;
                case "E":
                  V = !0;
                  var A = qa(K[T].slice(1), { r: x, c: v });
                  g[x][v] = [g[x][v], A];
                  break;
                case "S":
                  De = !0, g[x][v] = [g[x][v], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  ve = parseInt(K[T].slice(1)) - 1;
                  break;
                case "C":
                  me = parseInt(K[T].slice(1)) - 1;
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + B);
              }
            if (le && (g[x][v] && g[x][v].length == 2 ? g[x][v][0] = ee : g[x][v] = ee, P = null), De) {
              if (V)
                throw new Error("SYLK shared formula cannot have own formula");
              var L = ve > -1 && g[ve][me];
              if (!L || !L[1])
                throw new Error("SYLK shared formula cannot find base");
              g[x][v][1] = ll(L[1], { r: x - ve, c: v - me });
            }
            break;
          case "F":
            var N = 0;
            for (T = 1; T < K.length; ++T)
              switch (K[T].charAt(0)) {
                case "X":
                  v = parseInt(K[T].slice(1)) - 1, ++N;
                  break;
                case "Y":
                  for (x = parseInt(K[T].slice(1)) - 1, M = g.length; M <= x; ++M)
                    g[M] = [];
                  break;
                case "M":
                  G = parseInt(K[T].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  P = D[parseInt(K[T].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (b = K[T].slice(1).split(" "), M = parseInt(b[0], 10); M <= parseInt(b[1], 10); ++M)
                    G = parseInt(b[2], 10), I[M - 1] = G === 0 ? { hidden: !0 } : { wch: G }, aa(I[M - 1]);
                  break;
                case "C":
                  v = parseInt(K[T].slice(1)) - 1, I[v] || (I[v] = {});
                  break;
                case "R":
                  x = parseInt(K[T].slice(1)) - 1, k[x] || (k[x] = {}), G > 0 ? (k[x].hpt = G, k[x].hpx = tn(G)) : G === 0 && (k[x].hidden = !0);
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + B);
              }
            N < 1 && (P = null);
            break;
          default:
            if (d && d.WTF)
              throw new Error("SYLK bad record " + B);
        }
    }
    return k.length > 0 && (O["!rows"] = k), I.length > 0 && (O["!cols"] = I), d && d.sheetRows && (g = g.slice(0, d.sheetRows)), [g, O];
  }
  function s(h, d) {
    var p = n(h, d), x = p[0], v = p[1], _ = sn(x, d);
    return ir(v).forEach(function(T) {
      _[T] = v[T];
    }), _;
  }
  function f(h, d) {
    return fa(s(h, d), d);
  }
  function c(h, d, p, x) {
    var v = "C;Y" + (p + 1) + ";X" + (x + 1) + ";K";
    switch (h.t) {
      case "n":
        v += h.v || 0, h.f && !h.F && (v += ";E" + Os(h.f, { r: p, c: x }));
        break;
      case "b":
        v += h.v ? "TRUE" : "FALSE";
        break;
      case "e":
        v += h.w || h.v;
        break;
      case "d":
        v += '"' + (h.w || h.v) + '"';
        break;
      case "s":
        v += '"' + h.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return v;
  }
  function o(h, d) {
    d.forEach(function(p, x) {
      var v = "F;W" + (x + 1) + " " + (x + 1) + " ";
      p.hidden ? v += "0" : (typeof p.width == "number" && !p.wpx && (p.wpx = Hn(p.width)), typeof p.wpx == "number" && !p.wch && (p.wch = Vn(p.wpx)), typeof p.wch == "number" && (v += Math.round(p.wch))), v.charAt(v.length - 1) != " " && h.push(v);
    });
  }
  function l(h, d) {
    d.forEach(function(p, x) {
      var v = "F;";
      p.hidden ? v += "M0;" : p.hpt ? v += "M" + 20 * p.hpt + ";" : p.hpx && (v += "M" + 20 * Xn(p.hpx) + ";"), v.length > 2 && h.push(v + "R" + (x + 1));
    });
  }
  function u(h, d) {
    var p = ["ID;PWXL;N;E"], x = [], v = Ne(h["!ref"]), _, T = Array.isArray(h), g = `\r
`;
    p.push("P;PGeneral"), p.push("F;P0;DG0G8;M255"), h["!cols"] && o(p, h["!cols"]), h["!rows"] && l(p, h["!rows"]), p.push("B;Y" + (v.e.r - v.s.r + 1) + ";X" + (v.e.c - v.s.c + 1) + ";D" + [v.s.c, v.s.r, v.e.c, v.e.r].join(" "));
    for (var D = v.s.r; D <= v.e.r; ++D)
      for (var P = v.s.c; P <= v.e.c; ++P) {
        var O = ge({ r: D, c: P });
        _ = T ? (h[D] || [])[P] : h[O], !(!_ || _.v == null && (!_.f || _.F)) && x.push(c(_, h, D, P));
      }
    return p.join(g) + g + x.join(g) + g + "E" + g;
  }
  return {
    to_workbook: f,
    to_sheet: s,
    from_sheet: u
  };
}(), $o = /* @__PURE__ */ function() {
  function e(i, s) {
    switch (s.type) {
      case "base64":
        return t(et(i), s);
      case "binary":
        return t(i, s);
      case "buffer":
        return t(Ae && Buffer.isBuffer(i) ? i.toString("binary") : sa(i), s);
      case "array":
        return t(Ea(i), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function t(i, s) {
    for (var f = i.split(`
`), c = -1, o = -1, l = 0, u = []; l !== f.length; ++l) {
      if (f[l].trim() === "BOT") {
        u[++c] = [], o = 0;
        continue;
      }
      if (!(c < 0)) {
        var h = f[l].trim().split(","), d = h[0], p = h[1];
        ++l;
        for (var x = f[l] || ""; (x.match(/["]/g) || []).length & 1 && l < f.length - 1; )
          x += `
` + f[++l];
        switch (x = x.trim(), +d) {
          case -1:
            if (x === "BOT") {
              u[++c] = [], o = 0;
              continue;
            } else if (x !== "EOD")
              throw new Error("Unrecognized DIF special command " + x);
            break;
          case 0:
            x === "TRUE" ? u[c][o] = !0 : x === "FALSE" ? u[c][o] = !1 : isNaN(mt(p)) ? isNaN(en(p).getDate()) ? u[c][o] = p : u[c][o] = Ke(p) : u[c][o] = mt(p), ++o;
            break;
          case 1:
            x = x.slice(1, x.length - 1), x = x.replace(/""/g, '"'), x && x.match(/^=".*"$/) && (x = x.slice(2, -1)), u[c][o++] = x !== "" ? x : null;
            break;
        }
        if (x === "EOD")
          break;
      }
    }
    return s && s.sheetRows && (u = u.slice(0, s.sheetRows)), u;
  }
  function r(i, s) {
    return sn(e(i, s), s);
  }
  function a(i, s) {
    return fa(r(i, s), s);
  }
  var n = /* @__PURE__ */ function() {
    var i = function(c, o, l, u, h) {
      c.push(o), c.push(l + "," + u), c.push('"' + h.replace(/"/g, '""') + '"');
    }, s = function(c, o, l, u) {
      c.push(o + "," + l), c.push(o == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
    };
    return function(c) {
      var o = [], l = Ne(c["!ref"]), u, h = Array.isArray(c);
      i(o, "TABLE", 0, 1, "sheetjs"), i(o, "VECTORS", 0, l.e.r - l.s.r + 1, ""), i(o, "TUPLES", 0, l.e.c - l.s.c + 1, ""), i(o, "DATA", 0, 0, "");
      for (var d = l.s.r; d <= l.e.r; ++d) {
        s(o, -1, 0, "BOT");
        for (var p = l.s.c; p <= l.e.c; ++p) {
          var x = ge({ r: d, c: p });
          if (u = h ? (c[d] || [])[p] : c[x], !u) {
            s(o, 1, 0, "");
            continue;
          }
          switch (u.t) {
            case "n":
              var v = u.w;
              !v && u.v != null && (v = u.v), v == null ? u.f && !u.F ? s(o, 1, 0, "=" + u.f) : s(o, 1, 0, "") : s(o, 0, v, "V");
              break;
            case "b":
              s(o, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
              break;
            case "s":
              s(o, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
              break;
            case "d":
              u.w || (u.w = rt(u.z || pe[14], mr(Ke(u.v)))), s(o, 0, u.w, "V");
              break;
            default:
              s(o, 1, 0, "");
          }
        }
      }
      s(o, -1, 0, "EOD");
      var _ = `\r
`, T = o.join(_);
      return T;
    };
  }();
  return {
    to_workbook: a,
    to_sheet: r,
    from_sheet: n
  };
}(), Yo = /* @__PURE__ */ function() {
  function e(u) {
    return u.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(u) {
    return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(u, h) {
    for (var d = u.split(`
`), p = -1, x = -1, v = 0, _ = []; v !== d.length; ++v) {
      var T = d[v].trim().split(":");
      if (T[0] === "cell") {
        var g = er(T[1]);
        if (_.length <= g.r)
          for (p = _.length; p <= g.r; ++p)
            _[p] || (_[p] = []);
        switch (p = g.r, x = g.c, T[2]) {
          case "t":
            _[p][x] = e(T[3]);
            break;
          case "v":
            _[p][x] = +T[3];
            break;
          case "vtf":
            var D = T[T.length - 1];
          case "vtc":
            switch (T[3]) {
              case "nl":
                _[p][x] = !!+T[4];
                break;
              default:
                _[p][x] = +T[4];
                break;
            }
            T[2] == "vtf" && (_[p][x] = [_[p][x], D]);
        }
      }
    }
    return h && h.sheetRows && (_ = _.slice(0, h.sheetRows)), _;
  }
  function a(u, h) {
    return sn(r(u, h), h);
  }
  function n(u, h) {
    return fa(a(u, h), h);
  }
  var i = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), s = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, f = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), c = "--SocialCalcSpreadsheetControlSave--";
  function o(u) {
    if (!u || !u["!ref"])
      return "";
    for (var h = [], d = [], p, x = "", v = Hr(u["!ref"]), _ = Array.isArray(u), T = v.s.r; T <= v.e.r; ++T)
      for (var g = v.s.c; g <= v.e.c; ++g)
        if (x = ge({ r: T, c: g }), p = _ ? (u[T] || [])[g] : u[x], !(!p || p.v == null || p.t === "z")) {
          switch (d = ["cell", x, "t"], p.t) {
            case "s":
            case "str":
              d.push(t(p.v));
              break;
            case "n":
              p.f ? (d[2] = "vtf", d[3] = "n", d[4] = p.v, d[5] = t(p.f)) : (d[2] = "v", d[3] = p.v);
              break;
            case "b":
              d[2] = "vt" + (p.f ? "f" : "c"), d[3] = "nl", d[4] = p.v ? "1" : "0", d[5] = t(p.f || (p.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var D = mr(Ke(p.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + D, d[5] = p.w || rt(p.z || pe[14], D);
              break;
            case "e":
              continue;
          }
          h.push(d.join(":"));
        }
    return h.push("sheet:c:" + (v.e.c - v.s.c + 1) + ":r:" + (v.e.r - v.s.r + 1) + ":tvf:1"), h.push("valueformat:1:text-wiki"), h.join(`
`);
  }
  function l(u) {
    return [i, s, f, s, o(u), c].join(`
`);
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: l
  };
}(), rn = /* @__PURE__ */ function() {
  function e(l, u, h, d, p) {
    p.raw ? u[h][d] = l : l === "" || (l === "TRUE" ? u[h][d] = !0 : l === "FALSE" ? u[h][d] = !1 : isNaN(mt(l)) ? isNaN(en(l).getDate()) ? u[h][d] = l : u[h][d] = Ke(l) : u[h][d] = mt(l));
  }
  function t(l, u) {
    var h = u || {}, d = [];
    if (!l || l.length === 0)
      return d;
    for (var p = l.split(/[\r\n]/), x = p.length - 1; x >= 0 && p[x].length === 0; )
      --x;
    for (var v = 10, _ = 0, T = 0; T <= x; ++T)
      _ = p[T].indexOf(" "), _ == -1 ? _ = p[T].length : _++, v = Math.max(v, _);
    for (T = 0; T <= x; ++T) {
      d[T] = [];
      var g = 0;
      for (e(p[T].slice(0, v).trim(), d, T, g, h), g = 1; g <= (p[T].length - v) / 10 + 1; ++g)
        e(p[T].slice(v + (g - 1) * 10, v + g * 10).trim(), d, T, g, h);
    }
    return h.sheetRows && (d = d.slice(0, h.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, a = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function n(l) {
    for (var u = {}, h = !1, d = 0, p = 0; d < l.length; ++d)
      (p = l.charCodeAt(d)) == 34 ? h = !h : !h && p in r && (u[p] = (u[p] || 0) + 1);
    p = [];
    for (d in u)
      Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
    if (!p.length) {
      u = a;
      for (d in u)
        Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
    }
    return p.sort(function(x, v) {
      return x[0] - v[0] || a[x[1]] - a[v[1]];
    }), r[p.pop()[1]] || 44;
  }
  function i(l, u) {
    var h = u || {}, d = "", p = h.dense ? [] : {}, x = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    l.slice(0, 4) == "sep=" ? l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? (d = l.charAt(4), l = l.slice(7)) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? (d = l.charAt(4), l = l.slice(6)) : d = n(l.slice(0, 1024)) : h && h.FS ? d = h.FS : d = n(l.slice(0, 1024));
    var v = 0, _ = 0, T = 0, g = 0, D = 0, P = d.charCodeAt(0), O = !1, k = 0, I = l.charCodeAt(0);
    l = l.replace(/\r\n/mg, `
`);
    var b = h.dateNF != null ? yh(h.dateNF) : null;
    function G() {
      var M = l.slice(g, D), B = {};
      if (M.charAt(0) == '"' && M.charAt(M.length - 1) == '"' && (M = M.slice(1, -1).replace(/""/g, '"')), M.length === 0)
        B.t = "z";
      else if (h.raw)
        B.t = "s", B.v = M;
      else if (M.trim().length === 0)
        B.t = "s", B.v = M;
      else if (M.charCodeAt(0) == 61)
        M.charCodeAt(1) == 34 && M.charCodeAt(M.length - 1) == 34 ? (B.t = "s", B.v = M.slice(2, -1).replace(/""/g, '"')) : em(M) ? (B.t = "n", B.f = M.slice(1)) : (B.t = "s", B.v = M);
      else if (M == "TRUE")
        B.t = "b", B.v = !0;
      else if (M == "FALSE")
        B.t = "b", B.v = !1;
      else if (!isNaN(T = mt(M)))
        B.t = "n", h.cellText !== !1 && (B.w = M), B.v = T;
      else if (!isNaN(en(M).getDate()) || b && M.match(b)) {
        B.z = h.dateNF || pe[14];
        var K = 0;
        b && M.match(b) && (M = Fh(M, h.dateNF, M.match(b) || []), K = 1), h.cellDates ? (B.t = "d", B.v = Ke(M, K)) : (B.t = "n", B.v = mr(Ke(M, K))), h.cellText !== !1 && (B.w = rt(B.z, B.v instanceof Date ? mr(B.v) : B.v)), h.cellNF || delete B.z;
      } else
        B.t = "s", B.v = M;
      if (B.t == "z" || (h.dense ? (p[v] || (p[v] = []), p[v][_] = B) : p[ge({ c: _, r: v })] = B), g = D + 1, I = l.charCodeAt(g), x.e.c < _ && (x.e.c = _), x.e.r < v && (x.e.r = v), k == P)
        ++_;
      else if (_ = 0, ++v, h.sheetRows && h.sheetRows <= v)
        return !0;
    }
    e:
      for (; D < l.length; ++D)
        switch (k = l.charCodeAt(D)) {
          case 34:
            I === 34 && (O = !O);
            break;
          case P:
          case 10:
          case 13:
            if (!O && G())
              break e;
            break;
        }
    return D - g > 0 && G(), p["!ref"] = Se(x), p;
  }
  function s(l, u) {
    return !(u && u.PRN) || u.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? i(l, u) : sn(t(l, u), u);
  }
  function f(l, u) {
    var h = "", d = u.type == "string" ? [0, 0, 0, 0] : Ws(l, u);
    switch (u.type) {
      case "base64":
        h = et(l);
        break;
      case "binary":
        h = l;
        break;
      case "buffer":
        u.codepage == 65001 ? h = l.toString("utf8") : u.codepage && typeof Pe < "u" ? h = Pe.utils.decode(u.codepage, l) : h = Ae && Buffer.isBuffer(l) ? l.toString("binary") : sa(l);
        break;
      case "array":
        h = Ea(l);
        break;
      case "string":
        h = l;
        break;
      default:
        throw new Error("Unrecognized type " + u.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? h = Xe(h.slice(3)) : u.type != "string" && u.type != "buffer" && u.codepage == 65001 ? h = Xe(h) : u.type == "binary" && typeof Pe < "u" && u.codepage && (h = Pe.utils.decode(u.codepage, Pe.utils.encode(28591, h))), h.slice(0, 19) == "socialcalc:version:" ? Yo.to_sheet(u.type == "string" ? h : Xe(h), u) : s(h, u);
  }
  function c(l, u) {
    return fa(f(l, u), u);
  }
  function o(l) {
    for (var u = [], h = Ne(l["!ref"]), d, p = Array.isArray(l), x = h.s.r; x <= h.e.r; ++x) {
      for (var v = [], _ = h.s.c; _ <= h.e.c; ++_) {
        var T = ge({ r: x, c: _ });
        if (d = p ? (l[x] || [])[_] : l[T], !d || d.v == null) {
          v.push("          ");
          continue;
        }
        for (var g = (d.w || (bt(d), d.w) || "").slice(0, 10); g.length < 10; )
          g += " ";
        v.push(g + (_ === 0 ? " " : ""));
      }
      u.push(v.join(""));
    }
    return u.join(`
`);
  }
  return {
    to_workbook: c,
    to_sheet: f,
    from_sheet: o
  };
}();
function Wd(e, t) {
  var r = t || {}, a = !!r.WTF;
  r.WTF = !0;
  try {
    var n = jo.to_workbook(e, r);
    return r.WTF = a, n;
  } catch (i) {
    if (r.WTF = a, !i.message.match(/SYLK bad record ID/) && a)
      throw i;
    return rn.to_workbook(e, t);
  }
}
var ma = /* @__PURE__ */ function() {
  function e(A, L, N) {
    if (A) {
      Sr(A, A.l || 0);
      for (var R = N.Enum || ve; A.l < A.length; ) {
        var Y = A.read_shift(2), te = R[Y] || R[65535], ae = A.read_shift(2), Q = A.l + ae, q = te.f && te.f(A, ae, N);
        if (A.l = Q, L(q, te, Y))
          return;
      }
    }
  }
  function t(A, L) {
    switch (L.type) {
      case "base64":
        return r(qr(et(A)), L);
      case "binary":
        return r(qr(A), L);
      case "buffer":
      case "array":
        return r(A, L);
    }
    throw "Unsupported type " + L.type;
  }
  function r(A, L) {
    if (!A)
      return A;
    var N = L || {}, R = N.dense ? [] : {}, Y = "Sheet1", te = "", ae = 0, Q = {}, q = [], Fe = [], C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, je = N.sheetRows || 0;
    if (A[2] == 0 && (A[3] == 8 || A[3] == 9) && A.length >= 16 && A[14] == 5 && A[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (A[2] == 2)
      N.Enum = ve, e(A, function(ue, sr, tt) {
        switch (tt) {
          case 0:
            N.vers = ue, ue >= 4096 && (N.qpro = !0);
            break;
          case 6:
            C = ue;
            break;
          case 204:
            ue && (te = ue);
            break;
          case 222:
            te = ue;
            break;
          case 15:
          case 51:
            N.qpro || (ue[1].v = ue[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            tt == 14 && (ue[2] & 112) == 112 && (ue[2] & 15) > 1 && (ue[2] & 15) < 15 && (ue[1].z = N.dateNF || pe[14], N.cellDates && (ue[1].t = "d", ue[1].v = Ji(ue[1].v))), N.qpro && ue[3] > ae && (R["!ref"] = Se(C), Q[Y] = R, q.push(Y), R = N.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ae = ue[3], Y = te || "Sheet" + (ae + 1), te = "");
            var _t = N.dense ? (R[ue[0].r] || [])[ue[0].c] : R[ge(ue[0])];
            if (_t) {
              _t.t = ue[1].t, _t.v = ue[1].v, ue[1].z != null && (_t.z = ue[1].z), ue[1].f != null && (_t.f = ue[1].f);
              break;
            }
            N.dense ? (R[ue[0].r] || (R[ue[0].r] = []), R[ue[0].r][ue[0].c] = ue[1]) : R[ge(ue[0])] = ue[1];
            break;
        }
      }, N);
    else if (A[2] == 26 || A[2] == 14)
      N.Enum = me, A[2] == 14 && (N.qpro = !0, A.l = 0), e(A, function(ue, sr, tt) {
        switch (tt) {
          case 204:
            Y = ue;
            break;
          case 22:
            ue[1].v = ue[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (ue[3] > ae && (R["!ref"] = Se(C), Q[Y] = R, q.push(Y), R = N.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ae = ue[3], Y = "Sheet" + (ae + 1)), je > 0 && ue[0].r >= je)
              break;
            N.dense ? (R[ue[0].r] || (R[ue[0].r] = []), R[ue[0].r][ue[0].c] = ue[1]) : R[ge(ue[0])] = ue[1], C.e.c < ue[0].c && (C.e.c = ue[0].c), C.e.r < ue[0].r && (C.e.r = ue[0].r);
            break;
          case 27:
            ue[14e3] && (Fe[ue[14e3][0]] = ue[14e3][1]);
            break;
          case 1537:
            Fe[ue[0]] = ue[1], ue[0] == ae && (Y = ue[1]);
            break;
        }
      }, N);
    else
      throw new Error("Unrecognized LOTUS BOF " + A[2]);
    if (R["!ref"] = Se(C), Q[te || Y] = R, q.push(te || Y), !Fe.length)
      return { SheetNames: q, Sheets: Q };
    for (var Re = {}, Ge = [], Oe = 0; Oe < Fe.length; ++Oe)
      Q[q[Oe]] ? (Ge.push(Fe[Oe] || q[Oe]), Re[Fe[Oe]] = Q[Fe[Oe]] || Q[q[Oe]]) : (Ge.push(Fe[Oe]), Re[Fe[Oe]] = { "!ref": "A1" });
    return { SheetNames: Ge, Sheets: Re };
  }
  function a(A, L) {
    var N = L || {};
    if (+N.codepage >= 0 && ut(+N.codepage), N.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var R = zr(), Y = Ne(A["!ref"]), te = Array.isArray(A), ae = [];
    ie(R, 0, i(1030)), ie(R, 6, c(Y));
    for (var Q = Math.min(Y.e.r, 8191), q = Y.s.r; q <= Q; ++q)
      for (var Fe = ar(q), C = Y.s.c; C <= Y.e.c; ++C) {
        q === Y.s.r && (ae[C] = Ye(C));
        var je = ae[C] + Fe, Re = te ? (A[q] || [])[C] : A[je];
        if (!(!Re || Re.t == "z"))
          if (Re.t == "n")
            (Re.v | 0) == Re.v && Re.v >= -32768 && Re.v <= 32767 ? ie(R, 13, d(q, C, Re.v)) : ie(R, 14, x(q, C, Re.v));
          else {
            var Ge = bt(Re);
            ie(R, 15, u(q, C, Ge.slice(0, 239)));
          }
      }
    return ie(R, 1), R.end();
  }
  function n(A, L) {
    var N = L || {};
    if (+N.codepage >= 0 && ut(+N.codepage), N.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var R = zr();
    ie(R, 0, s(A));
    for (var Y = 0, te = 0; Y < A.SheetNames.length; ++Y)
      (A.Sheets[A.SheetNames[Y]] || {})["!ref"] && ie(R, 27, V(A.SheetNames[Y], te++));
    var ae = 0;
    for (Y = 0; Y < A.SheetNames.length; ++Y) {
      var Q = A.Sheets[A.SheetNames[Y]];
      if (!(!Q || !Q["!ref"])) {
        for (var q = Ne(Q["!ref"]), Fe = Array.isArray(Q), C = [], je = Math.min(q.e.r, 8191), Re = q.s.r; Re <= je; ++Re)
          for (var Ge = ar(Re), Oe = q.s.c; Oe <= q.e.c; ++Oe) {
            Re === q.s.r && (C[Oe] = Ye(Oe));
            var ue = C[Oe] + Ge, sr = Fe ? (Q[Re] || [])[Oe] : Q[ue];
            if (!(!sr || sr.t == "z"))
              if (sr.t == "n")
                ie(R, 23, G(Re, Oe, ae, sr.v));
              else {
                var tt = bt(sr);
                ie(R, 22, k(Re, Oe, ae, tt.slice(0, 239)));
              }
          }
        ++ae;
      }
    }
    return ie(R, 1), R.end();
  }
  function i(A) {
    var L = z(2);
    return L.write_shift(2, A), L;
  }
  function s(A) {
    var L = z(26);
    L.write_shift(2, 4096), L.write_shift(2, 4), L.write_shift(4, 0);
    for (var N = 0, R = 0, Y = 0, te = 0; te < A.SheetNames.length; ++te) {
      var ae = A.SheetNames[te], Q = A.Sheets[ae];
      if (!(!Q || !Q["!ref"])) {
        ++Y;
        var q = Hr(Q["!ref"]);
        N < q.e.r && (N = q.e.r), R < q.e.c && (R = q.e.c);
      }
    }
    return N > 8191 && (N = 8191), L.write_shift(2, N), L.write_shift(1, Y), L.write_shift(1, R), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(1, 1), L.write_shift(1, 2), L.write_shift(4, 0), L.write_shift(4, 0), L;
  }
  function f(A, L, N) {
    var R = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return L == 8 && N.qpro ? (R.s.c = A.read_shift(1), A.l++, R.s.r = A.read_shift(2), R.e.c = A.read_shift(1), A.l++, R.e.r = A.read_shift(2), R) : (R.s.c = A.read_shift(2), R.s.r = A.read_shift(2), L == 12 && N.qpro && (A.l += 2), R.e.c = A.read_shift(2), R.e.r = A.read_shift(2), L == 12 && N.qpro && (A.l += 2), R.s.c == 65535 && (R.s.c = R.e.c = R.s.r = R.e.r = 0), R);
  }
  function c(A) {
    var L = z(8);
    return L.write_shift(2, A.s.c), L.write_shift(2, A.s.r), L.write_shift(2, A.e.c), L.write_shift(2, A.e.r), L;
  }
  function o(A, L, N) {
    var R = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return N.qpro && N.vers != 20768 ? (R[0].c = A.read_shift(1), R[3] = A.read_shift(1), R[0].r = A.read_shift(2), A.l += 2) : (R[2] = A.read_shift(1), R[0].c = A.read_shift(2), R[0].r = A.read_shift(2)), R;
  }
  function l(A, L, N) {
    var R = A.l + L, Y = o(A, L, N);
    if (Y[1].t = "s", N.vers == 20768) {
      A.l++;
      var te = A.read_shift(1);
      return Y[1].v = A.read_shift(te, "utf8"), Y;
    }
    return N.qpro && A.l++, Y[1].v = A.read_shift(R - A.l, "cstr"), Y;
  }
  function u(A, L, N) {
    var R = z(7 + N.length);
    R.write_shift(1, 255), R.write_shift(2, L), R.write_shift(2, A), R.write_shift(1, 39);
    for (var Y = 0; Y < R.length; ++Y) {
      var te = N.charCodeAt(Y);
      R.write_shift(1, te >= 128 ? 95 : te);
    }
    return R.write_shift(1, 0), R;
  }
  function h(A, L, N) {
    var R = o(A, L, N);
    return R[1].v = A.read_shift(2, "i"), R;
  }
  function d(A, L, N) {
    var R = z(7);
    return R.write_shift(1, 255), R.write_shift(2, L), R.write_shift(2, A), R.write_shift(2, N, "i"), R;
  }
  function p(A, L, N) {
    var R = o(A, L, N);
    return R[1].v = A.read_shift(8, "f"), R;
  }
  function x(A, L, N) {
    var R = z(13);
    return R.write_shift(1, 255), R.write_shift(2, L), R.write_shift(2, A), R.write_shift(8, N, "f"), R;
  }
  function v(A, L, N) {
    var R = A.l + L, Y = o(A, L, N);
    if (Y[1].v = A.read_shift(8, "f"), N.qpro)
      A.l = R;
    else {
      var te = A.read_shift(2);
      D(A.slice(A.l, A.l + te), Y), A.l += te;
    }
    return Y;
  }
  function _(A, L, N) {
    var R = L & 32768;
    return L &= -32769, L = (R ? A : 0) + (L >= 8192 ? L - 16384 : L), (R ? "" : "$") + (N ? Ye(L) : ar(L));
  }
  var T = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, g = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function D(A, L) {
    Sr(A, 0);
    for (var N = [], R = 0, Y = "", te = "", ae = "", Q = ""; A.l < A.length; ) {
      var q = A[A.l++];
      switch (q) {
        case 0:
          N.push(A.read_shift(8, "f"));
          break;
        case 1:
          te = _(L[0].c, A.read_shift(2), !0), Y = _(L[0].r, A.read_shift(2), !1), N.push(te + Y);
          break;
        case 2:
          {
            var Fe = _(L[0].c, A.read_shift(2), !0), C = _(L[0].r, A.read_shift(2), !1);
            te = _(L[0].c, A.read_shift(2), !0), Y = _(L[0].r, A.read_shift(2), !1), N.push(Fe + C + ":" + te + Y);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          N.push("(" + N.pop() + ")");
          break;
        case 5:
          N.push(A.read_shift(2));
          break;
        case 6:
          {
            for (var je = ""; q = A[A.l++]; )
              je += String.fromCharCode(q);
            N.push('"' + je.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          N.push("-" + N.pop());
          break;
        case 23:
          N.push("+" + N.pop());
          break;
        case 22:
          N.push("NOT(" + N.pop() + ")");
          break;
        case 20:
        case 21:
          Q = N.pop(), ae = N.pop(), N.push(["AND", "OR"][q - 20] + "(" + ae + "," + Q + ")");
          break;
        default:
          if (q < 32 && g[q])
            Q = N.pop(), ae = N.pop(), N.push(ae + g[q] + Q);
          else if (T[q]) {
            if (R = T[q][1], R == 69 && (R = A[A.l++]), R > N.length) {
              console.error("WK1 bad formula parse 0x" + q.toString(16) + ":|" + N.join("|") + "|");
              return;
            }
            var Re = N.slice(-R);
            N.length -= R, N.push(T[q][0] + "(" + Re.join(",") + ")");
          } else
            return q <= 7 ? console.error("WK1 invalid opcode " + q.toString(16)) : q <= 24 ? console.error("WK1 unsupported op " + q.toString(16)) : q <= 30 ? console.error("WK1 invalid opcode " + q.toString(16)) : q <= 115 ? console.error("WK1 unsupported function opcode " + q.toString(16)) : console.error("WK1 unrecognized opcode " + q.toString(16));
      }
    }
    N.length == 1 ? L[1].f = "" + N[0] : console.error("WK1 bad formula parse |" + N.join("|") + "|");
  }
  function P(A) {
    var L = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return L[0].r = A.read_shift(2), L[3] = A[A.l++], L[0].c = A[A.l++], L;
  }
  function O(A, L) {
    var N = P(A);
    return N[1].t = "s", N[1].v = A.read_shift(L - 4, "cstr"), N;
  }
  function k(A, L, N, R) {
    var Y = z(6 + R.length);
    Y.write_shift(2, A), Y.write_shift(1, N), Y.write_shift(1, L), Y.write_shift(1, 39);
    for (var te = 0; te < R.length; ++te) {
      var ae = R.charCodeAt(te);
      Y.write_shift(1, ae >= 128 ? 95 : ae);
    }
    return Y.write_shift(1, 0), Y;
  }
  function I(A, L) {
    var N = P(A);
    N[1].v = A.read_shift(2);
    var R = N[1].v >> 1;
    if (N[1].v & 1)
      switch (R & 7) {
        case 0:
          R = (R >> 3) * 5e3;
          break;
        case 1:
          R = (R >> 3) * 500;
          break;
        case 2:
          R = (R >> 3) / 20;
          break;
        case 3:
          R = (R >> 3) / 200;
          break;
        case 4:
          R = (R >> 3) / 2e3;
          break;
        case 5:
          R = (R >> 3) / 2e4;
          break;
        case 6:
          R = (R >> 3) / 16;
          break;
        case 7:
          R = (R >> 3) / 64;
          break;
      }
    return N[1].v = R, N;
  }
  function b(A, L) {
    var N = P(A), R = A.read_shift(4), Y = A.read_shift(4), te = A.read_shift(2);
    if (te == 65535)
      return R === 0 && Y === 3221225472 ? (N[1].t = "e", N[1].v = 15) : R === 0 && Y === 3489660928 ? (N[1].t = "e", N[1].v = 42) : N[1].v = 0, N;
    var ae = te & 32768;
    return te = (te & 32767) - 16446, N[1].v = (1 - ae * 2) * (Y * Math.pow(2, te + 32) + R * Math.pow(2, te)), N;
  }
  function G(A, L, N, R) {
    var Y = z(14);
    if (Y.write_shift(2, A), Y.write_shift(1, N), Y.write_shift(1, L), R == 0)
      return Y.write_shift(4, 0), Y.write_shift(4, 0), Y.write_shift(2, 65535), Y;
    var te = 0, ae = 0, Q = 0, q = 0;
    return R < 0 && (te = 1, R = -R), ae = Math.log2(R) | 0, R /= Math.pow(2, ae - 31), q = R >>> 0, q & 2147483648 || (R /= 2, ++ae, q = R >>> 0), R -= q, q |= 2147483648, q >>>= 0, R *= Math.pow(2, 32), Q = R >>> 0, Y.write_shift(4, Q), Y.write_shift(4, q), ae += 16383 + (te ? 32768 : 0), Y.write_shift(2, ae), Y;
  }
  function M(A, L) {
    var N = b(A);
    return A.l += L - 14, N;
  }
  function B(A, L) {
    var N = P(A), R = A.read_shift(4);
    return N[1].v = R >> 6, N;
  }
  function K(A, L) {
    var N = P(A), R = A.read_shift(8, "f");
    return N[1].v = R, N;
  }
  function oe(A, L) {
    var N = K(A);
    return A.l += L - 10, N;
  }
  function ee(A, L) {
    return A[A.l + L - 1] == 0 ? A.read_shift(L, "cstr") : "";
  }
  function le(A, L) {
    var N = A[A.l++];
    N > L - 1 && (N = L - 1);
    for (var R = ""; R.length < N; )
      R += String.fromCharCode(A[A.l++]);
    return R;
  }
  function fe(A, L, N) {
    if (!(!N.qpro || L < 21)) {
      var R = A.read_shift(1);
      A.l += 17, A.l += 1, A.l += 2;
      var Y = A.read_shift(L - 21, "cstr");
      return [R, Y];
    }
  }
  function De(A, L) {
    for (var N = {}, R = A.l + L; A.l < R; ) {
      var Y = A.read_shift(2);
      if (Y == 14e3) {
        for (N[Y] = [0, ""], N[Y][0] = A.read_shift(2); A[A.l]; )
          N[Y][1] += String.fromCharCode(A[A.l]), A.l++;
        A.l++;
      }
    }
    return N;
  }
  function V(A, L) {
    var N = z(5 + A.length);
    N.write_shift(2, 14e3), N.write_shift(2, L);
    for (var R = 0; R < A.length; ++R) {
      var Y = A.charCodeAt(R);
      N[N.l++] = Y > 127 ? 95 : Y;
    }
    return N[N.l++] = 0, N;
  }
  var ve = {
    /*::[*/
    0: { n: "BOF", f: xr },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: h },
    /*::[*/
    14: { n: "NUMBER", f: p },
    /*::[*/
    15: { n: "LABEL", f: l },
    /*::[*/
    16: { n: "FORMULA", f: v },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: l },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: ee },
    /*::[*/
    222: { n: "SHEETNAMELP", f: le },
    /*::[*/
    65535: { n: "" }
  }, me = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: O },
    /*::[*/
    23: { n: "NUMBER17", f: b },
    /*::[*/
    24: { n: "NUMBER18", f: I },
    /*::[*/
    25: { n: "FORMULA19", f: M },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: De },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: B },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: K },
    /*::[*/
    40: { n: "FORMULA28", f: oe },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: ee },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: fe },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: a,
    book_to_wk3: n,
    to_workbook: t
  };
}();
function Hd(e) {
  var t = {}, r = e.match(Br), a = 0, n = !1;
  if (r)
    for (; a != r.length; ++a) {
      var i = Ee(r[a]);
      switch (i[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!i.val)
            break;
        case "<shadow>":
        case "<shadow/>":
          t.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (i.val == "1")
            break;
          t.cp = es[parseInt(i.val, 10)];
          break;
        case "<outline":
          if (!i.val)
            break;
        case "<outline>":
        case "<outline/>":
          t.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          t.name = i.val;
          break;
        case "<sz":
          t.sz = i.val;
          break;
        case "<strike":
          if (!i.val)
            break;
        case "<strike>":
        case "<strike/>":
          t.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!i.val)
            break;
          switch (i.val) {
            case "double":
              t.uval = "double";
              break;
            case "singleAccounting":
              t.uval = "single-accounting";
              break;
            case "doubleAccounting":
              t.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          t.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (i.val == "0")
            break;
        case "<b>":
        case "<b/>":
          t.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (i.val == "0")
            break;
        case "<i>":
        case "<i/>":
          t.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          i.rgb && (t.color = i.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          t.family = i.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          t.valign = i.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (i[0].charCodeAt(1) !== 47 && !n)
            throw new Error("Unrecognized rich format " + i[0]);
      }
    }
  return t;
}
var Vd = /* @__PURE__ */ function() {
  var e = Bn("t"), t = Bn("rPr");
  function r(i) {
    var s = i.match(e);
    if (!s)
      return { t: "s", v: "" };
    var f = { t: "s", v: Le(s[1]) }, c = i.match(t);
    return c && (f.s = Hd(c[1])), f;
  }
  var a = /<(?:\w+:)?r>/g, n = /<\/(?:\w+:)?r>/;
  return function(s) {
    return s.replace(a, "").split(n).map(r).filter(function(f) {
      return f.v;
    });
  };
}(), Xd = /* @__PURE__ */ function() {
  var t = /(\r\n|\n)/g;
  function r(n, i, s) {
    var f = [];
    n.u && f.push("text-decoration: underline;"), n.uval && f.push("text-underline-style:" + n.uval + ";"), n.sz && f.push("font-size:" + n.sz + "pt;"), n.outline && f.push("text-effect: outline;"), n.shadow && f.push("text-shadow: auto;"), i.push('<span style="' + f.join("") + '">'), n.b && (i.push("<b>"), s.push("</b>")), n.i && (i.push("<i>"), s.push("</i>")), n.strike && (i.push("<s>"), s.push("</s>"));
    var c = n.valign || "";
    return c == "superscript" || c == "super" ? c = "sup" : c == "subscript" && (c = "sub"), c != "" && (i.push("<" + c + ">"), s.push("</" + c + ">")), s.push("</span>"), n;
  }
  function a(n) {
    var i = [[], n.v, []];
    return n.v ? (n.s && r(n.s, i[0], i[2]), i[0].join("") + i[1].replace(t, "<br/>") + i[2].join("")) : "";
  }
  return function(i) {
    return i.map(a).join("");
  };
}(), Gd = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, zd = /<(?:\w+:)?r>/, jd = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function Fs(e, t) {
  var r = t ? t.cellHTML : !0, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Le(Xe(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), a.r = Xe(e), r && (a.h = cs(a.t))) : (
    /*y = */
    e.match(zd) && (a.r = Xe(e), a.t = Le(Xe((e.replace(jd, "").match(Gd) || []).join("").replace(Br, ""))), r && (a.h = Xd(Vd(a.r))))
  ), a) : { t: "" };
}
var $d = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, Yd = /<(?:\w+:)?(?:si|sstItem)>/g, Kd = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Jd(e, t) {
  var r = [], a = "";
  if (!e)
    return r;
  var n = e.match($d);
  if (n) {
    a = n[2].replace(Yd, "").split(Kd);
    for (var i = 0; i != a.length; ++i) {
      var s = Fs(a[i].trim(), t);
      s != null && (r[r.length] = s);
    }
    n = Ee(n[1]), r.Count = n.count, r.Unique = n.uniqueCount;
  }
  return r;
}
var qd = /^\s|\s$|[\t\n\r]/;
function Ko(e, t) {
  if (!t.bookSST)
    return "";
  var r = [or];
  r[r.length] = ne("sst", null, {
    xmlns: Aa[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var a = 0; a != e.length; ++a)
    if (e[a] != null) {
      var n = e[a], i = "<si>";
      n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), n.t.match(qd) && (i += ' xml:space="preserve"'), i += ">" + Ve(n.t) + "</t>"), i += "</si>", r[r.length] = i;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Zd(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Qd(e, t) {
  var r = [], a = !1;
  return Vt(e, function(i, s, f) {
    switch (f) {
      case 159:
        r.Count = i[0], r.Unique = i[1];
        break;
      case 19:
        r.push(i);
        break;
      case 160:
        return !0;
      case 35:
        a = !0;
        break;
      case 36:
        a = !1;
        break;
      default:
        if (s.T, !a || t.WTF)
          throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), r;
}
function ep(e, t) {
  return t || (t = z(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var rp = u1;
function tp(e) {
  var t = zr();
  J(t, 159, ep(e));
  for (var r = 0; r < e.length; ++r)
    J(t, 19, rp(e[r]));
  return J(
    t,
    160
    /* BrtEndSst */
  ), t.end();
}
function Jo(e) {
  if (typeof Pe < "u")
    return Pe.utils.encode(_a, e);
  for (var t = [], r = e.split(""), a = 0; a < r.length; ++a)
    t[a] = r[a].charCodeAt(0);
  return t;
}
function Mt(e, t) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), t >= 4 && (e.l += t - 4), r;
}
function ap(e) {
  var t = {};
  return t.id = e.read_shift(0, "lpp4"), t.R = Mt(e, 4), t.U = Mt(e, 4), t.W = Mt(e, 4), t;
}
function np(e) {
  for (var t = e.read_shift(4), r = e.l + t - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; )
    i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != r)
    throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return a;
}
function ip(e) {
  var t = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    t.push(np(e));
  return t;
}
function sp(e) {
  var t = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    t.push(e.read_shift(0, "lpp4"));
  return t;
}
function fp(e) {
  var t = {};
  return e.read_shift(4), e.l += 4, t.id = e.read_shift(0, "lpp4"), t.name = e.read_shift(0, "lpp4"), t.R = Mt(e, 4), t.U = Mt(e, 4), t.W = Mt(e, 4), t;
}
function cp(e) {
  var t = fp(e);
  if (t.ename = e.read_shift(0, "8lpp4"), t.blksz = e.read_shift(4), t.cmode = e.read_shift(4), e.read_shift(4) != 4)
    throw new Error("Bad !Primary record");
  return t;
}
function qo(e, t) {
  var r = e.l + t, a = {};
  a.Flags = e.read_shift(4) & 63, e.l += 4, a.AlgID = e.read_shift(4);
  var n = !1;
  switch (a.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = a.Flags == 36;
      break;
    case 26625:
      n = a.Flags == 4;
      break;
    case 0:
      n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + a.AlgID;
  }
  if (!n)
    throw new Error("Encryption Flags/AlgID mismatch");
  return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, a;
}
function Zo(e, t) {
  var r = {}, a = e.l + t;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, a), e.l = a, r;
}
function op(e) {
  var t = Mt(e);
  switch (t.Minor) {
    case 2:
      return [t.Minor, lp(e)];
    case 3:
      return [t.Minor, up()];
    case 4:
      return [t.Minor, hp(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + t.Minor);
}
function lp(e) {
  var t = e.read_shift(4);
  if ((t & 63) != 36)
    throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), a = qo(e, r), n = Zo(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function up() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function hp(e) {
  var t = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), a = {};
  return r.replace(Br, function(i) {
    var s = Ee(i);
    switch (Dt(s[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        t.forEach(function(f) {
          a[f] = s[f];
        });
        break;
      case "<dataIntegrity":
        a.encryptedHmacKey = s.encryptedHmacKey, a.encryptedHmacValue = s.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        a.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        a.uri = s.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        a.encs.push(s);
        break;
      default:
        throw s[0];
    }
  }), a;
}
function xp(e, t) {
  var r = {}, a = r.EncryptionVersionInfo = Mt(e, 4);
  if (t -= 4, a.Minor != 2)
    throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2)
    throw new Error("unrecognized major version code: " + a.Major);
  r.Flags = e.read_shift(4), t -= 4;
  var n = e.read_shift(4);
  return t -= 4, r.EncryptionHeader = qo(e, n), t -= n, r.EncryptionVerifier = Zo(e, t), r;
}
function dp(e) {
  var t = {}, r = t.EncryptionVersionInfo = Mt(e, 4);
  if (r.Major != 1 || r.Minor != 1)
    throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return t.Salt = e.read_shift(16), t.EncryptedVerifier = e.read_shift(16), t.EncryptedVerifierHash = e.read_shift(16), t;
}
function As(e) {
  var t = 0, r, a = Jo(e), n = a.length + 1, i, s, f, c, o;
  for (r = ta(n), r[0] = a.length, i = 1; i != n; ++i)
    r[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i)
    s = r[i], f = t & 16384 ? 1 : 0, c = t << 1 & 32767, o = f | c, t = o ^ s;
  return t ^ 52811;
}
var Qo = /* @__PURE__ */ function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], t = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = t[s.length - 1], c = 104, o = s.length - 1; o >= 0; --o)
      for (var l = s[o], u = 0; u != 7; ++u)
        l & 64 && (f ^= r[c]), l *= 2, --c;
    return f;
  };
  return function(s) {
    for (var f = Jo(s), c = i(f), o = f.length, l = ta(16), u = 0; u != 16; ++u)
      l[u] = 0;
    var h, d, p;
    for ((o & 1) === 1 && (h = c >> 8, l[o] = n(e[0], h), --o, h = c & 255, d = f[f.length - 1], l[o] = n(d, h)); o > 0; )
      --o, h = c >> 8, l[o] = n(f[o], h), --o, h = c & 255, l[o] = n(f[o], h);
    for (o = 15, p = 15 - f.length; p > 0; )
      h = c >> 8, l[o] = n(e[p], h), --o, --p, h = c & 255, l[o] = n(f[o], h), --o, --p;
    return l;
  };
}(), pp = function(e, t, r, a, n) {
  n || (n = t), a || (a = Qo(e));
  var i, s;
  for (i = 0; i != t.length; ++i)
    s = t[i], s ^= a[r], s = (s >> 5 | s << 3) & 255, n[i] = s, ++r;
  return [n, r, a];
}, vp = function(e) {
  var t = 0, r = Qo(e);
  return function(a) {
    var n = pp("", a, t, r);
    return t = n[1], n[0];
  };
};
function mp(e, t, r, a) {
  var n = { key: xr(e), verificationBytes: xr(e) };
  return r.password && (n.verifier = As(r.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = vp(r.password)), n;
}
function gp(e, t, r) {
  var a = r || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = dp(e) : a.Data = xp(e, t), a;
}
function _p(e, t, r) {
  var a = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? gp(e, t - 2, a) : mp(e, r.biff >= 8 ? t : t - 2, r, a), a;
}
var el = /* @__PURE__ */ function() {
  function e(n, i) {
    switch (i.type) {
      case "base64":
        return t(et(n), i);
      case "binary":
        return t(n, i);
      case "buffer":
        return t(Ae && Buffer.isBuffer(n) ? n.toString("binary") : sa(n), i);
      case "array":
        return t(Ea(n), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(n, i) {
    var s = i || {}, f = s.dense ? [] : {}, c = n.match(/\\trowd.*?\\row\b/g);
    if (!c.length)
      throw new Error("RTF missing table");
    var o = { s: { c: 0, r: 0 }, e: { c: 0, r: c.length - 1 } };
    return c.forEach(function(l, u) {
      Array.isArray(f) && (f[u] = []);
      for (var h = /\\\w+\b/g, d = 0, p, x = -1; p = h.exec(l); ) {
        switch (p[0]) {
          case "\\cell":
            var v = l.slice(d, h.lastIndex - p[0].length);
            if (v[0] == " " && (v = v.slice(1)), ++x, v.length) {
              var _ = { v, t: "s" };
              Array.isArray(f) ? f[u][x] = _ : f[ge({ r: u, c: x })] = _;
            }
            break;
        }
        d = h.lastIndex;
      }
      x > o.e.c && (o.e.c = x);
    }), f["!ref"] = Se(o), f;
  }
  function r(n, i) {
    return fa(e(n, i), i);
  }
  function a(n) {
    for (var i = ["{\\rtf1\\ansi"], s = Ne(n["!ref"]), f, c = Array.isArray(n), o = s.s.r; o <= s.e.r; ++o) {
      i.push("\\trowd\\trautofit1");
      for (var l = s.s.c; l <= s.e.c; ++l)
        i.push("\\cellx" + (l + 1));
      for (i.push("\\pard\\intbl"), l = s.s.c; l <= s.e.c; ++l) {
        var u = ge({ r: o, c: l });
        f = c ? (n[o] || [])[l] : n[u], !(!f || f.v == null && (!f.f || f.F)) && (i.push(" " + (f.w || (bt(f), f.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: a
  };
}();
function wp(e) {
  var t = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(t.slice(0, 2), 16), parseInt(t.slice(2, 4), 16), parseInt(t.slice(4, 6), 16)];
}
function Wn(e) {
  for (var t = 0, r = 1; t != 3; ++t)
    r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
function Ep(e) {
  var t = e[0] / 255, r = e[1] / 255, a = e[2] / 255, n = Math.max(t, r, a), i = Math.min(t, r, a), s = n - i;
  if (s === 0)
    return [0, 0, t];
  var f = 0, c = 0, o = n + i;
  switch (c = s / (o > 1 ? 2 - o : o), n) {
    case t:
      f = ((r - a) / s + 6) % 6;
      break;
    case r:
      f = (a - t) / s + 2;
      break;
    case a:
      f = (t - r) / s + 4;
      break;
  }
  return [f / 6, c, o / 2];
}
function Tp(e) {
  var t = e[0], r = e[1], a = e[2], n = r * 2 * (a < 0.5 ? a : 1 - a), i = a - n / 2, s = [i, i, i], f = 6 * t, c;
  if (r !== 0)
    switch (f | 0) {
      case 0:
      case 6:
        c = n * f, s[0] += n, s[1] += c;
        break;
      case 1:
        c = n * (2 - f), s[0] += c, s[1] += n;
        break;
      case 2:
        c = n * (f - 2), s[1] += n, s[2] += c;
        break;
      case 3:
        c = n * (4 - f), s[1] += c, s[2] += n;
        break;
      case 4:
        c = n * (f - 4), s[2] += n, s[0] += c;
        break;
      case 5:
        c = n * (6 - f), s[2] += c, s[0] += n;
        break;
    }
  for (var o = 0; o != 3; ++o)
    s[o] = Math.round(s[o] * 255);
  return s;
}
function Wi(e, t) {
  if (t === 0)
    return e;
  var r = Ep(wp(e));
  return t < 0 ? r[2] = r[2] * (1 + t) : r[2] = 1 - (1 - r[2]) * (1 - t), Wn(Tp(r));
}
var rl = 6, kp = 15, Sp = 1, Or = rl;
function Hn(e) {
  return Math.floor((e + Math.round(128 / Or) / 256) * Or);
}
function Vn(e) {
  return Math.floor((e - 5) / Or * 100 + 0.5) / 100;
}
function Hi(e) {
  return Math.round((e * Or + 5) / Or * 256) / 256;
}
function E0(e) {
  return Hi(Vn(Hn(e)));
}
function Cs(e) {
  var t = Math.abs(e - E0(e)), r = Or;
  if (t > 5e-3)
    for (Or = Sp; Or < kp; ++Or)
      Math.abs(e - E0(e)) <= t && (t = Math.abs(e - E0(e)), r = Or);
  Or = r;
}
function aa(e) {
  e.width ? (e.wpx = Hn(e.width), e.wch = Vn(e.wpx), e.MDW = Or) : e.wpx ? (e.wch = Vn(e.wpx), e.width = Hi(e.wch), e.MDW = Or) : typeof e.wch == "number" && (e.width = Hi(e.wch), e.wpx = Hn(e.width), e.MDW = Or), e.customWidth && delete e.customWidth;
}
var yp = 96, tl = yp;
function Xn(e) {
  return e * 96 / tl;
}
function tn(e) {
  return e * tl / 96;
}
var Fp = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function Ap(e, t, r, a) {
  t.Borders = [];
  var n = {}, i = !1;
  (e[0].match(Br) || []).forEach(function(s) {
    var f = Ee(s);
    switch (Dt(f[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        n = /*::(*/
        {}, f.diagonalUp && (n.diagonalUp = $e(f.diagonalUp)), f.diagonalDown && (n.diagonalDown = $e(f.diagonalDown)), t.Borders.push(n);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in borders");
    }
  });
}
function Cp(e, t, r, a) {
  t.Fills = [];
  var n = {}, i = !1;
  (e[0].match(Br) || []).forEach(function(s) {
    var f = Ee(s);
    switch (Dt(f[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        n = {}, t.Fills.push(n);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        t.Fills.push(n), n = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        f.patternType && (n.patternType = f.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        n.bgColor || (n.bgColor = {}), f.indexed && (n.bgColor.indexed = parseInt(f.indexed, 10)), f.theme && (n.bgColor.theme = parseInt(f.theme, 10)), f.tint && (n.bgColor.tint = parseFloat(f.tint)), f.rgb && (n.bgColor.rgb = f.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        n.fgColor || (n.fgColor = {}), f.theme && (n.fgColor.theme = parseInt(f.theme, 10)), f.tint && (n.fgColor.tint = parseFloat(f.tint)), f.rgb != null && (n.fgColor.rgb = f.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in fills");
    }
  });
}
function bp(e, t, r, a) {
  t.Fonts = [];
  var n = {}, i = !1;
  (e[0].match(Br) || []).forEach(function(s) {
    var f = Ee(s);
    switch (Dt(f[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        t.Fonts.push(n), n = {};
        break;
      case "<name":
        f.val && (n.name = Xe(f.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = f.val ? $e(f.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "<i":
        n.italic = f.val ? $e(f.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "<u":
        switch (f.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "<strike":
        n.strike = f.val ? $e(f.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "<outline":
        n.outline = f.val ? $e(f.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "<shadow":
        n.shadow = f.val ? $e(f.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "<condense":
        n.condense = f.val ? $e(f.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "<extend":
        n.extend = f.val ? $e(f.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "<sz":
        f.val && (n.sz = +f.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        f.val && (n.vertAlign = f.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        f.val && (n.family = parseInt(f.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        f.val && (n.scheme = f.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (f.val == "1")
          break;
        f.codepage = es[parseInt(f.val, 10)];
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = $e(f.auto)), f.rgb)
          n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var c = pa[n.color.index];
          n.color.index == 81 && (c = pa[1]), c || (c = pa[1]), n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
        } else
          f.theme && (n.color.theme = parseInt(f.theme, 10), f.tint && (n.color.tint = parseFloat(f.tint)), f.theme && r.themeElements && r.themeElements.clrScheme && (n.color.rgb = Wi(r.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        i = !0;
        break;
      case "</AlternateContent>":
        i = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in fonts");
    }
  });
}
function Dp(e, t, r) {
  t.NumberFmt = [];
  for (var a = ir(pe), n = 0; n < a.length; ++n)
    t.NumberFmt[a[n]] = pe[a[n]];
  var i = e[0].match(Br);
  if (i)
    for (n = 0; n < i.length; ++n) {
      var s = Ee(i[n]);
      switch (Dt(s[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var f = Le(Xe(s.formatCode)), c = parseInt(s.numFmtId, 10);
            if (t.NumberFmt[c] = f, c > 0) {
              if (c > 392) {
                for (c = 392; c > 60 && t.NumberFmt[c] != null; --c)
                  ;
                t.NumberFmt[c] = f;
              }
              At(f, c);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF)
            throw new Error("unrecognized " + s[0] + " in numFmts");
      }
    }
}
function Op(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var a = r[0]; a <= r[1]; ++a)
      e[a] != null && (t[t.length] = ne("numFmt", null, { numFmtId: a, formatCode: Ve(e[a]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = ne("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
var pi = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], vi = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Ip(e, t, r) {
  t.CellXf = [];
  var a, n = !1;
  (e[0].match(Br) || []).forEach(function(i) {
    var s = Ee(i), f = 0;
    switch (Dt(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (a = s, delete a[0], f = 0; f < pi.length; ++f)
          a[pi[f]] && (a[pi[f]] = parseInt(a[pi[f]], 10));
        for (f = 0; f < vi.length; ++f)
          a[vi[f]] && (a[vi[f]] = $e(a[vi[f]]));
        if (t.NumberFmt && a.numFmtId > 392) {
          for (f = 392; f > 60; --f)
            if (t.NumberFmt[a.numFmtId] == t.NumberFmt[f]) {
              a.numFmtId = f;
              break;
            }
        }
        t.CellXf.push(a);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var c = {};
        s.vertical && (c.vertical = s.vertical), s.horizontal && (c.horizontal = s.horizontal), s.textRotation != null && (c.textRotation = s.textRotation), s.indent && (c.indent = s.indent), s.wrapText && (c.wrapText = $e(s.wrapText)), a.alignment = c;
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (r && r.WTF && !n)
          throw new Error("unrecognized " + s[0] + " in cellXfs");
    }
  });
}
function Np(e) {
  var t = [];
  return t[t.length] = ne("cellXfs", null), e.forEach(function(r) {
    t[t.length] = ne("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = ne("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
var Rp = /* @__PURE__ */ function() {
  var t = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, a = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, n = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(f, c, o) {
    var l = {};
    if (!f)
      return l;
    f = f.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var u;
    return (u = f.match(t)) && Dp(u, l, o), (u = f.match(n)) && bp(u, l, c, o), (u = f.match(a)) && Cp(u, l, c, o), (u = f.match(i)) && Ap(u, l, c, o), (u = f.match(r)) && Ip(u, l, o), l;
  };
}();
function al(e, t) {
  var r = [or, ne("styleSheet", null, {
    xmlns: Aa[0],
    "xmlns:vt": vr.vt
  })], a;
  return e.SSF && (a = Op(e.SSF)) != null && (r[r.length] = a), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = Np(t.cellXfs)) && (r[r.length] = a), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Pp(e, t) {
  var r = e.read_shift(2), a = Rr(e);
  return [r, a];
}
function Bp(e, t, r) {
  r || (r = z(6 + 4 * t.length)), r.write_shift(2, e), Er(t, r);
  var a = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), a;
}
function Lp(e, t, r) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = g1(e);
  n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (a.bold = 1), e.read_shift(2)) {
    case 1:
      a.vertAlign = "superscript";
      break;
    case 2:
      a.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (a.underline = s);
  var f = e.read_shift(1);
  f > 0 && (a.family = f);
  var c = e.read_shift(1);
  switch (c > 0 && (a.charset = c), e.l++, a.color = m1(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = Rr(e), a;
}
function Mp(e, t) {
  t || (t = z(25 + 4 * 32)), t.write_shift(2, e.sz * 20), _1(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), Li(e.color, t);
  var a = 0;
  return e.scheme == "major" && (a = 1), e.scheme == "minor" && (a = 2), t.write_shift(1, a), Er(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var Up = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], T0, Wp = Pr;
function Zf(e, t) {
  t || (t = z(4 * 3 + 8 * 7 + 16 * 1)), T0 || (T0 = Yi(Up));
  var r = T0[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var a = 0;
  if (r != 40)
    for (Li({ auto: 1 }, t), Li({ auto: 1 }, t); a < 12; ++a)
      t.write_shift(4, 0);
  else {
    for (; a < 4; ++a)
      t.write_shift(4, 0);
    for (; a < 12; ++a)
      t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function Hp(e, t) {
  var r = e.l + t, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = r, { ixfe: a, numFmtId: n };
}
function nl(e, t, r) {
  r || (r = z(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var a = 0;
  return r.write_shift(1, a), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function xn(e, t) {
  return t || (t = z(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Vp = Pr;
function Xp(e, t) {
  return t || (t = z(51)), t.write_shift(1, 0), xn(null, t), xn(null, t), xn(null, t), xn(null, t), xn(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function Gp(e, t) {
  return t || (t = z(12 + 4 * 10)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, +e.builtinId), t.write_shift(1, 0), Bi(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function zp(e, t, r) {
  var a = z(2052);
  return a.write_shift(4, e), Bi(t, a), Bi(r, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function jp(e, t, r) {
  var a = {};
  a.NumberFmt = [];
  for (var n in pe)
    a.NumberFmt[n] = pe[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = !1;
  return Vt(e, function(c, o, l) {
    switch (l) {
      case 44:
        a.NumberFmt[c[0]] = c[1], At(c[1], c[0]);
        break;
      case 43:
        a.Fonts.push(c), c.color.theme != null && t && t.themeElements && t.themeElements.clrScheme && (c.color.rgb = Wi(t.themeElements.clrScheme[c.color.theme].rgb, c.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        i[i.length - 1] == 617 && a.CellXf.push(c);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        i.push(l), s = !0;
        break;
      case 38:
        i.pop(), s = !1;
        break;
      default:
        if (o.T > 0)
          i.push(l);
        else if (o.T < 0)
          i.pop();
        else if (!s || r.WTF && i[i.length - 1] != 37)
          throw new Error("Unexpected record 0x" + l.toString(16));
    }
  }), a;
}
function $p(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n)
        t[n] != null && ++r;
    }), r != 0 && (J(e, 615, gt(r)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n)
        t[n] != null && J(e, 44, Bp(n, t[n]));
    }), J(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function Yp(e) {
  var t = 1;
  J(e, 611, gt(t)), J(e, 43, Mp({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2,
    scheme: "minor"
  })), J(
    e,
    612
    /* BrtEndFonts */
  );
}
function Kp(e) {
  var t = 2;
  J(e, 603, gt(t)), J(e, 45, Zf({ patternType: "none" })), J(e, 45, Zf({ patternType: "gray125" })), J(
    e,
    604
    /* BrtEndFills */
  );
}
function Jp(e) {
  var t = 1;
  J(e, 613, gt(t)), J(e, 46, Xp()), J(
    e,
    614
    /* BrtEndBorders */
  );
}
function qp(e) {
  var t = 1;
  J(e, 626, gt(t)), J(e, 47, nl({
    numFmtId: 0,
    fontId: 0,
    fillId: 0,
    borderId: 0
  }, 65535)), J(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function Zp(e, t) {
  J(e, 617, gt(t.length)), t.forEach(function(r) {
    J(e, 47, nl(r, 0));
  }), J(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function Qp(e) {
  var t = 1;
  J(e, 619, gt(t)), J(e, 48, Gp({
    xfId: 0,
    builtinId: 0,
    name: "Normal"
  })), J(
    e,
    620
    /* BrtEndStyles */
  );
}
function ev(e) {
  var t = 0;
  J(e, 505, gt(t)), J(
    e,
    506
    /* BrtEndDXFs */
  );
}
function rv(e) {
  var t = 0;
  J(e, 508, zp(t, "TableStyleMedium9", "PivotStyleMedium4")), J(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function tv(e, t) {
  var r = zr();
  return J(
    r,
    278
    /* BrtBeginStyleSheet */
  ), $p(r, e.SSF), Yp(r), Kp(r), Jp(r), qp(r), Zp(r, t.cellXfs), Qp(r), ev(r), rv(r), J(
    r,
    279
    /* BrtEndStyleSheet */
  ), r.end();
}
var av = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function nv(e, t, r) {
  t.themeElements.clrScheme = [];
  var a = {};
  (e[0].match(Br) || []).forEach(function(n) {
    var i = Ee(n);
    switch (i[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        a.rgb = i.val;
        break;
      case "<a:sysClr":
        a.rgb = i.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        i[0].charAt(1) === "/" ? (t.themeElements.clrScheme[av.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (r && r.WTF)
          throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function iv() {
}
function sv() {
}
var fv = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, cv = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, ov = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function lv(e, t, r) {
  t.themeElements = {};
  var a;
  [
    /* clrScheme CT_ColorScheme */
    ["clrScheme", fv, nv],
    /* fontScheme CT_FontScheme */
    ["fontScheme", cv, iv],
    /* fmtScheme CT_StyleMatrix */
    ["fmtScheme", ov, sv]
  ].forEach(function(n) {
    if (!(a = e.match(n[1])))
      throw new Error(n[0] + " not found in themeElements");
    n[2](a, t, r);
  });
}
var uv = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function il(e, t) {
  (!e || e.length === 0) && (e = bs());
  var r, a = {};
  if (!(r = e.match(uv)))
    throw new Error("themeElements not found in theme");
  return lv(r[0], a, t), a.raw = e, a;
}
function bs(e, t) {
  if (t && t.themeXLSX)
    return t.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [or];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function hv(e, t, r) {
  var a = e.l + t, n = e.read_shift(4);
  if (n !== 124226) {
    if (!r.cellStyles) {
      e.l = a;
      return;
    }
    var i = e.slice(e.l);
    e.l = a;
    var s;
    try {
      s = eo(i, { type: "array" });
    } catch {
      return;
    }
    var f = Zr(s, "theme/theme/theme1.xml", !0);
    if (f)
      return il(f, r);
  }
}
function xv(e) {
  return e.read_shift(4);
}
function dv(e) {
  var t = {};
  switch (t.xclrType = e.read_shift(2), t.nTintShade = e.read_shift(2), t.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      t.xclrValue = pv(e, 4);
      break;
    case 2:
      t.xclrValue = Mo(e);
      break;
    case 3:
      t.xclrValue = xv(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, t;
}
function pv(e, t) {
  return Pr(e, t);
}
function vv(e, t) {
  return Pr(e, t);
}
function mv(e) {
  var t = e.read_shift(2), r = e.read_shift(2) - 4, a = [t];
  switch (t) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      a[1] = dv(e);
      break;
    case 6:
      a[1] = vv(e, r);
      break;
    case 14:
    case 15:
      a[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + t + " " + r);
  }
  return a;
}
function gv(e, t) {
  var r = e.l + t;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; )
    i.push(mv(e, r - e.l));
  return { ixfe: a, ext: i };
}
function _v(e, t) {
  t.forEach(function(r) {
    switch (r[0]) {
    }
  });
}
function wv(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Rr(e)
  };
}
function Ev(e) {
  var t = z(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), Er(e.name, t), t.slice(0, t.l);
}
function Tv(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function kv(e) {
  var t = z(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function Sv(e, t) {
  var r = z(8 + 2 * t.length);
  return r.write_shift(4, e), Er(t, r), r.slice(0, r.l);
}
function yv(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Fv(e, t) {
  var r = z(8);
  return r.write_shift(4, e), r.write_shift(4, t ? 1 : 0), r;
}
function Av(e, t, r) {
  var a = { Types: [], Cell: [], Value: [] }, n = r || {}, i = [], s = !1, f = 2;
  return Vt(e, function(c, o, l) {
    switch (l) {
      case 335:
        a.Types.push({ name: c.name });
        break;
      case 51:
        c.forEach(function(u) {
          f == 1 ? a.Cell.push({ type: a.Types[u[0] - 1].name, index: u[1] }) : f == 0 && a.Value.push({ type: a.Types[u[0] - 1].name, index: u[1] });
        });
        break;
      case 337:
        f = c ? 1 : 0;
        break;
      case 338:
        f = 2;
        break;
      case 35:
        i.push(l), s = !0;
        break;
      case 36:
        i.pop(), s = !1;
        break;
      default:
        if (!o.T) {
          if (!s || n.WTF && i[i.length - 1] != 35)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), a;
}
function Cv() {
  var e = zr();
  return J(e, 332), J(e, 334, gt(1)), J(e, 335, Ev({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), J(e, 336), J(e, 339, Sv(1, "XLDAPR")), J(e, 52), J(e, 35, gt(514)), J(e, 4096, gt(0)), J(e, 4097, lt(1)), J(e, 36), J(e, 53), J(e, 340), J(e, 337, Fv(1, !0)), J(e, 51, kv([[1, 0]])), J(e, 338), J(e, 333), e.end();
}
function bv(e, t, r) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e)
    return a;
  var n = !1, i = 2, s;
  return e.replace(Br, function(f) {
    var c = Ee(f);
    switch (Dt(c[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        a.Types.push({ name: c.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var o = 0; o < a.Types.length; ++o)
          a.Types[o].name == c.name && (s = a.Types[o]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        i == 1 ? a.Cell.push({ type: a.Types[c.t - 1].name, index: +c.v }) : i == 0 && a.Value.push({ type: a.Types[c.t - 1].name, index: +c.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        i = 1;
        break;
      case "</cellMetadata>":
        i = 2;
        break;
      case "<valueMetadata":
        i = 0;
        break;
      case "</valueMetadata>":
        i = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      case "<rvb":
        if (!s)
          break;
        s.offsets || (s.offsets = []), s.offsets.push(+c.i);
        break;
      default:
        if (!n && r.WTF)
          throw new Error("unrecognized " + c[0] + " in metadata");
    }
    return f;
  }), a;
}
function sl() {
  var e = [or];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function Dv(e) {
  var t = [];
  if (!e)
    return t;
  var r = 1;
  return (e.match(Br) || []).forEach(function(a) {
    var n = Ee(a);
    switch (n[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete n[0], n.i ? r = n.i : n.i = r, t.push(n);
        break;
    }
  }), t;
}
function Ov(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = ge(r);
  var a = e.read_shift(1);
  return a & 2 && (t.l = "1"), a & 8 && (t.a = "1"), t;
}
function Iv(e, t, r) {
  var a = [];
  return Vt(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T)
          throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function Nv(e, t, r, a) {
  if (!e)
    return e;
  var n = a || {}, i = !1;
  Vt(e, function(f, c, o) {
    switch (o) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      default:
        if (!c.T) {
          if (!i || n.WTF)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }, n);
}
function Rv(e, t) {
  if (!e)
    return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return t["!id"][r].Target;
}
var ja = 1024;
function fl(e, t) {
  for (var r = [21600, 21600], a = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), n = [
    ne("xml", null, { "xmlns:v": Kr.v, "xmlns:o": Kr.o, "xmlns:x": Kr.x, "xmlns:mv": Kr.mv }).replace(/\/>/, ">"),
    ne("o:shapelayout", ne("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    ne("v:shapetype", [
      ne("v:stroke", null, { joinstyle: "miter" }),
      ne("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: a })
  ]; ja < e * 1e3; )
    ja += 1e3;
  return t.forEach(function(i) {
    var s = er(i[0]), f = (
      /*::(*/
      { color2: "#BEFF82", type: "gradient" }
    );
    f.type == "gradient" && (f.angle = "-180");
    var c = f.type == "gradient" ? ne("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, o = ne("v:fill", c, f), l = { on: "t", obscured: "t" };
    ++ja, n = n.concat([
      "<v:shape" + Ln({
        id: "_x0000_s" + ja,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (i[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      o,
      ne("v:shadow", null, l),
      ne("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      /* Part 4 19.4.2.3 Anchor (Anchor) */
      yr("x:Anchor", [s.c + 1, 0, s.r + 1, 0, s.c + 3, 20, s.r + 5, 20].join(",")),
      yr("x:AutoFill", "False"),
      yr("x:Row", String(s.r)),
      yr("x:Column", String(s.c)),
      i[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), n.push("</xml>"), n.join("");
}
function Qf(e, t, r, a) {
  var n = Array.isArray(e), i;
  t.forEach(function(s) {
    var f = er(s.ref);
    if (n ? (e[f.r] || (e[f.r] = []), i = e[f.r][f.c]) : i = e[s.ref], !i) {
      i = { t: "z" }, n ? e[f.r][f.c] = i : e[s.ref] = i;
      var c = Ne(e["!ref"] || "BDWGO1000001:A1");
      c.s.r > f.r && (c.s.r = f.r), c.e.r < f.r && (c.e.r = f.r), c.s.c > f.c && (c.s.c = f.c), c.e.c < f.c && (c.e.c = f.c);
      var o = Se(c);
      o !== e["!ref"] && (e["!ref"] = o);
    }
    i.c || (i.c = []);
    var l = { a: s.author, t: s.t, r: s.r, T: r };
    s.h && (l.h = s.h);
    for (var u = i.c.length - 1; u >= 0; --u) {
      if (!r && i.c[u].T)
        return;
      r && !i.c[u].T && i.c.splice(u, 1);
    }
    if (r && a) {
      for (u = 0; u < a.length; ++u)
        if (l.a == a[u].id) {
          l.a = a[u].name || l.a;
          break;
        }
    }
    i.c.push(l);
  });
}
function Pv(e, t) {
  if (e.match(/<(?:\w+:)?comments *\/>/))
    return [];
  var r = [], a = [], n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?author[^>]*>(.*)/);
      f && r.push(f[1]);
    }
  });
  var i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return i && i[1] && i[1].split(/<\/\w*:?comment>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?comment[^>]*>/);
      if (f) {
        var c = Ee(f[0]), o = { author: c.authorId && r[c.authorId] || "sheetjsghost", ref: c.ref, guid: c.guid }, l = er(c.ref);
        if (!(t.sheetRows && t.sheetRows <= l.r)) {
          var u = s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), h = !!u && !!u[1] && Fs(u[1]) || { r: "", t: "", h: "" };
          o.r = h.r, h.r == "<t></t>" && (h.t = h.h = ""), o.t = (h.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), t.cellHTML && (o.h = h.h), a.push(o);
        }
      }
    }
  }), a;
}
function cl(e) {
  var t = [or, ne("comments", null, { xmlns: Aa[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = Ve(n.a);
      r.indexOf(i) == -1 && (r.push(i), t.push("<author>" + i + "</author>")), n.T && n.ID && r.indexOf("tc=" + n.ID) == -1 && (r.push("tc=" + n.ID), t.push("<author>tc=" + n.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(a) {
    var n = 0, i = [];
    if (a[1][0] && a[1][0].T && a[1][0].ID ? n = r.indexOf("tc=" + a[1][0].ID) : a[1].forEach(function(c) {
      c.a && (n = r.indexOf(Ve(c.a))), i.push(c.t || "");
    }), t.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>'), i.length <= 1)
      t.push(yr("t", Ve(i[0] || "")));
    else {
      for (var s = `Comment:
    ` + i[0] + `
`, f = 1; f < i.length; ++f)
        s += `Reply:
    ` + i[f] + `
`;
      t.push(yr("t", Ve(s)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Bv(e, t) {
  var r = [], a = !1, n = {}, i = 0;
  return e.replace(Br, function(f, c) {
    var o = Ee(f);
    switch (Dt(o[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        n = { author: o.personId, guid: o.id, ref: o.ref, T: 1 };
        break;
      case "</threadedComment>":
        n.t != null && r.push(n);
        break;
      case "<text>":
      case "<text":
        i = c + f.length;
        break;
      case "</text>":
        n.t = e.slice(i, c).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        a = !0;
        break;
      case "</mentions>":
        a = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + o[0] + " in threaded comments");
    }
    return f;
  }), r;
}
function Lv(e, t, r) {
  var a = [or, ne("ThreadedComments", null, { xmlns: vr.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var i = "";
    (n[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && t.indexOf(s.a) == -1 && t.push(s.a);
      var c = {
        ref: n[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      f == 0 ? i = c.id : c.parentId = i, s.ID = c.id, s.a && (c.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(s.a)).slice(-12) + "}"), a.push(ne("threadedComment", yr("text", s.t || ""), c));
    });
  }), a.push("</ThreadedComments>"), a.join("");
}
function Mv(e, t) {
  var r = [], a = !1;
  return e.replace(Br, function(i) {
    var s = Ee(i);
    switch (Dt(s[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        r.push({ name: s.displayname, id: s.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + s[0] + " in threaded comments");
    }
    return i;
  }), r;
}
function Uv(e) {
  var t = [or, ne("personList", null, {
    xmlns: vr.TCMNT,
    "xmlns:x": Aa[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, a) {
    t.push(ne("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function Wv(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Oa(e);
  return t.rfx = r.s, t.ref = ge(r.s), e.l += 16, t;
}
function Hv(e, t) {
  return t == null && (t = z(36)), t.write_shift(4, e[1].iauthor), fn(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var Vv = Rr;
function Xv(e) {
  return Er(e.slice(0, 54));
}
function Gv(e, t) {
  var r = [], a = [], n = {}, i = !1;
  return Vt(e, function(f, c, o) {
    switch (o) {
      case 632:
        a.push(f);
        break;
      case 635:
        n = f;
        break;
      case 637:
        n.t = f.t, n.h = f.h, n.r = f.r;
        break;
      case 636:
        if (n.author = a[n.iauthor], delete n.iauthor, t.sheetRows && n.rfx && t.sheetRows <= n.rfx.r)
          break;
        n.t || (n.t = ""), delete n.rfx, r.push(n);
        break;
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!c.T) {
          if (!i || t.WTF)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }), r;
}
function zv(e) {
  var t = zr(), r = [];
  return J(
    t,
    628
    /* BrtBeginComments */
  ), J(
    t,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(a) {
    a[1].forEach(function(n) {
      r.indexOf(n.a) > -1 || (r.push(n.a.slice(0, 54)), J(t, 632, Xv(n.a)));
    });
  }), J(
    t,
    631
    /* BrtEndCommentAuthors */
  ), J(
    t,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(a) {
    a[1].forEach(function(n) {
      n.iauthor = r.indexOf(n.a);
      var i = { s: er(a[0]), e: er(a[0]) };
      J(t, 635, Hv([i, n])), n.t && n.t.length > 0 && J(t, 637, x1(n)), J(
        t,
        636
        /* BrtEndComment */
      ), delete n.iauthor;
    });
  }), J(
    t,
    634
    /* BrtEndCommentList */
  ), J(
    t,
    629
    /* BrtEndComments */
  ), t.end();
}
var jv = "application/vnd.ms-office.vbaProject";
function $v(e) {
  var t = de.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, a) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var n = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      de.utils.cfb_add(t, n, e.FileIndex[a].content);
    }
  }), de.write(t);
}
function Yv(e, t) {
  t.FullPaths.forEach(function(r, a) {
    if (a != 0) {
      var n = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && de.utils.cfb_add(e, n, t.FileIndex[a].content);
    }
  });
}
var ol = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function Kv() {
  return { "!type": "dialog" };
}
function Jv() {
  return { "!type": "dialog" };
}
function qv() {
  return { "!type": "macro" };
}
function Zv() {
  return { "!type": "macro" };
}
var qa = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(a, n, i, s) {
    var f = !1, c = !1;
    i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1)), s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1));
    var o = i.length > 0 ? parseInt(i, 10) | 0 : 0, l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? l += t.c : --l, c ? o += t.r : --o, n + (f ? "" : "$") + Ye(l) + (c ? "" : "$") + ar(o);
  }
  return function(n, i) {
    return t = i, n.replace(e, r);
  };
}(), Ds = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, Os = /* @__PURE__ */ function() {
  return function(t, r) {
    return t.replace(Ds, function(a, n, i, s, f, c) {
      var o = ms(s) - (i ? 0 : r.c), l = vs(c) - (f ? 0 : r.r), u = l == 0 ? "" : f ? l + 1 : "[" + l + "]", h = o == 0 ? "" : i ? o + 1 : "[" + o + "]";
      return n + "R" + u + "C" + h;
    });
  };
}();
function ll(e, t) {
  return e.replace(Ds, function(r, a, n, i, s, f) {
    return a + (n == "$" ? n + i : Ye(ms(i) + t.c)) + (s == "$" ? s + f : ar(vs(f) + t.r));
  });
}
function Qv(e, t, r) {
  var a = Hr(t), n = a.s, i = er(r), s = { r: i.r - n.r, c: i.c - n.c };
  return ll(e, s);
}
function em(e) {
  return e.length != 1;
}
function ec(e) {
  return e.replace(/_xlfn\./g, "");
}
function lr(e) {
  e.l += 1;
}
function na(e, t) {
  var r = e.read_shift(t == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function ul(e, t, r) {
  var a = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return hl(e);
    r.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = na(e, 2), f = na(e, 2);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function hl(e) {
  var t = na(e, 2), r = na(e, 2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: t[0], c: a, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: n, cRel: r[1], rRel: r[2] } };
}
function rm(e, t, r) {
  if (r.biff < 8)
    return hl(e);
  var a = e.read_shift(r.biff == 12 ? 4 : 2), n = e.read_shift(r.biff == 12 ? 4 : 2), i = na(e, 2), s = na(e, 2);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function xl(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return tm(e);
  var a = e.read_shift(r && r.biff == 12 ? 4 : 2), n = na(e, 2);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function tm(e) {
  var t = na(e, 2), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function am(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function nm(e, t, r) {
  var a = r && r.biff ? r.biff : 8;
  if (a >= 2 && a <= 5)
    return im(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1)
    for (; n > 524287; )
      n -= 1048576;
  if (s == 1)
    for (; i > 8191; )
      i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function im(e) {
  var t = e.read_shift(2), r = e.read_shift(1), a = (t & 32768) >> 15, n = (t & 16384) >> 14;
  return t &= 16383, a == 1 && t >= 8192 && (t = t - 16384), n == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: n, rRel: a };
}
function sm(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = ul(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [a, n];
}
function fm(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  var s = ul(e, i, r);
  return [a, n, s];
}
function cm(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [a];
}
function om(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, i = 6;
        break;
      case 12:
        i = 12;
        break;
    }
  return e.l += i, [a, n];
}
function lm(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = rm(e, t - 1, r);
  return [a, n];
}
function um(e, t, r) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [a];
}
function rc(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function hm(e, t, r) {
  e.l += 2;
  for (var a = e.read_shift(r && r.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i)
    n.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return n;
}
function xm(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function dm(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function pm(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function vm(e, t, r) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [a];
}
function dl(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function mm(e) {
  return e.read_shift(2), dl(e);
}
function gm(e) {
  return e.read_shift(2), dl(e);
}
function _m(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = xl(e, 0, r);
  return [a, n];
}
function wm(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = nm(e, 0, r);
  return [a, n];
}
function Em(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = xl(e, 0, r);
  return [a, n, i];
}
function Tm(e, t, r) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [yg[n], ml[n], a];
}
function km(e, t, r) {
  var a = e[e.l++], n = e.read_shift(1), i = r && r.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : Sm(e);
  return [n, (i[0] === 0 ? ml : Sg)[i[1]]];
}
function Sm(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function ym(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function Fm(e, t, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Am(e) {
  return e.l++, Xt[e.read_shift(1)];
}
function Cm(e) {
  return e.l++, e.read_shift(2);
}
function bm(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Dm(e) {
  return e.l++, Ir(e);
}
function Om(e, t, r) {
  return e.l++, Zn(e, t - 1, r);
}
function Im(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = cr(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = Xt[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Ir(e);
      break;
    case 2:
      r[1] = Ia(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function Nm(e, t, r) {
  for (var a = e.read_shift(r.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i)
    n.push((r.biff == 12 ? Oa : Zi)(e));
  return n;
}
function Rm(e, t, r) {
  var a = 0, n = 0;
  r.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i)
    for (var f = 0; f != n; ++f)
      s[i][f] = Im(e, r.biff);
  return s;
}
function Pm(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3, n = !r || r.biff >= 8 ? 4 : 2, i = e.read_shift(n);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [a, 0, i];
}
function Bm(e, t, r) {
  if (r.biff == 5)
    return Lm(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function Lm(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function Mm(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Um(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [a, n];
}
function Wm(e, t, r) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [a];
}
function Hm(e, t, r) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 4;
  if (r)
    switch (r.biff) {
      case 5:
        i = 15;
        break;
      case 12:
        i = 6;
        break;
    }
  return e.l += i, [a, n];
}
var Vm = Pr, Xm = Pr, Gm = Pr;
function ei(e, t, r) {
  return e.l += 2, [am(e)];
}
function Is(e) {
  return e.l += 6, [];
}
var zm = ei, jm = Is, $m = Is, Ym = ei;
function pl(e) {
  return e.l += 2, [xr(e), e.read_shift(2) & 1];
}
var Km = ei, Jm = pl, qm = Is, Zm = ei, Qm = ei, eg = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function rg(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = eg[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: s, idx: a, c: n, C: i };
}
function tg(e) {
  return e.l += 2, [e.read_shift(4)];
}
function ag(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function ng(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function ig(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function sg(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function fg(e) {
  return e.l += 4, [0, 0];
}
var tc = {
  /*::[*/
  1: { n: "PtgExp", f: Fm },
  /*::[*/
  2: { n: "PtgTbl", f: Gm },
  /*::[*/
  3: { n: "PtgAdd", f: lr },
  /*::[*/
  4: { n: "PtgSub", f: lr },
  /*::[*/
  5: { n: "PtgMul", f: lr },
  /*::[*/
  6: { n: "PtgDiv", f: lr },
  /*::[*/
  7: { n: "PtgPower", f: lr },
  /*::[*/
  8: { n: "PtgConcat", f: lr },
  /*::[*/
  9: { n: "PtgLt", f: lr },
  /*::[*/
  10: { n: "PtgLe", f: lr },
  /*::[*/
  11: { n: "PtgEq", f: lr },
  /*::[*/
  12: { n: "PtgGe", f: lr },
  /*::[*/
  13: { n: "PtgGt", f: lr },
  /*::[*/
  14: { n: "PtgNe", f: lr },
  /*::[*/
  15: { n: "PtgIsect", f: lr },
  /*::[*/
  16: { n: "PtgUnion", f: lr },
  /*::[*/
  17: { n: "PtgRange", f: lr },
  /*::[*/
  18: { n: "PtgUplus", f: lr },
  /*::[*/
  19: { n: "PtgUminus", f: lr },
  /*::[*/
  20: { n: "PtgPercent", f: lr },
  /*::[*/
  21: { n: "PtgParen", f: lr },
  /*::[*/
  22: { n: "PtgMissArg", f: lr },
  /*::[*/
  23: { n: "PtgStr", f: Om },
  /*::[*/
  26: { n: "PtgSheet", f: ag },
  /*::[*/
  27: { n: "PtgEndSheet", f: ng },
  /*::[*/
  28: { n: "PtgErr", f: Am },
  /*::[*/
  29: { n: "PtgBool", f: bm },
  /*::[*/
  30: { n: "PtgInt", f: Cm },
  /*::[*/
  31: { n: "PtgNum", f: Dm },
  /*::[*/
  32: { n: "PtgArray", f: um },
  /*::[*/
  33: { n: "PtgFunc", f: Tm },
  /*::[*/
  34: { n: "PtgFuncVar", f: km },
  /*::[*/
  35: { n: "PtgName", f: Pm },
  /*::[*/
  36: { n: "PtgRef", f: _m },
  /*::[*/
  37: { n: "PtgArea", f: sm },
  /*::[*/
  38: { n: "PtgMemArea", f: Mm },
  /*::[*/
  39: { n: "PtgMemErr", f: Vm },
  /*::[*/
  40: { n: "PtgMemNoMem", f: Xm },
  /*::[*/
  41: { n: "PtgMemFunc", f: Um },
  /*::[*/
  42: { n: "PtgRefErr", f: Wm },
  /*::[*/
  43: { n: "PtgAreaErr", f: cm },
  /*::[*/
  44: { n: "PtgRefN", f: wm },
  /*::[*/
  45: { n: "PtgAreaN", f: lm },
  /*::[*/
  46: { n: "PtgMemAreaN", f: ig },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: sg },
  /*::[*/
  57: { n: "PtgNameX", f: Bm },
  /*::[*/
  58: { n: "PtgRef3d", f: Em },
  /*::[*/
  59: { n: "PtgArea3d", f: fm },
  /*::[*/
  60: { n: "PtgRefErr3d", f: Hm },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: om },
  /*::[*/
  255: {}
}, cg = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, og = {
  /*::[*/
  1: { n: "PtgElfLel", f: pl },
  /*::[*/
  2: { n: "PtgElfRw", f: Zm },
  /*::[*/
  3: { n: "PtgElfCol", f: zm },
  /*::[*/
  6: { n: "PtgElfRwV", f: Qm },
  /*::[*/
  7: { n: "PtgElfColV", f: Ym },
  /*::[*/
  10: { n: "PtgElfRadical", f: Km },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: qm },
  /*::[*/
  13: { n: "PtgElfColS", f: jm },
  /*::[*/
  15: { n: "PtgElfColSV", f: $m },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: Jm },
  /*::[*/
  25: { n: "PtgList", f: rg },
  /*::[*/
  29: { n: "PtgSxName", f: tg },
  /*::[*/
  255: {}
}, lg = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: fg },
  /*::[*/
  1: { n: "PtgAttrSemi", f: vm },
  /*::[*/
  2: { n: "PtgAttrIf", f: dm },
  /*::[*/
  4: { n: "PtgAttrChoose", f: hm },
  /*::[*/
  8: { n: "PtgAttrGoto", f: xm },
  /*::[*/
  16: { n: "PtgAttrSum", f: ym },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: rc },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: rc },
  /*::[*/
  64: { n: "PtgAttrSpace", f: mm },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: gm },
  /*::[*/
  128: { n: "PtgAttrIfError", f: pm },
  /*::[*/
  255: {}
};
function ri(e, t, r, a) {
  if (a.biff < 8)
    return Pr(e, t);
  for (var n = e.l + t, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        r[s][1] = Rm(e, 0, a), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        r[s][2] = Nm(e, r[s][1], a), i.push(r[s][2]);
        break;
      case "PtgExp":
        a && a.biff == 12 && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return t = n - e.l, t !== 0 && i.push(Pr(e, t)), i;
}
function ti(e, t, r) {
  for (var a = e.l + t, n, i, s = []; a != e.l; )
    t = a - e.l, i = e[e.l], n = tc[i] || tc[cg[i]], (i === 24 || i === 25) && (n = (i === 24 ? og : lg)[e[e.l + 1]]), !n || !n.f ? Pr(e, t) : s.push([n.n, n.f(e, t, r)]);
  return s;
}
function ug(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var a = e[r], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      if (s)
        switch (s[0]) {
          case 2:
            n.push('"' + s[1].replace(/"/g, '""') + '"');
            break;
          default:
            n.push(s[1]);
        }
      else
        n.push("");
    }
    t.push(n.join(","));
  }
  return t.join(";");
}
var hg = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function xg(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function vl(e, t, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t]))
    return e.SheetNames[t];
  if (!e.XTI)
    return "SH33TJSERR6";
  var a = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!a)
    return "SH33TJSERR1";
  var n = "";
  if (r.biff > 8)
    switch (e[a[0]][0]) {
      case 357:
        return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[a[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[a[0]][0];
    }
  switch (e[a[0]][0][0]) {
    case 1025:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 14849:
      return e[a[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    default:
      return e[a[0]][0][3] ? (n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2";
  }
}
function ac(e, t, r) {
  var a = vl(e, t, r);
  return a == "#REF" ? a : xg(a, r);
}
function Dr(e, t, r, a, n) {
  var i = n && n.biff || 8, s = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  ), f = [], c, o, l, u = 0, h = 0, d, p = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var x = -1, v = "", _ = 0, T = e[0].length; _ < T; ++_) {
    var g = e[0][_];
    switch (g[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (c = f.pop(), o = f.pop(), x >= 0) {
          switch (e[0][x][1][0]) {
            case 0:
              v = tr(" ", e[0][x][1][1]);
              break;
            case 1:
              v = tr("\r", e[0][x][1][1]);
              break;
            default:
              if (v = "", n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          o = o + v, x = -1;
        }
        f.push(o + hg[g[0]] + c);
        break;
      case "PtgIsect":
        c = f.pop(), o = f.pop(), f.push(o + " " + c);
        break;
      case "PtgUnion":
        c = f.pop(), o = f.pop(), f.push(o + "," + c);
        break;
      case "PtgRange":
        c = f.pop(), o = f.pop(), f.push(o + ":" + c);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        l = Fn(g[1][1], s, n), f.push(An(l, i));
        break;
      case "PtgRefN":
        l = r ? Fn(g[1][1], r, n) : g[1][1], f.push(An(l, i));
        break;
      case "PtgRef3d":
        u = /*::Number(*/
        g[1][1], l = Fn(g[1][2], s, n), p = ac(a, u, n), f.push(p + "!" + An(l, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var D = g[1][0], P = g[1][1];
        D || (D = 0), D &= 127;
        var O = D == 0 ? [] : f.slice(-D);
        f.length -= D, P === "User" && (P = O.shift()), f.push(P + "(" + O.join(",") + ")");
        break;
      case "PtgBool":
        f.push(g[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(
          /*::String(*/
          g[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        f.push(String(g[1]));
        break;
      case "PtgStr":
        f.push('"' + g[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        f.push(
          /*::String(*/
          g[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = If(g[1][1], r ? { s: r } : s, n), f.push(g0(d, n));
        break;
      case "PtgArea":
        d = If(g[1][1], s, n), f.push(g0(d, n));
        break;
      case "PtgArea3d":
        u = /*::Number(*/
        g[1][1], d = g[1][2], p = ac(a, u, n), f.push(p + "!" + g0(d, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        h = g[1][2];
        var k = (a.names || [])[h - 1] || (a[0] || [])[h], I = k ? k.Name : "SH33TJSNAME" + String(h);
        I && I.slice(0, 6) == "_xlfn." && !n.xlfn && (I = I.slice(6)), f.push(I);
        break;
      case "PtgNameX":
        var b = g[1][1];
        h = g[1][2];
        var G;
        if (n.biff <= 5)
          b < 0 && (b = -b), a[b] && (G = a[b][h]);
        else {
          var M = "";
          if (((a[b] || [])[0] || [])[0] == 14849 || (((a[b] || [])[0] || [])[0] == 1025 ? a[b][h] && a[b][h].itab > 0 && (M = a.SheetNames[a[b][h].itab - 1] + "!") : M = a.SheetNames[h - 1] + "!"), a[b] && a[b][h])
            M += a[b][h].Name;
          else if (a[0] && a[0][h])
            M += a[0][h].Name;
          else {
            var B = (vl(a, b, n) || "").split(";;");
            B[h - 1] ? M = B[h - 1] : M += "SH33TJSERRX";
          }
          f.push(M);
          break;
        }
        G || (G = { Name: "SH33TJSERRY" }), f.push(G.Name);
        break;
      case "PtgParen":
        var K = "(", oe = ")";
        if (x >= 0) {
          switch (v = "", e[0][x][1][0]) {
            case 2:
              K = tr(" ", e[0][x][1][1]) + K;
              break;
            case 3:
              K = tr("\r", e[0][x][1][1]) + K;
              break;
            case 4:
              oe = tr(" ", e[0][x][1][1]) + oe;
              break;
            case 5:
              oe = tr("\r", e[0][x][1][1]) + oe;
              break;
            default:
              if (n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          x = -1;
        }
        f.push(K + f.pop() + oe);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        l = { c: g[1][1], r: g[1][0] };
        var ee = { c: r.c, r: r.r };
        if (a.sharedf[ge(l)]) {
          var le = a.sharedf[ge(l)];
          f.push(Dr(le, s, ee, a, n));
        } else {
          var fe = !1;
          for (c = 0; c != a.arrayf.length; ++c)
            if (o = a.arrayf[c], !(l.c < o[0].s.c || l.c > o[0].e.c) && !(l.r < o[0].s.r || l.r > o[0].e.r)) {
              f.push(Dr(o[1], s, ee, a, n)), fe = !0;
              break;
            }
          fe || f.push(
            /*::String(*/
            g[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        f.push("{" + ug(
          /*::(*/
          g[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        x = _;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + g[1].idx + "[#" + g[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(g));
      default:
        throw new Error("Unrecognized Formula Token: " + String(g));
    }
    var De = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && x >= 0 && De.indexOf(e[0][_][0]) == -1) {
      g = e[0][x];
      var V = !0;
      switch (g[1][0]) {
        case 4:
          V = !1;
        case 0:
          v = tr(" ", g[1][1]);
          break;
        case 5:
          V = !1;
        case 1:
          v = tr("\r", g[1][1]);
          break;
        default:
          if (v = "", n.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + g[1][0]);
      }
      f.push((V ? v : "") + f.pop() + (V ? "" : v)), x = -1;
    }
  }
  if (f.length > 1 && n.WTF)
    throw new Error("bad formula stack");
  return f[0];
}
function dg(e, t, r) {
  var a = e.l + t, n = r.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535)
    return [[], Pr(e, t - 2)];
  var f = ti(e, s, r);
  return t !== s + n && (i = ri(e, t - s - n, f, r)), e.l = a, [f, i];
}
function pg(e, t, r) {
  var a = e.l + t, n = r.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535)
    return [[], Pr(e, t - 2)];
  var f = ti(e, s, r);
  return t !== s + n && (i = ri(e, t - s - n, f, r)), e.l = a, [f, i];
}
function vg(e, t, r, a) {
  var n = e.l + t, i = ti(e, a, r), s;
  return n !== e.l && (s = ri(e, n - e.l, i, r)), [i, s];
}
function mg(e, t, r) {
  var a = e.l + t, n, i = e.read_shift(2), s = ti(e, i, r);
  return i == 65535 ? [[], Pr(e, t - 2)] : (t !== i + 2 && (n = ri(e, a - i - 2, s, r)), [s, n]);
}
function gg(e) {
  var t;
  if (Pt(e, e.l + 6) !== 65535)
    return [Ir(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return t = e[e.l + 2] === 1, e.l += 8, [t, "b"];
    case 2:
      return t = e[e.l + 2], e.l += 8, [t, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function _g(e) {
  if (e == null) {
    var t = z(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number")
    return Ta(e);
  return Ta(0);
}
function k0(e, t, r) {
  var a = e.l + t, n = Ot(e);
  r.biff == 2 && ++e.l;
  var i = gg(e), s = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var f = pg(e, a - e.l, r);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function wg(e, t, r, a, n) {
  var i = Sa(t, r, n), s = _g(e.v), f = z(6), c = 33;
  f.write_shift(2, c), f.write_shift(4, 0);
  for (var o = z(e.bf.length), l = 0; l < e.bf.length; ++l)
    o[l] = e.bf[l];
  var u = wr([i, s, f, o]);
  return u;
}
function Qi(e, t, r) {
  var a = e.read_shift(4), n = ti(e, a, r), i = e.read_shift(4), s = i > 0 ? ri(e, i, n, r) : null;
  return [n, s];
}
var Eg = Qi, e0 = Qi, Tg = Qi, kg = Qi, Sg = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, ml = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, yg = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function nc(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(t, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Fg(e) {
  var t = "of:=" + e.replace(Ds, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function S0(e) {
  var t = e.split(":"), r = t[0].split(".")[0];
  return [r, t[0].split(".")[1] + (t.length > 1 ? ":" + (t[1].split(".")[1] || t[1].split(".")[0]) : "")];
}
function Ag(e) {
  return e.replace(/\./, "!");
}
var bn = {}, Za = {}, Dn = typeof Map < "u";
function Ns(e, t, r) {
  var a = 0, n = e.length;
  if (r) {
    if (Dn ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var i = Dn ? r.get(t) : r[t]; a < i.length; ++a)
        if (e[i[a]].t === t)
          return e.Count++, i[a];
    }
  } else
    for (; a < n; ++a)
      if (e[a].t === t)
        return e.Count++, a;
  return e[n] = { t }, e.Count++, e.Unique++, r && (Dn ? (r.has(t) || r.set(t, []), r.get(t).push(n)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(n))), n;
}
function r0(e, t) {
  var r = { min: e + 1, max: e + 1 }, a = -1;
  return t.MDW && (Or = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? a = Vn(t.wpx) : t.wch != null && (a = t.wch), a > -1 ? (r.width = Hi(a), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function ga(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    t == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function ca(e, t, r) {
  var a = r.revssf[t.z != null ? t.z : "General"], n = 60, i = e.length;
  if (a == null && r.ssf) {
    for (; n < 392; ++n)
      if (r.ssf[n] == null) {
        At(t.z, n), r.ssf[n] = t.z, r.revssf[t.z] = a = n;
        break;
      }
  }
  for (n = 0; n != i; ++n)
    if (e[n].numFmtId === a)
      return n;
  return e[i] = {
    numFmtId: a,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, i;
}
function gl(e, t, r, a, n, i) {
  try {
    a.cellNF && (e.z = pe[t]);
  } catch (f) {
    if (a.WTF)
      throw f;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = Ke(e.v)), (!a || a.cellText !== !1) && e.t !== "z")
      try {
        if (pe[t] == null && At(Sh[t] || "General", t), e.t === "e")
          e.w = e.w || Xt[e.v];
        else if (t === 0)
          if (e.t === "n")
            (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Pn(e.v);
          else if (e.t === "d") {
            var s = mr(e.v);
            (s | 0) === s ? e.w = s.toString(10) : e.w = Pn(s);
          } else {
            if (e.v === void 0)
              return "";
            e.w = wa(e.v, Za);
          }
        else
          e.t === "d" ? e.w = rt(t, mr(e.v), Za) : e.w = rt(t, e.v, Za);
      } catch (f) {
        if (a.WTF)
          throw f;
      }
    if (a.cellStyles && r != null)
      try {
        e.s = i.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = Wi(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = Wi(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (f) {
        if (a.WTF && i.Fills)
          throw f;
      }
  }
}
function Cg(e, t, r) {
  if (e && e["!ref"]) {
    var a = Ne(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r)
      throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function bg(e, t) {
  var r = Ne(t);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = Se(r));
}
var Dg = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, Og = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, Ig = /<(?:\w:)?hyperlink [^>]*>/mg, Ng = /"(\w*:\w*)"/, Rg = /<(?:\w:)?col\b[^>]*[\/]?>/g, Pg = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, Bg = /<(?:\w:)?pageMargins[^>]*\/>/g, _l = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, Lg = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, Mg = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function Ug(e, t, r, a, n, i, s) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var f = t.dense ? [] : {}, c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, o = "", l = "", u = e.match(Og);
  u ? (o = e.slice(0, u.index), l = e.slice(u.index + u[0].length)) : o = l = e;
  var h = o.match(_l);
  h ? Rs(h[0], f, n, r) : (h = o.match(Lg)) && Hg(h[0], h[1] || "", f, n, r);
  var d = (o.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var p = o.slice(d, d + 50).match(Ng);
    p && bg(f, p[1]);
  }
  var x = o.match(Mg);
  x && x[1] && e2(x[1], n);
  var v = [];
  if (t.cellStyles) {
    var _ = o.match(Rg);
    _ && Kg(v, _);
  }
  u && a2(u[1], f, t, c, i, s);
  var T = l.match(Pg);
  T && (f["!autofilter"] = qg(T[0]));
  var g = [], D = l.match(Dg);
  if (D)
    for (d = 0; d != D.length; ++d)
      g[d] = Ne(D[d].slice(D[d].indexOf('"') + 1));
  var P = l.match(Ig);
  P && jg(f, P, a);
  var O = l.match(Bg);
  if (O && (f["!margins"] = $g(Ee(O[0]))), !f["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r && (f["!ref"] = Se(c)), t.sheetRows > 0 && f["!ref"]) {
    var k = Ne(f["!ref"]);
    t.sheetRows <= +k.e.r && (k.e.r = t.sheetRows - 1, k.e.r > c.e.r && (k.e.r = c.e.r), k.e.r < k.s.r && (k.s.r = k.e.r), k.e.c > c.e.c && (k.e.c = c.e.c), k.e.c < k.s.c && (k.s.c = k.e.c), f["!fullref"] = f["!ref"], f["!ref"] = Se(k));
  }
  return v.length > 0 && (f["!cols"] = v), g.length > 0 && (f["!merges"] = g), f;
}
function Wg(e) {
  if (e.length === 0)
    return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r)
    t += '<mergeCell ref="' + Se(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function Rs(e, t, r, a) {
  var n = Ee(e);
  r.Sheets[a] || (r.Sheets[a] = {}), n.codeName && (r.Sheets[a].CodeName = Le(Xe(n.codeName)));
}
function Hg(e, t, r, a, n) {
  Rs(e.slice(0, e.indexOf(">")), r, a, n);
}
function Vg(e, t, r, a, n) {
  var i = !1, s = {}, f = null;
  if (a.bookType !== "xlsx" && t.vbaraw) {
    var c = t.SheetNames[r];
    try {
      t.Workbook && (c = t.Workbook.Sheets[r].CodeName || c);
    } catch {
    }
    i = !0, s.codeName = yt(Ve(c));
  }
  if (e && e["!outline"]) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (o.summaryBelow = 0), e["!outline"].left && (o.summaryRight = 0), f = (f || "") + ne("outlinePr", null, o);
  }
  !i && !f || (n[n.length] = ne("sheetPr", f, s));
}
var Xg = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], Gg = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function zg(e) {
  var t = { sheet: 1 };
  return Xg.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), Gg.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = As(e.password).toString(16).toUpperCase()), ne("sheetProtection", null, t);
}
function jg(e, t, r) {
  for (var a = Array.isArray(e), n = 0; n != t.length; ++n) {
    var i = Ee(Xe(t[n]), !0);
    if (!i.ref)
      return;
    var s = ((r || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Le(i.location))) : (i.Target = "#" + Le(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Ne(i.ref), c = f.s.r; c <= f.e.r; ++c)
      for (var o = f.s.c; o <= f.e.c; ++o) {
        var l = ge({ c: o, r: c });
        a ? (e[c] || (e[c] = []), e[c][o] || (e[c][o] = { t: "z", v: void 0 }), e[c][o].l = i) : (e[l] || (e[l] = { t: "z", v: void 0 }), e[l].l = i);
      }
  }
}
function $g(e) {
  var t = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (t[r] = parseFloat(e[r]));
  }), t;
}
function Yg(e) {
  return ga(e), ne("pageMargins", null, e);
}
function Kg(e, t) {
  for (var r = !1, a = 0; a != t.length; ++a) {
    var n = Ee(t[a], !0);
    n.hidden && (n.hidden = $e(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !r && n.width && (r = !0, Cs(n.width)), aa(n); i <= s; )
      e[i++] = ze(n);
  }
}
function Jg(e, t) {
  for (var r = ["<cols>"], a, n = 0; n != t.length; ++n)
    (a = t[n]) && (r[r.length] = ne("col", null, r0(n, a)));
  return r[r.length] = "</cols>", r.join("");
}
function qg(e) {
  var t = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return t;
}
function Zg(e, t, r, a) {
  var n = typeof e.ref == "string" ? e.ref : Se(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var i = r.Workbook.Names, s = Hr(n);
  s.s.r == s.e.r && (s.e.r = Hr(t["!ref"]).e.r, n = Se(s));
  for (var f = 0; f < i.length; ++f) {
    var c = i[f];
    if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == a) {
      c.Ref = "'" + r.SheetNames[a] + "'!" + n;
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + r.SheetNames[a] + "'!" + n }), ne("autoFilter", null, { ref: n });
}
var Qg = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function e2(e, t) {
  t.Views || (t.Views = [{}]), (e.match(Qg) || []).forEach(function(r, a) {
    var n = Ee(r);
    t.Views[a] || (t.Views[a] = {}), +n.zoomScale && (t.Views[a].zoom = +n.zoomScale), $e(n.rightToLeft) && (t.Views[a].RTL = !0);
  });
}
function r2(e, t, r, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), ne("sheetViews", ne("sheetView", null, n), {});
}
function t2(e, t, r, a) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f)
    return "";
  var n = "", i = e.t, s = e.v;
  if (e.t !== "z")
    switch (e.t) {
      case "b":
        n = e.v ? "1" : "0";
        break;
      case "n":
        n = "" + e.v;
        break;
      case "e":
        n = Xt[e.v];
        break;
      case "d":
        a && a.cellDates ? n = Ke(e.v, -1).toISOString() : (e = ze(e), e.t = "n", n = "" + (e.v = mr(Ke(e.v)))), typeof e.z > "u" && (e.z = pe[14]);
        break;
      default:
        n = e.v;
        break;
    }
  var f = yr("v", Ve(n)), c = { r: t }, o = ca(a.cellXfs, e, a);
  switch (o !== 0 && (c.s = o), e.t) {
    case "n":
      break;
    case "d":
      c.t = "d";
      break;
    case "b":
      c.t = "b";
      break;
    case "e":
      c.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767)
        throw new Error("Text length must not exceed 32767 characters");
      if (a && a.bookSST) {
        f = yr("v", "" + Ns(a.Strings, e.v, a.revStrings)), c.t = "s";
        break;
      }
      c.t = "str";
      break;
  }
  if (e.t != i && (e.t = i, e.v = s), typeof e.f == "string" && e.f) {
    var l = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    f = ne("f", Ve(e.f), l) + (e.v != null ? f : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (c.cm = 1), ne("c", f, c);
}
var a2 = /* @__PURE__ */ function() {
  var e = /<(?:\w+:)?c[ \/>]/, t = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, a = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, n = /ref=["']([^"']*)["']/, i = Bn("v"), s = Bn("f");
  return function(c, o, l, u, h, d) {
    for (var p = 0, x = "", v = [], _ = [], T = 0, g = 0, D = 0, P = "", O, k, I = 0, b = 0, G, M, B = 0, K = 0, oe = Array.isArray(d.CellXf), ee, le = [], fe = [], De = Array.isArray(o), V = [], ve = {}, me = !1, A = !!l.sheetStubs, L = c.split(t), N = 0, R = L.length; N != R; ++N) {
      x = L[N].trim();
      var Y = x.length;
      if (Y !== 0) {
        var te = 0;
        e:
          for (p = 0; p < Y; ++p)
            switch (
              /*x.charCodeAt(ri)*/
              x[p]
            ) {
              case ">":
                if (
                  /*x.charCodeAt(ri-1) != 47*/
                  x[p - 1] != "/"
                ) {
                  ++p;
                  break e;
                }
                if (l && l.cellStyles) {
                  if (k = Ee(x.slice(te, p), !0), I = k.r != null ? parseInt(k.r, 10) : I + 1, b = -1, l.sheetRows && l.sheetRows < I)
                    continue;
                  ve = {}, me = !1, k.ht && (me = !0, ve.hpt = parseFloat(k.ht), ve.hpx = tn(ve.hpt)), k.hidden == "1" && (me = !0, ve.hidden = !0), k.outlineLevel != null && (me = !0, ve.level = +k.outlineLevel), me && (V[I - 1] = ve);
                }
                break;
              case "<":
                te = p;
                break;
            }
        if (te >= p)
          break;
        if (k = Ee(x.slice(te, p), !0), I = k.r != null ? parseInt(k.r, 10) : I + 1, b = -1, !(l.sheetRows && l.sheetRows < I)) {
          u.s.r > I - 1 && (u.s.r = I - 1), u.e.r < I - 1 && (u.e.r = I - 1), l && l.cellStyles && (ve = {}, me = !1, k.ht && (me = !0, ve.hpt = parseFloat(k.ht), ve.hpx = tn(ve.hpt)), k.hidden == "1" && (me = !0, ve.hidden = !0), k.outlineLevel != null && (me = !0, ve.level = +k.outlineLevel), me && (V[I - 1] = ve)), v = x.slice(p).split(e);
          for (var ae = 0; ae != v.length && v[ae].trim().charAt(0) == "<"; ++ae)
            ;
          for (v = v.slice(ae), p = 0; p != v.length; ++p)
            if (x = v[p].trim(), x.length !== 0) {
              if (_ = x.match(r), T = p, g = 0, D = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, _ != null && _.length === 2) {
                for (T = 0, P = _[1], g = 0; g != P.length && !((D = P.charCodeAt(g) - 64) < 1 || D > 26); ++g)
                  T = 26 * T + D;
                --T, b = T;
              } else
                ++b;
              for (g = 0; g != x.length && x.charCodeAt(g) !== 62; ++g)
                ;
              if (++g, k = Ee(x.slice(0, g), !0), k.r || (k.r = ge({ r: I - 1, c: b })), P = x.slice(g), O = { t: "" }, (_ = P.match(i)) != null && /*::cref != null && */
              _[1] !== "" && (O.v = Le(_[1])), l.cellFormula) {
                if ((_ = P.match(s)) != null && /*::cref != null && */
                _[1] !== "") {
                  if (O.f = Le(Xe(_[1])).replace(/\r\n/g, `
`), l.xlfn || (O.f = ec(O.f)), /*::cref != null && cref[0] != null && */
                  _[0].indexOf('t="array"') > -1)
                    O.F = (P.match(n) || [])[1], O.F.indexOf(":") > -1 && le.push([Ne(O.F), O.F]);
                  else if (
                    /*::cref != null && cref[0] != null && */
                    _[0].indexOf('t="shared"') > -1
                  ) {
                    M = Ee(_[0]);
                    var Q = Le(Xe(_[1]));
                    l.xlfn || (Q = ec(Q)), fe[parseInt(M.si, 10)] = [M, Q, k.r];
                  }
                } else
                  (_ = P.match(/<f[^>]*\/>/)) && (M = Ee(_[0]), fe[M.si] && (O.f = Qv(fe[M.si][1], fe[M.si][2], k.r)));
                var q = er(k.r);
                for (g = 0; g < le.length; ++g)
                  q.r >= le[g][0].s.r && q.r <= le[g][0].e.r && q.c >= le[g][0].s.c && q.c <= le[g][0].e.c && (O.F = le[g][1]);
              }
              if (k.t == null && O.v === void 0)
                if (O.f || O.F)
                  O.v = 0, O.t = "n";
                else if (A)
                  O.t = "z";
                else
                  continue;
              else
                O.t = k.t || "n";
              switch (u.s.c > b && (u.s.c = b), u.e.c < b && (u.e.c = b), O.t) {
                case "n":
                  if (O.v == "" || O.v == null) {
                    if (!A)
                      continue;
                    O.t = "z";
                  } else
                    O.v = parseFloat(O.v);
                  break;
                case "s":
                  if (typeof O.v > "u") {
                    if (!A)
                      continue;
                    O.t = "z";
                  } else
                    G = bn[parseInt(O.v, 10)], O.v = G.t, O.r = G.r, l.cellHTML && (O.h = G.h);
                  break;
                case "str":
                  O.t = "s", O.v = O.v != null ? Xe(O.v) : "", l.cellHTML && (O.h = cs(O.v));
                  break;
                case "inlineStr":
                  _ = P.match(a), O.t = "s", _ != null && (G = Fs(_[1])) ? (O.v = G.t, l.cellHTML && (O.h = G.h)) : O.v = "";
                  break;
                case "b":
                  O.v = $e(O.v);
                  break;
                case "d":
                  l.cellDates ? O.v = Ke(O.v, 1) : (O.v = mr(Ke(O.v, 1)), O.t = "n");
                  break;
                case "e":
                  (!l || l.cellText !== !1) && (O.w = O.v), O.v = Eo[O.v];
                  break;
              }
              if (B = K = 0, ee = null, oe && k.s !== void 0 && (ee = d.CellXf[k.s], ee != null && (ee.numFmtId != null && (B = ee.numFmtId), l.cellStyles && ee.fillId != null && (K = ee.fillId))), gl(O, B, K, l, h, d), l.cellDates && oe && O.t == "n" && Fa(pe[B]) && (O.t = "d", O.v = Ji(O.v)), k.cm && l.xlmeta) {
                var Fe = (l.xlmeta.Cell || [])[+k.cm - 1];
                Fe && Fe.type == "XLDAPR" && (O.D = !0);
              }
              if (De) {
                var C = er(k.r);
                o[C.r] || (o[C.r] = []), o[C.r][C.c] = O;
              } else
                o[k.r] = O;
            }
        }
      }
    }
    V.length > 0 && (o["!rows"] = V);
  };
}();
function n2(e, t, r, a) {
  var n = [], i = [], s = Ne(e["!ref"]), f = "", c, o = "", l = [], u = 0, h = 0, d = e["!rows"], p = Array.isArray(e), x = { r: o }, v, _ = -1;
  for (h = s.s.c; h <= s.e.c; ++h)
    l[h] = Ye(h);
  for (u = s.s.r; u <= s.e.r; ++u) {
    for (i = [], o = ar(u), h = s.s.c; h <= s.e.c; ++h) {
      c = l[h] + o;
      var T = p ? (e[u] || [])[h] : e[c];
      T !== void 0 && (f = t2(T, c, e, t)) != null && i.push(f);
    }
    (i.length > 0 || d && d[u]) && (x = { r: o }, d && d[u] && (v = d[u], v.hidden && (x.hidden = 1), _ = -1, v.hpx ? _ = Xn(v.hpx) : v.hpt && (_ = v.hpt), _ > -1 && (x.ht = _, x.customHeight = 1), v.level && (x.outlineLevel = v.level)), n[n.length] = ne("row", i.join(""), x));
  }
  if (d)
    for (; u < d.length; ++u)
      d && d[u] && (x = { r: u + 1 }, v = d[u], v.hidden && (x.hidden = 1), _ = -1, v.hpx ? _ = Xn(v.hpx) : v.hpt && (_ = v.hpt), _ > -1 && (x.ht = _, x.customHeight = 1), v.level && (x.outlineLevel = v.level), n[n.length] = ne("row", "", x));
  return n.join("");
}
function wl(e, t, r, a) {
  var n = [or, ne("worksheet", null, {
    xmlns: Aa[0],
    "xmlns:r": vr.r
  })], i = r.SheetNames[e], s = 0, f = "", c = r.Sheets[i];
  c == null && (c = {});
  var o = c["!ref"] || "A1", l = Ne(o);
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + o + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575), o = Se(l);
  }
  a || (a = {}), c["!comments"] = [];
  var u = [];
  Vg(c, r, e, t, n), n[n.length] = ne("dimension", null, { ref: o }), n[n.length] = r2(c, t, e, r), t.sheetFormat && (n[n.length] = ne("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), c["!cols"] != null && c["!cols"].length > 0 && (n[n.length] = Jg(c, c["!cols"])), n[s = n.length] = "<sheetData/>", c["!links"] = [], c["!ref"] != null && (f = n2(c, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), c["!protect"] && (n[n.length] = zg(c["!protect"])), c["!autofilter"] != null && (n[n.length] = Zg(c["!autofilter"], c, r, e)), c["!merges"] != null && c["!merges"].length > 0 && (n[n.length] = Wg(c["!merges"]));
  var h = -1, d, p = -1;
  return (
    /*::(*/
    c["!links"].length > 0 && (n[n.length] = "<hyperlinks>", c["!links"].forEach(function(x) {
      x[1].Target && (d = { ref: x[0] }, x[1].Target.charAt(0) != "#" && (p = He(a, -1, Ve(x[1].Target).replace(/#.*$/, ""), be.HLINK), d["r:id"] = "rId" + p), (h = x[1].Target.indexOf("#")) > -1 && (d.location = Ve(x[1].Target.slice(h + 1))), x[1].Tooltip && (d.tooltip = Ve(x[1].Tooltip)), n[n.length] = ne("hyperlink", null, d));
    }), n[n.length] = "</hyperlinks>"), delete c["!links"], c["!margins"] != null && (n[n.length] = Yg(c["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (n[n.length] = yr("ignoredErrors", ne("ignoredError", null, { numberStoredAsText: 1, sqref: o }))), u.length > 0 && (p = He(a, -1, "../drawings/drawing" + (e + 1) + ".xml", be.DRAW), n[n.length] = ne("drawing", null, { "r:id": "rId" + p }), c["!drawing"] = u), c["!comments"].length > 0 && (p = He(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", be.VML), n[n.length] = ne("legacyDrawing", null, { "r:id": "rId" + p }), c["!legacy"] = p), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("")
  );
}
function i2(e, t) {
  var r = {}, a = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = n / 20), r;
}
function s2(e, t, r) {
  var a = z(145), n = (r["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = Xn(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, c = a.l;
  a.l += 4;
  for (var o = { r: e, c: 0 }, l = 0; l < 16; ++l)
    if (!(t.s.c > l + 1 << 10 || t.e.c < l << 10)) {
      for (var u = -1, h = -1, d = l << 10; d < l + 1 << 10; ++d) {
        o.c = d;
        var p = Array.isArray(r) ? (r[o.r] || [])[o.c] : r[ge(o)];
        p && (u < 0 && (u = d), h = d);
      }
      u < 0 || (++f, a.write_shift(4, u), a.write_shift(4, h));
    }
  var x = a.l;
  return a.l = c, a.write_shift(4, f), a.l = x, a.length > a.l ? a.slice(0, a.l) : a;
}
function f2(e, t, r, a) {
  var n = s2(a, r, t);
  (n.length > 17 || (t["!rows"] || [])[a]) && J(e, 0, n);
}
var c2 = Oa, o2 = fn;
function l2() {
}
function u2(e, t) {
  var r = {}, a = e[e.l];
  return ++e.l, r.above = !(a & 64), r.left = !(a & 128), e.l += 18, r.name = d1(e), r;
}
function h2(e, t, r) {
  r == null && (r = z(84 + 4 * e.length));
  var a = 192;
  t && (t.above && (a &= -65), t.left && (a &= -129)), r.write_shift(1, a);
  for (var n = 1; n < 3; ++n)
    r.write_shift(1, 0);
  return Li({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), vo(e, r), r.slice(0, r.l);
}
function x2(e) {
  var t = xt(e);
  return [t];
}
function d2(e, t, r) {
  return r == null && (r = z(8)), Ca(t, r);
}
function p2(e) {
  var t = ba(e);
  return [t];
}
function v2(e, t, r) {
  return r == null && (r = z(4)), Da(t, r);
}
function m2(e) {
  var t = xt(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function g2(e, t, r) {
  return r == null && (r = z(9)), Ca(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function _2(e) {
  var t = ba(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function w2(e, t, r) {
  return r == null && (r = z(5)), Da(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function E2(e) {
  var t = xt(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function T2(e, t, r) {
  return r == null && (r = z(9)), Ca(t, r), r.write_shift(1, e.v), r;
}
function k2(e) {
  var t = ba(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function S2(e, t, r) {
  return r == null && (r = z(8)), Da(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function y2(e) {
  var t = xt(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function F2(e, t, r) {
  return r == null && (r = z(12)), Ca(t, r), r.write_shift(4, t.v), r;
}
function A2(e) {
  var t = ba(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function C2(e, t, r) {
  return r == null && (r = z(8)), Da(t, r), r.write_shift(4, t.v), r;
}
function b2(e) {
  var t = xt(e), r = Ir(e);
  return [t, r, "n"];
}
function D2(e, t, r) {
  return r == null && (r = z(16)), Ca(t, r), Ta(e.v, r), r;
}
function El(e) {
  var t = ba(e), r = Ir(e);
  return [t, r, "n"];
}
function O2(e, t, r) {
  return r == null && (r = z(12)), Da(t, r), Ta(e.v, r), r;
}
function I2(e) {
  var t = xt(e), r = Es(e);
  return [t, r, "n"];
}
function N2(e, t, r) {
  return r == null && (r = z(12)), Ca(t, r), mo(e.v, r), r;
}
function R2(e) {
  var t = ba(e), r = Es(e);
  return [t, r, "n"];
}
function P2(e, t, r) {
  return r == null && (r = z(8)), Da(t, r), mo(e.v, r), r;
}
function B2(e) {
  var t = xt(e), r = gs(e);
  return [t, r, "is"];
}
function L2(e) {
  var t = xt(e), r = Rr(e);
  return [t, r, "str"];
}
function M2(e, t, r) {
  return r == null && (r = z(12 + 4 * e.v.length)), Ca(t, r), Er(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function U2(e) {
  var t = ba(e), r = Rr(e);
  return [t, r, "str"];
}
function W2(e, t, r) {
  return r == null && (r = z(8 + 4 * e.v.length)), Da(t, r), Er(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function H2(e, t, r) {
  var a = e.l + t, n = xt(e);
  n.r = r["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var f = e0(e, a - e.l, r);
    s[3] = Dr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
function V2(e, t, r) {
  var a = e.l + t, n = xt(e);
  n.r = r["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var f = e0(e, a - e.l, r);
    s[3] = Dr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
function X2(e, t, r) {
  var a = e.l + t, n = xt(e);
  n.r = r["!row"];
  var i = Ir(e), s = [n, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var f = e0(e, a - e.l, r);
    s[3] = Dr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
function G2(e, t, r) {
  var a = e.l + t, n = xt(e);
  n.r = r["!row"];
  var i = Rr(e), s = [n, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var f = e0(e, a - e.l, r);
    s[3] = Dr(f, null, n, r.supbooks, r);
  } else
    e.l = a;
  return s;
}
var z2 = Oa, j2 = fn;
function $2(e, t) {
  return t == null && (t = z(4)), t.write_shift(4, e), t;
}
function Y2(e, t) {
  var r = e.l + t, a = Oa(e), n = _s(e), i = Rr(e), s = Rr(e), f = Rr(e);
  e.l = r;
  var c = { rfx: a, relId: n, loc: i, display: f };
  return s && (c.Tooltip = s), c;
}
function K2(e, t) {
  var r = z(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  fn({ s: er(e[0]), e: er(e[0]) }, r), ws("rId" + t, r);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return Er(n || "", r), Er(e[1].Tooltip || "", r), Er("", r), r.slice(0, r.l);
}
function J2() {
}
function q2(e, t, r) {
  var a = e.l + t, n = go(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, r.cellFormula) {
    var f = Eg(e, a - e.l, r);
    s[1] = f;
  } else
    e.l = a;
  return s;
}
function Z2(e, t, r) {
  var a = e.l + t, n = Oa(e), i = [n];
  if (r.cellFormula) {
    var s = kg(e, a - e.l, r);
    i[1] = s, e.l = a;
  } else
    e.l = a;
  return i;
}
function Q2(e, t, r) {
  r == null && (r = z(18));
  var a = r0(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (a.width || 10) * 256), r.write_shift(
    4,
    0
    /*ixfe*/
  );
  var n = 0;
  return t.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), t.level && (n |= t.level << 8), r.write_shift(2, n), r;
}
var Tl = ["left", "right", "top", "bottom", "header", "footer"];
function e_(e) {
  var t = {};
  return Tl.forEach(function(r) {
    t[r] = Ir(e);
  }), t;
}
function r_(e, t) {
  return t == null && (t = z(6 * 8)), ga(e), Tl.forEach(function(r) {
    Ta(e[r], t);
  }), t;
}
function t_(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function a_(e, t, r) {
  r == null && (r = z(30));
  var a = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (a |= 32), r.write_shift(2, a), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function n_(e) {
  var t = z(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), fn(e, t), t;
}
function i_(e, t) {
  return t == null && (t = z(16 * 4 + 2)), t.write_shift(2, e.password ? As(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function s_() {
}
function f_() {
}
function c_(e, t, r, a, n, i, s) {
  if (!e)
    return e;
  var f = t || {};
  a || (a = { "!id": {} });
  var c = f.dense ? [] : {}, o, l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = !1, h = !1, d, p, x, v, _, T, g, D, P, O = [];
  f.biff = 12, f["!row"] = 0;
  var k = 0, I = !1, b = [], G = {}, M = f.supbooks || /*::(*/
  n.supbooks || [[]];
  if (M.sharedf = G, M.arrayf = b, M.SheetNames = n.SheetNames || n.Sheets.map(function(De) {
    return De.name;
  }), !f.supbooks && (f.supbooks = M, n.Names))
    for (var B = 0; B < n.Names.length; ++B)
      M[0][B + 1] = n.Names[B];
  var K = [], oe = [], ee = !1;
  Gn[16] = { n: "BrtShortReal", f: El };
  var le;
  if (Vt(e, function(V, ve, me) {
    if (!h)
      switch (me) {
        case 148:
          o = V;
          break;
        case 0:
          d = V, f.sheetRows && f.sheetRows <= d.r && (h = !0), D = ar(v = d.r), f["!row"] = d.r, (V.hidden || V.hpt || V.level != null) && (V.hpt && (V.hpx = tn(V.hpt)), oe[V.r] = V);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 62:
          switch (p = { t: V[2] }, V[2]) {
            case "n":
              p.v = V[1];
              break;
            case "s":
              g = bn[V[1]], p.v = g.t, p.r = g.r;
              break;
            case "b":
              p.v = !!V[1];
              break;
            case "e":
              p.v = V[1], f.cellText !== !1 && (p.w = Xt[p.v]);
              break;
            case "str":
              p.t = "s", p.v = V[1];
              break;
            case "is":
              p.t = "s", p.v = V[1].t;
              break;
          }
          if ((x = s.CellXf[V[0].iStyleRef]) && gl(p, x.numFmtId, null, f, i, s), _ = V[0].c == -1 ? _ + 1 : V[0].c, f.dense ? (c[v] || (c[v] = []), c[v][_] = p) : c[Ye(_) + D] = p, f.cellFormula) {
            for (I = !1, k = 0; k < b.length; ++k) {
              var A = b[k];
              d.r >= A[0].s.r && d.r <= A[0].e.r && _ >= A[0].s.c && _ <= A[0].e.c && (p.F = Se(A[0]), I = !0);
            }
            !I && V.length > 3 && (p.f = V[3]);
          }
          if (l.s.r > d.r && (l.s.r = d.r), l.s.c > _ && (l.s.c = _), l.e.r < d.r && (l.e.r = d.r), l.e.c < _ && (l.e.c = _), f.cellDates && x && p.t == "n" && Fa(pe[x.numFmtId])) {
            var L = Qt(p.v);
            L && (p.t = "d", p.v = new Date(L.y, L.m - 1, L.d, L.H, L.M, L.S, L.u));
          }
          le && (le.type == "XLDAPR" && (p.D = !0), le = void 0);
          break;
        case 1:
        case 12:
          if (!f.sheetStubs || u)
            break;
          p = { t: "z", v: void 0 }, _ = V[0].c == -1 ? _ + 1 : V[0].c, f.dense ? (c[v] || (c[v] = []), c[v][_] = p) : c[Ye(_) + D] = p, l.s.r > d.r && (l.s.r = d.r), l.s.c > _ && (l.s.c = _), l.e.r < d.r && (l.e.r = d.r), l.e.c < _ && (l.e.c = _), le && (le.type == "XLDAPR" && (p.D = !0), le = void 0);
          break;
        case 176:
          O.push(V);
          break;
        case 49:
          le = ((f.xlmeta || {}).Cell || [])[V - 1];
          break;
        case 494:
          var N = a["!id"][V.relId];
          for (N ? (V.Target = N.Target, V.loc && (V.Target += "#" + V.loc), V.Rel = N) : V.relId == "" && (V.Target = "#" + V.loc), v = V.rfx.s.r; v <= V.rfx.e.r; ++v)
            for (_ = V.rfx.s.c; _ <= V.rfx.e.c; ++_)
              f.dense ? (c[v] || (c[v] = []), c[v][_] || (c[v][_] = { t: "z", v: void 0 }), c[v][_].l = V) : (T = ge({ c: _, r: v }), c[T] || (c[T] = { t: "z", v: void 0 }), c[T].l = V);
          break;
        case 426:
          if (!f.cellFormula)
            break;
          b.push(V), P = f.dense ? c[v][_] : c[Ye(_) + D], P.f = Dr(V[1], l, { r: d.r, c: _ }, M, f), P.F = Se(V[0]);
          break;
        case 427:
          if (!f.cellFormula)
            break;
          G[ge(V[0].s)] = V[1], P = f.dense ? c[v][_] : c[Ye(_) + D], P.f = Dr(V[1], l, { r: d.r, c: _ }, M, f);
          break;
        case 60:
          if (!f.cellStyles)
            break;
          for (; V.e >= V.s; )
            K[V.e--] = { width: V.w / 256, hidden: !!(V.flags & 1), level: V.level }, ee || (ee = !0, Cs(V.w / 256)), aa(K[V.e + 1]);
          break;
        case 161:
          c["!autofilter"] = { ref: Se(V) };
          break;
        case 476:
          c["!margins"] = V;
          break;
        case 147:
          n.Sheets[r] || (n.Sheets[r] = {}), V.name && (n.Sheets[r].CodeName = V.name), (V.above || V.left) && (c["!outline"] = { above: V.above, left: V.left });
          break;
        case 137:
          n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), V.RTL && (n.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        case 1053:
          break;
        case 151:
          break;
        case 152:
        case 175:
        case 644:
        case 625:
        case 562:
        case 396:
        case 1112:
        case 1146:
        case 471:
        case 1050:
        case 649:
        case 1105:
        case 589:
        case 607:
        case 564:
        case 1055:
        case 168:
        case 174:
        case 1180:
        case 499:
        case 507:
        case 550:
        case 171:
        case 167:
        case 1177:
        case 169:
        case 1181:
        case 551:
        case 552:
        case 661:
        case 639:
        case 478:
        case 537:
        case 477:
        case 536:
        case 1103:
        case 680:
        case 1104:
        case 1024:
        case 663:
        case 535:
        case 678:
        case 504:
        case 1043:
        case 428:
        case 170:
        case 3072:
        case 50:
        case 2070:
        case 1045:
          break;
        case 35:
          u = !0;
          break;
        case 36:
          u = !1;
          break;
        case 37:
          u = !0;
          break;
        case 38:
          u = !1;
          break;
        default:
          if (!ve.T) {
            if (!u || f.WTF)
              throw new Error("Unexpected record 0x" + me.toString(16));
          }
      }
  }, f), delete f.supbooks, delete f["!row"], !c["!ref"] && (l.s.r < 2e6 || o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0)) && (c["!ref"] = Se(o || l)), f.sheetRows && c["!ref"]) {
    var fe = Ne(c["!ref"]);
    f.sheetRows <= +fe.e.r && (fe.e.r = f.sheetRows - 1, fe.e.r > l.e.r && (fe.e.r = l.e.r), fe.e.r < fe.s.r && (fe.s.r = fe.e.r), fe.e.c > l.e.c && (fe.e.c = l.e.c), fe.e.c < fe.s.c && (fe.s.c = fe.e.c), c["!fullref"] = c["!ref"], c["!ref"] = Se(fe));
  }
  return O.length > 0 && (c["!merges"] = O), K.length > 0 && (c["!cols"] = K), oe.length > 0 && (c["!rows"] = oe), c;
}
function o_(e, t, r, a, n, i, s) {
  if (t.v === void 0)
    return !1;
  var f = "";
  switch (t.t) {
    case "b":
      f = t.v ? "1" : "0";
      break;
    case "d":
      t = ze(t), t.z = t.z || pe[14], t.v = mr(Ke(t.v)), t.t = "n";
      break;
    case "n":
    case "e":
      f = "" + t.v;
      break;
    default:
      f = t.v;
      break;
  }
  var c = { r, c: a };
  switch (c.s = ca(n.cellXfs, t, n), t.l && i["!links"].push([ge(c), t.l]), t.c && i["!comments"].push([ge(c), t.c]), t.t) {
    case "s":
    case "str":
      return n.bookSST ? (f = Ns(n.Strings, t.v, n.revStrings), c.t = "s", c.v = f, s ? J(e, 18, C2(t, c)) : J(e, 7, F2(t, c))) : (c.t = "str", s ? J(e, 17, W2(t, c)) : J(e, 6, M2(t, c))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? s ? J(e, 13, P2(t, c)) : J(e, 2, N2(t, c)) : s ? J(e, 16, O2(t, c)) : J(e, 5, D2(t, c)), !0;
    case "b":
      return c.t = "b", s ? J(e, 15, w2(t, c)) : J(e, 4, g2(t, c)), !0;
    case "e":
      return c.t = "e", s ? J(e, 14, S2(t, c)) : J(e, 3, T2(t, c)), !0;
  }
  return s ? J(e, 12, v2(t, c)) : J(e, 1, d2(t, c)), !0;
}
function l_(e, t, r, a) {
  var n = Ne(t["!ref"] || "A1"), i, s = "", f = [];
  J(
    e,
    145
    /* BrtBeginSheetData */
  );
  var c = Array.isArray(t), o = n.e.r;
  t["!rows"] && (o = Math.max(n.e.r, t["!rows"].length - 1));
  for (var l = n.s.r; l <= o; ++l) {
    s = ar(l), f2(e, t, n, l);
    var u = !1;
    if (l <= n.e.r)
      for (var h = n.s.c; h <= n.e.c; ++h) {
        l === n.s.r && (f[h] = Ye(h)), i = f[h] + s;
        var d = c ? (t[l] || [])[h] : t[i];
        if (!d) {
          u = !1;
          continue;
        }
        u = o_(e, d, l, h, a, t, u);
      }
  }
  J(
    e,
    146
    /* BrtEndSheetData */
  );
}
function u_(e, t) {
  !t || !t["!merges"] || (J(e, 177, $2(t["!merges"].length)), t["!merges"].forEach(function(r) {
    J(e, 176, j2(r));
  }), J(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function h_(e, t) {
  !t || !t["!cols"] || (J(
    e,
    390
    /* BrtBeginColInfos */
  ), t["!cols"].forEach(function(r, a) {
    r && J(e, 60, Q2(a, r));
  }), J(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function x_(e, t) {
  !t || !t["!ref"] || (J(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), J(e, 649, n_(Ne(t["!ref"]))), J(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function d_(e, t, r) {
  t["!links"].forEach(function(a) {
    if (a[1].Target) {
      var n = He(r, -1, a[1].Target.replace(/#.*$/, ""), be.HLINK);
      J(e, 494, K2(a, n));
    }
  }), delete t["!links"];
}
function p_(e, t, r, a) {
  if (t["!comments"].length > 0) {
    var n = He(a, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", be.VML);
    J(e, 551, ws("rId" + n)), t["!legacy"] = n;
  }
}
function v_(e, t, r, a) {
  if (t["!autofilter"]) {
    var n = t["!autofilter"], i = typeof n.ref == "string" ? n.ref : Se(n.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var s = r.Workbook.Names, f = Hr(i);
    f.s.r == f.e.r && (f.e.r = Hr(t["!ref"]).e.r, i = Se(f));
    for (var c = 0; c < s.length; ++c) {
      var o = s[c];
      if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == a) {
        o.Ref = "'" + r.SheetNames[a] + "'!" + i;
        break;
      }
    }
    c == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + r.SheetNames[a] + "'!" + i }), J(e, 161, fn(Ne(i))), J(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function m_(e, t, r) {
  J(
    e,
    133
    /* BrtBeginWsViews */
  ), J(e, 137, a_(t, r)), J(
    e,
    138
    /* BrtEndWsView */
  ), J(
    e,
    134
    /* BrtEndWsViews */
  );
}
function g_(e, t) {
  t["!protect"] && J(e, 535, i_(t["!protect"]));
}
function __(e, t, r, a) {
  var n = zr(), i = r.SheetNames[e], s = r.Sheets[i] || {}, f = i;
  try {
    r && r.Workbook && (f = r.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var c = Ne(s["!ref"] || "A1");
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (t.WTF)
      throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], J(
    n,
    129
    /* BrtBeginSheet */
  ), (r.vbaraw || s["!outline"]) && J(n, 147, h2(f, s["!outline"])), J(n, 148, o2(c)), m_(n, s, r.Workbook), h_(n, s), l_(n, s, e, t), g_(n, s), v_(n, s, r, e), u_(n, s), d_(n, s, a), s["!margins"] && J(n, 476, r_(s["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && x_(n, s), p_(n, s, e, a), J(
    n,
    130
    /* BrtEndSheet */
  ), n.end();
}
function w_(e) {
  var t = [], r = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    s && (t[+s[1]] = r ? +s[2] : s[2]);
  });
  var n = Le((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(i) {
    a = i.replace(/<.*?>/g, "");
  }), [t, n, a];
}
function E_(e, t, r, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e)
    return i;
  var f = 0, c = 0, o = "A", l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(u) {
    var h = w_(u);
    l.s.r = l.s.c = 0, l.e.c = f, o = Ye(f), h[0].forEach(function(d, p) {
      s[o + ar(p)] = { t: "n", v: d, z: h[1] }, c = p;
    }), l.e.r < c && (l.e.r = c), ++f;
  }), f > 0 && (s["!ref"] = Se(l)), s;
}
function T_(e, t, r, a, n) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(_l);
  return f && Rs(f[0], i, n, r), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function k_(e, t) {
  e.l += 10;
  var r = Rr(e);
  return { name: r };
}
function S_(e, t, r, a, n) {
  if (!e)
    return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = !1;
  return Vt(e, function(c, o, l) {
    switch (l) {
      case 550:
        i["!rel"] = c;
        break;
      case 651:
        n.Sheets[r] || (n.Sheets[r] = {}), c.name && (n.Sheets[r].CodeName = c.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(o.T > 0)) {
          if (!(o.T < 0)) {
            if (!s || t.WTF)
              throw new Error("Unexpected record 0x" + l.toString(16));
          }
        }
    }
  }, t), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
var Ps = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], y_ = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
], F_ = [
  //['state', 'visible']
], A_ = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function ic(e, t) {
  for (var r = 0; r != e.length; ++r)
    for (var a = e[r], n = 0; n != t.length; ++n) {
      var i = t[n];
      if (a[i[0]] == null)
        a[i[0]] = i[1];
      else
        switch (i[2]) {
          case "bool":
            typeof a[i[0]] == "string" && (a[i[0]] = $e(a[i[0]]));
            break;
          case "int":
            typeof a[i[0]] == "string" && (a[i[0]] = parseInt(a[i[0]], 10));
            break;
        }
    }
}
function sc(e, t) {
  for (var r = 0; r != t.length; ++r) {
    var a = t[r];
    if (e[a[0]] == null)
      e[a[0]] = a[1];
    else
      switch (a[2]) {
        case "bool":
          typeof e[a[0]] == "string" && (e[a[0]] = $e(e[a[0]]));
          break;
        case "int":
          typeof e[a[0]] == "string" && (e[a[0]] = parseInt(e[a[0]], 10));
          break;
      }
  }
}
function kl(e) {
  sc(e.WBProps, Ps), sc(e.CalcPr, A_), ic(e.WBView, y_), ic(e.Sheets, F_), Za.date1904 = $e(e.WBProps.date1904);
}
function C_(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : $e(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var b_ = /* @__PURE__ */ "][*?/\\".split("");
function Sl(e, t) {
  if (e.length > 31) {
    if (t)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return b_.forEach(function(a) {
    if (e.indexOf(a) != -1) {
      if (!t)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
function D_(e, t, r) {
  e.forEach(function(a, n) {
    Sl(a);
    for (var i = 0; i < n; ++i)
      if (a == e[i])
        throw new Error("Duplicate Sheet Name: " + a);
    if (r) {
      var s = t && t[n] && t[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22)
        throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function yl(e) {
  if (!e || !e.SheetNames || !e.Sheets)
    throw new Error("Invalid Workbook");
  if (!e.SheetNames.length)
    throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  D_(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r)
    Cg(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
var O_ = /<\w+:workbook/;
function I_(e, t) {
  if (!e)
    throw new Error("Could not find file");
  var r = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  ), a = !1, n = "xmlns", i = {}, s = 0;
  if (e.replace(Br, function(c, o) {
    var l = Ee(c);
    switch (Dt(l[0])) {
      case "<?xml":
        break;
      case "<workbook":
        c.match(O_) && (n = "xmlns" + c.match(/<(\w+):/)[1]), r.xmlns = l[n];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete l[0], r.AppVersion = l;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        Ps.forEach(function(u) {
          if (l[u[0]] != null)
            switch (u[2]) {
              case "bool":
                r.WBProps[u[0]] = $e(l[u[0]]);
                break;
              case "int":
                r.WBProps[u[0]] = parseInt(l[u[0]], 10);
                break;
              default:
                r.WBProps[u[0]] = l[u[0]];
            }
        }), l.codeName && (r.WBProps.CodeName = Xe(l.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete l[0], r.WBView.push(l);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (l.state) {
          case "hidden":
            l.Hidden = 1;
            break;
          case "veryHidden":
            l.Hidden = 2;
            break;
          default:
            l.Hidden = 0;
        }
        delete l.state, l.name = Le(Xe(l.name)), delete l[0], r.Sheets.push(l);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        a = !0;
        break;
      case "</definedNames>":
        a = !1;
        break;
      case "<definedName":
        i = {}, i.Name = Xe(l.name), l.comment && (i.Comment = l.comment), l.localSheetId && (i.Sheet = +l.localSheetId), $e(l.hidden || "0") && (i.Hidden = !0), s = o + c.length;
        break;
      case "</definedName>":
        i.Ref = Le(Xe(e.slice(s, o))), r.Names.push(i);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete l[0], r.CalcPr = l;
        break;
      case "<calcPr/>":
        delete l[0], r.CalcPr = l;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        a = !0;
        break;
      case "</AlternateContent>":
        a = !1;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!a && t.WTF)
          throw new Error("unrecognized " + l[0] + " in workbook");
    }
    return c;
  }), Aa.indexOf(r.xmlns) === -1)
    throw new Error("Unknown Namespace: " + r.xmlns);
  return kl(r), r;
}
function Fl(e) {
  var t = [or];
  t[t.length] = ne("workbook", null, {
    xmlns: Aa[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": vr.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (Ps.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), t[t.length] = ne("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (n && n[0] && n[0].Hidden) {
    for (t[t.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i)
      ;
    i == e.SheetNames.length && (i = 0), t[t.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: Ve(e.SheetNames[i].slice(0, 31)) };
    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), n[i])
      switch (n[i].Hidden) {
        case 1:
          s.state = "hidden";
          break;
        case 2:
          s.state = "veryHidden";
          break;
      }
    t[t.length] = ne("sheet", null, s);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
    var c = { name: f.Name };
    f.Comment && (c.comment = f.Comment), f.Sheet != null && (c.localSheetId = "" + f.Sheet), f.Hidden && (c.hidden = "1"), f.Ref && (t[t.length] = ne("definedName", Ve(f.Ref), c));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function N_(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = H0(e), r.name = Rr(e), r;
}
function R_(e, t) {
  return t || (t = z(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), ws(e.strRelID, t), Er(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function P_(e, t) {
  var r = {}, a = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var n = t > 8 ? Rr(e) : "";
  return n.length > 0 && (r.CodeName = n), r.autoCompressPictures = !!(a & 65536), r.backupFile = !!(a & 64), r.checkCompatibility = !!(a & 4096), r.date1904 = !!(a & 1), r.filterPrivacy = !!(a & 8), r.hidePivotFieldList = !!(a & 1024), r.promptedSolutions = !!(a & 16), r.publishItems = !!(a & 2048), r.refreshAllConnections = !!(a & 262144), r.saveExternalLinkValues = !!(a & 128), r.showBorderUnselectedTables = !!(a & 4), r.showInkAnnotation = !!(a & 32), r.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], r.showPivotChartFilter = !!(a & 32768), r.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], r;
}
function B_(e, t) {
  t || (t = z(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), vo(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function L_(e, t) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += t - 8, r;
}
function M_(e, t, r) {
  var a = e.l + t;
  e.l += 4, e.l += 1;
  var n = e.read_shift(4), i = p1(e), s = Tg(e, 0, r), f = _s(e);
  e.l = a;
  var c = { Name: i, Ptg: s };
  return n < 268435455 && (c.Sheet = n), f && (c.Comment = f), c;
}
function U_(e, t) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = !1;
  t || (t = {}), t.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], Gn[16] = { n: "BrtFRTArchID$", f: L_ }, Vt(e, function(c, o, l) {
    switch (l) {
      case 156:
        s.SheetNames.push(c.name), r.Sheets.push(c);
        break;
      case 153:
        r.WBProps = c;
        break;
      case 39:
        c.Sheet != null && (t.SID = c.Sheet), c.Ref = Dr(c.Ptg, null, null, s, t), delete t.SID, delete c.Ptg, i.push(c);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        s[0].length ? s.push([l, c]) : s[0] = [l, c], s[s.length - 1].XTI = [];
        break;
      case 362:
        s.length === 0 && (s[0] = [], s[0].XTI = []), s[s.length - 1].XTI = s[s.length - 1].XTI.concat(c), s.XTI = s.XTI.concat(c);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        a.push(l), n = !0;
        break;
      case 36:
        a.pop(), n = !1;
        break;
      case 37:
        a.push(l), n = !0;
        break;
      case 38:
        a.pop(), n = !1;
        break;
      case 16:
        break;
      default:
        if (!o.T) {
          if (!n || t.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, t), kl(r), r.Names = i, r.supbooks = s, r;
}
function W_(e, t) {
  J(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var a = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, n = { Hidden: a, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    J(e, 156, R_(n));
  }
  J(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function H_(e, t) {
  t || (t = z(127));
  for (var r = 0; r != 4; ++r)
    t.write_shift(4, 0);
  return Er("SheetJS", t), Er(Nn.version, t), Er(Nn.version, t), Er("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function V_(e, t) {
  t || (t = z(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function X_(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, a = 0, n = -1, i = -1; a < r.length; ++a)
      !r[a] || !r[a].Hidden && n == -1 ? n = a : r[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (J(
      e,
      135
      /* BrtBeginBookViews */
    ), J(e, 158, V_(n)), J(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function G_(e, t) {
  var r = zr();
  return J(
    r,
    131
    /* BrtBeginBook */
  ), J(r, 128, H_()), J(r, 153, B_(e.Workbook && e.Workbook.WBProps || null)), X_(r, e), W_(r, e), J(
    r,
    132
    /* BrtEndBook */
  ), r.end();
}
function z_(e, t, r) {
  return t.slice(-4) === ".bin" ? U_(e, r) : I_(e, r);
}
function j_(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? c_(e, a, r, n, i, s, f) : Ug(e, a, r, n, i, s, f);
}
function $_(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? S_(e, a, r, n, i) : T_(e, a, r, n, i);
}
function Y_(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? qv() : Zv();
}
function K_(e, t, r, a, n, i, s, f) {
  return t.slice(-4) === ".bin" ? Kv() : Jv();
}
function J_(e, t, r, a) {
  return t.slice(-4) === ".bin" ? jp(e, r, a) : Rp(e, r, a);
}
function q_(e, t, r) {
  return il(e, r);
}
function Z_(e, t, r) {
  return t.slice(-4) === ".bin" ? Qd(e, r) : Jd(e, r);
}
function Q_(e, t, r) {
  return t.slice(-4) === ".bin" ? Gv(e, r) : Pv(e, r);
}
function ew(e, t, r) {
  return t.slice(-4) === ".bin" ? Iv(e) : Dv(e);
}
function rw(e, t, r, a) {
  return r.slice(-4) === ".bin" ? Nv(e, t, r, a) : void 0;
}
function tw(e, t, r) {
  return t.slice(-4) === ".bin" ? Av(e, t, r) : bv(e, t, r);
}
function aw(e, t, r) {
  return (t.slice(-4) === ".bin" ? G_ : Fl)(e);
}
function nw(e, t, r, a, n) {
  return (t.slice(-4) === ".bin" ? __ : wl)(e, r, a, n);
}
function iw(e, t, r) {
  return (t.slice(-4) === ".bin" ? tv : al)(e, r);
}
function sw(e, t, r) {
  return (t.slice(-4) === ".bin" ? tp : Ko)(e, r);
}
function fw(e, t, r) {
  return (t.slice(-4) === ".bin" ? zv : cl)(e);
}
function cw(e) {
  return (e.slice(-4) === ".bin" ? Cv : sl)();
}
var Al = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, Cl = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function pt(e, t) {
  var r = e.split(/\s+/), a = [];
  if (t || (a[0] = r[0]), r.length === 1)
    return a;
  var n = e.match(Al), i, s, f, c;
  if (n)
    for (c = 0; c != n.length; ++c)
      i = n[c].match(Cl), (s = i[1].indexOf(":")) === -1 ? a[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), a[f] = i[2].slice(1, i[2].length - 1));
  return a;
}
function ow(e) {
  var t = e.split(/\s+/), r = {};
  if (t.length === 1)
    return r;
  var a = e.match(Al), n, i, s, f;
  if (a)
    for (f = 0; f != a.length; ++f)
      n = a[f].match(Cl), (i = n[1].indexOf(":")) === -1 ? r[n[1]] = n[2].slice(1, n[2].length - 1) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), r[s] = n[2].slice(1, n[2].length - 1));
  return r;
}
var On;
function lw(e, t) {
  var r = On[e] || Le(e);
  return r === "General" ? wa(t) : rt(r, t);
}
function uw(e, t, r, a) {
  var n = a;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = $e(a);
      break;
    case "i2":
    case "int":
      n = parseInt(a, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(a);
      break;
    case "date":
    case "dateTime.tz":
      n = Ke(a);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[Le(t)] = n;
}
function hw(e, t, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || Xt[e.v] : t === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Pn(e.v) : e.w = wa(e.v) : e.w = lw(t || "General", e.v);
      } catch (i) {
        if (r.WTF)
          throw i;
      }
    try {
      var a = On[t] || t || "General";
      if (r.cellNF && (e.z = a), r.cellDates && e.t == "n" && Fa(a)) {
        var n = Qt(e.v);
        n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u));
      }
    } catch (i) {
      if (r.WTF)
        throw i;
    }
  }
}
function xw(e, t, r) {
  if (r.cellStyles && t.Interior) {
    var a = t.Interior;
    a.Pattern && (a.patternType = Fp[a.Pattern] || a.Pattern);
  }
  e[t.ID] = t;
}
function dw(e, t, r, a, n, i, s, f, c, o) {
  var l = "General", u = a.StyleID, h = {};
  o = o || {};
  var d = [], p = 0;
  for (u === void 0 && f && (u = f.StyleID), u === void 0 && s && (u = s.StyleID); i[u] !== void 0 && (i[u].nf && (l = i[u].nf), i[u].Interior && d.push(i[u].Interior), !!i[u].Parent); )
    u = i[u].Parent;
  switch (r.Type) {
    case "Boolean":
      a.t = "b", a.v = $e(e);
      break;
    case "String":
      a.t = "s", a.r = kf(Le(e)), a.v = e.indexOf("<") > -1 ? Le(t || e).replace(/<.*?>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = (Ke(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3), a.v !== a.v ? a.v = Le(e) : a.v < 60 && (a.v = a.v - 1), (!l || l == "General") && (l = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = Eo[e], o.cellText !== !1 && (a.w = e);
      break;
    default:
      e == "" && t == "" ? a.t = "z" : (a.t = "s", a.v = kf(t || e));
      break;
  }
  if (hw(a, l, o), o.cellFormula !== !1)
    if (a.Formula) {
      var x = Le(a.Formula);
      x.charCodeAt(0) == 61 && (x = x.slice(1)), a.f = qa(x, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = qa("RC:RC", n) : a.ArrayRange && (a.F = qa(a.ArrayRange, n), c.push([Ne(a.F), a.F]));
    } else
      for (p = 0; p < c.length; ++p)
        n.r >= c[p][0].s.r && n.r <= c[p][0].e.r && n.c >= c[p][0].s.c && n.c <= c[p][0].e.c && (a.F = c[p][1]);
  o.cellStyles && (d.forEach(function(v) {
    !h.patternType && v.patternType && (h.patternType = v.patternType);
  }), a.s = h), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function pw(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function y0(e, t) {
  var r = t || {};
  an();
  var a = za(os(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (typeof Pe < "u" ? a = Pe.utils.decode(65001, Di(a)) : a = Xe(a));
  var n = a.slice(0, 1024).toLowerCase(), i = !1;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = ze(r);
    return s.type = "string", rn.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(sr) {
    n.indexOf("<" + sr) >= 0 && (i = !0);
  }), i)
    return qw(a, r);
  On = {
    "General Number": "General",
    "General Date": pe[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": pe[15],
    "Short Date": pe[14],
    "Long Time": pe[19],
    "Medium Time": pe[18],
    "Short Time": pe[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: pe[2],
    Standard: pe[4],
    Percent: pe[10],
    Scientific: pe[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var f, c = [], o, l = {}, u = [], h = r.dense ? [] : {}, d = "", p = {}, x = {}, v = pt('<Data ss:Type="String">'), _ = 0, T = 0, g = 0, D = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, P = {}, O = {}, k = "", I = 0, b = [], G = {}, M = {}, B = 0, K = [], oe = [], ee = {}, le = [], fe, De = !1, V = [], ve = [], me = {}, A = 0, L = 0, N = { Sheets: [], WBProps: { date1904: !1 } }, R = {};
  Mn.lastIndex = 0, a = a.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var Y = ""; f = Mn.exec(a); )
    switch (f[3] = (Y = f[3]).toLowerCase()) {
      case "data":
        if (Y == "data") {
          if (f[1] === "/") {
            if ((o = c.pop())[0] !== f[3])
              throw new Error("Bad state: " + o.join("|"));
          } else
            f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
          break;
        }
        if (c[c.length - 1][1])
          break;
        f[1] === "/" ? dw(a.slice(_, f.index), k, v, c[c.length - 1][0] == /*"Comment"*/
        "comment" ? ee : p, { c: T, r: g }, P, le[T], x, V, r) : (k = "", v = pt(f[0]), _ = f.index + f[0].length);
        break;
      case "cell":
        if (f[1] === "/")
          if (oe.length > 0 && (p.c = oe), (!r.sheetRows || r.sheetRows > g) && p.v !== void 0 && (r.dense ? (h[g] || (h[g] = []), h[g][T] = p) : h[Ye(T) + ar(g)] = p), p.HRef && (p.l = { Target: Le(p.HRef) }, p.HRefScreenTip && (p.l.Tooltip = p.HRefScreenTip), delete p.HRef, delete p.HRefScreenTip), (p.MergeAcross || p.MergeDown) && (A = T + (parseInt(p.MergeAcross, 10) | 0), L = g + (parseInt(p.MergeDown, 10) | 0), b.push({ s: { c: T, r: g }, e: { c: A, r: L } })), !r.sheetStubs)
            p.MergeAcross ? T = A + 1 : ++T;
          else if (p.MergeAcross || p.MergeDown) {
            for (var te = T; te <= A; ++te)
              for (var ae = g; ae <= L; ++ae)
                (te > T || ae > g) && (r.dense ? (h[ae] || (h[ae] = []), h[ae][te] = { t: "z" }) : h[Ye(te) + ar(ae)] = { t: "z" });
            T = A + 1;
          } else
            ++T;
        else
          p = ow(f[0]), p.Index && (T = +p.Index - 1), T < D.s.c && (D.s.c = T), T > D.e.c && (D.e.c = T), f[0].slice(-2) === "/>" && ++T, oe = [];
        break;
      case "row":
        f[1] === "/" || f[0].slice(-2) === "/>" ? (g < D.s.r && (D.s.r = g), g > D.e.r && (D.e.r = g), f[0].slice(-2) === "/>" && (x = pt(f[0]), x.Index && (g = +x.Index - 1)), T = 0, ++g) : (x = pt(f[0]), x.Index && (g = +x.Index - 1), me = {}, (x.AutoFitHeight == "0" || x.Height) && (me.hpx = parseInt(x.Height, 10), me.hpt = Xn(me.hpx), ve[g] = me), x.Hidden == "1" && (me.hidden = !0, ve[g] = me));
        break;
      case "worksheet":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
          u.push(d), D.s.r <= D.e.r && D.s.c <= D.e.c && (h["!ref"] = Se(D), r.sheetRows && r.sheetRows <= D.e.r && (h["!fullref"] = h["!ref"], D.e.r = r.sheetRows - 1, h["!ref"] = Se(D))), b.length && (h["!merges"] = b), le.length > 0 && (h["!cols"] = le), ve.length > 0 && (h["!rows"] = ve), l[d] = h;
        } else
          D = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, g = T = 0, c.push([f[3], !1]), o = pt(f[0]), d = Le(o.Name), h = r.dense ? [] : {}, b = [], V = [], ve = [], R = { name: d, Hidden: 0 }, N.Sheets.push(R);
        break;
      case "table":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else {
          if (f[0].slice(-2) == "/>")
            break;
          c.push([f[3], !1]), le = [], De = !1;
        }
        break;
      case "style":
        f[1] === "/" ? xw(P, O, r) : O = pt(f[0]);
        break;
      case "numberformat":
        O.nf = Le(pt(f[0]).Format || "General"), On[O.nf] && (O.nf = On[O.nf]);
        for (var Q = 0; Q != 392 && pe[Q] != O.nf; ++Q)
          ;
        if (Q == 392) {
          for (Q = 57; Q != 392; ++Q)
            if (pe[Q] == null) {
              At(O.nf, Q);
              break;
            }
        }
        break;
      case "column":
        if (c[c.length - 1][0] !== /*'Table'*/
        "table")
          break;
        if (fe = pt(f[0]), fe.Hidden && (fe.hidden = !0, delete fe.Hidden), fe.Width && (fe.wpx = parseInt(fe.Width, 10)), !De && fe.wpx > 10) {
          De = !0, Or = rl;
          for (var q = 0; q < le.length; ++q)
            le[q] && aa(le[q]);
        }
        De && aa(fe), le[fe.Index - 1 || le.length] = fe;
        for (var Fe = 0; Fe < +fe.Span; ++Fe)
          le[le.length] = ze(fe);
        break;
      case "namedrange":
        if (f[1] === "/")
          break;
        N.Names || (N.Names = []);
        var C = Ee(f[0]), je = {
          Name: C.Name,
          Ref: qa(C.RefersTo.slice(1), { r: 0, c: 0 })
        };
        N.Sheets.length > 0 && (je.Sheet = N.Sheets.length - 1), N.Names.push(je);
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (f[0].slice(-2) === "/>")
          break;
        f[1] === "/" ? k += a.slice(I, f.index) : I = f.index + f[0].length;
        break;
      case "interior":
        if (!r.cellStyles)
          break;
        O.Interior = pt(f[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (f[0].slice(-2) === "/>")
          break;
        f[1] === "/" ? W1(G, Y, a.slice(B, f.index)) : B = f.index + f[0].length;
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else
          c.push([f[3], !1]);
        break;
      case "comment":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
          pw(ee), oe.push(ee);
        } else
          c.push([f[3], !1]), o = pt(f[0]), ee = { a: o.Author };
        break;
      case "autofilter":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else if (f[0].charAt(f[0].length - 2) !== "/") {
          var Re = pt(f[0]);
          h["!autofilter"] = { ref: qa(Re.Range).replace(/\$/g, "") }, c.push([f[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else
          f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3])
            throw new Error("Bad state: " + o.join("|"));
        } else
          f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
        break;
      case "null":
        break;
      default:
        if (c.length == 0 && f[3] == "document" || c.length == 0 && f[3] == "uof")
          return uc(a, r);
        var Ge = !0;
        switch (c[c.length - 1][0]) {
          case "officedocumentsettings":
            switch (f[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                Ge = !1;
            }
            break;
          case "componentoptions":
            switch (f[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                Ge = !1;
            }
            break;
          case "excelworkbook":
            switch (f[3]) {
              case "date1904":
                N.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                Ge = !1;
            }
            break;
          case "workbookoptions":
            switch (f[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                Ge = !1;
            }
            break;
          case "worksheetoptions":
            switch (f[3]) {
              case "visible":
                if (f[0].slice(-2) !== "/>")
                  if (f[1] === "/")
                    switch (a.slice(B, f.index)) {
                      case "SheetHidden":
                        R.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        R.Hidden = 2;
                        break;
                    }
                  else
                    B = f.index + f[0].length;
                break;
              case "header":
                h["!margins"] || ga(h["!margins"] = {}, "xlml"), isNaN(+Ee(f[0]).Margin) || (h["!margins"].header = +Ee(f[0]).Margin);
                break;
              case "footer":
                h["!margins"] || ga(h["!margins"] = {}, "xlml"), isNaN(+Ee(f[0]).Margin) || (h["!margins"].footer = +Ee(f[0]).Margin);
                break;
              case "pagemargins":
                var Oe = Ee(f[0]);
                h["!margins"] || ga(h["!margins"] = {}, "xlml"), isNaN(+Oe.Top) || (h["!margins"].top = +Oe.Top), isNaN(+Oe.Left) || (h["!margins"].left = +Oe.Left), isNaN(+Oe.Right) || (h["!margins"].right = +Oe.Right), isNaN(+Oe.Bottom) || (h["!margins"].bottom = +Oe.Bottom);
                break;
              case "displayrighttoleft":
                N.Views || (N.Views = []), N.Views[0] || (N.Views[0] = {}), N.Views[0].RTL = !0;
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                h["!outline"] || (h["!outline"] = {}), h["!outline"].above = !0;
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                h["!outline"] || (h["!outline"] = {}), h["!outline"].left = !0;
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                Ge = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (f[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                Ge = !1;
            }
            break;
          case "pagebreaks":
            switch (f[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                Ge = !1;
            }
            break;
          case "autofilter":
            switch (f[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                Ge = !1;
            }
            break;
          case "querytable":
            switch (f[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                Ge = !1;
            }
            break;
          case "datavalidation":
            switch (f[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                Ge = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (f[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                Ge = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (f[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                Ge = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            Ge = !1;
            break;
        }
        if (Ge || f[3].match(/!\[CDATA/))
          break;
        if (!c[c.length - 1][1])
          throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
        if (c[c.length - 1][0] === /*'CustomDocumentProperties'*/
        "customdocumentproperties") {
          if (f[0].slice(-2) === "/>")
            break;
          f[1] === "/" ? uw(M, Y, K, a.slice(B, f.index)) : (K = f, B = f.index + f[0].length);
          break;
        }
        if (r.WTF)
          throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
    }
  var ue = {};
  return !r.bookSheets && !r.bookProps && (ue.Sheets = l), ue.SheetNames = u, ue.Workbook = N, ue.SSF = ze(pe), ue.Props = G, ue.Custprops = M, ue;
}
function Y0(e, t) {
  switch (Ms(t = t || {}), t.type || "base64") {
    case "base64":
      return y0(et(e), t);
    case "binary":
    case "buffer":
    case "file":
      return y0(e, t);
    case "array":
      return y0(sa(e), t);
  }
}
function vw(e, t) {
  var r = [];
  return e.Props && r.push(H1(e.Props, t)), e.Custprops && r.push(V1(e.Props, e.Custprops)), r.join("");
}
function mw() {
  return "";
}
function gw(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(ne("NumberFormat", null, { "ss:Format": Ve(pe[a.numFmtId]) }));
    var s = (
      /*::(*/
      { "ss:ID": "s" + (21 + n) }
    );
    r.push(ne("Style", i.join(""), s));
  }), ne("Styles", r.join(""));
}
function bl(e) {
  return ne("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + Os(e.Ref, { r: 0, c: 0 }) });
}
function _w(e) {
  if (!((e || {}).Workbook || {}).Names)
    return "";
  for (var t = e.Workbook.Names, r = [], a = 0; a < t.length; ++a) {
    var n = t[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || r.push(bl(n)));
  }
  return ne("Names", r.join(""));
}
function ww(e, t, r, a) {
  if (!e || !((a || {}).Workbook || {}).Names)
    return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == r && (f.Name.match(/^_xlfn\./) || i.push(bl(f)));
  }
  return i.join("");
}
function Ew(e, t, r, a) {
  if (!e)
    return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(ne("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(ne("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(ne("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[r])
    if (a.Workbook.Sheets[r].Hidden)
      n.push(ne("Visible", a.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var i = 0; i < r && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i)
        ;
      i == r && n.push("<Selected/>");
    }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(yr("ProtectContents", "True")), e["!protect"].objects && n.push(yr("ProtectObjects", "True")), e["!protect"].scenarios && n.push(yr("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(yr("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(yr("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : ne("WorksheetOptions", n.join(""), { xmlns: Kr.x });
}
function Tw(e) {
  return e.map(function(t) {
    var r = Gh(t.t || ""), a = ne("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return ne("Comment", a, { "ss:Author": t.a });
  }).join("");
}
function kw(e, t, r, a, n, i, s) {
  if (!e || e.v == null && e.f == null)
    return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + Ve(Os(e.f, s))), e.F && e.F.slice(0, t.length) == t) {
    var c = er(e.F.slice(t.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (c.r == s.r ? "" : "[" + (c.r - s.r) + "]") + "C" + (c.c == s.c ? "" : "[" + (c.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = Ve(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = Ve(e.l.Tooltip))), r["!merges"])
    for (var o = r["!merges"], l = 0; l != o.length; ++l)
      o[l].s.c != s.c || o[l].s.r != s.r || (o[l].e.c > o[l].s.c && (f["ss:MergeAcross"] = o[l].e.c - o[l].s.c), o[l].e.r > o[l].s.r && (f["ss:MergeDown"] = o[l].e.r - o[l].s.r));
  var u = "", h = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs)
        return "";
      break;
    case "n":
      u = "Number", h = String(e.v);
      break;
    case "b":
      u = "Boolean", h = e.v ? "1" : "0";
      break;
    case "e":
      u = "Error", h = Xt[e.v];
      break;
    case "d":
      u = "DateTime", h = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || pe[14]);
      break;
    case "s":
      u = "String", h = Xh(e.v || "");
      break;
  }
  var d = ca(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + d), f["ss:Index"] = s.c + 1;
  var p = e.v != null ? h : "", x = e.t == "z" ? "" : '<Data ss:Type="' + u + '">' + p + "</Data>";
  return (e.c || []).length > 0 && (x += Tw(e.c)), ne("Cell", x, f);
}
function Sw(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = tn(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function yw(e, t, r, a) {
  if (!e["!ref"])
    return "";
  var n = Ne(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(v, _) {
    aa(v);
    var T = !!v.width, g = r0(_, v), D = { "ss:Index": _ + 1 };
    T && (D["ss:Width"] = Hn(g.width)), v.hidden && (D["ss:Hidden"] = "1"), f.push(ne("Column", null, D));
  });
  for (var c = Array.isArray(e), o = n.s.r; o <= n.e.r; ++o) {
    for (var l = [Sw(o, (e["!rows"] || [])[o])], u = n.s.c; u <= n.e.c; ++u) {
      var h = !1;
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > u) && !(i[s].s.r > o) && !(i[s].e.c < u) && !(i[s].e.r < o)) {
          (i[s].s.c != u || i[s].s.r != o) && (h = !0);
          break;
        }
      if (!h) {
        var d = { r: o, c: u }, p = ge(d), x = c ? (e[o] || [])[u] : e[p];
        l.push(kw(x, p, e, t, r, a, d));
      }
    }
    l.push("</Row>"), l.length > 2 && f.push(l.join(""));
  }
  return f.join("");
}
function Fw(e, t, r) {
  var a = [], n = r.SheetNames[e], i = r.Sheets[n], s = i ? ww(i, t, e, r) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? yw(i, t, e, r) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(Ew(i, t, e, r)), a.join("");
}
function Aw(e, t) {
  t || (t = {}), e.SSF || (e.SSF = ze(pe)), e.SSF && (an(), Jn(e.SSF), t.revssf = Ki(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], ca(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(vw(e, t)), r.push(mw()), r.push(""), r.push("");
  for (var a = 0; a < e.SheetNames.length; ++a)
    r.push(ne("Worksheet", Fw(a, t, e), { "ss:Name": Ve(e.SheetNames[a]) }));
  return r[2] = gw(e, t), r[3] = _w(e), or + ne("Workbook", r.join(""), {
    xmlns: Kr.ss,
    "xmlns:o": Kr.o,
    "xmlns:x": Kr.x,
    "xmlns:ss": Kr.ss,
    "xmlns:dt": Kr.dt,
    "xmlns:html": Kr.html
  });
}
function Cw(e) {
  var t = {}, r = e.content;
  if (r.l = 28, t.AnsiUserType = r.read_shift(0, "lpstr-ansi"), t.AnsiClipboardFormat = w1(r), r.length - r.l <= 4)
    return t;
  var a = r.read_shift(4);
  if (a == 0 || a > 40 || (r.l -= 4, t.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (a = r.read_shift(4), a !== 1907505652) || (t.UnicodeClipboardFormat = E1(r), a = r.read_shift(4), a == 0 || a > 40))
    return t;
  r.l -= 4, t.Reserved2 = r.read_shift(0, "lpwstr");
}
var bw = [60, 1084, 2066, 2165, 2175];
function Dw(e, t, r, a, n) {
  var i = a, s = [], f = r.slice(r.l, r.l + i);
  if (n && n.enc && n.enc.insitu && f.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        n.enc.insitu(f);
    }
  s.push(f), r.l += i;
  for (var c = Pt(r, r.l), o = K0[c], l = 0; o != null && bw.indexOf(c) > -1; )
    i = Pt(r, r.l + 2), l = r.l + 4, c == 2066 ? l += 4 : (c == 2165 || c == 2175) && (l += 12), f = r.slice(l, r.l + 4 + i), s.push(f), r.l += 4 + i, o = K0[c = Pt(r, r.l)];
  var u = wr(s);
  Sr(u, 0);
  var h = 0;
  u.lens = [];
  for (var d = 0; d < s.length; ++d)
    u.lens.push(h), h += s[d].length;
  if (u.length < a)
    throw "XLS Record 0x" + e.toString(16) + " Truncated: " + u.length + " < " + a;
  return t.f(u, u.length, n);
}
function Et(e, t, r) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, t.cellNF && (e.z = pe[a]);
    } catch (i) {
      if (t.WTF)
        throw i;
    }
    if (!t || t.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || Xt[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Pn(e.v) : e.w = wa(e.v) : e.w = rt(a, e.v, { date1904: !!r, dateNF: t && t.dateNF });
      } catch (i) {
        if (t.WTF)
          throw i;
      }
    if (t.cellDates && a && e.t == "n" && Fa(pe[a] || String(a))) {
      var n = Qt(e.v);
      n && (e.t = "d", e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u));
    }
  }
}
function mi(e, t, r) {
  return { v: e, ixfe: t, t: r };
}
function Ow(e, t) {
  var r = { opts: {} }, a = {}, n = t.dense ? [] : {}, i = {}, s = {}, f = null, c = [], o = "", l = {}, u, h = "", d, p, x, v, _ = {}, T = [], g, D, P = [], O = [], k = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, I = {}, b = function(Ce) {
    return Ce < 8 ? pa[Ce] : Ce < 64 && O[Ce - 8] || pa[Ce];
  }, G = function(Ce, fr, at) {
    var dr = fr.XF.data;
    if (!(!dr || !dr.patternType || !at || !at.cellStyles)) {
      fr.s = {}, fr.s.patternType = dr.patternType;
      var oa;
      (oa = Wn(b(dr.icvFore))) && (fr.s.fgColor = { rgb: oa }), (oa = Wn(b(dr.icvBack))) && (fr.s.bgColor = { rgb: oa });
    }
  }, M = function(Ce, fr, at) {
    if (!(me > 1) && !(at.sheetRows && Ce.r >= at.sheetRows)) {
      if (at.cellStyles && fr.XF && fr.XF.data && G(Ce, fr, at), delete fr.ixfe, delete fr.XF, u = Ce, h = ge(Ce), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), Ce.r < s.s.r && (s.s.r = Ce.r), Ce.c < s.s.c && (s.s.c = Ce.c), Ce.r + 1 > s.e.r && (s.e.r = Ce.r + 1), Ce.c + 1 > s.e.c && (s.e.c = Ce.c + 1), at.cellFormula && fr.f) {
        for (var dr = 0; dr < T.length; ++dr)
          if (!(T[dr][0].s.c > Ce.c || T[dr][0].s.r > Ce.r) && !(T[dr][0].e.c < Ce.c || T[dr][0].e.r < Ce.r)) {
            fr.F = Se(T[dr][0]), (T[dr][0].s.c != Ce.c || T[dr][0].s.r != Ce.r) && delete fr.f, fr.f && (fr.f = "" + Dr(T[dr][1], s, Ce, V, B));
            break;
          }
      }
      at.dense ? (n[Ce.r] || (n[Ce.r] = []), n[Ce.r][Ce.c] = fr) : n[h] = fr;
    }
  }, B = {
    enc: !1,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf: _,
    // shared formulae by address
    arrayf: T,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!t && !!t.cellStyles,
    WTF: !!t && !!t.wtf
  };
  t.password && (B.password = t.password);
  var K, oe = [], ee = [], le = [], fe = [], De = !1, V = [];
  V.SheetNames = B.snames, V.sharedf = B.sharedf, V.arrayf = B.arrayf, V.names = [], V.XTI = [];
  var ve = 0, me = 0, A = 0, L = [], N = [], R;
  B.codepage = 1200, ut(1200);
  for (var Y = !1; e.l < e.length - 1; ) {
    var te = e.l, ae = e.read_shift(2);
    if (ae === 0 && ve === 10)
      break;
    var Q = e.l === e.length ? 0 : e.read_shift(2), q = K0[ae];
    if (q && q.f) {
      if (t.bookSheets && ve === 133 && ae !== 133)
        break;
      if (ve = ae, q.r === 2 || q.r == 12) {
        var Fe = e.read_shift(2);
        if (Q -= 2, !B.enc && Fe !== ae && ((Fe & 255) << 8 | Fe >> 8) !== ae)
          throw new Error("rt mismatch: " + Fe + "!=" + ae);
        q.r == 12 && (e.l += 10, Q -= 10);
      }
      var C = {};
      if (ae === 10 ? C = /*::(*/
      q.f(e, Q, B) : C = /*::(*/
      Dw(ae, q, e, Q, B), me == 0 && [9, 521, 1033, 2057].indexOf(ve) === -1)
        continue;
      switch (ae) {
        case 34:
          r.opts.Date1904 = k.WBProps.date1904 = C;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if (B.enc || (e.l = 0), B.enc = C, !t.password)
            throw new Error("File is password-protected");
          if (C.valid == null)
            throw new Error("Encryption scheme unsupported");
          if (!C.valid)
            throw new Error("Password is incorrect");
          break;
        case 92:
          B.lastuser = C;
          break;
        case 66:
          var je = Number(C);
          switch (je) {
            case 21010:
              je = 1200;
              break;
            case 32768:
              je = 1e4;
              break;
            case 32769:
              je = 1252;
              break;
          }
          ut(B.codepage = je), Y = !0;
          break;
        case 317:
          B.rrtabid = C;
          break;
        case 25:
          B.winlocked = C;
          break;
        case 439:
          r.opts.RefreshAll = C;
          break;
        case 12:
          r.opts.CalcCount = C;
          break;
        case 16:
          r.opts.CalcDelta = C;
          break;
        case 17:
          r.opts.CalcIter = C;
          break;
        case 13:
          r.opts.CalcMode = C;
          break;
        case 14:
          r.opts.CalcPrecision = C;
          break;
        case 95:
          r.opts.CalcSaveRecalc = C;
          break;
        case 15:
          B.CalcRefMode = C;
          break;
        case 2211:
          r.opts.FullCalc = C;
          break;
        case 129:
          C.fDialog && (n["!type"] = "dialog"), C.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = !0), C.fRight || ((n["!outline"] || (n["!outline"] = {})).left = !0);
          break;
        case 224:
          P.push(C);
          break;
        case 430:
          V.push([C]), V[V.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          V[V.length - 1].push(C);
          break;
        case 24:
        case 536:
          R = {
            Name: C.Name,
            Ref: Dr(C.rgce, s, null, V, B)
          }, C.itab > 0 && (R.Sheet = C.itab - 1), V.names.push(R), V[0] || (V[0] = [], V[0].XTI = []), V[V.length - 1].push(C), C.Name == "_xlnm._FilterDatabase" && C.itab > 0 && C.rgce && C.rgce[0] && C.rgce[0][0] && C.rgce[0][0][0] == "PtgArea3d" && (N[C.itab - 1] = { ref: Se(C.rgce[0][0][1][2]) });
          break;
        case 22:
          B.ExternCount = C;
          break;
        case 23:
          V.length == 0 && (V[0] = [], V[0].XTI = []), V[V.length - 1].XTI = V[V.length - 1].XTI.concat(C), V.XTI = V.XTI.concat(C);
          break;
        case 2196:
          if (B.biff < 8)
            break;
          R != null && (R.Comment = C[1]);
          break;
        case 18:
          n["!protect"] = C;
          break;
        case 19:
          C !== 0 && B.WTF && console.error("Password verifier: " + C);
          break;
        case 133:
          i[C.pos] = C, B.snames.push(C.name);
          break;
        case 10:
          {
            if (--me)
              break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = Se(s), t.sheetRows && t.sheetRows <= s.e.r) {
                  var Re = s.e.r;
                  s.e.r = t.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = Se(s), s.e.r = Re;
                }
                s.e.r++, s.e.c++;
              }
              oe.length > 0 && (n["!merges"] = oe), ee.length > 0 && (n["!objects"] = ee), le.length > 0 && (n["!cols"] = le), fe.length > 0 && (n["!rows"] = fe), k.Sheets.push(I);
            }
            o === "" ? l = n : a[o] = n, n = t.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (B.biff === 8 && (B.biff = {
              /*::[*/
              9: 2,
              /*::[*/
              521: 3,
              /*::[*/
              1033: 4
            }[ae] || {
              /*::[*/
              512: 2,
              /*::[*/
              768: 3,
              /*::[*/
              1024: 4,
              /*::[*/
              1280: 5,
              /*::[*/
              1536: 8,
              /*::[*/
              2: 2,
              /*::[*/
              7: 2
            }[C.BIFFVer] || 8), B.biffguess = C.BIFFVer == 0, C.BIFFVer == 0 && C.dt == 4096 && (B.biff = 5, Y = !0, ut(B.codepage = 28591)), B.biff == 8 && C.BIFFVer == 0 && C.dt == 16 && (B.biff = 2), me++)
              break;
            if (n = t.dense ? [] : {}, B.biff < 8 && !Y && (Y = !0, ut(B.codepage = t.codepage || 1252)), B.biff < 5 || C.BIFFVer == 0 && C.dt == 4096) {
              o === "" && (o = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Ge = { pos: e.l - Q, name: o };
              i[Ge.pos] = Ge, B.snames.push(o);
            } else
              o = (i[te] || { name: "" }).name;
            C.dt == 32 && (n["!type"] = "chart"), C.dt == 64 && (n["!type"] = "macro"), oe = [], ee = [], B.arrayf = T = [], le = [], fe = [], De = !1, I = { Hidden: (i[te] || { hs: 0 }).hs, name: o };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (t.dense ? (n[C.r] || [])[C.c] : n[ge({ c: C.c, r: C.r })]) && ++C.c, g = { ixfe: C.ixfe, XF: P[C.ixfe] || {}, v: C.val, t: "n" }, A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: C.c, r: C.r }, g, t);
          break;
        case 5:
        case 517:
          g = { ixfe: C.ixfe, XF: P[C.ixfe], v: C.val, t: C.t }, A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: C.c, r: C.r }, g, t);
          break;
        case 638:
          g = { ixfe: C.ixfe, XF: P[C.ixfe], v: C.rknum, t: "n" }, A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: C.c, r: C.r }, g, t);
          break;
        case 189:
          for (var Oe = C.c; Oe <= C.C; ++Oe) {
            var ue = C.rkrec[Oe - C.c][0];
            g = { ixfe: ue, XF: P[ue], v: C.rkrec[Oe - C.c][1], t: "n" }, A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: Oe, r: C.r }, g, t);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (C.val == "String") {
              f = C;
              break;
            }
            if (g = mi(C.val, C.cell.ixfe, C.tt), g.XF = P[g.ixfe], t.cellFormula) {
              var sr = C.formula;
              if (sr && sr[0] && sr[0][0] && sr[0][0][0] == "PtgExp") {
                var tt = sr[0][0][1][0], _t = sr[0][0][1][1], It = ge({ r: tt, c: _t });
                _[It] ? g.f = "" + Dr(C.formula, s, C.cell, V, B) : g.F = ((t.dense ? (n[tt] || [])[_t] : n[It]) || {}).F;
              } else
                g.f = "" + Dr(C.formula, s, C.cell, V, B);
            }
            A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M(C.cell, g, t), f = C;
          }
          break;
        case 7:
        case 519:
          if (f)
            f.val = C, g = mi(C, f.cell.ixfe, "s"), g.XF = P[g.ixfe], t.cellFormula && (g.f = "" + Dr(f.formula, s, f.cell, V, B)), A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M(f.cell, g, t), f = null;
          else
            throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            T.push(C);
            var cn = ge(C[0].s);
            if (d = t.dense ? (n[C[0].s.r] || [])[C[0].s.c] : n[cn], t.cellFormula && d) {
              if (!f || !cn || !d)
                break;
              d.f = "" + Dr(C[1], s, C[0], V, B), d.F = Se(C[0]);
            }
          }
          break;
        case 1212:
          {
            if (!t.cellFormula)
              break;
            if (h) {
              if (!f)
                break;
              _[ge(f.cell)] = C[0], d = t.dense ? (n[f.cell.r] || [])[f.cell.c] : n[ge(f.cell)], (d || {}).f = "" + Dr(C[0], s, u, V, B);
            }
          }
          break;
        case 253:
          g = mi(c[C.isst].t, C.ixfe, "s"), c[C.isst].h && (g.h = c[C.isst].h), g.XF = P[g.ixfe], A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: C.c, r: C.r }, g, t);
          break;
        case 513:
          t.sheetStubs && (g = { ixfe: C.ixfe, XF: P[C.ixfe], t: "z" }, A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: C.c, r: C.r }, g, t));
          break;
        case 190:
          if (t.sheetStubs)
            for (var Gt = C.c; Gt <= C.C; ++Gt) {
              var jr = C.ixfe[Gt - C.c];
              g = { ixfe: jr, XF: P[jr], t: "z" }, A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: Gt, r: C.r }, g, t);
            }
          break;
        case 214:
        case 516:
        case 4:
          g = mi(C.val, C.ixfe, "s"), g.XF = P[g.ixfe], A > 0 && (g.z = L[g.ixfe >> 8 & 63]), Et(g, t, r.opts.Date1904), M({ c: C.c, r: C.r }, g, t);
          break;
        case 0:
        case 512:
          me === 1 && (s = C);
          break;
        case 252:
          c = C;
          break;
        case 1054:
          if (B.biff == 4) {
            L[A++] = C[1];
            for (var Nt = 0; Nt < A + 163 && pe[Nt] != C[1]; ++Nt)
              ;
            Nt >= 163 && At(C[1], A + 163);
          } else
            At(C[1], C[0]);
          break;
        case 30:
          {
            L[A++] = C;
            for (var zt = 0; zt < A + 163 && pe[zt] != C; ++zt)
              ;
            zt >= 163 && At(C, A + 163);
          }
          break;
        case 229:
          oe = oe.concat(C);
          break;
        case 93:
          ee[C.cmo[0]] = B.lastobj = C;
          break;
        case 438:
          B.lastobj.TxO = C;
          break;
        case 127:
          B.lastobj.ImData = C;
          break;
        case 440:
          for (v = C[0].s.r; v <= C[0].e.r; ++v)
            for (x = C[0].s.c; x <= C[0].e.c; ++x)
              d = t.dense ? (n[v] || [])[x] : n[ge({ c: x, r: v })], d && (d.l = C[1]);
          break;
        case 2048:
          for (v = C[0].s.r; v <= C[0].e.r; ++v)
            for (x = C[0].s.c; x <= C[0].e.c; ++x)
              d = t.dense ? (n[v] || [])[x] : n[ge({ c: x, r: v })], d && d.l && (d.l.Tooltip = C[1]);
          break;
        case 28:
          {
            if (B.biff <= 5 && B.biff >= 2)
              break;
            d = t.dense ? (n[C[0].r] || [])[C[0].c] : n[ge(C[0])];
            var on = ee[C[2]];
            d || (t.dense ? (n[C[0].r] || (n[C[0].r] = []), d = n[C[0].r][C[0].c] = { t: "z" }) : d = n[ge(C[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, C[0].r), s.s.r = Math.min(s.s.r, C[0].r), s.e.c = Math.max(s.e.c, C[0].c), s.s.c = Math.min(s.s.c, C[0].c)), d.c || (d.c = []), p = { a: C[1], t: on.TxO.t }, d.c.push(p);
          }
          break;
        case 2173:
          _v(P[C.ixfe], C.ext);
          break;
        case 125:
          {
            if (!B.cellStyles)
              break;
            for (; C.e >= C.s; )
              le[C.e--] = { width: C.w / 256, level: C.level || 0, hidden: !!(C.flags & 1) }, De || (De = !0, Cs(C.w / 256)), aa(le[C.e + 1]);
          }
          break;
        case 520:
          {
            var Lr = {};
            C.level != null && (fe[C.r] = Lr, Lr.level = C.level), C.hidden && (fe[C.r] = Lr, Lr.hidden = !0), C.hpt && (fe[C.r] = Lr, Lr.hpt = C.hpt, Lr.hpx = tn(C.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || ga(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[ae]] = C;
          break;
        case 161:
          n["!margins"] || ga(n["!margins"] = {}), n["!margins"].header = C.header, n["!margins"].footer = C.footer;
          break;
        case 574:
          C.RTL && (k.Views[0].RTL = !0);
          break;
        case 146:
          O = C;
          break;
        case 2198:
          K = C;
          break;
        case 140:
          D = C;
          break;
        case 442:
          o ? I.CodeName = C || I.name : k.WBProps.CodeName = C || "ThisWorkbook";
          break;
      }
    } else
      q || console.error("Missing Info for XLS Record 0x" + ae.toString(16)), e.l += Q;
  }
  return r.SheetNames = ir(i).sort(function(wt, Ce) {
    return Number(wt) - Number(Ce);
  }).map(function(wt) {
    return i[wt].name;
  }), t.bookSheets || (r.Sheets = a), !r.SheetNames.length && l["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = l)) : r.Preamble = l, r.Sheets && N.forEach(function(wt, Ce) {
    r.Sheets[r.SheetNames[Ce]]["!autofilter"] = wt;
  }), r.Strings = c, r.SSF = ze(pe), B.enc && (r.Encryption = B.enc), K && (r.Themes = K), r.Metadata = {}, D !== void 0 && (r.Metadata.Country = D), V.names.length > 0 && (k.Names = V.names), r.Workbook = k, r;
}
var In = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Iw(e, t, r) {
  var a = de.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0)
    try {
      var n = Hf(a, V0, In.DSI);
      for (var i in n)
        t[i] = n[i];
    } catch (o) {
      if (r.WTF)
        throw o;
    }
  var s = de.find(e, "/!SummaryInformation");
  if (s && s.size > 0)
    try {
      var f = Hf(s, X0, In.SI);
      for (var c in f)
        t[c] == null && (t[c] = f[c]);
    } catch (o) {
      if (r.WTF)
        throw o;
    }
  t.HeadingPairs && t.TitlesOfParts && (Ao(t.HeadingPairs, t.TitlesOfParts, t, r), delete t.HeadingPairs, delete t.TitlesOfParts);
}
function Nw(e, t) {
  var r = [], a = [], n = [], i = 0, s, f = mf(V0, "n"), c = mf(X0, "n");
  if (e.Props)
    for (s = ir(e.Props), i = 0; i < s.length; ++i)
      (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops)
    for (s = ir(e.Custprops), i = 0; i < s.length; ++i)
      Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? r : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var o = [];
  for (i = 0; i < n.length; ++i)
    Ro.indexOf(n[i][0]) > -1 || Fo.indexOf(n[i][0]) > -1 || n[i][1] != null && o.push(n[i]);
  a.length && de.utils.cfb_add(t, "/SummaryInformation", Vf(a, In.SI, c, X0)), (r.length || o.length) && de.utils.cfb_add(t, "/DocumentSummaryInformation", Vf(r, In.DSI, f, V0, o.length ? o : null, In.UDI));
}
function Bs(e, t) {
  t || (t = {}), Ms(t), $i(), t.codepage && ji(t.codepage);
  var r, a;
  if (e.FullPaths) {
    if (de.find(e, "/encryption"))
      throw new Error("File is password-protected");
    r = de.find(e, "!CompObj"), a = de.find(e, "/Workbook") || de.find(e, "/Book");
  } else {
    switch (t.type) {
      case "base64":
        e = qr(et(e));
        break;
      case "binary":
        e = qr(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    Sr(e, 0), a = { content: e };
  }
  var n, i;
  if (r && Cw(r), t.bookProps && !t.bookSheets)
    n = {};
  else {
    var s = Ae ? "buffer" : "array";
    if (a && a.content)
      n = Ow(a.content, t);
    else if ((i = de.find(e, "PerfectOffice_MAIN")) && i.content)
      n = ma.to_workbook(i.content, (t.type = s, t));
    else if ((i = de.find(e, "NativeContent_MAIN")) && i.content)
      n = ma.to_workbook(i.content, (t.type = s, t));
    else
      throw (i = de.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    t.bookVBA && e.FullPaths && de.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = $v(e));
  }
  var f = {};
  return e.FullPaths && Iw(
    /*::((*/
    e,
    f,
    t
  ), n.Props = n.Custprops = f, t.bookFiles && (n.cfb = e), n;
}
function Rw(e, t) {
  var r = t || {}, a = de.utils.cfb_new({ root: "R" }), n = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    case "xla":
      r.bookType || (r.bookType = "xla");
    case "biff8":
      n = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      n = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return de.utils.cfb_add(a, n, Dl(e, r)), r.biff == 8 && (e.Props || e.Custprops) && Nw(e, a), r.biff == 8 && e.vbaraw && Yv(a, de.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var Gn = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: i2
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: x2
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: I2
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: E2
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: m2
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: b2
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: L2
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: y2
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: G2
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: X2
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: H2
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: V2
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: p2
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: R2
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: k2
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: _2
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: El
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: U2
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: A2
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: gs
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: M_
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: Lp
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: Pp
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: Wp
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: Vp
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: Hp
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: c1
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: Tv
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: zo
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: B2
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: Ov
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: s_
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: Pr,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: t_
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: u2
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: c2,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: J2
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: P_
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: N_
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: Zd
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: Oa
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: z2
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: wv
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: yv,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: H0
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: Go
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: q2
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: Z2
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: e_
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: l2
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: Y2
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: H0
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: Vv
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: Wv
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: h1
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: k_
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: f_
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
}, K0 = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  /*::[*/
  6: {
    /* n:"Formula", */
    f: k0
  },
  /*::[*/
  10: {
    /* n:"EOF", */
    f: jt
  },
  /*::[*/
  12: {
    /* n:"CalcCount", */
    f: xr
  },
  //
  /*::[*/
  13: {
    /* n:"CalcMode", */
    f: xr
  },
  //
  /*::[*/
  14: {
    /* n:"CalcPrecision", */
    f: cr
  },
  //
  /*::[*/
  15: {
    /* n:"CalcRefMode", */
    f: cr
  },
  //
  /*::[*/
  16: {
    /* n:"CalcDelta", */
    f: Ir
  },
  //
  /*::[*/
  17: {
    /* n:"CalcIter", */
    f: cr
  },
  //
  /*::[*/
  18: {
    /* n:"Protect", */
    f: cr
  },
  /*::[*/
  19: {
    /* n:"Password", */
    f: xr
  },
  /*::[*/
  20: {
    /* n:"Header", */
    f: Yf
  },
  /*::[*/
  21: {
    /* n:"Footer", */
    f: Yf
  },
  /*::[*/
  23: {
    /* n:"ExternSheet", */
    f: Go
  },
  /*::[*/
  24: {
    /* n:"Lbl", */
    f: Jf
  },
  /*::[*/
  25: {
    /* n:"WinProtect", */
    f: cr
  },
  /*::[*/
  26: {
    /* n:"VerticalPageBreaks", */
  },
  /*::[*/
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  /*::[*/
  28: {
    /* n:"Note", */
    f: fd
  },
  /*::[*/
  29: {
    /* n:"Selection", */
  },
  /*::[*/
  34: {
    /* n:"Date1904", */
    f: cr
  },
  /*::[*/
  35: {
    /* n:"ExternName", */
    f: Kf
  },
  /*::[*/
  38: {
    /* n:"LeftMargin", */
    f: Ir
  },
  // *
  /*::[*/
  39: {
    /* n:"RightMargin", */
    f: Ir
  },
  // *
  /*::[*/
  40: {
    /* n:"TopMargin", */
    f: Ir
  },
  // *
  /*::[*/
  41: {
    /* n:"BottomMargin", */
    f: Ir
  },
  // *
  /*::[*/
  42: {
    /* n:"PrintRowCol", */
    f: cr
  },
  /*::[*/
  43: {
    /* n:"PrintGrid", */
    f: cr
  },
  /*::[*/
  47: {
    /* n:"FilePass", */
    f: _p
  },
  /*::[*/
  49: {
    /* n:"Font", */
    f: Rx
  },
  /*::[*/
  51: {
    /* n:"PrintSize", */
    f: xr
  },
  /*::[*/
  60: {
    /* n:"Continue", */
  },
  /*::[*/
  61: {
    /* n:"Window1", */
    f: bx
  },
  /*::[*/
  64: {
    /* n:"Backup", */
    f: cr
  },
  /*::[*/
  65: {
    /* n:"Pane", */
    f: Nx
  },
  /*::[*/
  66: {
    /* n:"CodePage", */
    f: xr
  },
  /*::[*/
  77: {
    /* n:"Pls", */
  },
  /*::[*/
  80: {
    /* n:"DCon", */
  },
  /*::[*/
  81: {
    /* n:"DConRef", */
  },
  /*::[*/
  82: {
    /* n:"DConName", */
  },
  /*::[*/
  85: {
    /* n:"DefColWidth", */
    f: xr
  },
  /*::[*/
  89: {
    /* n:"XCT", */
  },
  /*::[*/
  90: {
    /* n:"CRN", */
  },
  /*::[*/
  91: {
    /* n:"FileSharing", */
  },
  /*::[*/
  92: {
    /* n:"WriteAccess", */
    f: gx
  },
  /*::[*/
  93: {
    /* n:"Obj", */
    f: ld
  },
  /*::[*/
  94: {
    /* n:"Uncalced", */
  },
  /*::[*/
  95: {
    /* n:"CalcSaveRecalc", */
    f: cr
  },
  //
  /*::[*/
  96: {
    /* n:"Template", */
  },
  /*::[*/
  97: {
    /* n:"Intl", */
  },
  /*::[*/
  99: {
    /* n:"ObjProtect", */
    f: cr
  },
  /*::[*/
  125: {
    /* n:"ColInfo", */
    f: zo
  },
  /*::[*/
  128: {
    /* n:"Guts", */
    f: Kx
  },
  /*::[*/
  129: {
    /* n:"WsBool", */
    f: wx
  },
  /*::[*/
  130: {
    /* n:"GridSet", */
    f: xr
  },
  /*::[*/
  131: {
    /* n:"HCenter", */
    f: cr
  },
  /*::[*/
  132: {
    /* n:"VCenter", */
    f: cr
  },
  /*::[*/
  133: {
    /* n:"BoundSheet8", */
    f: Ex
  },
  /*::[*/
  134: {
    /* n:"WriteProtect", */
  },
  /*::[*/
  140: {
    /* n:"Country", */
    f: gd
  },
  /*::[*/
  141: {
    /* n:"HideObj", */
    f: xr
  },
  /*::[*/
  144: {
    /* n:"Sort", */
  },
  /*::[*/
  146: {
    /* n:"Palette", */
    f: Ed
  },
  /*::[*/
  151: {
    /* n:"Sync", */
  },
  /*::[*/
  152: {
    /* n:"LPr", */
  },
  /*::[*/
  153: {
    /* n:"DxGCol", */
  },
  /*::[*/
  154: {
    /* n:"FnGroupName", */
  },
  /*::[*/
  155: {
    /* n:"FilterMode", */
  },
  /*::[*/
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: xr
  },
  /*::[*/
  157: {
    /* n:"AutoFilterInfo", */
  },
  /*::[*/
  158: {
    /* n:"AutoFilter", */
  },
  /*::[*/
  160: {
    /* n:"Scl", */
    f: Cd
  },
  /*::[*/
  161: {
    /* n:"Setup", */
    f: Sd
  },
  /*::[*/
  174: {
    /* n:"ScenMan", */
  },
  /*::[*/
  175: {
    /* n:"SCENARIO", */
  },
  /*::[*/
  176: {
    /* n:"SxView", */
  },
  /*::[*/
  177: {
    /* n:"Sxvd", */
  },
  /*::[*/
  178: {
    /* n:"SXVI", */
  },
  /*::[*/
  180: {
    /* n:"SxIvd", */
  },
  /*::[*/
  181: {
    /* n:"SXLI", */
  },
  /*::[*/
  182: {
    /* n:"SXPI", */
  },
  /*::[*/
  184: {
    /* n:"DocRoute", */
  },
  /*::[*/
  185: {
    /* n:"RecipName", */
  },
  /*::[*/
  189: {
    /* n:"MulRk", */
    f: zx
  },
  /*::[*/
  190: {
    /* n:"MulBlank", */
    f: jx
  },
  /*::[*/
  193: {
    /* n:"Mms", */
    f: jt
  },
  /*::[*/
  197: {
    /* n:"SXDI", */
  },
  /*::[*/
  198: {
    /* n:"SXDB", */
  },
  /*::[*/
  199: {
    /* n:"SXFDB", */
  },
  /*::[*/
  200: {
    /* n:"SXDBB", */
  },
  /*::[*/
  201: {
    /* n:"SXNum", */
  },
  /*::[*/
  202: {
    /* n:"SxBool", */
    f: cr
  },
  /*::[*/
  203: {
    /* n:"SxErr", */
  },
  /*::[*/
  204: {
    /* n:"SXInt", */
  },
  /*::[*/
  205: {
    /* n:"SXString", */
  },
  /*::[*/
  206: {
    /* n:"SXDtr", */
  },
  /*::[*/
  207: {
    /* n:"SxNil", */
  },
  /*::[*/
  208: {
    /* n:"SXTbl", */
  },
  /*::[*/
  209: {
    /* n:"SXTBRGIITM", */
  },
  /*::[*/
  210: {
    /* n:"SxTbpg", */
  },
  /*::[*/
  211: {
    /* n:"ObProj", */
  },
  /*::[*/
  213: {
    /* n:"SXStreamID", */
  },
  /*::[*/
  215: {
    /* n:"DBCell", */
  },
  /*::[*/
  216: {
    /* n:"SXRng", */
  },
  /*::[*/
  217: {
    /* n:"SxIsxoper", */
  },
  /*::[*/
  218: {
    /* n:"BookBool", */
    f: xr
  },
  /*::[*/
  220: {
    /* n:"DbOrParamQry", */
  },
  /*::[*/
  221: {
    /* n:"ScenarioProtect", */
    f: cr
  },
  /*::[*/
  222: {
    /* n:"OleObjectSize", */
  },
  /*::[*/
  224: {
    /* n:"XF", */
    f: Yx
  },
  /*::[*/
  225: {
    /* n:"InterfaceHdr", */
    f: mx
  },
  /*::[*/
  226: {
    /* n:"InterfaceEnd", */
    f: jt
  },
  /*::[*/
  227: {
    /* n:"SXVS", */
  },
  /*::[*/
  229: {
    /* n:"MergeCells", */
    f: cd
  },
  /*::[*/
  233: {
    /* n:"BkHim", */
  },
  /*::[*/
  235: {
    /* n:"MsoDrawingGroup", */
  },
  /*::[*/
  236: {
    /* n:"MsoDrawing", */
  },
  /*::[*/
  237: {
    /* n:"MsoDrawingSelection", */
  },
  /*::[*/
  239: {
    /* n:"PhoneticInfo", */
  },
  /*::[*/
  240: {
    /* n:"SxRule", */
  },
  /*::[*/
  241: {
    /* n:"SXEx", */
  },
  /*::[*/
  242: {
    /* n:"SxFilt", */
  },
  /*::[*/
  244: {
    /* n:"SxDXF", */
  },
  /*::[*/
  245: {
    /* n:"SxItm", */
  },
  /*::[*/
  246: {
    /* n:"SxName", */
  },
  /*::[*/
  247: {
    /* n:"SxSelect", */
  },
  /*::[*/
  248: {
    /* n:"SXPair", */
  },
  /*::[*/
  249: {
    /* n:"SxFmla", */
  },
  /*::[*/
  251: {
    /* n:"SxFormat", */
  },
  /*::[*/
  252: {
    /* n:"SST", */
    f: kx
  },
  /*::[*/
  253: {
    /* n:"LabelSst", */
    f: Bx
  },
  /*::[*/
  255: {
    /* n:"ExtSST", */
    f: yx
  },
  /*::[*/
  256: {
    /* n:"SXVDEx", */
  },
  /*::[*/
  259: {
    /* n:"SXFormula", */
  },
  /*::[*/
  290: {
    /* n:"SXDBEx", */
  },
  /*::[*/
  311: {
    /* n:"RRDInsDel", */
  },
  /*::[*/
  312: {
    /* n:"RRDHead", */
  },
  /*::[*/
  315: {
    /* n:"RRDChgCell", */
  },
  /*::[*/
  317: {
    /* n:"RRTabId", */
    f: Po
  },
  /*::[*/
  318: {
    /* n:"RRDRenSheet", */
  },
  /*::[*/
  319: {
    /* n:"RRSort", */
  },
  /*::[*/
  320: {
    /* n:"RRDMove", */
  },
  /*::[*/
  330: {
    /* n:"RRFormat", */
  },
  /*::[*/
  331: {
    /* n:"RRAutoFmt", */
  },
  /*::[*/
  333: {
    /* n:"RRInsertSh", */
  },
  /*::[*/
  334: {
    /* n:"RRDMoveBegin", */
  },
  /*::[*/
  335: {
    /* n:"RRDMoveEnd", */
  },
  /*::[*/
  336: {
    /* n:"RRDInsDelBegin", */
  },
  /*::[*/
  337: {
    /* n:"RRDInsDelEnd", */
  },
  /*::[*/
  338: {
    /* n:"RRDConflict", */
  },
  /*::[*/
  339: {
    /* n:"RRDDefName", */
  },
  /*::[*/
  340: {
    /* n:"RRDRstEtxp", */
  },
  /*::[*/
  351: {
    /* n:"LRng", */
  },
  /*::[*/
  352: {
    /* n:"UsesELFs", */
    f: cr
  },
  /*::[*/
  353: {
    /* n:"DSF", */
    f: jt
  },
  /*::[*/
  401: {
    /* n:"CUsr", */
  },
  /*::[*/
  402: {
    /* n:"CbUsr", */
  },
  /*::[*/
  403: {
    /* n:"UsrInfo", */
  },
  /*::[*/
  404: {
    /* n:"UsrExcl", */
  },
  /*::[*/
  405: {
    /* n:"FileLock", */
  },
  /*::[*/
  406: {
    /* n:"RRDInfo", */
  },
  /*::[*/
  407: {
    /* n:"BCUsrs", */
  },
  /*::[*/
  408: {
    /* n:"UsrChk", */
  },
  /*::[*/
  425: {
    /* n:"UserBView", */
  },
  /*::[*/
  426: {
    /* n:"UserSViewBegin", */
  },
  /*::[*/
  427: {
    /* n:"UserSViewEnd", */
  },
  /*::[*/
  428: {
    /* n:"RRDUserView", */
  },
  /*::[*/
  429: {
    /* n:"Qsi", */
  },
  /*::[*/
  430: {
    /* n:"SupBook", */
    f: ed
  },
  /*::[*/
  431: {
    /* n:"Prot4Rev", */
    f: cr
  },
  /*::[*/
  432: {
    /* n:"CondFmt", */
  },
  /*::[*/
  433: {
    /* n:"CF", */
  },
  /*::[*/
  434: {
    /* n:"DVal", */
  },
  /*::[*/
  437: {
    /* n:"DConBin", */
  },
  /*::[*/
  438: {
    /* n:"TxO", */
    f: xd
  },
  /*::[*/
  439: {
    /* n:"RefreshAll", */
    f: cr
  },
  //
  /*::[*/
  440: {
    /* n:"HLink", */
    f: dd
  },
  /*::[*/
  441: {
    /* n:"Lel", */
  },
  /*::[*/
  442: {
    /* n:"CodeName", */
    f: Qn
  },
  /*::[*/
  443: {
    /* n:"SXFDBType", */
  },
  /*::[*/
  444: {
    /* n:"Prot4RevPass", */
    f: xr
  },
  /*::[*/
  445: {
    /* n:"ObNoMacros", */
  },
  /*::[*/
  446: {
    /* n:"Dv", */
  },
  /*::[*/
  448: {
    /* n:"Excel9File", */
    f: jt
  },
  /*::[*/
  449: {
    /* n:"RecalcId", */
    f: Cx,
    r: 2
  },
  /*::[*/
  450: {
    /* n:"EntExU2", */
    f: jt
  },
  /*::[*/
  512: {
    /* n:"Dimensions", */
    f: zf
  },
  /*::[*/
  513: {
    /* n:"Blank", */
    f: Ad
  },
  /*::[*/
  515: {
    /* n:"Number", */
    f: Zx
  },
  /*::[*/
  516: {
    /* n:"Label", */
    f: Mx
  },
  /*::[*/
  517: {
    /* n:"BoolErr", */
    f: $f
  },
  /*::[*/
  519: {
    /* n:"String", */
    f: bd
  },
  /*::[*/
  520: {
    /* n:"Row", */
    f: Fx
  },
  /*::[*/
  523: {
    /* n:"Index", */
  },
  /*::[*/
  545: {
    /* n:"Array", */
    f: qf
  },
  /*::[*/
  549: {
    /* n:"DefaultRowHeight", */
    f: Gf
  },
  /*::[*/
  566: {
    /* n:"Table", */
  },
  /*::[*/
  574: {
    /* n:"Window2", */
    f: Ox
  },
  /*::[*/
  638: {
    /* n:"RK", */
    f: Gx
  },
  /*::[*/
  659: {
    /* n:"Style", */
  },
  /*::[*/
  1048: {
    /* n:"BigName", */
  },
  /*::[*/
  1054: {
    /* n:"Format", */
    f: Wx
  },
  /*::[*/
  1084: {
    /* n:"ContinueBigName", */
  },
  /*::[*/
  1212: {
    /* n:"ShrFmla", */
    f: nd
  },
  /*::[*/
  2048: {
    /* n:"HLinkTooltip", */
    f: vd
  },
  /*::[*/
  2049: {
    /* n:"WebPub", */
  },
  /*::[*/
  2050: {
    /* n:"QsiSXTag", */
  },
  /*::[*/
  2051: {
    /* n:"DBQueryExt", */
  },
  /*::[*/
  2052: {
    /* n:"ExtString", */
  },
  /*::[*/
  2053: {
    /* n:"TxtQry", */
  },
  /*::[*/
  2054: {
    /* n:"Qsir", */
  },
  /*::[*/
  2055: {
    /* n:"Qsif", */
  },
  /*::[*/
  2056: {
    /* n:"RRDTQSIF", */
  },
  /*::[*/
  2057: {
    /* n:"BOF", */
    f: di
  },
  /*::[*/
  2058: {
    /* n:"OleDbConn", */
  },
  /*::[*/
  2059: {
    /* n:"WOpt", */
  },
  /*::[*/
  2060: {
    /* n:"SXViewEx", */
  },
  /*::[*/
  2061: {
    /* n:"SXTH", */
  },
  /*::[*/
  2062: {
    /* n:"SXPIEx", */
  },
  /*::[*/
  2063: {
    /* n:"SXVDTEx", */
  },
  /*::[*/
  2064: {
    /* n:"SXViewEx9", */
  },
  /*::[*/
  2066: {
    /* n:"ContinueFrt", */
  },
  /*::[*/
  2067: {
    /* n:"RealTimeData", */
  },
  /*::[*/
  2128: {
    /* n:"ChartFrtInfo", */
  },
  /*::[*/
  2129: {
    /* n:"FrtWrapper", */
  },
  /*::[*/
  2130: {
    /* n:"StartBlock", */
  },
  /*::[*/
  2131: {
    /* n:"EndBlock", */
  },
  /*::[*/
  2132: {
    /* n:"StartObject", */
  },
  /*::[*/
  2133: {
    /* n:"EndObject", */
  },
  /*::[*/
  2134: {
    /* n:"CatLab", */
  },
  /*::[*/
  2135: {
    /* n:"YMult", */
  },
  /*::[*/
  2136: {
    /* n:"SXViewLink", */
  },
  /*::[*/
  2137: {
    /* n:"PivotChartBits", */
  },
  /*::[*/
  2138: {
    /* n:"FrtFontList", */
  },
  /*::[*/
  2146: {
    /* n:"SheetExt", */
  },
  /*::[*/
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  /*::[*/
  2148: {
    /* n:"SXAddl", */
  },
  /*::[*/
  2149: {
    /* n:"CrErr", */
  },
  /*::[*/
  2150: {
    /* n:"HFPicture", */
  },
  /*::[*/
  2151: {
    /* n:"FeatHdr", */
    f: jt
  },
  /*::[*/
  2152: {
    /* n:"Feat", */
  },
  /*::[*/
  2154: {
    /* n:"DataLabExt", */
  },
  /*::[*/
  2155: {
    /* n:"DataLabExtContents", */
  },
  /*::[*/
  2156: {
    /* n:"CellWatch", */
  },
  /*::[*/
  2161: {
    /* n:"FeatHdr11", */
  },
  /*::[*/
  2162: {
    /* n:"Feature11", */
  },
  /*::[*/
  2164: {
    /* n:"DropDownObjIds", */
  },
  /*::[*/
  2165: {
    /* n:"ContinueFrt11", */
  },
  /*::[*/
  2166: {
    /* n:"DConn", */
  },
  /*::[*/
  2167: {
    /* n:"List12", */
  },
  /*::[*/
  2168: {
    /* n:"Feature12", */
  },
  /*::[*/
  2169: {
    /* n:"CondFmt12", */
  },
  /*::[*/
  2170: {
    /* n:"CF12", */
  },
  /*::[*/
  2171: {
    /* n:"CFEx", */
  },
  /*::[*/
  2172: {
    /* n:"XFCRC", */
    f: Td,
    r: 12
  },
  /*::[*/
  2173: {
    /* n:"XFExt", */
    f: gv,
    r: 12
  },
  /*::[*/
  2174: {
    /* n:"AutoFilter12", */
  },
  /*::[*/
  2175: {
    /* n:"ContinueFrt12", */
  },
  /*::[*/
  2180: {
    /* n:"MDTInfo", */
  },
  /*::[*/
  2181: {
    /* n:"MDXStr", */
  },
  /*::[*/
  2182: {
    /* n:"MDXTuple", */
  },
  /*::[*/
  2183: {
    /* n:"MDXSet", */
  },
  /*::[*/
  2184: {
    /* n:"MDXProp", */
  },
  /*::[*/
  2185: {
    /* n:"MDXKPI", */
  },
  /*::[*/
  2186: {
    /* n:"MDB", */
  },
  /*::[*/
  2187: {
    /* n:"PLV", */
  },
  /*::[*/
  2188: {
    /* n:"Compat12", */
    f: cr,
    r: 12
  },
  /*::[*/
  2189: {
    /* n:"DXF", */
  },
  /*::[*/
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  /*::[*/
  2191: {
    /* n:"TableStyle", */
  },
  /*::[*/
  2192: {
    /* n:"TableStyleElement", */
  },
  /*::[*/
  2194: {
    /* n:"StyleExt", */
  },
  /*::[*/
  2195: {
    /* n:"NamePublish", */
  },
  /*::[*/
  2196: {
    /* n:"NameCmt", */
    f: ad,
    r: 12
  },
  /*::[*/
  2197: {
    /* n:"SortData", */
  },
  /*::[*/
  2198: {
    /* n:"Theme", */
    f: hv,
    r: 12
  },
  /*::[*/
  2199: {
    /* n:"GUIDTypeLib", */
  },
  /*::[*/
  2200: {
    /* n:"FnGrp12", */
  },
  /*::[*/
  2201: {
    /* n:"NameFnGrp12", */
  },
  /*::[*/
  2202: {
    /* n:"MTRSettings", */
    f: id,
    r: 12
  },
  /*::[*/
  2203: {
    /* n:"CompressPictures", */
    f: jt
  },
  /*::[*/
  2204: {
    /* n:"HeaderFooter", */
  },
  /*::[*/
  2205: {
    /* n:"CrtLayout12", */
  },
  /*::[*/
  2206: {
    /* n:"CrtMlFrt", */
  },
  /*::[*/
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  /*::[*/
  2211: {
    /* n:"ForceFullCalculation", */
    f: Ax
  },
  /*::[*/
  2212: {
    /* n:"ShapePropsStream", */
  },
  /*::[*/
  2213: {
    /* n:"TextPropsStream", */
  },
  /*::[*/
  2214: {
    /* n:"RichTextStream", */
  },
  /*::[*/
  2215: {
    /* n:"CrtLayout12A", */
  },
  /*::[*/
  4097: {
    /* n:"Units", */
  },
  /*::[*/
  4098: {
    /* n:"Chart", */
  },
  /*::[*/
  4099: {
    /* n:"Series", */
  },
  /*::[*/
  4102: {
    /* n:"DataFormat", */
  },
  /*::[*/
  4103: {
    /* n:"LineFormat", */
  },
  /*::[*/
  4105: {
    /* n:"MarkerFormat", */
  },
  /*::[*/
  4106: {
    /* n:"AreaFormat", */
  },
  /*::[*/
  4107: {
    /* n:"PieFormat", */
  },
  /*::[*/
  4108: {
    /* n:"AttachedLabel", */
  },
  /*::[*/
  4109: {
    /* n:"SeriesText", */
  },
  /*::[*/
  4116: {
    /* n:"ChartFormat", */
  },
  /*::[*/
  4117: {
    /* n:"Legend", */
  },
  /*::[*/
  4118: {
    /* n:"SeriesList", */
  },
  /*::[*/
  4119: {
    /* n:"Bar", */
  },
  /*::[*/
  4120: {
    /* n:"Line", */
  },
  /*::[*/
  4121: {
    /* n:"Pie", */
  },
  /*::[*/
  4122: {
    /* n:"Area", */
  },
  /*::[*/
  4123: {
    /* n:"Scatter", */
  },
  /*::[*/
  4124: {
    /* n:"CrtLine", */
  },
  /*::[*/
  4125: {
    /* n:"Axis", */
  },
  /*::[*/
  4126: {
    /* n:"Tick", */
  },
  /*::[*/
  4127: {
    /* n:"ValueRange", */
  },
  /*::[*/
  4128: {
    /* n:"CatSerRange", */
  },
  /*::[*/
  4129: {
    /* n:"AxisLine", */
  },
  /*::[*/
  4130: {
    /* n:"CrtLink", */
  },
  /*::[*/
  4132: {
    /* n:"DefaultText", */
  },
  /*::[*/
  4133: {
    /* n:"Text", */
  },
  /*::[*/
  4134: {
    /* n:"FontX", */
    f: xr
  },
  /*::[*/
  4135: {
    /* n:"ObjectLink", */
  },
  /*::[*/
  4146: {
    /* n:"Frame", */
  },
  /*::[*/
  4147: {
    /* n:"Begin", */
  },
  /*::[*/
  4148: {
    /* n:"End", */
  },
  /*::[*/
  4149: {
    /* n:"PlotArea", */
  },
  /*::[*/
  4154: {
    /* n:"Chart3d", */
  },
  /*::[*/
  4156: {
    /* n:"PicF", */
  },
  /*::[*/
  4157: {
    /* n:"DropBar", */
  },
  /*::[*/
  4158: {
    /* n:"Radar", */
  },
  /*::[*/
  4159: {
    /* n:"Surf", */
  },
  /*::[*/
  4160: {
    /* n:"RadarArea", */
  },
  /*::[*/
  4161: {
    /* n:"AxisParent", */
  },
  /*::[*/
  4163: {
    /* n:"LegendException", */
  },
  /*::[*/
  4164: {
    /* n:"ShtProps", */
    f: yd
  },
  /*::[*/
  4165: {
    /* n:"SerToCrt", */
  },
  /*::[*/
  4166: {
    /* n:"AxesUsed", */
  },
  /*::[*/
  4168: {
    /* n:"SBaseRef", */
  },
  /*::[*/
  4170: {
    /* n:"SerParent", */
  },
  /*::[*/
  4171: {
    /* n:"SerAuxTrend", */
  },
  /*::[*/
  4174: {
    /* n:"IFmtRecord", */
  },
  /*::[*/
  4175: {
    /* n:"Pos", */
  },
  /*::[*/
  4176: {
    /* n:"AlRuns", */
  },
  /*::[*/
  4177: {
    /* n:"BRAI", */
  },
  /*::[*/
  4187: {
    /* n:"SerAuxErrBar", */
  },
  /*::[*/
  4188: {
    /* n:"ClrtClient", */
    f: wd
  },
  /*::[*/
  4189: {
    /* n:"SerFmt", */
  },
  /*::[*/
  4191: {
    /* n:"Chart3DBarShape", */
  },
  /*::[*/
  4192: {
    /* n:"Fbi", */
  },
  /*::[*/
  4193: {
    /* n:"BopPop", */
  },
  /*::[*/
  4194: {
    /* n:"AxcExt", */
  },
  /*::[*/
  4195: {
    /* n:"Dat", */
  },
  /*::[*/
  4196: {
    /* n:"PlotGrowth", */
  },
  /*::[*/
  4197: {
    /* n:"SIIndex", */
  },
  /*::[*/
  4198: {
    /* n:"GelFrame", */
  },
  /*::[*/
  4199: {
    /* n:"BopPopCustom", */
  },
  /*::[*/
  4200: {
    /* n:"Fbi2", */
  },
  /*::[*/
  0: {
    /* n:"Dimensions", */
    f: zf
  },
  /*::[*/
  1: {
    /* n:"BIFF2BLANK", */
  },
  /*::[*/
  2: {
    /* n:"BIFF2INT", */
    f: Rd
  },
  /*::[*/
  3: {
    /* n:"BIFF2NUM", */
    f: Id
  },
  /*::[*/
  4: {
    /* n:"BIFF2STR", */
    f: Od
  },
  /*::[*/
  5: {
    /* n:"BoolErr", */
    f: $f
  },
  /*::[*/
  7: {
    /* n:"String", */
    f: Bd
  },
  /*::[*/
  8: {
    /* n:"BIFF2ROW", */
  },
  /*::[*/
  9: {
    /* n:"BOF", */
    f: di
  },
  /*::[*/
  11: {
    /* n:"Index", */
  },
  /*::[*/
  22: {
    /* n:"ExternCount", */
    f: xr
  },
  /*::[*/
  30: {
    /* n:"BIFF2FORMAT", */
    f: Vx
  },
  /*::[*/
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  /*::[*/
  32: {
    /* n:"BIFF2COLINFO", */
  },
  /*::[*/
  33: {
    /* n:"Array", */
    f: qf
  },
  /*::[*/
  36: {
    /* n:"COLWIDTH", */
  },
  /*::[*/
  37: {
    /* n:"DefaultRowHeight", */
    f: Gf
  },
  // 0x2c ??
  // 0x2d ??
  // 0x2e ??
  // 0x30 FONTCOUNT: number of fonts
  /*::[*/
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: Ld
  },
  // 0x35: INFOOPTS
  // 0x36: TABLE (BIFF2 only)
  // 0x37: TABLE2 (BIFF2 only)
  // 0x38: WNDESK
  // 0x39 ??
  // 0x3a: BEGINPREF
  // 0x3b: ENDPREF
  /*::[*/
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x3f ??
  // 0x46: SHOWSCROLL
  // 0x47: SHOWFORMULA
  // 0x48: STATUSBAR
  // 0x49: SHORTMENUS
  // 0x4A:
  // 0x4B:
  // 0x4C:
  // 0x4E:
  // 0x4F:
  // 0x58: TOOLBAR (BIFF3)
  /* - - - */
  /*::[*/
  52: {
    /* n:"DDEObjName", */
  },
  /*::[*/
  67: {
    /* n:"BIFF2XF", */
  },
  /*::[*/
  68: {
    /* n:"BIFF2XFINDEX", */
    f: xr
  },
  /*::[*/
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  /*::[*/
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  /*::[*/
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  /*::[*/
  127: {
    /* n:"ImData", */
    f: Dd
  },
  /*::[*/
  135: {
    /* n:"Addin", */
  },
  /*::[*/
  136: {
    /* n:"Edg", */
  },
  /*::[*/
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  // 0x8F
  /*::[*/
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  /*::[*/
  148: {
    /* n:"LHRecord", */
  },
  /*::[*/
  149: {
    /* n:"LHNGraph", */
  },
  /*::[*/
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  /*::[*/
  169: {
    /* n:"CoordList", */
  },
  /*::[*/
  171: {
    /* n:"GCW", */
  },
  /*::[*/
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  /*::[*/
  191: {
    /* n:"ToolbarHdr", */
  },
  /*::[*/
  192: {
    /* n:"ToolbarEnd", */
  },
  /*::[*/
  194: {
    /* n:"AddMenu", */
  },
  /*::[*/
  195: {
    /* n:"DelMenu", */
  },
  /*::[*/
  214: {
    /* n:"RString", */
    f: Md
  },
  /*::[*/
  223: {
    /* n:"UDDesc", */
  },
  /*::[*/
  234: {
    /* n:"TabIdConf", */
  },
  /*::[*/
  354: {
    /* n:"XL5Modify", */
  },
  /*::[*/
  421: {
    /* n:"FileSharing2", */
  },
  /*::[*/
  518: {
    /* n:"Formula", */
    f: k0
  },
  /*::[*/
  521: {
    /* n:"BOF", */
    f: di
  },
  /*::[*/
  536: {
    /* n:"Lbl", */
    f: Jf
  },
  /*::[*/
  547: {
    /* n:"ExternName", */
    f: Kf
  },
  /*::[*/
  561: {
    /* n:"Font", */
  },
  /*::[*/
  579: {
    /* n:"BIFF3XF", */
  },
  /*::[*/
  1030: {
    /* n:"Formula", */
    f: k0
  },
  /*::[*/
  1033: {
    /* n:"BOF", */
    f: di
  },
  /*::[*/
  1091: {
    /* n:"BIFF4XF", */
  },
  /*::[*/
  2157: {
    /* n:"FeatInfo", */
  },
  /*::[*/
  2163: {
    /* n:"FeatInfo11", */
  },
  /*::[*/
  2177: {
    /* n:"SXAddl12", */
  },
  /*::[*/
  2240: {
    /* n:"AutoWebPub", */
  },
  /*::[*/
  2241: {
    /* n:"ListObj", */
  },
  /*::[*/
  2242: {
    /* n:"ListField", */
  },
  /*::[*/
  2243: {
    /* n:"ListDV", */
  },
  /*::[*/
  2244: {
    /* n:"ListCondFmt", */
  },
  /*::[*/
  2245: {
    /* n:"ListCF", */
  },
  /*::[*/
  2246: {
    /* n:"FMQry", */
  },
  /*::[*/
  2247: {
    /* n:"FMSQry", */
  },
  /*::[*/
  2248: {
    /* n:"PLV", */
  },
  /*::[*/
  2249: {
    /* n:"LnExt", */
  },
  /*::[*/
  2250: {
    /* n:"MkrExt", */
  },
  /*::[*/
  2251: {
    /* n:"CrtCoopt", */
  },
  /*::[*/
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /*::[*/
  29282: {}
};
function ie(e, t, r, a) {
  var n = t;
  if (!isNaN(n)) {
    var i = a || (r || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), /*:: len != null &&*/
    i > 0 && ps(r) && e.push(r);
  }
}
function Pw(e, t, r, a) {
  var n = a || (r || []).length || 0;
  if (n <= 8224)
    return ie(e, t, r, n);
  var i = t;
  if (!isNaN(i)) {
    for (var s = r.parts || [], f = 0, c = 0, o = 0; o + (s[f] || 8224) <= 8224; )
      o += s[f] || 8224, f++;
    var l = e.next(4);
    for (l.write_shift(2, i), l.write_shift(2, o), e.push(r.slice(c, c + o)), c += o; c < n; ) {
      for (l = e.next(4), l.write_shift(2, 60), o = 0; o + (s[f] || 8224) <= 8224; )
        o += s[f] || 8224, f++;
      l.write_shift(2, o), e.push(r.slice(c, c + o)), c += o;
    }
  }
}
function ai(e, t, r) {
  return e || (e = z(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function Bw(e, t, r, a) {
  var n = z(9);
  return ai(n, e, t), Bo(r, a || "b", n), n;
}
function Lw(e, t, r) {
  var a = z(8 + 2 * r.length);
  return ai(a, e, t), a.write_shift(1, r.length), a.write_shift(r.length, r, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function Mw(e, t, r, a) {
  if (t.v != null)
    switch (t.t) {
      case "d":
      case "n":
        var n = t.t == "d" ? mr(Ke(t.v)) : t.v;
        n == (n | 0) && n >= 0 && n < 65536 ? ie(e, 2, Pd(r, a, n)) : ie(e, 3, Nd(r, a, n));
        return;
      case "b":
      case "e":
        ie(e, 5, Bw(r, a, t.v, t.t));
        return;
      case "s":
      case "str":
        ie(e, 4, Lw(r, a, (t.v || "").slice(0, 255)));
        return;
    }
  ie(e, 1, ai(null, r, a));
}
function Uw(e, t, r, a) {
  var n = Array.isArray(t), i = Ne(t["!ref"] || "A1"), s, f = "", c = [];
  if (i.e.c > 255 || i.e.r > 16383) {
    if (a.WTF)
      throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    i.e.c = Math.min(i.e.c, 255), i.e.r = Math.min(i.e.c, 16383), s = Se(i);
  }
  for (var o = i.s.r; o <= i.e.r; ++o) {
    f = ar(o);
    for (var l = i.s.c; l <= i.e.c; ++l) {
      o === i.s.r && (c[l] = Ye(l)), s = c[l] + f;
      var u = n ? (t[o] || [])[l] : t[s];
      u && Mw(e, u, o, l);
    }
  }
}
function Ww(e, t) {
  for (var r = t || {}, a = zr(), n = 0, i = 0; i < e.SheetNames.length; ++i)
    e.SheetNames[i] == r.sheet && (n = i);
  if (n == 0 && r.sheet && e.SheetNames[0] != r.sheet)
    throw new Error("Sheet not found: " + r.sheet);
  return ie(a, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, ys(e, 16, r)), Uw(a, e.Sheets[e.SheetNames[n]], n, r), ie(a, 10), a.end();
}
function Hw(e, t, r) {
  ie(e, 49, Px({
    sz: 12,
    color: { theme: 1 },
    name: "Arial",
    family: 2,
    scheme: "minor"
  }, r));
}
function Vw(e, t, r) {
  t && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n)
      t[n] != null && ie(e, 1054, Hx(n, t[n], r));
  });
}
function Xw(e, t) {
  var r = z(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), ie(e, 2151, r), r = z(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), Ho(Ne(t["!ref"] || "A1"), r), r.write_shift(4, 4), ie(e, 2152, r);
}
function Gw(e, t) {
  for (var r = 0; r < 16; ++r)
    ie(e, 224, jf({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(a) {
    ie(e, 224, jf(a, 0, t));
  });
}
function zw(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var a = t["!links"][r];
    ie(e, 440, pd(a)), a[1].Tooltip && ie(e, 2048, md(a));
  }
  delete t["!links"];
}
function jw(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function(a, n) {
      ++r <= 256 && a && ie(e, 125, kd(r0(n, a), n));
    });
  }
}
function $w(e, t, r, a, n) {
  var i = 16 + ca(n.cellXfs, t, n);
  if (t.v == null && !t.bf) {
    ie(e, 513, Sa(r, a, i));
    return;
  }
  if (t.bf)
    ie(e, 6, wg(t, r, a, n, i));
  else
    switch (t.t) {
      case "d":
      case "n":
        var s = t.t == "d" ? mr(Ke(t.v)) : t.v;
        ie(e, 515, Qx(r, a, s, i));
        break;
      case "b":
      case "e":
        ie(e, 517, qx(r, a, t.v, i, n, t.t));
        break;
      case "s":
      case "str":
        if (n.bookSST) {
          var f = Ns(n.Strings, t.v, n.revStrings);
          ie(e, 253, Lx(r, a, f, i));
        } else
          ie(e, 516, Ux(r, a, (t.v || "").slice(0, 255), i, n));
        break;
      default:
        ie(e, 513, Sa(r, a, i));
    }
}
function Yw(e, t, r) {
  var a = zr(), n = r.SheetNames[e], i = r.Sheets[n] || {}, s = (r || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, c = Array.isArray(i), o = t.biff == 8, l, u = "", h = [], d = Ne(i["!ref"] || "A1"), p = o ? 65536 : 16384;
  if (d.e.c > 255 || d.e.r >= p) {
    if (t.WTF)
      throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    d.e.c = Math.min(d.e.c, 255), d.e.r = Math.min(d.e.c, p - 1);
  }
  ie(a, 2057, ys(r, 16, t)), ie(a, 13, lt(1)), ie(a, 12, lt(100)), ie(a, 15, Wr(!0)), ie(a, 17, Wr(!1)), ie(a, 16, Ta(1e-3)), ie(a, 95, Wr(!0)), ie(a, 42, Wr(!1)), ie(a, 43, Wr(!1)), ie(a, 130, lt(1)), ie(a, 128, Jx([0, 0])), ie(a, 131, Wr(!1)), ie(a, 132, Wr(!1)), o && jw(a, i["!cols"]), ie(a, 512, Xx(d, t)), o && (i["!links"] = []);
  for (var x = d.s.r; x <= d.e.r; ++x) {
    u = ar(x);
    for (var v = d.s.c; v <= d.e.c; ++v) {
      x === d.s.r && (h[v] = Ye(v)), l = h[v] + u;
      var _ = c ? (i[x] || [])[v] : i[l];
      _ && ($w(a, _, x, v, t), o && _.l && i["!links"].push([l, _.l]));
    }
  }
  var T = f.CodeName || f.name || n;
  return o && ie(a, 574, Ix((s.Views || [])[0])), o && (i["!merges"] || []).length && ie(a, 229, od(i["!merges"])), o && zw(a, i), ie(a, 442, Lo(T)), o && Xw(a, i), ie(
    a,
    10
    /* EOF */
  ), a.end();
}
function Kw(e, t, r) {
  var a = zr(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = (
    /*::((*/
    n.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), f = r.biff == 8, c = r.biff == 5;
  if (ie(a, 2057, ys(e, 5, r)), r.bookType == "xla" && ie(
    a,
    135
    /* Addin */
  ), ie(a, 225, f ? lt(1200) : null), ie(a, 193, q1(2)), c && ie(
    a,
    191
    /* ToolbarHdr */
  ), c && ie(
    a,
    192
    /* ToolbarEnd */
  ), ie(
    a,
    226
    /* InterfaceEnd */
  ), ie(a, 92, _x("SheetJS", r)), ie(a, 66, lt(f ? 1200 : 1252)), f && ie(a, 353, lt(0)), f && ie(
    a,
    448
    /* Excel9File */
  ), ie(a, 317, Fd(e.SheetNames.length)), f && e.vbaraw && ie(
    a,
    211
    /* ObProj */
  ), f && e.vbaraw) {
    var o = s.CodeName || "ThisWorkbook";
    ie(a, 442, Lo(o));
  }
  ie(a, 156, lt(17)), ie(a, 25, Wr(!1)), ie(a, 18, Wr(!1)), ie(a, 19, lt(0)), f && ie(a, 431, Wr(!1)), f && ie(a, 444, lt(0)), ie(a, 61, Dx()), ie(a, 64, Wr(!1)), ie(a, 141, lt(0)), ie(a, 34, Wr(C_(e) == "true")), ie(a, 14, Wr(!0)), f && ie(a, 439, Wr(!1)), ie(a, 218, lt(0)), Hw(a, e, r), Vw(a, e.SSF, r), Gw(a, r), f && ie(a, 352, Wr(!1));
  var l = a.end(), u = zr();
  f && ie(u, 140, _d()), f && r.Strings && Pw(u, 252, Sx(r.Strings)), ie(
    u,
    10
    /* EOF */
  );
  var h = u.end(), d = zr(), p = 0, x = 0;
  for (x = 0; x < e.SheetNames.length; ++x)
    p += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[x].length;
  var v = l.length + p + h.length;
  for (x = 0; x < e.SheetNames.length; ++x) {
    var _ = i[x] || {};
    ie(d, 133, Tx({ pos: v, hs: _.Hidden || 0, dt: 0, name: e.SheetNames[x] }, r)), v += t[x].length;
  }
  var T = d.end();
  if (p != T.length)
    throw new Error("BS8 " + p + " != " + T.length);
  var g = [];
  return l.length && g.push(l), T.length && g.push(T), h.length && g.push(h), wr(g);
}
function Jw(e, t) {
  var r = t || {}, a = [];
  e && !e.SSF && (e.SSF = ze(pe)), e && e.SSF && (an(), Jn(e.SSF), r.revssf = Ki(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, Us(r), r.cellXfs = [], ca(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n)
    a[a.length] = Yw(n, r, e);
  return a.unshift(Kw(e, a, r)), wr(a);
}
function Dl(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var a = e.Sheets[e.SheetNames[r]];
    if (!(!a || !a["!ref"])) {
      var n = Hr(a["!ref"]);
      n.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var i = t || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return Jw(e, t);
    case 4:
    case 3:
    case 2:
      return Ww(e, t);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function fc(e, t) {
  var r = t || {}, a = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var n = e.match(/<table/i);
  if (!n)
    throw new Error("Invalid HTML: could not find <table>");
  var i = e.match(/<\/table/i), s = n.index, f = i && i.index || e.length, c = Bh(e.slice(s, f), /(:?<tr[^>]*>)/i, "<tr>"), o = -1, l = 0, u = 0, h = 0, d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, p = [];
  for (s = 0; s < c.length; ++s) {
    var x = c[s].trim(), v = x.slice(0, 3).toLowerCase();
    if (v == "<tr") {
      if (++o, r.sheetRows && r.sheetRows <= o) {
        --o;
        break;
      }
      l = 0;
      continue;
    }
    if (!(v != "<td" && v != "<th")) {
      var _ = x.split(/<\/t[dh]>/i);
      for (f = 0; f < _.length; ++f) {
        var T = _[f].trim();
        if (T.match(/<t[dh]/i)) {
          for (var g = T, D = 0; g.charAt(0) == "<" && (D = g.indexOf(">")) > -1; )
            g = g.slice(D + 1);
          for (var P = 0; P < p.length; ++P) {
            var O = p[P];
            O.s.c == l && O.s.r < o && o <= O.e.r && (l = O.e.c + 1, P = -1);
          }
          var k = Ee(T.slice(0, T.indexOf(">")));
          h = k.colspan ? +k.colspan : 1, ((u = +k.rowspan) > 1 || h > 1) && p.push({ s: { r: o, c: l }, e: { r: o + (u || 1) - 1, c: l + h - 1 } });
          var I = k.t || k["data-t"] || "";
          if (!g.length) {
            l += h;
            continue;
          }
          if (g = ao(g), d.s.r > o && (d.s.r = o), d.e.r < o && (d.e.r = o), d.s.c > l && (d.s.c = l), d.e.c < l && (d.e.c = l), !g.length) {
            l += h;
            continue;
          }
          var b = { t: "s", v: g };
          r.raw || !g.trim().length || I == "s" || (g === "TRUE" ? b = { t: "b", v: !0 } : g === "FALSE" ? b = { t: "b", v: !1 } : isNaN(mt(g)) ? isNaN(en(g).getDate()) || (b = { t: "d", v: Ke(g) }, r.cellDates || (b = { t: "n", v: mr(b.v) }), b.z = r.dateNF || pe[14]) : b = { t: "n", v: mt(g) }), r.dense ? (a[o] || (a[o] = []), a[o][l] = b) : a[ge({ r: o, c: l })] = b, l += h;
        }
      }
    }
  }
  return a["!ref"] = Se(d), p.length && (a["!merges"] = p), a;
}
function Ol(e, t, r, a) {
  for (var n = e["!merges"] || [], i = [], s = t.s.c; s <= t.e.c; ++s) {
    for (var f = 0, c = 0, o = 0; o < n.length; ++o)
      if (!(n[o].s.r > r || n[o].s.c > s) && !(n[o].e.r < r || n[o].e.c < s)) {
        if (n[o].s.r < r || n[o].s.c < s) {
          f = -1;
          break;
        }
        f = n[o].e.r - n[o].s.r + 1, c = n[o].e.c - n[o].s.c + 1;
        break;
      }
    if (!(f < 0)) {
      var l = ge({ r, c: s }), u = a.dense ? (e[r] || [])[s] : e[l], h = u && u.v != null && (u.h || cs(u.w || (bt(u), u.w) || "")) || "", d = {};
      f > 1 && (d.rowspan = f), c > 1 && (d.colspan = c), a.editable ? h = '<span contenteditable="true">' + h + "</span>" : u && (d["data-t"] = u && u.t || "z", u.v != null && (d["data-v"] = u.v), u.z != null && (d["data-z"] = u.z), u.l && (u.l.Target || "#").charAt(0) != "#" && (h = '<a href="' + u.l.Target + '">' + h + "</a>")), d.id = (a.id || "sjs") + "-" + l, i.push(ne("td", h, d));
    }
  }
  var p = "<tr>";
  return p + i.join("") + "</tr>";
}
var Il = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', Nl = "</body></html>";
function qw(e, t) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0)
    throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1)
    return fa(fc(r[0], t), t);
  var a = Gs();
  return r.forEach(function(n, i) {
    zs(a, fc(n, t), "Sheet" + (i + 1));
  }), a;
}
function Rl(e, t, r) {
  var a = [];
  return a.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Pl(e, t) {
  var r = t || {}, a = r.header != null ? r.header : Il, n = r.footer != null ? r.footer : Nl, i = [a], s = Hr(e["!ref"]);
  r.dense = Array.isArray(e), i.push(Rl(e, s, r));
  for (var f = s.s.r; f <= s.e.r; ++f)
    i.push(Ol(e, s, f, r));
  return i.push("</table>" + n), i.join("");
}
function Bl(e, t, r) {
  var a = r || {}, n = 0, i = 0;
  if (a.origin != null)
    if (typeof a.origin == "number")
      n = a.origin;
    else {
      var s = typeof a.origin == "string" ? er(a.origin) : a.origin;
      n = s.r, i = s.c;
    }
  var f = t.getElementsByTagName("tr"), c = Math.min(a.sheetRows || 1e7, f.length), o = { s: { r: 0, c: 0 }, e: { r: n, c: i } };
  if (e["!ref"]) {
    var l = Hr(e["!ref"]);
    o.s.r = Math.min(o.s.r, l.s.r), o.s.c = Math.min(o.s.c, l.s.c), o.e.r = Math.max(o.e.r, l.e.r), o.e.c = Math.max(o.e.c, l.e.c), n == -1 && (o.e.r = n = l.e.r + 1);
  }
  var u = [], h = 0, d = e["!rows"] || (e["!rows"] = []), p = 0, x = 0, v = 0, _ = 0, T = 0, g = 0;
  for (e["!cols"] || (e["!cols"] = []); p < f.length && x < c; ++p) {
    var D = f[p];
    if (cc(D)) {
      if (a.display)
        continue;
      d[x] = { hidden: !0 };
    }
    var P = D.children;
    for (v = _ = 0; v < P.length; ++v) {
      var O = P[v];
      if (!(a.display && cc(O))) {
        var k = O.hasAttribute("data-v") ? O.getAttribute("data-v") : O.hasAttribute("v") ? O.getAttribute("v") : ao(O.innerHTML), I = O.getAttribute("data-z") || O.getAttribute("z");
        for (h = 0; h < u.length; ++h) {
          var b = u[h];
          b.s.c == _ + i && b.s.r < x + n && x + n <= b.e.r && (_ = b.e.c + 1 - i, h = -1);
        }
        g = +O.getAttribute("colspan") || 1, ((T = +O.getAttribute("rowspan") || 1) > 1 || g > 1) && u.push({ s: { r: x + n, c: _ + i }, e: { r: x + n + (T || 1) - 1, c: _ + i + (g || 1) - 1 } });
        var G = { t: "s", v: k }, M = O.getAttribute("data-t") || O.getAttribute("t") || "";
        k != null && (k.length == 0 ? G.t = M || "z" : a.raw || k.trim().length == 0 || M == "s" || (k === "TRUE" ? G = { t: "b", v: !0 } : k === "FALSE" ? G = { t: "b", v: !1 } : isNaN(mt(k)) ? isNaN(en(k).getDate()) || (G = { t: "d", v: Ke(k) }, a.cellDates || (G = { t: "n", v: mr(G.v) }), G.z = a.dateNF || pe[14]) : G = { t: "n", v: mt(k) })), G.z === void 0 && I != null && (G.z = I);
        var B = "", K = O.getElementsByTagName("A");
        if (K && K.length)
          for (var oe = 0; oe < K.length && !(K[oe].hasAttribute("href") && (B = K[oe].getAttribute("href"), B.charAt(0) != "#")); ++oe)
            ;
        B && B.charAt(0) != "#" && (G.l = { Target: B }), a.dense ? (e[x + n] || (e[x + n] = []), e[x + n][_ + i] = G) : e[ge({ c: _ + i, r: x + n })] = G, o.e.c < _ + i && (o.e.c = _ + i), _ += g;
      }
    }
    ++x;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), o.e.r = Math.max(o.e.r, x - 1 + n), e["!ref"] = Se(o), x >= c && (e["!fullref"] = Se((o.e.r = f.length - p + x - 1 + n, o))), e;
}
function Ll(e, t) {
  var r = t || {}, a = r.dense ? [] : {};
  return Bl(a, e, t);
}
function Zw(e, t) {
  return fa(Ll(e, t), t);
}
function cc(e) {
  var t = "", r = Qw(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function Qw(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function eE(e) {
  var t = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = Le(t.replace(/<[^>]*>/g, ""));
  return [r];
}
var oc = {
  /* ods name: [short ssf fmt, long ssf fmt] */
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  /* there is no native representation of LO "Q" format */
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function Ml(e, t) {
  var r = t || {}, a = os(e), n = [], i, s, f = { name: "" }, c = "", o = 0, l, u, h = {}, d = [], p = r.dense ? [] : {}, x, v, _ = { value: "" }, T = "", g = 0, D = [], P = -1, O = -1, k = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, I = 0, b = {}, G = [], M = {}, B = 0, K = 0, oe = [], ee = 1, le = 1, fe = [], De = { Names: [] }, V = {}, ve = ["", ""], me = [], A = {}, L = "", N = 0, R = !1, Y = !1, te = 0;
  for (Mn.lastIndex = 0, a = a.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); x = Mn.exec(a); )
    switch (x[3] = x[3].replace(/_.*$/, "")) {
      case "table":
      case "工作表":
        x[1] === "/" ? (k.e.c >= k.s.c && k.e.r >= k.s.r ? p["!ref"] = Se(k) : p["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= k.e.r && (p["!fullref"] = p["!ref"], k.e.r = r.sheetRows - 1, p["!ref"] = Se(k)), G.length && (p["!merges"] = G), oe.length && (p["!rows"] = oe), l.name = l.名称 || l.name, typeof JSON < "u" && JSON.stringify(l), d.push(l.name), h[l.name] = p, Y = !1) : x[0].charAt(x[0].length - 2) !== "/" && (l = Ee(x[0], !1), P = O = -1, k.s.r = k.s.c = 1e7, k.e.r = k.e.c = 0, p = r.dense ? [] : {}, G = [], oe = [], Y = !0);
        break;
      case "table-row-group":
        x[1] === "/" ? --I : ++I;
        break;
      case "table-row":
      case "行":
        if (x[1] === "/") {
          P += ee, ee = 1;
          break;
        }
        if (u = Ee(x[0], !1), u.行号 ? P = u.行号 - 1 : P == -1 && (P = 0), ee = +u["number-rows-repeated"] || 1, ee < 10)
          for (te = 0; te < ee; ++te)
            I > 0 && (oe[P + te] = { level: I });
        O = -1;
        break;
      case "covered-table-cell":
        x[1] !== "/" && ++O, r.sheetStubs && (r.dense ? (p[P] || (p[P] = []), p[P][O] = { t: "z" }) : p[ge({ r: P, c: O })] = { t: "z" }), T = "", D = [];
        break;
      case "table-cell":
      case "数据":
        if (x[0].charAt(x[0].length - 2) === "/")
          ++O, _ = Ee(x[0], !1), le = parseInt(_["number-columns-repeated"] || "1", 10), v = {
            t: "z",
            v: null
            /*:: , z:null, w:"",c:[]*/
          }, _.formula && r.cellFormula != !1 && (v.f = nc(Le(_.formula))), (_.数据类型 || _["value-type"]) == "string" && (v.t = "s", v.v = Le(_["string-value"] || ""), r.dense ? (p[P] || (p[P] = []), p[P][O] = v) : p[ge({ r: P, c: O })] = v), O += le - 1;
        else if (x[1] !== "/") {
          ++O, T = "", g = 0, D = [], le = 1;
          var ae = ee ? P + ee - 1 : P;
          if (O > k.e.c && (k.e.c = O), O < k.s.c && (k.s.c = O), P < k.s.r && (k.s.r = P), ae > k.e.r && (k.e.r = ae), _ = Ee(x[0], !1), me = [], A = {}, v = {
            t: _.数据类型 || _["value-type"],
            v: null
            /*:: , z:null, w:"",c:[]*/
          }, r.cellFormula)
            if (_.formula && (_.formula = Le(_.formula)), _["number-matrix-columns-spanned"] && _["number-matrix-rows-spanned"] && (B = parseInt(_["number-matrix-rows-spanned"], 10) || 0, K = parseInt(_["number-matrix-columns-spanned"], 10) || 0, M = { s: { r: P, c: O }, e: { r: P + B - 1, c: O + K - 1 } }, v.F = Se(M), fe.push([M, v.F])), _.formula)
              v.f = nc(_.formula);
            else
              for (te = 0; te < fe.length; ++te)
                P >= fe[te][0].s.r && P <= fe[te][0].e.r && O >= fe[te][0].s.c && O <= fe[te][0].e.c && (v.F = fe[te][1]);
          switch ((_["number-columns-spanned"] || _["number-rows-spanned"]) && (B = parseInt(_["number-rows-spanned"], 10) || 0, K = parseInt(_["number-columns-spanned"], 10) || 0, M = { s: { r: P, c: O }, e: { r: P + B - 1, c: O + K - 1 } }, G.push(M)), _["number-columns-repeated"] && (le = parseInt(_["number-columns-repeated"], 10)), v.t) {
            case "boolean":
              v.t = "b", v.v = $e(_["boolean-value"]);
              break;
            case "float":
              v.t = "n", v.v = parseFloat(_.value);
              break;
            case "percentage":
              v.t = "n", v.v = parseFloat(_.value);
              break;
            case "currency":
              v.t = "n", v.v = parseFloat(_.value);
              break;
            case "date":
              v.t = "d", v.v = Ke(_["date-value"]), r.cellDates || (v.t = "n", v.v = mr(v.v)), v.z = "m/d/yy";
              break;
            case "time":
              v.t = "n", v.v = Nh(_["time-value"]) / 86400, r.cellDates && (v.t = "d", v.v = Ji(v.v)), v.z = "HH:MM:SS";
              break;
            case "number":
              v.t = "n", v.v = parseFloat(_.数据数值);
              break;
            default:
              if (v.t === "string" || v.t === "text" || !v.t)
                v.t = "s", _["string-value"] != null && (T = Le(_["string-value"]), D = []);
              else
                throw new Error("Unsupported value type " + v.t);
          }
        } else {
          if (R = !1, v.t === "s" && (v.v = T || "", D.length && (v.R = D), R = g == 0), V.Target && (v.l = V), me.length > 0 && (v.c = me, me = []), T && r.cellText !== !1 && (v.w = T), R && (v.t = "z", delete v.v), (!R || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= P))
            for (var Q = 0; Q < ee; ++Q) {
              if (le = parseInt(_["number-columns-repeated"] || "1", 10), r.dense)
                for (p[P + Q] || (p[P + Q] = []), p[P + Q][O] = Q == 0 ? v : ze(v); --le > 0; )
                  p[P + Q][O + le] = ze(v);
              else
                for (p[ge({ r: P + Q, c: O })] = v; --le > 0; )
                  p[ge({ r: P + Q, c: O + le })] = ze(v);
              k.e.c <= O && (k.e.c = O);
            }
          le = parseInt(_["number-columns-repeated"] || "1", 10), O += le - 1, le = 0, v = {
            /*:: t:"", v:null, z:null, w:"",c:[]*/
          }, T = "", D = [];
        }
        V = {};
        break;
      case "document":
      case "document-content":
      case "电子表格文档":
      case "spreadsheet":
      case "主体":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (x[1] === "/") {
          if ((i = n.pop())[0] !== x[3])
            throw "Bad state: " + i;
        } else
          x[0].charAt(x[0].length - 2) !== "/" && n.push([x[3], !0]);
        break;
      case "annotation":
        if (x[1] === "/") {
          if ((i = n.pop())[0] !== x[3])
            throw "Bad state: " + i;
          A.t = T, D.length && (A.R = D), A.a = L, me.push(A);
        } else
          x[0].charAt(x[0].length - 2) !== "/" && n.push([x[3], !1]);
        L = "", N = 0, T = "", g = 0, D = [];
        break;
      case "creator":
        x[1] === "/" ? L = a.slice(N, x.index) : N = x.index + x[0].length;
        break;
      case "meta":
      case "元数据":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (x[1] === "/") {
          if ((i = n.pop())[0] !== x[3])
            throw "Bad state: " + i;
        } else
          x[0].charAt(x[0].length - 2) !== "/" && n.push([x[3], !1]);
        T = "", g = 0, D = [];
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (x[1] === "/") {
          if (b[f.name] = c, (i = n.pop())[0] !== x[3])
            throw "Bad state: " + i;
        } else
          x[0].charAt(x[0].length - 2) !== "/" && (c = "", f = Ee(x[0], !1), n.push([x[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            s = Ee(x[0], !1), c += oc[x[3]][s.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            s = Ee(x[0], !1), c += oc[x[3]][s.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (x[0].slice(-2) === "/>")
          break;
        if (x[1] === "/")
          switch (n[n.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              c += a.slice(o, x.index);
              break;
          }
        else
          o = x.index + x[0].length;
        break;
      case "named-range":
        s = Ee(x[0], !1), ve = S0(s["cell-range-address"]);
        var q = { Name: s.name, Ref: ve[0] + "!" + ve[1] };
        Y && (q.Sheet = d.length), De.Names.push(q);
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "电子表格":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "文本串":
        if (["master-styles"].indexOf(n[n.length - 1][0]) > -1)
          break;
        if (x[1] === "/" && (!_ || !_["string-value"])) {
          var Fe = eE(a.slice(g, x.index));
          T = (T.length > 0 ? T + `
` : "") + Fe[0];
        } else
          Ee(x[0], !1), g = x.index + x[0].length;
        break;
      case "s":
        break;
      case "database-range":
        if (x[1] === "/")
          break;
        try {
          ve = S0(Ee(x[0])["target-range-address"]), h[ve[0]]["!autofilter"] = { ref: ve[1] };
        } catch {
        }
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "标题":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (x[1] !== "/") {
          if (V = Ee(x[0], !1), !V.href)
            break;
          V.Target = Le(V.href), delete V.href, V.Target.charAt(0) == "#" && V.Target.indexOf(".") > -1 ? (ve = S0(V.Target.slice(1)), V.Target = "#" + ve[0] + "!" + ve[1]) : V.Target.match(/^\.\.[\\\/]/) && (V.Target = V.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (x[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "表:":
          case "字:":
            break;
          default:
            if (r.WTF)
              throw new Error(x);
        }
    }
  var C = {
    Sheets: h,
    SheetNames: d,
    Workbook: De
  };
  return r.bookSheets && delete /*::(*/
  C.Sheets, C;
}
function lc(e, t) {
  t = t || {}, ot(e, "META-INF/manifest.xml") && I1(hr(e, "META-INF/manifest.xml"), t);
  var r = Zr(e, "content.xml");
  if (!r)
    throw new Error("Missing content.xml in ODS / UOF file");
  var a = Ml(Xe(r), t);
  return ot(e, "meta.xml") && (a.Props = So(hr(e, "meta.xml"))), a;
}
function uc(e, t) {
  return Ml(e, t);
}
var rE = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + Ln({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return or + t;
  };
}(), hc = /* @__PURE__ */ function() {
  var e = function(i) {
    return Ve(i).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, a = function(i, s, f) {
    var c = [];
    c.push('      <table:table table:name="' + Ve(s.SheetNames[f]) + `" table:style-name="ta1">
`);
    var o = 0, l = 0, u = Hr(i["!ref"] || "A1"), h = i["!merges"] || [], d = 0, p = Array.isArray(i);
    if (i["!cols"])
      for (l = 0; l <= u.e.c; ++l)
        c.push("        <table:table-column" + (i["!cols"][l] ? ' table:style-name="co' + i["!cols"][l].ods + '"' : "") + `></table:table-column>
`);
    var x = "", v = i["!rows"] || [];
    for (o = 0; o < u.s.r; ++o)
      x = v[o] ? ' table:style-name="ro' + v[o].ods + '"' : "", c.push("        <table:table-row" + x + `></table:table-row>
`);
    for (; o <= u.e.r; ++o) {
      for (x = v[o] ? ' table:style-name="ro' + v[o].ods + '"' : "", c.push("        <table:table-row" + x + `>
`), l = 0; l < u.s.c; ++l)
        c.push(t);
      for (; l <= u.e.c; ++l) {
        var _ = !1, T = {}, g = "";
        for (d = 0; d != h.length; ++d)
          if (!(h[d].s.c > l) && !(h[d].s.r > o) && !(h[d].e.c < l) && !(h[d].e.r < o)) {
            (h[d].s.c != l || h[d].s.r != o) && (_ = !0), T["table:number-columns-spanned"] = h[d].e.c - h[d].s.c + 1, T["table:number-rows-spanned"] = h[d].e.r - h[d].s.r + 1;
            break;
          }
        if (_) {
          c.push(r);
          continue;
        }
        var D = ge({ r: o, c: l }), P = p ? (i[o] || [])[l] : i[D];
        if (P && P.f && (T["table:formula"] = Ve(Fg(P.f)), P.F && P.F.slice(0, D.length) == D)) {
          var O = Hr(P.F);
          T["table:number-matrix-columns-spanned"] = O.e.c - O.s.c + 1, T["table:number-matrix-rows-spanned"] = O.e.r - O.s.r + 1;
        }
        if (!P) {
          c.push(t);
          continue;
        }
        switch (P.t) {
          case "b":
            g = P.v ? "TRUE" : "FALSE", T["office:value-type"] = "boolean", T["office:boolean-value"] = P.v ? "true" : "false";
            break;
          case "n":
            g = P.w || String(P.v || 0), T["office:value-type"] = "float", T["office:value"] = P.v || 0;
            break;
          case "s":
          case "str":
            g = P.v == null ? "" : P.v, T["office:value-type"] = "string";
            break;
          case "d":
            g = P.w || Ke(P.v).toISOString(), T["office:value-type"] = "date", T["office:date-value"] = Ke(P.v).toISOString(), T["table:style-name"] = "ce1";
            break;
          default:
            c.push(t);
            continue;
        }
        var k = e(g);
        if (P.l && P.l.Target) {
          var I = P.l.Target;
          I = I.charAt(0) == "#" ? "#" + Ag(I.slice(1)) : I, I.charAt(0) != "#" && !I.match(/^\w+:/) && (I = "../" + I), k = ne("text:a", k, { "xlink:href": I.replace(/&/g, "&amp;") });
        }
        c.push("          " + ne("table:table-cell", ne("text:p", k, {}), T) + `
`);
      }
      c.push(`        </table:table-row>
`);
    }
    return c.push(`      </table:table>
`), c.join("");
  }, n = function(i, s) {
    i.push(` <office:automatic-styles>
`), i.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), i.push(`   <number:month number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:day number:style="long"/>
`), i.push(`   <number:text>/</number:text>
`), i.push(`   <number:year/>
`), i.push(`  </number:date-style>
`);
    var f = 0;
    s.SheetNames.map(function(o) {
      return s.Sheets[o];
    }).forEach(function(o) {
      if (o && o["!cols"]) {
        for (var l = 0; l < o["!cols"].length; ++l)
          if (o["!cols"][l]) {
            var u = o["!cols"][l];
            if (u.width == null && u.wpx == null && u.wch == null)
              continue;
            aa(u), u.ods = f;
            var h = o["!cols"][l].wpx + "px";
            i.push('  <style:style style:name="co' + f + `" style:family="table-column">
`), i.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + h + `"/>
`), i.push(`  </style:style>
`), ++f;
          }
      }
    });
    var c = 0;
    s.SheetNames.map(function(o) {
      return s.Sheets[o];
    }).forEach(function(o) {
      if (o && o["!rows"]) {
        for (var l = 0; l < o["!rows"].length; ++l)
          if (o["!rows"][l]) {
            o["!rows"][l].ods = c;
            var u = o["!rows"][l].hpx + "px";
            i.push('  <style:style style:name="ro' + c + `" style:family="table-row">
`), i.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + u + `"/>
`), i.push(`  </style:style>
`), ++c;
          }
      }
    }), i.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), i.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), i.push(`  </style:style>
`), i.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), i.push(` </office:automatic-styles>
`);
  };
  return function(s, f) {
    var c = [or], o = Ln({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), l = Ln({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    f.bookType == "fods" ? (c.push("<office:document" + o + l + `>
`), c.push(ko().replace(/office:document-meta/g, "office:meta"))) : c.push("<office:document-content" + o + `>
`), n(c, s), c.push(`  <office:body>
`), c.push(`    <office:spreadsheet>
`);
    for (var u = 0; u != s.SheetNames.length; ++u)
      c.push(a(s.Sheets[s.SheetNames[u]], s, u));
    return c.push(`    </office:spreadsheet>
`), c.push(`  </office:body>
`), f.bookType == "fods" ? c.push("</office:document>") : c.push("</office:document-content>"), c.join("");
  };
}();
function Ul(e, t) {
  if (t.bookType == "fods")
    return hc(e, t);
  var r = is(), a = "", n = [], i = [];
  return a = "mimetype", ye(r, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", ye(r, a, hc(e, t)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", ye(r, a, rE(e, t)), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", ye(r, a, or + ko(
    /*::wb, opts*/
  )), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", ye(r, a, P1(
    i
    /*, opts*/
  )), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", ye(r, a, N1(
    n
    /*, opts*/
  )), r;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function ya(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function J0(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Xe(sa(e));
}
function tE(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : qr(yt(e));
}
function aE(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var a = 0; a < t.length; ++a)
        if (e[r + a] != t[a])
          continue e;
      return !0;
    }
  return !1;
}
function ia(e) {
  var t = e.reduce(function(n, i) {
    return n + i.length;
  }, 0), r = new Uint8Array(t), a = 0;
  return e.forEach(function(n) {
    r.set(n, a), a += n.length;
  }), r;
}
function xc(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function nE(e, t) {
  for (var r = (e[t + 15] & 127) << 7 | e[t + 14] >> 1, a = e[t + 14] & 1, n = t + 13; n >= t; --n)
    a = a * 256 + e[n];
  return (e[t + 15] & 128 ? -a : a) * Math.pow(10, r - 6176);
}
function iE(e, t, r) {
  var a = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, n = r / Math.pow(10, a - 6176);
  e[t + 15] |= a >> 7, e[t + 14] |= (a & 127) << 1;
  for (var i = 0; n >= 1; ++i, n /= 256)
    e[t + i] = n & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function zn(e, t) {
  var r = t ? t[0] : 0, a = e[r] & 127;
  e:
    if (e[r++] >= 128 && (a |= (e[r] & 127) << 7, e[r++] < 128 || (a |= (e[r] & 127) << 14, e[r++] < 128) || (a |= (e[r] & 127) << 21, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (a += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), a;
}
function We(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function nr(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function Me(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var a = r[0], n = zn(e, r), i = n & 7;
    n = Math.floor(n / 8);
    var s = 0, f;
    if (n == 0)
      break;
    switch (i) {
      case 0:
        {
          for (var c = r[0]; e[r[0]++] >= 128; )
            ;
          f = e.slice(c, r[0]);
        }
        break;
      case 5:
        s = 4, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 1:
        s = 8, f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 2:
        s = zn(e, r), f = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(n, " at offset ").concat(a));
    }
    var o = { data: f, type: i };
    t[n] == null ? t[n] = [o] : t[n].push(o);
  }
  return t;
}
function kr(e) {
  var t = [];
  return e.forEach(function(r, a) {
    r.forEach(function(n) {
      n.data && (t.push(We(a * 8 + n.type)), n.type == 2 && t.push(We(n.data.length)), t.push(n.data));
    });
  }), ia(t);
}
function Ls(e, t) {
  return (e == null ? void 0 : e.map(function(r) {
    return t(r.data);
  })) || [];
}
function st(e) {
  for (var t, r = [], a = [0]; a[0] < e.length; ) {
    var n = zn(e, a), i = Me(e.slice(a[0], a[0] + n));
    a[0] += n;
    var s = {
      id: nr(i[1][0].data),
      messages: []
    };
    i[2].forEach(function(f) {
      var c = Me(f.data), o = nr(c[3][0].data);
      s.messages.push({
        meta: c,
        data: e.slice(a[0], a[0] + o)
      }), a[0] += o;
    }), (t = i[3]) != null && t[0] && (s.merge = nr(i[3][0].data) >>> 0 > 0), r.push(s);
  }
  return r;
}
function La(e) {
  var t = [];
  return e.forEach(function(r) {
    var a = [];
    a[1] = [{ data: We(r.id), type: 0 }], a[2] = [], r.merge != null && (a[3] = [{ data: We(+!!r.merge), type: 0 }]);
    var n = [];
    r.messages.forEach(function(s) {
      n.push(s.data), s.meta[3] = [{ type: 0, data: We(s.data.length) }], a[2].push({ data: kr(s.meta), type: 2 });
    });
    var i = kr(a);
    t.push(We(i.length)), t.push(i), n.forEach(function(s) {
      return t.push(s);
    });
  }), ia(t);
}
function sE(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], a = zn(t, r), n = []; r[0] < t.length; ) {
    var i = t[r[0]] & 3;
    if (i == 0) {
      var s = t[r[0]++] >> 2;
      if (s < 60)
        ++s;
      else {
        var f = s - 59;
        s = t[r[0]], f > 1 && (s |= t[r[0] + 1] << 8), f > 2 && (s |= t[r[0] + 2] << 16), f > 3 && (s |= t[r[0] + 3] << 24), s >>>= 0, s++, r[0] += f;
      }
      n.push(t.slice(r[0], r[0] + s)), r[0] += s;
      continue;
    } else {
      var c = 0, o = 0;
      if (i == 1 ? (o = (t[r[0]] >> 2 & 7) + 4, c = (t[r[0]++] & 224) << 3, c |= t[r[0]++]) : (o = (t[r[0]++] >> 2) + 1, i == 2 ? (c = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (c = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), n = [ia(n)], c == 0)
        throw new Error("Invalid offset 0");
      if (c > n[0].length)
        throw new Error("Invalid offset beyond length");
      if (o >= c)
        for (n.push(n[0].slice(-c)), o -= c; o >= n[n.length - 1].length; )
          n.push(n[n.length - 1]), o -= n[n.length - 1].length;
      n.push(n[0].slice(-c, -c + o));
    }
  }
  var l = ia(n);
  if (l.length != a)
    throw new Error("Unexpected length: ".concat(l.length, " != ").concat(a));
  return l;
}
function ft(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var a = e[r++], n = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(sE(a, e.slice(r, r + n))), r += n;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return ia(t);
}
function Ma(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var a = Math.min(e.length - r, 268435455), n = new Uint8Array(4);
    t.push(n);
    var i = We(a), s = i.length;
    t.push(i), a <= 60 ? (s++, t.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, t.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, t.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, t.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, t.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), t.push(e.slice(r, r + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, r += a;
  }
  return ia(t);
}
function fE(e, t, r, a) {
  var n = ya(e), i = n.getUint32(4, !0), s = (a > 1 ? 12 : 8) + xc(i & (a > 1 ? 3470 : 398)) * 4, f = -1, c = -1, o = NaN, l = new Date(2001, 0, 1);
  i & 512 && (f = n.getUint32(s, !0), s += 4), s += xc(i & (a > 1 ? 12288 : 4096)) * 4, i & 16 && (c = n.getUint32(s, !0), s += 4), i & 32 && (o = n.getFloat64(s, !0), s += 8), i & 64 && (l.setTime(l.getTime() + n.getFloat64(s, !0) * 1e3), s += 8);
  var u;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: o };
      break;
    case 3:
      u = { t: "s", v: t[c] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: o > 0 };
      break;
    case 7:
      u = { t: "n", v: o / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (f > -1)
        u = { t: "s", v: r[f] };
      else if (c > -1)
        u = { t: "s", v: t[c] };
      else if (!isNaN(o))
        u = { t: "n", v: o };
      else
        throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return u;
}
function cE(e, t, r) {
  var a = ya(e), n = a.getUint32(8, !0), i = 12, s = -1, f = -1, c = NaN, o = NaN, l = new Date(2001, 0, 1);
  n & 1 && (c = nE(e, i), i += 16), n & 2 && (o = a.getFloat64(i, !0), i += 8), n & 4 && (l.setTime(l.getTime() + a.getFloat64(i, !0) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, !0), i += 4), n & 16 && (s = a.getUint32(i, !0), i += 4);
  var u;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: c };
      break;
    case 3:
      u = { t: "s", v: t[f] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: o > 0 };
      break;
    case 7:
      u = { t: "n", v: o / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1)
        u = { t: "s", v: r[s] };
      else
        throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      u = { t: "n", v: c };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e.slice(0, 4)));
  }
  return u;
}
function F0(e, t) {
  var r = new Uint8Array(32), a = ya(r), n = 12, i = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, iE(r, n, e.v), i |= 1, n += 16;
      break;
    case "b":
      r[1] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 2, n += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, a.setUint32(n, t.indexOf(e.v), !0), i |= 8, n += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return a.setUint32(8, i, !0), r.slice(0, n);
}
function A0(e, t) {
  var r = new Uint8Array(32), a = ya(r), n = 12, i = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, a.setFloat64(n, e.v, !0), i |= 32, n += 8;
      break;
    case "b":
      r[2] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 32, n += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, a.setUint32(n, t.indexOf(e.v), !0), i |= 16, n += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return a.setUint32(4, i, !0), r.slice(0, n);
}
function oE(e, t, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return fE(e, t, r, e[0]);
    case 5:
      return cE(e, t, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function br(e) {
  var t = Me(e);
  return zn(t[1][0].data);
}
function dc(e, t) {
  var r = Me(t.data), a = nr(r[1][0].data), n = r[3], i = [];
  return (n || []).forEach(function(s) {
    var f = Me(s.data), c = nr(f[1][0].data) >>> 0;
    switch (a) {
      case 1:
        i[c] = J0(f[3][0].data);
        break;
      case 8:
        {
          var o = e[br(f[9][0].data)][0], l = Me(o.data), u = e[br(l[1][0].data)][0], h = nr(u.meta[1][0].data);
          if (h != 2001)
            throw new Error("2000 unexpected reference to ".concat(h));
          var d = Me(u.data);
          i[c] = d[3].map(function(p) {
            return J0(p.data);
          }).join("");
        }
        break;
    }
  }), i;
}
function lE(e, t) {
  var r, a, n, i, s, f, c, o, l, u, h, d, p, x, v = Me(e), _ = nr(v[1][0].data) >>> 0, T = nr(v[2][0].data) >>> 0, g = ((a = (r = v[8]) == null ? void 0 : r[0]) == null ? void 0 : a.data) && nr(v[8][0].data) > 0 || !1, D, P;
  if ((i = (n = v[7]) == null ? void 0 : n[0]) != null && i.data && t != 0)
    D = (f = (s = v[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, P = (o = (c = v[6]) == null ? void 0 : c[0]) == null ? void 0 : o.data;
  else if ((u = (l = v[4]) == null ? void 0 : l[0]) != null && u.data && t != 1)
    D = (d = (h = v[4]) == null ? void 0 : h[0]) == null ? void 0 : d.data, P = (x = (p = v[3]) == null ? void 0 : p[0]) == null ? void 0 : x.data;
  else
    throw "NUMBERS Tile missing ".concat(t, " cell storage");
  for (var O = g ? 4 : 1, k = ya(D), I = [], b = 0; b < D.length / 2; ++b) {
    var G = k.getUint16(b * 2, !0);
    G < 65535 && I.push([b, G]);
  }
  if (I.length != T)
    throw "Expected ".concat(T, " cells, found ").concat(I.length);
  var M = [];
  for (b = 0; b < I.length - 1; ++b)
    M[I[b][0]] = P.subarray(I[b][1] * O, I[b + 1][1] * O);
  return I.length >= 1 && (M[I[I.length - 1][0]] = P.subarray(I[I.length - 1][1] * O)), { R: _, cells: M };
}
function uE(e, t) {
  var r, a = Me(t.data), n = (r = a == null ? void 0 : a[7]) != null && r[0] ? nr(a[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, i = Ls(a[5], function(s) {
    return lE(s, n);
  });
  return {
    nrows: nr(a[4][0].data) >>> 0,
    data: i.reduce(function(s, f) {
      return s[f.R] || (s[f.R] = []), f.cells.forEach(function(c, o) {
        if (s[f.R][o])
          throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(o));
        s[f.R][o] = c;
      }), s;
    }, [])
  };
}
function hE(e, t, r) {
  var a, n = Me(t.data), i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (i.e.r = (nr(n[6][0].data) >>> 0) - 1, i.e.r < 0)
    throw new Error("Invalid row varint ".concat(n[6][0].data));
  if (i.e.c = (nr(n[7][0].data) >>> 0) - 1, i.e.c < 0)
    throw new Error("Invalid col varint ".concat(n[7][0].data));
  r["!ref"] = Se(i);
  var s = Me(n[4][0].data), f = dc(e, e[br(s[4][0].data)][0]), c = (a = s[17]) != null && a[0] ? dc(e, e[br(s[17][0].data)][0]) : [], o = Me(s[3][0].data), l = 0;
  o[1].forEach(function(u) {
    var h = Me(u.data), d = e[br(h[2][0].data)][0], p = nr(d.meta[1][0].data);
    if (p != 6002)
      throw new Error("6001 unexpected reference to ".concat(p));
    var x = uE(e, d);
    x.data.forEach(function(v, _) {
      v.forEach(function(T, g) {
        var D = ge({ r: l + _, c: g }), P = oE(T, f, c);
        P && (r[D] = P);
      });
    }), l += x.nrows;
  });
}
function xE(e, t) {
  var r = Me(t.data), a = { "!ref": "A1" }, n = e[br(r[2][0].data)], i = nr(n[0].meta[1][0].data);
  if (i != 6001)
    throw new Error("6000 unexpected reference to ".concat(i));
  return hE(e, n[0], a), a;
}
function dE(e, t) {
  var r, a = Me(t.data), n = {
    name: (r = a[1]) != null && r[0] ? J0(a[1][0].data) : "",
    sheets: []
  }, i = Ls(a[2], br);
  return i.forEach(function(s) {
    e[s].forEach(function(f) {
      var c = nr(f.meta[1][0].data);
      c == 6e3 && n.sheets.push(xE(e, f));
    });
  }), n;
}
function pE(e, t) {
  var r = Gs(), a = Me(t.data), n = Ls(a[1], br);
  if (n.forEach(function(i) {
    e[i].forEach(function(s) {
      var f = nr(s.meta[1][0].data);
      if (f == 2) {
        var c = dE(e, s);
        c.sheets.forEach(function(o, l) {
          zs(r, o, l == 0 ? c.name : c.name + "_" + l, !0);
        });
      }
    });
  }), r.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return r;
}
function C0(e) {
  var t, r, a, n, i = {}, s = [];
  if (e.FullPaths.forEach(function(c) {
    if (c.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(c) {
    if (c.name.match(/\.iwa$/)) {
      var o;
      try {
        o = ft(c.content);
      } catch (u) {
        return console.log("?? " + c.content.length + " " + (u.message || u));
      }
      var l;
      try {
        l = st(o);
      } catch (u) {
        return console.log("## " + (u.message || u));
      }
      l.forEach(function(u) {
        i[u.id] = u.messages, s.push(u.id);
      });
    }
  }), !s.length)
    throw new Error("File has no messages");
  var f = ((n = (a = (r = (t = i == null ? void 0 : i[1]) == null ? void 0 : t[0]) == null ? void 0 : r.meta) == null ? void 0 : a[1]) == null ? void 0 : n[0].data) && nr(i[1][0].meta[1][0].data) == 1 && i[1][0];
  if (f || s.forEach(function(c) {
    i[c].forEach(function(o) {
      var l = nr(o.meta[1][0].data) >>> 0;
      if (l == 1)
        if (!f)
          f = o;
        else
          throw new Error("Document has multiple roots");
    });
  }), !f)
    throw new Error("Cannot find Document root");
  return pE(i, f);
}
function vE(e, t, r) {
  var a, n, i, s;
  if (!((a = e[6]) != null && a[0]) || !((n = e[7]) != null && n[0]))
    throw "Mutation only works on post-BNC storages!";
  var f = ((s = (i = e[8]) == null ? void 0 : i[0]) == null ? void 0 : s.data) && nr(e[8][0].data) > 0 || !1;
  if (f)
    throw "Math only works with normal offsets";
  for (var c = 0, o = ya(e[7][0].data), l = 0, u = [], h = ya(e[4][0].data), d = 0, p = [], x = 0; x < t.length; ++x) {
    if (t[x] == null) {
      o.setUint16(x * 2, 65535, !0), h.setUint16(x * 2, 65535);
      continue;
    }
    o.setUint16(x * 2, l, !0), h.setUint16(x * 2, d, !0);
    var v, _;
    switch (typeof t[x]) {
      case "string":
        v = F0({ t: "s", v: t[x] }, r), _ = A0({ t: "s", v: t[x] }, r);
        break;
      case "number":
        v = F0({ t: "n", v: t[x] }, r), _ = A0({ t: "n", v: t[x] }, r);
        break;
      case "boolean":
        v = F0({ t: "b", v: t[x] }, r), _ = A0({ t: "b", v: t[x] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[x]);
    }
    u.push(v), l += v.length, p.push(_), d += _.length, ++c;
  }
  for (e[2][0].data = We(c); x < e[7][0].data.length / 2; ++x)
    o.setUint16(x * 2, 65535, !0), h.setUint16(x * 2, 65535, !0);
  return e[6][0].data = ia(u), e[3][0].data = ia(p), c;
}
function mE(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var a = Hr(r["!ref"]);
  a.s.r = a.s.c = 0;
  var n = !1;
  a.e.c > 9 && (n = !0, a.e.c = 9), a.e.r > 49 && (n = !0, a.e.r = 49), n && console.error("The Numbers writer is currently limited to ".concat(Se(a)));
  var i = Xi(r, { range: a, header: 1 }), s = ["~Sh33tJ5~"];
  i.forEach(function(L) {
    return L.forEach(function(N) {
      typeof N == "string" && s.push(N);
    });
  });
  var f = {}, c = [], o = de.read(t.numbers, { type: "base64" });
  o.FileIndex.map(function(L, N) {
    return [L, o.FullPaths[N]];
  }).forEach(function(L) {
    var N = L[0], R = L[1];
    if (N.type == 2 && N.name.match(/\.iwa/)) {
      var Y = N.content, te = ft(Y), ae = st(te);
      ae.forEach(function(Q) {
        c.push(Q.id), f[Q.id] = { deps: [], location: R, type: nr(Q.messages[0].meta[1][0].data) };
      });
    }
  }), c.sort(function(L, N) {
    return L - N;
  });
  var l = c.filter(function(L) {
    return L > 1;
  }).map(function(L) {
    return [L, We(L)];
  });
  o.FileIndex.map(function(L, N) {
    return [L, o.FullPaths[N]];
  }).forEach(function(L) {
    var N = L[0];
    if (L[1], !!N.name.match(/\.iwa/)) {
      var R = st(ft(N.content));
      R.forEach(function(Y) {
        Y.messages.forEach(function(te) {
          l.forEach(function(ae) {
            Y.messages.some(function(Q) {
              return nr(Q.meta[1][0].data) != 11006 && aE(Q.data, ae[1]);
            }) && f[ae[0]].deps.push(Y.id);
          });
        });
      });
    }
  });
  for (var u = de.find(o, f[1].location), h = st(ft(u.content)), d, p = 0; p < h.length; ++p) {
    var x = h[p];
    x.id == 1 && (d = x);
  }
  var v = br(Me(d.messages[0].data)[1][0].data);
  for (u = de.find(o, f[v].location), h = st(ft(u.content)), p = 0; p < h.length; ++p)
    x = h[p], x.id == v && (d = x);
  for (v = br(Me(d.messages[0].data)[2][0].data), u = de.find(o, f[v].location), h = st(ft(u.content)), p = 0; p < h.length; ++p)
    x = h[p], x.id == v && (d = x);
  for (v = br(Me(d.messages[0].data)[2][0].data), u = de.find(o, f[v].location), h = st(ft(u.content)), p = 0; p < h.length; ++p)
    x = h[p], x.id == v && (d = x);
  var _ = Me(d.messages[0].data);
  {
    _[6][0].data = We(a.e.r + 1), _[7][0].data = We(a.e.c + 1);
    var T = br(_[46][0].data), g = de.find(o, f[T].location), D = st(ft(g.content));
    {
      for (var P = 0; P < D.length && D[P].id != T; ++P)
        ;
      if (D[P].id != T)
        throw "Bad ColumnRowUIDMapArchive";
      var O = Me(D[P].messages[0].data);
      O[1] = [], O[2] = [], O[3] = [];
      for (var k = 0; k <= a.e.c; ++k) {
        var I = [];
        I[1] = I[2] = [{ type: 0, data: We(k + 420690) }], O[1].push({ type: 2, data: kr(I) }), O[2].push({ type: 0, data: We(k) }), O[3].push({ type: 0, data: We(k) });
      }
      O[4] = [], O[5] = [], O[6] = [];
      for (var b = 0; b <= a.e.r; ++b)
        I = [], I[1] = I[2] = [{ type: 0, data: We(b + 726270) }], O[4].push({ type: 2, data: kr(I) }), O[5].push({ type: 0, data: We(b) }), O[6].push({ type: 0, data: We(b) });
      D[P].messages[0].data = kr(O);
    }
    g.content = Ma(La(D)), g.size = g.content.length, delete _[46];
    var G = Me(_[4][0].data);
    {
      G[7][0].data = We(a.e.r + 1);
      var M = Me(G[1][0].data), B = br(M[2][0].data);
      g = de.find(o, f[B].location), D = st(ft(g.content));
      {
        if (D[0].id != B)
          throw "Bad HeaderStorageBucket";
        var K = Me(D[0].messages[0].data);
        for (b = 0; b < i.length; ++b) {
          var oe = Me(K[2][0].data);
          oe[1][0].data = We(b), oe[4][0].data = We(i[b].length), K[2][b] = { type: K[2][0].type, data: kr(oe) };
        }
        D[0].messages[0].data = kr(K);
      }
      g.content = Ma(La(D)), g.size = g.content.length;
      var ee = br(G[2][0].data);
      g = de.find(o, f[ee].location), D = st(ft(g.content));
      {
        if (D[0].id != ee)
          throw "Bad HeaderStorageBucket";
        for (K = Me(D[0].messages[0].data), k = 0; k <= a.e.c; ++k)
          oe = Me(K[2][0].data), oe[1][0].data = We(k), oe[4][0].data = We(a.e.r + 1), K[2][k] = { type: K[2][0].type, data: kr(oe) };
        D[0].messages[0].data = kr(K);
      }
      g.content = Ma(La(D)), g.size = g.content.length;
      var le = br(G[4][0].data);
      (function() {
        for (var L = de.find(o, f[le].location), N = st(ft(L.content)), R, Y = 0; Y < N.length; ++Y) {
          var te = N[Y];
          te.id == le && (R = te);
        }
        var ae = Me(R.messages[0].data);
        {
          ae[3] = [];
          var Q = [];
          s.forEach(function(C, je) {
            Q[1] = [{ type: 0, data: We(je) }], Q[2] = [{ type: 0, data: We(1) }], Q[3] = [{ type: 2, data: tE(C) }], ae[3].push({ type: 2, data: kr(Q) });
          });
        }
        R.messages[0].data = kr(ae);
        var q = La(N), Fe = Ma(q);
        L.content = Fe, L.size = L.content.length;
      })();
      var fe = Me(G[3][0].data);
      {
        var De = fe[1][0];
        delete fe[2];
        var V = Me(De.data);
        {
          var ve = br(V[2][0].data);
          (function() {
            for (var L = de.find(o, f[ve].location), N = st(ft(L.content)), R, Y = 0; Y < N.length; ++Y) {
              var te = N[Y];
              te.id == ve && (R = te);
            }
            var ae = Me(R.messages[0].data);
            {
              delete ae[6], delete fe[7];
              var Q = new Uint8Array(ae[5][0].data);
              ae[5] = [];
              for (var q = 0, Fe = 0; Fe <= a.e.r; ++Fe) {
                var C = Me(Q);
                q += vE(C, i[Fe], s), C[1][0].data = We(Fe), ae[5].push({ data: kr(C), type: 2 });
              }
              ae[1] = [{ type: 0, data: We(a.e.c + 1) }], ae[2] = [{ type: 0, data: We(a.e.r + 1) }], ae[3] = [{ type: 0, data: We(q) }], ae[4] = [{ type: 0, data: We(a.e.r + 1) }];
            }
            R.messages[0].data = kr(ae);
            var je = La(N), Re = Ma(je);
            L.content = Re, L.size = L.content.length;
          })();
        }
        De.data = kr(V);
      }
      G[3][0].data = kr(fe);
    }
    _[4][0].data = kr(G);
  }
  d.messages[0].data = kr(_);
  var me = La(h), A = Ma(me);
  return u.content = A, u.size = u.content.length, o;
}
function Wl(e) {
  return function(r) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      r[n[0]] === void 0 && (r[n[0]] = n[1]), n[2] === "n" && (r[n[0]] = Number(r[n[0]]));
    }
  };
}
function Ms(e) {
  Wl([
    ["cellNF", !1],
    /* emit cell number format string as .z */
    ["cellHTML", !0],
    /* emit html string as .h */
    ["cellFormula", !0],
    /* emit formulae as .f */
    ["cellStyles", !1],
    /* emits style/theme as .s */
    ["cellText", !0],
    /* emit formatted text as .w */
    ["cellDates", !1],
    /* emit date cells with type `d` */
    ["sheetStubs", !1],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", !1],
    /* parse calculation chains */
    ["bookSheets", !1],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", !1],
    /* only try to get properties (no Sheets) */
    ["bookFiles", !1],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", !1],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function Us(e) {
  Wl([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function gE(e) {
  return be.WS.indexOf(e) > -1 ? "sheet" : e == be.CS ? "chart" : e == be.DS ? "dialog" : e == be.MS ? "macro" : e && e.length ? e : "sheet";
}
function _E(e, t) {
  if (!e)
    return 0;
  try {
    e = t.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, gE(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function wE(e, t, r, a, n, i, s, f, c, o, l, u) {
  try {
    i[a] = Cn(Zr(e, r, !0), t);
    var h = hr(e, t), d;
    switch (f) {
      case "sheet":
        d = j_(h, t, n, c, i[a], o, l, u);
        break;
      case "chart":
        if (d = $_(h, t, n, c, i[a], o, l, u), !d || !d["!drawel"])
          break;
        var p = _n(d["!drawel"].Target, t), x = Un(p), v = Rv(Zr(e, p, !0), Cn(Zr(e, x, !0), p)), _ = _n(v, p), T = Un(_);
        d = E_(Zr(e, _, !0), _, c, Cn(Zr(e, T, !0), _), o, d);
        break;
      case "macro":
        d = Y_(h, t, n, c, i[a], o, l, u);
        break;
      case "dialog":
        d = K_(h, t, n, c, i[a], o, l, u);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    s[a] = d;
    var g = [];
    i && i[a] && ir(i[a]).forEach(function(D) {
      var P = "";
      if (i[a][D].Type == be.CMNT) {
        P = _n(i[a][D].Target, t);
        var O = Q_(hr(e, P, !0), P, c);
        if (!O || !O.length)
          return;
        Qf(d, O, !1);
      }
      i[a][D].Type == be.TCMNT && (P = _n(i[a][D].Target, t), g = g.concat(Bv(hr(e, P, !0), c)));
    }), g && g.length && Qf(d, g, !0, c.people || []);
  } catch (D) {
    if (c.WTF)
      throw D;
  }
}
function nt(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function Hl(e, t) {
  if (an(), t = t || {}, Ms(t), ot(e, "META-INF/manifest.xml") || ot(e, "objectdata.xml"))
    return lc(e, t);
  if (ot(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u")
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof C0 < "u") {
      if (e.FileIndex)
        return C0(e);
      var r = de.utils.cfb_new();
      return wf(e).forEach(function(oe) {
        ye(r, oe, Qc(e, oe));
      }), C0(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!ot(e, "[Content_Types].xml"))
    throw ot(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : ot(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var a = wf(e), n = D1(Zr(e, "[Content_Types].xml")), i = !1, s, f;
  if (n.workbooks.length === 0 && (f = "xl/workbook.xml", hr(e, f, !0) && n.workbooks.push(f)), n.workbooks.length === 0) {
    if (f = "xl/workbook.bin", !hr(e, f, !0))
      throw new Error("Could not find workbook");
    n.workbooks.push(f), i = !0;
  }
  n.workbooks[0].slice(-3) == "bin" && (i = !0);
  var c = {}, o = {};
  if (!t.bookSheets && !t.bookProps) {
    if (bn = [], n.sst)
      try {
        bn = Z_(hr(e, nt(n.sst)), n.sst, t);
      } catch (oe) {
        if (t.WTF)
          throw oe;
      }
    t.cellStyles && n.themes.length && (c = q_(Zr(e, n.themes[0].replace(/^\//, ""), !0) || "", n.themes[0], t)), n.style && (o = J_(hr(e, nt(n.style)), n.style, c, t));
  }
  n.links.map(function(oe) {
    try {
      var ee = Cn(Zr(e, Un(nt(oe))), oe);
      return rw(hr(e, nt(oe)), ee, oe, t);
    } catch {
    }
  });
  var l = z_(hr(e, nt(n.workbooks[0])), n.workbooks[0], t), u = {}, h = "";
  n.coreprops.length && (h = hr(e, nt(n.coreprops[0]), !0), h && (u = So(h)), n.extprops.length !== 0 && (h = hr(e, nt(n.extprops[0]), !0), h && L1(h, u, t)));
  var d = {};
  (!t.bookSheets || t.bookProps) && n.custprops.length !== 0 && (h = Zr(e, nt(n.custprops[0]), !0), h && (d = U1(h, t)));
  var p = {};
  if ((t.bookSheets || t.bookProps) && (l.Sheets ? s = l.Sheets.map(function(ee) {
    return ee.name;
  }) : u.Worksheets && u.SheetNames.length > 0 && (s = u.SheetNames), t.bookProps && (p.Props = u, p.Custprops = d), t.bookSheets && typeof s < "u" && (p.SheetNames = s), t.bookSheets ? p.SheetNames : t.bookProps))
    return p;
  s = {};
  var x = {};
  t.bookDeps && n.calcchain && (x = ew(hr(e, nt(n.calcchain)), n.calcchain));
  var v = 0, _ = {}, T, g;
  {
    var D = l.Sheets;
    u.Worksheets = D.length, u.SheetNames = [];
    for (var P = 0; P != D.length; ++P)
      u.SheetNames[P] = D[P].name;
  }
  var O = i ? "bin" : "xml", k = n.workbooks[0].lastIndexOf("/"), I = (n.workbooks[0].slice(0, k + 1) + "_rels/" + n.workbooks[0].slice(k + 1) + ".rels").replace(/^\//, "");
  ot(e, I) || (I = "xl/_rels/workbook." + O + ".rels");
  var b = Cn(Zr(e, I, !0), I.replace(/_rels.*/, "s5s"));
  (n.metadata || []).length >= 1 && (t.xlmeta = tw(hr(e, nt(n.metadata[0])), n.metadata[0], t)), (n.people || []).length >= 1 && (t.people = Mv(hr(e, nt(n.people[0])), t)), b && (b = _E(b, l.Sheets));
  var G = hr(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e:
    for (v = 0; v != u.Worksheets; ++v) {
      var M = "sheet";
      if (b && b[v] ? (T = "xl/" + b[v][1].replace(/[\/]?xl\//, ""), ot(e, T) || (T = b[v][1]), ot(e, T) || (T = I.replace(/_rels\/.*$/, "") + b[v][1]), M = b[v][2]) : (T = "xl/worksheets/sheet" + (v + 1 - G) + "." + O, T = T.replace(/sheet0\./, "sheet.")), g = T.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), t && t.sheets != null)
        switch (typeof t.sheets) {
          case "number":
            if (v != t.sheets)
              continue e;
            break;
          case "string":
            if (u.SheetNames[v].toLowerCase() != t.sheets.toLowerCase())
              continue e;
            break;
          default:
            if (Array.isArray && Array.isArray(t.sheets)) {
              for (var B = !1, K = 0; K != t.sheets.length; ++K)
                typeof t.sheets[K] == "number" && t.sheets[K] == v && (B = 1), typeof t.sheets[K] == "string" && t.sheets[K].toLowerCase() == u.SheetNames[v].toLowerCase() && (B = 1);
              if (!B)
                continue e;
            }
        }
      wE(e, T, g, u.SheetNames[v], v, _, s, M, t, l, c, o);
    }
  return p = {
    Directory: n,
    Workbook: l,
    Props: u,
    Custprops: d,
    Deps: x,
    Sheets: s,
    SheetNames: u.SheetNames,
    Strings: bn,
    Styles: o,
    Themes: c,
    SSF: ze(pe)
  }, t && t.bookFiles && (e.files ? (p.keys = a, p.files = e.files) : (p.keys = [], p.files = {}, e.FullPaths.forEach(function(oe, ee) {
    oe = oe.replace(/^Root Entry[\/]/, ""), p.keys.push(oe), p.files[oe] = e.FileIndex[ee];
  }))), t && t.bookVBA && (n.vba.length > 0 ? p.vbaraw = hr(e, nt(n.vba[0]), !0) : n.defaults && n.defaults.bin === jv && (p.vbaraw = hr(e, "xl/vbaProject.bin", !0))), p;
}
function EE(e, t) {
  var r = t || {}, a = "Workbook", n = de.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = de.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    if (ap(n.content), a = "/!DataSpaces/DataSpaceMap", n = de.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = ip(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = de.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = sp(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = de.find(e, a), !n || !n.content)
      throw new Error("ECMA-376 Encrypted file missing " + a);
    cp(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = de.find(e, a), !n || !n.content)
    throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = op(n.content);
  if (a = "/EncryptedPackage", n = de.find(e, a), !n || !n.content)
    throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u")
    return decrypt_agile(f[1], n.content, r.password || "", r);
  if (f[0] == 2 && typeof decrypt_std76 < "u")
    return decrypt_std76(f[1], n.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function TE(e, t) {
  return t.bookType == "ods" ? Ul(e, t) : t.bookType == "numbers" ? mE(e, t) : t.bookType == "xlsb" ? kE(e, t) : Vl(e, t);
}
function kE(e, t) {
  ja = 1024, e && !e.SSF && (e.SSF = ze(pe)), e && e.SSF && (an(), Jn(e.SSF), t.revssf = Ki(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, Dn ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", a = ol.indexOf(t.bookType) > -1, n = ks();
  Us(t = t || {});
  var i = is(), s = "", f = 0;
  if (t.cellXfs = [], ca(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ye(i, s, yo(e.Props, t)), n.coreprops.push(s), He(t.rels, 2, s, be.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var c = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && c.push(e.SheetNames[o]);
      e.Props.SheetNames = c;
    }
  for (e.Props.Worksheets = e.Props.SheetNames.length, ye(i, s, Co(e.Props)), n.extprops.push(s), He(t.rels, 3, s, be.EXT_PROPS), e.Custprops !== e.Props && ir(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ye(i, s, bo(e.Custprops)), n.custprops.push(s), He(t.rels, 4, s, be.CUST_PROPS)), f = 1; f <= e.SheetNames.length; ++f) {
    var l = { "!id": {} }, u = e.Sheets[e.SheetNames[f - 1]], h = (u || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ye(i, s, nw(f - 1, s, t, e, l)), n.sheets.push(s), He(t.wbrels, -1, "worksheets/sheet" + f + "." + r, be.WS[0]);
    }
    if (u) {
      var d = u["!comments"], p = !1, x = "";
      d && d.length > 0 && (x = "xl/comments" + f + "." + r, ye(i, x, fw(d, x)), n.comments.push(x), He(l, -1, "../comments" + f + "." + r, be.CMNT), p = !0), u["!legacy"] && p && ye(i, "xl/drawings/vmlDrawing" + f + ".vml", fl(f, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    l["!id"].rId1 && ye(i, Un(s), Ja(l));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ye(i, s, sw(t.Strings, s, t)), n.strs.push(s), He(t.wbrels, -1, "sharedStrings." + r, be.SST)), s = "xl/workbook." + r, ye(i, s, aw(e, s)), n.workbooks.push(s), He(t.rels, 1, s, be.WB), s = "xl/theme/theme1.xml", ye(i, s, bs(e.Themes, t)), n.themes.push(s), He(t.wbrels, -1, "theme/theme1.xml", be.THEME), s = "xl/styles." + r, ye(i, s, iw(e, s, t)), n.styles.push(s), He(t.wbrels, -1, "styles." + r, be.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", ye(i, s, e.vbaraw), n.vba.push(s), He(t.wbrels, -1, "vbaProject.bin", be.VBA)), s = "xl/metadata." + r, ye(i, s, cw(s)), n.metadata.push(s), He(t.wbrels, -1, "metadata." + r, be.XLMETA), ye(i, "[Content_Types].xml", To(n, t)), ye(i, "_rels/.rels", Ja(t.rels)), ye(i, "xl/_rels/workbook." + r + ".rels", Ja(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function Vl(e, t) {
  ja = 1024, e && !e.SSF && (e.SSF = ze(pe)), e && e.SSF && (an(), Jn(e.SSF), t.revssf = Ki(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, Dn ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", a = ol.indexOf(t.bookType) > -1, n = ks();
  Us(t = t || {});
  var i = is(), s = "", f = 0;
  if (t.cellXfs = [], ca(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", ye(i, s, yo(e.Props, t)), n.coreprops.push(s), He(t.rels, 2, s, be.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames))
    if (!e.Workbook || !e.Workbook.Sheets)
      e.Props.SheetNames = e.SheetNames;
    else {
      for (var c = [], o = 0; o < e.SheetNames.length; ++o)
        (e.Workbook.Sheets[o] || {}).Hidden != 2 && c.push(e.SheetNames[o]);
      e.Props.SheetNames = c;
    }
  e.Props.Worksheets = e.Props.SheetNames.length, ye(i, s, Co(e.Props)), n.extprops.push(s), He(t.rels, 3, s, be.EXT_PROPS), e.Custprops !== e.Props && ir(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", ye(i, s, bo(e.Custprops)), n.custprops.push(s), He(t.rels, 4, s, be.CUST_PROPS));
  var l = ["SheetJ5"];
  for (t.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var u = { "!id": {} }, h = e.Sheets[e.SheetNames[f - 1]], d = (h || {})["!type"] || "sheet";
    switch (d) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + r, ye(i, s, wl(f - 1, t, e, u)), n.sheets.push(s), He(t.wbrels, -1, "worksheets/sheet" + f + "." + r, be.WS[0]);
    }
    if (h) {
      var p = h["!comments"], x = !1, v = "";
      if (p && p.length > 0) {
        var _ = !1;
        p.forEach(function(T) {
          T[1].forEach(function(g) {
            g.T == !0 && (_ = !0);
          });
        }), _ && (v = "xl/threadedComments/threadedComment" + f + "." + r, ye(i, v, Lv(p, l, t)), n.threadedcomments.push(v), He(u, -1, "../threadedComments/threadedComment" + f + "." + r, be.TCMNT)), v = "xl/comments" + f + "." + r, ye(i, v, cl(p)), n.comments.push(v), He(u, -1, "../comments" + f + "." + r, be.CMNT), x = !0;
      }
      h["!legacy"] && x && ye(i, "xl/drawings/vmlDrawing" + f + ".vml", fl(f, h["!comments"])), delete h["!comments"], delete h["!legacy"];
    }
    u["!id"].rId1 && ye(i, Un(s), Ja(u));
  }
  return t.Strings != null && t.Strings.length > 0 && (s = "xl/sharedStrings." + r, ye(i, s, Ko(t.Strings, t)), n.strs.push(s), He(t.wbrels, -1, "sharedStrings." + r, be.SST)), s = "xl/workbook." + r, ye(i, s, Fl(e)), n.workbooks.push(s), He(t.rels, 1, s, be.WB), s = "xl/theme/theme1.xml", ye(i, s, bs(e.Themes, t)), n.themes.push(s), He(t.wbrels, -1, "theme/theme1.xml", be.THEME), s = "xl/styles." + r, ye(i, s, al(e, t)), n.styles.push(s), He(t.wbrels, -1, "styles." + r, be.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", ye(i, s, e.vbaraw), n.vba.push(s), He(t.wbrels, -1, "vbaProject.bin", be.VBA)), s = "xl/metadata." + r, ye(i, s, sl()), n.metadata.push(s), He(t.wbrels, -1, "metadata." + r, be.XLMETA), l.length > 1 && (s = "xl/persons/person.xml", ye(i, s, Uv(l)), n.people.push(s), He(t.wbrels, -1, "persons/person.xml", be.PEOPLE)), ye(i, "[Content_Types].xml", To(n, t)), ye(i, "_rels/.rels", Ja(t.rels)), ye(i, "xl/_rels/workbook." + r + ".rels", Ja(t.wbrels)), delete t.revssf, delete t.ssf, i;
}
function Ws(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = et(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function SE(e, t) {
  return de.find(e, "EncryptedPackage") ? EE(e, t) : Bs(e, t);
}
function yE(e, t) {
  var r, a = e, n = t || {};
  return n.type || (n.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"), r = eo(a, n), Hl(r, n);
}
function Xl(e, t) {
  var r = 0;
  e:
    for (; r < e.length; )
      switch (e.charCodeAt(r)) {
        case 10:
        case 13:
        case 32:
          ++r;
          break;
        case 60:
          return Y0(e.slice(r), t);
        default:
          break e;
      }
  return rn.to_workbook(e, t);
}
function FE(e, t) {
  var r = "", a = Ws(e, t);
  switch (t.type) {
    case "base64":
      r = et(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = Ea(e);
      break;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (r = Xe(r)), t.type = "binary", Xl(r, t);
}
function AE(e, t) {
  var r = e;
  return t.type == "base64" && (r = et(r)), r = Pe.utils.decode(1200, r.slice(2), "str"), t.type = "binary", Xl(r, t);
}
function CE(e) {
  return e.match(/[^\x00-\x7F]/) ? yt(e) : e;
}
function b0(e, t, r, a) {
  return a ? (r.type = "string", rn.to_workbook(e, r)) : rn.to_workbook(t, r);
}
function Vi(e, t) {
  $i();
  var r = t || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer)
    return Vi(new Uint8Array(e), (r = ze(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = !1;
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), Za = {}, r.dateNF && (Za.dateNF = r.dateNF), r.type || (r.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = Ae ? "buffer" : "binary", a = Dh(e), typeof Uint8Array < "u" && !Ae && (r.type = "array")), r.type == "string" && (i = !0, r.type = "binary", r.codepage = 65001, a = CE(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo)
      return r = ze(r), r.type = "array", Vi(rs(a), r);
  }
  switch ((n = Ws(a, r))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225)
        return SE(de.read(a, r), r);
      break;
    case 9:
      if (n[1] <= 8)
        return Bs(a, r);
      break;
    case 60:
      return Y0(a, r);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0)
        throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68)
        return Wd(a, r);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76)
        return $o.to_workbook(a, r);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? yE(a, r) : b0(e, a, r, i);
    case 239:
      return n[3] === 60 ? Y0(a, r) : b0(e, a, r, i);
    case 255:
      if (n[1] === 254)
        return AE(a, r);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0)
        return ma.to_workbook(a, r);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9)))
        return ma.to_workbook(a, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return $0.to_workbook(a, r);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116)
        return el.to_workbook(a, r);
      break;
    case 10:
    case 13:
    case 32:
      return FE(a, r);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71)
        throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return Ud.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? $0.to_workbook(a, r) : b0(e, a, r, i);
}
function pc(e, t) {
  var r = t || {};
  return r.type = "file", Vi(e, r);
}
function Gl(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return qn(t.file, de.write(e, { type: Ae ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return de.write(e, t);
}
function bE(e, t) {
  var r = ze(t || {}), a = TE(e, r);
  return zl(a, r);
}
function DE(e, t) {
  var r = ze(t || {}), a = Vl(e, r);
  return zl(a, r);
}
function zl(e, t) {
  var r = {}, a = Ae ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password)
    r.type = a;
  else
    switch (t.type) {
      case "base64":
        r.type = "base64";
        break;
      case "binary":
        r.type = "string";
        break;
      case "string":
        throw new Error("'string' output type invalid for '" + t.bookType + "' files");
      case "buffer":
      case "file":
        r.type = a;
        break;
      default:
        throw new Error("Unrecognized type " + t.type);
    }
  var n = e.FullPaths ? de.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[r.type] || r.type
  ), compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof n == "string") {
    if (t.type == "binary" || t.type == "base64")
      return n;
    n = new Uint8Array(Kn(n));
  }
  return t.password && typeof encrypt_agile < "u" ? Gl(encrypt_agile(n, t.password), t) : t.type === "file" ? qn(t.file, n) : t.type == "string" ? Xe(
    /*::(*/
    n
    /*:: :any)*/
  ) : n;
}
function OE(e, t) {
  var r = t || {}, a = Rw(e, r);
  return Gl(a, r);
}
function kt(e, t, r) {
  r || (r = "");
  var a = r + e;
  switch (t.type) {
    case "base64":
      return Rn(yt(a));
    case "binary":
      return yt(a);
    case "string":
      return e;
    case "file":
      return qn(t.file, a, "utf8");
    case "buffer":
      return Ae ? Ht(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : kt(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function IE(e, t) {
  switch (t.type) {
    case "base64":
      return Rn(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return qn(t.file, e, "binary");
    case "buffer":
      return Ae ? Ht(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function gi(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", a = 0; a < e.length; ++a)
        r += String.fromCharCode(e[a]);
      return t.type == "base64" ? Rn(r) : t.type == "string" ? Xe(r) : r;
    case "file":
      return qn(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Hs(e, t) {
  $i(), yl(e);
  var r = ze(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var a = Hs(e, r);
    return r.type = "array", Kn(a);
  }
  return DE(e, r);
}
function t0(e, t) {
  $i(), yl(e);
  var r = ze(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var a = t0(e, r);
    return r.type = "array", Kn(a);
  }
  var n = 0;
  if (r.sheet && (typeof r.sheet == "number" ? n = r.sheet : n = e.SheetNames.indexOf(r.sheet), !e.SheetNames[n]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return kt(Aw(e, r), r);
    case "slk":
    case "sylk":
      return kt(jo.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "htm":
    case "html":
      return kt(Pl(e.Sheets[e.SheetNames[n]], r), r);
    case "txt":
      return IE(Yl(e.Sheets[e.SheetNames[n]], r), r);
    case "csv":
      return kt(Xs(e.Sheets[e.SheetNames[n]], r), r, "\uFEFF");
    case "dif":
      return kt($o.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "dbf":
      return gi($0.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "prn":
      return kt(rn.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "rtf":
      return kt(el.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "eth":
      return kt(Yo.from_sheet(e.Sheets[e.SheetNames[n]], r), r);
    case "fods":
      return kt(Ul(e, r), r);
    case "wk1":
      return gi(ma.sheet_to_wk1(e.Sheets[e.SheetNames[n]], r), r);
    case "wk3":
      return gi(ma.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    case "biff3":
      r.biff || (r.biff = 3);
    case "biff4":
      return r.biff || (r.biff = 4), gi(Dl(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), OE(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return bE(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function Vs(e) {
  if (!e.bookType) {
    var t = {
      xls: "biff8",
      htm: "html",
      slk: "sylk",
      socialcalc: "eth",
      Sh33tJS: "WTF"
    }, r = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    r.match(/^\.[a-z]+$/) && (e.bookType = r.slice(1)), e.bookType = t[e.bookType] || e.bookType;
  }
}
function vc(e, t, r) {
  var a = r || {};
  return a.type = "file", a.file = t, Vs(a), t0(e, a);
}
function NE(e, t, r) {
  var a = r || {};
  return a.type = "file", a.file = t, Vs(a), Hs(e, a);
}
function RE(e, t, r, a) {
  var n = r || {};
  n.type = "file", n.file = e, Vs(n), n.type = "buffer";
  var i = a;
  return i instanceof Function || (i = r), ra.writeFile(e, t0(t, n), i);
}
function jl(e, t, r, a, n, i, s, f) {
  var c = ar(r), o = f.defval, l = f.raw || !Object.prototype.hasOwnProperty.call(f, "raw"), u = !0, h = n === 1 ? [] : {};
  if (n !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(h, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        h.__rowNum__ = r;
      }
    else
      h.__rowNum__ = r;
  if (!s || e[r])
    for (var d = t.s.c; d <= t.e.c; ++d) {
      var p = s ? e[r][d] : e[a[d] + c];
      if (p === void 0 || p.t === void 0) {
        if (o === void 0)
          continue;
        i[d] != null && (h[i[d]] = o);
        continue;
      }
      var x = p.v;
      switch (p.t) {
        case "z":
          if (x == null)
            break;
          continue;
        case "e":
          x = x == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + p.t);
      }
      if (i[d] != null) {
        if (x == null)
          if (p.t == "e" && x === null)
            h[i[d]] = null;
          else if (o !== void 0)
            h[i[d]] = o;
          else if (l && x === null)
            h[i[d]] = null;
          else
            continue;
        else
          h[i[d]] = l && (p.t !== "n" || p.t === "n" && f.rawNumbers !== !1) ? x : bt(p, x, f);
        x != null && (u = !1);
      }
    }
  return { row: h, isempty: u };
}
function Xi(e, t) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, o = t || {}, l = o.range != null ? o.range : e["!ref"];
  switch (o.header === 1 ? a = 1 : o.header === "A" ? a = 2 : Array.isArray(o.header) ? a = 3 : o.header == null && (a = 0), typeof l) {
    case "string":
      c = Ne(l);
      break;
    case "number":
      c = Ne(e["!ref"]), c.s.r = l;
      break;
    default:
      c = l;
  }
  a > 0 && (n = 0);
  var u = ar(c.s.r), h = [], d = [], p = 0, x = 0, v = Array.isArray(e), _ = c.s.r, T = 0, g = {};
  v && !e[_] && (e[_] = []);
  var D = o.skipHidden && e["!cols"] || [], P = o.skipHidden && e["!rows"] || [];
  for (T = c.s.c; T <= c.e.c; ++T)
    if (!(D[T] || {}).hidden)
      switch (h[T] = Ye(T), r = v ? e[_][T] : e[h[T] + u], a) {
        case 1:
          i[T] = T - c.s.c;
          break;
        case 2:
          i[T] = h[T];
          break;
        case 3:
          i[T] = o.header[T - c.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), f = s = bt(r, null, o), x = g[s] || 0, !x)
            g[s] = 1;
          else {
            do
              f = s + "_" + x++;
            while (g[f]);
            g[s] = x, g[f] = 1;
          }
          i[T] = f;
      }
  for (_ = c.s.r + n; _ <= c.e.r; ++_)
    if (!(P[_] || {}).hidden) {
      var O = jl(e, c, _, h, a, i, v, o);
      (O.isempty === !1 || (a === 1 ? o.blankrows !== !1 : o.blankrows)) && (d[p++] = O.row);
    }
  return d.length = p, d;
}
var mc = /"/g;
function $l(e, t, r, a, n, i, s, f) {
  for (var c = !0, o = [], l = "", u = ar(r), h = t.s.c; h <= t.e.c; ++h)
    if (a[h]) {
      var d = f.dense ? (e[r] || [])[h] : e[a[h] + u];
      if (d == null)
        l = "";
      else if (d.v != null) {
        c = !1, l = "" + (f.rawNumbers && d.t == "n" ? d.v : bt(d, null, f));
        for (var p = 0, x = 0; p !== l.length; ++p)
          if ((x = l.charCodeAt(p)) === n || x === i || x === 34 || f.forceQuotes) {
            l = '"' + l.replace(mc, '""') + '"';
            break;
          }
        l == "ID" && (l = '"ID"');
      } else
        d.f != null && !d.F ? (c = !1, l = "=" + d.f, l.indexOf(",") >= 0 && (l = '"' + l.replace(mc, '""') + '"')) : l = "";
      o.push(l);
    }
  return f.blankrows === !1 && c ? null : o.join(s);
}
function Xs(e, t) {
  var r = [], a = t ?? {};
  if (e == null || e["!ref"] == null)
    return "";
  var n = Ne(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), o = new RegExp((i == "|" ? "\\|" : i) + "+$"), l = "", u = [];
  a.dense = Array.isArray(e);
  for (var h = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], p = n.s.c; p <= n.e.c; ++p)
    (h[p] || {}).hidden || (u[p] = Ye(p));
  for (var x = 0, v = n.s.r; v <= n.e.r; ++v)
    (d[v] || {}).hidden || (l = $l(e, n, v, u, s, c, i, a), l != null && (a.strip && (l = l.replace(o, "")), (l || a.blankrows !== !1) && r.push((x++ ? f : "") + l)));
  return delete a.dense, r.join("");
}
function Yl(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = Xs(e, t);
  if (typeof Pe > "u" || t.type == "string")
    return r;
  var a = Pe.utils.encode(1200, r, "str");
  return String.fromCharCode(255) + String.fromCharCode(254) + a;
}
function PE(e) {
  var t = "", r, a = "";
  if (e == null || e["!ref"] == null)
    return [];
  var n = Ne(e["!ref"]), i = "", s = [], f, c = [], o = Array.isArray(e);
  for (f = n.s.c; f <= n.e.c; ++f)
    s[f] = Ye(f);
  for (var l = n.s.r; l <= n.e.r; ++l)
    for (i = ar(l), f = n.s.c; f <= n.e.c; ++f)
      if (t = s[f] + i, r = o ? (e[l] || [])[f] : e[t], a = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f)
            continue;
          a = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null)
          a = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            a = "" + r.v;
          else if (r.t == "b")
            a = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            a = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? a = "'" + r.v : a = "" + r.v;
          }
        }
        c[c.length] = t + "=" + a;
      }
  return c;
}
function Kl(e, t, r) {
  var a = r || {}, n = +!a.skipHeader, i = e || {}, s = 0, f = 0;
  if (i && a.origin != null)
    if (typeof a.origin == "number")
      s = a.origin;
    else {
      var c = typeof a.origin == "string" ? er(a.origin) : a.origin;
      s = c.r, f = c.c;
    }
  var o, l = { s: { c: 0, r: 0 }, e: { c: f, r: s + t.length - 1 + n } };
  if (i["!ref"]) {
    var u = Ne(i["!ref"]);
    l.e.c = Math.max(l.e.c, u.e.c), l.e.r = Math.max(l.e.r, u.e.r), s == -1 && (s = u.e.r + 1, l.e.r = s + t.length - 1 + n);
  } else
    s == -1 && (s = 0, l.e.r = t.length - 1 + n);
  var h = a.header || [], d = 0;
  t.forEach(function(x, v) {
    ir(x).forEach(function(_) {
      (d = h.indexOf(_)) == -1 && (h[d = h.length] = _);
      var T = x[_], g = "z", D = "", P = ge({ c: f + d, r: s + v + n });
      o = jn(i, P), T && typeof T == "object" && !(T instanceof Date) ? i[P] = T : (typeof T == "number" ? g = "n" : typeof T == "boolean" ? g = "b" : typeof T == "string" ? g = "s" : T instanceof Date ? (g = "d", a.cellDates || (g = "n", T = mr(T)), D = a.dateNF || pe[14]) : T === null && a.nullError && (g = "e", T = 0), o ? (o.t = g, o.v = T, delete o.w, delete o.R, D && (o.z = D)) : i[P] = o = { t: g, v: T }, D && (o.z = D));
    });
  }), l.e.c = Math.max(l.e.c, f + h.length - 1);
  var p = ar(s);
  if (n)
    for (d = 0; d < h.length; ++d)
      i[Ye(d + f) + p] = { t: "s", v: h[d] };
  return i["!ref"] = Se(l), i;
}
function BE(e, t) {
  return Kl(null, e, t);
}
function jn(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var a = er(t);
      return e[a.r] || (e[a.r] = []), e[a.r][a.c] || (e[a.r][a.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? jn(e, ge(t)) : jn(e, ge({ r: t, c: r || 0 }));
}
function LE(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t)
      return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else
    throw new Error("Cannot find sheet |" + t + "|");
}
function Gs() {
  return { SheetNames: [], Sheets: {} };
}
function zs(e, t, r, a) {
  var n = 1;
  if (!r)
    for (; n <= 65535 && e.SheetNames.indexOf(r = "Sheet" + n) != -1; ++n, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    n = i && +i[2] || 0;
    var s = i && i[1] || r;
    for (++n; n <= 65535 && e.SheetNames.indexOf(r = s + n) != -1; ++n)
      ;
  }
  if (Sl(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function ME(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = LE(e, t);
  switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[a].Hidden = r;
}
function UE(e, t) {
  return e.z = t, e;
}
function Jl(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function WE(e, t, r) {
  return Jl(e, "#" + t, r);
}
function HE(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function VE(e, t, r, a) {
  for (var n = typeof t != "string" ? t : Ne(t), i = typeof t == "string" ? t : Se(t), s = n.s.r; s <= n.e.r; ++s)
    for (var f = n.s.c; f <= n.e.c; ++f) {
      var c = jn(e, s, f);
      c.t = "n", c.F = i, delete c.v, s == n.s.r && f == n.s.c && (c.f = r, a && (c.D = !0));
    }
  return e;
}
var XE = {
  encode_col: Ye,
  encode_row: ar,
  encode_cell: ge,
  encode_range: Se,
  decode_col: ms,
  decode_row: vs,
  split_cell: f1,
  decode_cell: er,
  decode_range: Hr,
  format_cell: bt,
  sheet_add_aoa: po,
  sheet_add_json: Kl,
  sheet_add_dom: Bl,
  aoa_to_sheet: sn,
  json_to_sheet: BE,
  table_to_sheet: Ll,
  table_to_book: Zw,
  sheet_to_csv: Xs,
  sheet_to_txt: Yl,
  sheet_to_json: Xi,
  sheet_to_html: Pl,
  sheet_to_formulae: PE,
  sheet_to_row_object_array: Xi,
  sheet_get_cell: jn,
  book_new: Gs,
  book_append_sheet: zs,
  book_set_sheet_visibility: ME,
  cell_set_number_format: UE,
  cell_set_hyperlink: Jl,
  cell_set_internal_link: WE,
  cell_add_comment: HE,
  sheet_set_array_formula: VE,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
}, a0;
function GE(e) {
  a0 = e;
}
function zE(e, t) {
  var r = a0(), a = t ?? {};
  if (e == null || e["!ref"] == null)
    return r.push(null), r;
  var n = Ne(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), o = new RegExp((i == "|" ? "\\|" : i) + "+$"), l = "", u = [];
  a.dense = Array.isArray(e);
  for (var h = a.skipHidden && e["!cols"] || [], d = a.skipHidden && e["!rows"] || [], p = n.s.c; p <= n.e.c; ++p)
    (h[p] || {}).hidden || (u[p] = Ye(p));
  var x = n.s.r, v = !1, _ = 0;
  return r._read = function() {
    if (!v)
      return v = !0, r.push("\uFEFF");
    for (; x <= n.e.r; )
      if (++x, !(d[x - 1] || {}).hidden && (l = $l(e, n, x - 1, u, s, c, i, a), l != null && (a.strip && (l = l.replace(o, "")), l || a.blankrows !== !1)))
        return r.push((_++ ? f : "") + l);
    return r.push(null);
  }, r;
}
function jE(e, t) {
  var r = a0(), a = t || {}, n = a.header != null ? a.header : Il, i = a.footer != null ? a.footer : Nl;
  r.push(n);
  var s = Hr(e["!ref"]);
  a.dense = Array.isArray(e), r.push(Rl(e, s, a));
  var f = s.s.r, c = !1;
  return r._read = function() {
    if (f > s.e.r)
      return c || (c = !0, r.push("</table>" + i)), r.push(null);
    for (; f <= s.e.r; ) {
      r.push(Ol(e, s, f, a)), ++f;
      break;
    }
  }, r;
}
function $E(e, t) {
  var r = a0({ objectMode: !0 });
  if (e == null || e["!ref"] == null)
    return r.push(null), r;
  var a = { t: "n", v: 0 }, n = 0, i = 1, s = [], f = 0, c = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = t || {}, u = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? n = 1 : l.header === "A" ? n = 2 : Array.isArray(l.header) && (n = 3), typeof u) {
    case "string":
      o = Ne(u);
      break;
    case "number":
      o = Ne(e["!ref"]), o.s.r = u;
      break;
    default:
      o = u;
  }
  n > 0 && (i = 0);
  var h = ar(o.s.r), d = [], p = 0, x = Array.isArray(e), v = o.s.r, _ = 0, T = {};
  x && !e[v] && (e[v] = []);
  var g = l.skipHidden && e["!cols"] || [], D = l.skipHidden && e["!rows"] || [];
  for (_ = o.s.c; _ <= o.e.c; ++_)
    if (!(g[_] || {}).hidden)
      switch (d[_] = Ye(_), a = x ? e[v][_] : e[d[_] + h], n) {
        case 1:
          s[_] = _ - o.s.c;
          break;
        case 2:
          s[_] = d[_];
          break;
        case 3:
          s[_] = l.header[_ - o.s.c];
          break;
        default:
          if (a == null && (a = { w: "__EMPTY", t: "s" }), c = f = bt(a, null, l), p = T[f] || 0, !p)
            T[f] = 1;
          else {
            do
              c = f + "_" + p++;
            while (T[c]);
            T[f] = p, T[c] = 1;
          }
          s[_] = c;
      }
  return v = o.s.r + i, r._read = function() {
    for (; v <= o.e.r; )
      if (!(D[v - 1] || {}).hidden) {
        var P = jl(e, o, v, d, n, s, x, l);
        if (++v, P.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) {
          r.push(P.row);
          return;
        }
      }
    return r.push(null);
  }, r;
}
var YE = {
  to_json: $E,
  to_html: jE,
  to_csv: zE,
  set_readable: GE
};
const KE = Nn.version, JE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CFB: de,
  SSF: $c,
  parse_xlscfb: Bs,
  parse_zip: Hl,
  read: Vi,
  readFile: pc,
  readFileSync: pc,
  set_cptable: Qu,
  set_fs: Ch,
  stream: YE,
  utils: XE,
  version: KE,
  write: t0,
  writeFile: vc,
  writeFileAsync: RE,
  writeFileSync: vc,
  writeFileXLSX: NE,
  writeXLSX: Hs
}, Symbol.toStringTag, { value: "Module" })), qE = /* @__PURE__ */ Yu(JE);
(function(e) {
  (function(t, r) {
    r(e, Ku(), qE);
  })(typeof globalThis > "u" ? typeof self > "u" ? Wa : self : globalThis, function(t, r, a) {
    function n(c) {
      if (typeof WeakMap != "function")
        return null;
      var o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
      return (n = function(u) {
        return u ? l : o;
      })(c);
    }
    function i(c, o) {
      if (!o && c && c.__esModule)
        return c;
      if (c === null || typeof c != "object" && typeof c != "function")
        return { default: c };
      var l = n(o);
      if (l && l.has(c))
        return l.get(c);
      var u = {}, h = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var d in c)
        if (d != "default" && Object.prototype.hasOwnProperty.call(c, d)) {
          var p = h ? Object.getOwnPropertyDescriptor(c, d) : null;
          p && (p.get || p.set) ? Object.defineProperty(u, d, p) : u[d] = c[d];
        }
      return u.default = c, l && l.set(c, u), u;
    }
    function s(c) {
      let o = [];
      for (let l = 0; l < c.length; l++) {
        const u = c[l], h = u.cells;
        for (let d = 0; d < h.length; d++) {
          const p = h[d];
          p.innerText;
          const x = p.clientWidth + 20;
          (!o[d] || o[d] < x) && (o[d] = x);
        }
      }
      return o;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.exportExcel = void 0, r = function(c) {
      return c && c.__esModule ? c : { default: c };
    }(r), a = i(a);
    const f = ({ id: c, fileName: o, excludeColumns: l = [] }) => {
      const u = document.querySelectorAll(`#${c} table > thead > tr th`), h = document.querySelectorAll(`#${c} table > tbody > tr`);
      let d = [];
      for (let g = 0; g < h.length; g++) {
        const D = h[g];
        let P = [];
        const O = D.cells;
        for (let k = 0; k < O.length; k++) {
          const I = O[k], b = u[k].innerText, G = +u[k].getAttribute("colspan");
          if (!l.includes(b) || 1 < G) {
            const M = I.innerText;
            P.push(M);
          }
        }
        d.push(P);
      }
      const p = [];
      for (let g = 0; g < u.length; g++) {
        const D = u[g].innerText;
        l.includes(D) || p.push(D);
      }
      d.unshift(p);
      const x = a.utils.aoa_to_sheet(d), v = s(h);
      x["!cols"] = v.map((g) => ({ width: g / 6.4 }));
      const _ = a.utils.book_new();
      a.utils.book_append_sheet(_, x, "Sheet");
      const T = a.write(_, { bookType: "xlsx", type: "array" });
      r.default.saveAs(new Blob([T], { type: "application/octet-stream" }), `${o}.xlsx`);
    };
    t.exportExcel = f;
  });
})(Pc);
/*! Element Plus v2.3.8 */
var ZE = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "确定",
      clear: "清空"
    },
    datepicker: {
      now: "此刻",
      today: "今天",
      cancel: "取消",
      clear: "清空",
      confirm: "确定",
      selectDate: "选择日期",
      selectTime: "选择时间",
      startDate: "开始日期",
      startTime: "开始时间",
      endDate: "结束日期",
      endTime: "结束时间",
      prevYear: "前一年",
      nextYear: "后一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      year: "年",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      months: {
        jan: "一月",
        feb: "二月",
        mar: "三月",
        apr: "四月",
        may: "五月",
        jun: "六月",
        jul: "七月",
        aug: "八月",
        sep: "九月",
        oct: "十月",
        nov: "十一月",
        dec: "十二月"
      }
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "无数据",
      placeholder: "请选择"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      page: "页",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {pager} 页",
      prevPages: "向前 {pager} 页",
      nextPages: "向后 {pager} 页",
      deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
    },
    messagebox: {
      title: "提示",
      confirm: "确定",
      cancel: "取消",
      error: "输入的数据不合法!"
    },
    upload: {
      deleteTip: "按 delete 键可删除",
      delete: "删除",
      preview: "查看图片",
      continue: "继续上传"
    },
    table: {
      emptyText: "暂无数据",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计"
    },
    tree: {
      emptyText: "暂无数据"
    },
    transfer: {
      noMatch: "无匹配数据",
      noData: "无数据",
      titles: ["列表 1", "列表 2"],
      filterPlaceholder: "请输入搜索内容",
      noCheckedFormat: "共 {total} 项",
      hasCheckedFormat: "已选 {checked}/{total} 项"
    },
    image: {
      error: "加载失败"
    },
    pageHeader: {
      title: "返回"
    },
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    }
  }
};
const QE = { class: "PublicTable" }, e4 = /* @__PURE__ */ Gi({
  __name: "dbsTable",
  props: {
    // 表格名称
    tableName: {
      type: String
    },
    columns: {
      // 表头数据  文案和绑定值，以及需要特殊处理的slot
      type: Array,
      default: () => []
    },
    // 数据
    data: {
      type: Array,
      default: () => []
    },
    // 总条数
    totalNum: {
      type: Number || String,
      default: () => 0
    },
    //当前页
    pageNum: {
      type: Number || String,
      default: () => 1
    },
    // 每页数量
    pageSize: {
      type: Number || String,
      default: () => 20
    },
    // 是否开启loading
    loading: {
      type: Boolean
    },
    //其他table配置依次添加
    configFlag: {
      type: Object,
      default: () => ({
        needPage: !0,
        // 是否需要分页
        selection: !1,
        // 是否需要多选
        index: !1,
        // 是否需要序号
        border: !0,
        tableAlign: "left",
        indexName: null
      })
    },
    // 是否需要分页
    needPage: {
      type: Boolean,
      default: !0
    },
    // 是否需要index
    needIndex: {
      type: Boolean,
      default: !1
    },
    // 是否需要自适应屏幕高度
    autoHeight: {
      type: Boolean,
      default: !1
    },
    tableHeight: {
      // 可以监听屏幕高度获取。
      // 高度
      type: String
      // default: () => "100%",
    },
    tableMaxHeight: {
      // 可以监听屏幕高度获取。
      // 高度
      type: String
      // default: () => "100%",
    },
    // header头部单元格样式
    headerCellStyle: {
      type: Object,
      default: () => ({
        color: "white",
        backgroundColor: "#999"
      })
    },
    // body单元格样式
    cellStyle: {
      type: Function || Object,
      default: () => ({
        color: "",
        backgroundColor: ""
        // lineHeight: "18px",
      })
    },
    // 行是否高亮
    highlightCurrentRow: {
      type: Boolean,
      default: !0
    },
    // 选中函数
    selecTableFun: {
      type: Function,
      default: () => !0
    },
    // 单元格点击函数
    objectSpanMethod: {
      type: Function,
      default: () => !0
    },
    key: {
      type: String,
      default: () => ""
    },
    rowKey: {
      type: String,
      default: () => ""
    },
    // table class
    tableRowClassName: {
      type: Function
    },
    // 是否开启拖拽行为
    dragRow: {
      type: Boolean,
      default: !1
    },
    // 自定义行class
    cusClass: {
      type: String,
      default: () => ""
    },
    // 拖拽句柄
    dragBtn: {
      type: String,
      default: () => ""
    },
    // 前端下载表格的时候要过滤掉的列
    excludeDownloadColumns: {
      type: Array,
      // 后台数据
      default: () => ["", "操作", "图片"]
    }
  },
  emits: [
    "getTableRef",
    "handlePageChange",
    "handleSelectionChange",
    "handleSortChange",
    "handleCurrentChange",
    "cellClick",
    "rowDblclick",
    "dragChangeData",
    "selectAll",
    "select"
  ],
  setup(e, { emit: t }) {
    const r = e;
    let a = gc();
    const n = Na(null);
    let i = Number((Math == null ? void 0 : Math.random()) * 1e5).toFixed(0);
    const s = Na(`table_${i}`);
    let f = Na(r.tableHeight), c = Na(_c(() => r.columns));
    t("getTableRef", n);
    function o(I) {
      console.log("设置条数:", I), t("handlePageChange", { pageSize: I });
    }
    function l(I) {
      console.log("翻页:", I), t("handlePageChange", { pageNum: I });
    }
    function u(I) {
      t("handleCurrentChange", I);
    }
    function h(I) {
      t("handleSelectionChange", I);
    }
    function d(I) {
      t("handleSortChange", { order: I.order, prop: I.prop });
    }
    function p(I, b) {
      t("cellClick", I, b);
    }
    function x(I, b, G) {
      t("rowDblclick", I, b, G);
    }
    function v(I, b) {
      t("select", I, b);
    }
    function _(I) {
      t("selectAll", I);
    }
    function T() {
      setTimeout(() => {
        let I = document.querySelector(".dbs-table");
        if (I) {
          let b = window.innerHeight - (I == null ? void 0 : I.getBoundingClientRect().top) - 40;
          f.value = b;
        }
      }, 500);
    }
    function g() {
      let I = "", b = [];
      r.cusClass ? I = document.querySelector(
        `.${r.cusClass} .el-table__body-wrapper tbody`
      ) : I = document.querySelector(".el-table__body-wrapper tbody"), b = r.data, we.create(I, {
        animation: 150,
        handle: r.dragBtn,
        onEnd({ newIndex: G, oldIndex: M }) {
          let B = b.splice(M, 1)[0];
          b.splice(G, 0, B), t("dragChangeData", b);
        }
      });
    }
    const D = Na(!1), P = Na({
      left: "0",
      top: "0"
    });
    function O(I, b) {
      b.preventDefault();
      let G = b.pageX, M = b.pageY;
      D.value = !0, P.value = {
        left: `${G}px`,
        top: `${M}px`
      }, setTimeout(() => {
        D.value = !1;
      }, 3e3);
    }
    function k() {
      let I = JSON.parse(JSON.stringify(r.columns));
      Pc.exportExcel({
        id: s.value,
        fileName: r.tableName || `file-${(/* @__PURE__ */ new Date()).getTime()}`,
        columns: I,
        excludeColumns: r.excludeDownloadColumns
      }), D.value = !1;
    }
    return du(
      () => r.data,
      (I, b) => {
        JSON.stringify(I) != JSON.stringify(b) && !r.tableMaxHeight && r.autoHeight && T();
      }
    ), pu(() => {
      !r.tableMaxHeight && r.autoHeight && T(), window.addEventListener("resize", (I) => {
        !r.tableMaxHeight && r.autoHeight && T();
      }), r.dragRow && g();
    }), (I, b) => {
      const G = Va("el-table-column"), M = Va("el-table"), B = Va("el-pagination"), K = Va("el-config-provider"), oe = Js("loading"), ee = Js("has-authority");
      return Gr(), $t(K, { locale: Ie(ZE) }, {
        default: $a(() => [
          R0("div", QE, [
            qs((Gr(), $t(M, {
              id: s.value,
              ref_key: "tableRef",
              ref: n,
              class: N0(["dbs-table", [e.cusClass]]),
              style: { width: "100%" },
              border: e.configFlag.border,
              "header-cell-style": e.headerCellStyle,
              "cell-style": e.cellStyle,
              data: e.data,
              "max-height": e.tableMaxHeight,
              height: Ie(f),
              "highlight-current-row": e.highlightCurrentRow,
              "current-row-key": -1,
              onSortChange: d,
              onCurrentChange: u,
              onSelectionChange: h,
              onCellClick: p,
              onRowDblclick: x,
              "span-method": e.objectSpanMethod,
              "row-class-name": e.tableRowClassName,
              "row-key": e.rowKey,
              onHeaderContextmenu: O,
              onSelect: v,
              onSelectAll: _
            }, {
              default: $a(() => [
                e.configFlag.selection ? (Gr(), $t(G, {
                  key: 0,
                  selectable: e.selecTableFun,
                  width: "40",
                  type: "selection",
                  label: "Selection",
                  fixed: "left"
                }, null, 8, ["selectable"])) : Jt("", !0),
                e.needIndex || e.configFlag.index ? (Gr(), $t(G, {
                  key: 1,
                  width: "35",
                  type: "index",
                  index: 1,
                  label: !!e.configFlag.indexName && e.configFlag.indexName || "序号"
                }, null, 8, ["label"])) : Jt("", !0),
                (Gr(!0), Xa(O0, null, Si(Ie(c), (le, fe) => (Gr(), $t($u, {
                  item: le,
                  columnIndex: fe.toString()
                }, D0({ _: 2 }, [
                  Si(Object.keys(Ie(a)), (De) => ({
                    name: De,
                    fn: $a((V) => [
                      I0(I.$slots, De, wc(Ec(V)), void 0, !0)
                    ])
                  }))
                ]), 1032, ["item", "columnIndex"]))), 256))
              ]),
              _: 3
            }, 8, ["id", "class", "border", "header-cell-style", "cell-style", "data", "max-height", "height", "highlight-current-row", "span-method", "row-class-name", "row-key"])), [
              [oe, e.loading]
            ]),
            e.needPage ? (Gr(), $t(B, {
              key: 0,
              background: "",
              class: "el-pagination",
              total: Number(e.totalNum),
              "current-page": Number(e.pageNum),
              "page-sizes": [10, 20, 30, 50, 100, 500],
              "page-size": Number(e.pageSize),
              layout: "total,sizes, prev, pager, next",
              onSizeChange: o,
              onCurrentChange: l,
              small: ""
            }, null, 8, ["total", "current-page", "page-size"])) : Jt("", !0),
            D.value ? qs((Gr(), Xa("div", {
              key: 1,
              class: "context-menu",
              style: vu(P.value)
            }, [
              R0("div", {
                class: "context-menu-option",
                onClick: k
              }, " 导出为excel ")
            ], 4)), [
              [ee, "upload_excel"]
            ]) : Jt("", !0)
          ])
        ]),
        _: 3
      }, 8, ["locale"]);
    };
  }
});
const r4 = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, n] of t)
    r[a] = n;
  return r;
}, t4 = /* @__PURE__ */ r4(e4, [["__scopeId", "data-v-80b0f411"]]), n4 = {
  install: (e) => {
    e.component("dbsTable", t4);
  }
};
export {
  n4 as default
};
