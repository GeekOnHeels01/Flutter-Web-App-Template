define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const navigation_bar = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 32,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 27,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 27,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/navigation_bar/navigation_bar.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  let C10;
  let C9;
  let C8;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C28;
  let C26;
  let C25;
  navigation_bar.NavigationBar = class NavigationBar extends framework.StatelessWidget {
    build(context) {
      return new container.Container.new({height: 100.0, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 80.0, width: 150.0, child: new image.Image.asset("assets/logo.png", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new navigation_bar._NavBarItem.new("A link", {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new basic.SizedBox.new({width: 60.0, $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new navigation_bar._NavBarItem.new("About", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25});
    }
  };
  (navigation_bar.NavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    navigation_bar.NavigationBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navigation_bar.NavigationBar.prototype;
  dart.addTypeTests(navigation_bar.NavigationBar);
  dart.setMethodSignature(navigation_bar.NavigationBar, () => ({
    __proto__: dart.getMethods(navigation_bar.NavigationBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navigation_bar.NavigationBar, "package:the_basics/widgets/navigation_bar/navigation_bar.dart");
  let C31;
  let C32;
  let C30;
  let C29;
  const title$ = dart.privateName(navigation_bar, "_NavBarItem.title");
  navigation_bar._NavBarItem = class _NavBarItem extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new text.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (navigation_bar._NavBarItem.new = function(title, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    navigation_bar._NavBarItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navigation_bar._NavBarItem.prototype;
  dart.addTypeTests(navigation_bar._NavBarItem);
  dart.setMethodSignature(navigation_bar._NavBarItem, () => ({
    __proto__: dart.getMethods(navigation_bar._NavBarItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navigation_bar._NavBarItem, "package:the_basics/widgets/navigation_bar/navigation_bar.dart");
  dart.setFieldSignature(navigation_bar._NavBarItem, () => ({
    __proto__: dart.getFields(navigation_bar._NavBarItem.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/the_basics/widgets/navigation_bar/navigation_bar", {
    "package:the_basics/widgets/navigation_bar/navigation_bar.dart": navigation_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigation_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,sCACG,cACD,sCACgC,+CACnB,sBAChB,gCACU,aACD,cACM,sBAAM,kIAErB,iCAC6B,iCACT,sBAChB,mCAAY,kEACZ,+BACS,+DAET,mCAAY;IAMxB;;;QA3ByB;;AAAQ,gEAAW,GAAG;;EAAC;;;;;;;;;;;;;IA+BnC;;;;;;UAIa;AACxB,YAAO,mBACL,oBACO,wCAAoB;IAE/B;;6CARuB;;;AAAjB;;EAAuB","file":"navigation_bar.ddc.js"}');
  // Exports:
  return {
    widgets__navigation_bar__navigation_bar: navigation_bar
  };
});

//# sourceMappingURL=navigation_bar.ddc.js.map
