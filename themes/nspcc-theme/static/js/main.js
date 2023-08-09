$(function () {
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 200) {
			$("header").addClass("topfixed");
		} else {
			$("header").removeClass("topfixed");
		}
	});
});


;/* Start:"a:4:{s:4:"full";s:55:"/local/templates/nspcc/js/jquery.min.js?166601691897163";s:6:"source";s:39:"/local/templates/nspcc/js/jquery.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
			if (!a.document)
					throw new Error("jQuery requires a window with a document");
			return b(a)
	}
	: b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
	var c = []
		, d = a.document
		, e = c.slice
		, f = c.concat
		, g = c.push
		, h = c.indexOf
		, i = {}
		, j = i.toString
		, k = i.hasOwnProperty
		, l = {}
		, m = "1.12.4"
		, n = function(a, b) {
			return new n.fn.init(a,b)
	}
		, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		, p = /^-ms-/
		, q = /-([\da-z])/gi
		, r = function(a, b) {
			return b.toUpperCase()
	};
	n.fn = n.prototype = {
			jquery: m,
			constructor: n,
			selector: "",
			length: 0,
			toArray: function() {
					return e.call(this)
			},
			get: function(a) {
					return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
			},
			pushStack: function(a) {
					var b = n.merge(this.constructor(), a);
					return b.prevObject = this,
					b.context = this.context,
					b
			},
			each: function(a) {
					return n.each(this, a)
			},
			map: function(a) {
					return this.pushStack(n.map(this, function(b, c) {
							return a.call(b, c, b)
					}))
			},
			slice: function() {
					return this.pushStack(e.apply(this, arguments))
			},
			first: function() {
					return this.eq(0)
			},
			last: function() {
					return this.eq(-1)
			},
			eq: function(a) {
					var b = this.length
						, c = +a + (0 > a ? b : 0);
					return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
			},
			end: function() {
					return this.prevObject || this.constructor()
			},
			push: g,
			sort: c.sort,
			splice: c.splice
	},
	n.extend = n.fn.extend = function() {
			var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
			for ("boolean" == typeof g && (j = g,
			g = arguments[h] || {},
			h++),
			"object" == typeof g || n.isFunction(g) || (g = {}),
			h === i && (g = this,
			h--); i > h; h++)
					if (null != (e = arguments[h]))
							for (d in e)
									a = g[d],
									c = e[d],
									g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
									f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
									g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
			return g
	}
	,
	n.extend({
			expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(a) {
					throw new Error(a)
			},
			noop: function() {},
			isFunction: function(a) {
					return "function" === n.type(a)
			},
			isArray: Array.isArray || function(a) {
					return "array" === n.type(a)
			}
			,
			isWindow: function(a) {
					return null != a && a == a.window
			},
			isNumeric: function(a) {
					var b = a && a.toString();
					return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
			},
			isEmptyObject: function(a) {
					var b;
					for (b in a)
							return !1;
					return !0
			},
			isPlainObject: function(a) {
					var b;
					if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
							return !1;
					try {
							if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
									return !1
					} catch (c) {
							return !1
					}
					if (!l.ownFirst)
							for (b in a)
									return k.call(a, b);
					for (b in a)
							;
					return void 0 === b || k.call(a, b)
			},
			type: function(a) {
					return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
			},
			globalEval: function(b) {
					b && n.trim(b) && (a.execScript || function(b) {
							a.eval.call(a, b)
					}
					)(b)
			},
			camelCase: function(a) {
					return a.replace(p, "ms-").replace(q, r)
			},
			nodeName: function(a, b) {
					return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
			},
			each: function(a, b) {
					var c, d = 0;
					if (s(a)) {
							for (c = a.length; c > d; d++)
									if (b.call(a[d], d, a[d]) === !1)
											break
					} else
							for (d in a)
									if (b.call(a[d], d, a[d]) === !1)
											break;
					return a
			},
			trim: function(a) {
					return null == a ? "" : (a + "").replace(o, "")
			},
			makeArray: function(a, b) {
					var c = b || [];
					return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
					c
			},
			inArray: function(a, b, c) {
					var d;
					if (b) {
							if (h)
									return h.call(b, a, c);
							for (d = b.length,
							c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
									if (c in b && b[c] === a)
											return c
					}
					return -1
			},
			merge: function(a, b) {
					var c = +b.length
						, d = 0
						, e = a.length;
					while (c > d)
							a[e++] = b[d++];
					if (c !== c)
							while (void 0 !== b[d])
									a[e++] = b[d++];
					return a.length = e,
					a
			},
			grep: function(a, b, c) {
					for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
							d = !b(a[f], f),
							d !== h && e.push(a[f]);
					return e
			},
			map: function(a, b, c) {
					var d, e, g = 0, h = [];
					if (s(a))
							for (d = a.length; d > g; g++)
									e = b(a[g], g, c),
									null != e && h.push(e);
					else
							for (g in a)
									e = b(a[g], g, c),
									null != e && h.push(e);
					return f.apply([], h)
			},
			guid: 1,
			proxy: function(a, b) {
					var c, d, f;
					return "string" == typeof b && (f = a[b],
					b = a,
					a = f),
					n.isFunction(a) ? (c = e.call(arguments, 2),
					d = function() {
							return a.apply(b || this, c.concat(e.call(arguments)))
					}
					,
					d.guid = a.guid = a.guid || n.guid++,
					d) : void 0
			},
			now: function() {
					return +new Date
			},
			support: l
	}),
	"function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
	n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
			i["[object " + b + "]"] = b.toLowerCase()
	});
	function s(a) {
			var b = !!a && "length"in a && a.length
				, c = n.type(a);
			return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
					return a === b && (l = !0),
					0
			}, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
					for (var c = 0, d = a.length; d > c; c++)
							if (a[c] === b)
									return c;
					return -1
			}, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
					ID: new RegExp("^#(" + M + ")"),
					CLASS: new RegExp("^\\.(" + M + ")"),
					TAG: new RegExp("^(" + M + "|[*])"),
					ATTR: new RegExp("^" + N),
					PSEUDO: new RegExp("^" + O),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
					bool: new RegExp("^(?:" + K + ")$","i"),
					needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
			}, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			}, da = function() {
					m()
			};
			try {
					H.apply(E = I.call(v.childNodes), v.childNodes),
					E[v.childNodes.length].nodeType
			} catch (ea) {
					H = {
							apply: E.length ? function(a, b) {
									G.apply(a, I.call(b))
							}
							: function(a, b) {
									var c = a.length
										, d = 0;
									while (a[c++] = b[d++])
											;
									a.length = c - 1
							}
					}
			}
			function fa(a, b, d, e) {
					var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
					if (d = d || [],
					"string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
							return d;
					if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
					b = b || n,
					p)) {
							if (11 !== x && (o = $.exec(a)))
									if (f = o[1]) {
											if (9 === x) {
													if (!(j = b.getElementById(f)))
															return d;
													if (j.id === f)
															return d.push(j),
															d
											} else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
													return d.push(j),
													d
									} else {
											if (o[2])
													return H.apply(d, b.getElementsByTagName(a)),
													d;
											if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
													return H.apply(d, b.getElementsByClassName(f)),
													d
									}
							if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
									if (1 !== x)
											w = b,
											s = a;
									else if ("object" !== b.nodeName.toLowerCase()) {
											(k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
											r = g(a),
											h = r.length,
											l = V.test(k) ? "#" + k : "[id='" + k + "']";
											while (h--)
													r[h] = l + " " + qa(r[h]);
											s = r.join(","),
											w = _.test(a) && oa(b.parentNode) || b
									}
									if (s)
											try {
													return H.apply(d, w.querySelectorAll(s)),
													d
											} catch (y) {} finally {
													k === u && b.removeAttribute("id")
											}
							}
					}
					return i(a.replace(Q, "$1"), b, d, e)
			}
			function ga() {
					var a = [];
					function b(c, e) {
							return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
							b[c + " "] = e
					}
					return b
			}
			function ha(a) {
					return a[u] = !0,
					a
			}
			function ia(a) {
					var b = n.createElement("div");
					try {
							return !!a(b)
					} catch (c) {
							return !1
					} finally {
							b.parentNode && b.parentNode.removeChild(b),
							b = null
					}
			}
			function ja(a, b) {
					var c = a.split("|")
						, e = c.length;
					while (e--)
							d.attrHandle[c[e]] = b
			}
			function ka(a, b) {
					var c = b && a
						, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
					if (d)
							return d;
					if (c)
							while (c = c.nextSibling)
									if (c === b)
											return -1;
					return a ? 1 : -1
			}
			function la(a) {
					return function(b) {
							var c = b.nodeName.toLowerCase();
							return "input" === c && b.type === a
					}
			}
			function ma(a) {
					return function(b) {
							var c = b.nodeName.toLowerCase();
							return ("input" === c || "button" === c) && b.type === a
					}
			}
			function na(a) {
					return ha(function(b) {
							return b = +b,
							ha(function(c, d) {
									var e, f = a([], c.length, b), g = f.length;
									while (g--)
											c[e = f[g]] && (c[e] = !(d[e] = c[e]))
							})
					})
			}
			function oa(a) {
					return a && "undefined" != typeof a.getElementsByTagName && a
			}
			c = fa.support = {},
			f = fa.isXML = function(a) {
					var b = a && (a.ownerDocument || a).documentElement;
					return b ? "HTML" !== b.nodeName : !1
			}
			,
			m = fa.setDocument = function(a) {
					var b, e, g = a ? a.ownerDocument || a : v;
					return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
					o = n.documentElement,
					p = !f(n),
					(e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
					c.attributes = ia(function(a) {
							return a.className = "i",
							!a.getAttribute("className")
					}),
					c.getElementsByTagName = ia(function(a) {
							return a.appendChild(n.createComment("")),
							!a.getElementsByTagName("*").length
					}),
					c.getElementsByClassName = Z.test(n.getElementsByClassName),
					c.getById = ia(function(a) {
							return o.appendChild(a).id = u,
							!n.getElementsByName || !n.getElementsByName(u).length
					}),
					c.getById ? (d.find.ID = function(a, b) {
							if ("undefined" != typeof b.getElementById && p) {
									var c = b.getElementById(a);
									return c ? [c] : []
							}
					}
					,
					d.filter.ID = function(a) {
							var b = a.replace(ba, ca);
							return function(a) {
									return a.getAttribute("id") === b
							}
					}
					) : (delete d.find.ID,
					d.filter.ID = function(a) {
							var b = a.replace(ba, ca);
							return function(a) {
									var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
									return c && c.value === b
							}
					}
					),
					d.find.TAG = c.getElementsByTagName ? function(a, b) {
							return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
					}
					: function(a, b) {
							var c, d = [], e = 0, f = b.getElementsByTagName(a);
							if ("*" === a) {
									while (c = f[e++])
											1 === c.nodeType && d.push(c);
									return d
							}
							return f
					}
					,
					d.find.CLASS = c.getElementsByClassName && function(a, b) {
							return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
					}
					,
					r = [],
					q = [],
					(c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
							o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
							a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
							a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
							a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
							a.querySelectorAll(":checked").length || q.push(":checked"),
							a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
					}),
					ia(function(a) {
							var b = n.createElement("input");
							b.setAttribute("type", "hidden"),
							a.appendChild(b).setAttribute("name", "D"),
							a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
							a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
							a.querySelectorAll("*,:x"),
							q.push(",.*:")
					})),
					(c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
							c.disconnectedMatch = s.call(a, "div"),
							s.call(a, "[s!='']:x"),
							r.push("!=", O)
					}),
					q = q.length && new RegExp(q.join("|")),
					r = r.length && new RegExp(r.join("|")),
					b = Z.test(o.compareDocumentPosition),
					t = b || Z.test(o.contains) ? function(a, b) {
							var c = 9 === a.nodeType ? a.documentElement : a
								, d = b && b.parentNode;
							return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
					}
					: function(a, b) {
							if (b)
									while (b = b.parentNode)
											if (b === a)
													return !0;
							return !1
					}
					,
					B = b ? function(a, b) {
							if (a === b)
									return l = !0,
									0;
							var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
							return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
							1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
					}
					: function(a, b) {
							if (a === b)
									return l = !0,
									0;
							var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
							if (!e || !f)
									return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
							if (e === f)
									return ka(a, b);
							c = a;
							while (c = c.parentNode)
									g.unshift(c);
							c = b;
							while (c = c.parentNode)
									h.unshift(c);
							while (g[d] === h[d])
									d++;
							return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
					}
					,
					n) : n
			}
			,
			fa.matches = function(a, b) {
					return fa(a, null, null, b)
			}
			,
			fa.matchesSelector = function(a, b) {
					if ((a.ownerDocument || a) !== n && m(a),
					b = b.replace(T, "='$1']"),
					c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
							try {
									var d = s.call(a, b);
									if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
											return d
							} catch (e) {}
					return fa(b, n, null, [a]).length > 0
			}
			,
			fa.contains = function(a, b) {
					return (a.ownerDocument || a) !== n && m(a),
					t(a, b)
			}
			,
			fa.attr = function(a, b) {
					(a.ownerDocument || a) !== n && m(a);
					var e = d.attrHandle[b.toLowerCase()]
						, f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
					return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
			}
			,
			fa.error = function(a) {
					throw new Error("Syntax error, unrecognized expression: " + a)
			}
			,
			fa.uniqueSort = function(a) {
					var b, d = [], e = 0, f = 0;
					if (l = !c.detectDuplicates,
					k = !c.sortStable && a.slice(0),
					a.sort(B),
					l) {
							while (b = a[f++])
									b === a[f] && (e = d.push(f));
							while (e--)
									a.splice(d[e], 1)
					}
					return k = null,
					a
			}
			,
			e = fa.getText = function(a) {
					var b, c = "", d = 0, f = a.nodeType;
					if (f) {
							if (1 === f || 9 === f || 11 === f) {
									if ("string" == typeof a.textContent)
											return a.textContent;
									for (a = a.firstChild; a; a = a.nextSibling)
											c += e(a)
							} else if (3 === f || 4 === f)
									return a.nodeValue
					} else
							while (b = a[d++])
									c += e(b);
					return c
			}
			,
			d = fa.selectors = {
					cacheLength: 50,
					createPseudo: ha,
					match: W,
					attrHandle: {},
					find: {},
					relative: {
							">": {
									dir: "parentNode",
									first: !0
							},
							" ": {
									dir: "parentNode"
							},
							"+": {
									dir: "previousSibling",
									first: !0
							},
							"~": {
									dir: "previousSibling"
							}
					},
					preFilter: {
							ATTR: function(a) {
									return a[1] = a[1].replace(ba, ca),
									a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
									"~=" === a[2] && (a[3] = " " + a[3] + " "),
									a.slice(0, 4)
							},
							CHILD: function(a) {
									return a[1] = a[1].toLowerCase(),
									"nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
									a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
									a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
									a
							},
							PSEUDO: function(a) {
									var b, c = !a[6] && a[2];
									return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
									a[2] = c.slice(0, b)),
									a.slice(0, 3))
							}
					},
					filter: {
							TAG: function(a) {
									var b = a.replace(ba, ca).toLowerCase();
									return "*" === a ? function() {
											return !0
									}
									: function(a) {
											return a.nodeName && a.nodeName.toLowerCase() === b
									}
							},
							CLASS: function(a) {
									var b = y[a + " "];
									return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
											return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
									})
							},
							ATTR: function(a, b, c) {
									return function(d) {
											var e = fa.attr(d, a);
											return null == e ? "!=" === b : b ? (e += "",
											"=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
									}
							},
							CHILD: function(a, b, c, d, e) {
									var f = "nth" !== a.slice(0, 3)
										, g = "last" !== a.slice(-4)
										, h = "of-type" === b;
									return 1 === d && 0 === e ? function(a) {
											return !!a.parentNode
									}
									: function(b, c, i) {
											var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
											if (q) {
													if (f) {
															while (p) {
																	m = b;
																	while (m = m[p])
																			if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
																					return !1;
																	o = p = "only" === a && !o && "nextSibling"
															}
															return !0
													}
													if (o = [g ? q.firstChild : q.lastChild],
													g && s) {
															m = q,
															l = m[u] || (m[u] = {}),
															k = l[m.uniqueID] || (l[m.uniqueID] = {}),
															j = k[a] || [],
															n = j[0] === w && j[1],
															t = n && j[2],
															m = n && q.childNodes[n];
															while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
																	if (1 === m.nodeType && ++t && m === b) {
																			k[a] = [w, n, t];
																			break
																	}
													} else if (s && (m = b,
													l = m[u] || (m[u] = {}),
													k = l[m.uniqueID] || (l[m.uniqueID] = {}),
													j = k[a] || [],
													n = j[0] === w && j[1],
													t = n),
													t === !1)
															while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
																	if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
																	k = l[m.uniqueID] || (l[m.uniqueID] = {}),
																	k[a] = [w, t]),
																	m === b))
																			break;
													return t -= e,
													t === d || t % d === 0 && t / d >= 0
											}
									}
							},
							PSEUDO: function(a, b) {
									var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
									return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
									d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
											var d, f = e(a, b), g = f.length;
											while (g--)
													d = J(a, f[g]),
													a[d] = !(c[d] = f[g])
									}) : function(a) {
											return e(a, 0, c)
									}
									) : e
							}
					},
					pseudos: {
							not: ha(function(a) {
									var b = []
										, c = []
										, d = h(a.replace(Q, "$1"));
									return d[u] ? ha(function(a, b, c, e) {
											var f, g = d(a, null, e, []), h = a.length;
											while (h--)
													(f = g[h]) && (a[h] = !(b[h] = f))
									}) : function(a, e, f) {
											return b[0] = a,
											d(b, null, f, c),
											b[0] = null,
											!c.pop()
									}
							}),
							has: ha(function(a) {
									return function(b) {
											return fa(a, b).length > 0
									}
							}),
							contains: ha(function(a) {
									return a = a.replace(ba, ca),
									function(b) {
											return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
									}
							}),
							lang: ha(function(a) {
									return V.test(a || "") || fa.error("unsupported lang: " + a),
									a = a.replace(ba, ca).toLowerCase(),
									function(b) {
											var c;
											do
													if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
															return c = c.toLowerCase(),
															c === a || 0 === c.indexOf(a + "-");
											while ((b = b.parentNode) && 1 === b.nodeType);
											return !1
									}
							}),
							target: function(b) {
									var c = a.location && a.location.hash;
									return c && c.slice(1) === b.id
							},
							root: function(a) {
									return a === o
							},
							focus: function(a) {
									return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
							},
							enabled: function(a) {
									return a.disabled === !1
							},
							disabled: function(a) {
									return a.disabled === !0
							},
							checked: function(a) {
									var b = a.nodeName.toLowerCase();
									return "input" === b && !!a.checked || "option" === b && !!a.selected
							},
							selected: function(a) {
									return a.parentNode && a.parentNode.selectedIndex,
									a.selected === !0
							},
							empty: function(a) {
									for (a = a.firstChild; a; a = a.nextSibling)
											if (a.nodeType < 6)
													return !1;
									return !0
							},
							parent: function(a) {
									return !d.pseudos.empty(a)
							},
							header: function(a) {
									return Y.test(a.nodeName)
							},
							input: function(a) {
									return X.test(a.nodeName)
							},
							button: function(a) {
									var b = a.nodeName.toLowerCase();
									return "input" === b && "button" === a.type || "button" === b
							},
							text: function(a) {
									var b;
									return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
							},
							first: na(function() {
									return [0]
							}),
							last: na(function(a, b) {
									return [b - 1]
							}),
							eq: na(function(a, b, c) {
									return [0 > c ? c + b : c]
							}),
							even: na(function(a, b) {
									for (var c = 0; b > c; c += 2)
											a.push(c);
									return a
							}),
							odd: na(function(a, b) {
									for (var c = 1; b > c; c += 2)
											a.push(c);
									return a
							}),
							lt: na(function(a, b, c) {
									for (var d = 0 > c ? c + b : c; --d >= 0; )
											a.push(d);
									return a
							}),
							gt: na(function(a, b, c) {
									for (var d = 0 > c ? c + b : c; ++d < b; )
											a.push(d);
									return a
							})
					}
			},
			d.pseudos.nth = d.pseudos.eq;
			for (b in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
			})
					d.pseudos[b] = la(b);
			for (b in {
					submit: !0,
					reset: !0
			})
					d.pseudos[b] = ma(b);
			function pa() {}
			pa.prototype = d.filters = d.pseudos,
			d.setFilters = new pa,
			g = fa.tokenize = function(a, b) {
					var c, e, f, g, h, i, j, k = z[a + " "];
					if (k)
							return b ? 0 : k.slice(0);
					h = a,
					i = [],
					j = d.preFilter;
					while (h) {
							c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
							i.push(f = [])),
							c = !1,
							(e = S.exec(h)) && (c = e.shift(),
							f.push({
									value: c,
									type: e[0].replace(Q, " ")
							}),
							h = h.slice(c.length));
							for (g in d.filter)
									!(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
									f.push({
											value: c,
											type: g,
											matches: e
									}),
									h = h.slice(c.length));
							if (!c)
									break
					}
					return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
			}
			;
			function qa(a) {
					for (var b = 0, c = a.length, d = ""; c > b; b++)
							d += a[b].value;
					return d
			}
			function ra(a, b, c) {
					var d = b.dir
						, e = c && "parentNode" === d
						, f = x++;
					return b.first ? function(b, c, f) {
							while (b = b[d])
									if (1 === b.nodeType || e)
											return a(b, c, f)
					}
					: function(b, c, g) {
							var h, i, j, k = [w, f];
							if (g) {
									while (b = b[d])
											if ((1 === b.nodeType || e) && a(b, c, g))
													return !0
							} else
									while (b = b[d])
											if (1 === b.nodeType || e) {
													if (j = b[u] || (b[u] = {}),
													i = j[b.uniqueID] || (j[b.uniqueID] = {}),
													(h = i[d]) && h[0] === w && h[1] === f)
															return k[2] = h[2];
													if (i[d] = k,
													k[2] = a(b, c, g))
															return !0
											}
					}
			}
			function sa(a) {
					return a.length > 1 ? function(b, c, d) {
							var e = a.length;
							while (e--)
									if (!a[e](b, c, d))
											return !1;
							return !0
					}
					: a[0]
			}
			function ta(a, b, c) {
					for (var d = 0, e = b.length; e > d; d++)
							fa(a, b[d], c);
					return c
			}
			function ua(a, b, c, d, e) {
					for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
							(f = a[h]) && (c && !c(f, d, e) || (g.push(f),
							j && b.push(h)));
					return g
			}
			function va(a, b, c, d, e, f) {
					return d && !d[u] && (d = va(d)),
					e && !e[u] && (e = va(e, f)),
					ha(function(f, g, h, i) {
							var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
							if (c && c(q, r, h, i),
							d) {
									j = ua(r, n),
									d(j, [], h, i),
									k = j.length;
									while (k--)
											(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
							}
							if (f) {
									if (e || a) {
											if (e) {
													j = [],
													k = r.length;
													while (k--)
															(l = r[k]) && j.push(q[k] = l);
													e(null, r = [], j, i)
											}
											k = r.length;
											while (k--)
													(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
									}
							} else
									r = ua(r === g ? r.splice(o, r.length) : r),
									e ? e(null, g, r, i) : H.apply(g, r)
					})
			}
			function wa(a) {
					for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
							return a === b
					}, h, !0), l = ra(function(a) {
							return J(b, a) > -1
					}, h, !0), m = [function(a, c, d) {
							var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
							return b = null,
							e
					}
					]; f > i; i++)
							if (c = d.relative[a[i].type])
									m = [ra(sa(m), c)];
							else {
									if (c = d.filter[a[i].type].apply(null, a[i].matches),
									c[u]) {
											for (e = ++i; f > e; e++)
													if (d.relative[a[e].type])
															break;
											return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
													value: " " === a[i - 2].type ? "*" : ""
											})).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
									}
									m.push(c)
							}
					return sa(m)
			}
			function xa(a, b) {
					var c = b.length > 0
						, e = a.length > 0
						, f = function(f, g, h, i, k) {
							var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
							for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
									if (e && l) {
											o = 0,
											g || l.ownerDocument === n || (m(l),
											h = !p);
											while (q = a[o++])
													if (q(l, g || n, h)) {
															i.push(l);
															break
													}
											k && (w = y)
									}
									c && ((l = !q && l) && r--,
									f && t.push(l))
							}
							if (r += s,
							c && s !== r) {
									o = 0;
									while (q = b[o++])
											q(t, u, g, h);
									if (f) {
											if (r > 0)
													while (s--)
															t[s] || u[s] || (u[s] = F.call(i));
											u = ua(u)
									}
									H.apply(i, u),
									k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
							}
							return k && (w = y,
							j = v),
							t
					};
					return c ? ha(f) : f
			}
			return h = fa.compile = function(a, b) {
					var c, d = [], e = [], f = A[a + " "];
					if (!f) {
							b || (b = g(a)),
							c = b.length;
							while (c--)
									f = wa(b[c]),
									f[u] ? d.push(f) : e.push(f);
							f = A(a, xa(e, d)),
							f.selector = a
					}
					return f
			}
			,
			i = fa.select = function(a, b, e, f) {
					var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
					if (e = e || [],
					1 === o.length) {
							if (j = o[0] = o[0].slice(0),
							j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
									if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
									!b)
											return e;
									n && (b = b.parentNode),
									a = a.slice(j.shift().value.length)
							}
							i = W.needsContext.test(a) ? 0 : j.length;
							while (i--) {
									if (k = j[i],
									d.relative[l = k.type])
											break;
									if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
											if (j.splice(i, 1),
											a = f.length && qa(j),
											!a)
													return H.apply(e, f),
													e;
											break
									}
							}
					}
					return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
					e
			}
			,
			c.sortStable = u.split("").sort(B).join("") === u,
			c.detectDuplicates = !!l,
			m(),
			c.sortDetached = ia(function(a) {
					return 1 & a.compareDocumentPosition(n.createElement("div"))
			}),
			ia(function(a) {
					return a.innerHTML = "<a href='#'></a>",
					"#" === a.firstChild.getAttribute("href")
			}) || ja("type|href|height|width", function(a, b, c) {
					return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}),
			c.attributes && ia(function(a) {
					return a.innerHTML = "<input/>",
					a.firstChild.setAttribute("value", ""),
					"" === a.firstChild.getAttribute("value")
			}) || ja("value", function(a, b, c) {
					return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}),
			ia(function(a) {
					return null == a.getAttribute("disabled")
			}) || ja(K, function(a, b, c) {
					var d;
					return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}),
			fa
	}(a);
	n.find = t,
	n.expr = t.selectors,
	n.expr[":"] = n.expr.pseudos,
	n.uniqueSort = n.unique = t.uniqueSort,
	n.text = t.getText,
	n.isXMLDoc = t.isXML,
	n.contains = t.contains;
	var u = function(a, b, c) {
			var d = []
				, e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType)
					if (1 === a.nodeType) {
							if (e && n(a).is(c))
									break;
							d.push(a)
					}
			return d
	}
		, v = function(a, b) {
			for (var c = []; a; a = a.nextSibling)
					1 === a.nodeType && a !== b && c.push(a);
			return c
	}
		, w = n.expr.match.needsContext
		, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
		, y = /^.[^:#\[\.,]*$/;
	function z(a, b, c) {
			if (n.isFunction(b))
					return n.grep(a, function(a, d) {
							return !!b.call(a, d, a) !== c
					});
			if (b.nodeType)
					return n.grep(a, function(a) {
							return a === b !== c
					});
			if ("string" == typeof b) {
					if (y.test(b))
							return n.filter(b, a, c);
					b = n.filter(b, a)
			}
			return n.grep(a, function(a) {
					return n.inArray(a, b) > -1 !== c
			})
	}
	n.filter = function(a, b, c) {
			var d = b[0];
			return c && (a = ":not(" + a + ")"),
			1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
					return 1 === a.nodeType
			}))
	}
	,
	n.fn.extend({
			find: function(a) {
					var b, c = [], d = this, e = d.length;
					if ("string" != typeof a)
							return this.pushStack(n(a).filter(function() {
									for (b = 0; e > b; b++)
											if (n.contains(d[b], this))
													return !0
							}));
					for (b = 0; e > b; b++)
							n.find(a, d[b], c);
					return c = this.pushStack(e > 1 ? n.unique(c) : c),
					c.selector = this.selector ? this.selector + " " + a : a,
					c
			},
			filter: function(a) {
					return this.pushStack(z(this, a || [], !1))
			},
			not: function(a) {
					return this.pushStack(z(this, a || [], !0))
			},
			is: function(a) {
					return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
			}
	});
	var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
			var e, f;
			if (!a)
					return this;
			if (c = c || A,
			"string" == typeof a) {
					if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a),
					!e || !e[1] && b)
							return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
					if (e[1]) {
							if (b = b instanceof n ? b[0] : b,
							n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
							x.test(e[1]) && n.isPlainObject(b))
									for (e in b)
											n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
							return this
					}
					if (f = d.getElementById(e[2]),
					f && f.parentNode) {
							if (f.id !== e[2])
									return A.find(a);
							this.length = 1,
							this[0] = f
					}
					return this.context = d,
					this.selector = a,
					this
			}
			return a.nodeType ? (this.context = this[0] = a,
			this.length = 1,
			this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
			this.context = a.context),
			n.makeArray(a, this))
	}
	;
	C.prototype = n.fn,
	A = n(d);
	var D = /^(?:parents|prev(?:Until|All))/
		, E = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
	};
	n.fn.extend({
			has: function(a) {
					var b, c = n(a, this), d = c.length;
					return this.filter(function() {
							for (b = 0; d > b; b++)
									if (n.contains(this, c[b]))
											return !0
					})
			},
			closest: function(a, b) {
					for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
							for (c = this[d]; c && c !== b; c = c.parentNode)
									if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
											f.push(c);
											break
									}
					return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
			},
			index: function(a) {
					return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(a, b) {
					return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
			},
			addBack: function(a) {
					return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
			}
	});
	function F(a, b) {
			do
					a = a[b];
			while (a && 1 !== a.nodeType);
			return a
	}
	n.each({
			parent: function(a) {
					var b = a.parentNode;
					return b && 11 !== b.nodeType ? b : null
			},
			parents: function(a) {
					return u(a, "parentNode")
			},
			parentsUntil: function(a, b, c) {
					return u(a, "parentNode", c)
			},
			next: function(a) {
					return F(a, "nextSibling")
			},
			prev: function(a) {
					return F(a, "previousSibling")
			},
			nextAll: function(a) {
					return u(a, "nextSibling")
			},
			prevAll: function(a) {
					return u(a, "previousSibling")
			},
			nextUntil: function(a, b, c) {
					return u(a, "nextSibling", c)
			},
			prevUntil: function(a, b, c) {
					return u(a, "previousSibling", c)
			},
			siblings: function(a) {
					return v((a.parentNode || {}).firstChild, a)
			},
			children: function(a) {
					return v(a.firstChild)
			},
			contents: function(a) {
					return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
			}
	}, function(a, b) {
			n.fn[a] = function(c, d) {
					var e = n.map(this, b, c);
					return "Until" !== a.slice(-5) && (d = c),
					d && "string" == typeof d && (e = n.filter(d, e)),
					this.length > 1 && (E[a] || (e = n.uniqueSort(e)),
					D.test(a) && (e = e.reverse())),
					this.pushStack(e)
			}
	});
	var G = /\S+/g;
	function H(a) {
			var b = {};
			return n.each(a.match(G) || [], function(a, c) {
					b[c] = !0
			}),
			b
	}
	n.Callbacks = function(a) {
			a = "string" == typeof a ? H(a) : n.extend({}, a);
			var b, c, d, e, f = [], g = [], h = -1, i = function() {
					for (e = a.once,
					d = b = !0; g.length; h = -1) {
							c = g.shift();
							while (++h < f.length)
									f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
									c = !1)
					}
					a.memory || (c = !1),
					b = !1,
					e && (f = c ? [] : "")
			}, j = {
					add: function() {
							return f && (c && !b && (h = f.length - 1,
							g.push(c)),
							function d(b) {
									n.each(b, function(b, c) {
											n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
									})
							}(arguments),
							c && !b && i()),
							this
					},
					remove: function() {
							return n.each(arguments, function(a, b) {
									var c;
									while ((c = n.inArray(b, f, c)) > -1)
											f.splice(c, 1),
											h >= c && h--
							}),
							this
					},
					has: function(a) {
							return a ? n.inArray(a, f) > -1 : f.length > 0
					},
					empty: function() {
							return f && (f = []),
							this
					},
					disable: function() {
							return e = g = [],
							f = c = "",
							this
					},
					disabled: function() {
							return !f
					},
					lock: function() {
							return e = !0,
							c || j.disable(),
							this
					},
					locked: function() {
							return !!e
					},
					fireWith: function(a, c) {
							return e || (c = c || [],
							c = [a, c.slice ? c.slice() : c],
							g.push(c),
							b || i()),
							this
					},
					fire: function() {
							return j.fireWith(this, arguments),
							this
					},
					fired: function() {
							return !!d
					}
			};
			return j
	}
	,
	n.extend({
			Deferred: function(a) {
					var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
						, c = "pending"
						, d = {
							state: function() {
									return c
							},
							always: function() {
									return e.done(arguments).fail(arguments),
									this
							},
							then: function() {
									var a = arguments;
									return n.Deferred(function(c) {
											n.each(b, function(b, f) {
													var g = n.isFunction(a[b]) && a[b];
													e[f[1]](function() {
															var a = g && g.apply(this, arguments);
															a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
													})
											}),
											a = null
									}).promise()
							},
							promise: function(a) {
									return null != a ? n.extend(a, d) : d
							}
					}
						, e = {};
					return d.pipe = d.then,
					n.each(b, function(a, f) {
							var g = f[2]
								, h = f[3];
							d[f[1]] = g.add,
							h && g.add(function() {
									c = h
							}, b[1 ^ a][2].disable, b[2][2].lock),
							e[f[0]] = function() {
									return e[f[0] + "With"](this === e ? d : this, arguments),
									this
							}
							,
							e[f[0] + "With"] = g.fireWith
					}),
					d.promise(e),
					a && a.call(e, e),
					e
			},
			when: function(a) {
					var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
							return function(d) {
									b[a] = this,
									c[a] = arguments.length > 1 ? e.call(arguments) : d,
									c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
							}
					}, i, j, k;
					if (d > 1)
							for (i = new Array(d),
							j = new Array(d),
							k = new Array(d); d > b; b++)
									c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
					return f || g.resolveWith(k, c),
					g.promise()
			}
	});
	var I;
	n.fn.ready = function(a) {
			return n.ready.promise().done(a),
			this
	}
	,
	n.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(a) {
					a ? n.readyWait++ : n.ready(!0)
			},
			ready: function(a) {
					(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
					a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
					n.fn.triggerHandler && (n(d).triggerHandler("ready"),
					n(d).off("ready"))))
			}
	});
	function J() {
			d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K),
			a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K),
			a.detachEvent("onload", K))
	}
	function K() {
			(d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(),
			n.ready())
	}
	n.ready.promise = function(b) {
			if (!I)
					if (I = n.Deferred(),
					"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
							a.setTimeout(n.ready);
					else if (d.addEventListener)
							d.addEventListener("DOMContentLoaded", K),
							a.addEventListener("load", K);
					else {
							d.attachEvent("onreadystatechange", K),
							a.attachEvent("onload", K);
							var c = !1;
							try {
									c = null == a.frameElement && d.documentElement
							} catch (e) {}
							c && c.doScroll && !function f() {
									if (!n.isReady) {
											try {
													c.doScroll("left")
											} catch (b) {
													return a.setTimeout(f, 50)
											}
											J(),
											n.ready()
									}
							}()
					}
			return I.promise(b)
	}
	,
	n.ready.promise();
	var L;
	for (L in n(l))
			break;
	l.ownFirst = "0" === L,
	l.inlineBlockNeedsLayout = !1,
	n(function() {
			var a, b, c, e;
			c = d.getElementsByTagName("body")[0],
			c && c.style && (b = d.createElement("div"),
			e = d.createElement("div"),
			e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
			c.appendChild(e).appendChild(b),
			"undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
			l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
			a && (c.style.zoom = 1)),
			c.removeChild(e))
	}),
	function() {
			var a = d.createElement("div");
			l.deleteExpando = !0;
			try {
					delete a.test
			} catch (b) {
					l.deleteExpando = !1
			}
			a = null
	}();
	var M = function(a) {
			var b = n.noData[(a.nodeName + " ").toLowerCase()]
				, c = +a.nodeType || 1;
			return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
	}
		, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
		, O = /([A-Z])/g;
	function P(a, b, c) {
			if (void 0 === c && 1 === a.nodeType) {
					var d = "data-" + b.replace(O, "-$1").toLowerCase();
					if (c = a.getAttribute(d),
					"string" == typeof c) {
							try {
									c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
							} catch (e) {}
							n.data(a, b, c)
					} else
							c = void 0;
			}
			return c
	}
	function Q(a) {
			var b;
			for (b in a)
					if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
							return !1;
			return !0
	}
	function R(a, b, d, e) {
			if (M(a)) {
					var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
					if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
							return k || (k = i ? a[h] = c.pop() || n.guid++ : h),
							j[k] || (j[k] = i ? {} : {
									toJSON: n.noop
							}),
							"object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
							g = j[k],
							e || (g.data || (g.data = {}),
							g = g.data),
							void 0 !== d && (g[n.camelCase(b)] = d),
							"string" == typeof b ? (f = g[b],
							null == f && (f = g[n.camelCase(b)])) : f = g,
							f
			}
	}
	function S(a, b, c) {
			if (M(a)) {
					var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
					if (g[h]) {
							if (b && (d = c ? g[h] : g[h].data)) {
									n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b),
									b = b in d ? [b] : b.split(" ")),
									e = b.length;
									while (e--)
											delete d[b[e]];
									if (c ? !Q(d) : !n.isEmptyObject(d))
											return
							}
							(c || (delete g[h].data,
							Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
					}
			}
	}
	n.extend({
			cache: {},
			noData: {
					"applet ": !0,
					"embed ": !0,
					"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function(a) {
					return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
					!!a && !Q(a)
			},
			data: function(a, b, c) {
					return R(a, b, c)
			},
			removeData: function(a, b) {
					return S(a, b)
			},
			_data: function(a, b, c) {
					return R(a, b, c, !0)
			},
			_removeData: function(a, b) {
					return S(a, b, !0)
			}
	}),
	n.fn.extend({
			data: function(a, b) {
					var c, d, e, f = this[0], g = f && f.attributes;
					if (void 0 === a) {
							if (this.length && (e = n.data(f),
							1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
									c = g.length;
									while (c--)
											g[c] && (d = g[c].name,
											0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
											P(f, d, e[d])));
									n._data(f, "parsedAttrs", !0)
							}
							return e
					}
					return "object" == typeof a ? this.each(function() {
							n.data(this, a)
					}) : arguments.length > 1 ? this.each(function() {
							n.data(this, a, b)
					}) : f ? P(f, a, n.data(f, a)) : void 0
			},
			removeData: function(a) {
					return this.each(function() {
							n.removeData(this, a)
					})
			}
	}),
	n.extend({
			queue: function(a, b, c) {
					var d;
					return a ? (b = (b || "fx") + "queue",
					d = n._data(a, b),
					c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)),
					d || []) : void 0
			},
			dequeue: function(a, b) {
					b = b || "fx";
					var c = n.queue(a, b)
						, d = c.length
						, e = c.shift()
						, f = n._queueHooks(a, b)
						, g = function() {
							n.dequeue(a, b)
					};
					"inprogress" === e && (e = c.shift(),
					d--),
					e && ("fx" === b && c.unshift("inprogress"),
					delete f.stop,
					e.call(a, g, f)),
					!d && f && f.empty.fire()
			},
			_queueHooks: function(a, b) {
					var c = b + "queueHooks";
					return n._data(a, c) || n._data(a, c, {
							empty: n.Callbacks("once memory").add(function() {
									n._removeData(a, b + "queue"),
									n._removeData(a, c)
							})
					})
			}
	}),
	n.fn.extend({
			queue: function(a, b) {
					var c = 2;
					return "string" != typeof a && (b = a,
					a = "fx",
					c--),
					arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
							var c = n.queue(this, a, b);
							n._queueHooks(this, a),
							"fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
					})
			},
			dequeue: function(a) {
					return this.each(function() {
							n.dequeue(this, a)
					})
			},
			clearQueue: function(a) {
					return this.queue(a || "fx", [])
			},
			promise: function(a, b) {
					var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
							--d || e.resolveWith(f, [f])
					};
					"string" != typeof a && (b = a,
					a = void 0),
					a = a || "fx";
					while (g--)
							c = n._data(f[g], a + "queueHooks"),
							c && c.empty && (d++,
							c.empty.add(h));
					return h(),
					e.promise(b)
			}
	}),
	function() {
			var a;
			l.shrinkWrapBlocks = function() {
					if (null != a)
							return a;
					a = !1;
					var b, c, e;
					return c = d.getElementsByTagName("body")[0],
					c && c.style ? (b = d.createElement("div"),
					e = d.createElement("div"),
					e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
					c.appendChild(e).appendChild(b),
					"undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
					b.appendChild(d.createElement("div")).style.width = "5px",
					a = 3 !== b.offsetWidth),
					c.removeChild(e),
					a) : void 0
			}
	}();
	var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
		, U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$","i")
		, V = ["Top", "Right", "Bottom", "Left"]
		, W = function(a, b) {
			return a = b || a,
			"none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
	};
	function X(a, b, c, d) {
			var e, f = 1, g = 20, h = d ? function() {
					return d.cur()
			}
			: function() {
					return n.css(a, b, "")
			}
			, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
			if (k && k[3] !== j) {
					j = j || k[3],
					c = c || [],
					k = +i || 1;
					do
							f = f || ".5",
							k /= f,
							n.style(a, b, k + j);
					while (f !== (f = h() / i) && 1 !== f && --g)
			}
			return c && (k = +k || +i || 0,
			e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
			d && (d.unit = j,
			d.start = k,
			d.end = e)),
			e
	}
	var Y = function(a, b, c, d, e, f, g) {
			var h = 0
				, i = a.length
				, j = null == c;
			if ("object" === n.type(c)) {
					e = !0;
					for (h in c)
							Y(a, b, h, c[h], !0, f, g)
			} else if (void 0 !== d && (e = !0,
			n.isFunction(d) || (g = !0),
			j && (g ? (b.call(a, d),
			b = null) : (j = b,
			b = function(a, b, c) {
					return j.call(n(a), c)
			}
			)),
			b))
					for (; i > h; h++)
							b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
			return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	}
		, Z = /^(?:checkbox|radio)$/i
		, $ = /<([\w:-]+)/
		, _ = /^$|\/(?:java|ecma)script/i
		, aa = /^\s+/
		, ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	function ca(a) {
			var b = ba.split("|")
				, c = a.createDocumentFragment();
			if (c.createElement)
					while (b.length)
							c.createElement(b.pop());
			return c
	}
	!function() {
			var a = d.createElement("div")
				, b = d.createDocumentFragment()
				, c = d.createElement("input");
			a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
			l.leadingWhitespace = 3 === a.firstChild.nodeType,
			l.tbody = !a.getElementsByTagName("tbody").length,
			l.htmlSerialize = !!a.getElementsByTagName("link").length,
			l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
			c.type = "checkbox",
			c.checked = !0,
			b.appendChild(c),
			l.appendChecked = c.checked,
			a.innerHTML = "<textarea>x</textarea>",
			l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
			b.appendChild(a),
			c = d.createElement("input"),
			c.setAttribute("type", "radio"),
			c.setAttribute("checked", "checked"),
			c.setAttribute("name", "t"),
			a.appendChild(c),
			l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
			l.noCloneEvent = !!a.addEventListener,
			a[n.expando] = 1,
			l.attributes = !a.getAttribute(n.expando)
	}();
	var da = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};
	da.optgroup = da.option,
	da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
	da.th = da.td;
	function ea(a, b) {
			var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
			if (!f)
					for (f = [],
					c = a.childNodes || a; null != (d = c[e]); e++)
							!b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
			return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
	}
	function fa(a, b) {
			for (var c, d = 0; null != (c = a[d]); d++)
					n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
	}
	var ga = /<|&#?\w+;/
		, ha = /<tbody/i;
	function ia(a) {
			Z.test(a.type) && (a.defaultChecked = a.checked)
	}
	function ja(a, b, c, d, e) {
			for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
					if (g = a[r],
					g || 0 === g)
							if ("object" === n.type(g))
									n.merge(q, g.nodeType ? [g] : g);
							else if (ga.test(g)) {
									i = i || p.appendChild(b.createElement("div")),
									j = ($.exec(g) || ["", ""])[1].toLowerCase(),
									m = da[j] || da._default,
									i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
									f = m[0];
									while (f--)
											i = i.lastChild;
									if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])),
									!l.tbody) {
											g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild,
											f = g && g.childNodes.length;
											while (f--)
													n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
									}
									n.merge(q, i.childNodes),
									i.textContent = "";
									while (i.firstChild)
											i.removeChild(i.firstChild);
									i = p.lastChild
							} else
									q.push(b.createTextNode(g));
			i && p.removeChild(i),
			l.appendChecked || n.grep(ea(q, "input"), ia),
			r = 0;
			while (g = q[r++])
					if (d && n.inArray(g, d) > -1)
							e && e.push(g);
					else if (h = n.contains(g.ownerDocument, g),
					i = ea(p.appendChild(g), "script"),
					h && fa(i),
					c) {
							f = 0;
							while (g = i[f++])
									_.test(g.type || "") && c.push(g)
					}
			return i = null,
			p
	}
	var ka = /^(?:input|select|textarea)$/i
		, la = /^key/
		, ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
		, na = /^(?:focusinfocus|focusoutblur)$/
		, oa = /^([^.]*)(?:\.(.+)|)/;
	function pa() {
			return !0
	}
	function qa() {
			return !1
	}
	function ra() {
			try {
					return d.activeElement
			} catch (a) {}
	}
	function sa(a, b, c, d, e, f) {
			var g, h;
			if ("object" == typeof b) {
					"string" != typeof c && (d = d || c,
					c = void 0);
					for (h in b)
							sa(a, h, c, d, b[h], f);
					return a
			}
			if (null == d && null == e ? (e = c,
			d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
			d = void 0) : (e = d,
			d = c,
			c = void 0)),
			e === !1)
					e = qa;
			else if (!e)
					return a;
			return 1 === f && (g = e,
			e = function(a) {
					return n().off(a),
					g.apply(this, arguments)
			}
			,
			e.guid = g.guid || (g.guid = n.guid++)),
			a.each(function() {
					n.event.add(this, b, e, d, c)
			})
	}
	n.event = {
			global: {},
			add: function(a, b, c, d, e) {
					var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
					if (r) {
							c.handler && (i = c,
							c = i.handler,
							e = i.selector),
							c.guid || (c.guid = n.guid++),
							(g = r.events) || (g = r.events = {}),
							(k = r.handle) || (k = r.handle = function(a) {
									return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
							}
							,
							k.elem = a),
							b = (b || "").match(G) || [""],
							h = b.length;
							while (h--)
									f = oa.exec(b[h]) || [],
									o = q = f[1],
									p = (f[2] || "").split(".").sort(),
									o && (j = n.event.special[o] || {},
									o = (e ? j.delegateType : j.bindType) || o,
									j = n.event.special[o] || {},
									l = n.extend({
											type: o,
											origType: q,
											data: d,
											handler: c,
											guid: c.guid,
											selector: e,
											needsContext: e && n.expr.match.needsContext.test(e),
											namespace: p.join(".")
									}, i),
									(m = g[o]) || (m = g[o] = [],
									m.delegateCount = 0,
									j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
									j.add && (j.add.call(a, l),
									l.handler.guid || (l.handler.guid = c.guid)),
									e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
									n.event.global[o] = !0);
							a = null
					}
			},
			remove: function(a, b, c, d, e) {
					var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
					if (r && (k = r.events)) {
							b = (b || "").match(G) || [""],
							j = b.length;
							while (j--)
									if (h = oa.exec(b[j]) || [],
									o = q = h[1],
									p = (h[2] || "").split(".").sort(),
									o) {
											l = n.event.special[o] || {},
											o = (d ? l.delegateType : l.bindType) || o,
											m = k[o] || [],
											h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
											i = f = m.length;
											while (f--)
													g = m[f],
													!e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
													g.selector && m.delegateCount--,
													l.remove && l.remove.call(a, g));
											i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
											delete k[o])
									} else
											for (o in k)
													n.event.remove(a, o + b[j], c, d, !0);
							n.isEmptyObject(k) && (delete r.handle,
							n._removeData(a, "events"))
					}
			},
			trigger: function(b, c, e, f) {
					var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
					if (i = m = e = e || d,
					3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
					q = r.shift(),
					r.sort()),
					h = q.indexOf(":") < 0 && "on" + q,
					b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
					b.isTrigger = f ? 2 : 3,
					b.namespace = r.join("."),
					b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
					b.result = void 0,
					b.target || (b.target = e),
					c = null == c ? [b] : n.makeArray(c, [b]),
					l = n.event.special[q] || {},
					f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
							if (!f && !l.noBubble && !n.isWindow(e)) {
									for (j = l.delegateType || q,
									na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
											p.push(i),
											m = i;
									m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
							}
							o = 0;
							while ((i = p[o++]) && !b.isPropagationStopped())
									b.type = o > 1 ? j : l.bindType || q,
									g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
									g && g.apply(i, c),
									g = h && i[h],
									g && g.apply && M(i) && (b.result = g.apply(i, c),
									b.result === !1 && b.preventDefault());
							if (b.type = q,
							!f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
									m = e[h],
									m && (e[h] = null),
									n.event.triggered = q;
									try {
											e[q]()
									} catch (s) {}
									n.event.triggered = void 0,
									m && (e[h] = m)
							}
							return b.result
					}
			},
			dispatch: function(a) {
					a = n.event.fix(a);
					var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
					if (i[0] = a,
					a.delegateTarget = this,
					!k.preDispatch || k.preDispatch.call(this, a) !== !1) {
							h = n.event.handlers.call(this, a, j),
							b = 0;
							while ((f = h[b++]) && !a.isPropagationStopped()) {
									a.currentTarget = f.elem,
									c = 0;
									while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
											a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
											a.data = g.data,
											d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
											void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
											a.stopPropagation()))
							}
							return k.postDispatch && k.postDispatch.call(this, a),
							a.result
					}
			},
			handlers: function(a, b) {
					var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
					if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
							for (; i != this; i = i.parentNode || this)
									if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
											for (d = [],
											c = 0; h > c; c++)
													f = b[c],
													e = f.selector + " ",
													void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
													d[e] && d.push(f);
											d.length && g.push({
													elem: i,
													handlers: d
											})
									}
					return h < b.length && g.push({
							elem: this,
							handlers: b.slice(h)
					}),
					g
			},
			fix: function(a) {
					if (a[n.expando])
							return a;
					var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
					h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
					e = h.props ? this.props.concat(h.props) : this.props,
					a = new n.Event(g),
					b = e.length;
					while (b--)
							c = e[b],
							a[c] = g[c];
					return a.target || (a.target = g.srcElement || d),
					3 === a.target.nodeType && (a.target = a.target.parentNode),
					a.metaKey = !!a.metaKey,
					h.filter ? h.filter(a, g) : a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(a, b) {
							return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
							a
					}
			},
			mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(a, b) {
							var c, e, f, g = b.button, h = b.fromElement;
							return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d,
							f = e.documentElement,
							c = e.body,
							a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0),
							a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
							!a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h),
							a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
							a
					}
			},
			special: {
					load: {
							noBubble: !0
					},
					focus: {
							trigger: function() {
									if (this !== ra() && this.focus)
											try {
													return this.focus(),
													!1
											} catch (a) {}
							},
							delegateType: "focusin"
					},
					blur: {
							trigger: function() {
									return this === ra() && this.blur ? (this.blur(),
									!1) : void 0
							},
							delegateType: "focusout"
					},
					click: {
							trigger: function() {
									return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
									!1) : void 0
							},
							_default: function(a) {
									return n.nodeName(a.target, "a")
							}
					},
					beforeunload: {
							postDispatch: function(a) {
									void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
							}
					}
			},
			simulate: function(a, b, c) {
					var d = n.extend(new n.Event, c, {
							type: a,
							isSimulated: !0
					});
					n.event.trigger(d, null, b),
					d.isDefaultPrevented() && c.preventDefault()
			}
	},
	n.removeEvent = d.removeEventListener ? function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c)
	}
	: function(a, b, c) {
			var d = "on" + b;
			a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
			a.detachEvent(d, c))
	}
	,
	n.Event = function(a, b) {
			return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
			this.type = a.type,
			this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a,
			b && n.extend(this, b),
			this.timeStamp = a && a.timeStamp || n.now(),
			void (this[n.expando] = !0)) : new n.Event(a,b)
	}
	,
	n.Event.prototype = {
			constructor: n.Event,
			isDefaultPrevented: qa,
			isPropagationStopped: qa,
			isImmediatePropagationStopped: qa,
			preventDefault: function() {
					var a = this.originalEvent;
					this.isDefaultPrevented = pa,
					a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
			},
			stopPropagation: function() {
					var a = this.originalEvent;
					this.isPropagationStopped = pa,
					a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
					a.cancelBubble = !0)
			},
			stopImmediatePropagation: function() {
					var a = this.originalEvent;
					this.isImmediatePropagationStopped = pa,
					a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
					this.stopPropagation()
			}
	},
	n.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
	}, function(a, b) {
			n.event.special[a] = {
					delegateType: b,
					bindType: b,
					handle: function(a) {
							var c, d = this, e = a.relatedTarget, f = a.handleObj;
							return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
							c = f.handler.apply(this, arguments),
							a.type = b),
							c
					}
			}
	}),
	l.submit || (n.event.special.submit = {
			setup: function() {
					return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
							var b = a.target
								, c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
							c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
									a._submitBubble = !0
							}),
							n._data(c, "submit", !0))
					})
			},
			postDispatch: function(a) {
					a._submitBubble && (delete a._submitBubble,
					this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
			},
			teardown: function() {
					return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
			}
	}),
	l.change || (n.event.special.change = {
			setup: function() {
					return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
							"checked" === a.originalEvent.propertyName && (this._justChanged = !0)
					}),
					n.event.add(this, "click._change", function(a) {
							this._justChanged && !a.isTrigger && (this._justChanged = !1),
							n.event.simulate("change", this, a)
					})),
					!1) : void n.event.add(this, "beforeactivate._change", function(a) {
							var b = a.target;
							ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
									!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
							}),
							n._data(b, "change", !0))
					})
			},
			handle: function(a) {
					var b = a.target;
					return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function() {
					return n.event.remove(this, "._change"),
					!ka.test(this.nodeName)
			}
	}),
	l.focusin || n.each({
			focus: "focusin",
			blur: "focusout"
	}, function(a, b) {
			var c = function(a) {
					n.event.simulate(b, a.target, n.event.fix(a))
			};
			n.event.special[b] = {
					setup: function() {
							var d = this.ownerDocument || this
								, e = n._data(d, b);
							e || d.addEventListener(a, c, !0),
							n._data(d, b, (e || 0) + 1)
					},
					teardown: function() {
							var d = this.ownerDocument || this
								, e = n._data(d, b) - 1;
							e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0),
							n._removeData(d, b))
					}
			}
	}),
	n.fn.extend({
			on: function(a, b, c, d) {
					return sa(this, a, b, c, d)
			},
			one: function(a, b, c, d) {
					return sa(this, a, b, c, d, 1)
			},
			off: function(a, b, c) {
					var d, e;
					if (a && a.preventDefault && a.handleObj)
							return d = a.handleObj,
							n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
							this;
					if ("object" == typeof a) {
							for (e in a)
									this.off(e, b, a[e]);
							return this
					}
					return b !== !1 && "function" != typeof b || (c = b,
					b = void 0),
					c === !1 && (c = qa),
					this.each(function() {
							n.event.remove(this, a, c, b)
					})
			},
			trigger: function(a, b) {
					return this.each(function() {
							n.event.trigger(a, b, this)
					})
			},
			triggerHandler: function(a, b) {
					var c = this[0];
					return c ? n.event.trigger(a, b, c, !0) : void 0
			}
	});
	var ta = / jQuery\d+="(?:null|\d+)"/g
		, ua = new RegExp("<(?:" + ba + ")[\\s/>]","i")
		, va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
		, wa = /<script|<style|<link/i
		, xa = /checked\s*(?:[^=]|=\s*.checked.)/i
		, ya = /^true\/(.*)/
		, za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
		, Aa = ca(d)
		, Ba = Aa.appendChild(d.createElement("div"));
	function Ca(a, b) {
			return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}
	function Da(a) {
			return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
			a
	}
	function Ea(a) {
			var b = ya.exec(a.type);
			return b ? a.type = b[1] : a.removeAttribute("type"),
			a
	}
	function Fa(a, b) {
			if (1 === b.nodeType && n.hasData(a)) {
					var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
					if (h) {
							delete g.handle,
							g.events = {};
							for (c in h)
									for (d = 0,
									e = h[c].length; e > d; d++)
											n.event.add(b, c, h[c][d])
					}
					g.data && (g.data = n.extend({}, g.data))
			}
	}
	function Ga(a, b) {
			var c, d, e;
			if (1 === b.nodeType) {
					if (c = b.nodeName.toLowerCase(),
					!l.noCloneEvent && b[n.expando]) {
							e = n._data(b);
							for (d in e.events)
									n.removeEvent(b, d, e.handle);
							b.removeAttribute(n.expando)
					}
					"script" === c && b.text !== a.text ? (Da(b).text = a.text,
					Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
					l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
					b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
			}
	}
	function Ha(a, b, c, d) {
			b = f.apply([], b);
			var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
			if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
					return a.each(function(e) {
							var f = a.eq(e);
							r && (b[0] = q.call(this, e, f.html())),
							Ha(f, b, c, d)
					});
			if (o && (k = ja(b, a[0].ownerDocument, !1, a, d),
			e = k.firstChild,
			1 === k.childNodes.length && (k = e),
			e || d)) {
					for (i = n.map(ea(k, "script"), Da),
					h = i.length; o > m; m++)
							g = k,
							m !== p && (g = n.clone(g, !0, !0),
							h && n.merge(i, ea(g, "script"))),
							c.call(a[m], g, m);
					if (h)
							for (j = i[i.length - 1].ownerDocument,
							n.map(i, Ea),
							m = 0; h > m; m++)
									g = i[m],
									_.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
					k = e = null
			}
			return a
	}
	function Ia(a, b, c) {
			for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
					c || 1 !== d.nodeType || n.cleanData(ea(d)),
					d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
					d.parentNode.removeChild(d));
			return a
	}
	n.extend({
			htmlPrefilter: function(a) {
					return a.replace(va, "<$1></$2>")
			},
			clone: function(a, b, c) {
					var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
					if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML,
					Ba.removeChild(f = Ba.firstChild)),
					!(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
							for (d = ea(f),
							h = ea(a),
							g = 0; null != (e = h[g]); ++g)
									d[g] && Ga(e, d[g]);
					if (b)
							if (c)
									for (h = h || ea(a),
									d = d || ea(f),
									g = 0; null != (e = h[g]); g++)
											Fa(e, d[g]);
							else
									Fa(a, f);
					return d = ea(f, "script"),
					d.length > 0 && fa(d, !i && ea(a, "script")),
					d = h = e = null,
					f
			},
			cleanData: function(a, b) {
					for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
							if ((b || M(d)) && (f = d[i],
							g = f && j[f])) {
									if (g.events)
											for (e in g.events)
													m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
									j[f] && (delete j[f],
									k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i),
									c.push(f))
							}
			}
	}),
	n.fn.extend({
			domManip: Ha,
			detach: function(a) {
					return Ia(this, a, !0)
			},
			remove: function(a) {
					return Ia(this, a)
			},
			text: function(a) {
					return Y(this, function(a) {
							return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
					}, null, a, arguments.length)
			},
			append: function() {
					return Ha(this, arguments, function(a) {
							if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
									var b = Ca(this, a);
									b.appendChild(a)
							}
					})
			},
			prepend: function() {
					return Ha(this, arguments, function(a) {
							if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
									var b = Ca(this, a);
									b.insertBefore(a, b.firstChild)
							}
					})
			},
			before: function() {
					return Ha(this, arguments, function(a) {
							this.parentNode && this.parentNode.insertBefore(a, this)
					})
			},
			after: function() {
					return Ha(this, arguments, function(a) {
							this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
					})
			},
			empty: function() {
					for (var a, b = 0; null != (a = this[b]); b++) {
							1 === a.nodeType && n.cleanData(ea(a, !1));
							while (a.firstChild)
									a.removeChild(a.firstChild);
							a.options && n.nodeName(a, "select") && (a.options.length = 0)
					}
					return this
			},
			clone: function(a, b) {
					return a = null == a ? !1 : a,
					b = null == b ? a : b,
					this.map(function() {
							return n.clone(this, a, b)
					})
			},
			html: function(a) {
					return Y(this, function(a) {
							var b = this[0] || {}
								, c = 0
								, d = this.length;
							if (void 0 === a)
									return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
							if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
									a = n.htmlPrefilter(a);
									try {
											for (; d > c; c++)
													b = this[c] || {},
													1 === b.nodeType && (n.cleanData(ea(b, !1)),
													b.innerHTML = a);
											b = 0
									} catch (e) {}
							}
							b && this.empty().append(a)
					}, null, a, arguments.length)
			},
			replaceWith: function() {
					var a = [];
					return Ha(this, arguments, function(b) {
							var c = this.parentNode;
							n.inArray(this, a) < 0 && (n.cleanData(ea(this)),
							c && c.replaceChild(b, this))
					}, a)
			}
	}),
	n.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
	}, function(a, b) {
			n.fn[a] = function(a) {
					for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
							c = d === h ? this : this.clone(!0),
							n(f[d])[b](c),
							g.apply(e, c.get());
					return this.pushStack(e)
			}
	});
	var Ja, Ka = {
			HTML: "block",
			BODY: "block"
	};
	function La(a, b) {
			var c = n(b.createElement(a)).appendTo(b.body)
				, d = n.css(c[0], "display");
			return c.detach(),
			d
	}
	function Ma(a) {
			var b = d
				, c = Ka[a];
			return c || (c = La(a, b),
			"none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
			b = (Ja[0].contentWindow || Ja[0].contentDocument).document,
			b.write(),
			b.close(),
			c = La(a, b),
			Ja.detach()),
			Ka[a] = c),
			c
	}
	var Na = /^margin/
		, Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$","i")
		, Pa = function(a, b, c, d) {
			var e, f, g = {};
			for (f in b)
					g[f] = a.style[f],
					a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b)
					a.style[f] = g[f];
			return e
	}
		, Qa = d.documentElement;
	!function() {
			var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
			if (j.style) {
					j.style.cssText = "float:left;opacity:.5",
					l.opacity = "0.5" === j.style.opacity,
					l.cssFloat = !!j.style.cssFloat,
					j.style.backgroundClip = "content-box",
					j.cloneNode(!0).style.backgroundClip = "",
					l.clearCloneStyle = "content-box" === j.style.backgroundClip,
					i = d.createElement("div"),
					i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
					j.innerHTML = "",
					i.appendChild(j),
					l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
					n.extend(l, {
							reliableHiddenOffsets: function() {
									return null == b && k(),
									f
							},
							boxSizingReliable: function() {
									return null == b && k(),
									e
							},
							pixelMarginRight: function() {
									return null == b && k(),
									c
							},
							pixelPosition: function() {
									return null == b && k(),
									b
							},
							reliableMarginRight: function() {
									return null == b && k(),
									g
							},
							reliableMarginLeft: function() {
									return null == b && k(),
									h
							}
					});
					function k() {
							var k, l, m = d.documentElement;
							m.appendChild(i),
							j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
							b = e = h = !1,
							c = g = !0,
							a.getComputedStyle && (l = a.getComputedStyle(j),
							b = "1%" !== (l || {}).top,
							h = "2px" === (l || {}).marginLeft,
							e = "4px" === (l || {
									width: "4px"
							}).width,
							j.style.marginRight = "50%",
							c = "4px" === (l || {
									marginRight: "4px"
							}).marginRight,
							k = j.appendChild(d.createElement("div")),
							k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
							k.style.marginRight = k.style.width = "0",
							j.style.width = "1px",
							g = !parseFloat((a.getComputedStyle(k) || {}).marginRight),
							j.removeChild(k)),
							j.style.display = "none",
							f = 0 === j.getClientRects().length,
							f && (j.style.display = "",
							j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
							j.childNodes[0].style.borderCollapse = "separate",
							k = j.getElementsByTagName("td"),
							k[0].style.cssText = "margin:0;border:0;padding:0;display:none",
							f = 0 === k[0].offsetHeight,
							f && (k[0].style.display = "",
							k[1].style.display = "none",
							f = 0 === k[0].offsetHeight)),
							m.removeChild(i)
					}
			}
	}();
	var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ra = function(b) {
			var c = b.ownerDocument.defaultView;
			return c && c.opener || (c = a),
			c.getComputedStyle(b)
	}
	,
	Sa = function(a, b, c) {
			var d, e, f, g, h = a.style;
			return c = c || Ra(a),
			g = c ? c.getPropertyValue(b) || c[b] : void 0,
			"" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
			c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width,
			e = h.minWidth,
			f = h.maxWidth,
			h.minWidth = h.maxWidth = h.width = g,
			g = c.width,
			h.width = d,
			h.minWidth = e,
			h.maxWidth = f),
			void 0 === g ? g : g + ""
	}
	) : Qa.currentStyle && (Ra = function(a) {
			return a.currentStyle
	}
	,
	Sa = function(a, b, c) {
			var d, e, f, g, h = a.style;
			return c = c || Ra(a),
			g = c ? c[b] : void 0,
			null == g && h && h[b] && (g = h[b]),
			Oa.test(g) && !Ta.test(b) && (d = h.left,
			e = a.runtimeStyle,
			f = e && e.left,
			f && (e.left = a.currentStyle.left),
			h.left = "fontSize" === b ? "1em" : g,
			g = h.pixelLeft + "px",
			h.left = d,
			f && (e.left = f)),
			void 0 === g ? g : g + "" || "auto"
	}
	);
	function Ua(a, b) {
			return {
					get: function() {
							return a() ? void delete this.get : (this.get = b).apply(this, arguments)
					}
			}
	}
	var Va = /alpha\([^)]*\)/i
		, Wa = /opacity\s*=\s*([^)]*)/i
		, Xa = /^(none|table(?!-c[ea]).+)/
		, Ya = new RegExp("^(" + T + ")(.*)$","i")
		, Za = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
	}
		, $a = {
			letterSpacing: "0",
			fontWeight: "400"
	}
		, _a = ["Webkit", "O", "Moz", "ms"]
		, ab = d.createElement("div").style;
	function bb(a) {
			if (a in ab)
					return a;
			var b = a.charAt(0).toUpperCase() + a.slice(1)
				, c = _a.length;
			while (c--)
					if (a = _a[c] + b,
					a in ab)
							return a
	}
	function cb(a, b) {
			for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
					d = a[g],
					d.style && (f[g] = n._data(d, "olddisplay"),
					c = d.style.display,
					b ? (f[g] || "none" !== c || (d.style.display = ""),
					"" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d),
					(c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
			for (g = 0; h > g; g++)
					d = a[g],
					d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
			return a
	}
	function db(a, b, c) {
			var d = Ya.exec(b);
			return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}
	function eb(a, b, c, d, e) {
			for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
					"margin" === c && (g += n.css(a, c + V[f], !0, e)),
					d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
					"margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e),
					"padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
			return g
	}
	function fb(a, b, c) {
			var d = !0
				, e = "width" === b ? a.offsetWidth : a.offsetHeight
				, f = Ra(a)
				, g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
			if (0 >= e || null == e) {
					if (e = Sa(a, b, f),
					(0 > e || null == e) && (e = a.style[b]),
					Oa.test(e))
							return e;
					d = g && (l.boxSizingReliable() || e === a.style[b]),
					e = parseFloat(e) || 0
			}
			return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}
	n.extend({
			cssHooks: {
					opacity: {
							get: function(a, b) {
									if (b) {
											var c = Sa(a, "opacity");
											return "" === c ? "1" : c
									}
							}
					}
			},
			cssNumber: {
					animationIterationCount: !0,
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
			},
			cssProps: {
					"float": l.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function(a, b, c, d) {
					if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
							var e, f, g, h = n.camelCase(b), i = a.style;
							if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
							g = n.cssHooks[b] || n.cssHooks[h],
							void 0 === c)
									return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
							if (f = typeof c,
							"string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e),
							f = "number"),
							null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
							l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
							!(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
									try {
											i[b] = c
									} catch (j) {}
					}
			},
			css: function(a, b, c, d) {
					var e, f, g, h = n.camelCase(b);
					return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
					g = n.cssHooks[b] || n.cssHooks[h],
					g && "get"in g && (f = g.get(a, !0, c)),
					void 0 === f && (f = Sa(a, b, d)),
					"normal" === f && b in $a && (f = $a[b]),
					"" === c || c ? (e = parseFloat(f),
					c === !0 || isFinite(e) ? e || 0 : f) : f
			}
	}),
	n.each(["height", "width"], function(a, b) {
			n.cssHooks[b] = {
					get: function(a, c, d) {
							return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
									return fb(a, b, d)
							}) : fb(a, b, d) : void 0
					},
					set: function(a, c, d) {
							var e = d && Ra(a);
							return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
					}
			}
	}),
	l.opacity || (n.cssHooks.opacity = {
			get: function(a, b) {
					return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
			},
			set: function(a, b) {
					var c = a.style
						, d = a.currentStyle
						, e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
						, f = d && d.filter || c.filter || "";
					c.zoom = 1,
					(b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"),
					"" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
			}
	}),
	n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
			return b ? Pa(a, {
					display: "inline-block"
			}, Sa, [a, "marginRight"]) : void 0
	}),
	n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
			return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
					marginLeft: 0
			}, function() {
					return a.getBoundingClientRect().left
			}) : 0)) + "px" : void 0
	}),
	n.each({
			margin: "",
			padding: "",
			border: "Width"
	}, function(a, b) {
			n.cssHooks[a + b] = {
					expand: function(c) {
							for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
									e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
							return e
					}
			},
			Na.test(a) || (n.cssHooks[a + b].set = db)
	}),
	n.fn.extend({
			css: function(a, b) {
					return Y(this, function(a, b, c) {
							var d, e, f = {}, g = 0;
							if (n.isArray(b)) {
									for (d = Ra(a),
									e = b.length; e > g; g++)
											f[b[g]] = n.css(a, b[g], !1, d);
									return f
							}
							return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
					}, a, b, arguments.length > 1)
			},
			show: function() {
					return cb(this, !0)
			},
			hide: function() {
					return cb(this)
			},
			toggle: function(a) {
					return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
							W(this) ? n(this).show() : n(this).hide()
					})
			}
	});
	function gb(a, b, c, d, e) {
			return new gb.prototype.init(a,b,c,d,e)
	}
	n.Tween = gb,
	gb.prototype = {
			constructor: gb,
			init: function(a, b, c, d, e, f) {
					this.elem = a,
					this.prop = c,
					this.easing = e || n.easing._default,
					this.options = b,
					this.start = this.now = this.cur(),
					this.end = d,
					this.unit = f || (n.cssNumber[c] ? "" : "px")
			},
			cur: function() {
					var a = gb.propHooks[this.prop];
					return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
			},
			run: function(a) {
					var b, c = gb.propHooks[this.prop];
					return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
					this.now = (this.end - this.start) * b + this.start,
					this.options.step && this.options.step.call(this.elem, this.now, this),
					c && c.set ? c.set(this) : gb.propHooks._default.set(this),
					this
			}
	},
	gb.prototype.init.prototype = gb.prototype,
	gb.propHooks = {
			_default: {
					get: function(a) {
							var b;
							return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
							b && "auto" !== b ? b : 0)
					},
					set: function(a) {
							n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
					}
			}
	},
	gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
			set: function(a) {
					a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
			}
	},
	n.easing = {
			linear: function(a) {
					return a
			},
			swing: function(a) {
					return .5 - Math.cos(a * Math.PI) / 2
			},
			_default: "swing"
	},
	n.fx = gb.prototype.init,
	n.fx.step = {};
	var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
	function lb() {
			return a.setTimeout(function() {
					hb = void 0
			}),
			hb = n.now()
	}
	function mb(a, b) {
			var c, d = {
					height: a
			}, e = 0;
			for (b = b ? 1 : 0; 4 > e; e += 2 - b)
					c = V[e],
					d["margin" + c] = d["padding" + c] = a;
			return b && (d.opacity = d.width = a),
			d
	}
	function nb(a, b, c) {
			for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
					if (d = e[f].call(c, b, a))
							return d
	}
	function ob(a, b, c) {
			var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
			c.queue || (h = n._queueHooks(a, "fx"),
			null == h.unqueued && (h.unqueued = 0,
			i = h.empty.fire,
			h.empty.fire = function() {
					h.unqueued || i()
			}
			),
			h.unqueued++,
			m.always(function() {
					m.always(function() {
							h.unqueued--,
							n.queue(a, "fx").length || h.empty.fire()
					})
			})),
			1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
			j = n.css(a, "display"),
			k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
			"inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
			c.overflow && (p.overflow = "hidden",
			l.shrinkWrapBlocks() || m.always(function() {
					p.overflow = c.overflow[0],
					p.overflowX = c.overflow[1],
					p.overflowY = c.overflow[2]
			}));
			for (d in b)
					if (e = b[d],
					jb.exec(e)) {
							if (delete b[d],
							f = f || "toggle" === e,
							e === (q ? "hide" : "show")) {
									if ("show" !== e || !r || void 0 === r[d])
											continue;
									q = !0
							}
							o[d] = r && r[d] || n.style(a, d)
					} else
							j = void 0;
			if (n.isEmptyObject(o))
					"inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
			else {
					r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
					f && (r.hidden = !q),
					q ? n(a).show() : m.done(function() {
							n(a).hide()
					}),
					m.done(function() {
							var b;
							n._removeData(a, "fxshow");
							for (b in o)
									n.style(a, b, o[b])
					});
					for (d in o)
							g = nb(q ? r[d] : 0, d, m),
							d in r || (r[d] = g.start,
							q && (g.end = g.start,
							g.start = "width" === d || "height" === d ? 1 : 0))
			}
	}
	function pb(a, b) {
			var c, d, e, f, g;
			for (c in a)
					if (d = n.camelCase(c),
					e = b[d],
					f = a[c],
					n.isArray(f) && (e = f[1],
					f = a[c] = f[0]),
					c !== d && (a[d] = f,
					delete a[c]),
					g = n.cssHooks[d],
					g && "expand"in g) {
							f = g.expand(f),
							delete a[d];
							for (c in f)
									c in a || (a[c] = f[c],
									b[c] = e)
					} else
							b[d] = e
	}
	function qb(a, b, c) {
			var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
					delete i.elem
			}), i = function() {
					if (e)
							return !1;
					for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
							j.tweens[g].run(f);
					return h.notifyWith(a, [j, f, c]),
					1 > f && i ? c : (h.resolveWith(a, [j]),
					!1)
			}, j = h.promise({
					elem: a,
					props: n.extend({}, b),
					opts: n.extend(!0, {
							specialEasing: {},
							easing: n.easing._default
					}, c),
					originalProperties: b,
					originalOptions: c,
					startTime: hb || lb(),
					duration: c.duration,
					tweens: [],
					createTween: function(b, c) {
							var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
							return j.tweens.push(d),
							d
					},
					stop: function(b) {
							var c = 0
								, d = b ? j.tweens.length : 0;
							if (e)
									return this;
							for (e = !0; d > c; c++)
									j.tweens[c].run(1);
							return b ? (h.notifyWith(a, [j, 1, 0]),
							h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
							this
					}
			}), k = j.props;
			for (pb(k, j.opts.specialEasing); g > f; f++)
					if (d = qb.prefilters[f].call(j, a, k, j.opts))
							return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
							d;
			return n.map(k, nb, j),
			n.isFunction(j.opts.start) && j.opts.start.call(a, j),
			n.fx.timer(n.extend(i, {
					elem: a,
					anim: j,
					queue: j.opts.queue
			})),
			j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(qb, {
			tweeners: {
					"*": [function(a, b) {
							var c = this.createTween(a, b);
							return X(c.elem, a, U.exec(b), c),
							c
					}
					]
			},
			tweener: function(a, b) {
					n.isFunction(a) ? (b = a,
					a = ["*"]) : a = a.match(G);
					for (var c, d = 0, e = a.length; e > d; d++)
							c = a[d],
							qb.tweeners[c] = qb.tweeners[c] || [],
							qb.tweeners[c].unshift(b)
			},
			prefilters: [ob],
			prefilter: function(a, b) {
					b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
			}
	}),
	n.speed = function(a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
					complete: c || !c && b || n.isFunction(a) && a,
					duration: a,
					easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
			null != d.queue && d.queue !== !0 || (d.queue = "fx"),
			d.old = d.complete,
			d.complete = function() {
					n.isFunction(d.old) && d.old.call(this),
					d.queue && n.dequeue(this, d.queue)
			}
			,
			d
	}
	,
	n.fn.extend({
			fadeTo: function(a, b, c, d) {
					return this.filter(W).css("opacity", 0).show().end().animate({
							opacity: b
					}, a, c, d)
			},
			animate: function(a, b, c, d) {
					var e = n.isEmptyObject(a)
						, f = n.speed(b, c, d)
						, g = function() {
							var b = qb(this, n.extend({}, a), f);
							(e || n._data(this, "finish")) && b.stop(!0)
					};
					return g.finish = g,
					e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function(a, b, c) {
					var d = function(a) {
							var b = a.stop;
							delete a.stop,
							b(c)
					};
					return "string" != typeof a && (c = b,
					b = a,
					a = void 0),
					b && a !== !1 && this.queue(a || "fx", []),
					this.each(function() {
							var b = !0
								, e = null != a && a + "queueHooks"
								, f = n.timers
								, g = n._data(this);
							if (e)
									g[e] && g[e].stop && d(g[e]);
							else
									for (e in g)
											g[e] && g[e].stop && kb.test(e) && d(g[e]);
							for (e = f.length; e--; )
									f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
									b = !1,
									f.splice(e, 1));
							!b && c || n.dequeue(this, a)
					})
			},
			finish: function(a) {
					return a !== !1 && (a = a || "fx"),
					this.each(function() {
							var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
							for (c.finish = !0,
							n.queue(this, a, []),
							e && e.stop && e.stop.call(this, !0),
							b = f.length; b--; )
									f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
									f.splice(b, 1));
							for (b = 0; g > b; b++)
									d[b] && d[b].finish && d[b].finish.call(this);
							delete c.finish
					})
			}
	}),
	n.each(["toggle", "show", "hide"], function(a, b) {
			var c = n.fn[b];
			n.fn[b] = function(a, d, e) {
					return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
			}
	}),
	n.each({
			slideDown: mb("show"),
			slideUp: mb("hide"),
			slideToggle: mb("toggle"),
			fadeIn: {
					opacity: "show"
			},
			fadeOut: {
					opacity: "hide"
			},
			fadeToggle: {
					opacity: "toggle"
			}
	}, function(a, b) {
			n.fn[a] = function(a, c, d) {
					return this.animate(b, a, c, d)
			}
	}),
	n.timers = [],
	n.fx.tick = function() {
			var a, b = n.timers, c = 0;
			for (hb = n.now(); c < b.length; c++)
					a = b[c],
					a() || b[c] !== a || b.splice(c--, 1);
			b.length || n.fx.stop(),
			hb = void 0
	}
	,
	n.fx.timer = function(a) {
			n.timers.push(a),
			a() ? n.fx.start() : n.timers.pop()
	}
	,
	n.fx.interval = 13,
	n.fx.start = function() {
			ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
	}
	,
	n.fx.stop = function() {
			a.clearInterval(ib),
			ib = null
	}
	,
	n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
	},
	n.fn.delay = function(b, c) {
			return b = n.fx ? n.fx.speeds[b] || b : b,
			c = c || "fx",
			this.queue(c, function(c, d) {
					var e = a.setTimeout(c, b);
					d.stop = function() {
							a.clearTimeout(e)
					}
			})
	}
	,
	function() {
			var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
			c = d.createElement("div"),
			c.setAttribute("className", "t"),
			c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
			a = c.getElementsByTagName("a")[0],
			b.setAttribute("type", "checkbox"),
			c.appendChild(b),
			a = c.getElementsByTagName("a")[0],
			a.style.cssText = "top:1px",
			l.getSetAttribute = "t" !== c.className,
			l.style = /top/.test(a.getAttribute("style")),
			l.hrefNormalized = "/a" === a.getAttribute("href"),
			l.checkOn = !!b.value,
			l.optSelected = f.selected,
			l.enctype = !!d.createElement("form").enctype,
			e.disabled = !0,
			l.optDisabled = !f.disabled,
			b = d.createElement("input"),
			b.setAttribute("value", ""),
			l.input = "" === b.getAttribute("value"),
			b.value = "t",
			b.setAttribute("type", "radio"),
			l.radioValue = "t" === b.value
	}();
	var rb = /\r/g
		, sb = /[\x20\t\r\n\f]+/g;
	n.fn.extend({
			val: function(a) {
					var b, c, d, e = this[0];
					{
							if (arguments.length)
									return d = n.isFunction(a),
									this.each(function(c) {
											var e;
											1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
											null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
													return null == a ? "" : a + ""
											})),
											b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
											b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
									});
							if (e)
									return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
									b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
									"string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
					}
			}
	}),
	n.extend({
			valHooks: {
					option: {
							get: function(a) {
									var b = n.find.attr(a, "value");
									return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
							}
					},
					select: {
							get: function(a) {
									for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
											if (c = d[i],
											(c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
													if (b = n(c).val(),
													f)
															return b;
													g.push(b)
											}
									return g
							},
							set: function(a, b) {
									var c, d, e = a.options, f = n.makeArray(b), g = e.length;
									while (g--)
											if (d = e[g],
											n.inArray(n.valHooks.option.get(d), f) > -1)
													try {
															d.selected = c = !0
													} catch (h) {
															d.scrollHeight
													}
											else
													d.selected = !1;
									return c || (a.selectedIndex = -1),
									e
							}
					}
			}
	}),
	n.each(["radio", "checkbox"], function() {
			n.valHooks[this] = {
					set: function(a, b) {
							return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
					}
			},
			l.checkOn || (n.valHooks[this].get = function(a) {
					return null === a.getAttribute("value") ? "on" : a.value
			}
			)
	});
	var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
	n.fn.extend({
			attr: function(a, b) {
					return Y(this, n.attr, a, b, arguments.length > 1)
			},
			removeAttr: function(a) {
					return this.each(function() {
							n.removeAttr(this, a)
					})
			}
	}),
	n.extend({
			attr: function(a, b, c) {
					var d, e, f = a.nodeType;
					if (3 !== f && 8 !== f && 2 !== f)
							return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
							e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)),
							void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
							c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
							null == d ? void 0 : d))
			},
			attrHooks: {
					type: {
							set: function(a, b) {
									if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
											var c = a.value;
											return a.setAttribute("type", b),
											c && (a.value = c),
											b
									}
							}
					}
			},
			removeAttr: function(a, b) {
					var c, d, e = 0, f = b && b.match(G);
					if (f && 1 === a.nodeType)
							while (c = f[e++])
									d = n.propFix[c] || c,
									n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
									a.removeAttribute(xb ? c : d)
			}
	}),
	ub = {
			set: function(a, b, c) {
					return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
					c
			}
	},
	n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
			var c = vb[b] || n.find.attr;
			yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
					var e, f;
					return d || (f = vb[b],
					vb[b] = e,
					e = null != c(a, b, d) ? b.toLowerCase() : null,
					vb[b] = f),
					e
			}
			: vb[b] = function(a, b, c) {
					return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
			}
	}),
	yb && xb || (n.attrHooks.value = {
			set: function(a, b, c) {
					return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
			}
	}),
	xb || (tb = {
			set: function(a, b, c) {
					var d = a.getAttributeNode(c);
					return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
					d.value = b += "",
					"value" === c || b === a.getAttribute(c) ? b : void 0
			}
	},
	vb.id = vb.name = vb.coords = function(a, b, c) {
			var d;
			return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}
	,
	n.valHooks.button = {
			get: function(a, b) {
					var c = a.getAttributeNode(b);
					return c && c.specified ? c.value : void 0
			},
			set: tb.set
	},
	n.attrHooks.contenteditable = {
			set: function(a, b, c) {
					tb.set(a, "" === b ? !1 : b, c)
			}
	},
	n.each(["width", "height"], function(a, b) {
			n.attrHooks[b] = {
					set: function(a, c) {
							return "" === c ? (a.setAttribute(b, "auto"),
							c) : void 0
					}
			}
	})),
	l.style || (n.attrHooks.style = {
			get: function(a) {
					return a.style.cssText || void 0
			},
			set: function(a, b) {
					return a.style.cssText = b + ""
			}
	});
	var zb = /^(?:input|select|textarea|button|object)$/i
		, Ab = /^(?:a|area)$/i;
	n.fn.extend({
			prop: function(a, b) {
					return Y(this, n.prop, a, b, arguments.length > 1)
			},
			removeProp: function(a) {
					return a = n.propFix[a] || a,
					this.each(function() {
							try {
									this[a] = void 0,
									delete this[a]
							} catch (b) {}
					})
			}
	}),
	n.extend({
			prop: function(a, b, c) {
					var d, e, f = a.nodeType;
					if (3 !== f && 8 !== f && 2 !== f)
							return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
							e = n.propHooks[b]),
							void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
			},
			propHooks: {
					tabIndex: {
							get: function(a) {
									var b = n.find.attr(a, "tabindex");
									return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
							}
					}
			},
			propFix: {
					"for": "htmlFor",
					"class": "className"
			}
	}),
	l.hrefNormalized || n.each(["href", "src"], function(a, b) {
			n.propHooks[b] = {
					get: function(a) {
							return a.getAttribute(b, 4)
					}
			}
	}),
	l.optSelected || (n.propHooks.selected = {
			get: function(a) {
					var b = a.parentNode;
					return b && (b.selectedIndex,
					b.parentNode && b.parentNode.selectedIndex),
					null
			},
			set: function(a) {
					var b = a.parentNode;
					b && (b.selectedIndex,
					b.parentNode && b.parentNode.selectedIndex)
			}
	}),
	n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
			n.propFix[this.toLowerCase()] = this
	}),
	l.enctype || (n.propFix.enctype = "encoding");
	var Bb = /[\t\r\n\f]/g;
	function Cb(a) {
			return n.attr(a, "class") || ""
	}
	n.fn.extend({
			addClass: function(a) {
					var b, c, d, e, f, g, h, i = 0;
					if (n.isFunction(a))
							return this.each(function(b) {
									n(this).addClass(a.call(this, b, Cb(this)))
							});
					if ("string" == typeof a && a) {
							b = a.match(G) || [];
							while (c = this[i++])
									if (e = Cb(c),
									d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
											g = 0;
											while (f = b[g++])
													d.indexOf(" " + f + " ") < 0 && (d += f + " ");
											h = n.trim(d),
											e !== h && n.attr(c, "class", h)
									}
					}
					return this
			},
			removeClass: function(a) {
					var b, c, d, e, f, g, h, i = 0;
					if (n.isFunction(a))
							return this.each(function(b) {
									n(this).removeClass(a.call(this, b, Cb(this)))
							});
					if (!arguments.length)
							return this.attr("class", "");
					if ("string" == typeof a && a) {
							b = a.match(G) || [];
							while (c = this[i++])
									if (e = Cb(c),
									d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
											g = 0;
											while (f = b[g++])
													while (d.indexOf(" " + f + " ") > -1)
															d = d.replace(" " + f + " ", " ");
											h = n.trim(d),
											e !== h && n.attr(c, "class", h)
									}
					}
					return this
			},
			toggleClass: function(a, b) {
					var c = typeof a;
					return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
							n(this).toggleClass(a.call(this, c, Cb(this), b), b)
					}) : this.each(function() {
							var b, d, e, f;
							if ("string" === c) {
									d = 0,
									e = n(this),
									f = a.match(G) || [];
									while (b = f[d++])
											e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
							} else
									void 0 !== a && "boolean" !== c || (b = Cb(this),
									b && n._data(this, "__className__", b),
									n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
					})
			},
			hasClass: function(a) {
					var b, c, d = 0;
					b = " " + a + " ";
					while (c = this[d++])
							if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
									return !0;
					return !1
			}
	}),
	n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
			n.fn[b] = function(a, c) {
					return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}
	}),
	n.fn.extend({
			hover: function(a, b) {
					return this.mouseenter(a).mouseleave(b || a)
			}
	});
	var Db = a.location
		, Eb = n.now()
		, Fb = /\?/
		, Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	n.parseJSON = function(b) {
			if (a.JSON && a.JSON.parse)
					return a.JSON.parse(b + "");
			var c, d = null, e = n.trim(b + "");
			return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
					return c && b && (d = 0),
					0 === d ? a : (c = e || b,
					d += !f - !e,
					"")
			})) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
	}
	,
	n.parseXML = function(b) {
			var c, d;
			if (!b || "string" != typeof b)
					return null;
			try {
					a.DOMParser ? (d = new a.DOMParser,
					c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
					c.async = "false",
					c.loadXML(b))
			} catch (e) {
					c = void 0
			}
			return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
			c
	}
	;
	var Hb = /#.*$/
		, Ib = /([?&])_=[^&]*/
		, Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
		, Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
		, Lb = /^(?:GET|HEAD)$/
		, Mb = /^\/\//
		, Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
		, Ob = {}
		, Pb = {}
		, Qb = "*/".concat("*")
		, Rb = Db.href
		, Sb = Nb.exec(Rb.toLowerCase()) || [];
	function Tb(a) {
			return function(b, c) {
					"string" != typeof b && (c = b,
					b = "*");
					var d, e = 0, f = b.toLowerCase().match(G) || [];
					if (n.isFunction(c))
							while (d = f[e++])
									"+" === d.charAt(0) ? (d = d.slice(1) || "*",
									(a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
			}
	}
	function Ub(a, b, c, d) {
			var e = {}
				, f = a === Pb;
			function g(h) {
					var i;
					return e[h] = !0,
					n.each(a[h] || [], function(a, h) {
							var j = h(b, c, d);
							return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
							g(j),
							!1)
					}),
					i
			}
			return g(b.dataTypes[0]) || !e["*"] && g("*")
	}
	function Vb(a, b) {
			var c, d, e = n.ajaxSettings.flatOptions || {};
			for (d in b)
					void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
			return c && n.extend(!0, a, c),
			a
	}
	function Wb(a, b, c) {
			var d, e, f, g, h = a.contents, i = a.dataTypes;
			while ("*" === i[0])
					i.shift(),
					void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
			if (e)
					for (g in h)
							if (h[g] && h[g].test(e)) {
									i.unshift(g);
									break
							}
			if (i[0]in c)
					f = i[0];
			else {
					for (g in c) {
							if (!i[0] || a.converters[g + " " + i[0]]) {
									f = g;
									break
							}
							d || (d = g)
					}
					f = f || d
			}
			return f ? (f !== i[0] && i.unshift(f),
			c[f]) : void 0
	}
	function Xb(a, b, c, d) {
			var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
			if (k[1])
					for (g in a.converters)
							j[g.toLowerCase()] = a.converters[g];
			f = k.shift();
			while (f)
					if (a.responseFields[f] && (c[a.responseFields[f]] = b),
					!i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
					i = f,
					f = k.shift())
							if ("*" === f)
									f = i;
							else if ("*" !== i && i !== f) {
									if (g = j[i + " " + f] || j["* " + f],
									!g)
											for (e in j)
													if (h = e.split(" "),
													h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
															g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
															k.unshift(h[1]));
															break
													}
									if (g !== !0)
											if (g && a["throws"])
													b = g(b);
											else
													try {
															b = g(b)
													} catch (l) {
															return {
																	state: "parsererror",
																	error: g ? l : "No conversion from " + i + " to " + f
															}
													}
							}
			return {
					state: "success",
					data: b
			}
	}
	n.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
					url: Rb,
					type: "GET",
					isLocal: Kb.test(Sb[1]),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
							"*": Qb,
							text: "text/plain",
							html: "text/html",
							xml: "application/xml, text/xml",
							json: "application/json, text/javascript"
					},
					contents: {
							xml: /\bxml\b/,
							html: /\bhtml/,
							json: /\bjson\b/
					},
					responseFields: {
							xml: "responseXML",
							text: "responseText",
							json: "responseJSON"
					},
					converters: {
							"* text": String,
							"text html": !0,
							"text json": n.parseJSON,
							"text xml": n.parseXML
					},
					flatOptions: {
							url: !0,
							context: !0
					}
			},
			ajaxSetup: function(a, b) {
					return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
			},
			ajaxPrefilter: Tb(Ob),
			ajaxTransport: Tb(Pb),
			ajax: function(b, c) {
					"object" == typeof b && (c = b,
					b = void 0),
					c = c || {};
					var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
							readyState: 0,
							getResponseHeader: function(a) {
									var b;
									if (2 === u) {
											if (!k) {
													k = {};
													while (b = Jb.exec(g))
															k[b[1].toLowerCase()] = b[2]
											}
											b = k[a.toLowerCase()]
									}
									return null == b ? null : b
							},
							getAllResponseHeaders: function() {
									return 2 === u ? g : null
							},
							setRequestHeader: function(a, b) {
									var c = a.toLowerCase();
									return u || (a = t[c] = t[c] || a,
									s[a] = b),
									this
							},
							overrideMimeType: function(a) {
									return u || (l.mimeType = a),
									this
							},
							statusCode: function(a) {
									var b;
									if (a)
											if (2 > u)
													for (b in a)
															r[b] = [r[b], a[b]];
											else
													w.always(a[w.status]);
									return this
							},
							abort: function(a) {
									var b = a || v;
									return j && j.abort(b),
									y(0, b),
									this
							}
					};
					if (p.promise(w).complete = q.add,
					w.success = w.done,
					w.error = w.fail,
					l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"),
					l.type = c.method || c.type || l.method || l.type,
					l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""],
					null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()),
					l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))),
					l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)),
					Ub(Ob, l, c, w),
					2 === u)
							return w;
					i = n.event && l.global,
					i && 0 === n.active++ && n.event.trigger("ajaxStart"),
					l.type = l.type.toUpperCase(),
					l.hasContent = !Lb.test(l.type),
					f = l.url,
					l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
					delete l.data),
					l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
					l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
					n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
					(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
					w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
					for (e in l.headers)
							w.setRequestHeader(e, l.headers[e]);
					if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
							return w.abort();
					v = "abort";
					for (e in {
							success: 1,
							error: 1,
							complete: 1
					})
							w[e](l[e]);
					if (j = Ub(Pb, l, c, w)) {
							if (w.readyState = 1,
							i && o.trigger("ajaxSend", [w, l]),
							2 === u)
									return w;
							l.async && l.timeout > 0 && (h = a.setTimeout(function() {
									w.abort("timeout")
							}, l.timeout));
							try {
									u = 1,
									j.send(s, y)
							} catch (x) {
									if (!(2 > u))
											throw x;
									y(-1, x)
							}
					} else
							y(-1, "No Transport");
					function y(b, c, d, e) {
							var k, s, t, v, x, y = c;
							2 !== u && (u = 2,
							h && a.clearTimeout(h),
							j = void 0,
							g = e || "",
							w.readyState = b > 0 ? 4 : 0,
							k = b >= 200 && 300 > b || 304 === b,
							d && (v = Wb(l, w, d)),
							v = Xb(l, v, w, k),
							k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
							x && (n.lastModified[f] = x),
							x = w.getResponseHeader("etag"),
							x && (n.etag[f] = x)),
							204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state,
							s = v.data,
							t = v.error,
							k = !t)) : (t = y,
							!b && y || (y = "error",
							0 > b && (b = 0))),
							w.status = b,
							w.statusText = (c || y) + "",
							k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
							w.statusCode(r),
							r = void 0,
							i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
							q.fireWith(m, [w, y]),
							i && (o.trigger("ajaxComplete", [w, l]),
							--n.active || n.event.trigger("ajaxStop")))
					}
					return w
			},
			getJSON: function(a, b, c) {
					return n.get(a, b, c, "json")
			},
			getScript: function(a, b) {
					return n.get(a, void 0, b, "script")
			}
	}),
	n.each(["get", "post"], function(a, b) {
			n[b] = function(a, c, d, e) {
					return n.isFunction(c) && (e = e || d,
					d = c,
					c = void 0),
					n.ajax(n.extend({
							url: a,
							type: b,
							dataType: e,
							data: c,
							success: d
					}, n.isPlainObject(a) && a))
			}
	}),
	n._evalUrl = function(a) {
			return n.ajax({
					url: a,
					type: "GET",
					dataType: "script",
					cache: !0,
					async: !1,
					global: !1,
					"throws": !0
			})
	}
	,
	n.fn.extend({
			wrapAll: function(a) {
					if (n.isFunction(a))
							return this.each(function(b) {
									n(this).wrapAll(a.call(this, b))
							});
					if (this[0]) {
							var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
							this[0].parentNode && b.insertBefore(this[0]),
							b.map(function() {
									var a = this;
									while (a.firstChild && 1 === a.firstChild.nodeType)
											a = a.firstChild;
									return a
							}).append(this)
					}
					return this
			},
			wrapInner: function(a) {
					return n.isFunction(a) ? this.each(function(b) {
							n(this).wrapInner(a.call(this, b))
					}) : this.each(function() {
							var b = n(this)
								, c = b.contents();
							c.length ? c.wrapAll(a) : b.append(a)
					})
			},
			wrap: function(a) {
					var b = n.isFunction(a);
					return this.each(function(c) {
							n(this).wrapAll(b ? a.call(this, c) : a)
					})
			},
			unwrap: function() {
					return this.parent().each(function() {
							n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
					}).end()
			}
	});
	function Yb(a) {
			return a.style && a.style.display || n.css(a, "display")
	}
	function Zb(a) {
			if (!n.contains(a.ownerDocument || d, a))
					return !0;
			while (a && 1 === a.nodeType) {
					if ("none" === Yb(a) || "hidden" === a.type)
							return !0;
					a = a.parentNode
			}
			return !1
	}
	n.expr.filters.hidden = function(a) {
			return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
	}
	,
	n.expr.filters.visible = function(a) {
			return !n.expr.filters.hidden(a)
	}
	;
	var $b = /%20/g
		, _b = /\[\]$/
		, ac = /\r?\n/g
		, bc = /^(?:submit|button|image|reset|file)$/i
		, cc = /^(?:input|select|textarea|keygen)/i;
	function dc(a, b, c, d) {
			var e;
			if (n.isArray(b))
					n.each(b, function(b, e) {
							c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
					});
			else if (c || "object" !== n.type(b))
					d(a, b);
			else
					for (e in b)
							dc(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function(a, b) {
			var c, d = [], e = function(a, b) {
					b = n.isFunction(b) ? b() : null == b ? "" : b,
					d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
			if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
			n.isArray(a) || a.jquery && !n.isPlainObject(a))
					n.each(a, function() {
							e(this.name, this.value)
					});
			else
					for (c in a)
							dc(c, a[c], b, e);
			return d.join("&").replace($b, "+")
	}
	,
	n.fn.extend({
			serialize: function() {
					return n.param(this.serializeArray())
			},
			serializeArray: function() {
					return this.map(function() {
							var a = n.prop(this, "elements");
							return a ? n.makeArray(a) : this
					}).filter(function() {
							var a = this.type;
							return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
					}).map(function(a, b) {
							var c = n(this).val();
							return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
									return {
											name: b.name,
											value: a.replace(ac, "\r\n")
									}
							}) : {
									name: b.name,
									value: c.replace(ac, "\r\n")
							}
					}).get()
			}
	}),
	n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
			return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
	}
	: hc;
	var ec = 0
		, fc = {}
		, gc = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function() {
			for (var a in fc)
					fc[a](void 0, !0)
	}),
	l.cors = !!gc && "withCredentials"in gc,
	gc = l.ajax = !!gc,
	gc && n.ajaxTransport(function(b) {
			if (!b.crossDomain || l.cors) {
					var c;
					return {
							send: function(d, e) {
									var f, g = b.xhr(), h = ++ec;
									if (g.open(b.type, b.url, b.async, b.username, b.password),
									b.xhrFields)
											for (f in b.xhrFields)
													g[f] = b.xhrFields[f];
									b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
									b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
									for (f in d)
											void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
									g.send(b.hasContent && b.data || null),
									c = function(a, d) {
											var f, i, j;
											if (c && (d || 4 === g.readyState))
													if (delete fc[h],
													c = void 0,
													g.onreadystatechange = n.noop,
													d)
															4 !== g.readyState && g.abort();
													else {
															j = {},
															f = g.status,
															"string" == typeof g.responseText && (j.text = g.responseText);
															try {
																	i = g.statusText
															} catch (k) {
																	i = ""
															}
															f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
													}
											j && e(f, i, j, g.getAllResponseHeaders())
									}
									,
									b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
							},
							abort: function() {
									c && c(void 0, !0)
							}
					}
			}
	});
	function hc() {
			try {
					return new a.XMLHttpRequest
			} catch (b) {}
	}
	function ic() {
			try {
					return new a.ActiveXObject("Microsoft.XMLHTTP")
			} catch (b) {}
	}
	n.ajaxSetup({
			accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
					script: /\b(?:java|ecma)script\b/
			},
			converters: {
					"text script": function(a) {
							return n.globalEval(a),
							a
					}
			}
	}),
	n.ajaxPrefilter("script", function(a) {
			void 0 === a.cache && (a.cache = !1),
			a.crossDomain && (a.type = "GET",
			a.global = !1)
	}),
	n.ajaxTransport("script", function(a) {
			if (a.crossDomain) {
					var b, c = d.head || n("head")[0] || d.documentElement;
					return {
							send: function(e, f) {
									b = d.createElement("script"),
									b.async = !0,
									a.scriptCharset && (b.charset = a.scriptCharset),
									b.src = a.url,
									b.onload = b.onreadystatechange = function(a, c) {
											(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
											b.parentNode && b.parentNode.removeChild(b),
											b = null,
											c || f(200, "success"))
									}
									,
									c.insertBefore(b, c.firstChild)
							},
							abort: function() {
									b && b.onload(void 0, !0)
							}
					}
			}
	});
	var jc = []
		, kc = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
					var a = jc.pop() || n.expando + "_" + Eb++;
					return this[a] = !0,
					a
			}
	}),
	n.ajaxPrefilter("json jsonp", function(b, c, d) {
			var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
			return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
			h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
			b.converters["script json"] = function() {
					return g || n.error(e + " was not called"),
					g[0]
			}
			,
			b.dataTypes[0] = "json",
			f = a[e],
			a[e] = function() {
					g = arguments
			}
			,
			d.always(function() {
					void 0 === f ? n(a).removeProp(e) : a[e] = f,
					b[e] && (b.jsonpCallback = c.jsonpCallback,
					jc.push(e)),
					g && n.isFunction(f) && f(g[0]),
					g = f = void 0
			}),
			"script") : void 0
	}),
	n.parseHTML = function(a, b, c) {
			if (!a || "string" != typeof a)
					return null;
			"boolean" == typeof b && (c = b,
			b = !1),
			b = b || d;
			var e = x.exec(a)
				, f = !c && [];
			return e ? [b.createElement(e[1])] : (e = ja([a], b, f),
			f && f.length && n(f).remove(),
			n.merge([], e.childNodes))
	}
	;
	var lc = n.fn.load;
	n.fn.load = function(a, b, c) {
			if ("string" != typeof a && lc)
					return lc.apply(this, arguments);
			var d, e, f, g = this, h = a.indexOf(" ");
			return h > -1 && (d = n.trim(a.slice(h, a.length)),
			a = a.slice(0, h)),
			n.isFunction(b) ? (c = b,
			b = void 0) : b && "object" == typeof b && (e = "POST"),
			g.length > 0 && n.ajax({
					url: a,
					type: e || "GET",
					dataType: "html",
					data: b
			}).done(function(a) {
					f = arguments,
					g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
			}).always(c && function(a, b) {
					g.each(function() {
							c.apply(this, f || [a.responseText, b, a])
					})
			}
			),
			this
	}
	,
	n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
			n.fn[b] = function(a) {
					return this.on(b, a)
			}
	}),
	n.expr.filters.animated = function(a) {
			return n.grep(n.timers, function(b) {
					return a === b.elem
			}).length
	}
	;
	function mc(a) {
			return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
	}
	n.offset = {
			setOffset: function(a, b, c) {
					var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
					"static" === k && (a.style.position = "relative"),
					h = l.offset(),
					f = n.css(a, "top"),
					i = n.css(a, "left"),
					j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
					j ? (d = l.position(),
					g = d.top,
					e = d.left) : (g = parseFloat(f) || 0,
					e = parseFloat(i) || 0),
					n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
					null != b.top && (m.top = b.top - h.top + g),
					null != b.left && (m.left = b.left - h.left + e),
					"using"in b ? b.using.call(a, m) : l.css(m)
			}
	},
	n.fn.extend({
			offset: function(a) {
					if (arguments.length)
							return void 0 === a ? this : this.each(function(b) {
									n.offset.setOffset(this, a, b)
							});
					var b, c, d = {
							top: 0,
							left: 0
					}, e = this[0], f = e && e.ownerDocument;
					if (f)
							return b = f.documentElement,
							n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
							c = mc(f),
							{
									top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
									left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
							}) : d
			},
			position: function() {
					if (this[0]) {
							var a, b, c = {
									top: 0,
									left: 0
							}, d = this[0];
							return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
							b = this.offset(),
							n.nodeName(a[0], "html") || (c = a.offset()),
							c.top += n.css(a[0], "borderTopWidth", !0),
							c.left += n.css(a[0], "borderLeftWidth", !0)),
							{
									top: b.top - c.top - n.css(d, "marginTop", !0),
									left: b.left - c.left - n.css(d, "marginLeft", !0)
							}
					}
			},
			offsetParent: function() {
					return this.map(function() {
							var a = this.offsetParent;
							while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
									a = a.offsetParent;
							return a || Qa
					})
			}
	}),
	n.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
	}, function(a, b) {
			var c = /Y/.test(b);
			n.fn[a] = function(d) {
					return Y(this, function(a, d, e) {
							var f = mc(a);
							return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
					}, a, d, arguments.length, null)
			}
	}),
	n.each(["top", "left"], function(a, b) {
			n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
					return c ? (c = Sa(a, b),
					Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
			})
	}),
	n.each({
			Height: "height",
			Width: "width"
	}, function(a, b) {
			n.each({
					padding: "inner" + a,
					content: b,
					"": "outer" + a
			}, function(c, d) {
					n.fn[d] = function(d, e) {
							var f = arguments.length && (c || "boolean" != typeof d)
								, g = c || (d === !0 || e === !0 ? "margin" : "border");
							return Y(this, function(b, c, d) {
									var e;
									return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
									Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
							}, b, f ? d : void 0, f, null)
					}
			})
	}),
	n.fn.extend({
			bind: function(a, b, c) {
					return this.on(a, null, b, c)
			},
			unbind: function(a, b) {
					return this.off(a, null, b)
			},
			delegate: function(a, b, c, d) {
					return this.on(b, a, c, d)
			},
			undelegate: function(a, b, c) {
					return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
			}
	}),
	n.fn.size = function() {
			return this.length
	}
	,
	n.fn.andSelf = n.fn.addBack,
	"function" == typeof define && define.amd && define("jquery", [], function() {
			return n
	});
	var nc = a.jQuery
		, oc = a.$;
	return n.noConflict = function(b) {
			return a.$ === n && (a.$ = oc),
			b && a.jQuery === n && (a.jQuery = nc),
			n
	}
	,
	b || (a.jQuery = a.$ = n),
	n
});

/* End */
;;/* Start:"a:4:{s:4:"full";s:55:"/local/templates/nspcc/js/popper.min.js?166601691820297";s:6:"source";s:39:"/local/templates/nspcc/js/popper.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
Copyright (C) Federico Zivolo 2018
Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
*/
(function(e, t) {
	'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
	'use strict';
	function e(e) {
			return e && '[object Function]' === {}.toString.call(e)
	}
	function t(e, t) {
			if (1 !== e.nodeType)
					return [];
			var o = getComputedStyle(e, null);
			return t ? o[t] : o
	}
	function o(e) {
			return 'HTML' === e.nodeName ? e : e.parentNode || e.host
	}
	function n(e) {
			if (!e)
					return document.body;
			switch (e.nodeName) {
			case 'HTML':
			case 'BODY':
					return e.ownerDocument.body;
			case '#document':
					return e.body;
			}
			var i = t(e)
				, r = i.overflow
				, p = i.overflowX
				, s = i.overflowY;
			return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
	}
	function r(e) {
			return 11 === e ? re : 10 === e ? pe : re || pe
	}
	function p(e) {
			if (!e)
					return document.documentElement;
			for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling; )
					n = (e = e.nextElementSibling).offsetParent;
			var i = n && n.nodeName;
			return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
	}
	function s(e) {
			var t = e.nodeName;
			return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
	}
	function d(e) {
			return null === e.parentNode ? e : d(e.parentNode)
	}
	function a(e, t) {
			if (!e || !e.nodeType || !t || !t.nodeType)
					return document.documentElement;
			var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
				, n = o ? e : t
				, i = o ? t : e
				, r = document.createRange();
			r.setStart(n, 0),
			r.setEnd(i, 0);
			var l = r.commonAncestorContainer;
			if (e !== l && t !== l || n.contains(i))
					return s(l) ? l : p(l);
			var f = d(e);
			return f.host ? a(f.host, t) : a(e, d(t).host)
	}
	function l(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
				, o = 'top' === t ? 'scrollTop' : 'scrollLeft'
				, n = e.nodeName;
			if ('BODY' === n || 'HTML' === n) {
					var i = e.ownerDocument.documentElement
						, r = e.ownerDocument.scrollingElement || i;
					return r[o]
			}
			return e[o]
	}
	function f(e, t) {
			var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
				, n = l(t, 'top')
				, i = l(t, 'left')
				, r = o ? -1 : 1;
			return e.top += n * r,
			e.bottom += n * r,
			e.left += i * r,
			e.right += i * r,
			e
	}
	function m(e, t) {
			var o = 'x' === t ? 'Left' : 'Top'
				, n = 'Left' == o ? 'Right' : 'Bottom';
			return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
	}
	function h(e, t, o, n) {
			return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
	}
	function c() {
			var e = document.body
				, t = document.documentElement
				, o = r(10) && getComputedStyle(t);
			return {
					height: h('Height', e, t, o),
					width: h('Width', e, t, o)
			}
	}
	function g(e) {
			return le({}, e, {
					right: e.left + e.width,
					bottom: e.top + e.height
			})
	}
	function u(e) {
			var o = {};
			try {
					if (r(10)) {
							o = e.getBoundingClientRect();
							var n = l(e, 'top')
								, i = l(e, 'left');
							o.top += n,
							o.left += i,
							o.bottom += n,
							o.right += i
					} else
							o = e.getBoundingClientRect()
			} catch (t) {}
			var p = {
					left: o.left,
					top: o.top,
					width: o.right - o.left,
					height: o.bottom - o.top
			}
				, s = 'HTML' === e.nodeName ? c() : {}
				, d = s.width || e.clientWidth || p.right - p.left
				, a = s.height || e.clientHeight || p.bottom - p.top
				, f = e.offsetWidth - d
				, h = e.offsetHeight - a;
			if (f || h) {
					var u = t(e);
					f -= m(u, 'x'),
					h -= m(u, 'y'),
					p.width -= f,
					p.height -= h
			}
			return g(p)
	}
	function b(e, o) {
			var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
				, p = r(10)
				, s = 'HTML' === o.nodeName
				, d = u(e)
				, a = u(o)
				, l = n(e)
				, m = t(o)
				, h = parseFloat(m.borderTopWidth, 10)
				, c = parseFloat(m.borderLeftWidth, 10);
			i && 'HTML' === o.nodeName && (a.top = $(a.top, 0),
			a.left = $(a.left, 0));
			var b = g({
					top: d.top - a.top - h,
					left: d.left - a.left - c,
					width: d.width,
					height: d.height
			});
			if (b.marginTop = 0,
			b.marginLeft = 0,
			!p && s) {
					var y = parseFloat(m.marginTop, 10)
						, w = parseFloat(m.marginLeft, 10);
					b.top -= h - y,
					b.bottom -= h - y,
					b.left -= c - w,
					b.right -= c - w,
					b.marginTop = y,
					b.marginLeft = w
			}
			return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
			b
	}
	function y(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
				, o = e.ownerDocument.documentElement
				, n = b(e, o)
				, i = $(o.clientWidth, window.innerWidth || 0)
				, r = $(o.clientHeight, window.innerHeight || 0)
				, p = t ? 0 : l(o)
				, s = t ? 0 : l(o, 'left')
				, d = {
					top: p - n.top + n.marginTop,
					left: s - n.left + n.marginLeft,
					width: i,
					height: r
			};
			return g(d)
	}
	function w(e) {
			var n = e.nodeName;
			return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
	}
	function E(e) {
			if (!e || !e.parentElement || r())
					return document.documentElement;
			for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
					o = o.parentElement;
			return o || document.documentElement
	}
	function v(e, t, i, r) {
			var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
				, s = {
					top: 0,
					left: 0
			}
				, d = p ? E(e) : a(e, t);
			if ('viewport' === r)
					s = y(d, p);
			else {
					var l;
					'scrollParent' === r ? (l = n(o(t)),
					'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
					var f = b(l, d, p);
					if ('HTML' === l.nodeName && !w(d)) {
							var m = c()
								, h = m.height
								, g = m.width;
							s.top += f.top - f.marginTop,
							s.bottom = h + f.top,
							s.left += f.left - f.marginLeft,
							s.right = g + f.left
					} else
							s = f
			}
			return s.left += i,
			s.top += i,
			s.right -= i,
			s.bottom -= i,
			s
	}
	function x(e) {
			var t = e.width
				, o = e.height;
			return t * o
	}
	function O(e, t, o, n, i) {
			var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
			if (-1 === e.indexOf('auto'))
					return e;
			var p = v(o, n, r, i)
				, s = {
					top: {
							width: p.width,
							height: t.top - p.top
					},
					right: {
							width: p.right - t.right,
							height: p.height
					},
					bottom: {
							width: p.width,
							height: p.bottom - t.bottom
					},
					left: {
							width: t.left - p.left,
							height: p.height
					}
			}
				, d = Object.keys(s).map(function(e) {
					return le({
							key: e
					}, s[e], {
							area: x(s[e])
					})
			}).sort(function(e, t) {
					return t.area - e.area
			})
				, a = d.filter(function(e) {
					var t = e.width
						, n = e.height;
					return t >= o.clientWidth && n >= o.clientHeight
			})
				, l = 0 < a.length ? a[0].key : d[0].key
				, f = e.split('-')[1];
			return l + (f ? '-' + f : '')
	}
	function L(e, t, o) {
			var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
				, i = n ? E(t) : a(t, o);
			return b(o, i, n)
	}
	function S(e) {
			var t = getComputedStyle(e)
				, o = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
				, n = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
				, i = {
					width: e.offsetWidth + n,
					height: e.offsetHeight + o
			};
			return i
	}
	function T(e) {
			var t = {
					left: 'right',
					right: 'left',
					bottom: 'top',
					top: 'bottom'
			};
			return e.replace(/left|right|bottom|top/g, function(e) {
					return t[e]
			})
	}
	function C(e, t, o) {
			o = o.split('-')[0];
			var n = S(e)
				, i = {
					width: n.width,
					height: n.height
			}
				, r = -1 !== ['right', 'left'].indexOf(o)
				, p = r ? 'top' : 'left'
				, s = r ? 'left' : 'top'
				, d = r ? 'height' : 'width'
				, a = r ? 'width' : 'height';
			return i[p] = t[p] + t[d] / 2 - n[d] / 2,
			i[s] = o === s ? t[s] - n[a] : t[T(s)],
			i
	}
	function D(e, t) {
			return Array.prototype.find ? e.find(t) : e.filter(t)[0]
	}
	function N(e, t, o) {
			if (Array.prototype.findIndex)
					return e.findIndex(function(e) {
							return e[t] === o
					});
			var n = D(e, function(e) {
					return e[t] === o
			});
			return e.indexOf(n)
	}
	function P(t, o, n) {
			var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
			return i.forEach(function(t) {
					t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
					var n = t['function'] || t.fn;
					t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
					o.offsets.reference = g(o.offsets.reference),
					o = n(o, t))
			}),
			o
	}
	function k() {
			if (!this.state.isDestroyed) {
					var e = {
							instance: this,
							styles: {},
							arrowStyles: {},
							attributes: {},
							flipped: !1,
							offsets: {}
					};
					e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
					e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
					e.originalPlacement = e.placement,
					e.positionFixed = this.options.positionFixed,
					e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
					e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
					e = P(this.modifiers, e),
					this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
					this.options.onCreate(e))
			}
	}
	function W(e, t) {
			return e.some(function(e) {
					var o = e.name
						, n = e.enabled;
					return n && o === t
			})
	}
	function B(e) {
			for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
					var i = t[n]
						, r = i ? '' + i + o : e;
					if ('undefined' != typeof document.body.style[r])
							return r
			}
			return null
	}
	function H() {
			return this.state.isDestroyed = !0,
			W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
			this.popper.style.position = '',
			this.popper.style.top = '',
			this.popper.style.left = '',
			this.popper.style.right = '',
			this.popper.style.bottom = '',
			this.popper.style.willChange = '',
			this.popper.style[B('transform')] = ''),
			this.disableEventListeners(),
			this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
			this
	}
	function A(e) {
			var t = e.ownerDocument;
			return t ? t.defaultView : window
	}
	function M(e, t, o, i) {
			var r = 'BODY' === e.nodeName
				, p = r ? e.ownerDocument.defaultView : e;
			p.addEventListener(t, o, {
					passive: !0
			}),
			r || M(n(p.parentNode), t, o, i),
			i.push(p)
	}
	function I(e, t, o, i) {
			o.updateBound = i,
			A(e).addEventListener('resize', o.updateBound, {
					passive: !0
			});
			var r = n(e);
			return M(r, 'scroll', o.updateBound, o.scrollParents),
			o.scrollElement = r,
			o.eventsEnabled = !0,
			o
	}
	function F() {
			this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
	}
	function R(e, t) {
			return A(e).removeEventListener('resize', t.updateBound),
			t.scrollParents.forEach(function(e) {
					e.removeEventListener('scroll', t.updateBound)
			}),
			t.updateBound = null,
			t.scrollParents = [],
			t.scrollElement = null,
			t.eventsEnabled = !1,
			t
	}
	function U() {
			this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
			this.state = R(this.reference, this.state))
	}
	function Y(e) {
			return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
	}
	function j(e, t) {
			Object.keys(t).forEach(function(o) {
					var n = '';
					-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
					e.style[o] = t[o] + n
			})
	}
	function K(e, t) {
			Object.keys(t).forEach(function(o) {
					var n = t[o];
					!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
			})
	}
	function q(e, t, o) {
			var n = D(e, function(e) {
					var o = e.name;
					return o === t
			})
				, i = !!n && e.some(function(e) {
					return e.name === o && e.enabled && e.order < n.order
			});
			if (!i) {
					var r = '`' + t + '`';
					console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
			}
			return i
	}
	function G(e) {
			return 'end' === e ? 'start' : 'start' === e ? 'end' : e
	}
	function z(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
				, o = me.indexOf(e)
				, n = me.slice(o + 1).concat(me.slice(0, o));
			return t ? n.reverse() : n
	}
	function V(e, t, o, n) {
			var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
				, r = +i[1]
				, p = i[2];
			if (!r)
					return e;
			if (0 === p.indexOf('%')) {
					var s;
					switch (p) {
					case '%p':
							s = o;
							break;
					case '%':
					case '%r':
					default:
							s = n;
					}
					var d = g(s);
					return d[t] / 100 * r
			}
			if ('vh' === p || 'vw' === p) {
					var a;
					return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0),
					a / 100 * r
			}
			return r
	}
	function _(e, t, o, n) {
			var i = [0, 0]
				, r = -1 !== ['right', 'left'].indexOf(n)
				, p = e.split(/(\+|\-)/).map(function(e) {
					return e.trim()
			})
				, s = p.indexOf(D(p, function(e) {
					return -1 !== e.search(/,|\s/)
			}));
			p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
			var d = /\s*,\s*|\s+/
				, a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
			return a = a.map(function(e, n) {
					var i = (1 === n ? !r : r) ? 'height' : 'width'
						, p = !1;
					return e.reduce(function(e, t) {
							return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
							p = !0,
							e) : p ? (e[e.length - 1] += t,
							p = !1,
							e) : e.concat(t)
					}, []).map(function(e) {
							return V(e, i, t, o)
					})
			}),
			a.forEach(function(e, t) {
					e.forEach(function(o, n) {
							Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
					})
			}),
			i
	}
	function X(e, t) {
			var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
			return o = Y(+n) ? [+n, 0] : _(n, p, s, d),
			'left' === d ? (p.top += o[0],
			p.left -= o[1]) : 'right' === d ? (p.top += o[0],
			p.left += o[1]) : 'top' === d ? (p.left += o[0],
			p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
			p.top += o[1]),
			e.popper = p,
			e
	}
	for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
			if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
					oe = 1;
					break
			}
	var i = ee && window.Promise
		, ie = i ? function(e) {
			var t = !1;
			return function() {
					t || (t = !0,
					window.Promise.resolve().then(function() {
							t = !1,
							e()
					}))
			}
	}
	: function(e) {
			var t = !1;
			return function() {
					t || (t = !0,
					setTimeout(function() {
							t = !1,
							e()
					}, oe))
			}
	}
		, re = ee && !!(window.MSInputMethodContext && document.documentMode)
		, pe = ee && /MSIE 10/.test(navigator.userAgent)
		, se = function(e, t) {
			if (!(e instanceof t))
					throw new TypeError('Cannot call a class as a function')
	}
		, de = function() {
			function e(e, t) {
					for (var o, n = 0; n < t.length; n++)
							o = t[n],
							o.enumerable = o.enumerable || !1,
							o.configurable = !0,
							'value'in o && (o.writable = !0),
							Object.defineProperty(e, o.key, o)
			}
			return function(t, o, n) {
					return o && e(t.prototype, o),
					n && e(t, n),
					t
			}
	}()
		, ae = function(e, t, o) {
			return t in e ? Object.defineProperty(e, t, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
			}) : e[t] = o,
			e
	}
		, le = Object.assign || function(e) {
			for (var t, o = 1; o < arguments.length; o++)
					for (var n in t = arguments[o],
					t)
							Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
			return e
	}
		, fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
		, me = fe.slice(3)
		, he = {
			FLIP: 'flip',
			CLOCKWISE: 'clockwise',
			COUNTERCLOCKWISE: 'counterclockwise'
	}
		, ce = function() {
			function t(o, n) {
					var i = this
						, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
					se(this, t),
					this.scheduleUpdate = function() {
							return requestAnimationFrame(i.update)
					}
					,
					this.update = ie(this.update.bind(this)),
					this.options = le({}, t.Defaults, r),
					this.state = {
							isDestroyed: !1,
							isCreated: !1,
							scrollParents: []
					},
					this.reference = o && o.jquery ? o[0] : o,
					this.popper = n && n.jquery ? n[0] : n,
					this.options.modifiers = {},
					Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
							i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
					}),
					this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
							return le({
									name: e
							}, i.options.modifiers[e])
					}).sort(function(e, t) {
							return e.order - t.order
					}),
					this.modifiers.forEach(function(t) {
							t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
					}),
					this.update();
					var p = this.options.eventsEnabled;
					p && this.enableEventListeners(),
					this.state.eventsEnabled = p
			}
			return de(t, [{
					key: 'update',
					value: function() {
							return k.call(this)
					}
			}, {
					key: 'destroy',
					value: function() {
							return H.call(this)
					}
			}, {
					key: 'enableEventListeners',
					value: function() {
							return F.call(this)
					}
			}, {
					key: 'disableEventListeners',
					value: function() {
							return U.call(this)
					}
			}]),
			t
	}();
	return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
	ce.placements = fe,
	ce.Defaults = {
			placement: 'bottom',
			positionFixed: !1,
			eventsEnabled: !0,
			removeOnDestroy: !1,
			onCreate: function() {},
			onUpdate: function() {},
			modifiers: {
					shift: {
							order: 100,
							enabled: !0,
							fn: function(e) {
									var t = e.placement
										, o = t.split('-')[0]
										, n = t.split('-')[1];
									if (n) {
											var i = e.offsets
												, r = i.reference
												, p = i.popper
												, s = -1 !== ['bottom', 'top'].indexOf(o)
												, d = s ? 'left' : 'top'
												, a = s ? 'width' : 'height'
												, l = {
													start: ae({}, d, r[d]),
													end: ae({}, d, r[d] + r[a] - p[a])
											};
											e.offsets.popper = le({}, p, l[n])
									}
									return e
							}
					},
					offset: {
							order: 200,
							enabled: !0,
							fn: X,
							offset: 0
					},
					preventOverflow: {
							order: 300,
							enabled: !0,
							fn: function(e, t) {
									var o = t.boundariesElement || p(e.instance.popper);
									e.instance.reference === o && (o = p(o));
									var n = B('transform')
										, i = e.instance.popper.style
										, r = i.top
										, s = i.left
										, d = i[n];
									i.top = '',
									i.left = '',
									i[n] = '';
									var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
									i.top = r,
									i.left = s,
									i[n] = d,
									t.boundaries = a;
									var l = t.priority
										, f = e.offsets.popper
										, m = {
											primary: function(e) {
													var o = f[e];
													return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])),
													ae({}, e, o)
											},
											secondary: function(e) {
													var o = 'right' === e ? 'left' : 'top'
														, n = f[o];
													return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))),
													ae({}, o, n)
											}
									};
									return l.forEach(function(e) {
											var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
											f = le({}, f, m[t](e))
									}),
									e.offsets.popper = f,
									e
							},
							priority: ['left', 'right', 'top', 'bottom'],
							padding: 5,
							boundariesElement: 'scrollParent'
					},
					keepTogether: {
							order: 400,
							enabled: !0,
							fn: function(e) {
									var t = e.offsets
										, o = t.popper
										, n = t.reference
										, i = e.placement.split('-')[0]
										, r = Z
										, p = -1 !== ['top', 'bottom'].indexOf(i)
										, s = p ? 'right' : 'bottom'
										, d = p ? 'left' : 'top'
										, a = p ? 'width' : 'height';
									return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
									o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
									e
							}
					},
					arrow: {
							order: 500,
							enabled: !0,
							fn: function(e, o) {
									var n;
									if (!q(e.instance.modifiers, 'arrow', 'keepTogether'))
											return e;
									var i = o.element;
									if ('string' == typeof i) {
											if (i = e.instance.popper.querySelector(i),
											!i)
													return e;
									} else if (!e.instance.popper.contains(i))
											return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
											e;
									var r = e.placement.split('-')[0]
										, p = e.offsets
										, s = p.popper
										, d = p.reference
										, a = -1 !== ['left', 'right'].indexOf(r)
										, l = a ? 'height' : 'width'
										, f = a ? 'Top' : 'Left'
										, m = f.toLowerCase()
										, h = a ? 'left' : 'top'
										, c = a ? 'bottom' : 'right'
										, u = S(i)[l];
									d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
									d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
									e.offsets.popper = g(e.offsets.popper);
									var b = d[m] + d[l] / 2 - u / 2
										, y = t(e.instance.popper)
										, w = parseFloat(y['margin' + f], 10)
										, E = parseFloat(y['border' + f + 'Width'], 10)
										, v = b - e.offsets.popper[m] - w - E;
									return v = $(J(s[l] - u, v), 0),
									e.arrowElement = i,
									e.offsets.arrow = (n = {},
									ae(n, m, Q(v)),
									ae(n, h, ''),
									n),
									e
							},
							element: '[x-arrow]'
					},
					flip: {
							order: 600,
							enabled: !0,
							fn: function(e, t) {
									if (W(e.instance.modifiers, 'inner'))
											return e;
									if (e.flipped && e.placement === e.originalPlacement)
											return e;
									var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
										, n = e.placement.split('-')[0]
										, i = T(n)
										, r = e.placement.split('-')[1] || ''
										, p = [];
									switch (t.behavior) {
									case he.FLIP:
											p = [n, i];
											break;
									case he.CLOCKWISE:
											p = z(n);
											break;
									case he.COUNTERCLOCKWISE:
											p = z(n, !0);
											break;
									default:
											p = t.behavior;
									}
									return p.forEach(function(s, d) {
											if (n !== s || p.length === d + 1)
													return e;
											n = e.placement.split('-')[0],
											i = T(n);
											var a = e.offsets.popper
												, l = e.offsets.reference
												, f = Z
												, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
												, h = f(a.left) < f(o.left)
												, c = f(a.right) > f(o.right)
												, g = f(a.top) < f(o.top)
												, u = f(a.bottom) > f(o.bottom)
												, b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
												, y = -1 !== ['top', 'bottom'].indexOf(n)
												, w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
											(m || b || w) && (e.flipped = !0,
											(m || b) && (n = p[d + 1]),
											w && (r = G(r)),
											e.placement = n + (r ? '-' + r : ''),
											e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
											e = P(e.instance.modifiers, e, 'flip'))
									}),
									e
							},
							behavior: 'flip',
							padding: 5,
							boundariesElement: 'viewport'
					},
					inner: {
							order: 700,
							enabled: !1,
							fn: function(e) {
									var t = e.placement
										, o = t.split('-')[0]
										, n = e.offsets
										, i = n.popper
										, r = n.reference
										, p = -1 !== ['left', 'right'].indexOf(o)
										, s = -1 === ['top', 'left'].indexOf(o);
									return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
									e.placement = T(t),
									e.offsets.popper = g(i),
									e
							}
					},
					hide: {
							order: 800,
							enabled: !0,
							fn: function(e) {
									if (!q(e.instance.modifiers, 'hide', 'preventOverflow'))
											return e;
									var t = e.offsets.reference
										, o = D(e.instance.modifiers, function(e) {
											return 'preventOverflow' === e.name
									}).boundaries;
									if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
											if (!0 === e.hide)
													return e;
											e.hide = !0,
											e.attributes['x-out-of-boundaries'] = ''
									} else {
											if (!1 === e.hide)
													return e;
											e.hide = !1,
											e.attributes['x-out-of-boundaries'] = !1
									}
									return e
							}
					},
					computeStyle: {
							order: 850,
							enabled: !0,
							fn: function(e, t) {
									var o = t.x
										, n = t.y
										, i = e.offsets.popper
										, r = D(e.instance.modifiers, function(e) {
											return 'applyStyle' === e.name
									}).gpuAcceleration;
									void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
									var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
											position: i.position
									}, h = {
											left: Z(i.left),
											top: Q(i.top),
											bottom: Q(i.bottom),
											right: Z(i.right)
									}, c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
									if (d = 'bottom' == c ? -f.height + h.bottom : h.top,
									s = 'right' == g ? -f.width + h.right : h.left,
									a && b)
											m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
											m[c] = 0,
											m[g] = 0,
											m.willChange = 'transform';
									else {
											var y = 'bottom' == c ? -1 : 1
												, w = 'right' == g ? -1 : 1;
											m[c] = d * y,
											m[g] = s * w,
											m.willChange = c + ', ' + g
									}
									var E = {
											"x-placement": e.placement
									};
									return e.attributes = le({}, E, e.attributes),
									e.styles = le({}, m, e.styles),
									e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
									e
							},
							gpuAcceleration: !0,
							x: 'bottom',
							y: 'right'
					},
					applyStyle: {
							order: 900,
							enabled: !0,
							fn: function(e) {
									return j(e.instance.popper, e.styles),
									K(e.instance.popper, e.attributes),
									e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles),
									e
							},
							onLoad: function(e, t, o, n, i) {
									var r = L(i, t, e, o.positionFixed)
										, p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
									return t.setAttribute('x-placement', p),
									j(t, {
											position: o.positionFixed ? 'fixed' : 'absolute'
									}),
									o
							},
							gpuAcceleration: void 0
					}
			}
	},
	ce
});
/* End */
;;/* Start:"a:4:{s:4:"full";s:58:"/local/templates/nspcc/js/bootstrap.min.js?166601691851039";s:6:"source";s:42:"/local/templates/nspcc/js/bootstrap.min.js";s:3:"min";s:42:"/local/templates/nspcc/js/bootstrap.min.js";s:3:"map";s:46:"/local/templates/nspcc/js/bootstrap.min.js.map";}"*/
/*!
* Bootstrap v4.1.3 (https://getbootstrap.com/)
* Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/
!function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, h) {
	"use strict";
	function i(t, e) {
			for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1,
					i.configurable = !0,
					"value"in i && (i.writable = !0),
					Object.defineProperty(t, i.key, i)
			}
	}
	function s(t, e, n) {
			return e && i(t.prototype, e),
			n && i(t, n),
			t
	}
	function l(r) {
			for (var t = 1; t < arguments.length; t++) {
					var o = null != arguments[t] ? arguments[t] : {}
						, e = Object.keys(o);
					"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
							return Object.getOwnPropertyDescriptor(o, t).enumerable
					}))),
					e.forEach(function(t) {
							var e, n, i;
							e = r,
							i = o[n = t],
							n in e ? Object.defineProperty(e, n, {
									value: i,
									enumerable: !0,
									configurable: !0,
									writable: !0
							}) : e[n] = i
					})
			}
			return r
	}
	e = e && e.hasOwnProperty("default") ? e.default : e,
	h = h && h.hasOwnProperty("default") ? h.default : h;
	var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function(i) {
			var e = "transitionend";
			function t(t) {
					var e = this
						, n = !1;
					return i(this).one(l.TRANSITION_END, function() {
							n = !0
					}),
					setTimeout(function() {
							n || l.triggerTransitionEnd(e)
					}, t),
					this
			}
			var l = {
					TRANSITION_END: "bsTransitionEnd",
					getUID: function(t) {
							for (; t += ~~(1e6 * Math.random()),
							document.getElementById(t); )
									;
							return t
					},
					getSelectorFromElement: function(t) {
							var e = t.getAttribute("data-target");
							e && "#" !== e || (e = t.getAttribute("href") || "");
							try {
									return document.querySelector(e) ? e : null
							} catch (t) {
									return null
							}
					},
					getTransitionDurationFromElement: function(t) {
							if (!t)
									return 0;
							var e = i(t).css("transition-duration");
							return parseFloat(e) ? (e = e.split(",")[0],
							1e3 * parseFloat(e)) : 0
					},
					reflow: function(t) {
							return t.offsetHeight
					},
					triggerTransitionEnd: function(t) {
							i(t).trigger(e)
					},
					supportsTransitionEnd: function() {
							return Boolean(e)
					},
					isElement: function(t) {
							return (t[0] || t).nodeType
					},
					typeCheckConfig: function(t, e, n) {
							for (var i in n)
									if (Object.prototype.hasOwnProperty.call(n, i)) {
											var r = n[i]
												, o = e[i]
												, s = o && l.isElement(o) ? "element" : (a = o,
											{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
											if (!new RegExp(r).test(s))
													throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
									}
							var a
					}
			};
			return i.fn.emulateTransitionEnd = t,
			i.event.special[l.TRANSITION_END] = {
					bindType: e,
					delegateType: e,
					handle: function(t) {
							if (i(t.target).is(this))
									return t.handleObj.handler.apply(this, arguments)
					}
			},
			l
	}(e), Kn = (n = "alert",
	a = "." + (o = "bs.alert"),
	c = (r = e).fn[n],
	u = {
			CLOSE: "close" + a,
			CLOSED: "closed" + a,
			CLICK_DATA_API: "click" + a + ".data-api"
	},
	f = "alert",
	d = "fade",
	g = "show",
	_ = function() {
			function i(t) {
					this._element = t
			}
			var t = i.prototype;
			return t.close = function(t) {
					var e = this._element;
					t && (e = this._getRootElement(t)),
					this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
			}
			,
			t.dispose = function() {
					r.removeData(this._element, o),
					this._element = null
			}
			,
			t._getRootElement = function(t) {
					var e = Fn.getSelectorFromElement(t)
						, n = !1;
					return e && (n = document.querySelector(e)),
					n || (n = r(t).closest("." + f)[0]),
					n
			}
			,
			t._triggerCloseEvent = function(t) {
					var e = r.Event(u.CLOSE);
					return r(t).trigger(e),
					e
			}
			,
			t._removeElement = function(e) {
					var n = this;
					if (r(e).removeClass(g),
					r(e).hasClass(d)) {
							var t = Fn.getTransitionDurationFromElement(e);
							r(e).one(Fn.TRANSITION_END, function(t) {
									return n._destroyElement(e, t)
							}).emulateTransitionEnd(t)
					} else
							this._destroyElement(e)
			}
			,
			t._destroyElement = function(t) {
					r(t).detach().trigger(u.CLOSED).remove()
			}
			,
			i._jQueryInterface = function(n) {
					return this.each(function() {
							var t = r(this)
								, e = t.data(o);
							e || (e = new i(this),
							t.data(o, e)),
							"close" === n && e[n](this)
					})
			}
			,
			i._handleDismiss = function(e) {
					return function(t) {
							t && t.preventDefault(),
							e.close(this)
					}
			}
			,
			s(i, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}]),
			i
	}(),
	r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)),
	r.fn[n] = _._jQueryInterface,
	r.fn[n].Constructor = _,
	r.fn[n].noConflict = function() {
			return r.fn[n] = c,
			_._jQueryInterface
	}
	,
	_), Mn = (p = "button",
	y = "." + (v = "bs.button"),
	E = ".data-api",
	C = (m = e).fn[p],
	T = "active",
	b = "btn",
	I = '[data-toggle^="button"]',
	A = '[data-toggle="buttons"]',
	D = "input",
	w = ".active",
	N = ".btn",
	O = {
			CLICK_DATA_API: "click" + y + E,
			FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E
	},
	k = function() {
			function n(t) {
					this._element = t
			}
			var t = n.prototype;
			return t.toggle = function() {
					var t = !0
						, e = !0
						, n = m(this._element).closest(A)[0];
					if (n) {
							var i = this._element.querySelector(D);
							if (i) {
									if ("radio" === i.type)
											if (i.checked && this._element.classList.contains(T))
													t = !1;
											else {
													var r = n.querySelector(w);
													r && m(r).removeClass(T)
											}
									if (t) {
											if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
													return;
											i.checked = !this._element.classList.contains(T),
											m(i).trigger("change")
									}
									i.focus(),
									e = !1
							}
					}
					e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)),
					t && m(this._element).toggleClass(T)
			}
			,
			t.dispose = function() {
					m.removeData(this._element, v),
					this._element = null
			}
			,
			n._jQueryInterface = function(e) {
					return this.each(function() {
							var t = m(this).data(v);
							t || (t = new n(this),
							m(this).data(v, t)),
							"toggle" === e && t[e]()
					})
			}
			,
			s(n, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}]),
			n
	}(),
	m(document).on(O.CLICK_DATA_API, I, function(t) {
			t.preventDefault();
			var e = t.target;
			m(e).hasClass(b) || (e = m(e).closest(N)),
			k._jQueryInterface.call(m(e), "toggle")
	}).on(O.FOCUS_BLUR_DATA_API, I, function(t) {
			var e = m(t.target).closest(N)[0];
			m(e).toggleClass(S, /^focus(in)?$/.test(t.type))
	}),
	m.fn[p] = k._jQueryInterface,
	m.fn[p].Constructor = k,
	m.fn[p].noConflict = function() {
			return m.fn[p] = C,
			k._jQueryInterface
	}
	,
	k), Qn = (j = "carousel",
	L = "." + (H = "bs.carousel"),
	R = ".data-api",
	x = (P = e).fn[j],
	W = {
			interval: 5e3,
			keyboard: !0,
			slide: !1,
			pause: "hover",
			wrap: !0
	},
	U = {
			interval: "(number|boolean)",
			keyboard: "boolean",
			slide: "(boolean|string)",
			pause: "(string|boolean)",
			wrap: "boolean"
	},
	q = "next",
	F = "prev",
	K = "left",
	M = "right",
	Q = {
			SLIDE: "slide" + L,
			SLID: "slid" + L,
			KEYDOWN: "keydown" + L,
			MOUSEENTER: "mouseenter" + L,
			MOUSELEAVE: "mouseleave" + L,
			TOUCHEND: "touchend" + L,
			LOAD_DATA_API: "load" + L + R,
			CLICK_DATA_API: "click" + L + R
	},
	B = "carousel",
	V = "active",
	Y = "slide",
	z = "carousel-item-right",
	J = "carousel-item-left",
	Z = "carousel-item-next",
	G = "carousel-item-prev",
	$ = ".active",
	X = ".active.carousel-item",
	tt = ".carousel-item",
	et = ".carousel-item-next, .carousel-item-prev",
	nt = ".carousel-indicators",
	it = "[data-slide], [data-slide-to]",
	rt = '[data-ride="carousel"]',
	ot = function() {
			function o(t, e) {
					this._items = null,
					this._interval = null,
					this._activeElement = null,
					this._isPaused = !1,
					this._isSliding = !1,
					this.touchTimeout = null,
					this._config = this._getConfig(e),
					this._element = P(t)[0],
					this._indicatorsElement = this._element.querySelector(nt),
					this._addEventListeners()
			}
			var t = o.prototype;
			return t.next = function() {
					this._isSliding || this._slide(q)
			}
			,
			t.nextWhenVisible = function() {
					!document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
			}
			,
			t.prev = function() {
					this._isSliding || this._slide(F)
			}
			,
			t.pause = function(t) {
					t || (this._isPaused = !0),
					this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element),
					this.cycle(!0)),
					clearInterval(this._interval),
					this._interval = null
			}
			,
			t.cycle = function(t) {
					t || (this._isPaused = !1),
					this._interval && (clearInterval(this._interval),
					this._interval = null),
					this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
			}
			,
			t.to = function(t) {
					var e = this;
					this._activeElement = this._element.querySelector(X);
					var n = this._getItemIndex(this._activeElement);
					if (!(t > this._items.length - 1 || t < 0))
							if (this._isSliding)
									P(this._element).one(Q.SLID, function() {
											return e.to(t)
									});
							else {
									if (n === t)
											return this.pause(),
											void this.cycle();
									var i = n < t ? q : F;
									this._slide(i, this._items[t])
							}
			}
			,
			t.dispose = function() {
					P(this._element).off(L),
					P.removeData(this._element, H),
					this._items = null,
					this._config = null,
					this._element = null,
					this._interval = null,
					this._isPaused = null,
					this._isSliding = null,
					this._activeElement = null,
					this._indicatorsElement = null
			}
			,
			t._getConfig = function(t) {
					return t = l({}, W, t),
					Fn.typeCheckConfig(j, t, U),
					t
			}
			,
			t._addEventListeners = function() {
					var e = this;
					this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) {
							return e._keydown(t)
					}),
					"hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) {
							return e.pause(t)
					}).on(Q.MOUSELEAVE, function(t) {
							return e.cycle(t)
					}),
					"ontouchstart"in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
							e.pause(),
							e.touchTimeout && clearTimeout(e.touchTimeout),
							e.touchTimeout = setTimeout(function(t) {
									return e.cycle(t)
							}, 500 + e._config.interval)
					}))
			}
			,
			t._keydown = function(t) {
					if (!/input|textarea/i.test(t.target.tagName))
							switch (t.which) {
							case 37:
									t.preventDefault(),
									this.prev();
									break;
							case 39:
									t.preventDefault(),
									this.next()
							}
			}
			,
			t._getItemIndex = function(t) {
					return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [],
					this._items.indexOf(t)
			}
			,
			t._getItemByDirection = function(t, e) {
					var n = t === q
						, i = t === F
						, r = this._getItemIndex(e)
						, o = this._items.length - 1;
					if ((i && 0 === r || n && r === o) && !this._config.wrap)
							return e;
					var s = (r + (t === F ? -1 : 1)) % this._items.length;
					return -1 === s ? this._items[this._items.length - 1] : this._items[s]
			}
			,
			t._triggerSlideEvent = function(t, e) {
					var n = this._getItemIndex(t)
						, i = this._getItemIndex(this._element.querySelector(X))
						, r = P.Event(Q.SLIDE, {
							relatedTarget: t,
							direction: e,
							from: i,
							to: n
					});
					return P(this._element).trigger(r),
					r
			}
			,
			t._setActiveIndicatorElement = function(t) {
					if (this._indicatorsElement) {
							var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
							P(e).removeClass(V);
							var n = this._indicatorsElement.children[this._getItemIndex(t)];
							n && P(n).addClass(V)
					}
			}
			,
			t._slide = function(t, e) {
					var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
					if (t === q ? (n = J,
					i = Z,
					r = K) : (n = z,
					i = G,
					r = M),
					l && P(l).hasClass(V))
							this._isSliding = !1;
					else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
							this._isSliding = !0,
							h && this.pause(),
							this._setActiveIndicatorElement(l);
							var u = P.Event(Q.SLID, {
									relatedTarget: l,
									direction: r,
									from: a,
									to: c
							});
							if (P(this._element).hasClass(Y)) {
									P(l).addClass(i),
									Fn.reflow(l),
									P(s).addClass(n),
									P(l).addClass(n);
									var f = Fn.getTransitionDurationFromElement(s);
									P(s).one(Fn.TRANSITION_END, function() {
											P(l).removeClass(n + " " + i).addClass(V),
											P(s).removeClass(V + " " + i + " " + n),
											o._isSliding = !1,
											setTimeout(function() {
													return P(o._element).trigger(u)
											}, 0)
									}).emulateTransitionEnd(f)
							} else
									P(s).removeClass(V),
									P(l).addClass(V),
									this._isSliding = !1,
									P(this._element).trigger(u);
							h && this.cycle()
					}
			}
			,
			o._jQueryInterface = function(i) {
					return this.each(function() {
							var t = P(this).data(H)
								, e = l({}, W, P(this).data());
							"object" == typeof i && (e = l({}, e, i));
							var n = "string" == typeof i ? i : e.slide;
							if (t || (t = new o(this,e),
							P(this).data(H, t)),
							"number" == typeof i)
									t.to(i);
							else if ("string" == typeof n) {
									if ("undefined" == typeof t[n])
											throw new TypeError('No method named "' + n + '"');
									t[n]()
							} else
									e.interval && (t.pause(),
									t.cycle())
					})
			}
			,
			o._dataApiClickHandler = function(t) {
					var e = Fn.getSelectorFromElement(this);
					if (e) {
							var n = P(e)[0];
							if (n && P(n).hasClass(B)) {
									var i = l({}, P(n).data(), P(this).data())
										, r = this.getAttribute("data-slide-to");
									r && (i.interval = !1),
									o._jQueryInterface.call(P(n), i),
									r && P(n).data(H).to(r),
									t.preventDefault()
							}
					}
			}
			,
			s(o, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return W
					}
			}]),
			o
	}(),
	P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler),
	P(window).on(Q.LOAD_DATA_API, function() {
			for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
					var i = P(t[e]);
					ot._jQueryInterface.call(i, i.data())
			}
	}),
	P.fn[j] = ot._jQueryInterface,
	P.fn[j].Constructor = ot,
	P.fn[j].noConflict = function() {
			return P.fn[j] = x,
			ot._jQueryInterface
	}
	,
	ot), Bn = (at = "collapse",
	ct = "." + (lt = "bs.collapse"),
	ht = (st = e).fn[at],
	ut = {
			toggle: !0,
			parent: ""
	},
	ft = {
			toggle: "boolean",
			parent: "(string|element)"
	},
	dt = {
			SHOW: "show" + ct,
			SHOWN: "shown" + ct,
			HIDE: "hide" + ct,
			HIDDEN: "hidden" + ct,
			CLICK_DATA_API: "click" + ct + ".data-api"
	},
	gt = "show",
	_t = "collapse",
	mt = "collapsing",
	pt = "collapsed",
	vt = "width",
	yt = "height",
	Et = ".show, .collapsing",
	Ct = '[data-toggle="collapse"]',
	Tt = function() {
			function a(e, t) {
					this._isTransitioning = !1,
					this._element = e,
					this._config = this._getConfig(t),
					this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
					for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
							var o = n[i]
								, s = Fn.getSelectorFromElement(o)
								, a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
									return t === e
							});
							null !== s && 0 < a.length && (this._selector = s,
							this._triggerArray.push(o))
					}
					this._parent = this._config.parent ? this._getParent() : null,
					this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
					this._config.toggle && this.toggle()
			}
			var t = a.prototype;
			return t.toggle = function() {
					st(this._element).hasClass(gt) ? this.hide() : this.show()
			}
			,
			t.show = function() {
					var t, e, n = this;
					if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t) {
							return t.getAttribute("data-parent") === n._config.parent
					})).length && (t = null),
					!(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
							var i = st.Event(dt.SHOW);
							if (st(this._element).trigger(i),
							!i.isDefaultPrevented()) {
									t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"),
									e || st(t).data(lt, null));
									var r = this._getDimension();
									st(this._element).removeClass(_t).addClass(mt),
									this._element.style[r] = 0,
									this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0),
									this.setTransitioning(!0);
									var o = "scroll" + (r[0].toUpperCase() + r.slice(1))
										, s = Fn.getTransitionDurationFromElement(this._element);
									st(this._element).one(Fn.TRANSITION_END, function() {
											st(n._element).removeClass(mt).addClass(_t).addClass(gt),
											n._element.style[r] = "",
											n.setTransitioning(!1),
											st(n._element).trigger(dt.SHOWN)
									}).emulateTransitionEnd(s),
									this._element.style[r] = this._element[o] + "px"
							}
					}
			}
			,
			t.hide = function() {
					var t = this;
					if (!this._isTransitioning && st(this._element).hasClass(gt)) {
							var e = st.Event(dt.HIDE);
							if (st(this._element).trigger(e),
							!e.isDefaultPrevented()) {
									var n = this._getDimension();
									this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
									Fn.reflow(this._element),
									st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
									var i = this._triggerArray.length;
									if (0 < i)
											for (var r = 0; r < i; r++) {
													var o = this._triggerArray[r]
														, s = Fn.getSelectorFromElement(o);
													if (null !== s)
															st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1)
											}
									this.setTransitioning(!0);
									this._element.style[n] = "";
									var a = Fn.getTransitionDurationFromElement(this._element);
									st(this._element).one(Fn.TRANSITION_END, function() {
											t.setTransitioning(!1),
											st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)
									}).emulateTransitionEnd(a)
							}
					}
			}
			,
			t.setTransitioning = function(t) {
					this._isTransitioning = t
			}
			,
			t.dispose = function() {
					st.removeData(this._element, lt),
					this._config = null,
					this._parent = null,
					this._element = null,
					this._triggerArray = null,
					this._isTransitioning = null
			}
			,
			t._getConfig = function(t) {
					return (t = l({}, ut, t)).toggle = Boolean(t.toggle),
					Fn.typeCheckConfig(at, t, ft),
					t
			}
			,
			t._getDimension = function() {
					return st(this._element).hasClass(vt) ? vt : yt
			}
			,
			t._getParent = function() {
					var n = this
						, t = null;
					Fn.isElement(this._config.parent) ? (t = this._config.parent,
					"undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
					var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
						, i = [].slice.call(t.querySelectorAll(e));
					return st(i).each(function(t, e) {
							n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
					}),
					t
			}
			,
			t._addAriaAndCollapsedClass = function(t, e) {
					if (t) {
							var n = st(t).hasClass(gt);
							e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n)
					}
			}
			,
			a._getTargetFromElement = function(t) {
					var e = Fn.getSelectorFromElement(t);
					return e ? document.querySelector(e) : null
			}
			,
			a._jQueryInterface = function(i) {
					return this.each(function() {
							var t = st(this)
								, e = t.data(lt)
								, n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
							if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
							e || (e = new a(this,n),
							t.data(lt, e)),
							"string" == typeof i) {
									if ("undefined" == typeof e[i])
											throw new TypeError('No method named "' + i + '"');
									e[i]()
							}
					})
			}
			,
			s(a, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return ut
					}
			}]),
			a
	}(),
	st(document).on(dt.CLICK_DATA_API, Ct, function(t) {
			"A" === t.currentTarget.tagName && t.preventDefault();
			var n = st(this)
				, e = Fn.getSelectorFromElement(this)
				, i = [].slice.call(document.querySelectorAll(e));
			st(i).each(function() {
					var t = st(this)
						, e = t.data(lt) ? "toggle" : n.data();
					Tt._jQueryInterface.call(t, e)
			})
	}),
	st.fn[at] = Tt._jQueryInterface,
	st.fn[at].Constructor = Tt,
	st.fn[at].noConflict = function() {
			return st.fn[at] = ht,
			Tt._jQueryInterface
	}
	,
	Tt), Vn = (St = "dropdown",
	At = "." + (It = "bs.dropdown"),
	Dt = ".data-api",
	wt = (bt = e).fn[St],
	Nt = new RegExp("38|40|27"),
	Ot = {
			HIDE: "hide" + At,
			HIDDEN: "hidden" + At,
			SHOW: "show" + At,
			SHOWN: "shown" + At,
			CLICK: "click" + At,
			CLICK_DATA_API: "click" + At + Dt,
			KEYDOWN_DATA_API: "keydown" + At + Dt,
			KEYUP_DATA_API: "keyup" + At + Dt
	},
	kt = "disabled",
	Pt = "show",
	jt = "dropup",
	Ht = "dropright",
	Lt = "dropleft",
	Rt = "dropdown-menu-right",
	xt = "position-static",
	Wt = '[data-toggle="dropdown"]',
	Ut = ".dropdown form",
	qt = ".dropdown-menu",
	Ft = ".navbar-nav",
	Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
	Mt = "top-start",
	Qt = "top-end",
	Bt = "bottom-start",
	Vt = "bottom-end",
	Yt = "right-start",
	zt = "left-start",
	Jt = {
			offset: 0,
			flip: !0,
			boundary: "scrollParent",
			reference: "toggle",
			display: "dynamic"
	},
	Zt = {
			offset: "(number|string|function)",
			flip: "boolean",
			boundary: "(string|element)",
			reference: "(string|element)",
			display: "string"
	},
	Gt = function() {
			function c(t, e) {
					this._element = t,
					this._popper = null,
					this._config = this._getConfig(e),
					this._menu = this._getMenuElement(),
					this._inNavbar = this._detectNavbar(),
					this._addEventListeners()
			}
			var t = c.prototype;
			return t.toggle = function() {
					if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
							var t = c._getParentFromElement(this._element)
								, e = bt(this._menu).hasClass(Pt);
							if (c._clearMenus(),
							!e) {
									var n = {
											relatedTarget: this._element
									}
										, i = bt.Event(Ot.SHOW, n);
									if (bt(t).trigger(i),
									!i.isDefaultPrevented()) {
											if (!this._inNavbar) {
													if ("undefined" == typeof h)
															throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
													var r = this._element;
													"parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference,
													"undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])),
													"scrollParent" !== this._config.boundary && bt(t).addClass(xt),
													this._popper = new h(r,this._menu,this._getPopperConfig())
											}
											"ontouchstart"in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop),
											this._element.focus(),
											this._element.setAttribute("aria-expanded", !0),
											bt(this._menu).toggleClass(Pt),
											bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n))
									}
							}
					}
			}
			,
			t.dispose = function() {
					bt.removeData(this._element, It),
					bt(this._element).off(At),
					this._element = null,
					(this._menu = null) !== this._popper && (this._popper.destroy(),
					this._popper = null)
			}
			,
			t.update = function() {
					this._inNavbar = this._detectNavbar(),
					null !== this._popper && this._popper.scheduleUpdate()
			}
			,
			t._addEventListeners = function() {
					var e = this;
					bt(this._element).on(Ot.CLICK, function(t) {
							t.preventDefault(),
							t.stopPropagation(),
							e.toggle()
					})
			}
			,
			t._getConfig = function(t) {
					return t = l({}, this.constructor.Default, bt(this._element).data(), t),
					Fn.typeCheckConfig(St, t, this.constructor.DefaultType),
					t
			}
			,
			t._getMenuElement = function() {
					if (!this._menu) {
							var t = c._getParentFromElement(this._element);
							t && (this._menu = t.querySelector(qt))
					}
					return this._menu
			}
			,
			t._getPlacement = function() {
					var t = bt(this._element.parentNode)
						, e = Bt;
					return t.hasClass(jt) ? (e = Mt,
					bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt),
					e
			}
			,
			t._detectNavbar = function() {
					return 0 < bt(this._element).closest(".navbar").length
			}
			,
			t._getPopperConfig = function() {
					var e = this
						, t = {};
					"function" == typeof this._config.offset ? t.fn = function(t) {
							return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}),
							t
					}
					: t.offset = this._config.offset;
					var n = {
							placement: this._getPlacement(),
							modifiers: {
									offset: t,
									flip: {
											enabled: this._config.flip
									},
									preventOverflow: {
											boundariesElement: this._config.boundary
									}
							}
					};
					return "static" === this._config.display && (n.modifiers.applyStyle = {
							enabled: !1
					}),
					n
			}
			,
			c._jQueryInterface = function(e) {
					return this.each(function() {
							var t = bt(this).data(It);
							if (t || (t = new c(this,"object" == typeof e ? e : null),
							bt(this).data(It, t)),
							"string" == typeof e) {
									if ("undefined" == typeof t[e])
											throw new TypeError('No method named "' + e + '"');
									t[e]()
							}
					})
			}
			,
			c._clearMenus = function(t) {
					if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
							for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
									var r = c._getParentFromElement(e[n])
										, o = bt(e[n]).data(It)
										, s = {
											relatedTarget: e[n]
									};
									if (t && "click" === t.type && (s.clickEvent = t),
									o) {
											var a = o._menu;
											if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
													var l = bt.Event(Ot.HIDE, s);
													bt(r).trigger(l),
													l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop),
													e[n].setAttribute("aria-expanded", "false"),
													bt(a).removeClass(Pt),
													bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)))
											}
									}
							}
			}
			,
			c._getParentFromElement = function(t) {
					var e, n = Fn.getSelectorFromElement(t);
					return n && (e = document.querySelector(n)),
					e || t.parentNode
			}
			,
			c._dataApiKeydownHandler = function(t) {
					if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(),
					t.stopPropagation(),
					!this.disabled && !bt(this).hasClass(kt))) {
							var e = c._getParentFromElement(this)
								, n = bt(e).hasClass(Pt);
							if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
									var i = [].slice.call(e.querySelectorAll(Kt));
									if (0 !== i.length) {
											var r = i.indexOf(t.target);
											38 === t.which && 0 < r && r--,
											40 === t.which && r < i.length - 1 && r++,
											r < 0 && (r = 0),
											i[r].focus()
									}
							} else {
									if (27 === t.which) {
											var o = e.querySelector(Wt);
											bt(o).trigger("focus")
									}
									bt(this).trigger("click")
							}
					}
			}
			,
			s(c, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return Jt
					}
			}, {
					key: "DefaultType",
					get: function() {
							return Zt
					}
			}]),
			c
	}(),
	bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function(t) {
			t.preventDefault(),
			t.stopPropagation(),
			Gt._jQueryInterface.call(bt(this), "toggle")
	}).on(Ot.CLICK_DATA_API, Ut, function(t) {
			t.stopPropagation()
	}),
	bt.fn[St] = Gt._jQueryInterface,
	bt.fn[St].Constructor = Gt,
	bt.fn[St].noConflict = function() {
			return bt.fn[St] = wt,
			Gt._jQueryInterface
	}
	,
	Gt), Yn = (Xt = "modal",
	ee = "." + (te = "bs.modal"),
	ne = ($t = e).fn[Xt],
	ie = {
			backdrop: !0,
			keyboard: !0,
			focus: !0,
			show: !0
	},
	re = {
			backdrop: "(boolean|string)",
			keyboard: "boolean",
			focus: "boolean",
			show: "boolean"
	},
	oe = {
			HIDE: "hide" + ee,
			HIDDEN: "hidden" + ee,
			SHOW: "show" + ee,
			SHOWN: "shown" + ee,
			FOCUSIN: "focusin" + ee,
			RESIZE: "resize" + ee,
			CLICK_DISMISS: "click.dismiss" + ee,
			KEYDOWN_DISMISS: "keydown.dismiss" + ee,
			MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
			MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
			CLICK_DATA_API: "click" + ee + ".data-api"
	},
	se = "modal-scrollbar-measure",
	ae = "modal-backdrop",
	le = "modal-open",
	ce = "fade",
	he = "show",
	ue = ".modal-dialog",
	fe = '[data-toggle="modal"]',
	de = '[data-dismiss="modal"]',
	ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
	_e = ".sticky-top",
	me = function() {
			function r(t, e) {
					this._config = this._getConfig(e),
					this._element = t,
					this._dialog = t.querySelector(ue),
					this._backdrop = null,
					this._isShown = !1,
					this._isBodyOverflowing = !1,
					this._ignoreBackdropClick = !1,
					this._scrollbarWidth = 0
			}
			var t = r.prototype;
			return t.toggle = function(t) {
					return this._isShown ? this.hide() : this.show(t)
			}
			,
			t.show = function(t) {
					var e = this;
					if (!this._isTransitioning && !this._isShown) {
							$t(this._element).hasClass(ce) && (this._isTransitioning = !0);
							var n = $t.Event(oe.SHOW, {
									relatedTarget: t
							});
							$t(this._element).trigger(n),
							this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
							this._checkScrollbar(),
							this._setScrollbar(),
							this._adjustDialog(),
							$t(document.body).addClass(le),
							this._setEscapeEvent(),
							this._setResizeEvent(),
							$t(this._element).on(oe.CLICK_DISMISS, de, function(t) {
									return e.hide(t)
							}),
							$t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
									$t(e._element).one(oe.MOUSEUP_DISMISS, function(t) {
											$t(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
									})
							}),
							this._showBackdrop(function() {
									return e._showElement(t)
							}))
					}
			}
			,
			t.hide = function(t) {
					var e = this;
					if (t && t.preventDefault(),
					!this._isTransitioning && this._isShown) {
							var n = $t.Event(oe.HIDE);
							if ($t(this._element).trigger(n),
							this._isShown && !n.isDefaultPrevented()) {
									this._isShown = !1;
									var i = $t(this._element).hasClass(ce);
									if (i && (this._isTransitioning = !0),
									this._setEscapeEvent(),
									this._setResizeEvent(),
									$t(document).off(oe.FOCUSIN),
									$t(this._element).removeClass(he),
									$t(this._element).off(oe.CLICK_DISMISS),
									$t(this._dialog).off(oe.MOUSEDOWN_DISMISS),
									i) {
											var r = Fn.getTransitionDurationFromElement(this._element);
											$t(this._element).one(Fn.TRANSITION_END, function(t) {
													return e._hideModal(t)
											}).emulateTransitionEnd(r)
									} else
											this._hideModal()
							}
					}
			}
			,
			t.dispose = function() {
					$t.removeData(this._element, te),
					$t(window, document, this._element, this._backdrop).off(ee),
					this._config = null,
					this._element = null,
					this._dialog = null,
					this._backdrop = null,
					this._isShown = null,
					this._isBodyOverflowing = null,
					this._ignoreBackdropClick = null,
					this._scrollbarWidth = null
			}
			,
			t.handleUpdate = function() {
					this._adjustDialog()
			}
			,
			t._getConfig = function(t) {
					return t = l({}, ie, t),
					Fn.typeCheckConfig(Xt, t, re),
					t
			}
			,
			t._showElement = function(t) {
					var e = this
						, n = $t(this._element).hasClass(ce);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
					this._element.style.display = "block",
					this._element.removeAttribute("aria-hidden"),
					this._element.scrollTop = 0,
					n && Fn.reflow(this._element),
					$t(this._element).addClass(he),
					this._config.focus && this._enforceFocus();
					var i = $t.Event(oe.SHOWN, {
							relatedTarget: t
					})
						, r = function() {
							e._config.focus && e._element.focus(),
							e._isTransitioning = !1,
							$t(e._element).trigger(i)
					};
					if (n) {
							var o = Fn.getTransitionDurationFromElement(this._element);
							$t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
					} else
							r()
			}
			,
			t._enforceFocus = function() {
					var e = this;
					$t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function(t) {
							document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus()
					})
			}
			,
			t._setEscapeEvent = function() {
					var e = this;
					this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function(t) {
							27 === t.which && (t.preventDefault(),
							e.hide())
					}) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS)
			}
			,
			t._setResizeEvent = function() {
					var e = this;
					this._isShown ? $t(window).on(oe.RESIZE, function(t) {
							return e.handleUpdate(t)
					}) : $t(window).off(oe.RESIZE)
			}
			,
			t._hideModal = function() {
					var t = this;
					this._element.style.display = "none",
					this._element.setAttribute("aria-hidden", !0),
					this._isTransitioning = !1,
					this._showBackdrop(function() {
							$t(document.body).removeClass(le),
							t._resetAdjustments(),
							t._resetScrollbar(),
							$t(t._element).trigger(oe.HIDDEN)
					})
			}
			,
			t._removeBackdrop = function() {
					this._backdrop && ($t(this._backdrop).remove(),
					this._backdrop = null)
			}
			,
			t._showBackdrop = function(t) {
					var e = this
						, n = $t(this._element).hasClass(ce) ? ce : "";
					if (this._isShown && this._config.backdrop) {
							if (this._backdrop = document.createElement("div"),
							this._backdrop.className = ae,
							n && this._backdrop.classList.add(n),
							$t(this._backdrop).appendTo(document.body),
							$t(this._element).on(oe.CLICK_DISMISS, function(t) {
									e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
							}),
							n && Fn.reflow(this._backdrop),
							$t(this._backdrop).addClass(he),
							!t)
									return;
							if (!n)
									return void t();
							var i = Fn.getTransitionDurationFromElement(this._backdrop);
							$t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i)
					} else if (!this._isShown && this._backdrop) {
							$t(this._backdrop).removeClass(he);
							var r = function() {
									e._removeBackdrop(),
									t && t()
							};
							if ($t(this._element).hasClass(ce)) {
									var o = Fn.getTransitionDurationFromElement(this._backdrop);
									$t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
							} else
									r()
					} else
							t && t()
			}
			,
			t._adjustDialog = function() {
					var t = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
					this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
			}
			,
			t._resetAdjustments = function() {
					this._element.style.paddingLeft = "",
					this._element.style.paddingRight = ""
			}
			,
			t._checkScrollbar = function() {
					var t = document.body.getBoundingClientRect();
					this._isBodyOverflowing = t.left + t.right < window.innerWidth,
					this._scrollbarWidth = this._getScrollbarWidth()
			}
			,
			t._setScrollbar = function() {
					var r = this;
					if (this._isBodyOverflowing) {
							var t = [].slice.call(document.querySelectorAll(ge))
								, e = [].slice.call(document.querySelectorAll(_e));
							$t(t).each(function(t, e) {
									var n = e.style.paddingRight
										, i = $t(e).css("padding-right");
									$t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
							}),
							$t(e).each(function(t, e) {
									var n = e.style.marginRight
										, i = $t(e).css("margin-right");
									$t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
							});
							var n = document.body.style.paddingRight
								, i = $t(document.body).css("padding-right");
							$t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
					}
			}
			,
			t._resetScrollbar = function() {
					var t = [].slice.call(document.querySelectorAll(ge));
					$t(t).each(function(t, e) {
							var n = $t(e).data("padding-right");
							$t(e).removeData("padding-right"),
							e.style.paddingRight = n || ""
					});
					var e = [].slice.call(document.querySelectorAll("" + _e));
					$t(e).each(function(t, e) {
							var n = $t(e).data("margin-right");
							"undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right")
					});
					var n = $t(document.body).data("padding-right");
					$t(document.body).removeData("padding-right"),
					document.body.style.paddingRight = n || ""
			}
			,
			t._getScrollbarWidth = function() {
					var t = document.createElement("div");
					t.className = se,
					document.body.appendChild(t);
					var e = t.getBoundingClientRect().width - t.clientWidth;
					return document.body.removeChild(t),
					e
			}
			,
			r._jQueryInterface = function(n, i) {
					return this.each(function() {
							var t = $t(this).data(te)
								, e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {});
							if (t || (t = new r(this,e),
							$t(this).data(te, t)),
							"string" == typeof n) {
									if ("undefined" == typeof t[n])
											throw new TypeError('No method named "' + n + '"');
									t[n](i)
							} else
									e.show && t.show(i)
					})
			}
			,
			s(r, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return ie
					}
			}]),
			r
	}(),
	$t(document).on(oe.CLICK_DATA_API, fe, function(t) {
			var e, n = this, i = Fn.getSelectorFromElement(this);
			i && (e = document.querySelector(i));
			var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());
			"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
			var o = $t(e).one(oe.SHOW, function(t) {
					t.isDefaultPrevented() || o.one(oe.HIDDEN, function() {
							$t(n).is(":visible") && n.focus()
					})
			});
			me._jQueryInterface.call($t(e), r, this)
	}),
	$t.fn[Xt] = me._jQueryInterface,
	$t.fn[Xt].Constructor = me,
	$t.fn[Xt].noConflict = function() {
			return $t.fn[Xt] = ne,
			me._jQueryInterface
	}
	,
	me), zn = (ve = "tooltip",
	Ee = "." + (ye = "bs.tooltip"),
	Ce = (pe = e).fn[ve],
	Te = "bs-tooltip",
	be = new RegExp("(^|\\s)" + Te + "\\S+","g"),
	Ae = {
			animation: !0,
			template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !(Ie = {
					AUTO: "auto",
					TOP: "top",
					RIGHT: "right",
					BOTTOM: "bottom",
					LEFT: "left"
			}),
			selector: !(Se = {
					animation: "boolean",
					template: "string",
					title: "(string|element|function)",
					trigger: "string",
					delay: "(number|object)",
					html: "boolean",
					selector: "(string|boolean)",
					placement: "(string|function)",
					offset: "(number|string)",
					container: "(string|element|boolean)",
					fallbackPlacement: "(string|array)",
					boundary: "(string|element)"
			}),
			placement: "top",
			offset: 0,
			container: !1,
			fallbackPlacement: "flip",
			boundary: "scrollParent"
	},
	we = "out",
	Ne = {
			HIDE: "hide" + Ee,
			HIDDEN: "hidden" + Ee,
			SHOW: (De = "show") + Ee,
			SHOWN: "shown" + Ee,
			INSERTED: "inserted" + Ee,
			CLICK: "click" + Ee,
			FOCUSIN: "focusin" + Ee,
			FOCUSOUT: "focusout" + Ee,
			MOUSEENTER: "mouseenter" + Ee,
			MOUSELEAVE: "mouseleave" + Ee
	},
	Oe = "fade",
	ke = "show",
	Pe = ".tooltip-inner",
	je = ".arrow",
	He = "hover",
	Le = "focus",
	Re = "click",
	xe = "manual",
	We = function() {
			function i(t, e) {
					if ("undefined" == typeof h)
							throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
					this._isEnabled = !0,
					this._timeout = 0,
					this._hoverState = "",
					this._activeTrigger = {},
					this._popper = null,
					this.element = t,
					this.config = this._getConfig(e),
					this.tip = null,
					this._setListeners()
			}
			var t = i.prototype;
			return t.enable = function() {
					this._isEnabled = !0
			}
			,
			t.disable = function() {
					this._isEnabled = !1
			}
			,
			t.toggleEnabled = function() {
					this._isEnabled = !this._isEnabled
			}
			,
			t.toggle = function(t) {
					if (this._isEnabled)
							if (t) {
									var e = this.constructor.DATA_KEY
										, n = pe(t.currentTarget).data(e);
									n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
									pe(t.currentTarget).data(e, n)),
									n._activeTrigger.click = !n._activeTrigger.click,
									n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
							} else {
									if (pe(this.getTipElement()).hasClass(ke))
											return void this._leave(null, this);
									this._enter(null, this)
							}
			}
			,
			t.dispose = function() {
					clearTimeout(this._timeout),
					pe.removeData(this.element, this.constructor.DATA_KEY),
					pe(this.element).off(this.constructor.EVENT_KEY),
					pe(this.element).closest(".modal").off("hide.bs.modal"),
					this.tip && pe(this.tip).remove(),
					this._isEnabled = null,
					this._timeout = null,
					this._hoverState = null,
					(this._activeTrigger = null) !== this._popper && this._popper.destroy(),
					this._popper = null,
					this.element = null,
					this.config = null,
					this.tip = null
			}
			,
			t.show = function() {
					var e = this;
					if ("none" === pe(this.element).css("display"))
							throw new Error("Please use show on visible elements");
					var t = pe.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
							pe(this.element).trigger(t);
							var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
							if (t.isDefaultPrevented() || !n)
									return;
							var i = this.getTipElement()
								, r = Fn.getUID(this.constructor.NAME);
							i.setAttribute("id", r),
							this.element.setAttribute("aria-describedby", r),
							this.setContent(),
							this.config.animation && pe(i).addClass(Oe);
							var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement
								, s = this._getAttachment(o);
							this.addAttachmentClass(s);
							var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);
							pe(i).data(this.constructor.DATA_KEY, this),
							pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a),
							pe(this.element).trigger(this.constructor.Event.INSERTED),
							this._popper = new h(this.element,i,{
									placement: s,
									modifiers: {
											offset: {
													offset: this.config.offset
											},
											flip: {
													behavior: this.config.fallbackPlacement
											},
											arrow: {
													element: je
											},
											preventOverflow: {
													boundariesElement: this.config.boundary
											}
									},
									onCreate: function(t) {
											t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
									},
									onUpdate: function(t) {
											e._handlePopperPlacementChange(t)
									}
							}),
							pe(i).addClass(ke),
							"ontouchstart"in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
							var l = function() {
									e.config.animation && e._fixTransition();
									var t = e._hoverState;
									e._hoverState = null,
									pe(e.element).trigger(e.constructor.Event.SHOWN),
									t === we && e._leave(null, e)
							};
							if (pe(this.tip).hasClass(Oe)) {
									var c = Fn.getTransitionDurationFromElement(this.tip);
									pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c)
							} else
									l()
					}
			}
			,
			t.hide = function(t) {
					var e = this
						, n = this.getTipElement()
						, i = pe.Event(this.constructor.Event.HIDE)
						, r = function() {
							e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n),
							e._cleanTipClass(),
							e.element.removeAttribute("aria-describedby"),
							pe(e.element).trigger(e.constructor.Event.HIDDEN),
							null !== e._popper && e._popper.destroy(),
							t && t()
					};
					if (pe(this.element).trigger(i),
					!i.isDefaultPrevented()) {
							if (pe(n).removeClass(ke),
							"ontouchstart"in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop),
							this._activeTrigger[Re] = !1,
							this._activeTrigger[Le] = !1,
							this._activeTrigger[He] = !1,
							pe(this.tip).hasClass(Oe)) {
									var o = Fn.getTransitionDurationFromElement(n);
									pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
							} else
									r();
							this._hoverState = ""
					}
			}
			,
			t.update = function() {
					null !== this._popper && this._popper.scheduleUpdate()
			}
			,
			t.isWithContent = function() {
					return Boolean(this.getTitle())
			}
			,
			t.addAttachmentClass = function(t) {
					pe(this.getTipElement()).addClass(Te + "-" + t)
			}
			,
			t.getTipElement = function() {
					return this.tip = this.tip || pe(this.config.template)[0],
					this.tip
			}
			,
			t.setContent = function() {
					var t = this.getTipElement();
					this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()),
					pe(t).removeClass(Oe + " " + ke)
			}
			,
			t.setElementContent = function(t, e) {
					var n = this.config.html;
					"object" == typeof e && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e)
			}
			,
			t.getTitle = function() {
					var t = this.element.getAttribute("data-original-title");
					return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
					t
			}
			,
			t._getAttachment = function(t) {
					return Ie[t.toUpperCase()]
			}
			,
			t._setListeners = function() {
					var i = this;
					this.config.trigger.split(" ").forEach(function(t) {
							if ("click" === t)
									pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
											return i.toggle(t)
									});
							else if (t !== xe) {
									var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
										, n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
									pe(i.element).on(e, i.config.selector, function(t) {
											return i._enter(t)
									}).on(n, i.config.selector, function(t) {
											return i._leave(t)
									})
							}
							pe(i.element).closest(".modal").on("hide.bs.modal", function() {
									return i.hide()
							})
					}),
					this.config.selector ? this.config = l({}, this.config, {
							trigger: "manual",
							selector: ""
					}) : this._fixTitle()
			}
			,
			t._fixTitle = function() {
					var t = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
					this.element.setAttribute("title", ""))
			}
			,
			t._enter = function(t, e) {
					var n = this.constructor.DATA_KEY;
					(e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
					pe(t.currentTarget).data(n, e)),
					t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0),
					pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout),
					e._hoverState = De,
					e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
							e._hoverState === De && e.show()
					}, e.config.delay.show) : e.show())
			}
			,
			t._leave = function(t, e) {
					var n = this.constructor.DATA_KEY;
					(e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
					pe(t.currentTarget).data(n, e)),
					t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1),
					e._isWithActiveTrigger() || (clearTimeout(e._timeout),
					e._hoverState = we,
					e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
							e._hoverState === we && e.hide()
					}, e.config.delay.hide) : e.hide())
			}
			,
			t._isWithActiveTrigger = function() {
					for (var t in this._activeTrigger)
							if (this._activeTrigger[t])
									return !0;
					return !1
			}
			,
			t._getConfig = function(t) {
					return "number" == typeof (t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
							show: t.delay,
							hide: t.delay
					}),
					"number" == typeof t.title && (t.title = t.title.toString()),
					"number" == typeof t.content && (t.content = t.content.toString()),
					Fn.typeCheckConfig(ve, t, this.constructor.DefaultType),
					t
			}
			,
			t._getDelegateConfig = function() {
					var t = {};
					if (this.config)
							for (var e in this.config)
									this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
					return t
			}
			,
			t._cleanTipClass = function() {
					var t = pe(this.getTipElement())
						, e = t.attr("class").match(be);
					null !== e && e.length && t.removeClass(e.join(""))
			}
			,
			t._handlePopperPlacementChange = function(t) {
					var e = t.instance;
					this.tip = e.popper,
					this._cleanTipClass(),
					this.addAttachmentClass(this._getAttachment(t.placement))
			}
			,
			t._fixTransition = function() {
					var t = this.getTipElement()
						, e = this.config.animation;
					null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe),
					this.config.animation = !1,
					this.hide(),
					this.show(),
					this.config.animation = e)
			}
			,
			i._jQueryInterface = function(n) {
					return this.each(function() {
							var t = pe(this).data(ye)
								, e = "object" == typeof n && n;
							if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
							pe(this).data(ye, t)),
							"string" == typeof n)) {
									if ("undefined" == typeof t[n])
											throw new TypeError('No method named "' + n + '"');
									t[n]()
							}
					})
			}
			,
			s(i, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return Ae
					}
			}, {
					key: "NAME",
					get: function() {
							return ve
					}
			}, {
					key: "DATA_KEY",
					get: function() {
							return ye
					}
			}, {
					key: "Event",
					get: function() {
							return Ne
					}
			}, {
					key: "EVENT_KEY",
					get: function() {
							return Ee
					}
			}, {
					key: "DefaultType",
					get: function() {
							return Se
					}
			}]),
			i
	}(),
	pe.fn[ve] = We._jQueryInterface,
	pe.fn[ve].Constructor = We,
	pe.fn[ve].noConflict = function() {
			return pe.fn[ve] = Ce,
			We._jQueryInterface
	}
	,
	We), Jn = (qe = "popover",
	Ke = "." + (Fe = "bs.popover"),
	Me = (Ue = e).fn[qe],
	Qe = "bs-popover",
	Be = new RegExp("(^|\\s)" + Qe + "\\S+","g"),
	Ve = l({}, zn.Default, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
	}),
	Ye = l({}, zn.DefaultType, {
			content: "(string|element|function)"
	}),
	ze = "fade",
	Ze = ".popover-header",
	Ge = ".popover-body",
	$e = {
			HIDE: "hide" + Ke,
			HIDDEN: "hidden" + Ke,
			SHOW: (Je = "show") + Ke,
			SHOWN: "shown" + Ke,
			INSERTED: "inserted" + Ke,
			CLICK: "click" + Ke,
			FOCUSIN: "focusin" + Ke,
			FOCUSOUT: "focusout" + Ke,
			MOUSEENTER: "mouseenter" + Ke,
			MOUSELEAVE: "mouseleave" + Ke
	},
	Xe = function(t) {
			var e, n;
			function i() {
					return t.apply(this, arguments) || this
			}
			n = t,
			(e = i).prototype = Object.create(n.prototype),
			(e.prototype.constructor = e).__proto__ = n;
			var r = i.prototype;
			return r.isWithContent = function() {
					return this.getTitle() || this._getContent()
			}
			,
			r.addAttachmentClass = function(t) {
					Ue(this.getTipElement()).addClass(Qe + "-" + t)
			}
			,
			r.getTipElement = function() {
					return this.tip = this.tip || Ue(this.config.template)[0],
					this.tip
			}
			,
			r.setContent = function() {
					var t = Ue(this.getTipElement());
					this.setElementContent(t.find(Ze), this.getTitle());
					var e = this._getContent();
					"function" == typeof e && (e = e.call(this.element)),
					this.setElementContent(t.find(Ge), e),
					t.removeClass(ze + " " + Je)
			}
			,
			r._getContent = function() {
					return this.element.getAttribute("data-content") || this.config.content
			}
			,
			r._cleanTipClass = function() {
					var t = Ue(this.getTipElement())
						, e = t.attr("class").match(Be);
					null !== e && 0 < e.length && t.removeClass(e.join(""))
			}
			,
			i._jQueryInterface = function(n) {
					return this.each(function() {
							var t = Ue(this).data(Fe)
								, e = "object" == typeof n ? n : null;
							if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this,e),
							Ue(this).data(Fe, t)),
							"string" == typeof n)) {
									if ("undefined" == typeof t[n])
											throw new TypeError('No method named "' + n + '"');
									t[n]()
							}
					})
			}
			,
			s(i, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return Ve
					}
			}, {
					key: "NAME",
					get: function() {
							return qe
					}
			}, {
					key: "DATA_KEY",
					get: function() {
							return Fe
					}
			}, {
					key: "Event",
					get: function() {
							return $e
					}
			}, {
					key: "EVENT_KEY",
					get: function() {
							return Ke
					}
			}, {
					key: "DefaultType",
					get: function() {
							return Ye
					}
			}]),
			i
	}(zn),
	Ue.fn[qe] = Xe._jQueryInterface,
	Ue.fn[qe].Constructor = Xe,
	Ue.fn[qe].noConflict = function() {
			return Ue.fn[qe] = Me,
			Xe._jQueryInterface
	}
	,
	Xe), Zn = (en = "scrollspy",
	rn = "." + (nn = "bs.scrollspy"),
	on = (tn = e).fn[en],
	sn = {
			offset: 10,
			method: "auto",
			target: ""
	},
	an = {
			offset: "number",
			method: "string",
			target: "(string|element)"
	},
	ln = {
			ACTIVATE: "activate" + rn,
			SCROLL: "scroll" + rn,
			LOAD_DATA_API: "load" + rn + ".data-api"
	},
	cn = "dropdown-item",
	hn = "active",
	un = '[data-spy="scroll"]',
	fn = ".active",
	dn = ".nav, .list-group",
	gn = ".nav-link",
	_n = ".nav-item",
	mn = ".list-group-item",
	pn = ".dropdown",
	vn = ".dropdown-item",
	yn = ".dropdown-toggle",
	En = "offset",
	Cn = "position",
	Tn = function() {
			function n(t, e) {
					var n = this;
					this._element = t,
					this._scrollElement = "BODY" === t.tagName ? window : t,
					this._config = this._getConfig(e),
					this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn,
					this._offsets = [],
					this._targets = [],
					this._activeTarget = null,
					this._scrollHeight = 0,
					tn(this._scrollElement).on(ln.SCROLL, function(t) {
							return n._process(t)
					}),
					this.refresh(),
					this._process()
			}
			var t = n.prototype;
			return t.refresh = function() {
					var e = this
						, t = this._scrollElement === this._scrollElement.window ? En : Cn
						, r = "auto" === this._config.method ? t : this._config.method
						, o = r === Cn ? this._getScrollTop() : 0;
					this._offsets = [],
					this._targets = [],
					this._scrollHeight = this._getScrollHeight(),
					[].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
							var e, n = Fn.getSelectorFromElement(t);
							if (n && (e = document.querySelector(n)),
							e) {
									var i = e.getBoundingClientRect();
									if (i.width || i.height)
											return [tn(e)[r]().top + o, n]
							}
							return null
					}).filter(function(t) {
							return t
					}).sort(function(t, e) {
							return t[0] - e[0]
					}).forEach(function(t) {
							e._offsets.push(t[0]),
							e._targets.push(t[1])
					})
			}
			,
			t.dispose = function() {
					tn.removeData(this._element, nn),
					tn(this._scrollElement).off(rn),
					this._element = null,
					this._scrollElement = null,
					this._config = null,
					this._selector = null,
					this._offsets = null,
					this._targets = null,
					this._activeTarget = null,
					this._scrollHeight = null
			}
			,
			t._getConfig = function(t) {
					if ("string" != typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target) {
							var e = tn(t.target).attr("id");
							e || (e = Fn.getUID(en),
							tn(t.target).attr("id", e)),
							t.target = "#" + e
					}
					return Fn.typeCheckConfig(en, t, an),
					t
			}
			,
			t._getScrollTop = function() {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
			}
			,
			t._getScrollHeight = function() {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
			}
			,
			t._getOffsetHeight = function() {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
			}
			,
			t._process = function() {
					var t = this._getScrollTop() + this._config.offset
						, e = this._getScrollHeight()
						, n = this._config.offset + e - this._getOffsetHeight();
					if (this._scrollHeight !== e && this.refresh(),
					n <= t) {
							var i = this._targets[this._targets.length - 1];
							this._activeTarget !== i && this._activate(i)
					} else {
							if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
									return this._activeTarget = null,
									void this._clear();
							for (var r = this._offsets.length; r--; ) {
									this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
							}
					}
			}
			,
			t._activate = function(e) {
					this._activeTarget = e,
					this._clear();
					var t = this._selector.split(",");
					t = t.map(function(t) {
							return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
					});
					var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
					n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn),
					n.addClass(hn)) : (n.addClass(hn),
					n.parents(dn).prev(gn + ", " + mn).addClass(hn),
					n.parents(dn).prev(_n).children(gn).addClass(hn)),
					tn(this._scrollElement).trigger(ln.ACTIVATE, {
							relatedTarget: e
					})
			}
			,
			t._clear = function() {
					var t = [].slice.call(document.querySelectorAll(this._selector));
					tn(t).filter(fn).removeClass(hn)
			}
			,
			n._jQueryInterface = function(e) {
					return this.each(function() {
							var t = tn(this).data(nn);
							if (t || (t = new n(this,"object" == typeof e && e),
							tn(this).data(nn, t)),
							"string" == typeof e) {
									if ("undefined" == typeof t[e])
											throw new TypeError('No method named "' + e + '"');
									t[e]()
							}
					})
			}
			,
			s(n, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}, {
					key: "Default",
					get: function() {
							return sn
					}
			}]),
			n
	}(),
	tn(window).on(ln.LOAD_DATA_API, function() {
			for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--; ) {
					var n = tn(t[e]);
					Tn._jQueryInterface.call(n, n.data())
			}
	}),
	tn.fn[en] = Tn._jQueryInterface,
	tn.fn[en].Constructor = Tn,
	tn.fn[en].noConflict = function() {
			return tn.fn[en] = on,
			Tn._jQueryInterface
	}
	,
	Tn), Gn = (In = "." + (Sn = "bs.tab"),
	An = (bn = e).fn.tab,
	Dn = {
			HIDE: "hide" + In,
			HIDDEN: "hidden" + In,
			SHOW: "show" + In,
			SHOWN: "shown" + In,
			CLICK_DATA_API: "click" + In + ".data-api"
	},
	wn = "dropdown-menu",
	Nn = "active",
	On = "disabled",
	kn = "fade",
	Pn = "show",
	jn = ".dropdown",
	Hn = ".nav, .list-group",
	Ln = ".active",
	Rn = "> li > .active",
	xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
	Wn = ".dropdown-toggle",
	Un = "> .dropdown-menu .active",
	qn = function() {
			function i(t) {
					this._element = t
			}
			var t = i.prototype;
			return t.show = function() {
					var n = this;
					if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
							var t, i, e = bn(this._element).closest(Hn)[0], r = Fn.getSelectorFromElement(this._element);
							if (e) {
									var o = "UL" === e.nodeName ? Rn : Ln;
									i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1]
							}
							var s = bn.Event(Dn.HIDE, {
									relatedTarget: this._element
							})
								, a = bn.Event(Dn.SHOW, {
									relatedTarget: i
							});
							if (i && bn(i).trigger(s),
							bn(this._element).trigger(a),
							!a.isDefaultPrevented() && !s.isDefaultPrevented()) {
									r && (t = document.querySelector(r)),
									this._activate(this._element, e);
									var l = function() {
											var t = bn.Event(Dn.HIDDEN, {
													relatedTarget: n._element
											})
												, e = bn.Event(Dn.SHOWN, {
													relatedTarget: i
											});
											bn(i).trigger(t),
											bn(n._element).trigger(e)
									};
									t ? this._activate(t, t.parentNode, l) : l()
							}
					}
			}
			,
			t.dispose = function() {
					bn.removeData(this._element, Sn),
					this._element = null
			}
			,
			t._activate = function(t, e, n) {
					var i = this
						, r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0]
						, o = n && r && bn(r).hasClass(kn)
						, s = function() {
							return i._transitionComplete(t, r, n)
					};
					if (r && o) {
							var a = Fn.getTransitionDurationFromElement(r);
							bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)
					} else
							s()
			}
			,
			t._transitionComplete = function(t, e, n) {
					if (e) {
							bn(e).removeClass(Pn + " " + Nn);
							var i = bn(e.parentNode).find(Un)[0];
							i && bn(i).removeClass(Nn),
							"tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
					}
					if (bn(t).addClass(Nn),
					"tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
					Fn.reflow(t),
					bn(t).addClass(Pn),
					t.parentNode && bn(t.parentNode).hasClass(wn)) {
							var r = bn(t).closest(jn)[0];
							if (r) {
									var o = [].slice.call(r.querySelectorAll(Wn));
									bn(o).addClass(Nn)
							}
							t.setAttribute("aria-expanded", !0)
					}
					n && n()
			}
			,
			i._jQueryInterface = function(n) {
					return this.each(function() {
							var t = bn(this)
								, e = t.data(Sn);
							if (e || (e = new i(this),
							t.data(Sn, e)),
							"string" == typeof n) {
									if ("undefined" == typeof e[n])
											throw new TypeError('No method named "' + n + '"');
									e[n]()
							}
					})
			}
			,
			s(i, null, [{
					key: "VERSION",
					get: function() {
							return "4.1.3"
					}
			}]),
			i
	}(),
	bn(document).on(Dn.CLICK_DATA_API, xn, function(t) {
			t.preventDefault(),
			qn._jQueryInterface.call(bn(this), "show")
	}),
	bn.fn.tab = qn._jQueryInterface,
	bn.fn.tab.Constructor = qn,
	bn.fn.tab.noConflict = function() {
			return bn.fn.tab = An,
			qn._jQueryInterface
	}
	,
	qn);
	!function(t) {
			if ("undefined" == typeof t)
					throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
			var e = t.fn.jquery.split(" ")[0].split(".");
			if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
					throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
	}(e),
	t.Util = Fn,
	t.Alert = Kn,
	t.Button = Mn,
	t.Carousel = Qn,
	t.Collapse = Bn,
	t.Dropdown = Vn,
	t.Modal = Yn,
	t.Popover = Jn,
	t.Scrollspy = Zn,
	t.Tab = Gn,
	t.Tooltip = zn,
	Object.defineProperty(t, "__esModule", {
			value: !0
	})
});
/* End */
;;/* Start:"a:4:{s:4:"full";s:57:"/local/templates/nspcc/js/parallax.min.js?166601691817272";s:6:"source";s:41:"/local/templates/nspcc/js/parallax.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t) {
	if ("object" == typeof exports && "undefined" != typeof module)
			module.exports = t();
	else if ("function" == typeof define && define.amd)
			define([], t);
	else {
			("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Parallax = t()
	}
}(function() {
	return function t(e, i, n) {
			function o(r, a) {
					if (!i[r]) {
							if (!e[r]) {
									var l = "function" == typeof require && require;
									if (!a && l)
											return l(r, !0);
									if (s)
											return s(r, !0);
									var h = new Error("Cannot find module '" + r + "'");
									throw h.code = "MODULE_NOT_FOUND",
									h
							}
							var u = i[r] = {
									exports: {}
							};
							e[r][0].call(u.exports, function(t) {
									var i = e[r][1][t];
									return o(i || t)
							}, u, u.exports, t, e, i, n)
					}
					return i[r].exports
			}
			for (var s = "function" == typeof require && require, r = 0; r < n.length; r++)
					o(n[r]);
			return o
	}({
			1: [function(t, e, i) {
					"use strict";
					function n(t) {
							if (null === t || void 0 === t)
									throw new TypeError("Object.assign cannot be called with null or undefined");
							return Object(t)
					}
					var o = Object.getOwnPropertySymbols
						, s = Object.prototype.hasOwnProperty
						, r = Object.prototype.propertyIsEnumerable;
					e.exports = function() {
							try {
									if (!Object.assign)
											return !1;
									var t = new String("abc");
									if (t[5] = "de",
									"5" === Object.getOwnPropertyNames(t)[0])
											return !1;
									for (var e = {}, i = 0; i < 10; i++)
											e["_" + String.fromCharCode(i)] = i;
									if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
											return e[t]
									}).join(""))
											return !1;
									var n = {};
									return "abcdefghijklmnopqrst".split("").forEach(function(t) {
											n[t] = t
									}),
									"abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
							} catch (t) {
									return !1
							}
					}() ? Object.assign : function(t, e) {
							for (var i, a, l = n(t), h = 1; h < arguments.length; h++) {
									i = Object(arguments[h]);
									for (var u in i)
											s.call(i, u) && (l[u] = i[u]);
									if (o) {
											a = o(i);
											for (var c = 0; c < a.length; c++)
													r.call(i, a[c]) && (l[a[c]] = i[a[c]])
									}
							}
							return l
					}
			}
			, {}],
			2: [function(t, e, i) {
					(function(t) {
							(function() {
									var i, n, o, s, r, a;
									"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
											return performance.now()
									}
									: void 0 !== t && null !== t && t.hrtime ? (e.exports = function() {
											return (i() - r) / 1e6
									}
									,
									n = t.hrtime,
									s = (i = function() {
											var t;
											return 1e9 * (t = n())[0] + t[1]
									}
									)(),
									a = 1e9 * t.uptime(),
									r = s - a) : Date.now ? (e.exports = function() {
											return Date.now() - o
									}
									,
									o = Date.now()) : (e.exports = function() {
											return (new Date).getTime() - o
									}
									,
									o = (new Date).getTime())
							}
							).call(this)
					}
					).call(this, t("_process"))
			}
			, {
					_process: 3
			}],
			3: [function(t, e, i) {
					function n() {
							throw new Error("setTimeout has not been defined")
					}
					function o() {
							throw new Error("clearTimeout has not been defined")
					}
					function s(t) {
							if (c === setTimeout)
									return setTimeout(t, 0);
							if ((c === n || !c) && setTimeout)
									return c = setTimeout,
									setTimeout(t, 0);
							try {
									return c(t, 0)
							} catch (e) {
									try {
											return c.call(null, t, 0)
									} catch (e) {
											return c.call(this, t, 0)
									}
							}
					}
					function r(t) {
							if (d === clearTimeout)
									return clearTimeout(t);
							if ((d === o || !d) && clearTimeout)
									return d = clearTimeout,
									clearTimeout(t);
							try {
									return d(t)
							} catch (e) {
									try {
											return d.call(null, t)
									} catch (e) {
											return d.call(this, t)
									}
							}
					}
					function a() {
							v && p && (v = !1,
							p.length ? f = p.concat(f) : y = -1,
							f.length && l())
					}
					function l() {
							if (!v) {
									var t = s(a);
									v = !0;
									for (var e = f.length; e; ) {
											for (p = f,
											f = []; ++y < e; )
													p && p[y].run();
											y = -1,
											e = f.length
									}
									p = null,
									v = !1,
									r(t)
							}
					}
					function h(t, e) {
							this.fun = t,
							this.array = e
					}
					function u() {}
					var c, d, m = e.exports = {};
					!function() {
							try {
									c = "function" == typeof setTimeout ? setTimeout : n
							} catch (t) {
									c = n
							}
							try {
									d = "function" == typeof clearTimeout ? clearTimeout : o
							} catch (t) {
									d = o
							}
					}();
					var p, f = [], v = !1, y = -1;
					m.nextTick = function(t) {
							var e = new Array(arguments.length - 1);
							if (arguments.length > 1)
									for (var i = 1; i < arguments.length; i++)
											e[i - 1] = arguments[i];
							f.push(new h(t,e)),
							1 !== f.length || v || s(l)
					}
					,
					h.prototype.run = function() {
							this.fun.apply(null, this.array)
					}
					,
					m.title = "browser",
					m.browser = !0,
					m.env = {},
					m.argv = [],
					m.version = "",
					m.versions = {},
					m.on = u,
					m.addListener = u,
					m.once = u,
					m.off = u,
					m.removeListener = u,
					m.removeAllListeners = u,
					m.emit = u,
					m.prependListener = u,
					m.prependOnceListener = u,
					m.listeners = function(t) {
							return []
					}
					,
					m.binding = function(t) {
							throw new Error("process.binding is not supported")
					}
					,
					m.cwd = function() {
							return "/"
					}
					,
					m.chdir = function(t) {
							throw new Error("process.chdir is not supported")
					}
					,
					m.umask = function() {
							return 0
					}
			}
			, {}],
			4: [function(t, e, i) {
					(function(i) {
							for (var n = t("performance-now"), o = "undefined" == typeof window ? i : window, s = ["moz", "webkit"], r = "AnimationFrame", a = o["request" + r], l = o["cancel" + r] || o["cancelRequest" + r], h = 0; !a && h < s.length; h++)
									a = o[s[h] + "Request" + r],
									l = o[s[h] + "Cancel" + r] || o[s[h] + "CancelRequest" + r];
							if (!a || !l) {
									var u = 0
										, c = 0
										, d = [];
									a = function(t) {
											if (0 === d.length) {
													var e = n()
														, i = Math.max(0, 1e3 / 60 - (e - u));
													u = i + e,
													setTimeout(function() {
															var t = d.slice(0);
															d.length = 0;
															for (var e = 0; e < t.length; e++)
																	if (!t[e].cancelled)
																			try {
																					t[e].callback(u)
																			} catch (t) {
																					setTimeout(function() {
																							throw t
																					}, 0)
																			}
													}, Math.round(i))
											}
											return d.push({
													handle: ++c,
													callback: t,
													cancelled: !1
											}),
											c
									}
									,
									l = function(t) {
											for (var e = 0; e < d.length; e++)
													d[e].handle === t && (d[e].cancelled = !0)
									}
							}
							e.exports = function(t) {
									return a.call(o, t)
							}
							,
							e.exports.cancel = function() {
									l.apply(o, arguments)
							}
							,
							e.exports.polyfill = function() {
									o.requestAnimationFrame = a,
									o.cancelAnimationFrame = l
							}
					}
					).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}
			, {
					"performance-now": 2
			}],
			5: [function(t, e, i) {
					"use strict";
					function n(t, e) {
							if (!(t instanceof e))
									throw new TypeError("Cannot call a class as a function")
					}
					var o = function() {
							function t(t, e) {
									for (var i = 0; i < e.length; i++) {
											var n = e[i];
											n.enumerable = n.enumerable || !1,
											n.configurable = !0,
											"value"in n && (n.writable = !0),
											Object.defineProperty(t, n.key, n)
									}
							}
							return function(e, i, n) {
									return i && t(e.prototype, i),
									n && t(e, n),
									e
							}
					}()
						, s = t("raf")
						, r = t("object-assign")
						, a = {
							propertyCache: {},
							vendors: [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]],
							clamp: function(t, e, i) {
									return e < i ? t < e ? e : t > i ? i : t : t < i ? i : t > e ? e : t
							},
							data: function(t, e) {
									return a.deserialize(t.getAttribute("data-" + e))
							},
							deserialize: function(t) {
									return "true" === t || "false" !== t && ("null" === t ? null : !isNaN(parseFloat(t)) && isFinite(t) ? parseFloat(t) : t)
							},
							camelCase: function(t) {
									return t.replace(/-+(.)?/g, function(t, e) {
											return e ? e.toUpperCase() : ""
									})
							},
							accelerate: function(t) {
									a.css(t, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
									a.css(t, "transform-style", "preserve-3d"),
									a.css(t, "backface-visibility", "hidden")
							},
							transformSupport: function(t) {
									for (var e = document.createElement("div"), i = !1, n = null, o = !1, s = null, r = null, l = 0, h = a.vendors.length; l < h; l++)
											if (null !== a.vendors[l] ? (s = a.vendors[l][0] + "transform",
											r = a.vendors[l][1] + "Transform") : (s = "transform",
											r = "transform"),
											void 0 !== e.style[r]) {
													i = !0;
													break
											}
									switch (t) {
									case "2D":
											o = i;
											break;
									case "3D":
											if (i) {
													var u = document.body || document.createElement("body")
														, c = document.documentElement
														, d = c.style.overflow
														, m = !1;
													document.body || (m = !0,
													c.style.overflow = "hidden",
													c.appendChild(u),
													u.style.overflow = "hidden",
													u.style.background = ""),
													u.appendChild(e),
													e.style[r] = "translate3d(1px,1px,1px)",
													o = void 0 !== (n = window.getComputedStyle(e).getPropertyValue(s)) && n.length > 0 && "none" !== n,
													c.style.overflow = d,
													u.removeChild(e),
													m && (u.removeAttribute("style"),
													u.parentNode.removeChild(u))
											}
									}
									return o
							},
							css: function(t, e, i) {
									var n = a.propertyCache[e];
									if (!n)
											for (var o = 0, s = a.vendors.length; o < s; o++)
													if (n = null !== a.vendors[o] ? a.camelCase(a.vendors[o][1] + "-" + e) : e,
													void 0 !== t.style[n]) {
															a.propertyCache[e] = n;
															break
													}
									t.style[n] = i
							}
					}
						, l = {
							relativeInput: !1,
							clipRelativeInput: !1,
							inputElement: null,
							hoverOnly: !1,
							calibrationThreshold: 100,
							calibrationDelay: 500,
							supportDelay: 500,
							calibrateX: !1,
							calibrateY: !0,
							invertX: !0,
							invertY: !0,
							limitX: !1,
							limitY: !1,
							scalarX: 10,
							scalarY: 10,
							frictionX: .1,
							frictionY: .1,
							originX: .5,
							originY: .5,
							pointerEvents: !1,
							precision: 1,
							onReady: null,
							selector: null
					}
						, h = function() {
							function t(e, i) {
									n(this, t),
									this.element = e;
									var o = {
											calibrateX: a.data(this.element, "calibrate-x"),
											calibrateY: a.data(this.element, "calibrate-y"),
											invertX: a.data(this.element, "invert-x"),
											invertY: a.data(this.element, "invert-y"),
											limitX: a.data(this.element, "limit-x"),
											limitY: a.data(this.element, "limit-y"),
											scalarX: a.data(this.element, "scalar-x"),
											scalarY: a.data(this.element, "scalar-y"),
											frictionX: a.data(this.element, "friction-x"),
											frictionY: a.data(this.element, "friction-y"),
											originX: a.data(this.element, "origin-x"),
											originY: a.data(this.element, "origin-y"),
											pointerEvents: a.data(this.element, "pointer-events"),
											precision: a.data(this.element, "precision"),
											relativeInput: a.data(this.element, "relative-input"),
											clipRelativeInput: a.data(this.element, "clip-relative-input"),
											hoverOnly: a.data(this.element, "hover-only"),
											inputElement: document.querySelector(a.data(this.element, "input-element")),
											selector: a.data(this.element, "selector")
									};
									for (var s in o)
											null === o[s] && delete o[s];
									r(this, l, o, i),
									this.inputElement || (this.inputElement = this.element),
									this.calibrationTimer = null,
									this.calibrationFlag = !0,
									this.enabled = !1,
									this.depthsX = [],
									this.depthsY = [],
									this.raf = null,
									this.bounds = null,
									this.elementPositionX = 0,
									this.elementPositionY = 0,
									this.elementWidth = 0,
									this.elementHeight = 0,
									this.elementCenterX = 0,
									this.elementCenterY = 0,
									this.elementRangeX = 0,
									this.elementRangeY = 0,
									this.calibrationX = 0,
									this.calibrationY = 0,
									this.inputX = 0,
									this.inputY = 0,
									this.motionX = 0,
									this.motionY = 0,
									this.velocityX = 0,
									this.velocityY = 0,
									this.onMouseMove = this.onMouseMove.bind(this),
									this.onDeviceOrientation = this.onDeviceOrientation.bind(this),
									this.onDeviceMotion = this.onDeviceMotion.bind(this),
									this.onOrientationTimer = this.onOrientationTimer.bind(this),
									this.onMotionTimer = this.onMotionTimer.bind(this),
									this.onCalibrationTimer = this.onCalibrationTimer.bind(this),
									this.onAnimationFrame = this.onAnimationFrame.bind(this),
									this.onWindowResize = this.onWindowResize.bind(this),
									this.windowWidth = null,
									this.windowHeight = null,
									this.windowCenterX = null,
									this.windowCenterY = null,
									this.windowRadiusX = null,
									this.windowRadiusY = null,
									this.portrait = !1,
									this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
									this.motionSupport = !!window.DeviceMotionEvent && !this.desktop,
									this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop,
									this.orientationStatus = 0,
									this.motionStatus = 0,
									this.initialise()
							}
							return o(t, [{
									key: "initialise",
									value: function() {
											void 0 === this.transform2DSupport && (this.transform2DSupport = a.transformSupport("2D"),
											this.transform3DSupport = a.transformSupport("3D")),
											this.transform3DSupport && a.accelerate(this.element),
											"static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"),
											this.pointerEvents || (this.element.style.pointerEvents = "none"),
											this.updateLayers(),
											this.updateDimensions(),
											this.enable(),
											this.queueCalibration(this.calibrationDelay)
									}
							}, {
									key: "doReadyCallback",
									value: function() {
											this.onReady && this.onReady()
									}
							}, {
									key: "updateLayers",
									value: function() {
											this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children,
											this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."),
											this.depthsX = [],
											this.depthsY = [];
											for (var t = 0; t < this.layers.length; t++) {
													var e = this.layers[t];
													this.transform3DSupport && a.accelerate(e),
													e.style.position = t ? "absolute" : "relative",
													e.style.display = "block",
													e.style.left = 0,
													e.style.top = 0;
													var i = a.data(e, "depth") || 0;
													this.depthsX.push(a.data(e, "depth-x") || i),
													this.depthsY.push(a.data(e, "depth-y") || i)
											}
									}
							}, {
									key: "updateDimensions",
									value: function() {
											this.windowWidth = window.innerWidth,
											this.windowHeight = window.innerHeight,
											this.windowCenterX = this.windowWidth * this.originX,
											this.windowCenterY = this.windowHeight * this.originY,
											this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX),
											this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
									}
							}, {
									key: "updateBounds",
									value: function() {
											this.bounds = this.inputElement.getBoundingClientRect(),
											this.elementPositionX = this.bounds.left,
											this.elementPositionY = this.bounds.top,
											this.elementWidth = this.bounds.width,
											this.elementHeight = this.bounds.height,
											this.elementCenterX = this.elementWidth * this.originX,
											this.elementCenterY = this.elementHeight * this.originY,
											this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX),
											this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
									}
							}, {
									key: "queueCalibration",
									value: function(t) {
											clearTimeout(this.calibrationTimer),
											this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
									}
							}, {
									key: "enable",
									value: function() {
											this.enabled || (this.enabled = !0,
											this.orientationSupport ? (this.portrait = !1,
											window.addEventListener("deviceorientation", this.onDeviceOrientation),
											this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1,
											window.addEventListener("devicemotion", this.onDeviceMotion),
											this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0,
											this.calibrationY = 0,
											this.portrait = !1,
											window.addEventListener("mousemove", this.onMouseMove),
											this.doReadyCallback()),
											window.addEventListener("resize", this.onWindowResize),
											this.raf = s(this.onAnimationFrame))
									}
							}, {
									key: "disable",
									value: function() {
											this.enabled && (this.enabled = !1,
											this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove),
											window.removeEventListener("resize", this.onWindowResize),
											s.cancel(this.raf))
									}
							}, {
									key: "calibrate",
									value: function(t, e) {
											this.calibrateX = void 0 === t ? this.calibrateX : t,
											this.calibrateY = void 0 === e ? this.calibrateY : e
									}
							}, {
									key: "invert",
									value: function(t, e) {
											this.invertX = void 0 === t ? this.invertX : t,
											this.invertY = void 0 === e ? this.invertY : e
									}
							}, {
									key: "friction",
									value: function(t, e) {
											this.frictionX = void 0 === t ? this.frictionX : t,
											this.frictionY = void 0 === e ? this.frictionY : e
									}
							}, {
									key: "scalar",
									value: function(t, e) {
											this.scalarX = void 0 === t ? this.scalarX : t,
											this.scalarY = void 0 === e ? this.scalarY : e
									}
							}, {
									key: "limit",
									value: function(t, e) {
											this.limitX = void 0 === t ? this.limitX : t,
											this.limitY = void 0 === e ? this.limitY : e
									}
							}, {
									key: "origin",
									value: function(t, e) {
											this.originX = void 0 === t ? this.originX : t,
											this.originY = void 0 === e ? this.originY : e
									}
							}, {
									key: "setInputElement",
									value: function(t) {
											this.inputElement = t,
											this.updateDimensions()
									}
							}, {
									key: "setPosition",
									value: function(t, e, i) {
											e = e.toFixed(this.precision) + "px",
											i = i.toFixed(this.precision) + "px",
											this.transform3DSupport ? a.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? a.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e,
											t.style.top = i)
									}
							}, {
									key: "onOrientationTimer",
									value: function() {
											this.orientationSupport && 0 === this.orientationStatus ? (this.disable(),
											this.orientationSupport = !1,
											this.enable()) : this.doReadyCallback()
									}
							}, {
									key: "onMotionTimer",
									value: function() {
											this.motionSupport && 0 === this.motionStatus ? (this.disable(),
											this.motionSupport = !1,
											this.enable()) : this.doReadyCallback()
									}
							}, {
									key: "onCalibrationTimer",
									value: function() {
											this.calibrationFlag = !0
									}
							}, {
									key: "onWindowResize",
									value: function() {
											this.updateDimensions()
									}
							}, {
									key: "onAnimationFrame",
									value: function() {
											this.updateBounds();
											var t = this.inputX - this.calibrationX
												, e = this.inputY - this.calibrationY;
											(Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0),
											this.portrait ? (this.motionX = this.calibrateX ? e : this.inputY,
											this.motionY = this.calibrateY ? t : this.inputX) : (this.motionX = this.calibrateX ? t : this.inputX,
											this.motionY = this.calibrateY ? e : this.inputY),
											this.motionX *= this.elementWidth * (this.scalarX / 100),
											this.motionY *= this.elementHeight * (this.scalarY / 100),
											isNaN(parseFloat(this.limitX)) || (this.motionX = a.clamp(this.motionX, -this.limitX, this.limitX)),
											isNaN(parseFloat(this.limitY)) || (this.motionY = a.clamp(this.motionY, -this.limitY, this.limitY)),
											this.velocityX += (this.motionX - this.velocityX) * this.frictionX,
											this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
											for (var i = 0; i < this.layers.length; i++) {
													var n = this.layers[i]
														, o = this.depthsX[i]
														, r = this.depthsY[i]
														, l = this.velocityX * (o * (this.invertX ? -1 : 1))
														, h = this.velocityY * (r * (this.invertY ? -1 : 1));
													this.setPosition(n, l, h)
											}
											this.raf = s(this.onAnimationFrame)
									}
							}, {
									key: "rotate",
									value: function(t, e) {
											var i = (t || 0) / 30
												, n = (e || 0) / 30
												, o = this.windowHeight > this.windowWidth;
											this.portrait !== o && (this.portrait = o,
											this.calibrationFlag = !0),
											this.calibrationFlag && (this.calibrationFlag = !1,
											this.calibrationX = i,
											this.calibrationY = n),
											this.inputX = i,
											this.inputY = n
									}
							}, {
									key: "onDeviceOrientation",
									value: function(t) {
											var e = t.beta
												, i = t.gamma;
											null !== e && null !== i && (this.orientationStatus = 1,
											this.rotate(e, i))
									}
							}, {
									key: "onDeviceMotion",
									value: function(t) {
											var e = t.rotationRate.beta
												, i = t.rotationRate.gamma;
											null !== e && null !== i && (this.motionStatus = 1,
											this.rotate(e, i))
									}
							}, {
									key: "onMouseMove",
									value: function(t) {
											var e = t.clientX
												, i = t.clientY;
											if (this.hoverOnly && (e < this.elementPositionX || e > this.elementPositionX + this.elementWidth || i < this.elementPositionY || i > this.elementPositionY + this.elementHeight))
													return this.inputX = 0,
													void (this.inputY = 0);
											this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.elementPositionX),
											e = Math.min(e, this.elementPositionX + this.elementWidth),
											i = Math.max(i, this.elementPositionY),
											i = Math.min(i, this.elementPositionY + this.elementHeight)),
											this.elementRangeX && this.elementRangeY && (this.inputX = (e - this.elementPositionX - this.elementCenterX) / this.elementRangeX,
											this.inputY = (i - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (e - this.windowCenterX) / this.windowRadiusX,
											this.inputY = (i - this.windowCenterY) / this.windowRadiusY)
									}
							}, {
									key: "destroy",
									value: function() {
											this.disable(),
											clearTimeout(this.calibrationTimer),
											clearTimeout(this.detectionTimer),
											this.element.removeAttribute("style");
											for (var t = 0; t < this.layers.length; t++)
													this.layers[t].removeAttribute("style");
											delete this.element,
											delete this.layers
									}
							}, {
									key: "version",
									value: function() {
											return "3.1.0"
									}
							}]),
							t
					}();
					e.exports = h
			}
			, {
					"object-assign": 1,
					raf: 4
			}]
	}, {}, [5])(5)
});
/* End */
;;/* Start:"a:4:{s:4:"full";s:56:"/local/templates/nspcc/js/skrollr.min.js?166601691810040";s:6:"source";s:40:"/local/templates/nspcc/js/skrollr.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! skrollr 0.6.8 (2013-06-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e, t, r) {
	"use strict";
	function n(r) {
			if (o = t.documentElement,
			a = t.body,
			M(),
			ot = this,
			r = r || {},
			ct = r.constants || {},
			r.easing)
					for (var n in r.easing)
							U[n] = r.easing[n];
			dt = r.edgeStrategy || "set",
			lt = {
					beforerender: r.beforerender,
					render: r.render
			},
			st = r.forceHeight !== !1,
			st && (Ft = r.scale || 1),
			ut = r.smoothScrolling !== !1,
			pt = r.smoothScrollingDuration || A,
			gt = {
					targetTop: ot.getScrollTop()
			},
			zt = (r.mobileCheck || function() {
					return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || e.opera)
			}
			)(),
			zt ? (it = t.getElementById("skrollr-body"),
			it && nt(),
			j(),
			St(o, [y, S], [T])) : St(o, [y, b], [T]),
			ot.refresh(),
			ht(e, "resize orientationchange", yt);
			var i = R();
			return function l() {
					X(),
					i(l)
			}(),
			ot
	}
	var o, a, i = e.skrollr = {
			get: function() {
					return ot
			},
			init: function(e) {
					return ot || new n(e)
			},
			VERSION: "0.6.8"
	}, l = Object.prototype.hasOwnProperty, s = e.Math, c = e.getComputedStyle, f = "touchstart", u = "touchmove", p = "touchcancel", g = "touchend", m = "skrollable", d = m + "-before", v = m + "-between", h = m + "-after", y = "skrollr", T = "no-" + y, b = y + "-desktop", S = y + "-mobile", k = "linear", w = 1e3, x = 6e-4, A = 200, E = "start", F = "end", C = "center", D = "bottom", H = "___skrollable_id", V = /^\s+|\s+$/g, z = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/, O = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, P = /^([a-z\-]+)\[(\w+)\]$/, q = /-([a-z])/g, I = function(e, t) {
			return t.toUpperCase()
	}, B = /[\-+]?[\d]*\.?[\d]+/g, _ = /\{\?\}/g, G = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g, L = /[a-z\-]+-gradient/g, N = "", $ = "", M = function() {
			var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
			if (c) {
					var t = c(a, null);
					for (var n in t)
							if (N = n.match(e) || +n == n && t[n].match(e))
									break;
					if (!N)
							return N = $ = "",
							r;
					N = N[0],
					"-" === N.slice(0, 1) ? ($ = N,
					N = {
							"-webkit-": "webkit",
							"-moz-": "Moz",
							"-ms-": "ms",
							"-o-": "O"
					}[N]) : $ = "-" + N.toLowerCase() + "-"
			}
	}, R = function() {
			var t = e.requestAnimationFrame || e[N.toLowerCase() + "RequestAnimationFrame"]
				, r = xt();
			return (zt || !t) && (t = function(t) {
					var n = xt() - r
						, o = s.max(0, 33 - n);
					e.setTimeout(function() {
							r = xt(),
							t()
					}, o)
			}
			),
			t
	}, U = {
			begin: function() {
					return 0
			},
			end: function() {
					return 1
			},
			linear: function(e) {
					return e
			},
			quadratic: function(e) {
					return e * e
			},
			cubic: function(e) {
					return e * e * e
			},
			swing: function(e) {
					return -s.cos(e * s.PI) / 2 + .5
			},
			sqrt: function(e) {
					return s.sqrt(e)
			},
			outCubic: function(e) {
					return s.pow(e - 1, 3) + 1
			},
			bounce: function(e) {
					var t;
					if (.5083 >= e)
							t = 3;
					else if (.8489 >= e)
							t = 9;
					else if (.96208 >= e)
							t = 27;
					else {
							if (!(.99981 >= e))
									return 1;
							t = 91
					}
					return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
			}
	};
	n.prototype.refresh = function(e) {
			var n, o, a = !1;
			for (e === r ? (a = !0,
			at = [],
			Vt = 0,
			e = t.getElementsByTagName("*")) : e = [].concat(e),
			n = 0,
			o = e.length; o > n; n++) {
					var i = e[n]
						, l = i
						, s = []
						, c = ut
						, f = dt;
					if (i.attributes) {
							for (var u = 0, p = i.attributes.length; p > u; u++) {
									var g = i.attributes[u];
									if ("data-anchor-target" !== g.name)
											if ("data-smooth-scrolling" !== g.name)
													if ("data-edge-strategy" !== g.name) {
															var d = g.name.match(z);
															if (null !== d) {
																	var v = d[1];
																	v = v && ct[v.substr(1)] || 0;
																	var h = (0 | d[2]) + v
																		, y = d[3]
																		, T = d[4] || y
																		, b = {
																			offset: h,
																			props: g.value,
																			element: i
																	};
																	s.push(b),
																	y && y !== E && y !== F ? (b.mode = "relative",
																	b.anchors = [y, T]) : (b.mode = "absolute",
																	y === F ? b.isEnd = !0 : (b.frame = h * Ft,
																	delete b.offset))
															}
													} else
															f = g.value;
											else
													c = "off" !== g.value;
									else if (l = t.querySelector(g.value),
									null === l)
											throw 'Unable to find anchor target "' + g.value + '"'
							}
							if (s.length) {
									var S, k, w;
									!a && H in i ? (w = i[H],
									S = at[w].styleAttr,
									k = at[w].classAttr) : (w = i[H] = Vt++,
									S = i.style.cssText,
									k = bt(i)),
									at[w] = {
											element: i,
											styleAttr: S,
											classAttr: k,
											anchorTarget: l,
											keyFrames: s,
											smoothScrolling: c,
											edgeStrategy: f
									},
									St(i, [m], [])
							}
					}
			}
			for (yt(),
			n = 0,
			o = e.length; o > n; n++) {
					var x = at[e[n][H]];
					x !== r && (Z(x),
					K(x))
			}
			return ot
	}
	,
	n.prototype.relativeToAbsolute = function(e, t, r) {
			var n = o.clientHeight
				, a = e.getBoundingClientRect()
				, i = a.top
				, l = a.bottom - a.top;
			return t === D ? i -= n : t === C && (i -= n / 2),
			r === D ? i += l : r === C && (i += l / 2),
			i += ot.getScrollTop(),
			0 | i + .5
	}
	,
	n.prototype.animateTo = function(e, t) {
			t = t || {};
			var n = xt()
				, o = ot.getScrollTop();
			return ft = {
					startTop: o,
					topDiff: e - o,
					targetTop: e,
					duration: t.duration || w,
					startTime: n,
					endTime: n + (t.duration || w),
					easing: U[t.easing || k],
					done: t.done
			},
			ft.topDiff || (ft.done && ft.done.call(ot, !1),
			ft = r),
			ot
	}
	,
	n.prototype.stopAnimateTo = function() {
			ft && ft.done && ft.done.call(ot, !0),
			ft = r
	}
	,
	n.prototype.isAnimatingTo = function() {
			return !!ft
	}
	,
	n.prototype.setScrollTop = function(t, r) {
			return r === !0 && (Dt = t,
			mt = !0),
			zt ? (Ot = s.min(s.max(t, 0), Et),
			it && i.setStyle(it, "transform", "translate(0, " + -Ot + "px) " + vt)) : e.scrollTo(0, t),
			ot
	}
	,
	n.prototype.getScrollTop = function() {
			return zt ? Ot : e.pageYOffset || o.scrollTop || a.scrollTop || 0
	}
	,
	n.prototype.on = function(e, t) {
			return lt[e] = t,
			ot
	}
	,
	n.prototype.off = function(e) {
			return delete lt[e],
			ot
	}
	;
	var j = function() {
			var t, n, i, l, c, m, d, v, h, y, T;
			ht(o, [f, u, p, g].join(" "), function(e) {
					e.preventDefault();
					var o = e.changedTouches[0];
					switch (l = o.clientY,
					c = o.clientX,
					h = e.timeStamp,
					e.type) {
					case f:
							t && t.blur(),
							t = e.target,
							n = m = l,
							i = c,
							v = h;
							break;
					case u:
							d = l - m,
							T = h - y,
							ot.setScrollTop(Ot - d),
							m = l,
							y = h;
							break;
					default:
					case p:
					case g:
							var a = n - l
								, b = i - c
								, S = b * b + a * a;
							if (49 > S)
									return t.focus(),
									t.click(),
									r;
							t = r;
							var k = d / T;
							k = s.max(s.min(k, 3), -3);
							var w = s.abs(k / x)
								, A = k * w + .5 * x * w * w
								, E = ot.getScrollTop() - A
								, F = 0;
							E > Et ? (F = (Et - E) / A,
							E = Et) : 0 > E && (F = -E / A,
							E = 0),
							w *= 1 - F,
							ot.animateTo(E, {
									easing: "outCubic",
									duration: w
							})
					}
			}),
			e.scrollTo(0, 0),
			o.style.overflow = a.style.overflow = "hidden"
	}
		, Y = function() {
			var e, t, r, n, o, a, i, l, c;
			for (l = 0,
			c = at.length; c > l; l++)
					for (e = at[l],
					t = e.element,
					r = e.anchorTarget,
					n = e.keyFrames,
					o = 0,
					a = n.length; a > o; o++)
							i = n[o],
							"relative" === i.mode && (rt(t),
							i.frame = ot.relativeToAbsolute(r, i.anchors[0], i.anchors[1]) - i.offset,
							rt(t, !0)),
							st && !i.isEnd && i.frame > Et && (Et = i.frame);
			for (Et = s.max(Et, Tt()),
			l = 0,
			c = at.length; c > l; l++) {
					for (e = at[l],
					n = e.keyFrames,
					o = 0,
					a = n.length; a > o; o++)
							i = n[o],
							i.isEnd && (i.frame = Et - i.offset);
					e.keyFrames.sort(At)
			}
	}
		, W = function(e, t) {
			for (var r = 0, n = at.length; n > r; r++) {
					var o, a, s = at[r], c = s.element, f = s.smoothScrolling ? e : t, u = s.keyFrames, p = u[0].frame, g = u[u.length - 1].frame, y = p > f, T = f > g, b = u[y ? 0 : u.length - 1];
					if (y || T) {
							if (y && -1 === s.edge || T && 1 === s.edge)
									continue;
							switch (St(c, [y ? d : h], [d, v, h]),
							s.edge = y ? -1 : 1,
							s.edgeStrategy) {
							case "reset":
									rt(c);
									continue;
							case "ease":
									f = b.frame;
									break;
							default:
							case "set":
									var S = b.props;
									for (o in S)
											l.call(S, o) && (a = tt(S[o].value),
											i.setStyle(c, o, a));
									continue
							}
					} else
							0 !== s.edge && (St(c, [m, v], [d, h]),
							s.edge = 0);
					for (var k = 0, w = u.length - 1; w > k; k++)
							if (f >= u[k].frame && u[k + 1].frame >= f) {
									var x = u[k]
										, A = u[k + 1];
									for (o in x.props)
											if (l.call(x.props, o)) {
													var E = (f - x.frame) / (A.frame - x.frame);
													E = x.props[o].easing(E),
													a = et(x.props[o].value, A.props[o].value, E),
													a = tt(a),
													i.setStyle(c, o, a)
											}
									break
							}
			}
	}
		, X = function() {
			var e, t, n = ot.getScrollTop(), o = xt();
			if (ft)
					o >= ft.endTime ? (n = ft.targetTop,
					e = ft.done,
					ft = r) : (t = ft.easing((o - ft.startTime) / ft.duration),
					n = 0 | ft.startTop + t * ft.topDiff),
					ot.setScrollTop(n);
			else if (!zt) {
					var a = gt.targetTop - n;
					a && (gt = {
							startTop: Dt,
							topDiff: n - Dt,
							targetTop: n,
							startTime: Ht,
							endTime: Ht + pt
					}),
					gt.endTime >= o && (t = U.sqrt((o - gt.startTime) / pt),
					n = 0 | gt.startTop + t * gt.topDiff)
			}
			if (mt || Dt !== n) {
					Ct = n >= Dt ? "down" : "up",
					mt = !1;
					var i = {
							curTop: n,
							lastTop: Dt,
							maxTop: Et,
							direction: Ct
					}
						, l = lt.beforerender && lt.beforerender.call(ot, i);
					l !== !1 && (W(n, ot.getScrollTop()),
					Dt = n,
					lt.render && lt.render.call(ot, i)),
					e && e.call(ot, !1)
			}
			Ht = o
	}
		, Z = function(e) {
			for (var t = 0, r = e.keyFrames.length; r > t; t++) {
					for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = O.exec(l.props)); )
							a = i[1],
							o = i[2],
							n = a.match(P),
							null !== n ? (a = n[1],
							n = n[2]) : n = k,
							o = o.indexOf("!") ? J(o) : [o.slice(1)],
							s[a] = {
									value: o,
									easing: U[n]
							};
					l.props = s
			}
	}
		, J = function(e) {
			var t = [];
			return G.lastIndex = 0,
			e = e.replace(G, function(e) {
					return e.replace(B, function(e) {
							return 100 * (e / 255) + "%"
					})
			}),
			$ && (L.lastIndex = 0,
			e = e.replace(L, function(e) {
					return $ + e
			})),
			e = e.replace(B, function(e) {
					return t.push(+e),
					"{?}"
			}),
			t.unshift(e),
			t
	}
		, K = function(e) {
			var t, r, n = {};
			for (t = 0,
			r = e.keyFrames.length; r > t; t++)
					Q(e.keyFrames[t], n);
			for (n = {},
			t = e.keyFrames.length - 1; t >= 0; t--)
					Q(e.keyFrames[t], n)
	}
		, Q = function(e, t) {
			var r;
			for (r in t)
					l.call(e.props, r) || (e.props[r] = t[r]);
			for (r in e.props)
					t[r] = e.props[r]
	}
		, et = function(e, t, r) {
			var n, o = e.length;
			if (o !== t.length)
					throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
			var a = [e[0]];
			for (n = 1; o > n; n++)
					a[n] = e[n] + (t[n] - e[n]) * r;
			return a
	}
		, tt = function(e) {
			var t = 1;
			return _.lastIndex = 0,
			e[0].replace(_, function() {
					return e[t++]
			})
	}
		, rt = function(e, t) {
			e = [].concat(e);
			for (var r, n, o = 0, a = e.length; a > o; o++)
					n = e[o],
					r = at[n[H]],
					r && (t ? (n.style.cssText = r.dirtyStyleAttr,
					St(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText,
					r.dirtyClassAttr = bt(n),
					n.style.cssText = r.styleAttr,
					St(n, r.classAttr)))
	}
		, nt = function() {
			vt = "translateZ(0)",
			i.setStyle(it, "transform", vt);
			var e = c(it)
				, t = e.getPropertyValue("transform")
				, r = e.getPropertyValue($ + "transform")
				, n = t && "none" !== t || r && "none" !== r;
			n || (vt = "")
	};
	i.setStyle = function(e, t, r) {
			var n = e.style;
			if (t = t.replace(q, I).replace("-", ""),
			"zIndex" === t)
					n[t] = "" + (0 | r);
			else if ("float" === t)
					n.styleFloat = n.cssFloat = r;
			else
					try {
							N && (n[N + t.slice(0, 1).toUpperCase() + t.slice(1)] = r),
							n[t] = r
					} catch (o) {}
	}
	;
	var ot, at, it, lt, st, ct, ft, ut, pt, gt, mt, dt, vt, ht = i.addEvent = function(t, r, n) {
			var o = function(t) {
					return t = t || e.event,
					t.target || (t.target = t.srcElement),
					t.preventDefault || (t.preventDefault = function() {
							t.returnValue = !1
					}
					),
					n.call(this, t)
			};
			r = r.split(" ");
			for (var a = 0, i = r.length; i > a; a++)
					t.addEventListener ? t.addEventListener(r[a], n, !1) : t.attachEvent("on" + r[a], o)
	}
	, yt = function() {
			var e = ot.getScrollTop();
			Et = 0,
			st && !zt && (a.style.height = "auto"),
			Y(),
			st && !zt && (a.style.height = Et + o.clientHeight + "px"),
			zt ? ot.setScrollTop(s.min(ot.getScrollTop(), Et)) : ot.setScrollTop(e, !0),
			mt = !0
	}, Tt = function() {
			var e = it && it.offsetHeight || 0
				, t = s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight);
			return t - o.clientHeight
	}, bt = function(t) {
			var r = "className";
			return e.SVGElement && t instanceof e.SVGElement && (t = t[r],
			r = "baseVal"),
			t[r]
	}, St = function(t, n, o) {
			var a = "className";
			if (e.SVGElement && t instanceof e.SVGElement && (t = t[a],
			a = "baseVal"),
			o === r)
					return t[a] = n,
					r;
			for (var i = t[a], l = 0, s = o.length; s > l; l++)
					i = wt(i).replace(wt(o[l]), " ");
			i = kt(i);
			for (var c = 0, f = n.length; f > c; c++)
					-1 === wt(i).indexOf(wt(n[c])) && (i += " " + n[c]);
			t[a] = kt(i)
	}, kt = function(e) {
			return e.replace(V, "")
	}, wt = function(e) {
			return " " + e + " "
	}, xt = Date.now || function() {
			return +new Date
	}
	, At = function(e, t) {
			return e.frame - t.frame
	}, Et = 0, Ft = 1, Ct = "down", Dt = -1, Ht = xt(), Vt = 0, zt = !1, Ot = 0
}
)(window, document);
/* End */
;;/* Start:"a:4:{s:4:"full";s:66:"/local/templates/nspcc/js/jquery.maskedinput.min.js?16660169184324";s:6:"source";s:51:"/local/templates/nspcc/js/jquery.maskedinput.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
	jQuery Masked Input Plugin
	Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.4.1
*/
!function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
	var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
	a.mask = {
			definitions: {
					9: "[0-9]",
					a: "[A-Za-z]",
					"*": "[A-Za-z0-9]"
			},
			autoclear: !0,
			dataName: "rawMaskFn",
			placeholder: "_"
	},
	a.fn.extend({
			caret: function(a, b) {
					var c;
					if (0 !== this.length && !this.is(":hidden"))
							return "number" == typeof a ? (b = "number" == typeof b ? b : a,
							this.each(function() {
									this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(),
									c.collapse(!0),
									c.moveEnd("character", b),
									c.moveStart("character", a),
									c.select())
							})) : (this[0].setSelectionRange ? (a = this[0].selectionStart,
							b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(),
							a = 0 - c.duplicate().moveStart("character", -1e5),
							b = a + c.text.length),
							{
									begin: a,
									end: b
							})
			},
			unmask: function() {
					return this.trigger("unmask")
			},
			mask: function(c, g) {
					var h, i, j, k, l, m, n, o;
					if (!c && this.length > 0) {
							h = a(this[0]);
							var p = h.data(a.mask.dataName);
							return p ? p() : void 0
					}
					return g = a.extend({
							autoclear: a.mask.autoclear,
							placeholder: a.mask.placeholder,
							completed: null
					}, g),
					i = a.mask.definitions,
					j = [],
					k = n = c.length,
					l = null,
					a.each(c.split(""), function(a, b) {
							"?" == b ? (n--,
							k = a) : i[b] ? (j.push(new RegExp(i[b])),
							null === l && (l = j.length - 1),
							k > a && (m = j.length - 1)) : j.push(null)
					}),
					this.trigger("unmask").each(function() {
							function h() {
									if (g.completed) {
											for (var a = l; m >= a; a++)
													if (j[a] && C[a] === p(a))
															return;
											g.completed.call(B)
									}
							}
							function p(a) {
									return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
							}
							function q(a) {
									for (; ++a < n && !j[a]; )
											;
									return a
							}
							function r(a) {
									for (; --a >= 0 && !j[a]; )
											;
									return a
							}
							function s(a, b) {
									var c, d;
									if (!(0 > a)) {
											for (c = a,
											d = q(b); n > c; c++)
													if (j[c]) {
															if (!(n > d && j[c].test(C[d])))
																	break;
															C[c] = C[d],
															C[d] = p(d),
															d = q(d)
													}
											z(),
											B.caret(Math.max(l, a))
									}
							}
							function t(a) {
									var b, c, d, e;
									for (b = a,
									c = p(a); n > b; b++)
											if (j[b]) {
													if (d = q(b),
													e = C[b],
													C[b] = c,
													!(n > d && j[d].test(e)))
															break;
													c = e
											}
							}
							function u() {
									var a = B.val()
										, b = B.caret();
									if (o && o.length && o.length > a.length) {
											for (A(!0); b.begin > 0 && !j[b.begin - 1]; )
													b.begin--;
											if (0 === b.begin)
													for (; b.begin < l && !j[b.begin]; )
															b.begin++;
											B.caret(b.begin, b.begin)
									} else {
											for (A(!0); b.begin < n && !j[b.begin]; )
													b.begin++;
											B.caret(b.begin, b.begin)
									}
									h()
							}
							function v() {
									A(),
									B.val() != E && B.change()
							}
							function w(a) {
									if (!B.prop("readonly")) {
											var b, c, e, f = a.which || a.keyCode;
											o = B.val(),
											8 === f || 46 === f || d && 127 === f ? (b = B.caret(),
											c = b.begin,
											e = b.end,
											e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1),
											e = 46 === f ? q(e) : e),
											y(c, e),
											s(c, e - 1),
											a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E),
											B.caret(0, A()),
											a.preventDefault())
									}
							}
							function x(b) {
									if (!B.prop("readonly")) {
											var c, d, e, g = b.which || b.keyCode, i = B.caret();
											if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
													if (i.end - i.begin !== 0 && (y(i.begin, i.end),
													s(i.begin, i.end - 1)),
													c = q(i.begin - 1),
													n > c && (d = String.fromCharCode(g),
													j[c].test(d))) {
															if (t(c),
															C[c] = d,
															z(),
															e = q(c),
															f) {
																	var k = function() {
																			a.proxy(a.fn.caret, B, e)()
																	};
																	setTimeout(k, 0)
															} else
																	B.caret(e);
															i.begin <= m && h()
													}
													b.preventDefault()
											}
									}
							}
							function y(a, b) {
									var c;
									for (c = a; b > c && n > c; c++)
											j[c] && (C[c] = p(c))
							}
							function z() {
									B.val(C.join(""))
							}
							function A(a) {
									var b, c, d, e = B.val(), f = -1;
									for (b = 0,
									d = 0; n > b; b++)
											if (j[b]) {
													for (C[b] = p(b); d++ < e.length; )
															if (c = e.charAt(d - 1),
															j[b].test(c)) {
																	C[b] = c,
																	f = b;
																	break
															}
													if (d > e.length) {
															y(b + 1, n);
															break
													}
											} else
													C[b] === e.charAt(d) && d++,
													k > b && (f = b);
									return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""),
									y(0, n)) : z() : (z(),
									B.val(B.val().substring(0, f + 1))),
									k ? b : l
							}
							var B = a(this)
								, C = a.map(c.split(""), function(a, b) {
									return "?" != a ? i[a] ? p(b) : a : void 0
							})
								, D = C.join("")
								, E = B.val();
							B.data(a.mask.dataName, function() {
									return a.map(C, function(a, b) {
											return j[b] && a != p(b) ? a : null
									}).join("")
							}),
							B.one("unmask", function() {
									B.off(".mask").removeData(a.mask.dataName)
							}).on("focus.mask", function() {
									if (!B.prop("readonly")) {
											clearTimeout(b);
											var a;
											E = B.val(),
											a = A(),
											b = setTimeout(function() {
													B.get(0) === document.activeElement && (z(),
													a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
											}, 10)
									}
							}).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
									B.prop("readonly") || setTimeout(function() {
											var a = A(!0);
											B.caret(a),
											h()
									}, 0)
							}),
							e && f && B.off("input.mask").on("input.mask", u),
							A()
					})
			}
	})
});
/* End */
;;/* Start:"a:4:{s:4:"full";s:64:"/local/templates/nspcc/js/jquery.validate.min.js?166601691823238";s:6:"source";s:48:"/local/templates/nspcc/js/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
* https://jqueryvalidation.org/
* Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
	a.extend(a.fn, {
			validate: function(b) {
					if (!this.length)
							return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
					var c = a.data(this[0], "validator");
					return c ? c : (this.attr("novalidate", "novalidate"),
					c = new a.validator(b,this[0]),
					a.data(this[0], "validator", c),
					c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
							c.submitButton = b.currentTarget,
							a(this).hasClass("cancel") && (c.cancelSubmit = !0),
							void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
					}),
					this.on("submit.validate", function(b) {
							function d() {
									var d, e;
									return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
									!c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b),
									d && d.remove(),
									void 0 !== e && e)
							}
							return c.settings.debug && b.preventDefault(),
							c.cancelSubmit ? (c.cancelSubmit = !1,
							d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
							!1) : d() : (c.focusInvalid(),
							!1)
					})),
					c)
			},
			valid: function() {
					var b, c, d;
					return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
					b = !0,
					c = a(this[0].form).validate(),
					this.each(function() {
							b = c.element(this) && b,
							b || (d = d.concat(c.errorList))
					}),
					c.errorList = d),
					b
			},
			rules: function(b, c) {
					var d, e, f, g, h, i, j = this[0];
					if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0],
					j.name = this.attr("name")),
					null != j.form)) {
							if (b)
									switch (d = a.data(j.form, "validator").settings,
									e = d.rules,
									f = a.validator.staticRules(j),
									b) {
									case "add":
											a.extend(f, a.validator.normalizeRule(c)),
											delete f.messages,
											e[j.name] = f,
											c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
											break;
									case "remove":
											return c ? (i = {},
											a.each(c.split(/\s/), function(a, b) {
													i[b] = f[b],
													delete f[b]
											}),
											i) : (delete e[j.name],
											f)
									}
							return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
							g.required && (h = g.required,
							delete g.required,
							g = a.extend({
									required: h
							}, g)),
							g.remote && (h = g.remote,
							delete g.remote,
							g = a.extend(g, {
									remote: h
							})),
							g
					}
			}
	}),
	a.extend(a.expr.pseudos || a.expr[":"], {
			blank: function(b) {
					return !a.trim("" + a(b).val())
			},
			filled: function(b) {
					var c = a(b).val();
					return null !== c && !!a.trim("" + c)
			},
			unchecked: function(b) {
					return !a(b).prop("checked")
			}
	}),
	a.validator = function(b, c) {
			this.settings = a.extend(!0, {}, a.validator.defaults, b),
			this.currentForm = c,
			this.init()
	}
	,
	a.validator.format = function(b, c) {
			return 1 === arguments.length ? function() {
					var c = a.makeArray(arguments);
					return c.unshift(b),
					a.validator.format.apply(this, c)
			}
			: void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
			c.constructor !== Array && (c = [c]),
			a.each(c, function(a, c) {
					b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
							return c
					})
			}),
			b)
	}
	,
	a.extend(a.validator, {
			defaults: {
					messages: {},
					groups: {},
					rules: {},
					errorClass: "error",
					pendingClass: "pending",
					validClass: "valid",
					errorElement: "label",
					focusCleanup: !1,
					focusInvalid: !0,
					errorContainer: a([]),
					errorLabelContainer: a([]),
					onsubmit: !0,
					ignore: ":hidden",
					ignoreTitle: !1,
					onfocusin: function(a) {
							this.lastActive = a,
							this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
							this.hideThese(this.errorsFor(a)))
					},
					onfocusout: function(a) {
							this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
					},
					onkeyup: function(b, c) {
							var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
							9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
					},
					onclick: function(a) {
							a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
					},
					highlight: function(b, c, d) {
							"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
					},
					unhighlight: function(b, c, d) {
							"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
					}
			},
			setDefaults: function(b) {
					a.extend(a.validator.defaults, b)
			},
			messages: {
					required: "",
					remote: "Please fix this field.",
					email: "Please enter a valid email address.",
					url: "Please enter a valid URL.",
					date: "Please enter a valid date.",
					dateISO: "Please enter a valid date (ISO).",
					number: "Please enter a valid number.",
					digits: "Please enter only digits.",
					equalTo: "Please enter the same value again.",
					maxlength: a.validator.format("Please enter no more than {0} characters."),
					minlength: a.validator.format("Please enter at least {0} characters."),
					rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
					range: a.validator.format("Please enter a value between {0} and {1}."),
					max: a.validator.format("Please enter a value less than or equal to {0}."),
					min: a.validator.format("Please enter a value greater than or equal to {0}."),
					step: a.validator.format("Please enter a multiple of {0}.")
			},
			autoCreateRanges: !1,
			prototype: {
					init: function() {
							function b(b) {
									!this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0],
									this.name = a(this).attr("name"));
									var c = a.data(this.form, "validator")
										, d = "on" + b.type.replace(/^validate/, "")
										, e = c.settings;
									e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
							}
							this.labelContainer = a(this.settings.errorLabelContainer),
							this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
							this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
							this.submitted = {},
							this.valueCache = {},
							this.pendingRequest = 0,
							this.pending = {},
							this.invalid = {},
							this.reset();
							var c, d = this.groups = {};
							a.each(this.settings.groups, function(b, c) {
									"string" == typeof c && (c = c.split(/\s/)),
									a.each(c, function(a, c) {
											d[c] = b
									})
							}),
							c = this.settings.rules,
							a.each(c, function(b, d) {
									c[b] = a.validator.normalizeRule(d)
							}),
							a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
							this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
					},
					form: function() {
							return this.checkForm(),
							a.extend(this.submitted, this.errorMap),
							this.invalid = a.extend({}, this.errorMap),
							this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
							this.showErrors(),
							this.valid()
					},
					checkForm: function() {
							this.prepareForm();
							for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
									this.check(b[a]);
							return this.valid()
					},
					element: function(b) {
							var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
							return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
							this.currentElements = a(f),
							d = this.groups[f.name],
							d && a.each(this.groups, function(a, b) {
									b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
									e && e.name in g.invalid && (g.currentElements.push(e),
									h = g.check(e) && h))
							}),
							c = this.check(f) !== !1,
							h = h && c,
							c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
							this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
							this.showErrors(),
							a(b).attr("aria-invalid", !c)),
							h
					},
					showErrors: function(b) {
							if (b) {
									var c = this;
									a.extend(this.errorMap, b),
									this.errorList = a.map(this.errorMap, function(a, b) {
											return {
													message: a,
													element: c.findByName(b)[0]
											}
									}),
									this.successList = a.grep(this.successList, function(a) {
											return !(a.name in b)
									})
							}
							this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
					},
					resetForm: function() {
							a.fn.resetForm && a(this.currentForm).resetForm(),
							this.invalid = {},
							this.submitted = {},
							this.prepareForm(),
							this.hideErrors();
							var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
							this.resetElements(b)
					},
					resetElements: function(a) {
							var b;
							if (this.settings.unhighlight)
									for (b = 0; a[b]; b++)
											this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
											this.findByName(a[b].name).removeClass(this.settings.validClass);
							else
									a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
					},
					numberOfInvalids: function() {
							return this.objectLength(this.invalid)
					},
					objectLength: function(a) {
							var b, c = 0;
							for (b in a)
									void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
							return c
					},
					hideErrors: function() {
							this.hideThese(this.toHide)
					},
					hideThese: function(a) {
							a.not(this.containers).text(""),
							this.addWrapper(a).hide()
					},
					valid: function() {
							return 0 === this.size()
					},
					size: function() {
							return this.errorList.length
					},
					focusInvalid: function() {
							if (this.settings.focusInvalid)
									try {
											a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
									} catch (b) {}
					},
					findLastActive: function() {
							var b = this.lastActive;
							return b && 1 === a.grep(this.errorList, function(a) {
									return a.element.name === b.name
							}).length && b
					},
					elements: function() {
							var b = this
								, c = {};
							return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
									var d = this.name || a(this).attr("name");
									return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
									this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0],
									this.name = d),
									!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0,
									!0)
							})
					},
					clean: function(b) {
							return a(b)[0]
					},
					errors: function() {
							var b = this.settings.errorClass.split(" ").join(".");
							return a(this.settings.errorElement + "." + b, this.errorContext)
					},
					resetInternals: function() {
							this.successList = [],
							this.errorList = [],
							this.errorMap = {},
							this.toShow = a([]),
							this.toHide = a([])
					},
					reset: function() {
							this.resetInternals(),
							this.currentElements = a([])
					},
					prepareForm: function() {
							this.reset(),
							this.toHide = this.errors().add(this.containers)
					},
					prepareElement: function(a) {
							this.reset(),
							this.toHide = this.errorsFor(a)
					},
					elementValue: function(b) {
							var c, d, e = a(b), f = b.type;
							return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(),
							"file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
							d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
							d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
					},
					check: function(b) {
							b = this.validationTargetFor(this.clean(b));
							var c, d, e, f, g = a(b).rules(), h = a.map(g, function(a, b) {
									return b
							}).length, i = !1, j = this.elementValue(b);
							if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer),
							f) {
									if (j = f.call(b, j),
									"string" != typeof j)
											throw new TypeError("The normalizer should return a string value.");
									delete g.normalizer
							}
							for (d in g) {
									e = {
											method: d,
											parameters: g[d]
									};
									try {
											if (c = a.validator.methods[d].call(this, j, b, e.parameters),
											"dependency-mismatch" === c && 1 === h) {
													i = !0;
													continue
											}
											if (i = !1,
											"pending" === c)
													return void (this.toHide = this.toHide.not(this.errorsFor(b)));
											if (!c)
													return this.formatAndAdd(b, e),
													!1
									} catch (k) {
											throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k),
											k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
											k
									}
							}
							if (!i)
									return this.objectLength(g) && this.successList.push(b),
									!0
					},
					customDataMessage: function(b, c) {
							return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
					},
					customMessage: function(a, b) {
							var c = this.settings.messages[a];
							return c && (c.constructor === String ? c : c[b])
					},
					findDefined: function() {
							for (var a = 0; a < arguments.length; a++)
									if (void 0 !== arguments[a])
											return arguments[a]
					},
					defaultMessage: function(b, c) {
							"string" == typeof c && (c = {
									method: c
							});
							var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
								, e = /\$?\{(\d+)\}/g;
							return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
							d
					},
					formatAndAdd: function(a, b) {
							var c = this.defaultMessage(a, b);
							this.errorList.push({
									message: c,
									element: a,
									method: b.method
							}),
							this.errorMap[a.name] = c,
							this.submitted[a.name] = c
					},
					addWrapper: function(a) {
							return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
							a
					},
					defaultShowErrors: function() {
							var a, b, c;
							for (a = 0; this.errorList[a]; a++)
									c = this.errorList[a],
									this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
									this.showLabel(c.element, c.message);
							if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
							this.settings.success)
									for (a = 0; this.successList[a]; a++)
											this.showLabel(this.successList[a]);
							if (this.settings.unhighlight)
									for (a = 0,
									b = this.validElements(); b[a]; a++)
											this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
							this.toHide = this.toHide.not(this.toShow),
							this.hideErrors(),
							this.addWrapper(this.toShow).show()
					},
					validElements: function() {
							return this.currentElements.not(this.invalidElements())
					},
					invalidElements: function() {
							return a(this.errorList).map(function() {
									return this.element
							})
					},
					showLabel: function(b, c) {
							var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
							h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
							h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
							d = h,
							this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
							this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b),
							h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
							j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
							a(b).attr("aria-describedby", j),
							e = this.groups[b.name],
							e && (g = this,
							a.each(g.groups, function(b, c) {
									c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
							})))),
							!c && this.settings.success && (h.text(""),
							"string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
							this.toShow = this.toShow.add(h)
					},
					errorsFor: function(b) {
							var c = this.escapeCssMeta(this.idOrName(b))
								, d = a(b).attr("aria-describedby")
								, e = "label[for='" + c + "'], label[for='" + c + "'] *";
							return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
							this.errors().filter(e)
					},
					escapeCssMeta: function(a) {
							return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
					},
					idOrName: function(a) {
							return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
					},
					validationTargetFor: function(b) {
							return this.checkable(b) && (b = this.findByName(b.name)),
							a(b).not(this.settings.ignore)[0]
					},
					checkable: function(a) {
							return /radio|checkbox/i.test(a.type)
					},
					findByName: function(b) {
							return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
					},
					getLength: function(b, c) {
							switch (c.nodeName.toLowerCase()) {
							case "select":
									return a("option:selected", c).length;
							case "input":
									if (this.checkable(c))
											return this.findByName(c.name).filter(":checked").length
							}
							return b.length
					},
					depend: function(a, b) {
							return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
					},
					dependTypes: {
							"boolean": function(a) {
									return a
							},
							string: function(b, c) {
									return !!a(b, c.form).length
							},
							"function": function(a, b) {
									return a(b)
							}
					},
					optional: function(b) {
							var c = this.elementValue(b);
							return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
					},
					startRequest: function(b) {
							this.pending[b.name] || (this.pendingRequest++,
							a(b).addClass(this.settings.pendingClass),
							this.pending[b.name] = !0)
					},
					stopRequest: function(b, c) {
							this.pendingRequest--,
							this.pendingRequest < 0 && (this.pendingRequest = 0),
							delete this.pending[b.name],
							a(b).removeClass(this.settings.pendingClass),
							c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
							this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
							this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
							this.formSubmitted = !1)
					},
					previousValue: function(b, c) {
							return c = "string" == typeof c && c || "remote",
							a.data(b, "previousValue") || a.data(b, "previousValue", {
									old: null,
									valid: !0,
									message: this.defaultMessage(b, {
											method: c
									})
							})
					},
					destroy: function() {
							this.resetForm(),
							a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
					}
			},
			classRuleSettings: {
					required: {
							required: !0
					},
					email: {
							email: !0
					},
					url: {
							url: !0
					},
					date: {
							date: !0
					},
					dateISO: {
							dateISO: !0
					},
					number: {
							number: !0
					},
					digits: {
							digits: !0
					},
					creditcard: {
							creditcard: !0
					}
			},
			addClassRules: function(b, c) {
					b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
			},
			classRules: function(b) {
					var c = {}
						, d = a(b).attr("class");
					return d && a.each(d.split(" "), function() {
							this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
					}),
					c
			},
			normalizeAttributeRule: function(a, b, c, d) {
					/min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
					isNaN(d) && (d = void 0)),
					d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
			},
			attributeRules: function(b) {
					var c, d, e = {}, f = a(b), g = b.getAttribute("type");
					for (c in a.validator.methods)
							"required" === c ? (d = b.getAttribute(c),
							"" === d && (d = !0),
							d = !!d) : d = f.attr(c),
							this.normalizeAttributeRule(e, g, c, d);
					return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
					e
			},
			dataRules: function(b) {
					var c, d, e = {}, f = a(b), g = b.getAttribute("type");
					for (c in a.validator.methods)
							d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
							this.normalizeAttributeRule(e, g, c, d);
					return e
			},
			staticRules: function(b) {
					var c = {}
						, d = a.data(b.form, "validator");
					return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
					c
			},
			normalizeRules: function(b, c) {
					return a.each(b, function(d, e) {
							if (e === !1)
									return void delete b[d];
							if (e.param || e.depends) {
									var f = !0;
									switch (typeof e.depends) {
									case "string":
											f = !!a(e.depends, c.form).length;
											break;
									case "function":
											f = e.depends.call(c, c)
									}
									f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)),
									delete b[d])
							}
					}),
					a.each(b, function(d, e) {
							b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
					}),
					a.each(["minlength", "maxlength"], function() {
							b[this] && (b[this] = Number(b[this]))
					}),
					a.each(["rangelength", "range"], function() {
							var c;
							b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
							b[this] = [Number(c[0]), Number(c[1])]))
					}),
					a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
					delete b.min,
					delete b.max),
					null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
					delete b.minlength,
					delete b.maxlength)),
					b
			},
			normalizeRule: function(b) {
					if ("string" == typeof b) {
							var c = {};
							a.each(b.split(/\s/), function() {
									c[this] = !0
							}),
							b = c
					}
					return b
			},
			addMethod: function(b, c, d) {
					a.validator.methods[b] = c,
					a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
					c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
			},
			methods: {
					required: function(b, c, d) {
							if (!this.depend(d, c))
									return "dependency-mismatch";
							if ("select" === c.nodeName.toLowerCase()) {
									var e = a(c).val();
									return e && e.length > 0
							}
							return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
					},
					email: function(a, b) {
							return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
					},
					url: function(a, b) {
							return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
					},
					date: function(a, b) {
							return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
					},
					dateISO: function(a, b) {
							return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
					},
					number: function(a, b) {
							return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
					},
					digits: function(a, b) {
							return this.optional(b) || /^\d+$/.test(a)
					},
					minlength: function(b, c, d) {
							var e = a.isArray(b) ? b.length : this.getLength(b, c);
							return this.optional(c) || e >= d
					},
					maxlength: function(b, c, d) {
							var e = a.isArray(b) ? b.length : this.getLength(b, c);
							return this.optional(c) || e <= d
					},
					rangelength: function(b, c, d) {
							var e = a.isArray(b) ? b.length : this.getLength(b, c);
							return this.optional(c) || e >= d[0] && e <= d[1]
					},
					min: function(a, b, c) {
							return this.optional(b) || a >= c
					},
					max: function(a, b, c) {
							return this.optional(b) || a <= c
					},
					range: function(a, b, c) {
							return this.optional(b) || a >= c[0] && a <= c[1]
					},
					step: function(b, c, d) {
							var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"), j = f && !i.test(h.join()), k = function(a) {
									var b = ("" + a).match(/(?:\.(\d+))?$/);
									return b && b[1] ? b[1].length : 0
							}, l = function(a) {
									return Math.round(a * Math.pow(10, e))
							}, m = !0;
							if (j)
									throw new Error(g);
							return e = k(d),
							(k(b) > e || l(b) % l(d) !== 0) && (m = !1),
							this.optional(c) || m
					},
					equalTo: function(b, c, d) {
							var e = a(d);
							return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
									a(c).valid()
							}),
							b === e.val()
					},
					remote: function(b, c, d, e) {
							if (this.optional(c))
									return "dependency-mismatch";
							e = "string" == typeof e && e || "remote";
							var f, g, h, i = this.previousValue(c, e);
							return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
							i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
							this.settings.messages[c.name][e] = i.message,
							d = "string" == typeof d && {
									url: d
							} || d,
							h = a.param(a.extend({
									data: b
							}, d.data)),
							i.old === h ? i.valid : (i.old = h,
							f = this,
							this.startRequest(c),
							g = {},
							g[c.name] = b,
							a.ajax(a.extend(!0, {
									mode: "abort",
									port: "validate" + c.name,
									dataType: "json",
									data: g,
									context: f.currentForm,
									success: function(a) {
											var d, g, h, j = a === !0 || "true" === a;
											f.settings.messages[c.name][e] = i.originalMessage,
											j ? (h = f.formSubmitted,
											f.resetInternals(),
											f.toHide = f.errorsFor(c),
											f.formSubmitted = h,
											f.successList.push(c),
											f.invalid[c.name] = !1,
											f.showErrors()) : (d = {},
											g = a || f.defaultMessage(c, {
													method: e,
													parameters: b
											}),
											d[c.name] = i.message = g,
											f.invalid[c.name] = !0,
											f.showErrors(d)),
											i.valid = j,
											f.stopRequest(c, j)
									}
							}, d)),
							"pending")
					}
			}
	});
	var b, c = {};
	return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
			var e = a.port;
			"abort" === a.mode && (c[e] && c[e].abort(),
			c[e] = d)
	}) : (b = a.ajax,
	a.ajax = function(d) {
			var e = ("mode"in d ? d : a.ajaxSettings).mode
				, f = ("port"in d ? d : a.ajaxSettings).port;
			return "abort" === e ? (c[f] && c[f].abort(),
			c[f] = b.apply(this, arguments),
			c[f]) : b.apply(this, arguments)
	}
	),
	a
});
/* End */
;;/* Start:"a:4:{s:4:"full";s:56:"/local/templates/nspcc/js/jquery.form.js?166601691815248";s:6:"source";s:40:"/local/templates/nspcc/js/jquery.form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
* jQuery Form Plugin
* version: 3.51.0-2014.06.20
* Requires jQuery v1.5 or later
* Copyright (c) 2014 M. Alsup
* Examples and documentation at: http://malsup.com/jquery/form/
* Project repository: https://github.com/malsup/form
* Dual licensed under the MIT and GPL licenses.
* https://github.com/malsup/form#copyright-and-license
*/
!function(e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function(e) {
	"use strict";
	function t(t) {
			var r = t.data;
			t.isDefaultPrevented() || (t.preventDefault(),
			e(t.target).ajaxSubmit(r))
	}
	function r(t) {
			var r = t.target
				, a = e(r);
			if (!a.is("[type=submit],[type=image]")) {
					var n = a.closest("[type=submit]");
					if (0 === n.length)
							return;
					r = n[0]
			}
			var i = this;
			if (i.clk = r,
			"image" == r.type)
					if (void 0 !== t.offsetX)
							i.clk_x = t.offsetX,
							i.clk_y = t.offsetY;
					else if ("function" == typeof e.fn.offset) {
							var o = a.offset();
							i.clk_x = t.pageX - o.left,
							i.clk_y = t.pageY - o.top
					} else
							i.clk_x = t.pageX - r.offsetLeft,
							i.clk_y = t.pageY - r.offsetTop;
			setTimeout(function() {
					i.clk = i.clk_x = i.clk_y = null
			}, 100)
	}
	function a() {
			if (e.fn.ajaxSubmit.debug) {
					var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
					window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
			}
	}
	var n = {};
	n.fileapi = void 0 !== e("<input type='file'/>").get(0).files,
	n.formdata = void 0 !== window.FormData;
	var i = !!e.fn.prop;
	e.fn.attr2 = function() {
			if (!i)
					return this.attr.apply(this, arguments);
			var e = this.prop.apply(this, arguments);
			return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
	}
	,
	e.fn.ajaxSubmit = function(t) {
			function r(r) {
					var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
					for (a = 0; o > a; a++)
							i[a] = i[a].replace(/\+/g, " "),
							n = i[a].split("="),
							s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
					return s
			}
			function o(a) {
					for (var n = new FormData, i = 0; i < a.length; i++)
							n.append(a[i].name, a[i].value);
					if (t.extraData) {
							var o = r(t.extraData);
							for (i = 0; i < o.length; i++)
									o[i] && n.append(o[i][0], o[i][1])
					}
					t.data = null;
					var s = e.extend(!0, {}, e.ajaxSettings, t, {
							contentType: !1,
							processData: !1,
							cache: !1,
							type: u || "POST"
					});
					t.uploadProgress && (s.xhr = function() {
							var r = e.ajaxSettings.xhr();
							return r.upload && r.upload.addEventListener("progress", function(e) {
									var r = 0
										, a = e.loaded || e.position
										, n = e.total;
									e.lengthComputable && (r = Math.ceil(a / n * 100)),
									t.uploadProgress(e, a, n, r)
							}, !1),
							r
					}
					),
					s.data = null;
					var c = s.beforeSend;
					return s.beforeSend = function(e, r) {
							r.data = t.formData ? t.formData : n,
							c && c.call(this, e, r)
					}
					,
					e.ajax(s)
			}
			function s(r) {
					function n(e) {
							var t = null;
							try {
									e.contentWindow && (t = e.contentWindow.document)
							} catch (r) {
									a("cannot get iframe.contentWindow document: " + r)
							}
							if (t)
									return t;
							try {
									t = e.contentDocument ? e.contentDocument : e.document
							} catch (r) {
									a("cannot get iframe.contentDocument: " + r),
									t = e.document
							}
							return t
					}
					function o() {
							function t() {
									try {
											var e = n(g).readyState;
											a("state = " + e),
											e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
									} catch (r) {
											a("Server abort: ", r, " (", r.name, ")"),
											s(k),
											j && clearTimeout(j),
											j = void 0
									}
							}
							var r = f.attr2("target")
								, i = f.attr2("action")
								, o = "multipart/form-data"
								, c = f.attr("enctype") || f.attr("encoding") || o;
							w.setAttribute("target", p),
							(!u || /post/i.test(u)) && w.setAttribute("method", "POST"),
							i != m.url && w.setAttribute("action", m.url),
							m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
									encoding: "multipart/form-data",
									enctype: "multipart/form-data"
							}),
							m.timeout && (j = setTimeout(function() {
									T = !0,
									s(D)
							}, m.timeout));
							var l = [];
							try {
									if (m.extraData)
											for (var d in m.extraData)
													m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
									m.iframeTarget || v.appendTo("body"),
									g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1),
									setTimeout(t, 15);
									try {
											w.submit()
									} catch (h) {
											var x = document.createElement("form").submit;
											x.apply(w)
									}
							} finally {
									w.setAttribute("action", i),
									w.setAttribute("enctype", c),
									r ? w.setAttribute("target", r) : f.removeAttr("target"),
									e(l).remove()
							}
					}
					function s(t) {
							if (!x.aborted && !F) {
									if (M = n(g),
									M || (a("cannot access response document"),
									t = k),
									t === D && x)
											return x.abort("timeout"),
											void S.reject(x, "timeout");
									if (t == k && x)
											return x.abort("server abort"),
											void S.reject(x, "error", "server abort");
									if (M && M.location.href != m.iframeSrc || T) {
											g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
											var r, i = "success";
											try {
													if (T)
															throw "timeout";
													var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
													if (a("isXml=" + o),
													!o && window.opera && (null === M.body || !M.body.innerHTML) && --O)
															return a("requeing onLoad callback, DOM not available"),
															void setTimeout(s, 250);
													var u = M.body ? M.body : M.documentElement;
													x.responseText = u ? u.innerHTML : null,
													x.responseXML = M.XMLDocument ? M.XMLDocument : M,
													o && (m.dataType = "xml"),
													x.getResponseHeader = function(e) {
															var t = {
																	"content-type": m.dataType
															};
															return t[e.toLowerCase()]
													}
													,
													u && (x.status = Number(u.getAttribute("status")) || x.status,
													x.statusText = u.getAttribute("statusText") || x.statusText);
													var c = (m.dataType || "").toLowerCase()
														, l = /(json|script|text)/.test(c);
													if (l || m.textarea) {
															var f = M.getElementsByTagName("textarea")[0];
															if (f)
																	x.responseText = f.value,
																	x.status = Number(f.getAttribute("status")) || x.status,
																	x.statusText = f.getAttribute("statusText") || x.statusText;
															else if (l) {
																	var p = M.getElementsByTagName("pre")[0]
																		, h = M.getElementsByTagName("body")[0];
																	p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
															}
													} else
															"xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
													try {
															E = _(x, c, m)
													} catch (y) {
															i = "parsererror",
															x.error = r = y || i
													}
											} catch (y) {
													a("error caught: ", y),
													i = "error",
													x.error = r = y || i
											}
											x.aborted && (a("upload aborted"),
											i = null),
											x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"),
											"success" === i ? (m.success && m.success.call(m.context, E, "success", x),
											S.resolve(x.responseText, "success", x),
											d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText),
											m.error && m.error.call(m.context, x, i, r),
											S.reject(x, "error", r),
											d && e.event.trigger("ajaxError", [x, m, r])),
											d && e.event.trigger("ajaxComplete", [x, m]),
											d && !--e.active && e.event.trigger("ajaxStop"),
											m.complete && m.complete.call(m.context, x, i),
											F = !0,
											m.timeout && clearTimeout(j),
											setTimeout(function() {
													m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(),
													x.responseXML = null
											}, 100)
									}
							}
					}
					var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
					if (S.abort = function(e) {
							x.abort(e)
					}
					,
					r)
							for (l = 0; l < h.length; l++)
									c = e(h[l]),
									i ? c.prop("disabled", !1) : c.removeAttr("disabled");
					if (m = e.extend(!0, {}, e.ajaxSettings, t),
					m.context = m.context || m,
					p = "jqFormIO" + (new Date).getTime(),
					m.iframeTarget ? (v = e(m.iframeTarget),
					b = v.attr2("name"),
					b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'),
					v.css({
							position: "absolute",
							top: "-1000px",
							left: "-1000px"
					})),
					g = v[0],
					x = {
							aborted: 0,
							responseText: null,
							responseXML: null,
							status: 0,
							statusText: "n/a",
							getAllResponseHeaders: function() {},
							getResponseHeader: function() {},
							setRequestHeader: function() {},
							abort: function(t) {
									var r = "timeout" === t ? "timeout" : "aborted";
									a("aborting upload... " + r),
									this.aborted = 1;
									try {
											g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
									} catch (n) {}
									v.attr("src", m.iframeSrc),
									x.error = r,
									m.error && m.error.call(m.context, x, r, t),
									d && e.event.trigger("ajaxError", [x, m, r]),
									m.complete && m.complete.call(m.context, x, r)
							}
					},
					d = m.global,
					d && 0 === e.active++ && e.event.trigger("ajaxStart"),
					d && e.event.trigger("ajaxSend", [x, m]),
					m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)
							return m.global && e.active--,
							S.reject(),
							S;
					if (x.aborted)
							return S.reject(),
							S;
					y = w.clk,
					y && (b = y.name,
					b && !y.disabled && (m.extraData = m.extraData || {},
					m.extraData[b] = y.value,
					"image" == y.type && (m.extraData[b + ".x"] = w.clk_x,
					m.extraData[b + ".y"] = w.clk_y)));
					var D = 1
						, k = 2
						, A = e("meta[name=csrf-token]").attr("content")
						, L = e("meta[name=csrf-param]").attr("content");
					L && A && (m.extraData = m.extraData || {},
					m.extraData[L] = A),
					m.forceSync ? o() : setTimeout(o, 10);
					var E, M, F, O = 50, X = e.parseXML || function(e, t) {
							return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"),
							t.async = "false",
							t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"),
							t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
					}
					, C = e.parseJSON || function(e) {
							return window.eval("(" + e + ")")
					}
					, _ = function(t, r, a) {
							var n = t.getResponseHeader("content-type") || ""
								, i = "xml" === r || !r && n.indexOf("xml") >= 0
								, o = i ? t.responseXML : t.responseText;
							return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"),
							a && a.dataFilter && (o = a.dataFilter(o, r)),
							"string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)),
							o
					};
					return S
			}
			if (!this.length)
					return a("ajaxSubmit: skipping submit process - no element selected"),
					this;
			var u, c, l, f = this;
			"function" == typeof t ? t = {
					success: t
			} : void 0 === t && (t = {}),
			u = t.type || this.attr2("method"),
			c = t.url || this.attr2("action"),
			l = "string" == typeof c ? e.trim(c) : "",
			l = l || window.location.href || "",
			l && (l = (l.match(/^([^#]+)/) || [])[1]),
			t = e.extend(!0, {
					url: l,
					success: e.ajaxSettings.success,
					type: u || e.ajaxSettings.type,
					iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
			}, t);
			var m = {};
			if (this.trigger("form-pre-serialize", [this, t, m]),
			m.veto)
					return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
					this;
			if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)
					return a("ajaxSubmit: submit aborted via beforeSerialize callback"),
					this;
			var d = t.traditional;
			void 0 === d && (d = e.ajaxSettings.traditional);
			var p, h = [], v = this.formToArray(t.semantic, h);
			if (t.data && (t.extraData = t.data,
			p = e.param(t.data, d)),
			t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)
					return a("ajaxSubmit: submit aborted via beforeSubmit callback"),
					this;
			if (this.trigger("form-submit-validate", [v, this, t, m]),
			m.veto)
					return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
					this;
			var g = e.param(v, d);
			p && (g = g ? g + "&" + p : p),
			"GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g,
			t.data = null) : t.data = g;
			var x = [];
			if (t.resetForm && x.push(function() {
					f.resetForm()
			}),
			t.clearForm && x.push(function() {
					f.clearForm(t.includeHidden)
			}),
			!t.dataType && t.target) {
					var y = t.success || function() {}
					;
					x.push(function(r) {
							var a = t.replaceTarget ? "replaceWith" : "html";
							e(t.target)[a](r).each(y, arguments)
					})
			} else
					t.success && x.push(t.success);
			if (t.success = function(e, r, a) {
					for (var n = t.context || this, i = 0, o = x.length; o > i; i++)
							x[i].apply(n, [e, r, a || f, f])
			}
			,
			t.error) {
					var b = t.error;
					t.error = function(e, r, a) {
							var n = t.context || this;
							b.apply(n, [e, r, a, f])
					}
			}
			if (t.complete) {
					var T = t.complete;
					t.complete = function(e, r) {
							var a = t.context || this;
							T.apply(a, [e, r, f])
					}
			}
			var j = e("input[type=file]:enabled", this).filter(function() {
					return "" !== e(this).val()
			})
				, w = j.length > 0
				, S = "multipart/form-data"
				, D = f.attr("enctype") == S || f.attr("encoding") == S
				, k = n.fileapi && n.formdata;
			a("fileAPI :" + k);
			var A, L = (w || D) && !k;
			t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
					A = s(v)
			}) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t),
			f.removeData("jqxhr").data("jqxhr", A);
			for (var E = 0; E < h.length; E++)
					h[E] = null;
			return this.trigger("form-submit-notify", [this, t]),
			this
	}
	,
	e.fn.ajaxForm = function(n) {
			if (n = n || {},
			n.delegation = n.delegation && e.isFunction(e.fn.on),
			!n.delegation && 0 === this.length) {
					var i = {
							s: this.selector,
							c: this.context
					};
					return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"),
					e(function() {
							e(i.s, i.c).ajaxForm(n)
					}),
					this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")),
					this)
			}
			return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r),
			this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
	}
	,
	e.fn.ajaxFormUnbind = function() {
			return this.unbind("submit.form-plugin click.form-plugin")
	}
	,
	e.fn.formToArray = function(t, r) {
			var a = [];
			if (0 === this.length)
					return a;
			var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
			if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()),
			s && (i = e(':input[form="' + s + '"]').get(),
			i.length && (u = (u || []).concat(i))),
			!u || !u.length)
					return a;
			var c, l, f, m, d, p, h;
			for (c = 0,
			p = u.length; p > c; c++)
					if (d = u[c],
					f = d.name,
					f && !d.disabled)
							if (t && o.clk && "image" == d.type)
									o.clk == d && (a.push({
											name: f,
											value: e(d).val(),
											type: d.type
									}),
									a.push({
											name: f + ".x",
											value: o.clk_x
									}, {
											name: f + ".y",
											value: o.clk_y
									}));
							else if (m = e.fieldValue(d, !0),
							m && m.constructor == Array)
									for (r && r.push(d),
									l = 0,
									h = m.length; h > l; l++)
											a.push({
													name: f,
													value: m[l]
											});
							else if (n.fileapi && "file" == d.type) {
									r && r.push(d);
									var v = d.files;
									if (v.length)
											for (l = 0; l < v.length; l++)
													a.push({
															name: f,
															value: v[l],
															type: d.type
													});
									else
											a.push({
													name: f,
													value: "",
													type: d.type
											})
							} else
									null !== m && "undefined" != typeof m && (r && r.push(d),
									a.push({
											name: f,
											value: m,
											type: d.type,
											required: d.required
									}));
			if (!t && o.clk) {
					var g = e(o.clk)
						, x = g[0];
					f = x.name,
					f && !x.disabled && "image" == x.type && (a.push({
							name: f,
							value: g.val()
					}),
					a.push({
							name: f + ".x",
							value: o.clk_x
					}, {
							name: f + ".y",
							value: o.clk_y
					}))
			}
			return a
	}
	,
	e.fn.formSerialize = function(t) {
			return e.param(this.formToArray(t))
	}
	,
	e.fn.fieldSerialize = function(t) {
			var r = [];
			return this.each(function() {
					var a = this.name;
					if (a) {
							var n = e.fieldValue(this, t);
							if (n && n.constructor == Array)
									for (var i = 0, o = n.length; o > i; i++)
											r.push({
													name: a,
													value: n[i]
											});
							else
									null !== n && "undefined" != typeof n && r.push({
											name: this.name,
											value: n
									})
					}
			}),
			e.param(r)
	}
	,
	e.fn.fieldValue = function(t) {
			for (var r = [], a = 0, n = this.length; n > a; a++) {
					var i = this[a]
						, o = e.fieldValue(i, t);
					null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
			}
			return r
	}
	,
	e.fieldValue = function(t, r) {
			var a = t.name
				, n = t.type
				, i = t.tagName.toLowerCase();
			if (void 0 === r && (r = !0),
			r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))
					return null;
			if ("select" == i) {
					var o = t.selectedIndex;
					if (0 > o)
							return null;
					for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
							var m = u[f];
							if (m.selected) {
									var d = m.value;
									if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value),
									c)
											return d;
									s.push(d)
							}
					}
					return s
			}
			return e(t).val()
	}
	,
	e.fn.clearForm = function(t) {
			return this.each(function() {
					e("input,select,textarea", this).clearFields(t)
			})
	}
	,
	e.fn.clearFields = e.fn.clearInputs = function(t) {
			var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
			return this.each(function() {
					var a = this.type
						, n = this.tagName.toLowerCase();
					r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
			})
	}
	,
	e.fn.resetForm = function() {
			return this.each(function() {
					("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
			})
	}
	,
	e.fn.enable = function(e) {
			return void 0 === e && (e = !0),
			this.each(function() {
					this.disabled = !e
			})
	}
	,
	e.fn.selected = function(t) {
			return void 0 === t && (t = !0),
			this.each(function() {
					var r = this.type;
					if ("checkbox" == r || "radio" == r)
							this.checked = t;
					else if ("option" == this.tagName.toLowerCase()) {
							var a = e(this).parent("select");
							t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1),
							this.selected = t
					}
			})
	}
	,
	e.fn.ajaxSubmit.debug = !1
});
/* End */
;;/* Start:"a:4:{s:4:"full";s:70:"/local/templates/nspcc/js/jquery.magnific-popup.min.js?166601691843021";s:6:"source";s:54:"/local/templates/nspcc/js/jquery.magnific-popup.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function(factory) {
	if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(['jquery'], factory);
	} else if (typeof exports === 'object') {
			// Node/CommonJS
			factory(require('jquery'));
	} else {
			// Browser globals
			factory(window.jQuery || window.Zepto);
	}
}(function($) {

	/*>>core*/
	/**
 *
 * Magnific Popup Core JS file
 *
 */

	/**
 * Private static constants
 */
	var CLOSE_EVENT = 'Close'
		, BEFORE_CLOSE_EVENT = 'BeforeClose'
		, AFTER_CLOSE_EVENT = 'AfterClose'
		, BEFORE_APPEND_EVENT = 'BeforeAppend'
		, MARKUP_PARSE_EVENT = 'MarkupParse'
		, OPEN_EVENT = 'Open'
		, CHANGE_EVENT = 'Change'
		, NS = 'mfp'
		, EVENT_NS = '.' + NS
		, READY_CLASS = 'mfp-ready'
		, REMOVING_CLASS = 'mfp-removing'
		, PREVENT_CLOSE_CLASS = 'mfp-prevent-close';

	/**
 * Private vars
 */
	/*jshint -W079 */
	var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function() {}, _isJQ = !!(window.jQuery), _prevStatus, _window = $(window), _document, _prevContentType, _wrapClasses, _currPopupType;

	/**
 * Private functions
 */
	var _mfpOn = function(name, f) {
			mfp.ev.on(NS + name + EVENT_NS, f);
	}
		, _getEl = function(className, appendTo, html, raw) {
			var el = document.createElement('div');
			el.className = 'mfp-' + className;
			if (html) {
					el.innerHTML = html;
			}
			if (!raw) {
					el = $(el);
					if (appendTo) {
							el.appendTo(appendTo);
					}
			} else if (appendTo) {
					appendTo.appendChild(el);
			}
			return el;
	}
		, _mfpTrigger = function(e, data) {
			mfp.ev.triggerHandler(NS + e, data);

			if (mfp.st.callbacks) {
					// converts "mfpEventName" to "eventName" callback and triggers it if it's present
					e = e.charAt(0).toLowerCase() + e.slice(1);
					if (mfp.st.callbacks[e]) {
							mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
					}
			}
	}
		, _getCloseBtn = function(type) {
			if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
					mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
					_currPopupType = type;
			}
			return mfp.currTemplate.closeBtn;
	}
		, // Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
			if (!$.magnificPopup.instance) {
					/*jshint -W020 */
					mfp = new MagnificPopup();
					mfp.init();
					$.magnificPopup.instance = mfp;
			}
	}
		, // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
			var s = document.createElement('p').style
				, // 's' for style. better to create an element if body yet to exist
			v = ['ms', 'O', 'Moz', 'Webkit'];
			// 'v' for vendor

			if (s['transition'] !== undefined) {
					return true;
			}

			while (v.length) {
					if (v.pop() + 'Transition'in s) {
							return true;
					}
			}

			return false;
	};

	/**
 * Public functions
 */
	MagnificPopup.prototype = {

			constructor: MagnificPopup,

			/**
	 * Initializes Magnific Popup plugin.
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
			init: function() {
					var appVersion = navigator.appVersion;
					mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
					mfp.isAndroid = (/android/gi).test(appVersion);
					mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
					mfp.supportsTransition = supportsTransitions();

					// We disable fixed positioned lightbox on devices that don't handle it nicely.
					// If you know a better way of detecting this - let me know.
					mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
					_document = $(document);

					mfp.popupsCache = {};
			},

			/**
	 * Opens popup
	 * @param  data [description]
	 */
			open: function(data) {

					var i;

					if (data.isObj === false) {
							// convert jQuery collection to array to avoid conflicts later
							mfp.items = data.items.toArray();

							mfp.index = 0;
							var items = data.items, item;
							for (i = 0; i < items.length; i++) {
									item = items[i];
									if (item.parsed) {
											item = item.el[0];
									}
									if (item === data.el[0]) {
											mfp.index = i;
											break;
									}
							}
					} else {
							mfp.items = $.isArray(data.items) ? data.items : [data.items];
							mfp.index = data.index || 0;
					}

					// if popup is already opened - we just update the content
					if (mfp.isOpen) {
							mfp.updateItemHTML();
							return;
					}

					mfp.types = [];
					_wrapClasses = '';
					if (data.mainEl && data.mainEl.length) {
							mfp.ev = data.mainEl.eq(0);
					} else {
							mfp.ev = _document;
					}

					if (data.key) {
							if (!mfp.popupsCache[data.key]) {
									mfp.popupsCache[data.key] = {};
							}
							mfp.currTemplate = mfp.popupsCache[data.key];
					} else {
							mfp.currTemplate = {};
					}

					mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
					mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

					if (mfp.st.modal) {
							mfp.st.closeOnContentClick = false;
							mfp.st.closeOnBgClick = false;
							mfp.st.showCloseBtn = false;
							mfp.st.enableEscapeKey = false;
					}

					// Building markup
					// main containers are created only once
					if (!mfp.bgOverlay) {

							// Dark overlay
							mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
									mfp.close();
							});

							mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
									if (mfp._checkIfClose(e.target)) {
											mfp.close();
									}
							});

							mfp.container = _getEl('container', mfp.wrap);
					}

					mfp.contentContainer = _getEl('content');
					if (mfp.st.preloader) {
							mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
					}

					// Initializing modules
					var modules = $.magnificPopup.modules;
					for (i = 0; i < modules.length; i++) {
							var n = modules[i];
							n = n.charAt(0).toUpperCase() + n.slice(1);
							mfp['init' + n].call(mfp);
					}
					_mfpTrigger('BeforeOpen');

					if (mfp.st.showCloseBtn) {
							// Close button
							if (!mfp.st.closeBtnInside) {
									mfp.wrap.append(_getCloseBtn());
							} else {
									_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
											values.close_replaceWith = _getCloseBtn(item.type);
									});
									_wrapClasses += ' mfp-close-btn-in';
							}
					}

					if (mfp.st.alignTop) {
							_wrapClasses += ' mfp-align-top';
					}

					if (mfp.fixedContentPos) {
							mfp.wrap.css({
									overflow: mfp.st.overflowY,
									overflowX: 'hidden',
									overflowY: mfp.st.overflowY
							});
					} else {
							mfp.wrap.css({
									top: _window.scrollTop(),
									position: 'absolute'
							});
					}
					if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
							mfp.bgOverlay.css({
									height: _document.height(),
									position: 'absolute'
							});
					}

					if (mfp.st.enableEscapeKey) {
							// Close on ESC key
							_document.on('keyup' + EVENT_NS, function(e) {
									if (e.keyCode === 27) {
											mfp.close();
									}
							});
					}

					_window.on('resize' + EVENT_NS, function() {
							mfp.updateSize();
					});

					if (!mfp.st.closeOnContentClick) {
							_wrapClasses += ' mfp-auto-cursor';
					}

					if (_wrapClasses)
							mfp.wrap.addClass(_wrapClasses);

					// this triggers recalculation of layout, so we get it once to not to trigger twice
					var windowHeight = mfp.wH = _window.height();

					var windowStyles = {};

					if (mfp.fixedContentPos) {
							if (mfp._hasScrollBar(windowHeight)) {
									var s = mfp._getScrollbarSize();
									if (s) {
											windowStyles.marginRight = s;
									}
							}
					}

					if (mfp.fixedContentPos) {
							if (!mfp.isIE7) {
									windowStyles.overflow = 'hidden';
							} else {
									// ie7 double-scroll bug
									$('body, html').css('overflow', 'hidden');
							}
					}

					var classesToadd = mfp.st.mainClass;
					if (mfp.isIE7) {
							classesToadd += ' mfp-ie7';
					}
					if (classesToadd) {
							mfp._addClassToMFP(classesToadd);
					}

					// add content
					mfp.updateItemHTML();

					_mfpTrigger('BuildControls');

					// remove scrollbar, add margin e.t.c
					$('html').css(windowStyles);

					// add everything to DOM
					mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));

					// Save last focused element
					mfp._lastFocusedEl = document.activeElement;

					// Wait for next cycle to allow CSS transition
					setTimeout(function() {

							if (mfp.content) {
									mfp._addClassToMFP(READY_CLASS);
									mfp._setFocus();
							} else {
									// if content is not defined (not loaded e.t.c) we add class only for BG
									mfp.bgOverlay.addClass(READY_CLASS);
							}

							// Trap the focus in popup
							_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

					}, 16);

					mfp.isOpen = true;
					mfp.updateSize(windowHeight);
					_mfpTrigger(OPEN_EVENT);

					return data;
			},

			/**
	 * Closes the popup
	 */
			close: function() {
					if (!mfp.isOpen)
							return;
					_mfpTrigger(BEFORE_CLOSE_EVENT);

					mfp.isOpen = false;
					// for CSS3 animation
					if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
							mfp._addClassToMFP(REMOVING_CLASS);
							setTimeout(function() {
									mfp._close();
							}, mfp.st.removalDelay);
					} else {
							mfp._close();
					}
			},

			/**
	 * Helper for close() function
	 */
			_close: function() {
					_mfpTrigger(CLOSE_EVENT);

					var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

					mfp.bgOverlay.detach();
					mfp.wrap.detach();
					mfp.container.empty();

					if (mfp.st.mainClass) {
							classesToRemove += mfp.st.mainClass + ' ';
					}

					mfp._removeClassFromMFP(classesToRemove);

					if (mfp.fixedContentPos) {
							var windowStyles = {
									marginRight: ''
							};
							if (mfp.isIE7) {
									$('body, html').css('overflow', '');
							} else {
									windowStyles.overflow = '';
							}
							$('html').css(windowStyles);
					}

					_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
					mfp.ev.off(EVENT_NS);

					// clean up DOM elements that aren't removed
					mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
					mfp.bgOverlay.attr('class', 'mfp-bg');
					mfp.container.attr('class', 'mfp-container');

					// remove close button from target element
					if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
							if (mfp.currTemplate.closeBtn)
									mfp.currTemplate.closeBtn.detach();
					}

					if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
							$(mfp._lastFocusedEl).focus();
							// put tab focus back
					}
					mfp.currItem = null;
					mfp.content = null;
					mfp.currTemplate = null;
					mfp.prevHeight = 0;

					_mfpTrigger(AFTER_CLOSE_EVENT);
			},

			updateSize: function(winHeight) {

					if (mfp.isIOS) {
							// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
							var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
							var height = window.innerHeight * zoomLevel;
							mfp.wrap.css('height', height);
							mfp.wH = height;
					} else {
							mfp.wH = winHeight || _window.height();
					}
					// Fixes #84: popup incorrectly positioned with position:relative on body
					if (!mfp.fixedContentPos) {
							mfp.wrap.css('height', mfp.wH);
					}

					_mfpTrigger('Resize');

			},

			/**
	 * Set content of popup based on current index
	 */
			updateItemHTML: function() {
					var item = mfp.items[mfp.index];

					// Detach and perform modifications
					mfp.contentContainer.detach();

					if (mfp.content)
							mfp.content.detach();

					if (!item.parsed) {
							item = mfp.parseEl(mfp.index);
					}

					var type = item.type;

					_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
					// BeforeChange event works like so:
					// _mfpOn('BeforeChange', function(e, prevType, newType) { });

					mfp.currItem = item;

					if (!mfp.currTemplate[type]) {
							var markup = mfp.st[type] ? mfp.st[type].markup : false;

							// allows to modify markup
							_mfpTrigger('FirstMarkupParse', markup);

							if (markup) {
									mfp.currTemplate[type] = $(markup);
							} else {
									// if there is no markup found we just define that template is parsed
									mfp.currTemplate[type] = true;
							}
					}

					if (_prevContentType && _prevContentType !== item.type) {
							mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
					}

					var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
					mfp.appendContent(newContent, type);

					item.preloaded = true;

					_mfpTrigger(CHANGE_EVENT, item);
					_prevContentType = item.type;

					// Append container back after its content changed
					mfp.container.prepend(mfp.contentContainer);

					_mfpTrigger('AfterChange');
			},

			/**
	 * Set HTML content of popup
	 */
			appendContent: function(newContent, type) {
					mfp.content = newContent;

					if (newContent) {
							if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
									// if there is no markup, we just append close button element inside
									if (!mfp.content.find('.mfp-close').length) {
											mfp.content.append(_getCloseBtn());
									}
							} else {
									mfp.content = newContent;
							}
					} else {
							mfp.content = '';
					}

					_mfpTrigger(BEFORE_APPEND_EVENT);
					mfp.container.addClass('mfp-' + type + '-holder');

					mfp.contentContainer.append(mfp.content);
			},

			/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
			parseEl: function(index) {
					var item = mfp.items[index], type;

					if (item.tagName) {
							item = {
									el: $(item)
							};
					} else {
							type = item.type;
							item = {
									data: item,
									src: item.src
							};
					}

					if (item.el) {
							var types = mfp.types;

							// check for 'mfp-TYPE' class
							for (var i = 0; i < types.length; i++) {
									if (item.el.hasClass('mfp-' + types[i])) {
											type = types[i];
											break;
									}
							}

							item.src = item.el.attr('data-mfp-src');
							if (!item.src) {
									item.src = item.el.attr('href');
							}
					}

					item.type = type || mfp.st.type || 'inline';
					item.index = index;
					item.parsed = true;
					mfp.items[index] = item;
					_mfpTrigger('ElementParse', item);

					return mfp.items[index];
			},

			/**
	 * Initializes single popup or a group of popups
	 */
			addGroup: function(el, options) {
					var eHandler = function(e) {
							e.mfpEl = this;
							mfp._openClick(e, el, options);
					};

					if (!options) {
							options = {};
					}

					var eName = 'click.magnificPopup';
					options.mainEl = el;

					if (options.items) {
							options.isObj = true;
							el.off(eName).on(eName, eHandler);
					} else {
							options.isObj = false;
							if (options.delegate) {
									el.off(eName).on(eName, options.delegate, eHandler);
							} else {
									options.items = el;
									el.off(eName).on(eName, eHandler);
							}
					}
			},
			_openClick: function(e, el, options) {
					var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;

					if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
							return;
					}

					var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

					if (disableOn) {
							if ($.isFunction(disableOn)) {
									if (!disableOn.call(mfp)) {
											return true;
									}
							} else {
									// else it's number
									if (_window.width() < disableOn) {
											return true;
									}
							}
					}

					if (e.type) {
							e.preventDefault();

							// This will prevent popup from closing if element is inside and popup is already opened
							if (mfp.isOpen) {
									e.stopPropagation();
							}
					}

					options.el = $(e.mfpEl);
					if (options.delegate) {
							options.items = el.find(options.delegate);
					}
					mfp.open(options);
			},

			/**
	 * Updates text on preloader
	 */
			updateStatus: function(status, text) {

					if (mfp.preloader) {
							if (_prevStatus !== status) {
									mfp.container.removeClass('mfp-s-' + _prevStatus);
							}

							if (!text && status === 'loading') {
									text = mfp.st.tLoading;
							}

							var data = {
									status: status,
									text: text
							};
							// allows to modify status
							_mfpTrigger('UpdateStatus', data);

							status = data.status;
							text = data.text;

							mfp.preloader.html(text);

							mfp.preloader.find('a').on('click', function(e) {
									e.stopImmediatePropagation();
							});

							mfp.container.addClass('mfp-s-' + status);
							_prevStatus = status;
					}
			},

			/*
	 "Private" helpers that aren't private at all
	 */
			// Check to close popup or not
			// "target" is an element that was clicked
			_checkIfClose: function(target) {

					if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
							return;
					}

					var closeOnContent = mfp.st.closeOnContentClick;
					var closeOnBg = mfp.st.closeOnBgClick;

					if (closeOnContent && closeOnBg) {
							return true;
					} else {

							// We close the popup if click is on close button or on preloader. Or if there is no content.
							if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
									return true;
							}

							// if click is outside the content
							if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
									if (closeOnBg) {
											// last check, if the clicked element is in DOM, (in case it's removed onclick)
											if ($.contains(document, target)) {
													return true;
											}
									}
							} else if (closeOnContent) {
									return true;
							}

					}
					return false;
			},
			_addClassToMFP: function(cName) {
					mfp.bgOverlay.addClass(cName);
					mfp.wrap.addClass(cName);
			},
			_removeClassFromMFP: function(cName) {
					this.bgOverlay.removeClass(cName);
					mfp.wrap.removeClass(cName);
			},
			_hasScrollBar: function(winHeight) {
					return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
			},
			_setFocus: function() {
					(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
			},
			_onFocusIn: function(e) {
					if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
							mfp._setFocus();
							return false;
					}
			},
			_parseMarkup: function(template, values, item) {
					var arr;
					if (item.data) {
							values = $.extend(item.data, values);
					}
					_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

					$.each(values, function(key, value) {
							if (value === undefined || value === false) {
									return true;
							}
							arr = key.split('_');
							if (arr.length > 1) {
									var el = template.find(EVENT_NS + '-' + arr[0]);

									if (el.length > 0) {
											var attr = arr[1];
											if (attr === 'replaceWith') {
													if (el[0] !== value[0]) {
															el.replaceWith(value);
													}
											} else if (attr === 'img') {
													if (el.is('img')) {
															el.attr('src', value);
													} else {
															el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
													}
											} else {
													el.attr(arr[1], value);
											}
									}

							} else {
									template.find(EVENT_NS + '-' + key).html(value);
							}
					});
			},

			_getScrollbarSize: function() {
					// thx David
					if (mfp.scrollbarSize === undefined) {
							var scrollDiv = document.createElement("div");
							scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
							document.body.appendChild(scrollDiv);
							mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
							document.body.removeChild(scrollDiv);
					}
					return mfp.scrollbarSize;
			}

	};
	/* MagnificPopup core prototype end */

	/**
 * Public static functions
 */
	$.magnificPopup = {
			instance: null,
			proto: MagnificPopup.prototype,
			modules: [],

			open: function(options, index) {
					_checkInstance();

					if (!options) {
							options = {};
					} else {
							options = $.extend(true, {}, options);
					}

					options.isObj = true;
					options.index = index || 0;
					return this.instance.open(options);
			},

			close: function() {
					return $.magnificPopup.instance && $.magnificPopup.instance.close();
			},

			registerModule: function(name, module) {
					if (module.options) {
							$.magnificPopup.defaults[name] = module.options;
					}
					$.extend(this.proto, module.proto);
					this.modules.push(name);
			},

			defaults: {

					// Info about options is in docs:
					// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

					disableOn: 0,

					key: null,

					midClick: false,

					mainClass: '',

					preloader: true,

					focus: '',
					// CSS selector of input to focus after popup is opened

					closeOnContentClick: false,

					closeOnBgClick: true,

					closeBtnInside: true,

					showCloseBtn: true,

					enableEscapeKey: true,

					modal: false,

					alignTop: false,

					removalDelay: 0,

					prependTo: null,

					fixedContentPos: 'auto',

					fixedBgPos: 'auto',

					overflowY: 'auto',

					closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

					tClose: 'Close (Esc)',

					tLoading: 'Loading...',

					autoFocusLast: true

			}
	};

	$.fn.magnificPopup = function(options) {
			_checkInstance();

			var jqEl = $(this);

			// We call some API method of first param is a string
			if (typeof options === "string") {

					if (options === 'open') {
							var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;

							if (itemOpts.items) {
									items = itemOpts.items[index];
							} else {
									items = jqEl;
									if (itemOpts.delegate) {
											items = items.find(itemOpts.delegate);
									}
									items = items.eq(index);
							}
							mfp._openClick({
									mfpEl: items
							}, jqEl, itemOpts);
					} else {
							if (mfp.isOpen)
									mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
					}

			} else {
					// clone options obj
					options = $.extend(true, {}, options);

					/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
					if (_isJQ) {
							jqEl.data('magnificPopup', options);
					} else {
							jqEl[0].magnificPopup = options;
					}

					mfp.addGroup(jqEl, options);

			}
			return jqEl;
	}
	;

	/*>>core*/

	/*>>inline*/

	var INLINE_NS = 'inline', _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
			if (_lastInlineElement) {
					_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
					_lastInlineElement = null;
			}
	};

	$.magnificPopup.registerModule(INLINE_NS, {
			options: {
					hiddenClass: 'hide',
					// will be appended with `mfp-` prefix
					markup: '',
					tNotFound: 'Content not found'
			},
			proto: {

					initInline: function() {
							mfp.types.push(INLINE_NS);

							_mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
									_putInlineElementsBack();
							});
					},

					getInline: function(item, template) {

							_putInlineElementsBack();

							if (item.src) {
									var inlineSt = mfp.st.inline
										, el = $(item.src);

									if (el.length) {

											// If target element has parent - we replace it with placeholder and put it back after popup is closed
											var parent = el[0].parentNode;
											if (parent && parent.tagName) {
													if (!_inlinePlaceholder) {
															_hiddenClass = inlineSt.hiddenClass;
															_inlinePlaceholder = _getEl(_hiddenClass);
															_hiddenClass = 'mfp-' + _hiddenClass;
													}
													// replace target inline element with placeholder
													_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
											}

											mfp.updateStatus('ready');
									} else {
											mfp.updateStatus('error', inlineSt.tNotFound);
											el = $('<div>');
									}

									item.inlineElement = el;
									return el;
							}

							mfp.updateStatus('ready');
							mfp._parseMarkup(template, {}, item);
							return template;
					}
			}
	});

	/*>>inline*/

	/*>>ajax*/
	var AJAX_NS = 'ajax', _ajaxCur, _removeAjaxCursor = function() {
			if (_ajaxCur) {
					$(document.body).removeClass(_ajaxCur);
			}
	}, _destroyAjaxRequest = function() {
			_removeAjaxCursor();
			if (mfp.req) {
					mfp.req.abort();
			}
	};

	$.magnificPopup.registerModule(AJAX_NS, {

			options: {
					settings: null,
					cursor: 'mfp-ajax-cur',
					tError: '<a href="%url%">The content</a> could not be loaded.'
			},

			proto: {
					initAjax: function() {
							mfp.types.push(AJAX_NS);
							_ajaxCur = mfp.st.ajax.cursor;

							_mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
							_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
					},
					getAjax: function(item) {

							if (_ajaxCur) {
									$(document.body).addClass(_ajaxCur);
							}

							mfp.updateStatus('loading');

							var opts = $.extend({
									url: item.src,
									success: function(data, textStatus, jqXHR) {
											var temp = {
													data: data,
													xhr: jqXHR
											};

											_mfpTrigger('ParseAjax', temp);

											mfp.appendContent($(temp.data), AJAX_NS);

											item.finished = true;

											_removeAjaxCursor();

											mfp._setFocus();

											setTimeout(function() {
													mfp.wrap.addClass(READY_CLASS);
											}, 16);

											mfp.updateStatus('ready');

											_mfpTrigger('AjaxContentAdded');
									},
									error: function() {
											_removeAjaxCursor();
											item.finished = item.loadError = true;
											mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
									}
							}, mfp.st.ajax.settings);

							mfp.req = $.ajax(opts);

							return '';
					}
			}
	});

	/*>>ajax*/

	/*>>image*/
	var _imgInterval, _getTitle = function(item) {
			if (item.data && item.data.title !== undefined)
					return item.data.title;

			var src = mfp.st.image.titleSrc;

			if (src) {
					if ($.isFunction(src)) {
							return src.call(mfp, item);
					} else if (item.el) {
							return item.el.attr(src) || '';
					}
			}
			return '';
	};

	$.magnificPopup.registerModule('image', {

			options: {
					markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
					cursor: 'mfp-zoom-out-cur',
					titleSrc: 'title',
					verticalFit: true,
					tError: '<a href="%url%">The image</a> could not be loaded.'
			},

			proto: {
					initImage: function() {
							var imgSt = mfp.st.image
								, ns = '.image';

							mfp.types.push('image');

							_mfpOn(OPEN_EVENT + ns, function() {
									if (mfp.currItem.type === 'image' && imgSt.cursor) {
											$(document.body).addClass(imgSt.cursor);
									}
							});

							_mfpOn(CLOSE_EVENT + ns, function() {
									if (imgSt.cursor) {
											$(document.body).removeClass(imgSt.cursor);
									}
									_window.off('resize' + EVENT_NS);
							});

							_mfpOn('Resize' + ns, mfp.resizeImage);
							if (mfp.isLowIE) {
									_mfpOn('AfterChange', mfp.resizeImage);
							}
					},
					resizeImage: function() {
							var item = mfp.currItem;
							if (!item || !item.img)
									return;

							if (mfp.st.image.verticalFit) {
									var decr = 0;
									// fix box-sizing in ie7/8
									if (mfp.isLowIE) {
											decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
									}
									item.img.css('max-height', mfp.wH - decr);
							}
					},
					_onImageHasSize: function(item) {
							if (item.img) {

									item.hasSize = true;

									if (_imgInterval) {
											clearInterval(_imgInterval);
									}

									item.isCheckingImgSize = false;

									_mfpTrigger('ImageHasSize', item);

									if (item.imgHidden) {
											if (mfp.content)
													mfp.content.removeClass('mfp-loading');

											item.imgHidden = false;
									}

							}
					},

					/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
					findImageSize: function(item) {

							var counter = 0
								, img = item.img[0]
								, mfpSetInterval = function(delay) {

									if (_imgInterval) {
											clearInterval(_imgInterval);
									}
									// decelerating interval that checks for size of an image
									_imgInterval = setInterval(function() {
											if (img.naturalWidth > 0) {
													mfp._onImageHasSize(item);
													return;
											}

											if (counter > 200) {
													clearInterval(_imgInterval);
											}

											counter++;
											if (counter === 3) {
													mfpSetInterval(10);
											} else if (counter === 40) {
													mfpSetInterval(50);
											} else if (counter === 100) {
													mfpSetInterval(500);
											}
									}, delay);
							};

							mfpSetInterval(1);
					},

					getImage: function(item, template) {

							var guard = 0
								,
							// image load complete handler
							onLoadComplete = function() {
									if (item) {
											if (item.img[0].complete) {
													item.img.off('.mfploader');

													if (item === mfp.currItem) {
															mfp._onImageHasSize(item);

															mfp.updateStatus('ready');
													}

													item.hasSize = true;
													item.loaded = true;

													_mfpTrigger('ImageLoadComplete');

											} else {
													// if image complete check fails 200 times (20 sec), we assume that there was an error.
													guard++;
													if (guard < 200) {
															setTimeout(onLoadComplete, 100);
													} else {
															onLoadError();
													}
											}
									}
							}
								,
							// image error handler
							onLoadError = function() {
									if (item) {
											item.img.off('.mfploader');
											if (item === mfp.currItem) {
													mfp._onImageHasSize(item);
													mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
											}

											item.hasSize = true;
											item.loaded = true;
											item.loadError = true;
									}
							}
								, imgSt = mfp.st.image;

							var el = template.find('.mfp-img');
							if (el.length) {
									var img = document.createElement('img');
									img.className = 'mfp-img';
									if (item.el && item.el.find('img').length) {
											img.alt = item.el.find('img').attr('alt');
									}
									item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
									img.src = item.src;

									// without clone() "error" event is not firing when IMG is replaced by new IMG
									// TODO: find a way to avoid such cloning
									if (el.is('img')) {
											item.img = item.img.clone();
									}

									img = item.img[0];
									if (img.naturalWidth > 0) {
											item.hasSize = true;
									} else if (!img.width) {
											item.hasSize = false;
									}
							}

							mfp._parseMarkup(template, {
									title: _getTitle(item),
									img_replaceWith: item.img
							}, item);

							mfp.resizeImage();

							if (item.hasSize) {
									if (_imgInterval)
											clearInterval(_imgInterval);

									if (item.loadError) {
											template.addClass('mfp-loading');
											mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
									} else {
											template.removeClass('mfp-loading');
											mfp.updateStatus('ready');
									}
									return template;
							}

							mfp.updateStatus('loading');
							item.loading = true;

							if (!item.hasSize) {
									item.imgHidden = true;
									template.addClass('mfp-loading');
									mfp.findImageSize(item);
							}

							return template;
					}
			}
	});

	/*>>image*/

	/*>>zoom*/
	var hasMozTransform, getHasMozTransform = function() {
			if (hasMozTransform === undefined) {
					hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
			}
			return hasMozTransform;
	};

	$.magnificPopup.registerModule('zoom', {

			options: {
					enabled: false,
					easing: 'ease-in-out',
					duration: 300,
					opener: function(element) {
							return element.is('img') ? element : element.find('img');
					}
			},

			proto: {

					initZoom: function() {
							var zoomSt = mfp.st.zoom, ns = '.zoom', image;

							if (!zoomSt.enabled || !mfp.supportsTransition) {
									return;
							}

							var duration = zoomSt.duration, getElToAnimate = function(image) {
									var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image')
										, transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing
										, cssObj = {
											position: 'fixed',
											zIndex: 9999,
											left: 0,
											top: 0,
											'-webkit-backface-visibility': 'hidden'
									}
										, t = 'transition';

									cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

									newImg.css(cssObj);
									return newImg;
							}, showMainContent = function() {
									mfp.content.css('visibility', 'visible');
							}, openTimeout, animatedImg;

							_mfpOn('BuildControls' + ns, function() {
									if (mfp._allowZoom()) {

											clearTimeout(openTimeout);
											mfp.content.css('visibility', 'hidden');

											// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

											image = mfp._getItemToZoom();

											if (!image) {
													showMainContent();
													return;
											}

											animatedImg = getElToAnimate(image);

											animatedImg.css(mfp._getOffset());

											mfp.wrap.append(animatedImg);

											openTimeout = setTimeout(function() {
													animatedImg.css(mfp._getOffset(true));
													openTimeout = setTimeout(function() {

															showMainContent();

															setTimeout(function() {
																	animatedImg.remove();
																	image = animatedImg = null;
																	_mfpTrigger('ZoomAnimationEnded');
															}, 16);
															// avoid blink when switching images

													}, duration);
													// this timeout equals animation duration

											}, 16);
											// by adding this timeout we avoid short glitch at the beginning of animation

											// Lots of timeouts...
									}
							});
							_mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
									if (mfp._allowZoom()) {

											clearTimeout(openTimeout);

											mfp.st.removalDelay = duration;

											if (!image) {
													image = mfp._getItemToZoom();
													if (!image) {
															return;
													}
													animatedImg = getElToAnimate(image);
											}

											animatedImg.css(mfp._getOffset(true));
											mfp.wrap.append(animatedImg);
											mfp.content.css('visibility', 'hidden');

											setTimeout(function() {
													animatedImg.css(mfp._getOffset());
											}, 16);
									}

							});

							_mfpOn(CLOSE_EVENT + ns, function() {
									if (mfp._allowZoom()) {
											showMainContent();
											if (animatedImg) {
													animatedImg.remove();
											}
											image = null;
									}
							});
					},

					_allowZoom: function() {
							return mfp.currItem.type === 'image';
					},

					_getItemToZoom: function() {
							if (mfp.currItem.hasSize) {
									return mfp.currItem.img;
							} else {
									return false;
							}
					},

					// Get element postion relative to viewport
					_getOffset: function(isLarge) {
							var el;
							if (isLarge) {
									el = mfp.currItem.img;
							} else {
									el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
							}

							var offset = el.offset();
							var paddingTop = parseInt(el.css('padding-top'), 10);
							var paddingBottom = parseInt(el.css('padding-bottom'), 10);
							offset.top -= ($(window).scrollTop() - paddingTop);

							/*

			 Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
							var obj = {
									width: el.width(),
									// fix Zepto height+padding issue
									height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
							};

							// I hate to do this, but there is no another option
							if (getHasMozTransform()) {
									obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
							} else {
									obj.left = offset.left;
									obj.top = offset.top;
							}
							return obj;
					}

			}
	});

	/*>>zoom*/

	/*>>iframe*/

	var IFRAME_NS = 'iframe'
		, _emptyPage = '//about:blank'
		,
	_fixIframeBugs = function(isShowing) {
			if (mfp.currTemplate[IFRAME_NS]) {
					var el = mfp.currTemplate[IFRAME_NS].find('iframe');
					if (el.length) {
							// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
							if (!isShowing) {
									el[0].src = _emptyPage;
							}

							// IE8 black screen bug fix
							if (mfp.isIE8) {
									el.css('display', isShowing ? 'block' : 'none');
							}
					}
			}
	};

	$.magnificPopup.registerModule(IFRAME_NS, {

			options: {
					markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',

					srcAction: 'iframe_src',

					// we don't care and support only one default type of URL by default
					patterns: {
							youtube: {
									index: 'youtube.com',
									id: 'v=',
									src: '//www.youtube.com/embed/%id%?autoplay=1'
							},
							vimeo: {
									index: 'vimeo.com/',
									id: '/',
									src: '//player.vimeo.com/video/%id%?autoplay=1'
							},
							gmaps: {
									index: '//maps.google.',
									src: '%id%&output=embed'
							}
					}
			},

			proto: {
					initIframe: function() {
							mfp.types.push(IFRAME_NS);

							_mfpOn('BeforeChange', function(e, prevType, newType) {
									if (prevType !== newType) {
											if (prevType === IFRAME_NS) {
													_fixIframeBugs();
													// iframe if removed
											} else if (newType === IFRAME_NS) {
													_fixIframeBugs(true);
													// iframe is showing
											}
									}
									// else {
									// iframe source is switched, don't do anything
									//}
							});

							_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
									_fixIframeBugs();
							});
					},

					getIframe: function(item, template) {
							var embedSrc = item.src;
							var iframeSt = mfp.st.iframe;

							$.each(iframeSt.patterns, function() {
									if (embedSrc.indexOf(this.index) > -1) {
											if (this.id) {
													if (typeof this.id === 'string') {
															embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
													} else {
															embedSrc = this.id.call(this, embedSrc);
													}
											}
											embedSrc = this.src.replace('%id%', embedSrc);
											return false;
											// break;
									}
							});

							var dataObj = {};
							if (iframeSt.srcAction) {
									dataObj[iframeSt.srcAction] = embedSrc;
							}
							mfp._parseMarkup(template, dataObj, item);

							mfp.updateStatus('ready');

							return template;
					}
			}
	});

	/*>>iframe*/

	/*>>gallery*/
	/**
 * Get looped index depending on number of slides
 */
	var _getLoopedId = function(index) {
			var numSlides = mfp.items.length;
			if (index > numSlides - 1) {
					return index - numSlides;
			} else if (index < 0) {
					return numSlides + index;
			}
			return index;
	}
		, _replaceCurrTotal = function(text, curr, total) {
			return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

	$.magnificPopup.registerModule('gallery', {

			options: {
					enabled: false,
					arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
					preload: [0, 2],
					navigateByImgClick: true,
					arrows: true,

					tPrev: 'Previous (Left arrow key)',
					tNext: 'Next (Right arrow key)',
					tCounter: '%curr% of %total%'
			},

			proto: {
					initGallery: function() {

							var gSt = mfp.st.gallery
								, ns = '.mfp-gallery';

							mfp.direction = true;
							// true - next, false - prev

							if (!gSt || !gSt.enabled)
									return false;

							_wrapClasses += ' mfp-gallery';

							_mfpOn(OPEN_EVENT + ns, function() {

									if (gSt.navigateByImgClick) {
											mfp.wrap.on('click' + ns, '.mfp-img', function() {
													if (mfp.items.length > 1) {
															mfp.next();
															return false;
													}
											});
									}

									_document.on('keydown' + ns, function(e) {
											if (e.keyCode === 37) {
													mfp.prev();
											} else if (e.keyCode === 39) {
													mfp.next();
											}
									});
							});

							_mfpOn('UpdateStatus' + ns, function(e, data) {
									if (data.text) {
											data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
									}
							});

							_mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
									var l = mfp.items.length;
									values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
							});

							_mfpOn('BuildControls' + ns, function() {
									if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
											var markup = gSt.arrowMarkup
												, arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS)
												, arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

											arrowLeft.click(function() {
													mfp.prev();
											});
											arrowRight.click(function() {
													mfp.next();
											});

											mfp.container.append(arrowLeft.add(arrowRight));
									}
							});

							_mfpOn(CHANGE_EVENT + ns, function() {
									if (mfp._preloadTimeout)
											clearTimeout(mfp._preloadTimeout);

									mfp._preloadTimeout = setTimeout(function() {
											mfp.preloadNearbyImages();
											mfp._preloadTimeout = null;
									}, 16);
							});

							_mfpOn(CLOSE_EVENT + ns, function() {
									_document.off(ns);
									mfp.wrap.off('click' + ns);
									mfp.arrowRight = mfp.arrowLeft = null;
							});

					},
					next: function() {
							mfp.direction = true;
							mfp.index = _getLoopedId(mfp.index + 1);
							mfp.updateItemHTML();
					},
					prev: function() {
							mfp.direction = false;
							mfp.index = _getLoopedId(mfp.index - 1);
							mfp.updateItemHTML();
					},
					goTo: function(newIndex) {
							mfp.direction = (newIndex >= mfp.index);
							mfp.index = newIndex;
							mfp.updateItemHTML();
					},
					preloadNearbyImages: function() {
							var p = mfp.st.gallery.preload, preloadBefore = Math.min(p[0], mfp.items.length), preloadAfter = Math.min(p[1], mfp.items.length), i;

							for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
									mfp._preloadItem(mfp.index + i);
							}
							for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
									mfp._preloadItem(mfp.index - i);
							}
					},
					_preloadItem: function(index) {
							index = _getLoopedId(index);

							if (mfp.items[index].preloaded) {
									return;
							}

							var item = mfp.items[index];
							if (!item.parsed) {
									item = mfp.parseEl(index);
							}

							_mfpTrigger('LazyLoad', item);

							if (item.type === 'image') {
									item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
											item.hasSize = true;
									}).on('error.mfploader', function() {
											item.hasSize = true;
											item.loadError = true;
											_mfpTrigger('LazyLoadError', item);
									}).attr('src', item.src);
							}

							item.preloaded = true;
					}
			}
	});

	/*>>gallery*/

	/*>>retina*/

	var RETINA_NS = 'retina';

	$.magnificPopup.registerModule(RETINA_NS, {
			options: {
					replaceSrc: function(item) {
							return item.src.replace(/\.\w+$/, function(m) {
									return '@2x' + m;
							});
					},
					ratio: 1 // Function or number.  Set to 1 to disable.
			},
			proto: {
					initRetina: function() {
							if (window.devicePixelRatio > 1) {

									var st = mfp.st.retina
										, ratio = st.ratio;

									ratio = !isNaN(ratio) ? ratio : ratio();

									if (ratio > 1) {
											_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
													item.img.css({
															'max-width': item.img[0].naturalWidth / ratio,
															'width': '100%'
													});
											});
											_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
													item.src = st.replaceSrc(item, ratio);
											});
									}
							}

					}
			}
	});

	/*>>retina*/
	_checkInstance();
}));
/* End */
;;/* Start:"a:4:{s:4:"full";s:47:"/local/templates/nspcc/js/neo.js?16660169184537";s:6:"source";s:32:"/local/templates/nspcc/js/neo.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$.fn.extend({
	animateCss: function(animationName, callback) {
			var animationEnd = (function(el) {
					var animations = {
							animation: 'animationend',
							OAnimation: 'oAnimationEnd',
							MozAnimation: 'mozAnimationEnd',
							WebkitAnimation: 'webkitAnimationEnd',
					};

					for (var t in animations) {
							if (el.style[t] !== undefined) {
									return animations[t];
							}
					}
			}
			)(document.createElement('div'));

			this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass('animated ' + animationName);

					if (typeof callback === 'function')
							callback();
			});

			return this;
	},
});

var isMobile = {
	Android: function() {
			return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

function scrollToNeo(el) {
	var duration = 600;
	var element = $(el).offset();
	var pos = element.top - 100;
	$('html, body').animate({
			scrollTop: pos
	}, {
			duration: 600,
			specialEasing: {
					height: 'easeInOutCirc'
			},
			complete: function() {
					animated = false;
			}
	});
}

function getScrollBarWidth() {
	var $outer = $('<div>').css({
			visibility: 'hidden',
			width: 100,
			overflow: 'scroll'
	}).appendTo('body')
		, widthWithScroll = $('<div>').css({
			width: '100%'
	}).appendTo($outer).outerWidth();
	$outer.remove();
	return 100 - widthWithScroll;
}
;

$(document).ready(function() {

	if (!isMobile.any()) {
			if ($("#scene").length) {
					var scene = document.getElementById('scene');
					var parallaxInstance = new Parallax(scene);
			}
	}

	$('header').animateCss('slideInDown');
	if ($(".introText").length) {
			$('.introText').animateCss('fadeIn');
	}
	if ($(".staticPageIntro").length) {
			$('.staticPageIntro .container').animateCss('fadeIn');
	}

	$('.openMobileMenu A').click(function(e) {
			e.preventDefault();
			$('.topmenu').slideToggle(function() {
					if ($('.topmenu').css('display') == 'block') {
							$('.openMobileMenu A i').removeClass('fa-bars').addClass('fa-times');
					} else {
							$('.openMobileMenu A i').removeClass('fa-times').addClass('fa-bars');
					}
			});
	});

	$('.topmenu A').click(function(e) {
			if ($(this).hasClass('scrollLink')) {
					e.preventDefault();
					scrollToNeo($(this).attr('href'));
					window.location.hash = $(this).attr('href');

					if ($(document).width() < 992) {
							$('.topmenu').slideToggle(function() {
									if ($('.topmenu').css('display') == 'block') {
											$('.openMobileMenu A i').removeClass('fa-bars').addClass('fa-times');
									} else {
											$('.openMobileMenu A i').removeClass('fa-times').addClass('fa-bars');
									}
							});
					}

			}
	});

	$('header .scrollLogo').click(function(e) {
			e.preventDefault();
			scrollToNeo('#topAbout');
			window.location.hash = '';
	});

	var gotoLink = window.location.hash;
	if (gotoLink.length > 1) {
			$('.topmenu A').each(function() {
					if ($(this).attr('href') == gotoLink) {
							scrollToNeo($(this).attr('href'));
					}
			});
	}

	$(window).on("scroll", function(e) {
			if ($(document).width() > 991) {
					if ($(this).scrollTop() > 500 && !$("header").hasClass("topfixed")) {
							$("header").addClass("topfixed");
					} else if ($(this).scrollTop() < 500 && $("header").hasClass("topfixed")) {
							$("header").removeClass("topfixed");
					}
			}
	});

	$('.vacancy-item .vacancy-title').click(function(e) {
			e.preventDefault();
			if ($(this).parent().hasClass('active')) {
					$(this).parent().removeClass('active');
			} else {
					$(this).parent().addClass('active');
			}
	});

	$('.view-popup-team').magnificPopup({
		closeOnBgClick: true,
		closeOnContentClick: false,
		mainClass: 'my-mfp-slide-bottom'
	});
});

if (!isMobile.any()) {
	skrollr.init({
			forceHeight: false,
			easing: {
					vibrate: function(p) {
							return Math.sin(p * 10 * Math.PI);
					}
			}
	});
}
