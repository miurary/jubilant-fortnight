(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['insertPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post-result\" event-day=\""
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "\" event-month=\""
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "\" event-year=\""
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "\" event-seriousness=\""
    + alias4(((helper = (helper = helpers.seriousness || (depth0 != null ? depth0.seriousness : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seriousness","hash":{},"data":data}) : helper)))
    + "\">\r\n  <div class=\"result-contents\">\r\n    <div class=\"result-info-container\">\r\n      <a href=\"#\" class=\"result-poster\">"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + ": "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - Seriousness: "
    + alias4(((helper = (helper = helpers.seriousness || (depth0 != null ? depth0.seriousness : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seriousness","hash":{},"data":data}) : helper)))
    + "</a> <span class=\"result-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();