/**
 * bootbox.js v4.1.0
 *
 * http://bootboxjs.com/license.txt
 */
/**
 * bootbox.js [v4.1.0]
 *
 * http://bootboxjs.com/license.txt
 */
// @see https://github.com/makeusabrew/bootbox/issues/71
window.bootbox=window.bootbox||(function init(i,c){var m={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>"}};var q=i("body");var f={locale:"en",backdrop:true,animate:true,className:null,closeButton:true,show:true};var h={};function p(s){var r=a[f.locale];return r?r[s]:a.en[s]}function d(t,s,u){t.preventDefault();var r=i.isFunction(u)&&u(t)===false;if(!r){s.modal("hide")}}function j(u){var r,s=0;for(r in u){s++}return s}function k(t,s){var r=0;i.each(t,function(u,v){s(u,v,r++)})}function b(r){var t;var s;if(typeof r!=="object"){throw new Error("Please supply an object of options")}if(!r.message){throw new Error("Please specify a message")}r=i.extend({},f,r);if(!r.buttons){r.buttons={}}r.backdrop=r.backdrop?"static":false;t=r.buttons;s=j(t);k(t,function(w,v,u){if(i.isFunction(v)){v=t[w]={callback:v}}if(i.type(v)!=="object"){throw new Error("button with key "+w+" must be an object")}if(!v.label){v.label=w}if(!v.className){if(s<=2&&u===s-1){v.className="btn-primary"}else{v.className="btn-default"}}});return r}function g(s,t){var u=s.length;var r={};if(u<1||u>2){throw new Error("Invalid argument length")}if(u===2||typeof s[0]==="string"){r[t[0]]=s[0];r[t[1]]=s[1]}else{r=s[0]}return r}function l(t,r,s){return i.extend(true,{},t,g(r,s))}function e(u,v,t,s){var r={className:"bootbox-"+u,buttons:o.apply(null,v)};return n(l(r,s,t),v)}function o(){var v={};for(var t=0,r=arguments.length;t<r;t++){var u=arguments[t];var s=u.toLowerCase();var w=u.toUpperCase();v[s]={label:p(w)}}return v}function n(r,t){var s={};k(t,function(u,v){s[v]=true});k(r.buttons,function(u){if(s[u]===c){throw new Error("button key "+u+" is not allowed (options are "+t.join("\n")+")")}});return r}h.alert=function(){var r;r=e("alert",["ok"],["message","callback"],arguments);if(r.callback&&!i.isFunction(r.callback)){throw new Error("alert requires callback property to be a function when provided")}r.buttons.ok.callback=r.onEscape=function(){if(i.isFunction(r.callback)){return r.callback()}return true};return h.dialog(r)};h.confirm=function(){var r;r=e("confirm",["cancel","confirm"],["message","callback"],arguments);r.buttons.cancel.callback=r.onEscape=function(){return r.callback(false)};r.buttons.confirm.callback=function(){return r.callback(true)};if(!i.isFunction(r.callback)){throw new Error("confirm requires a callback")}return h.dialog(r)};h.prompt=function(){var z;var u;var w;var r;var x;var t;var v;r=i(m.form);u={className:"bootbox-prompt",buttons:o("cancel","confirm"),value:"",inputType:"text"};z=n(l(u,arguments,["title","callback"]),["cancel","confirm"]);t=(z.show===c)?true:z.show;z.message=r;z.buttons.cancel.callback=z.onEscape=function(){return z.callback(null)};z.buttons.confirm.callback=function(){var B;switch(z.inputType){case"text":case"email":case"select":B=x.val();break;case"checkbox":var A=x.find("input:checked");B=[];k(A,function(C,D){B.push(i(D).val())});break}return z.callback(B)};z.show=false;if(!z.title){throw new Error("prompt requires a title")}if(!i.isFunction(z.callback)){throw new Error("prompt requires a callback")}if(!m.inputs[z.inputType]){throw new Error("invalid prompt type")}x=i(m.inputs[z.inputType]);switch(z.inputType){case"text":case"email":x.val(z.value);break;case"select":var s={};v=z.inputOptions||[];if(!v.length){throw new Error("prompt with select requires options")}k(v,function(A,B){var C=x;if(B.value===c||B.text===c){throw new Error("given options in wrong format")}if(B.group){if(!s[B.group]){s[B.group]=i("<optgroup/>").attr("label",B.group)}C=s[B.group]}C.append("<option value='"+B.value+"'>"+B.text+"</option>")});k(s,function(A,B){x.append(B)});x.val(z.value);break;case"checkbox":var y=i.isArray(z.value)?z.value:[z.value];v=z.inputOptions||[];if(!v.length){throw new Error("prompt with checkbox requires options")}if(!v[0].value||!v[0].text){throw new Error("given options in wrong format")}x=i("<div/>");k(v,function(A,B){var C=i(m.inputs[z.inputType]);C.find("input").attr("value",B.value);C.find("label").append(B.text);k(y,function(D,E){if(E===B.value){C.find("input").prop("checked",true)}});x.append(C)});break}if(z.placeholder){x.attr("placeholder",z.placeholder)}r.append(x);r.on("submit",function(A){A.preventDefault();w.find(".btn-primary").click()});w=h.dialog(z);w.off("shown.bs.modal");w.on("shown.bs.modal",function(){x.focus()});if(t===true){w.modal("show")}return w};h.dialog=function(t){t=b(t);var u=i(m.dialog);var r=u.find(".modal-body");var x=t.buttons;var v="";var w={onEscape:t.onEscape};k(x,function(z,y){v+="<button data-bb-handler='"+z+"' type='button' class='btn "+y.className+"'>"+y.label+"</button>";w[z]=y.callback});r.find(".bootbox-body").html(t.message);if(t.animate===true){u.addClass("fade")}if(t.className){u.addClass(t.className)}if(t.title){r.before(m.header)}if(t.closeButton){var s=i(m.closeButton);if(t.title){u.find(".modal-header").prepend(s)}else{s.css("margin-top","-10px").prependTo(r)}}if(t.title){u.find(".modal-title").html(t.title)}if(v.length){r.after(m.footer);u.find(".modal-footer").html(v)}u.on("hidden.bs.modal",function(y){if(y.target===this){u.remove()}});u.on("shown.bs.modal",function(){u.find(".btn-primary:first").focus()});u.on("escape.close.bb",function(y){if(w.onEscape){d(y,u,w.onEscape)}});u.on("click",".modal-footer button",function(z){var y=i(this).data("bb-handler");d(z,u,w[y])});u.on("click",".bootbox-close-button",function(y){d(y,u,w.onEscape)});u.on("keyup",function(y){if(y.which===27){u.trigger("escape.close.bb")}});q.append(u);u.modal({backdrop:t.backdrop,keyboard:false,show:false});if(t.show){u.modal("show")}return u};h.setDefaults=function(){var r={};if(arguments.length===2){r[arguments[0]]=arguments[1]}else{r=arguments[0]}i.extend(f,r)};h.hideAll=function(){i(".bootbox").modal("hide")};var a={br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};h.init=function(r){window.bootbox=init(r||i)};return h}(window.jQuery));