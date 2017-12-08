function maskDirectiveAsDate(e,t){return maskDirective(e,t,"as-date")}function maskDirectiveMask(e,t){return maskDirective(e,t,"mask")}function maskDirective(e,t,i){return{restrict:"A",require:"?ngModel",link:function(e,n,a,r){if("as-date"!=i||void 0===a.mask){var l=$(n),o=l.attr("type");if("checkbox"!=o&&"password"!=o){l.data("type",o),l.attr("type","text"),r&&(r.$formatters=[],r.$parsers=[]),void 0!==a.asDate&&"text"==o&&(o="date");var s=!1,d=a.mask||a.format;d=d?parseMaskType(d,t):parseMaskType(o,t),d.endsWith(";0")&&(s=!0);var c=d.replace(";1","").replace(";0","").trim();if(void 0!=c&&0!=c.length)if("date"==o||"datetime"==o||"datetime-local"==o||"month"==o||"time"==o||"time-local"==o||"week"==o){var p={format:c,locale:t.use(),showTodayButton:!0,useStrict:!0,tooltips:{today:t.instant("DatePicker.today"),clear:t.instant("DatePicker.clear"),close:t.instant("DatePicker.close"),selectMonth:t.instant("DatePicker.selectMonth"),prevMonth:t.instant("DatePicker.prevMonth"),nextMonth:t.instant("DatePicker.nextMonth"),selectYear:t.instant("DatePicker.selectYear"),prevYear:t.instant("DatePicker.prevYear"),nextYear:t.instant("DatePicker.nextYear"),selectDecade:t.instant("DatePicker.selectDecade"),prevDecade:t.instant("DatePicker.prevDecade"),nextDecade:t.instant("DatePicker.nextDecade"),prevCentury:t.instant("DatePicker.prevCentury"),nextCentury:t.instant("DatePicker.nextCentury")}};"DD/MM/YYYY"!=c&&"MM/DD/YYYY"!=c&&(p.sideBySide=!0),l.wrap('<div style="position:relative"></div>'),l.datetimepicker(p);var u="date"==o||"datetime"==o||"time"==o;l.on("dp.change",function(){$(this).is(":visible")&&($(this).trigger("change"),e.$apply(function(){var e=l.val(),t=null;t=u?moment.utc(e,c):moment(e,c),t.isValid()&&r&&r.$setViewValue(t.toDate())}))}),r&&(r.$formatters.push(function(e){if(e){var t=null;return t=u?moment.utc(e):moment(e),t.format(c)}return null}),r.$parsers.push(function(e){if(e){var t=null;return t=u?moment.utc(e,c):moment(e,c),t.toDate()}return null}))}else if("number"==o||"money"==o||"integer"==o){s=!0,!1;var g=c.trim().replace(/\./g,"").replace(/\,/g,"").replace(/#/g,"").replace(/0/g,"").replace(/9/g,""),m="",f="",v="",h=",",M=0;c.startsWith(g)?m=g:c.endsWith(g)&&(f=g);var y=c.trim().replace(m,"").replace(f,"").trim();y.startsWith("#.")?v=".":y.startsWith("#,")&&(v=",");var D=null;if(-1!=y.indexOf(",0")?(h=",",D=",0"):-1!=y.indexOf(".0")&&(h=".",D=".0"),null!=D){var k=y.substring(y.indexOf(D)+1);M=k.length}var b="numeric";0==M&&(b="integer");var x={rightAlign:"money"==o,unmaskAsNumber:!0,allowMinus:!0,prefix:m,suffix:f,radixPoint:h,digits:M};v&&(x.autoGroup=!0,x.groupSeparator=v),$(n).inputmask(b,x),r&&(r.$formatters.push(function(e){return void 0!=e&&null!=e&&""!=e?format(c,e):null}),r.$parsers.push(function(e){if(void 0!=e&&null!=e&&""!=e){var t=l.inputmask("unmaskedvalue");if(""!=t)return t}return null}))}else if("text"==o||"tel"==o){var p={};a.maskPlaceholder&&(p.placeholder=a.maskPlaceholder),l.mask(c,p),s&&r&&(r.$formatters.push(function(e){return e?l.masked(e):null}),r.$parsers.push(function(e){return e?l.cleanVal():null}))}}}}}}function parseMaskType(e,t){return"datetime"==e||"datetime-local"==e?"Format.DateTime"==(e=t.instant("Format.DateTime"))&&(e="DD/MM/YYYY HH:mm:ss"):"date"==e?"Format.Date"==(e=t.instant("Format.Date"))&&(e="DD/MM/YYYY"):"time"==e||"time-local"==e?"Format.Hour"==(e=t.instant("Format.Hour"))&&(e="HH:mm:ss"):"month"==e?e="MMMM":"number"==e?"Format.Decimal"==(e=t.instant("Format.Decimal"))&&(e="0,00"):"money"==e?"Format.Money"==(e=t.instant("Format.Money"))&&(e="#.#00,00"):"integer"==e?e="0":"week"==e?e="dddd":"tel"==e?e="(00) 00000-0000;0":"text"==e&&(e=""),e}maskDirectiveAsDate.$inject=["$compile","$translate"],maskDirectiveMask.$inject=["$compile","$translate"],function($app){var isoDate=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,patternFormat=function(e){return e?$(e).attr("format")||"DD/MM/YYYY":"DD/MM/YYYY"},parsePermission=function(e){var t={visible:{public:!0},enabled:{public:!0}};if(e)for(var i=e.toLowerCase().trim().split(","),n=0;n<i.length;n++){var a=i[n].trim();if(a){var r=a.split(":");if(2==r.length){var l=r[0].trim(),o=r[1].trim();if(o){for(var s=o.split(";"),d={},c=0;c<s.length;c++){var p=s[c].trim();p&&(d[p]=!0)}t[l]=d}}}}return t};app.directive("asDate",maskDirectiveAsDate).directive("ngDestroy",function(){return{restrict:"A",link:function(scope,element,attrs,ctrl){element.on("$destroy",function(){attrs.ngDestroy&&attrs.ngDestroy.length>0&&(attrs.ngDestroy.indexOf("app.")>-1||attrs.ngDestroy.indexOf("blockly.")>-1?scope.$eval(attrs.ngDestroy):eval(attrs.ngDestroy))})}}}).directive("dynamicImage",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@",width:"@",height:"@",style:"@",class:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel=""),e.width||(e.width="128"),e.height||(e.height="128"),e.style||(e.style=""),e.class||(e.class=""),this.containsLetter(e.width)||(e.width+="px"),this.containsLetter(e.height)||(e.height+="px")},containsLetter:function(e){for(var t,i=0;i<e.length;i++){t=!0;for(var n=0;n<10;n++)parseInt(e[i])==n&&(t=!1);if(t)break}return t},link:function(t,i,n){this.init(t);var a=t,r=n.ngRequired&&"true"==n.ngRequired?"required":"";i.append('<div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                                  <img class="$class$" style="$style$; height: $height$; width: $width$;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectImg.svg" class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" accept="image/*;capture=camera">                                  <div class="remove btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                                    <span class="glyphicon glyphicon-remove"></span>                                  </div>                                  <div class="btn btn-info btn-xs start-camera-button" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                                    <span class="glyphicon glyphicon-facetime-video"></span>                                  </div>                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important; margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                </div>'.split("$height$").join(a.height).split("$width$").join(a.width).split("$ngModel$").join(a.ngModel).split("$style$").join(a.style).split("$class$").join(a.class).split("$required$").join(r)),e(i)(i.scope())}}}]).directive("dynamicImage",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,i,n){var a=n.ngRequired&&"true"==n.ngRequired?"required":"",r=i.html(),l='<div ngf-drop="" ngf-drag-over-class="dragover">                   <img style="width: 100%;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                   <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important; margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                   <div class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" ngf-pattern="\'image/*\'" ngf-max-size="$maxFileSize$">                     $userHtml$                   </div>                   <div class="remove-image-button btn btn-danger btn-xs" ng-if="$ngModel$" ng-click="$ngModel$=null">                     <span class="glyphicon glyphicon-remove"></span>                   </div>                   <div class="btn btn-info btn-xs start-camera-button-attribute" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                     <span class="glyphicon glyphicon-facetime-video"></span>                   </div>                 </div>',o="";n.maxFileSize&&(o=n.maxFileSize),l=$(l.split("$ngModel$").join(n.ngModel).split("$required$").join(a).split("$userHtml$").join(r).split("$maxFileSize$").join(o)),i.html(l),e(l)(i.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"E",replace:!0,scope:{ngModel:"@"},require:"ngModel",template:"<div></div>",init:function(e){e.ngModel||(e.ngModel="")},link:function(t,i,n){this.init(t);var a=t,r=n.ngRequired&&"true"==n.ngRequired?"required":"",l=a.ngModel.split("."),o=l[0],s=l[l.length-1],d=Math.floor(1e3*Math.random()+20);i.append('                                <div ng-show="!$ngModel$">                                  <input ng-if="!$ngModel$" autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="top: inherit !important;margin-left: 85px !important;margin-top: 50px !important;" type=text ng-model="$ngModel$" $required$>                                  <div class="form-group upload-image-component" ngf-drop="" ngf-drag-over-class="dragover">                                     <img class="ng-scope" style="height: 128px; width: 128px;" ng-if="!$ngModel$" data-ng-src="/plugins/cronapp-framework-js/img/selectFile.png" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" accept="*">                                    <progress id="uploadprogress$number$" max="100" value="0" style="position: absolute; width: 128px; margin-top: -134px;">0</progress>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="form-group upload-image-component">                                   <div class="btn btn-danger btn-xs ng-scope" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="glyphicon glyphicon-remove"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntity($datasource$,\'$field$\')">download</a>                                   </div>                                 </div>                                 '.split("$ngModel$").join(a.ngModel).split("$datasource$").join(o).split("$field$").join(s).split("$number$").join(d).split("$required$").join(r)),e(i)(i.scope())}}}]).directive("pwCheck",[function(){"use strict";return{require:"ngModel",link:function(e,t,i,n){var a="#"+i.pwCheck;t.add(a).on("keyup",function(){e.$apply(function(){var e=t.val()===$(a).val();n.$setValidity("pwmatch",e)})})}}}]).directive("valid",function(){return{require:"^ngModel",restrict:"A",link:function(e,t,i,n){var a={cpf:CPF,cnpj:CNPJ};n.$validators[i.valid]=function(e,n){var r=e||n,l=a[i.valid].isValid(r);return l?t[0].setCustomValidity(""):t[0].setCustomValidity(t[0].dataset.errorMessage),l||!r}}}}).directive("cronappSecurity",function(){return{restrict:"A",link:function(e,t,i){var n=[];e.session&&e.session.roles&&(n=e.session.roles.toLowerCase().split(","));for(var a=parsePermission(i.cronappSecurity),r=!1,l=!1,o=0;o<n.length;o++){var s=n[o].trim();s&&(a.visible[s]&&(r=!0),a.enabled[s]&&(l=!0))}r||$(t).hide(),l||$(t).find("*").addBack().attr("disabled",!0)}}}).directive("uiSelect",["$compile",function(e){return{restrict:"E",require:"ngModel",link:function(t,i,n,a){if(void 0!=n.required||"true"===n.ngRequired){$(i).append('<input autocomplete="off" tabindex="-1" class="uiSelectRequired ui-select-offscreen" style="left: 50%!important; top: 100%!important;" type=text ng-model="'+n.ngModel+'" required>');var r=$(i).find("input.uiSelectRequired");e(r)(i.scope())}}}}]).filter("mask",["$translate",function(e){return function(t,i){if(!(i=parseMaskType(i,e)))return t;if(i=i.replace(";1","").replace(";0","").trim(),"string"==typeof t&&t.match(isoDate))return moment.utc(t).format(i);if(t instanceof Date)return moment.utc(t).format(i);if("number"==typeof t)return format(i,t);if(void 0!=t&&null!=t&&""!=t){var n=$('<input type="text">');return n.mask(i),n.masked(t)}return t}}]).directive("mask",maskDirectiveMask).directive("cronappFilter",function(){return{restrict:"A",require:"?ngModel",setFilterInButton:function(e,t,i){var n=e.closest("fieldset");if(n){var a=n.find("button[cronapp-filter]");if(a){var r=a.data("filters");r||(r=[]);var l=-1,o=t.split(i)[0];$(r).each(function(e){this.startsWith(o)&&(l=e)}),l>-1&&r.splice(l,1),r.push(t),a.data("filters",r)}}},inputBehavior:function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){var filterTemplate="",filtersSplited=attrs.cronappFilter.split(";");$(filtersSplited).each(function(){this.length>0&&(filterTemplate+="text"==typeElement?this+"@"+operator+"%{value}%;":this+operator+"{value};")}),filterTemplate=filterTemplate.length>0?filterTemplate.substr(0,filterTemplate.length-1):"%{value}%";var selfDirective=this;ngModelCtrl?scope.$watch(attrs.ngModel,function(newVal,oldVal){if(!angular.equals(newVal,oldVal)){var eType=$element.data("type")||$element.attr("type"),value=ngModelCtrl.$modelValue,datasource=eval(attrs.crnDatasource);value instanceof Date?(value=value.toISOString(),value+="date"==eType?"@@date":"time"==eType||"time-local"==eType?"@@time":"@@datetime"):"number"==typeof value?value+="@@number":"boolean"==typeof value&&(value+="@@boolean");var bindedFilter=filterTemplate.split("{value}").join(value);0==ngModelCtrl.$viewValue.length&&(bindedFilter=""),autopost?datasource.search(bindedFilter):selfDirective.setFilterInButton($element,bindedFilter,operator)}}):"text"==typeElement?$element.on("keyup",function(){var datasource=eval(attrs.crnDatasource),value=void 0;value=ngModelCtrl&&void 0!=ngModelCtrl?ngModelCtrl.$viewValue:this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==this.value.length&&(bindedFilter=""),autopost?datasource.search(bindedFilter):selfDirective.setFilterInButton($element,bindedFilter,operator)}):$element.on("change",function(){var datasource=eval(attrs.crnDatasource),value=void 0,typeElement=$(this).attr("type");if(void 0!=attrs.asDate&&(typeElement="date"),ngModelCtrl&&void 0!=ngModelCtrl)value=ngModelCtrl.$viewValue;else if("checkbox"==typeElement)value=$(this).is(":checked");else if("date"==typeElement){if(value=this.value,this.value.length>0){var momentDate=moment(this.value,patternFormat(this));value=momentDate.toDate().toISOString()}}else value=this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==value.toString().length&&(bindedFilter=""),autopost?datasource.search(bindedFilter):selfDirective.setFilterInButton($element,bindedFilter,operator)})},buttonBehavior:function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){$element.on("click",function(){var $this=$(this),datasourceName="";datasourceName=attrs.crnDatasource?attrs.crnDatasource:$element.parent().attr("crn-datasource");var filters=$this.data("filters");if(datasourceName&&datasourceName.length>0&&filters&&filters.length>0){var bindedFilter=filters.join(";"),datasourceToFilter=eval(datasourceName);datasourceToFilter.search(bindedFilter)}})},link:function(e,t,i,n){var a=$(t),r=a.data("type")||a.attr("type");void 0!=i.asDate&&(r="date");var l="=";i.cronappFilterOperator&&i.cronappFilterOperator.length>0&&(l=i.cronappFilterOperator);var o=!0;i.cronappFilterAutopost&&"false"==i.cronappFilterAutopost&&(o=!1),"INPUT"==a[0].tagName?this.inputBehavior(e,t,i,n,a,r,l,o):this.buttonBehavior(e,t,i,n,a,r,l,o)}}})}(app);