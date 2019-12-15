define(['dart_sdk', 'packages/flutter/material', 'packages/the_basics/widgets/centered_view/centered_view', 'packages/flutter/src/widgets/actions', 'packages/the_basics/widgets/navigation_bar/navigation_bar', 'packages/the_basics/widgets/contain_details/contain_details', 'packages/the_basics/widgets/call_to_action/call_to_action'], function(dart_sdk, packages__flutter__material, packages__the_basics__widgets__centered_view__centered_view, packages__flutter__src__widgets__actions, packages__the_basics__widgets__navigation_bar__navigation_bar, packages__the_basics__widgets__contain_details__contain_details, packages__the_basics__widgets__call_to_action__call_to_action) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const colors = packages__flutter__material.src__material__colors;
  const centered_view = packages__the_basics__widgets__centered_view__centered_view.widgets__centered_view__centered_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigation_bar = packages__the_basics__widgets__navigation_bar__navigation_bar.widgets__navigation_bar__navigation_bar;
  const contain_details = packages__the_basics__widgets__contain_details__contain_details.widgets__contain_details__contain_details;
  const call_to_action = packages__the_basics__widgets__call_to_action__call_to_action.widgets__call_to_action__call_to_action;
  const home_view = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 43,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/views/home/home_view.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C25;
  let C24;
  home_view.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new centered_view.CenteredView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new navigation_bar.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new contain_details.ContainDetails.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), new basic.Expanded.new({child: new basic.Center.new({child: new call_to_action.CallToAction.new("a simple botton", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (home_view.HomeView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home_view.HomeView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_view.HomeView.prototype;
  dart.addTypeTests(home_view.HomeView);
  dart.setMethodSignature(home_view.HomeView, () => ({
    __proto__: dart.getMethods(home_view.HomeView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_view.HomeView, "package:the_basics/views/home/home_view.dart");
  dart.trackLibraries("packages/the_basics/views/home/home_view", {
    "package:the_basics/views/home/home_view.dart": home_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,6CACmB,2BAClB,2CACG,gCACa,sBAChB,6FACA,+BACS,6BACa,sBAChB,+FACA,+BACS,6BACE,oCAAa;IAUxC;;;QA1BoB;;AAAQ,sDAAW,GAAG;;EAAC","file":"home_view.ddc.js"}');
  // Exports:
  return {
    views__home__home_view: home_view
  };
});

//# sourceMappingURL=home_view.ddc.js.map
