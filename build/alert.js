webpackJsonp([3,0],{0:function(e,t,n){e.exports=n(78)},78:function(e,t,n){var r=this&&this.__decorate||function(e,t,n,r){if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)return Reflect.decorate(e,t,n,r);switch(arguments.length){case 2:return e.reduceRight(function(e,t){return t&&t(e)||e},t);case 3:return e.reduceRight(function(e,r){return void(r&&r(t,n))},void 0);case 4:return e.reduceRight(function(e,r){return r&&r(t,n,e)||e},r)}},i=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},o=n(10),s=function(){function e(e){this.el=e,this.classes=[],this.close=new o.EventEmitter,this.closeable=e.nativeElement.getAttribute("(close)")}return e.prototype.onInit=function(){if(this.type=this.type||"warning",this.classes[0]="alert-"+(this.type||"warning"),this.closeable?this.classes[1]="alert-dismissible":this.classes.length=1,this.dismissOnTimeout){var e=this.onClose.bind(this);setTimeout(e,this.dismissOnTimeout)}},e.prototype.onClose=function(e){this.close.next(e),this.closed=!0},e=r([o.Component({selector:"alert",properties:["type","dismissOnTimeout: dismiss-on-timeout"],events:["close"],lifecycle:[o.LifecycleEvent.onInit]}),o.View({template:'\n  <div class="alert" role="alert" [class]="classes" *ng-if="!closed">\n    <button *ng-if="closeable" type="button" class="close" (^click)="onClose($event)">\n      <span aria-hidden="true">&times;</span>\n      <span class="sr-only">Close</span>\n    </button>\n    <ng-content></ng-content>\n  </div>\n  ',directives:[o.NgIf,o.CSSClass]}),i("design:paramtypes",[o.ElementRef])],e)}();t.Alert=s}});
//# sourceMappingURL=alert.js.map