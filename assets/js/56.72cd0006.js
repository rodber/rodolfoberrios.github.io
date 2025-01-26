(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{383:function(t,a,e){"use strict";e.r(a);var s=e(6),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("New from Chevere is the "),a("a",{attrs:{href:"https://chevere.org/packages/parameter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameter"),a("OutboundLink")],1),t._v(" package. This software provides a library around parameter-argument, with extra rules which can be used for both validation and to expose I/O schemas.")]),t._v(" "),a("p",[t._v("The package source is available at "),a("a",{attrs:{href:"https://github.com/chevere/parameter",target:"_blank",rel:"noopener noreferrer"}},[t._v("chevere/parameter"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"what-it-does"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-it-does"}},[t._v("#")]),t._v(" What it does?")]),t._v(" "),a("p",[t._v("Parameter enables to create dynamic parameters of any type with extra rules.")]),t._v(" "),a("p",[t._v("For example, an integer of minimum value 10:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token argument-name"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exception if $var < 10")]),t._v("\n")])])]),a("p",[t._v("In function or method parameters you can use attributes to define validation rules for parameters and return value.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("FloatAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("IntAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Attributes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ReturnAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("returnAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Chevere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Parameter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("validated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("#[")]),a("span",{pre:!0,attrs:{class:"token attribute-content"}},[a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("ReturnAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("FloatAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("wageWeekWA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("#[")]),a("span",{pre:!0,attrs:{class:"token attribute-content"}},[a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("IntAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1628")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("]")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("#[")]),a("span",{pre:!0,attrs:{class:"token attribute-content"}},[a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("FloatAttr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attribute-class-name class-name"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("]")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hours")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cents")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hours")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'wageWeekWA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hours")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Validation can be triggered using "),a("code",[t._v("validated")]),t._v(" (example above), "),a("a",{attrs:{href:"https://chevere.org/packages/parameter.html#inline-usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("inline"),a("OutboundLink")],1),t._v(" and/or "),a("a",{attrs:{href:"https://chevere.org/packages/parameter.html#attribute-delegated-validation",target:"_blank",rel:"noopener noreferrer"}},[t._v("delegated"),a("OutboundLink")],1),t._v(" to a caller wrapper. Parameter provides helpers to access rules for both parameters and return value to ease wiring process.")]),t._v(" "),a("p",[t._v("Rules defined by each parameter provide a human-readable schema which allows to expose the validation criteria.")]),t._v(" "),a("h2",{attrs:{id:"supported-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-types"}},[t._v("#")]),t._v(" Supported types")]),t._v(" "),a("p",[t._v("Parameter supports built-in types including scalar (bool, int, string, float), null, array, object, union composite type and both mixed and iterable type alias.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Parameter offers introspection via helpers and schema definition which enables to understand and export parameter rules. The validation rules defined using this package can be read and re-used for multiple purposes.")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://chevere.org/packages/action",target:"_blank",rel:"noopener noreferrer"}},[t._v("Action"),a("OutboundLink")],1),t._v(" package wraps Parameter to offer a convention to work with. Action is the building block for "),a("a",{attrs:{href:"https://chevere.org/packages/workflow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Workflow"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://chevere.org/packages/http",target:"_blank",rel:"noopener noreferrer"}},[t._v("Http"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Parameter introspection is used at "),a("a",{attrs:{href:"https://chevere.org/packages/router",target:"_blank",rel:"noopener noreferrer"}},[t._v("Router"),a("OutboundLink")],1),t._v(" to generate path regex by reading attribute rules on Http Controller path parameters. Parameter schemas are used at "),a("a",{attrs:{href:"https://chevere.org/packages/schwager",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schwager"),a("OutboundLink")],1),t._v(" which reads Http Controller attributes and expose that schema. "),a("a",{attrs:{href:"https://github.com/chevere/schwager-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Schwager HTML"),a("OutboundLink")],1),t._v(" also uses parameter schemas.")]),t._v(" "),a("p",[t._v("I'm writing another Parameter-based package which generates parameters from a MySQL database schema. The concept is to describe MySQL tables using "),a("a",{attrs:{href:"https://chevere.org/packages/parameter#array",target:"_blank",rel:"noopener noreferrer"}},[t._v("ArrayParameter"),a("OutboundLink")],1),t._v(", enabling to validate data retrieval and provide schema introspection for any set of columns.")]),t._v(" "),a("h2",{attrs:{id:"wrapping-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[t._v("#")]),t._v(" Wrapping up")]),t._v(" "),a("p",[t._v("Parameter plays at low-level and is a flexible system which can be used to build anything on top of it. From simple wrappers up to full flagged conventions, it enables to build a solid foundation for your validation needs with a neat syntax backed on PHP's newest features introduced onwards PHP 8, like named arguments and attributes.")]),t._v(" "),a("p",[t._v("I'm looking forward to see what else I can built on top of it.")])])}),[],!1,null,null,null);a.default=r.exports}}]);