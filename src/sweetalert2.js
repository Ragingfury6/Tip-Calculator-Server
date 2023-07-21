/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/sweetalert2@11.7.18/dist/sweetalert2.all.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {},
  t = { exports: {} };
(t.exports = (function () {
  const e = 100,
    t = {},
    o = () => {
      t.previousActiveElement instanceof HTMLElement
        ? (t.previousActiveElement.focus(), (t.previousActiveElement = null))
        : document.body && document.body.focus();
    },
    n = (n) =>
      new Promise((s) => {
        if (!n) return s();
        const a = window.scrollX,
          i = window.scrollY;
        (t.restoreFocusTimeout = setTimeout(() => {
          o(), s();
        }, e)),
          window.scrollTo(a, i);
      });
  var s = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap(),
  };
  const a = "swal2-",
    i = [
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "show",
      "hide",
      "close",
      "title",
      "html-container",
      "actions",
      "confirm",
      "deny",
      "cancel",
      "default-outline",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "input-label",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loader",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ].reduce((e, t) => ((e[t] = a + t), e), {}),
    r = ["success", "warning", "info", "question", "error"].reduce(
      (e, t) => ((e[t] = a + t), e),
      {}
    ),
    l = "SweetAlert2:",
    c = (e) => e.charAt(0).toUpperCase() + e.slice(1),
    d = (e) => {
      console.warn(`${l} ${"object" == typeof e ? e.join(" ") : e}`);
    },
    u = (e) => {
      console.error(`${l} ${e}`);
    },
    w = [],
    p = (e) => {
      w.includes(e) || (w.push(e), d(e));
    },
    m = (e, t) => {
      p(
        `"${e}" is deprecated and will be removed in the next major release. Please use "${t}" instead.`
      );
    },
    h = (e) => ("function" == typeof e ? e() : e),
    g = (e) => e && "function" == typeof e.toPromise,
    f = (e) => (g(e) ? e.toPromise() : Promise.resolve(e)),
    b = (e) => e && Promise.resolve(e) === e,
    y = () => document.body.querySelector(`.${i.container}`),
    v = (e) => {
      const t = y();
      return t ? t.querySelector(e) : null;
    },
    x = (e) => v(`.${e}`),
    k = () => x(i.popup),
    C = () => x(i.icon),
    A = () => x(i["icon-content"]),
    $ = () => x(i.title),
    B = () => x(i["html-container"]),
    E = () => x(i.image),
    P = () => x(i["progress-steps"]),
    T = () => x(i["validation-message"]),
    L = () => v(`.${i.actions} .${i.confirm}`),
    S = () => v(`.${i.actions} .${i.cancel}`),
    j = () => v(`.${i.actions} .${i.deny}`),
    O = () => x(i["input-label"]),
    M = () => v(`.${i.loader}`),
    z = () => x(i.actions),
    I = () => x(i.footer),
    H = () => x(i["timer-progress-bar"]),
    q = () => x(i.close),
    D =
      '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n',
    V = () => {
      const e = k();
      if (!e) return [];
      const t = e.querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        ),
        o = Array.from(t).sort((e, t) => {
          const o = parseInt(e.getAttribute("tabindex") || "0"),
            n = parseInt(t.getAttribute("tabindex") || "0");
          return o > n ? 1 : o < n ? -1 : 0;
        }),
        n = e.querySelectorAll(D),
        s = Array.from(n).filter((e) => "-1" !== e.getAttribute("tabindex"));
      return [...new Set(o.concat(s))].filter((e) => ae(e));
    },
    N = () =>
      U(document.body, i.shown) &&
      !U(document.body, i["toast-shown"]) &&
      !U(document.body, i["no-backdrop"]),
    F = () => {
      const e = k();
      return !!e && U(e, i.toast);
    },
    _ = () => {
      const e = k();
      return !!e && e.hasAttribute("data-loading");
    },
    R = (e, t) => {
      if (((e.textContent = ""), t)) {
        const o = new DOMParser().parseFromString(t, "text/html");
        Array.from(o.querySelector("head").childNodes).forEach((t) => {
          e.appendChild(t);
        }),
          Array.from(o.querySelector("body").childNodes).forEach((t) => {
            t instanceof HTMLVideoElement || t instanceof HTMLAudioElement
              ? e.appendChild(t.cloneNode(!0))
              : e.appendChild(t);
          });
      }
    },
    U = (e, t) => {
      if (!t) return !1;
      const o = t.split(/\s+/);
      for (let t = 0; t < o.length; t++)
        if (!e.classList.contains(o[t])) return !1;
      return !0;
    },
    Y = (e, t) => {
      Array.from(e.classList).forEach((o) => {
        Object.values(i).includes(o) ||
          Object.values(r).includes(o) ||
          Object.values(t.showClass).includes(o) ||
          e.classList.remove(o);
      });
    },
    Z = (e, t, o) => {
      if ((Y(e, t), t.customClass && t.customClass[o])) {
        if ("string" != typeof t.customClass[o] && !t.customClass[o].forEach)
          return void d(
            `Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof t
              .customClass[o]}"`
          );
        J(e, t.customClass[o]);
      }
    },
    W = (e, t) => {
      if (!t) return null;
      switch (t) {
        case "select":
        case "textarea":
        case "file":
          return e.querySelector(`.${i.popup} > .${i[t]}`);
        case "checkbox":
          return e.querySelector(`.${i.popup} > .${i.checkbox} input`);
        case "radio":
          return (
            e.querySelector(`.${i.popup} > .${i.radio} input:checked`) ||
            e.querySelector(`.${i.popup} > .${i.radio} input:first-child`)
          );
        case "range":
          return e.querySelector(`.${i.popup} > .${i.range} input`);
        default:
          return e.querySelector(`.${i.popup} > .${i.input}`);
      }
    },
    K = (e) => {
      if ((e.focus(), "file" !== e.type)) {
        const t = e.value;
        (e.value = ""), (e.value = t);
      }
    },
    X = (e, t, o) => {
      e &&
        t &&
        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach((t) => {
          Array.isArray(e)
            ? e.forEach((e) => {
                o ? e.classList.add(t) : e.classList.remove(t);
              })
            : o
            ? e.classList.add(t)
            : e.classList.remove(t);
        }));
    },
    J = (e, t) => {
      X(e, t, !0);
    },
    G = (e, t) => {
      X(e, t, !1);
    },
    Q = (e, t) => {
      const o = Array.from(e.children);
      for (let e = 0; e < o.length; e++) {
        const n = o[e];
        if (n instanceof HTMLElement && U(n, t)) return n;
      }
    },
    ee = (e, t, o) => {
      o === `${parseInt(o)}` && (o = parseInt(o)),
        o || 0 === parseInt(o)
          ? (e.style[t] = "number" == typeof o ? `${o}px` : o)
          : e.style.removeProperty(t);
    },
    te = function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "flex";
      e && (e.style.display = t);
    },
    oe = (e) => {
      e && (e.style.display = "none");
    },
    ne = (e, t, o, n) => {
      const s = e.querySelector(t);
      s && (s.style[o] = n);
    },
    se = function (e, t) {
      t
        ? te(
            e,
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "flex"
          )
        : oe(e);
    },
    ae = (e) =>
      !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
    ie = () => !ae(L()) && !ae(j()) && !ae(S()),
    re = (e) => !!(e.scrollHeight > e.clientHeight),
    le = (e) => {
      const t = window.getComputedStyle(e),
        o = parseFloat(t.getPropertyValue("animation-duration") || "0"),
        n = parseFloat(t.getPropertyValue("transition-duration") || "0");
      return o > 0 || n > 0;
    },
    ce = function (e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const o = H();
      ae(o) &&
        (t && ((o.style.transition = "none"), (o.style.width = "100%")),
        setTimeout(() => {
          (o.style.transition = `width ${e / 1e3}s linear`),
            (o.style.width = "0%");
        }, 10));
    },
    de = () => {
      const e = H(),
        t = parseInt(window.getComputedStyle(e).width);
      e.style.removeProperty("transition"), (e.style.width = "100%");
      const o = (t / parseInt(window.getComputedStyle(e).width)) * 100;
      e.style.width = `${o}%`;
    },
    ue = () => "undefined" == typeof window || "undefined" == typeof document,
    we =
      `\n <div aria-labelledby="${i.title}" aria-describedby="${i["html-container"]}" class="${i.popup}" tabindex="-1">\n   <button type="button" class="${i.close}"></button>\n   <ul class="${i["progress-steps"]}"></ul>\n   <div class="${i.icon}"></div>\n   <img class="${i.image}" />\n   <h2 class="${i.title}" id="${i.title}"></h2>\n   <div class="${i["html-container"]}" id="${i["html-container"]}"></div>\n   <input class="${i.input}" id="${i.input}" />\n   <input type="file" class="${i.file}" />\n   <div class="${i.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${i.select}" id="${i.select}"></select>\n   <div class="${i.radio}"></div>\n   <label class="${i.checkbox}">\n     <input type="checkbox" id="${i.checkbox}" />\n     <span class="${i.label}"></span>\n   </label>\n   <textarea class="${i.textarea}" id="${i.textarea}"></textarea>\n   <div class="${i["validation-message"]}" id="${i["validation-message"]}"></div>\n   <div class="${i.actions}">\n     <div class="${i.loader}"></div>\n     <button type="button" class="${i.confirm}"></button>\n     <button type="button" class="${i.deny}"></button>\n     <button type="button" class="${i.cancel}"></button>\n   </div>\n   <div class="${i.footer}"></div>\n   <div class="${i["timer-progress-bar-container"]}">\n     <div class="${i["timer-progress-bar"]}"></div>\n   </div>\n </div>\n`.replace(
        /(^|\n)\s*/g,
        ""
      ),
    pe = () => {
      const e = y();
      return (
        !!e &&
        (e.remove(),
        G(
          [document.documentElement, document.body],
          [i["no-backdrop"], i["toast-shown"], i["has-column"]]
        ),
        !0)
      );
    },
    me = () => {
      t.currentInstance.resetValidationMessage();
    },
    he = () => {
      const e = k(),
        t = Q(e, i.input),
        o = Q(e, i.file),
        n = e.querySelector(`.${i.range} input`),
        s = e.querySelector(`.${i.range} output`),
        a = Q(e, i.select),
        r = e.querySelector(`.${i.checkbox} input`),
        l = Q(e, i.textarea);
      (t.oninput = me),
        (o.onchange = me),
        (a.onchange = me),
        (r.onchange = me),
        (l.oninput = me),
        (n.oninput = () => {
          me(), (s.value = n.value);
        }),
        (n.onchange = () => {
          me(), (s.value = n.value);
        });
    },
    ge = (e) => ("string" == typeof e ? document.querySelector(e) : e),
    fe = (e) => {
      const t = k();
      t.setAttribute("role", e.toast ? "alert" : "dialog"),
        t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
        e.toast || t.setAttribute("aria-modal", "true");
    },
    be = (e) => {
      "rtl" === window.getComputedStyle(e).direction && J(y(), i.rtl);
    },
    ye = (e) => {
      const t = pe();
      if (ue()) return void u("SweetAlert2 requires document to initialize");
      const o = document.createElement("div");
      (o.className = i.container), t && J(o, i["no-transition"]), R(o, we);
      const n = ge(e.target);
      n.appendChild(o), fe(e), be(n), he();
    },
    ve = (e, t) => {
      e instanceof HTMLElement
        ? t.appendChild(e)
        : "object" == typeof e
        ? xe(e, t)
        : e && R(t, e);
    },
    xe = (e, t) => {
      e.jquery ? ke(t, e) : R(t, e.toString());
    },
    ke = (e, t) => {
      if (((e.textContent = ""), 0 in t))
        for (let o = 0; o in t; o++) e.appendChild(t[o].cloneNode(!0));
      else e.appendChild(t.cloneNode(!0));
    },
    Ce = (() => {
      if (ue()) return !1;
      const e = document.createElement("div"),
        t = {
          WebkitAnimation: "webkitAnimationEnd",
          animation: "animationend",
        };
      for (const o in t)
        if (Object.prototype.hasOwnProperty.call(t, o) && void 0 !== e.style[o])
          return t[o];
      return !1;
    })(),
    Ae = (e, t) => {
      const o = z(),
        n = M();
      o &&
        n &&
        (t.showConfirmButton || t.showDenyButton || t.showCancelButton
          ? te(o)
          : oe(o),
        Z(o, t, "actions"),
        $e(o, n, t),
        R(n, t.loaderHtml || ""),
        Z(n, t, "loader"));
    };
  function $e(e, t, o) {
    const n = L(),
      s = j(),
      a = S();
    n &&
      s &&
      a &&
      (Ee(n, "confirm", o),
      Ee(s, "deny", o),
      Ee(a, "cancel", o),
      Be(n, s, a, o),
      o.reverseButtons &&
        (o.toast
          ? (e.insertBefore(a, n), e.insertBefore(s, n))
          : (e.insertBefore(a, t),
            e.insertBefore(s, t),
            e.insertBefore(n, t))));
  }
  function Be(e, t, o, n) {
    n.buttonsStyling
      ? (J([e, t, o], i.styled),
        n.confirmButtonColor &&
          ((e.style.backgroundColor = n.confirmButtonColor),
          J(e, i["default-outline"])),
        n.denyButtonColor &&
          ((t.style.backgroundColor = n.denyButtonColor),
          J(t, i["default-outline"])),
        n.cancelButtonColor &&
          ((o.style.backgroundColor = n.cancelButtonColor),
          J(o, i["default-outline"])))
      : G([e, t, o], i.styled);
  }
  function Ee(e, t, o) {
    const n = c(t);
    se(e, o[`show${n}Button`], "inline-block"),
      R(e, o[`${t}ButtonText`] || ""),
      e.setAttribute("aria-label", o[`${t}ButtonAriaLabel`] || ""),
      (e.className = i[t]),
      Z(e, o, `${t}Button`);
  }
  const Pe = (e, t) => {
      const o = q();
      o &&
        (R(o, t.closeButtonHtml || ""),
        Z(o, t, "closeButton"),
        se(o, t.showCloseButton),
        o.setAttribute("aria-label", t.closeButtonAriaLabel || ""));
    },
    Te = (e, t) => {
      const o = y();
      o &&
        (Le(o, t.backdrop),
        Se(o, t.position),
        je(o, t.grow),
        Z(o, t, "container"));
    };
  function Le(e, t) {
    "string" == typeof t
      ? (e.style.background = t)
      : t || J([document.documentElement, document.body], i["no-backdrop"]);
  }
  function Se(e, t) {
    t &&
      (t in i
        ? J(e, i[t])
        : (d('The "position" parameter is not valid, defaulting to "center"'),
          J(e, i.center)));
  }
  function je(e, t) {
    t && J(e, i[`grow-${t}`]);
  }
  const Oe = [
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
    ],
    Me = (e, t) => {
      const o = k(),
        n = s.innerParams.get(e),
        a = !n || t.input !== n.input;
      Oe.forEach((e) => {
        const n = Q(o, i[e]);
        He(e, t.inputAttributes), (n.className = i[e]), a && oe(n);
      }),
        t.input && (a && ze(t), qe(t));
    },
    ze = (e) => {
      if (!_e[e.input])
        return void u(
          `Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${e.input}"`
        );
      const t = Ne(e.input),
        o = _e[e.input](t, e);
      te(t),
        e.inputAutoFocus &&
          setTimeout(() => {
            K(o);
          });
    },
    Ie = (e) => {
      for (let t = 0; t < e.attributes.length; t++) {
        const o = e.attributes[t].name;
        ["id", "type", "value", "style"].includes(o) || e.removeAttribute(o);
      }
    },
    He = (e, t) => {
      const o = W(k(), e);
      if (o) {
        Ie(o);
        for (const e in t) o.setAttribute(e, t[e]);
      }
    },
    qe = (e) => {
      const t = Ne(e.input);
      "object" == typeof e.customClass && J(t, e.customClass.input);
    },
    De = (e, t) => {
      (e.placeholder && !t.inputPlaceholder) ||
        (e.placeholder = t.inputPlaceholder);
    },
    Ve = (e, t, o) => {
      if (o.inputLabel) {
        const n = document.createElement("label"),
          s = i["input-label"];
        n.setAttribute("for", e.id),
          (n.className = s),
          "object" == typeof o.customClass && J(n, o.customClass.inputLabel),
          (n.innerText = o.inputLabel),
          t.insertAdjacentElement("beforebegin", n);
      }
    },
    Ne = (e) => Q(k(), i[e] || i.input),
    Fe = (e, t) => {
      ["string", "number"].includes(typeof t)
        ? (e.value = `${t}`)
        : b(t) ||
          d(
            `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
          );
    },
    _e = {};
  (_e.text =
    _e.email =
    _e.password =
    _e.number =
    _e.tel =
    _e.url =
      (e, t) => (
        Fe(e, t.inputValue), Ve(e, e, t), De(e, t), (e.type = t.input), e
      )),
    (_e.file = (e, t) => (Ve(e, e, t), De(e, t), e)),
    (_e.range = (e, t) => {
      const o = e.querySelector("input"),
        n = e.querySelector("output");
      return (
        Fe(o, t.inputValue),
        (o.type = t.input),
        Fe(n, t.inputValue),
        Ve(o, e, t),
        e
      );
    }),
    (_e.select = (e, t) => {
      if (((e.textContent = ""), t.inputPlaceholder)) {
        const o = document.createElement("option");
        R(o, t.inputPlaceholder),
          (o.value = ""),
          (o.disabled = !0),
          (o.selected = !0),
          e.appendChild(o);
      }
      return Ve(e, e, t), e;
    }),
    (_e.radio = (e) => ((e.textContent = ""), e)),
    (_e.checkbox = (e, t) => {
      const o = W(k(), "checkbox");
      (o.value = "1"), (o.checked = Boolean(t.inputValue));
      const n = e.querySelector("span");
      return R(n, t.inputPlaceholder), o;
    }),
    (_e.textarea = (e, t) => {
      Fe(e, t.inputValue), De(e, t), Ve(e, e, t);
      const o = (e) =>
        parseInt(window.getComputedStyle(e).marginLeft) +
        parseInt(window.getComputedStyle(e).marginRight);
      return (
        setTimeout(() => {
          if ("MutationObserver" in window) {
            const n = parseInt(window.getComputedStyle(k()).width);
            new MutationObserver(() => {
              if (!document.body.contains(e)) return;
              const s = e.offsetWidth + o(e);
              s > n ? (k().style.width = `${s}px`) : ee(k(), "width", t.width);
            }).observe(e, { attributes: !0, attributeFilter: ["style"] });
          }
        }),
        e
      );
    });
  const Re = (e, t) => {
      const o = B();
      o &&
        (Z(o, t, "htmlContainer"),
        t.html
          ? (ve(t.html, o), te(o, "block"))
          : t.text
          ? ((o.textContent = t.text), te(o, "block"))
          : oe(o),
        Me(e, t));
    },
    Ue = (e, t) => {
      const o = I();
      o && (se(o, t.footer), t.footer && ve(t.footer, o), Z(o, t, "footer"));
    },
    Ye = (e, t) => {
      const o = s.innerParams.get(e),
        n = C();
      if (n) {
        if (o && t.icon === o.icon) return Je(n, t), void Ze(n, t);
        if (t.icon || t.iconHtml) {
          if (t.icon && -1 === Object.keys(r).indexOf(t.icon))
            return (
              u(
                `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
              ),
              void oe(n)
            );
          te(n), Je(n, t), Ze(n, t), J(n, t.showClass && t.showClass.icon);
        } else oe(n);
      }
    },
    Ze = (e, t) => {
      for (const [o, n] of Object.entries(r)) t.icon !== o && G(e, n);
      J(e, t.icon && r[t.icon]), Ge(e, t), We(), Z(e, t, "icon");
    },
    We = () => {
      const e = k();
      if (!e) return;
      const t = window.getComputedStyle(e).getPropertyValue("background-color"),
        o = e.querySelectorAll(
          "[class^=swal2-success-circular-line], .swal2-success-fix"
        );
      for (let e = 0; e < o.length; e++) o[e].style.backgroundColor = t;
    },
    Ke =
      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',
    Xe =
      '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',
    Je = (e, t) => {
      if (!t.icon) return;
      let o,
        n = e.innerHTML;
      t.iconHtml
        ? (o = Qe(t.iconHtml))
        : "success" === t.icon
        ? ((o = Ke), (n = n.replace(/ style=".*?"/g, "")))
        : (o =
            "error" === t.icon
              ? Xe
              : Qe({ question: "?", warning: "!", info: "i" }[t.icon])),
        n.trim() !== o.trim() && R(e, o);
    },
    Ge = (e, t) => {
      if (t.iconColor) {
        (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
        for (const o of [
          ".swal2-success-line-tip",
          ".swal2-success-line-long",
          ".swal2-x-mark-line-left",
          ".swal2-x-mark-line-right",
        ])
          ne(e, o, "backgroundColor", t.iconColor);
        ne(e, ".swal2-success-ring", "borderColor", t.iconColor);
      }
    },
    Qe = (e) => `<div class="${i["icon-content"]}">${e}</div>`,
    et = (e, t) => {
      const o = E();
      o &&
        (t.imageUrl
          ? (te(o, ""),
            o.setAttribute("src", t.imageUrl),
            o.setAttribute("alt", t.imageAlt || ""),
            ee(o, "width", t.imageWidth),
            ee(o, "height", t.imageHeight),
            (o.className = i.image),
            Z(o, t, "image"))
          : oe(o));
    },
    tt = (e, t) => {
      const o = y(),
        n = k();
      if (o && n) {
        if (t.toast) {
          ee(o, "width", t.width), (n.style.width = "100%");
          const e = M();
          e && n.insertBefore(e, C());
        } else ee(n, "width", t.width);
        ee(n, "padding", t.padding),
          t.color && (n.style.color = t.color),
          t.background && (n.style.background = t.background),
          oe(T()),
          ot(n, t);
      }
    },
    ot = (e, t) => {
      const o = t.showClass || {};
      (e.className = `${i.popup} ${ae(e) ? o.popup : ""}`),
        t.toast
          ? (J([document.documentElement, document.body], i["toast-shown"]),
            J(e, i.toast))
          : J(e, i.modal),
        Z(e, t, "popup"),
        "string" == typeof t.customClass && J(e, t.customClass),
        t.icon && J(e, i[`icon-${t.icon}`]);
    },
    nt = (e, t) => {
      const o = P();
      if (!o) return;
      const { progressSteps: n, currentProgressStep: s } = t;
      n && 0 !== n.length && void 0 !== s
        ? (te(o),
          (o.textContent = ""),
          s >= n.length &&
            d(
              "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
            ),
          n.forEach((e, a) => {
            const r = st(e);
            if (
              (o.appendChild(r),
              a === s && J(r, i["active-progress-step"]),
              a !== n.length - 1)
            ) {
              const e = at(t);
              o.appendChild(e);
            }
          }))
        : oe(o);
    },
    st = (e) => {
      const t = document.createElement("li");
      return J(t, i["progress-step"]), R(t, e), t;
    },
    at = (e) => {
      const t = document.createElement("li");
      return (
        J(t, i["progress-step-line"]),
        e.progressStepsDistance && ee(t, "width", e.progressStepsDistance),
        t
      );
    },
    it = (e, t) => {
      const o = $();
      o &&
        (se(o, t.title || t.titleText, "block"),
        t.title && ve(t.title, o),
        t.titleText && (o.innerText = t.titleText),
        Z(o, t, "title"));
    },
    rt = (e, t) => {
      tt(e, t),
        Te(e, t),
        nt(e, t),
        Ye(e, t),
        et(e, t),
        it(e, t),
        Pe(e, t),
        Re(e, t),
        Ae(e, t),
        Ue(e, t);
      const o = k();
      "function" == typeof t.didRender && o && t.didRender(o);
    },
    lt = () => ae(k()),
    ct = () => L() && L().click(),
    dt = () => j() && j().click(),
    ut = () => S() && S().click(),
    wt = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    pt = (e) => {
      e.keydownTarget &&
        e.keydownHandlerAdded &&
        (e.keydownTarget.removeEventListener("keydown", e.keydownHandler, {
          capture: e.keydownListenerCapture,
        }),
        (e.keydownHandlerAdded = !1));
    },
    mt = (e, t, o, n) => {
      pt(t),
        o.toast ||
          ((t.keydownHandler = (t) => bt(e, t, n)),
          (t.keydownTarget = o.keydownListenerCapture ? window : k()),
          (t.keydownListenerCapture = o.keydownListenerCapture),
          t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
            capture: t.keydownListenerCapture,
          }),
          (t.keydownHandlerAdded = !0));
    },
    ht = (e, t) => {
      const o = V();
      if (o.length)
        return (
          (e += t) === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
          void o[e].focus()
        );
      k().focus();
    },
    gt = ["ArrowRight", "ArrowDown"],
    ft = ["ArrowLeft", "ArrowUp"],
    bt = (e, t, o) => {
      const n = s.innerParams.get(e);
      n &&
        (t.isComposing ||
          229 === t.keyCode ||
          (n.stopKeydownPropagation && t.stopPropagation(),
          "Enter" === t.key
            ? yt(e, t, n)
            : "Tab" === t.key
            ? vt(t)
            : [...gt, ...ft].includes(t.key)
            ? xt(t.key)
            : "Escape" === t.key && kt(t, n, o)));
    },
    yt = (e, t, o) => {
      if (
        h(o.allowEnterKey) &&
        t.target &&
        e.getInput() &&
        t.target instanceof HTMLElement &&
        t.target.outerHTML === e.getInput().outerHTML
      ) {
        if (["textarea", "file"].includes(o.input)) return;
        ct(), t.preventDefault();
      }
    },
    vt = (e) => {
      const t = e.target,
        o = V();
      let n = -1;
      for (let e = 0; e < o.length; e++)
        if (t === o[e]) {
          n = e;
          break;
        }
      e.shiftKey ? ht(n, -1) : ht(n, 1),
        e.stopPropagation(),
        e.preventDefault();
    },
    xt = (e) => {
      const t = [L(), j(), S()];
      if (
        document.activeElement instanceof HTMLElement &&
        !t.includes(document.activeElement)
      )
        return;
      const o = gt.includes(e)
        ? "nextElementSibling"
        : "previousElementSibling";
      let n = document.activeElement;
      for (let e = 0; e < z().children.length; e++) {
        if (((n = n[o]), !n)) return;
        if (n instanceof HTMLButtonElement && ae(n)) break;
      }
      n instanceof HTMLButtonElement && n.focus();
    },
    kt = (e, t, o) => {
      h(t.allowEscapeKey) && (e.preventDefault(), o(wt.esc));
    };
  var Ct = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap(),
  };
  const At = () => {
      Array.from(document.body.children).forEach((e) => {
        e === y() ||
          e.contains(y()) ||
          (e.hasAttribute("aria-hidden") &&
            e.setAttribute(
              "data-previous-aria-hidden",
              e.getAttribute("aria-hidden") || ""
            ),
          e.setAttribute("aria-hidden", "true"));
      });
    },
    $t = () => {
      Array.from(document.body.children).forEach((e) => {
        e.hasAttribute("data-previous-aria-hidden")
          ? (e.setAttribute(
              "aria-hidden",
              e.getAttribute("data-previous-aria-hidden") || ""
            ),
            e.removeAttribute("data-previous-aria-hidden"))
          : e.removeAttribute("aria-hidden");
      });
    },
    Bt = "undefined" != typeof window && !!window.GestureEvent,
    Et = () => {
      if (Bt && !U(document.body, i.iosfix)) {
        const e = document.body.scrollTop;
        (document.body.style.top = -1 * e + "px"),
          J(document.body, i.iosfix),
          Pt();
      }
    },
    Pt = () => {
      const e = y();
      let t;
      (e.ontouchstart = (e) => {
        t = Tt(e);
      }),
        (e.ontouchmove = (e) => {
          t && (e.preventDefault(), e.stopPropagation());
        });
    },
    Tt = (e) => {
      const t = e.target,
        o = y();
      return !(
        Lt(e) ||
        St(e) ||
        (t !== o &&
          (re(o) ||
            !(t instanceof HTMLElement) ||
            "INPUT" === t.tagName ||
            "TEXTAREA" === t.tagName ||
            (re(B()) && B().contains(t))))
      );
    },
    Lt = (e) =>
      e.touches && e.touches.length && "stylus" === e.touches[0].touchType,
    St = (e) => e.touches && e.touches.length > 1,
    jt = () => {
      if (U(document.body, i.iosfix)) {
        const e = parseInt(document.body.style.top, 10);
        G(document.body, i.iosfix),
          (document.body.style.top = ""),
          (document.body.scrollTop = -1 * e);
      }
    },
    Ot = () => {
      const e = document.createElement("div");
      (e.className = i["scrollbar-measure"]), document.body.appendChild(e);
      const t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    };
  let Mt = null;
  const zt = () => {
      null === Mt &&
        document.body.scrollHeight > window.innerHeight &&
        ((Mt = parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("padding-right")
        )),
        (document.body.style.paddingRight = `${Mt + Ot()}px`));
    },
    It = () => {
      null !== Mt &&
        ((document.body.style.paddingRight = `${Mt}px`), (Mt = null));
    };
  function Ht(e, o, s, a) {
    F() ? Yt(e, a) : (n(s).then(() => Yt(e, a)), pt(t)),
      Bt
        ? (o.setAttribute("style", "display:none !important"),
          o.removeAttribute("class"),
          (o.innerHTML = ""))
        : o.remove(),
      N() && (It(), jt(), $t()),
      qt();
  }
  function qt() {
    G(
      [document.documentElement, document.body],
      [i.shown, i["height-auto"], i["no-backdrop"], i["toast-shown"]]
    );
  }
  function Dt(e) {
    e = _t(e);
    const t = Ct.swalPromiseResolve.get(this),
      o = Vt(this);
    this.isAwaitingPromise ? e.isDismissed || (Ft(this), t(e)) : o && t(e);
  }
  const Vt = (e) => {
    const t = k();
    if (!t) return !1;
    const o = s.innerParams.get(e);
    if (!o || U(t, o.hideClass.popup)) return !1;
    G(t, o.showClass.popup), J(t, o.hideClass.popup);
    const n = y();
    return (
      G(n, o.showClass.backdrop), J(n, o.hideClass.backdrop), Rt(e, t, o), !0
    );
  };
  function Nt(e) {
    const t = Ct.swalPromiseReject.get(this);
    Ft(this), t && t(e);
  }
  const Ft = (e) => {
      e.isAwaitingPromise &&
        (delete e.isAwaitingPromise, s.innerParams.get(e) || e._destroy());
    },
    _t = (e) =>
      void 0 === e
        ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
        : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
    Rt = (e, t, o) => {
      const n = y(),
        s = Ce && le(t);
      "function" == typeof o.willClose && o.willClose(t),
        s
          ? Ut(e, t, n, o.returnFocus, o.didClose)
          : Ht(e, n, o.returnFocus, o.didClose);
    },
    Ut = (e, o, n, s, a) => {
      (t.swalCloseEventFinishedCallback = Ht.bind(null, e, n, s, a)),
        o.addEventListener(Ce, function (e) {
          e.target === o &&
            (t.swalCloseEventFinishedCallback(),
            delete t.swalCloseEventFinishedCallback);
        });
    },
    Yt = (e, t) => {
      setTimeout(() => {
        "function" == typeof t && t.bind(e.params)(),
          e._destroy && e._destroy();
      });
    },
    Zt = (e) => {
      let t = k();
      t || new Un(), (t = k());
      const o = M();
      F() ? oe(C()) : Wt(t, e),
        te(o),
        t.setAttribute("data-loading", "true"),
        t.setAttribute("aria-busy", "true"),
        t.focus();
    },
    Wt = (e, t) => {
      const o = z(),
        n = M();
      !t && ae(L()) && (t = L()),
        te(o),
        t && (oe(t), n.setAttribute("data-button-to-replace", t.className)),
        n.parentNode.insertBefore(n, t),
        J([e, o], i.loading);
    },
    Kt = (e, t) => {
      "select" === t.input || "radio" === t.input
        ? eo(e, t)
        : ["text", "email", "number", "tel", "textarea"].includes(t.input) &&
          (g(t.inputValue) || b(t.inputValue)) &&
          (Zt(L()), to(e, t));
    },
    Xt = (e, t) => {
      const o = e.getInput();
      if (!o) return null;
      switch (t.input) {
        case "checkbox":
          return Jt(o);
        case "radio":
          return Gt(o);
        case "file":
          return Qt(o);
        default:
          return t.inputAutoTrim ? o.value.trim() : o.value;
      }
    },
    Jt = (e) => (e.checked ? 1 : 0),
    Gt = (e) => (e.checked ? e.value : null),
    Qt = (e) =>
      e.files.length
        ? null !== e.getAttribute("multiple")
          ? e.files
          : e.files[0]
        : null,
    eo = (e, t) => {
      const o = k(),
        n = (e) => {
          oo[t.input](o, no(e), t);
        };
      g(t.inputOptions) || b(t.inputOptions)
        ? (Zt(L()),
          f(t.inputOptions).then((t) => {
            e.hideLoading(), n(t);
          }))
        : "object" == typeof t.inputOptions
        ? n(t.inputOptions)
        : u(
            "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
              typeof t.inputOptions
          );
    },
    to = (e, t) => {
      const o = e.getInput();
      oe(o),
        f(t.inputValue)
          .then((n) => {
            (o.value = "number" === t.input ? `${parseFloat(n) || 0}` : `${n}`),
              te(o),
              o.focus(),
              e.hideLoading();
          })
          .catch((t) => {
            u(`Error in inputValue promise: ${t}`),
              (o.value = ""),
              te(o),
              o.focus(),
              e.hideLoading();
          });
    },
    oo = {
      select: (e, t, o) => {
        const n = Q(e, i.select),
          s = (e, t, n) => {
            const s = document.createElement("option");
            (s.value = n),
              R(s, t),
              (s.selected = so(n, o.inputValue)),
              e.appendChild(s);
          };
        t.forEach((e) => {
          const t = e[0],
            o = e[1];
          if (Array.isArray(o)) {
            const e = document.createElement("optgroup");
            (e.label = t),
              (e.disabled = !1),
              n.appendChild(e),
              o.forEach((t) => s(e, t[1], t[0]));
          } else s(n, o, t);
        }),
          n.focus();
      },
      radio: (e, t, o) => {
        const n = Q(e, i.radio);
        t.forEach((e) => {
          const t = e[0],
            s = e[1],
            a = document.createElement("input"),
            r = document.createElement("label");
          (a.type = "radio"),
            (a.name = i.radio),
            (a.value = t),
            so(t, o.inputValue) && (a.checked = !0);
          const l = document.createElement("span");
          R(l, s),
            (l.className = i.label),
            r.appendChild(a),
            r.appendChild(l),
            n.appendChild(r);
        });
        const s = n.querySelectorAll("input");
        s.length && s[0].focus();
      },
    },
    no = (e) => {
      const t = [];
      return (
        "undefined" != typeof Map && e instanceof Map
          ? e.forEach((e, o) => {
              let n = e;
              "object" == typeof n && (n = no(n)), t.push([o, n]);
            })
          : Object.keys(e).forEach((o) => {
              let n = e[o];
              "object" == typeof n && (n = no(n)), t.push([o, n]);
            }),
        t
      );
    },
    so = (e, t) => t && t.toString() === e.toString(),
    ao = (e) => {
      const t = s.innerParams.get(e);
      e.disableButtons(), t.input ? lo(e, "confirm") : mo(e, !0);
    },
    io = (e) => {
      const t = s.innerParams.get(e);
      e.disableButtons(), t.returnInputValueOnDeny ? lo(e, "deny") : uo(e, !1);
    },
    ro = (e, t) => {
      e.disableButtons(), t(wt.cancel);
    },
    lo = (e, t) => {
      const o = s.innerParams.get(e);
      if (!o.input)
        return void u(
          `The "input" parameter is needed to be set when using returnInputValueOn${c(
            t
          )}`
        );
      const n = Xt(e, o);
      o.inputValidator
        ? co(e, n, t)
        : e.getInput().checkValidity()
        ? "deny" === t
          ? uo(e, n)
          : mo(e, n)
        : (e.enableButtons(), e.showValidationMessage(o.validationMessage));
    },
    co = (e, t, o) => {
      const n = s.innerParams.get(e);
      e.disableInput(),
        Promise.resolve()
          .then(() => f(n.inputValidator(t, n.validationMessage)))
          .then((n) => {
            e.enableButtons(),
              e.enableInput(),
              n
                ? e.showValidationMessage(n)
                : "deny" === o
                ? uo(e, t)
                : mo(e, t);
          });
    },
    uo = (e, t) => {
      const o = s.innerParams.get(e || void 0);
      o.showLoaderOnDeny && Zt(j()),
        o.preDeny
          ? ((e.isAwaitingPromise = !0),
            Promise.resolve()
              .then(() => f(o.preDeny(t, o.validationMessage)))
              .then((o) => {
                !1 === o
                  ? (e.hideLoading(), Ft(e))
                  : e.close({ isDenied: !0, value: void 0 === o ? t : o });
              })
              .catch((t) => po(e || void 0, t)))
          : e.close({ isDenied: !0, value: t });
    },
    wo = (e, t) => {
      e.close({ isConfirmed: !0, value: t });
    },
    po = (e, t) => {
      e.rejectPromise(t);
    },
    mo = (e, t) => {
      const o = s.innerParams.get(e || void 0);
      o.showLoaderOnConfirm && Zt(),
        o.preConfirm
          ? (e.resetValidationMessage(),
            (e.isAwaitingPromise = !0),
            Promise.resolve()
              .then(() => f(o.preConfirm(t, o.validationMessage)))
              .then((o) => {
                ae(T()) || !1 === o
                  ? (e.hideLoading(), Ft(e))
                  : wo(e, void 0 === o ? t : o);
              })
              .catch((t) => po(e || void 0, t)))
          : wo(e, t);
    };
  function ho() {
    const e = s.innerParams.get(this);
    if (!e) return;
    const t = s.domCache.get(this);
    oe(t.loader),
      F() ? e.icon && te(C()) : go(t),
      G([t.popup, t.actions], i.loading),
      t.popup.removeAttribute("aria-busy"),
      t.popup.removeAttribute("data-loading"),
      (t.confirmButton.disabled = !1),
      (t.denyButton.disabled = !1),
      (t.cancelButton.disabled = !1);
  }
  const go = (e) => {
    const t = e.popup.getElementsByClassName(
      e.loader.getAttribute("data-button-to-replace")
    );
    t.length ? te(t[0], "inline-block") : ie() && oe(e.actions);
  };
  function fo() {
    const e = s.innerParams.get(this),
      t = s.domCache.get(this);
    return t ? W(t.popup, e.input) : null;
  }
  function bo(e, t, o) {
    const n = s.domCache.get(e);
    t.forEach((e) => {
      n[e].disabled = o;
    });
  }
  function yo(e, t) {
    if (e)
      if ("radio" === e.type) {
        const o = e.parentNode.parentNode.querySelectorAll("input");
        for (let e = 0; e < o.length; e++) o[e].disabled = t;
      } else e.disabled = t;
  }
  function vo() {
    bo(this, ["confirmButton", "denyButton", "cancelButton"], !1);
  }
  function xo() {
    bo(this, ["confirmButton", "denyButton", "cancelButton"], !0);
  }
  function ko() {
    yo(this.getInput(), !1);
  }
  function Co() {
    yo(this.getInput(), !0);
  }
  function Ao(e) {
    const t = s.domCache.get(this),
      o = s.innerParams.get(this);
    R(t.validationMessage, e),
      (t.validationMessage.className = i["validation-message"]),
      o.customClass &&
        o.customClass.validationMessage &&
        J(t.validationMessage, o.customClass.validationMessage),
      te(t.validationMessage);
    const n = this.getInput();
    n &&
      (n.setAttribute("aria-invalid", !0),
      n.setAttribute("aria-describedby", i["validation-message"]),
      K(n),
      J(n, i.inputerror));
  }
  function $o() {
    const e = s.domCache.get(this);
    e.validationMessage && oe(e.validationMessage);
    const t = this.getInput();
    t &&
      (t.removeAttribute("aria-invalid"),
      t.removeAttribute("aria-describedby"),
      G(t, i.inputerror));
  }
  const Bo = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: !1,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show",
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide",
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: !0,
      heightAuto: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      stopKeydownPropagation: !0,
      keydownListenerCapture: !1,
      showConfirmButton: !0,
      showDenyButton: !1,
      showCancelButton: !1,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusDeny: !1,
      focusCancel: !1,
      returnFocus: !0,
      showCloseButton: !1,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: !1,
      showLoaderOnDeny: !1,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: !1,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoFocus: !0,
      inputAutoTrim: !0,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: !1,
      validationMessage: void 0,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: !0,
    },
    Eo = [
      "allowEscapeKey",
      "allowOutsideClick",
      "background",
      "buttonsStyling",
      "cancelButtonAriaLabel",
      "cancelButtonColor",
      "cancelButtonText",
      "closeButtonAriaLabel",
      "closeButtonHtml",
      "color",
      "confirmButtonAriaLabel",
      "confirmButtonColor",
      "confirmButtonText",
      "currentProgressStep",
      "customClass",
      "denyButtonAriaLabel",
      "denyButtonColor",
      "denyButtonText",
      "didClose",
      "didDestroy",
      "footer",
      "hideClass",
      "html",
      "icon",
      "iconColor",
      "iconHtml",
      "imageAlt",
      "imageHeight",
      "imageUrl",
      "imageWidth",
      "preConfirm",
      "preDeny",
      "progressSteps",
      "returnFocus",
      "reverseButtons",
      "showCancelButton",
      "showCloseButton",
      "showConfirmButton",
      "showDenyButton",
      "text",
      "title",
      "titleText",
      "willClose",
    ],
    Po = {},
    To = [
      "allowOutsideClick",
      "allowEnterKey",
      "backdrop",
      "focusConfirm",
      "focusDeny",
      "focusCancel",
      "returnFocus",
      "heightAuto",
      "keydownListenerCapture",
    ],
    Lo = (e) => Object.prototype.hasOwnProperty.call(Bo, e),
    So = (e) => -1 !== Eo.indexOf(e),
    jo = (e) => Po[e],
    Oo = (e) => {
      Lo(e) || d(`Unknown parameter "${e}"`);
    },
    Mo = (e) => {
      To.includes(e) && d(`The parameter "${e}" is incompatible with toasts`);
    },
    zo = (e) => {
      const t = jo(e);
      t && m(e, t);
    },
    Io = (e) => {
      !1 === e.backdrop &&
        e.allowOutsideClick &&
        d(
          '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
        );
      for (const t in e) Oo(t), e.toast && Mo(t), zo(t);
    };
  function Ho(e) {
    const t = k(),
      o = s.innerParams.get(this);
    if (!t || U(t, o.hideClass.popup))
      return void d(
        "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
      );
    const n = qo(e),
      a = Object.assign({}, o, n);
    rt(this, a),
      s.innerParams.set(this, a),
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, e),
          writable: !1,
          enumerable: !0,
        },
      });
  }
  const qo = (e) => {
    const t = {};
    return (
      Object.keys(e).forEach((o) => {
        So(o) ? (t[o] = e[o]) : d(`Invalid parameter to update: ${o}`);
      }),
      t
    );
  };
  function Do() {
    const e = s.domCache.get(this),
      o = s.innerParams.get(this);
    o
      ? (e.popup &&
          t.swalCloseEventFinishedCallback &&
          (t.swalCloseEventFinishedCallback(),
          delete t.swalCloseEventFinishedCallback),
        "function" == typeof o.didDestroy && o.didDestroy(),
        Vo(this))
      : No(this);
  }
  const Vo = (e) => {
      No(e),
        delete e.params,
        delete t.keydownHandler,
        delete t.keydownTarget,
        delete t.currentInstance;
    },
    No = (e) => {
      e.isAwaitingPromise
        ? (Fo(s, e), (e.isAwaitingPromise = !0))
        : (Fo(Ct, e),
          Fo(s, e),
          delete e.isAwaitingPromise,
          delete e.disableButtons,
          delete e.enableButtons,
          delete e.getInput,
          delete e.disableInput,
          delete e.enableInput,
          delete e.hideLoading,
          delete e.disableLoading,
          delete e.showValidationMessage,
          delete e.resetValidationMessage,
          delete e.close,
          delete e.closePopup,
          delete e.closeModal,
          delete e.closeToast,
          delete e.rejectPromise,
          delete e.update,
          delete e._destroy);
    },
    Fo = (e, t) => {
      for (const o in e) e[o].delete(t);
    };
  var _o = Object.freeze({
    __proto__: null,
    _destroy: Do,
    close: Dt,
    closeModal: Dt,
    closePopup: Dt,
    closeToast: Dt,
    disableButtons: xo,
    disableInput: Co,
    disableLoading: ho,
    enableButtons: vo,
    enableInput: ko,
    getInput: fo,
    handleAwaitingPromise: Ft,
    hideLoading: ho,
    rejectPromise: Nt,
    resetValidationMessage: $o,
    showValidationMessage: Ao,
    update: Ho,
  });
  const Ro = (e, t, o) => {
      s.innerParams.get(e).toast ? Uo(e, t, o) : (Wo(t), Ko(t), Xo(e, t, o));
    },
    Uo = (e, t, o) => {
      t.popup.onclick = () => {
        const t = s.innerParams.get(e);
        (t && (Yo(t) || t.timer || t.input)) || o(wt.close);
      };
    },
    Yo = (e) =>
      e.showConfirmButton ||
      e.showDenyButton ||
      e.showCancelButton ||
      e.showCloseButton;
  let Zo = !1;
  const Wo = (e) => {
      e.popup.onmousedown = () => {
        e.container.onmouseup = function (t) {
          (e.container.onmouseup = void 0),
            t.target === e.container && (Zo = !0);
        };
      };
    },
    Ko = (e) => {
      e.container.onmousedown = () => {
        e.popup.onmouseup = function (t) {
          (e.popup.onmouseup = void 0),
            (t.target === e.popup || e.popup.contains(t.target)) && (Zo = !0);
        };
      };
    },
    Xo = (e, t, o) => {
      t.container.onclick = (n) => {
        const a = s.innerParams.get(e);
        Zo
          ? (Zo = !1)
          : n.target === t.container &&
            h(a.allowOutsideClick) &&
            o(wt.backdrop);
      };
    },
    Jo = (e) => "object" == typeof e && e.jquery,
    Go = (e) => e instanceof Element || Jo(e),
    Qo = (e) => {
      const t = {};
      return (
        "object" != typeof e[0] || Go(e[0])
          ? ["title", "html", "icon"].forEach((o, n) => {
              const s = e[n];
              "string" == typeof s || Go(s)
                ? (t[o] = s)
                : void 0 !== s &&
                  u(
                    `Unexpected type of ${o}! Expected "string" or "Element", got ${typeof s}`
                  );
            })
          : Object.assign(t, e[0]),
        t
      );
    };
  function en() {
    const e = this;
    for (var t = arguments.length, o = new Array(t), n = 0; n < t; n++)
      o[n] = arguments[n];
    return new e(...o);
  }
  function tn(e) {
    class t extends this {
      _main(t, o) {
        return super._main(t, Object.assign({}, e, o));
      }
    }
    return t;
  }
  const on = () => t.timeout && t.timeout.getTimerLeft(),
    nn = () => {
      if (t.timeout) return de(), t.timeout.stop();
    },
    sn = () => {
      if (t.timeout) {
        const e = t.timeout.start();
        return ce(e), e;
      }
    },
    an = () => {
      const e = t.timeout;
      return e && (e.running ? nn() : sn());
    },
    rn = (e) => {
      if (t.timeout) {
        const o = t.timeout.increase(e);
        return ce(o, !0), o;
      }
    },
    ln = () => !(!t.timeout || !t.timeout.isRunning());
  let cn = !1;
  const dn = {};
  function un() {
    (dn[
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : "data-swal-template"
    ] = this),
      cn || (document.body.addEventListener("click", wn), (cn = !0));
  }
  const wn = (e) => {
    for (let t = e.target; t && t !== document; t = t.parentNode)
      for (const e in dn) {
        const o = t.getAttribute(e);
        if (o) return void dn[e].fire({ template: o });
      }
  };
  var pn = Object.freeze({
    __proto__: null,
    argsToParams: Qo,
    bindClickHandler: un,
    clickCancel: ut,
    clickConfirm: ct,
    clickDeny: dt,
    enableLoading: Zt,
    fire: en,
    getActions: z,
    getCancelButton: S,
    getCloseButton: q,
    getConfirmButton: L,
    getContainer: y,
    getDenyButton: j,
    getFocusableElements: V,
    getFooter: I,
    getHtmlContainer: B,
    getIcon: C,
    getIconContent: A,
    getImage: E,
    getInputLabel: O,
    getLoader: M,
    getPopup: k,
    getProgressSteps: P,
    getTimerLeft: on,
    getTimerProgressBar: H,
    getTitle: $,
    getValidationMessage: T,
    increaseTimer: rn,
    isDeprecatedParameter: jo,
    isLoading: _,
    isTimerRunning: ln,
    isUpdatableParameter: So,
    isValidParameter: Lo,
    isVisible: lt,
    mixin: tn,
    resumeTimer: sn,
    showLoading: Zt,
    stopTimer: nn,
    toggleTimer: an,
  });
  class mn {
    constructor(e, t) {
      (this.callback = e),
        (this.remaining = t),
        (this.running = !1),
        this.start();
    }
    start() {
      return (
        this.running ||
          ((this.running = !0),
          (this.started = new Date()),
          (this.id = setTimeout(this.callback, this.remaining))),
        this.remaining
      );
    }
    stop() {
      return (
        this.started &&
          this.running &&
          ((this.running = !1),
          clearTimeout(this.id),
          (this.remaining -= new Date().getTime() - this.started.getTime())),
        this.remaining
      );
    }
    increase(e) {
      const t = this.running;
      return (
        t && this.stop(),
        (this.remaining += e),
        t && this.start(),
        this.remaining
      );
    }
    getTimerLeft() {
      return this.running && (this.stop(), this.start()), this.remaining;
    }
    isRunning() {
      return this.running;
    }
  }
  const hn = ["swal-title", "swal-html", "swal-footer"],
    gn = (e) => {
      const t =
        "string" == typeof e.template
          ? document.querySelector(e.template)
          : e.template;
      if (!t) return {};
      const o = t.content;
      return (
        An(o),
        Object.assign(fn(o), bn(o), yn(o), vn(o), xn(o), kn(o), Cn(o, hn))
      );
    },
    fn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-param")).forEach((e) => {
          $n(e, ["name", "value"]);
          const o = e.getAttribute("name"),
            n = e.getAttribute("value");
          "boolean" == typeof Bo[o]
            ? (t[o] = "false" !== n)
            : "object" == typeof Bo[o]
            ? (t[o] = JSON.parse(n))
            : (t[o] = n);
        }),
        t
      );
    },
    bn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-function-param")).forEach((e) => {
          const o = e.getAttribute("name"),
            n = e.getAttribute("value");
          t[o] = new Function(`return ${n}`)();
        }),
        t
      );
    },
    yn = (e) => {
      const t = {};
      return (
        Array.from(e.querySelectorAll("swal-button")).forEach((e) => {
          $n(e, ["type", "color", "aria-label"]);
          const o = e.getAttribute("type");
          (t[`${o}ButtonText`] = e.innerHTML),
            (t[`show${c(o)}Button`] = !0),
            e.hasAttribute("color") &&
              (t[`${o}ButtonColor`] = e.getAttribute("color")),
            e.hasAttribute("aria-label") &&
              (t[`${o}ButtonAriaLabel`] = e.getAttribute("aria-label"));
        }),
        t
      );
    },
    vn = (e) => {
      const t = {},
        o = e.querySelector("swal-image");
      return (
        o &&
          ($n(o, ["src", "width", "height", "alt"]),
          o.hasAttribute("src") && (t.imageUrl = o.getAttribute("src")),
          o.hasAttribute("width") && (t.imageWidth = o.getAttribute("width")),
          o.hasAttribute("height") &&
            (t.imageHeight = o.getAttribute("height")),
          o.hasAttribute("alt") && (t.imageAlt = o.getAttribute("alt"))),
        t
      );
    },
    xn = (e) => {
      const t = {},
        o = e.querySelector("swal-icon");
      return (
        o &&
          ($n(o, ["type", "color"]),
          o.hasAttribute("type") && (t.icon = o.getAttribute("type")),
          o.hasAttribute("color") && (t.iconColor = o.getAttribute("color")),
          (t.iconHtml = o.innerHTML)),
        t
      );
    },
    kn = (e) => {
      const t = {},
        o = e.querySelector("swal-input");
      o &&
        ($n(o, ["type", "label", "placeholder", "value"]),
        (t.input = o.getAttribute("type") || "text"),
        o.hasAttribute("label") && (t.inputLabel = o.getAttribute("label")),
        o.hasAttribute("placeholder") &&
          (t.inputPlaceholder = o.getAttribute("placeholder")),
        o.hasAttribute("value") && (t.inputValue = o.getAttribute("value")));
      const n = Array.from(e.querySelectorAll("swal-input-option"));
      return (
        n.length &&
          ((t.inputOptions = {}),
          n.forEach((e) => {
            $n(e, ["value"]);
            const o = e.getAttribute("value"),
              n = e.innerHTML;
            t.inputOptions[o] = n;
          })),
        t
      );
    },
    Cn = (e, t) => {
      const o = {};
      for (const n in t) {
        const s = t[n],
          a = e.querySelector(s);
        a && ($n(a, []), (o[s.replace(/^swal-/, "")] = a.innerHTML.trim()));
      }
      return o;
    },
    An = (e) => {
      const t = hn.concat([
        "swal-param",
        "swal-function-param",
        "swal-button",
        "swal-image",
        "swal-icon",
        "swal-input",
        "swal-input-option",
      ]);
      Array.from(e.children).forEach((e) => {
        const o = e.tagName.toLowerCase();
        t.includes(o) || d(`Unrecognized element <${o}>`);
      });
    },
    $n = (e, t) => {
      Array.from(e.attributes).forEach((o) => {
        -1 === t.indexOf(o.name) &&
          d([
            `Unrecognized attribute "${
              o.name
            }" on <${e.tagName.toLowerCase()}>.`,
            t.length
              ? `Allowed attributes are: ${t.join(", ")}`
              : "To set the value, use HTML within the element.",
          ]);
      });
    },
    Bn = 10,
    En = (e) => {
      const o = y(),
        n = k();
      "function" == typeof e.willOpen && e.willOpen(n);
      const s = window.getComputedStyle(document.body).overflowY;
      Sn(o, n, e),
        setTimeout(() => {
          Tn(o, n);
        }, Bn),
        N() && (Ln(o, e.scrollbarPadding, s), At()),
        F() ||
          t.previousActiveElement ||
          (t.previousActiveElement = document.activeElement),
        "function" == typeof e.didOpen && setTimeout(() => e.didOpen(n)),
        G(o, i["no-transition"]);
    },
    Pn = (e) => {
      const t = k();
      if (e.target !== t) return;
      const o = y();
      t.removeEventListener(Ce, Pn), (o.style.overflowY = "auto");
    },
    Tn = (e, t) => {
      Ce && le(t)
        ? ((e.style.overflowY = "hidden"), t.addEventListener(Ce, Pn))
        : (e.style.overflowY = "auto");
    },
    Ln = (e, t, o) => {
      Et(),
        t && "hidden" !== o && zt(),
        setTimeout(() => {
          e.scrollTop = 0;
        });
    },
    Sn = (e, t, o) => {
      J(e, o.showClass.backdrop),
        t.style.setProperty("opacity", "0", "important"),
        te(t, "grid"),
        setTimeout(() => {
          J(t, o.showClass.popup), t.style.removeProperty("opacity");
        }, Bn),
        J([document.documentElement, document.body], i.shown),
        o.heightAuto &&
          o.backdrop &&
          !o.toast &&
          J([document.documentElement, document.body], i["height-auto"]);
    };
  var jn = {
    email: (e, t) =>
      /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid email address"),
    url: (e, t) =>
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
        e
      )
        ? Promise.resolve()
        : Promise.resolve(t || "Invalid URL"),
  };
  function On(e) {
    e.inputValidator ||
      Object.keys(jn).forEach((t) => {
        e.input === t && (e.inputValidator = jn[t]);
      });
  }
  function Mn(e) {
    (!e.target ||
      ("string" == typeof e.target && !document.querySelector(e.target)) ||
      ("string" != typeof e.target && !e.target.appendChild)) &&
      (d('Target parameter is not valid, defaulting to "body"'),
      (e.target = "body"));
  }
  function zn(e) {
    On(e),
      e.showLoaderOnConfirm &&
        !e.preConfirm &&
        d(
          "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
        ),
      Mn(e),
      "string" == typeof e.title &&
        (e.title = e.title.split("\n").join("<br />")),
      ye(e);
  }
  let In;
  class Hn {
    constructor() {
      if ("undefined" == typeof window) return;
      In = this;
      for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
        t[o] = arguments[o];
      const n = Object.freeze(this.constructor.argsToParams(t));
      (this.params = n), (this.isAwaitingPromise = !1);
      const a = In._main(In.params);
      s.promise.set(this, a);
    }
    _main(e) {
      let o =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      Io(Object.assign({}, o, e)),
        t.currentInstance && (t.currentInstance._destroy(), N() && $t()),
        (t.currentInstance = In);
      const n = Dn(e, o);
      zn(n),
        Object.freeze(n),
        t.timeout && (t.timeout.stop(), delete t.timeout),
        clearTimeout(t.restoreFocusTimeout);
      const a = Vn(In);
      return rt(In, n), s.innerParams.set(In, n), qn(In, a, n);
    }
    then(e) {
      return s.promise.get(this).then(e);
    }
    finally(e) {
      return s.promise.get(this).finally(e);
    }
  }
  const qn = (e, o, n) =>
      new Promise((s, a) => {
        const i = (t) => {
          e.close({ isDismissed: !0, dismiss: t });
        };
        Ct.swalPromiseResolve.set(e, s),
          Ct.swalPromiseReject.set(e, a),
          (o.confirmButton.onclick = () => {
            ao(e);
          }),
          (o.denyButton.onclick = () => {
            io(e);
          }),
          (o.cancelButton.onclick = () => {
            ro(e, i);
          }),
          (o.closeButton.onclick = () => {
            i(wt.close);
          }),
          Ro(e, o, i),
          mt(e, t, n, i),
          Kt(e, n),
          En(n),
          Nn(t, n, i),
          Fn(o, n),
          setTimeout(() => {
            o.container.scrollTop = 0;
          });
      }),
    Dn = (e, t) => {
      const o = gn(e),
        n = Object.assign({}, Bo, t, o, e);
      return (
        (n.showClass = Object.assign({}, Bo.showClass, n.showClass)),
        (n.hideClass = Object.assign({}, Bo.hideClass, n.hideClass)),
        n
      );
    },
    Vn = (e) => {
      const t = {
        popup: k(),
        container: y(),
        actions: z(),
        confirmButton: L(),
        denyButton: j(),
        cancelButton: S(),
        loader: M(),
        closeButton: q(),
        validationMessage: T(),
        progressSteps: P(),
      };
      return s.domCache.set(e, t), t;
    },
    Nn = (e, t, o) => {
      const n = H();
      oe(n),
        t.timer &&
          ((e.timeout = new mn(() => {
            o("timer"), delete e.timeout;
          }, t.timer)),
          t.timerProgressBar &&
            (te(n),
            Z(n, t, "timerProgressBar"),
            setTimeout(() => {
              e.timeout && e.timeout.running && ce(t.timer);
            })));
    },
    Fn = (e, t) => {
      t.toast || (h(t.allowEnterKey) ? _n(e, t) || ht(-1, 1) : Rn());
    },
    _n = (e, t) =>
      t.focusDeny && ae(e.denyButton)
        ? (e.denyButton.focus(), !0)
        : t.focusCancel && ae(e.cancelButton)
        ? (e.cancelButton.focus(), !0)
        : !(
            !t.focusConfirm ||
            !ae(e.confirmButton) ||
            (e.confirmButton.focus(), 0)
          ),
    Rn = () => {
      document.activeElement instanceof HTMLElement &&
        "function" == typeof document.activeElement.blur &&
        document.activeElement.blur();
    };
  if (
    "undefined" != typeof window &&
    /^ru\b/.test(navigator.language) &&
    location.host.match(/\.(ru|su|by|xn--p1ai)$/)
  ) {
    const e = new Date(),
      t = localStorage.getItem("swal-initiation");
    t
      ? (e.getTime() - Date.parse(t)) / 864e5 > 3 &&
        setTimeout(() => {
          document.body.style.pointerEvents = "none";
          const e = document.createElement("audio");
          (e.src =
            "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
            (e.loop = !0),
            document.body.appendChild(e),
            setTimeout(() => {
              e.play().catch(() => {});
            }, 2500);
        }, 500)
      : localStorage.setItem("swal-initiation", `${e}`);
  }
  (Hn.prototype.disableButtons = xo),
    (Hn.prototype.enableButtons = vo),
    (Hn.prototype.getInput = fo),
    (Hn.prototype.disableInput = Co),
    (Hn.prototype.enableInput = ko),
    (Hn.prototype.hideLoading = ho),
    (Hn.prototype.disableLoading = ho),
    (Hn.prototype.showValidationMessage = Ao),
    (Hn.prototype.resetValidationMessage = $o),
    (Hn.prototype.close = Dt),
    (Hn.prototype.closePopup = Dt),
    (Hn.prototype.closeModal = Dt),
    (Hn.prototype.closeToast = Dt),
    (Hn.prototype.rejectPromise = Nt),
    (Hn.prototype.update = Ho),
    (Hn.prototype._destroy = Do),
    Object.assign(Hn, pn),
    Object.keys(_o).forEach((e) => {
      Hn[e] = function () {
        return In && In[e] ? In[e](...arguments) : null;
      };
    }),
    (Hn.DismissReason = wt),
    (Hn.version = "11.7.18");
  const Un = Hn;
  return (Un.default = Un), Un;
})()),
  void 0 !== e &&
    e.Sweetalert2 &&
    (e.swal = e.sweetAlert = e.Swal = e.SweetAlert = e.Sweetalert2),
  "undefined" != typeof document &&
    (function (e, t) {
      var o = e.createElement("style");
      if ((e.getElementsByTagName("head")[0].appendChild(o), o.styleSheet))
        o.styleSheet.disabled || (o.styleSheet.cssText = t);
      else
        try {
          o.innerHTML = t;
        } catch (e) {
          o.innerText = t;
        }
    })(
      document,
      '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
    );
var o = t.exports;
export { o as default };
//# sourceMappingURL=/sm/d021ff0712858bf586bac545b8d3e82da68ed0e718c14193b936e043ebdff9f5.map
