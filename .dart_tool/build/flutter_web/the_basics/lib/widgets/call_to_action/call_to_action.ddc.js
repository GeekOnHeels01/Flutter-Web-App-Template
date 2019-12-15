define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const colors = packages__flutter__material.src__material__colors;
  const call_to_action = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 60,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 60
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/call_to_action/call_to_action.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 9,
        [_Location_file]: "org-dartlang-app:///packages/the_basics/widgets/call_to_action/call_to_action.dart"
      });
    }
  });
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  const title$ = dart.privateName(call_to_action, "CallToAction.title");
  call_to_action.CallToAction = class CallToAction extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      return new container.Container.new({padding: C0 || CT.C0, child: new text.Text.new(this.title, {style: new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.w800, color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.fromARGB(255, 31, 229, 146), borderRadius: new border_radius.BorderRadius.circular(5.0)}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (call_to_action.CallToAction.new = function(title, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    call_to_action.CallToAction.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = call_to_action.CallToAction.prototype;
  dart.addTypeTests(call_to_action.CallToAction);
  dart.setMethodSignature(call_to_action.CallToAction, () => ({
    __proto__: dart.getMethods(call_to_action.CallToAction.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(call_to_action.CallToAction, "package:the_basics/widgets/call_to_action/call_to_action.dart");
  dart.setFieldSignature(call_to_action.CallToAction, () => ({
    __proto__: dart.getFields(call_to_action.CallToAction.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/the_basics/widgets/call_to_action/call_to_action", {
    "package:the_basics/widgets/call_to_action/call_to_action.dart": call_to_action
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["call_to_action.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;UAIa;AACxB,YAAO,2DAEE,kBACL,oBACO,wCACK,kBACa,2BACT,0FAGN,6CACG,sBAAS,KAAK,IAAI,KAAK,oBACT,wCAAS;IAG1C;;8CAnBkB;;;AAAlB;;EAAwB","file":"call_to_action.ddc.js"}');
  // Exports:
  return {
    widgets__call_to_action__call_to_action: call_to_action
  };
});

//# sourceMappingURL=call_to_action.ddc.js.map
