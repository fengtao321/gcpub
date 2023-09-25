!(function (a) {
  var e = "https://s.go-mpulse.net/boomerang/",
    t = "addEventListener";
  if ("False" == "True")
    (a.BOOMR_config = a.BOOMR_config || {}),
      (a.BOOMR_config.PageParams = a.BOOMR_config.PageParams || {}),
      (a.BOOMR_config.PageParams.pci = !0),
      (e = "https://s2.go-mpulse.net/boomerang/");
  if (
    ((window.BOOMR_API_key = "KBFUZ-C9D7G-RB8SX-GRGEN-HGMC9"),
    (function () {
      function n(e) {
        a.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
      }
      if (!a.BOOMR || (!a.BOOMR.version && !a.BOOMR.snippetExecuted)) {
        (a.BOOMR = a.BOOMR || {}), (a.BOOMR.snippetExecuted = !0);
        var i,
          _,
          o,
          r = document.createElement("iframe");
        if (a[t]) a[t]("load", n, !1);
        else if (a.attachEvent) a.attachEvent("onload", n);
        (r.src = "javascript:void(0)"),
          (r.title = ""),
          (r.role = "presentation"),
          ((r.frameElement || r).style.cssText =
            "width:0;height:0;border:0;display:none;"),
          (o = document.getElementsByTagName("script")[0]),
          o.parentNode.insertBefore(r, o);
        try {
          _ = r.contentWindow.document;
        } catch (O) {
          (i = document.domain),
            (r.src =
              "javascript:var d=document.open();d.domain='" + i + "';void(0);"),
            (_ = r.contentWindow.document);
        }
        (_.open()._l = function () {
          var a = this.createElement("script");
          if (i) this.domain = i;
          (a.id = "boomr-if-as"),
            (a.src = e + "KBFUZ-C9D7G-RB8SX-GRGEN-HGMC9"),
            (BOOMR_lstart = new Date().getTime()),
            this.body.appendChild(a);
        }),
          _.write("<bo" + 'dy onload="document._l();">'),
          _.close();
      }
    })(),
    "".length > 0)
  )
    if (
      a &&
      "performance" in a &&
      a.performance &&
      "function" == typeof a.performance.setResourceTimingBufferSize
    )
      a.performance.setResourceTimingBufferSize();
  !(function () {
    if (
      ((BOOMR = a.BOOMR || {}),
      (BOOMR.plugins = BOOMR.plugins || {}),
      !BOOMR.plugins.AK)
    ) {
      var e = "" == "true" ? 1 : 0,
        t = "",
        n =
          "eyd75khcybupajqacqfgaaabsnsraw5h-f-cae3aba2e-clienttons-s.akamaihd.net",
        i = "false" == "true" ? 2 : 1,
        _ = {
          "ak.v": "36",
          "ak.cp": "368225",
          "ak.ai": parseInt("231651", 10),
          "ak.ol": "0",
          "ak.cr": 47,
          "ak.ipv": 6,
          "ak.proto": "http/1.1",
          "ak.rid": "a5c5618",
          "ak.r": 33411,
          "ak.a2": e,
          "ak.m": "dscb",
          "ak.n": "essl",
          "ak.bpcip": "2607:fea8:e2c0:68f0::",
          "ak.cport": 53727,
          "ak.gh": "209.148.204.76",
          "ak.quicv": "",
          "ak.tlsv": "tls1.3",
          "ak.0rtt": "",
          "ak.csrc": "-",
          "ak.acc": "reno",
          "ak.t": "1695570855",
          "ak.ak":
            "hOBiQwZUYzCg5VSAfCLimQ==nvKdoxtnUblrW5H1XJGXcb+hTSqhriG75G/g4/m9MaMH6qZgkNept6bQRvXOSbYescTbFJwtKUYtisJUiP43NIXZZAZdvacfX6DYPSxMFO0o/38n7/Dl/ZHkPV4Os+ZLIyccqGsQ/JQ0LsPDtEYTntp7/Pp9dyyvYMJWSU7DTrrCk5X0nG8bwK96PPHWL/On1Hu1ObuG4ot30ClnZQPnxfYLkP4AkHKz1U4iqPKJd5oqfg1MokQwv4U9hz9PgOuSPhYGs1KhueNZdZPOQi+bsYHFnACBKLoV+RB2qKqNGjkwMlpdpjcPUaDqCKlBboTUFsxc1t2XNNO239qBjSUdZBlhpEI0kxRG43hGTdeDNmAUUuoZWPFnZF1QS5/Dkswq9Z9dwvZTiN7QEK4AycgsFBkF1kWV2g2LMyJsfQVO7gw=",
          "ak.pv": "711",
          "ak.dpoabenc": "",
          "ak.tf": i,
        };
      if ("" !== t) _["ak.ruds"] = t;
      var o = {
        i: !1,
        av: function (e) {
          var t = "http.initiator";
          if (e && (!e[t] || "spa_hard" === e[t]))
            (_["ak.feo"] = void 0 !== a.aFeoApplied ? 1 : 0), BOOMR.addVar(_);
        },
        rv: function () {
          var a = [
            "ak.bpcip",
            "ak.cport",
            "ak.cr",
            "ak.csrc",
            "ak.gh",
            "ak.ipv",
            "errors/404.html",
            "ak.n",
            "ak.ol",
            "ak.proto",
            "ak.quicv",
            "ak.tlsv",
            "ak.0rtt",
            "ak.r",
            "ak.acc",
            "errors/404.html",
            "ak.tf",
          ];
          BOOMR.removeVar(a);
        },
      };
      BOOMR.plugins.AK = {
        akVars: _,
        akDNSPreFetchDomain: n,
        init: function () {
          if (!o.i) {
            var a = BOOMR.subscribe;
            a("before_beacon", o.av, null, null),
              a("onbeacon", o.rv, null, null),
              (o.i = !0);
          }
          return this;
        },
        is_complete: function () {
          return !0;
        },
      };
    }
  })();
})(window);
