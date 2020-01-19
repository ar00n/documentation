(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{183:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Upgrading the Panel is a relatively simple process. Below you will find a list of articles that will walk you through\nthe upgrade process for each version of the software.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("Whenever you are performing an upgrade you should be sure to place your Panel into maintenance mode. This will prevent\nusers from encountering unexpected errors and ensure everything can be upgraded before users being encountering\npotentially new features.")]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/panel/upgrade/0.6_to_0.7.html"}},[e._v("0.6.X to 0.7.16")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/panel/upgrade/0.7.html"}},[e._v("0.7.X series")]),e._v(" "),a("Badge",{attrs:{text:"current",vertical:"middle"}})],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/panel/upgrade/0.8.html"}},[e._v("0.8.X series")]),e._v(" "),a("Badge",{attrs:{text:"alpha release",vertical:"middle"}})],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"maintenance-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Maintenance Mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[this._v("# Put the Panel into maintenance mode and deny user access")]),this._v("\nphp artisan down\n\n"),t("span",{attrs:{class:"token comment"}},[this._v("# Bring the Panel back up to receive connections.")]),this._v("\nphp artisan up\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"restarting-queue-workers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restarting-queue-workers","aria-hidden":"true"}},[this._v("#")]),this._v(" Restarting Queue Workers")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After "),t("em",[this._v("every")]),this._v(" update you should restart the queue worker to ensure that the new code is loaded in and used.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("php artisan queue:restart\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"version-specific-guides"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version-specific-guides","aria-hidden":"true"}},[this._v("#")]),this._v(" Version Specific Guides")])}],!1,null,null,null);t.default=s.exports}}]);